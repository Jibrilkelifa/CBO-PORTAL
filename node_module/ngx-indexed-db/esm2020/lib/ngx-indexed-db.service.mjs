import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { openDatabase, CreateObjectStore, DeleteObjectStore } from './ngx-indexed-db';
import { createTransaction, optionsGenerator, validateBeforeTransaction } from '../utils';
import { CONFIG_TOKEN, DBMode } from './ngx-indexed-db.meta';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject, combineLatest, from } from 'rxjs';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class NgxIndexedDBService {
    constructor(dbConfigs, platformId) {
        this.dbConfigs = dbConfigs;
        this.platformId = platformId;
        this.defaultDatabaseName = null;
        this.isBrowser = isPlatformBrowser(this.platformId);
        if (this.isBrowser) {
            this.indexedDB =
                window.indexedDB ||
                    window.mozIndexedDB ||
                    window.webkitIndexedDB ||
                    window.msIndexedDB;
            const dbConfigs = Object.values(this.dbConfigs);
            const isOnlyConfig = dbConfigs.length === 1;
            for (const dbConfig of dbConfigs) {
                this.instanciateConfig(dbConfig, isOnlyConfig);
            }
        }
    }
    instanciateConfig(dbConfig, isOnlyConfig) {
        if (!dbConfig.name) {
            throw new Error('NgxIndexedDB: Please, provide the dbName in the configuration');
        }
        if (!dbConfig.version) {
            throw new Error('NgxIndexedDB: Please, provide the db version in the configuration');
        }
        if ((dbConfig.isDefault ?? false) && this.defaultDatabaseName) {
            // A default DB is already configured, throw an error
            throw new Error('NgxIndexedDB: Only one database can be set as default');
        }
        if (((dbConfig.isDefault ?? false) && !this.defaultDatabaseName) || isOnlyConfig) {
            this.defaultDatabaseName = dbConfig.name;
            this.selectedDb = dbConfig.name;
        }
        CreateObjectStore(this.indexedDB, dbConfig.name, dbConfig.version, dbConfig.objectStoresMeta, dbConfig.migrationFactory);
        openDatabase(this.indexedDB, dbConfig.name).then((db) => {
            if (db.version !== dbConfig.version) {
                if (process.env.NODE_ENV !== 'production') {
                    console.warn(`
            Your DB Config doesn't match the most recent version of the DB with name ${dbConfig.name}, please update it
            DB current version: ${db.version};
            Your configuration: ${dbConfig.version};
            `);
                    console.warn(`Using latest version ${db.version}`);
                }
                this.dbConfigs[dbConfig.name].version = db.version;
            }
        });
    }
    get dbConfig() {
        return this.dbConfigs[this.selectedDb];
    }
    /**
     * Selects a database for the current context.
     * @param {string} [databaseName=undefined] Database name to select.
     */
    selectDb(databaseName) {
        databaseName = databaseName ?? this.defaultDatabaseName;
        if (!databaseName) {
            // Name is still null, it means that there is no default database set
            // and the database name was not specified while calling a method
            throw new Error(`No database name specified and no default database set.`);
        }
        if (!Object.keys(this.dbConfigs).includes(databaseName)) {
            throw new Error(`NgxIndexedDB: Database ${databaseName} is not initialized.`);
        }
        this.selectedDb = databaseName;
    }
    /**
     * Allows to crate a new object store ad-hoc
     * @param storeName The name of the store to be created
     * @param migrationFactory The migration factory if exists
     */
    createObjectStore(storeSchema, migrationFactory) {
        const storeSchemas = [storeSchema];
        CreateObjectStore(this.indexedDB, this.dbConfig.name, ++this.dbConfig.version, storeSchemas, migrationFactory);
    }
    /**
     * Adds new entry in the store and returns its key
     * @param storeName The name of the store to add the item
     * @param value The entry to be added
     * @param key The optional key for the entry
     */
    add(storeName, value, key) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, (e) => obs.error(e)));
                const objectStore = transaction.objectStore(storeName);
                const request = Boolean(key) ? objectStore.add(value, key) : objectStore.add(value);
                request.onsuccess = async (evt) => {
                    const result = evt.target.result;
                    const getRequest = objectStore.get(result);
                    getRequest.onsuccess = (event) => {
                        obs.next(event.target.result);
                        obs.complete();
                    };
                    getRequest.onerror = (event) => {
                        obs.error(event);
                    };
                };
                request.onerror = (event) => {
                    obs.error(event);
                };
            })
                .catch((error) => obs.error(error));
        });
    }
    /**
     * Adds new entries in the store and returns its key
     * @param storeName The name of the store to add the item
     * @param values The entries to be added containing optional key attribute
     */
    bulkAdd(storeName, values) {
        const promises = new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, resolve, reject));
                const objectStore = transaction.objectStore(storeName);
                const results = values.map((value) => {
                    return new Promise((resolve1, reject1) => {
                        const key = value.key;
                        delete value.key;
                        const request = Boolean(key)
                            ? objectStore.add(value, key)
                            : objectStore.add(value);
                        request.onsuccess = (evt) => {
                            const result = evt.target.result;
                            resolve1(result);
                        };
                    });
                });
                resolve(Promise.all(results));
            })
                .catch((reason) => reject(reason));
        });
        return from(promises);
    }
    /**
     * Delete entries in the store and returns current entries in the store
     * @param storeName The name of the store to add the item
     * @param keys The keys to be deleted
     */
    bulkDelete(storeName, keys) {
        const promises = keys.map((key) => {
            return new Promise((resolve, reject) => {
                openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                    .then((db) => {
                    const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                    const objectStore = transaction.objectStore(storeName);
                    objectStore.delete(key);
                    transaction.oncomplete = () => {
                        this.getAll(storeName)
                            .pipe(take(1))
                            .subscribe((newValues) => {
                            resolve(newValues);
                        });
                    };
                })
                    .catch((reason) => reject(reason));
            });
        });
        return from(Promise.all(promises));
    }
    /**
     * Returns entry by key.
     * @param storeName The name of the store to query
     * @param key The entry key
     */
    getByKey(storeName, key) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.get(key);
                request.onsuccess = (event) => {
                    obs.next(event.target.result);
                    obs.complete();
                };
                request.onerror = (event) => {
                    obs.error(event);
                };
            })
                .catch((error) => obs.error(error));
        });
    }
    /**
     * Retrieve multiple entries in the store
     * @param storeName The name of the store to retrieve the items
     * @param keys The ids entries to be retrieve
     */
    bulkGet(storeName, keys) {
        const observables = keys.map((key) => this.getByKey(storeName, key));
        return new Observable((obs) => {
            combineLatest(observables).subscribe((values) => {
                obs.next(values);
                obs.complete();
            });
        });
    }
    /**
     * Returns entry by id.
     * @param storeName The name of the store to query
     * @param id The entry id
     */
    getByID(storeName, id) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error, obs.next));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.get(id);
                request.onsuccess = (event) => {
                    obs.next(event.target.result);
                };
            })
                .catch((error) => obs.error(error));
        });
    }
    /**
     * Returns entry by index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param key The entry key.
     */
    getByIndex(storeName, indexName, key) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error));
                const objectStore = transaction.objectStore(storeName);
                const index = objectStore.index(indexName);
                const request = index.get(key);
                request.onsuccess = (event) => {
                    obs.next(event.target.result);
                    obs.complete();
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Return all elements from one store
     * @param storeName The name of the store to select the items
     */
    getAll(storeName) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error, obs.next));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.getAll();
                request.onerror = (evt) => {
                    obs.error(evt);
                };
                request.onsuccess = ({ target: { result: ResultAll } }) => {
                    obs.next(ResultAll);
                    obs.complete();
                };
            })
                .catch((error) => obs.error(error));
        });
    }
    /**
     * Adds or updates a record in store with the given value and key. Return all items present in the store
     * @param storeName The name of the store to update
     * @param value The new value for the entry
     */
    update(storeName, value) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, (e) => obs.error(e)));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.put(value);
                request.onsuccess = async (evt) => {
                    const result = evt.target.result;
                    const getRequest = objectStore.get(result);
                    getRequest.onsuccess = (event) => {
                        obs.next(event.target.result);
                        obs.complete();
                    };
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Adds or updates a record in store with the given value and key. Return all items present in the store
     * @param storeName The name of the store to update
     * @param items The values to insert in the DB
     *
     * @Return The return value is an Observable with the primary key of the object that was last in given array
     *
     * @error If the call to bulkPut fails the transaction will be aborted and previously inserted entities will be deleted
     */
    bulkPut(storeName, items) {
        let transaction;
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, e => obs.error(e));
                transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, (e) => obs.error(e)));
                const objectStore = transaction.objectStore(storeName);
                items.forEach((item, index) => {
                    const request = objectStore.put(item);
                    if (index === items.length - 1) {
                        request.onsuccess = (evt) => {
                            transaction.commit();
                            obs.next(evt.target.result);
                            obs.complete();
                        };
                    }
                    request.onerror = (evt) => {
                        transaction.abort();
                        obs.error(evt);
                    };
                });
            })
                .catch((reason) => {
                transaction?.abort();
                obs.error(reason);
            });
        });
    }
    /**
     * Returns all items from the store after delete.
     * @param storeName The name of the store to have the entry deleted
     * @param key The key of the entry to be deleted
     */
    delete(storeName, key) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, (e) => obs.error(e)));
                const objectStore = transaction.objectStore(storeName);
                objectStore.delete(key);
                transaction.oncomplete = () => {
                    this.getAll(storeName)
                        .pipe(take(1))
                        .subscribe((newValues) => {
                        obs.next(newValues);
                        obs.complete();
                    });
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Returns true from the store after a successful delete.
     * @param storeName The name of the store to have the entry deleted
     * @param key The key of the entry to be deleted
     */
    deleteByKey(storeName, key) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, (e) => obs.error(e)));
                const objectStore = transaction.objectStore(storeName);
                transaction.oncomplete = () => {
                    obs.next(true);
                    obs.complete();
                };
                objectStore.delete(key);
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Returns true if successfully delete all entries from the store.
     * @param storeName The name of the store to have the entries deleted
     */
    clear(storeName) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, (e) => obs.error(e)));
                const objectStore = transaction.objectStore(storeName);
                objectStore.clear();
                transaction.oncomplete = () => {
                    obs.next(true);
                    obs.complete();
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Returns true if successfully delete the DB.
     */
    deleteDatabase() {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then(async (db) => {
                await db.close();
                const deleteDBRequest = this.indexedDB.deleteDatabase(this.dbConfig.name);
                deleteDBRequest.onsuccess = () => {
                    obs.next(true);
                    obs.complete();
                };
                deleteDBRequest.onerror = (error) => obs.error(error);
                deleteDBRequest.onblocked = () => {
                    throw new Error(`Unable to delete database because it's blocked`);
                };
            })
                .catch((error) => obs.error(error));
        });
    }
    /**
     * Returns the open cursor event
     * @param storeName The name of the store to have the entries deleted
     * @param keyRange The key range which the cursor should be open on
     */
    openCursor(storeName, keyRange) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error));
                const objectStore = transaction.objectStore(storeName);
                const request = keyRange === undefined ? objectStore.openCursor() : objectStore.openCursor(keyRange);
                request.onsuccess = (event) => {
                    obs.next(event);
                    obs.complete();
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Open a cursor by index filter.
     * @param storeName The name of the store to query.
     * @param indexName The index name to filter.
     * @param keyRange The range value and criteria to apply on the index.
     */
    openCursorByIndex(storeName, indexName, keyRange, mode = DBMode.readonly) {
        const obs = new Subject();
        openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
            .then((db) => {
            validateBeforeTransaction(db, storeName, (reason) => {
                obs.error(reason);
            });
            const transaction = createTransaction(db, optionsGenerator(mode, storeName, (reason) => {
                obs.error(reason);
            }, () => {
                obs.next();
            }));
            const objectStore = transaction.objectStore(storeName);
            const index = objectStore.index(indexName);
            const request = index.openCursor(keyRange);
            request.onsuccess = (event) => {
                obs.next(event);
            };
        })
            .catch((reason) => obs.error(reason));
        return obs;
    }
    /**
     * Returns all items by an index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param keyRange  The range value and criteria to apply on the index.
     */
    getAllByIndex(storeName, indexName, keyRange) {
        const data = [];
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error));
                const objectStore = transaction.objectStore(storeName);
                const index = objectStore.index(indexName);
                const request = index.openCursor(keyRange);
                request.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        data.push(cursor.value);
                        cursor.continue();
                    }
                    else {
                        obs.next(data);
                        obs.complete();
                    }
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Returns all primary keys by an index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param keyRange  The range value and criteria to apply on the index.
     */
    getAllKeysByIndex(storeName, indexName, keyRange) {
        const data = [];
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error));
                const objectStore = transaction.objectStore(storeName);
                const index = objectStore.index(indexName);
                const request = index.openKeyCursor(keyRange);
                request.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        data.push({ primaryKey: cursor.primaryKey, key: cursor.key });
                        cursor.continue();
                    }
                    else {
                        obs.next(data);
                        obs.complete();
                    }
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Returns the number of rows in a store.
     * @param storeName The name of the store to query
     * @param keyRange  The range value and criteria to apply.
     */
    count(storeName, keyRange) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.count(keyRange);
                request.onerror = (e) => obs.error(e);
                request.onsuccess = (e) => {
                    obs.next(e.target.result);
                    obs.complete();
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Returns the number of rows in a store.
     * @param storeName The name of the store to query
     * @param keyRange  The range value and criteria to apply.
     */
    countByIndex(storeName, indexName, keyRange) {
        return new Observable((obs) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, (e) => obs.error(e));
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, obs.error));
                const objectStore = transaction.objectStore(storeName);
                const index = objectStore.index(indexName);
                const request = index.count(keyRange);
                request.onerror = (e) => obs.error(e);
                request.onsuccess = (e) => {
                    obs.next(e.target.result);
                    obs.complete();
                };
            })
                .catch((reason) => obs.error(reason));
        });
    }
    /**
     * Delete the store by name.
     * @param storeName The name of the store to query
     */
    deleteObjectStore(storeName) {
        return DeleteObjectStore(this.dbConfig.name, ++this.dbConfig.version, storeName);
    }
}
NgxIndexedDBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBService, deps: [{ token: CONFIG_TOKEN }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Injectable });
NgxIndexedDBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [CONFIG_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWluZGV4ZWQtZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbmRleGVkLWRiL3NyYy9saWIvbmd4LWluZGV4ZWQtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFnRCxNQUFNLEVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuSCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHdEMsTUFBTSxPQUFPLG1CQUFtQjtJQU05QixZQUNnQyxTQUFtQyxFQUNwQyxVQUFlO1FBRGQsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUx0Qyx3QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFPMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTO2dCQUNaLE1BQU0sQ0FBQyxTQUFTO29CQUNmLE1BQWMsQ0FBQyxZQUFZO29CQUMzQixNQUFjLENBQUMsZUFBZTtvQkFDOUIsTUFBYyxDQUFDLFdBQVcsQ0FBQztZQUU5QixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQTtZQUMzQyxLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNoRDtTQUNGO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFFBQWtCLEVBQUUsWUFBcUI7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ2xGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1NBQ3RGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdELHFEQUFxRDtZQUNyRCxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUE7U0FDekU7UUFDRCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksWUFBWSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELGlCQUFpQixDQUNmLElBQUksQ0FBQyxTQUFTLEVBQ2QsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLENBQUMsT0FBTyxFQUNoQixRQUFRLENBQUMsZ0JBQWdCLEVBQ3pCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDMUIsQ0FBQztRQUVGLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUN0RCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDbkMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7b0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUM7dUZBQ2dFLFFBQVEsQ0FBQyxJQUFJO2tDQUNsRSxFQUFFLENBQUMsT0FBTztrQ0FDVixRQUFRLENBQUMsT0FBTzthQUNyQyxDQUFDLENBQUM7b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBWSxRQUFRO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVEsQ0FBQyxZQUFxQjtRQUNuQyxZQUFZLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLHFFQUFxRTtZQUNyRSxpRUFBaUU7WUFDakUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixZQUFZLHNCQUFzQixDQUFDLENBQUM7U0FDL0U7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlCQUFpQixDQUNmLFdBQTRCLEVBQzVCLGdCQUFrRztRQUVsRyxNQUFNLFlBQVksR0FBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsR0FBRyxDQUFJLFNBQWlCLEVBQUUsS0FBUSxFQUFFLEdBQVM7UUFDM0MsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQ25DLEVBQUUsRUFDRixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNuRSxDQUFDO2dCQUNGLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELE1BQU0sT0FBTyxHQUE0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUU3RyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBRSxHQUFVLEVBQUUsRUFBRTtvQkFDdkMsTUFBTSxNQUFNLEdBQVMsR0FBRyxDQUFDLE1BQTJCLENBQUMsTUFBTSxDQUFDO29CQUM1RCxNQUFNLFVBQVUsR0FBZSxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBa0IsQ0FBQztvQkFDeEUsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO3dCQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUFpQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMxRCxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2pCLENBQUMsQ0FBQztvQkFFRixVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7d0JBQ3BDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUM7Z0JBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO29CQUNqQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE9BQU8sQ0FBSSxTQUFpQixFQUFFLE1BQWdDO1FBQzVELE1BQU0sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3pELFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMxRyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV2RCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ25DLE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUU7d0JBQy9DLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7d0JBQ3RCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQzt3QkFFakIsTUFBTSxPQUFPLEdBQTRCLE9BQU8sQ0FBQyxHQUFHLENBQUM7NEJBQ25ELENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7NEJBQzdCLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUUzQixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7NEJBQ2pDLE1BQU0sTUFBTSxHQUFJLEdBQUcsQ0FBQyxNQUEyQixDQUFDLE1BQU0sQ0FBQzs0QkFDdkQsUUFBUSxDQUFFLE1BQTRCLENBQUMsQ0FBQzt3QkFDMUMsQ0FBQyxDQUFDO29CQUNKLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVILE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxTQUFpQixFQUFFLElBQVc7UUFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtvQkFDeEIsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUMxRyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2RCxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV4QixXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTt3QkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7NkJBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ2IsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7NEJBQ3ZCLE9BQU8sQ0FBQyxTQUFnQixDQUFDLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsUUFBUSxDQUFJLFNBQWlCLEVBQUUsR0FBZ0I7UUFDN0MsT0FBTyxJQUFJLFVBQVUsQ0FBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQy9CLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBa0IsQ0FBQztnQkFDdEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO29CQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQztnQkFDRixPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7b0JBQ2pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFJLFNBQWlCLEVBQUUsSUFBd0I7UUFDcEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVyRSxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDNUIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqQixHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsT0FBTyxDQUFJLFNBQWlCLEVBQUUsRUFBbUI7UUFDL0MsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtnQkFDeEIseUJBQXlCLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0csTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxPQUFPLEdBQWUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQWtCLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtvQkFDbkMsR0FBRyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsTUFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVSxDQUFJLFNBQWlCLEVBQUUsU0FBaUIsRUFBRSxHQUFnQjtRQUNsRSxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQ3BFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUNYLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBa0IsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO29CQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxNQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUksU0FBaUI7UUFDekIsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV2RCxNQUFNLE9BQU8sR0FBZSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRWpELE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFVLEVBQUUsRUFBRTtvQkFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDO2dCQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBbUIsRUFBRSxFQUFFO29CQUN6RSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQWdCLENBQUMsQ0FBQztvQkFDM0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBSSxTQUFpQixFQUFFLEtBQVE7UUFDbkMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUNuQyxFQUFFLEVBQ0YsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztnQkFDRixNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUV2RCxNQUFNLE9BQU8sR0FBNEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFaEUsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQUUsR0FBVSxFQUFFLEVBQUU7b0JBQ3ZDLE1BQU0sTUFBTSxHQUFTLEdBQUcsQ0FBQyxNQUEyQixDQUFDLE1BQU0sQ0FBQztvQkFFNUQsTUFBTSxVQUFVLEdBQWUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQWtCLENBQUM7b0JBQ3hFLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTt3QkFDdEMsR0FBRyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsTUFBaUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUQsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNqQixDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksT0FBTyxDQUFJLFNBQWlCLEVBQUUsS0FBZTtRQUNsRCxJQUFJLFdBQTJCLENBQUM7UUFDaEMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxXQUFXLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEcsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFdkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFhLEVBQUUsRUFBRTtvQkFDcEMsTUFBTSxPQUFPLEdBQTRCLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRS9ELElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUM5QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7NEJBQ2pDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDckIsR0FBRyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsTUFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDakQsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNqQixDQUFDLENBQUM7cUJBQ0g7b0JBRUQsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQVUsRUFBRSxFQUFFO3dCQUMvQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQztZQUVMLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDaEIsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNyQixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBSSxTQUFpQixFQUFFLEdBQVE7UUFDbkMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUNuQyxFQUFFLEVBQ0YsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztnQkFDRixNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUV4QixXQUFXLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7eUJBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ2IsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7d0JBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBZ0IsQ0FBQyxDQUFDO3dCQUMzQixHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLFNBQWlCLEVBQUUsR0FBUTtRQUNyQyxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQ3BFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUNYLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQ25DLEVBQUUsRUFDRixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNuRSxDQUFDO2dCQUNGLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXZELFdBQVcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO29CQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNmLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDO2dCQUVGLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxTQUFpQjtRQUNyQixPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQ3BFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUNYLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQ25DLEVBQUUsRUFDRixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNuRSxDQUFDO2dCQUNGLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7b0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2YsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFO2dCQUNqQixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUUsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7b0JBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2YsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUM7Z0JBQ0YsZUFBZSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEQsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7b0JBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsU0FBaUIsRUFBRSxRQUFzQjtRQUNsRCxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7aUJBQ3BFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUNYLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLE9BQU8sR0FBRyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXJHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtvQkFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEIsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQkFBaUIsQ0FDZixTQUFpQixFQUNqQixTQUFpQixFQUNqQixRQUFxQixFQUNyQixPQUFlLE1BQU0sQ0FBQyxRQUFRO1FBRTlCLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFFakMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDcEUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xELEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FDbkMsRUFBRSxFQUNGLGdCQUFnQixDQUNkLElBQUksRUFDSixTQUFTLEVBQ1QsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDVCxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFDRCxHQUFHLEVBQUU7Z0JBQ0gsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2IsQ0FBQyxDQUNGLENBQ0YsQ0FBQztZQUNGLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTNDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtnQkFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUV4QyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGFBQWEsQ0FBSSxTQUFpQixFQUFFLFNBQWlCLEVBQUUsUUFBcUI7UUFDMUUsTUFBTSxJQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QixZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDcEUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ1gseUJBQXlCLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ25HLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDNUIsTUFBTSxNQUFNLEdBQXdCLEtBQUssQ0FBQyxNQUF5QyxDQUFDLE1BQU0sQ0FBQztvQkFDM0YsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDbkI7eUJBQU07d0JBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDZixHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ2hCO2dCQUNILENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGlCQUFpQixDQUNmLFNBQWlCLEVBQ2pCLFNBQWlCLEVBQ2pCLFFBQXFCO1FBRXJCLE1BQU0sSUFBSSxHQUFvQyxFQUFFLENBQUM7UUFDakQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkcsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUM1QixNQUFNLE1BQU0sR0FBZSxLQUFLLENBQUMsTUFBZ0MsQ0FBQyxNQUFNLENBQUM7b0JBQ3pFLElBQUksTUFBTSxFQUFFO3dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQzlELE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDbkI7eUJBQU07d0JBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDZixHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ2hCO2dCQUNILENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLFNBQWlCLEVBQUUsUUFBb0M7UUFDM0QsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkcsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxPQUFPLEdBQWUsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUN4QixHQUFHLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQyxNQUEyQixDQUFDLE1BQTRCLENBQUMsQ0FBQztvQkFDdkUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVksQ0FBQyxTQUFpQixFQUFFLFNBQWlCLEVBQUUsUUFBb0M7UUFDckYsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDWCx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDbkcsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxPQUFPLEdBQWUsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEQsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO29CQUN4QixHQUFHLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQyxNQUEyQixDQUFDLE1BQTRCLENBQUMsQ0FBQztvQkFDdkUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsU0FBaUI7UUFDakMsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2lIQXRxQlUsbUJBQW1CLGtCQU9wQixZQUFZLGFBQ1osV0FBVztxSEFSVixtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs7MEJBUU4sTUFBTTsyQkFBQyxZQUFZOzswQkFDbkIsTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb3BlbkRhdGFiYXNlLCBDcmVhdGVPYmplY3RTdG9yZSwgRGVsZXRlT2JqZWN0U3RvcmUgfSBmcm9tICcuL25neC1pbmRleGVkLWRiJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zYWN0aW9uLCBvcHRpb25zR2VuZXJhdG9yLCB2YWxpZGF0ZUJlZm9yZVRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ09ORklHX1RPS0VOLCBEQkNvbmZpZywgS2V5LCBSZXF1ZXN0RXZlbnQsIE9iamVjdFN0b3JlTWV0YSwgREJNb2RlLCBXaXRoSUQgfSBmcm9tICcuL25neC1pbmRleGVkLWRiLm1ldGEnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neEluZGV4ZWREQlNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpbmRleGVkREI6IElEQkZhY3Rvcnk7XG4gIHByaXZhdGUgZGVmYXVsdERhdGFiYXNlTmFtZT86IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgc2VsZWN0ZWREYjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ09ORklHX1RPS0VOKSBwcml2YXRlIGRiQ29uZmlnczogUmVjb3JkPHN0cmluZywgREJDb25maWc+LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55XG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKTtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuaW5kZXhlZERCID1cbiAgICAgICAgd2luZG93LmluZGV4ZWREQiB8fFxuICAgICAgICAod2luZG93IGFzIGFueSkubW96SW5kZXhlZERCIHx8XG4gICAgICAgICh3aW5kb3cgYXMgYW55KS53ZWJraXRJbmRleGVkREIgfHxcbiAgICAgICAgKHdpbmRvdyBhcyBhbnkpLm1zSW5kZXhlZERCO1xuXG4gICAgICBjb25zdCBkYkNvbmZpZ3MgPSBPYmplY3QudmFsdWVzKHRoaXMuZGJDb25maWdzKTtcbiAgICAgIGNvbnN0IGlzT25seUNvbmZpZyA9IGRiQ29uZmlncy5sZW5ndGggPT09IDFcbiAgICAgIGZvciAoY29uc3QgZGJDb25maWcgb2YgZGJDb25maWdzKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2lhdGVDb25maWcoZGJDb25maWcsIGlzT25seUNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YW5jaWF0ZUNvbmZpZyhkYkNvbmZpZzogREJDb25maWcsIGlzT25seUNvbmZpZzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghZGJDb25maWcubmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3hJbmRleGVkREI6IFBsZWFzZSwgcHJvdmlkZSB0aGUgZGJOYW1lIGluIHRoZSBjb25maWd1cmF0aW9uJyk7XG4gICAgfVxuICAgIGlmICghZGJDb25maWcudmVyc2lvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3hJbmRleGVkREI6IFBsZWFzZSwgcHJvdmlkZSB0aGUgZGIgdmVyc2lvbiBpbiB0aGUgY29uZmlndXJhdGlvbicpO1xuICAgIH1cbiAgICBpZiAoKGRiQ29uZmlnLmlzRGVmYXVsdCA/PyBmYWxzZSkgJiYgdGhpcy5kZWZhdWx0RGF0YWJhc2VOYW1lKSB7XG4gICAgICAvLyBBIGRlZmF1bHQgREIgaXMgYWxyZWFkeSBjb25maWd1cmVkLCB0aHJvdyBhbiBlcnJvclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZ3hJbmRleGVkREI6IE9ubHkgb25lIGRhdGFiYXNlIGNhbiBiZSBzZXQgYXMgZGVmYXVsdCcpXG4gICAgfVxuICAgIGlmICgoKGRiQ29uZmlnLmlzRGVmYXVsdCA/PyBmYWxzZSkgJiYgIXRoaXMuZGVmYXVsdERhdGFiYXNlTmFtZSkgfHwgaXNPbmx5Q29uZmlnKSB7XG4gICAgICB0aGlzLmRlZmF1bHREYXRhYmFzZU5hbWUgPSBkYkNvbmZpZy5uYW1lO1xuICAgICAgdGhpcy5zZWxlY3RlZERiID0gZGJDb25maWcubmFtZTtcbiAgICB9XG4gICAgQ3JlYXRlT2JqZWN0U3RvcmUoXG4gICAgICB0aGlzLmluZGV4ZWREQixcbiAgICAgIGRiQ29uZmlnLm5hbWUsXG4gICAgICBkYkNvbmZpZy52ZXJzaW9uLFxuICAgICAgZGJDb25maWcub2JqZWN0U3RvcmVzTWV0YSxcbiAgICAgIGRiQ29uZmlnLm1pZ3JhdGlvbkZhY3RvcnlcbiAgICApO1xuXG4gICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCBkYkNvbmZpZy5uYW1lKS50aGVuKChkYikgPT4ge1xuICAgICAgaWYgKGRiLnZlcnNpb24gIT09IGRiQ29uZmlnLnZlcnNpb24pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFxuICAgICAgICAgICAgWW91ciBEQiBDb25maWcgZG9lc24ndCBtYXRjaCB0aGUgbW9zdCByZWNlbnQgdmVyc2lvbiBvZiB0aGUgREIgd2l0aCBuYW1lICR7ZGJDb25maWcubmFtZX0sIHBsZWFzZSB1cGRhdGUgaXRcbiAgICAgICAgICAgIERCIGN1cnJlbnQgdmVyc2lvbjogJHtkYi52ZXJzaW9ufTtcbiAgICAgICAgICAgIFlvdXIgY29uZmlndXJhdGlvbjogJHtkYkNvbmZpZy52ZXJzaW9ufTtcbiAgICAgICAgICAgIGApO1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVXNpbmcgbGF0ZXN0IHZlcnNpb24gJHtkYi52ZXJzaW9ufWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGJDb25maWdzW2RiQ29uZmlnLm5hbWVdLnZlcnNpb24gPSBkYi52ZXJzaW9uO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZGJDb25maWcoKTogREJDb25maWcge1xuICAgIHJldHVybiB0aGlzLmRiQ29uZmlnc1t0aGlzLnNlbGVjdGVkRGJdO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgYSBkYXRhYmFzZSBmb3IgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtkYXRhYmFzZU5hbWU9dW5kZWZpbmVkXSBEYXRhYmFzZSBuYW1lIHRvIHNlbGVjdC5cbiAgICovXG4gIHB1YmxpYyBzZWxlY3REYihkYXRhYmFzZU5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBkYXRhYmFzZU5hbWUgPSBkYXRhYmFzZU5hbWUgPz8gdGhpcy5kZWZhdWx0RGF0YWJhc2VOYW1lO1xuICAgIGlmICghZGF0YWJhc2VOYW1lKSB7XG4gICAgICAvLyBOYW1lIGlzIHN0aWxsIG51bGwsIGl0IG1lYW5zIHRoYXQgdGhlcmUgaXMgbm8gZGVmYXVsdCBkYXRhYmFzZSBzZXRcbiAgICAgIC8vIGFuZCB0aGUgZGF0YWJhc2UgbmFtZSB3YXMgbm90IHNwZWNpZmllZCB3aGlsZSBjYWxsaW5nIGEgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGRhdGFiYXNlIG5hbWUgc3BlY2lmaWVkIGFuZCBubyBkZWZhdWx0IGRhdGFiYXNlIHNldC5gKTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyh0aGlzLmRiQ29uZmlncykuaW5jbHVkZXMoZGF0YWJhc2VOYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZ3hJbmRleGVkREI6IERhdGFiYXNlICR7ZGF0YWJhc2VOYW1lfSBpcyBub3QgaW5pdGlhbGl6ZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZERiID0gZGF0YWJhc2VOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBjcmF0ZSBhIG5ldyBvYmplY3Qgc3RvcmUgYWQtaG9jXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIGJlIGNyZWF0ZWRcbiAgICogQHBhcmFtIG1pZ3JhdGlvbkZhY3RvcnkgVGhlIG1pZ3JhdGlvbiBmYWN0b3J5IGlmIGV4aXN0c1xuICAgKi9cbiAgY3JlYXRlT2JqZWN0U3RvcmUoXG4gICAgc3RvcmVTY2hlbWE6IE9iamVjdFN0b3JlTWV0YSxcbiAgICBtaWdyYXRpb25GYWN0b3J5PzogKCkgPT4geyBba2V5OiBudW1iZXJdOiAoZGI6IElEQkRhdGFiYXNlLCB0cmFuc2FjdGlvbjogSURCVHJhbnNhY3Rpb24pID0+IHZvaWQgfSxcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgc3RvcmVTY2hlbWFzOiBPYmplY3RTdG9yZU1ldGFbXSA9IFtzdG9yZVNjaGVtYV07XG4gICAgQ3JlYXRlT2JqZWN0U3RvcmUodGhpcy5pbmRleGVkREIsIHRoaXMuZGJDb25maWcubmFtZSwgKyt0aGlzLmRiQ29uZmlnLnZlcnNpb24sIHN0b3JlU2NoZW1hcywgbWlncmF0aW9uRmFjdG9yeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBuZXcgZW50cnkgaW4gdGhlIHN0b3JlIGFuZCByZXR1cm5zIGl0cyBrZXlcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgdG8gYWRkIHRoZSBpdGVtXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW50cnkgdG8gYmUgYWRkZWRcbiAgICogQHBhcmFtIGtleSBUaGUgb3B0aW9uYWwga2V5IGZvciB0aGUgZW50cnlcbiAgICovXG4gIGFkZDxUPihzdG9yZU5hbWU6IHN0cmluZywgdmFsdWU6IFQsIGtleT86IGFueSk6IE9ic2VydmFibGU8VCAmIFdpdGhJRD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzKSA9PiB7XG4gICAgICBvcGVuRGF0YWJhc2UodGhpcy5pbmRleGVkREIsIHRoaXMuZGJDb25maWcubmFtZSwgdGhpcy5kYkNvbmZpZy52ZXJzaW9uKVxuICAgICAgICAudGhlbigoZGI6IElEQkRhdGFiYXNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGRiLFxuICAgICAgICAgICAgb3B0aW9uc0dlbmVyYXRvcihEQk1vZGUucmVhZHdyaXRlLCBzdG9yZU5hbWUsIChlKSA9PiBvYnMuZXJyb3IoZSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdDogSURCUmVxdWVzdDxJREJWYWxpZEtleT4gPSBCb29sZWFuKGtleSkgPyBvYmplY3RTdG9yZS5hZGQodmFsdWUsIGtleSkgOiBvYmplY3RTdG9yZS5hZGQodmFsdWUpO1xuXG4gICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBhc3luYyAoZXZ0OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBhbnkgPSAoZXZ0LnRhcmdldCBhcyBJREJPcGVuREJSZXF1ZXN0KS5yZXN1bHQ7XG4gICAgICAgICAgICBjb25zdCBnZXRSZXF1ZXN0OiBJREJSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KHJlc3VsdCkgYXMgSURCUmVxdWVzdDxUPjtcbiAgICAgICAgICAgIGdldFJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnMubmV4dCgoZXZlbnQudGFyZ2V0IGFzIElEQlJlcXVlc3Q8VCAmIFdpdGhJRD4pLnJlc3VsdCk7XG4gICAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2V0UmVxdWVzdC5vbmVycm9yID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnMuZXJyb3IoZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgb2JzLmVycm9yKGV2ZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBvYnMuZXJyb3IoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG5ldyBlbnRyaWVzIGluIHRoZSBzdG9yZSBhbmQgcmV0dXJucyBpdHMga2V5XG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIGFkZCB0aGUgaXRlbVxuICAgKiBAcGFyYW0gdmFsdWVzIFRoZSBlbnRyaWVzIHRvIGJlIGFkZGVkIGNvbnRhaW5pbmcgb3B0aW9uYWwga2V5IGF0dHJpYnV0ZVxuICAgKi9cbiAgYnVsa0FkZDxUPihzdG9yZU5hbWU6IHN0cmluZywgdmFsdWVzOiBBcnJheTxUICYgeyBrZXk/OiBhbnkgfT4pOiBPYnNlcnZhYmxlPG51bWJlcltdPiB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBuZXcgUHJvbWlzZTxudW1iZXJbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiOiBJREJEYXRhYmFzZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb24oZGIsIG9wdGlvbnNHZW5lcmF0b3IoREJNb2RlLnJlYWR3cml0ZSwgc3RvcmVOYW1lLCByZXNvbHZlLCByZWplY3QpKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHRzID0gdmFsdWVzLm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlMSwgcmVqZWN0MSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBrZXkgPSB2YWx1ZS5rZXk7XG4gICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZS5rZXk7XG5cbiAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogSURCUmVxdWVzdDxJREJWYWxpZEtleT4gPSBCb29sZWFuKGtleSlcbiAgICAgICAgICAgICAgICA/IG9iamVjdFN0b3JlLmFkZCh2YWx1ZSwga2V5KVxuICAgICAgICAgICAgICAgIDogb2JqZWN0U3RvcmUuYWRkKHZhbHVlKTtcblxuICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gKGV2dC50YXJnZXQgYXMgSURCT3BlbkRCUmVxdWVzdCkucmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlc29sdmUxKChyZXN1bHQgYXMgdW5rbm93bikgYXMgbnVtYmVyKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmVzb2x2ZShQcm9taXNlLmFsbChyZXN1bHRzKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiByZWplY3QocmVhc29uKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJvbShwcm9taXNlcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGVudHJpZXMgaW4gdGhlIHN0b3JlIGFuZCByZXR1cm5zIGN1cnJlbnQgZW50cmllcyBpbiB0aGUgc3RvcmVcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgdG8gYWRkIHRoZSBpdGVtXG4gICAqIEBwYXJhbSBrZXlzIFRoZSBrZXlzIHRvIGJlIGRlbGV0ZWRcbiAgICovXG4gIGJ1bGtEZWxldGUoc3RvcmVOYW1lOiBzdHJpbmcsIGtleXM6IEtleVtdKTogT2JzZXJ2YWJsZTxudW1iZXJbXT4ge1xuICAgIGNvbnN0IHByb21pc2VzID0ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bWJlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBvcGVuRGF0YWJhc2UodGhpcy5pbmRleGVkREIsIHRoaXMuZGJDb25maWcubmFtZSwgdGhpcy5kYkNvbmZpZy52ZXJzaW9uKVxuICAgICAgICAgIC50aGVuKChkYjogSURCRGF0YWJhc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb24oZGIsIG9wdGlvbnNHZW5lcmF0b3IoREJNb2RlLnJlYWR3cml0ZSwgc3RvcmVOYW1lLCByZWplY3QsIHJlc29sdmUpKTtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICAgIG9iamVjdFN0b3JlLmRlbGV0ZShrZXkpO1xuXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmdldEFsbChzdG9yZU5hbWUpXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChuZXdWYWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3VmFsdWVzIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHJlamVjdChyZWFzb24pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmcm9tKFByb21pc2UuYWxsKHByb21pc2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBlbnRyeSBieSBrZXkuXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIHF1ZXJ5XG4gICAqIEBwYXJhbSBrZXkgVGhlIGVudHJ5IGtleVxuICAgKi9cbiAgZ2V0QnlLZXk8VD4oc3RvcmVOYW1lOiBzdHJpbmcsIGtleTogSURCVmFsaWRLZXkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8VD4oKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiOiBJREJEYXRhYmFzZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb24oZGIsIG9wdGlvbnNHZW5lcmF0b3IoREJNb2RlLnJlYWRvbmx5LCBzdG9yZU5hbWUsIG9icy5lcnJvcikpO1xuICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KGtleSkgYXMgSURCUmVxdWVzdDxUPjtcbiAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIG9icy5uZXh0KChldmVudC50YXJnZXQgYXMgSURCUmVxdWVzdDxUPikucmVzdWx0KTtcbiAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgb2JzLmVycm9yKGV2ZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBvYnMuZXJyb3IoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBtdWx0aXBsZSBlbnRyaWVzIGluIHRoZSBzdG9yZVxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIFRoZSBuYW1lIG9mIHRoZSBzdG9yZSB0byByZXRyaWV2ZSB0aGUgaXRlbXNcbiAgICogQHBhcmFtIGtleXMgVGhlIGlkcyBlbnRyaWVzIHRvIGJlIHJldHJpZXZlXG4gICAqL1xuICBidWxrR2V0PFQ+KHN0b3JlTmFtZTogc3RyaW5nLCBrZXlzOiBBcnJheTxJREJWYWxpZEtleT4pOiBhbnkge1xuICAgIGNvbnN0IG9ic2VydmFibGVzID0ga2V5cy5tYXAoKGtleSkgPT4gdGhpcy5nZXRCeUtleShzdG9yZU5hbWUsIGtleSkpO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnMpID0+IHtcbiAgICAgIGNvbWJpbmVMYXRlc3Qob2JzZXJ2YWJsZXMpLnN1YnNjcmliZSgodmFsdWVzKSA9PiB7XG4gICAgICAgIG9icy5uZXh0KHZhbHVlcyk7XG4gICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBlbnRyeSBieSBpZC5cbiAgICogQHBhcmFtIHN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgdG8gcXVlcnlcbiAgICogQHBhcmFtIGlkIFRoZSBlbnRyeSBpZFxuICAgKi9cbiAgZ2V0QnlJRDxUPihzdG9yZU5hbWU6IHN0cmluZywgaWQ6IHN0cmluZyB8IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzKSA9PiB7XG4gICAgICBvcGVuRGF0YWJhc2UodGhpcy5pbmRleGVkREIsIHRoaXMuZGJDb25maWcubmFtZSwgdGhpcy5kYkNvbmZpZy52ZXJzaW9uKVxuICAgICAgICAudGhlbigoZGI6IElEQkRhdGFiYXNlKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKGRiLCBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkb25seSwgc3RvcmVOYW1lLCBvYnMuZXJyb3IsIG9icy5uZXh0KSk7XG4gICAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3Q6IElEQlJlcXVlc3QgPSBvYmplY3RTdG9yZS5nZXQoaWQpIGFzIElEQlJlcXVlc3Q8VD47XG4gICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBvYnMubmV4dCgoZXZlbnQudGFyZ2V0IGFzIElEQlJlcXVlc3Q8VD4pLnJlc3VsdCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gb2JzLmVycm9yKGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBlbnRyeSBieSBpbmRleC5cbiAgICogQHBhcmFtIHN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgdG8gcXVlcnlcbiAgICogQHBhcmFtIGluZGV4TmFtZSBUaGUgaW5kZXggbmFtZSB0byBmaWx0ZXJcbiAgICogQHBhcmFtIGtleSBUaGUgZW50cnkga2V5LlxuICAgKi9cbiAgZ2V0QnlJbmRleDxUPihzdG9yZU5hbWU6IHN0cmluZywgaW5kZXhOYW1lOiBzdHJpbmcsIGtleTogSURCVmFsaWRLZXkpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKGRiLCBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkb25seSwgc3RvcmVOYW1lLCBvYnMuZXJyb3IpKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleChpbmRleE5hbWUpO1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5nZXQoa2V5KSBhcyBJREJSZXF1ZXN0PFQ+O1xuICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgb2JzLm5leHQoKGV2ZW50LnRhcmdldCBhcyBJREJSZXF1ZXN0PFQ+KS5yZXN1bHQpO1xuICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IG9icy5lcnJvcihyZWFzb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWxsIGVsZW1lbnRzIGZyb20gb25lIHN0b3JlXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIHNlbGVjdCB0aGUgaXRlbXNcbiAgICovXG4gIGdldEFsbDxUPihzdG9yZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8VFtdPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnMpID0+IHtcbiAgICAgIG9wZW5EYXRhYmFzZSh0aGlzLmluZGV4ZWREQiwgdGhpcy5kYkNvbmZpZy5uYW1lLCB0aGlzLmRiQ29uZmlnLnZlcnNpb24pXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICAgIHZhbGlkYXRlQmVmb3JlVHJhbnNhY3Rpb24oZGIsIHN0b3JlTmFtZSwgKGUpID0+IG9icy5lcnJvcihlKSk7XG4gICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbihkYiwgb3B0aW9uc0dlbmVyYXRvcihEQk1vZGUucmVhZG9ubHksIHN0b3JlTmFtZSwgb2JzLmVycm9yLCBvYnMubmV4dCkpO1xuICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IHJlcXVlc3Q6IElEQlJlcXVlc3QgPSBvYmplY3RTdG9yZS5nZXRBbGwoKTtcblxuICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBvYnMuZXJyb3IoZXZ0KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoeyB0YXJnZXQ6IHsgcmVzdWx0OiBSZXN1bHRBbGwgfSB9OiBSZXF1ZXN0RXZlbnQ8VD4pID0+IHtcbiAgICAgICAgICAgIG9icy5uZXh0KFJlc3VsdEFsbCBhcyBUW10pO1xuICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gb2JzLmVycm9yKGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBvciB1cGRhdGVzIGEgcmVjb3JkIGluIHN0b3JlIHdpdGggdGhlIGdpdmVuIHZhbHVlIGFuZCBrZXkuIFJldHVybiBhbGwgaXRlbXMgcHJlc2VudCBpbiB0aGUgc3RvcmVcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgZW50cnlcbiAgICovXG4gIHVwZGF0ZTxUPihzdG9yZU5hbWU6IHN0cmluZywgdmFsdWU6IFQpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgZGIsXG4gICAgICAgICAgICBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkd3JpdGUsIHN0b3JlTmFtZSwgKGUpID0+IG9icy5lcnJvcihlKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcblxuICAgICAgICAgIGNvbnN0IHJlcXVlc3Q6IElEQlJlcXVlc3Q8SURCVmFsaWRLZXk+ID0gb2JqZWN0U3RvcmUucHV0KHZhbHVlKTtcblxuICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKGV2dDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0gKGV2dC50YXJnZXQgYXMgSURCT3BlbkRCUmVxdWVzdCkucmVzdWx0O1xuXG4gICAgICAgICAgICBjb25zdCBnZXRSZXF1ZXN0OiBJREJSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KHJlc3VsdCkgYXMgSURCUmVxdWVzdDxUPjtcbiAgICAgICAgICAgIGdldFJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnMubmV4dCgoZXZlbnQudGFyZ2V0IGFzIElEQlJlcXVlc3Q8VCAmIFdpdGhJRD4pLnJlc3VsdCk7XG4gICAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gb2JzLmVycm9yKHJlYXNvbikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgb3IgdXBkYXRlcyBhIHJlY29yZCBpbiBzdG9yZSB3aXRoIHRoZSBnaXZlbiB2YWx1ZSBhbmQga2V5LiBSZXR1cm4gYWxsIGl0ZW1zIHByZXNlbnQgaW4gdGhlIHN0b3JlXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0gaXRlbXMgVGhlIHZhbHVlcyB0byBpbnNlcnQgaW4gdGhlIERCXG4gICAqXG4gICAqIEBSZXR1cm4gVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBPYnNlcnZhYmxlIHdpdGggdGhlIHByaW1hcnkga2V5IG9mIHRoZSBvYmplY3QgdGhhdCB3YXMgbGFzdCBpbiBnaXZlbiBhcnJheVxuICAgKlxuICAgKiBAZXJyb3IgSWYgdGhlIGNhbGwgdG8gYnVsa1B1dCBmYWlscyB0aGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBhYm9ydGVkIGFuZCBwcmV2aW91c2x5IGluc2VydGVkIGVudGl0aWVzIHdpbGwgYmUgZGVsZXRlZFxuICAgKi9cbiAgcHVibGljIGJ1bGtQdXQ8VD4oc3RvcmVOYW1lOiBzdHJpbmcsIGl0ZW1zOiBBcnJheTxUPik6IE9ic2VydmFibGU8S2V5PiB7XG4gICAgbGV0IHRyYW5zYWN0aW9uOiBJREJUcmFuc2FjdGlvbjtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCBlID0+IG9icy5lcnJvcihlKSk7XG4gICAgICAgICAgdHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbihkYiwgb3B0aW9uc0dlbmVyYXRvcihEQk1vZGUucmVhZHdyaXRlLCBzdG9yZU5hbWUsIChlKSA9PiBvYnMuZXJyb3IoZSkpKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG5cbiAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0OiBJREJSZXF1ZXN0PElEQlZhbGlkS2V5PiA9IG9iamVjdFN0b3JlLnB1dChpdGVtKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2dDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5jb21taXQoKTtcbiAgICAgICAgICAgICAgICBvYnMubmV4dCgoZXZ0LnRhcmdldCBhcyBJREJSZXF1ZXN0PEtleT4pLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmFib3J0KCk7XG4gICAgICAgICAgICAgIG9icy5lcnJvcihldnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgIHRyYW5zYWN0aW9uPy5hYm9ydCgpO1xuICAgICAgICAgIG9icy5lcnJvcihyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBpdGVtcyBmcm9tIHRoZSBzdG9yZSBhZnRlciBkZWxldGUuXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIGhhdmUgdGhlIGVudHJ5IGRlbGV0ZWRcbiAgICogQHBhcmFtIGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBiZSBkZWxldGVkXG4gICAqL1xuICBkZWxldGU8VD4oc3RvcmVOYW1lOiBzdHJpbmcsIGtleTogS2V5KTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgZGIsXG4gICAgICAgICAgICBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkd3JpdGUsIHN0b3JlTmFtZSwgKGUpID0+IG9icy5lcnJvcihlKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICBvYmplY3RTdG9yZS5kZWxldGUoa2V5KTtcblxuICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEFsbChzdG9yZU5hbWUpXG4gICAgICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoKG5ld1ZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgIG9icy5uZXh0KG5ld1ZhbHVlcyBhcyBUW10pO1xuICAgICAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gb2JzLmVycm9yKHJlYXNvbikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBmcm9tIHRoZSBzdG9yZSBhZnRlciBhIHN1Y2Nlc3NmdWwgZGVsZXRlLlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIFRoZSBuYW1lIG9mIHRoZSBzdG9yZSB0byBoYXZlIHRoZSBlbnRyeSBkZWxldGVkXG4gICAqIEBwYXJhbSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gYmUgZGVsZXRlZFxuICAgKi9cbiAgZGVsZXRlQnlLZXkoc3RvcmVOYW1lOiBzdHJpbmcsIGtleTogS2V5KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnMpID0+IHtcbiAgICAgIG9wZW5EYXRhYmFzZSh0aGlzLmluZGV4ZWREQiwgdGhpcy5kYkNvbmZpZy5uYW1lLCB0aGlzLmRiQ29uZmlnLnZlcnNpb24pXG4gICAgICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgICAgIHZhbGlkYXRlQmVmb3JlVHJhbnNhY3Rpb24oZGIsIHN0b3JlTmFtZSwgKGUpID0+IG9icy5lcnJvcihlKSk7XG4gICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGRiLFxuICAgICAgICAgICAgb3B0aW9uc0dlbmVyYXRvcihEQk1vZGUucmVhZHdyaXRlLCBzdG9yZU5hbWUsIChlKSA9PiBvYnMuZXJyb3IoZSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG5cbiAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgb2JzLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgb2JqZWN0U3RvcmUuZGVsZXRlKGtleSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiBvYnMuZXJyb3IocmVhc29uKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWxseSBkZWxldGUgYWxsIGVudHJpZXMgZnJvbSB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIGhhdmUgdGhlIGVudHJpZXMgZGVsZXRlZFxuICAgKi9cbiAgY2xlYXIoc3RvcmVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgZGIsXG4gICAgICAgICAgICBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkd3JpdGUsIHN0b3JlTmFtZSwgKGUpID0+IG9icy5lcnJvcihlKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICBvYmplY3RTdG9yZS5jbGVhcigpO1xuICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBvYnMubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiBvYnMuZXJyb3IocmVhc29uKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWxseSBkZWxldGUgdGhlIERCLlxuICAgKi9cbiAgZGVsZXRlRGF0YWJhc2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnMpID0+IHtcbiAgICAgIG9wZW5EYXRhYmFzZSh0aGlzLmluZGV4ZWREQiwgdGhpcy5kYkNvbmZpZy5uYW1lLCB0aGlzLmRiQ29uZmlnLnZlcnNpb24pXG4gICAgICAgIC50aGVuKGFzeW5jIChkYikgPT4ge1xuICAgICAgICAgIGF3YWl0IGRiLmNsb3NlKCk7XG4gICAgICAgICAgY29uc3QgZGVsZXRlREJSZXF1ZXN0ID0gdGhpcy5pbmRleGVkREIuZGVsZXRlRGF0YWJhc2UodGhpcy5kYkNvbmZpZy5uYW1lKTtcbiAgICAgICAgICBkZWxldGVEQlJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgb2JzLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGRlbGV0ZURCUmVxdWVzdC5vbmVycm9yID0gKGVycm9yKSA9PiBvYnMuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGRlbGV0ZURCUmVxdWVzdC5vbmJsb2NrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBkZWxldGUgZGF0YWJhc2UgYmVjYXVzZSBpdCdzIGJsb2NrZWRgKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBvYnMuZXJyb3IoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvcGVuIGN1cnNvciBldmVudFxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIFRoZSBuYW1lIG9mIHRoZSBzdG9yZSB0byBoYXZlIHRoZSBlbnRyaWVzIGRlbGV0ZWRcbiAgICogQHBhcmFtIGtleVJhbmdlIFRoZSBrZXkgcmFuZ2Ugd2hpY2ggdGhlIGN1cnNvciBzaG91bGQgYmUgb3BlbiBvblxuICAgKi9cbiAgb3BlbkN1cnNvcihzdG9yZU5hbWU6IHN0cmluZywga2V5UmFuZ2U/OiBJREJLZXlSYW5nZSk6IE9ic2VydmFibGU8RXZlbnQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKGRiLCBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkb25seSwgc3RvcmVOYW1lLCBvYnMuZXJyb3IpKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGtleVJhbmdlID09PSB1bmRlZmluZWQgPyBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKCkgOiBvYmplY3RTdG9yZS5vcGVuQ3Vyc29yKGtleVJhbmdlKTtcblxuICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgb2JzLm5leHQoZXZlbnQpO1xuICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IG9icy5lcnJvcihyZWFzb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgY3Vyc29yIGJ5IGluZGV4IGZpbHRlci5cbiAgICogQHBhcmFtIHN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgdG8gcXVlcnkuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgVGhlIGluZGV4IG5hbWUgdG8gZmlsdGVyLlxuICAgKiBAcGFyYW0ga2V5UmFuZ2UgVGhlIHJhbmdlIHZhbHVlIGFuZCBjcml0ZXJpYSB0byBhcHBseSBvbiB0aGUgaW5kZXguXG4gICAqL1xuICBvcGVuQ3Vyc29yQnlJbmRleChcbiAgICBzdG9yZU5hbWU6IHN0cmluZyxcbiAgICBpbmRleE5hbWU6IHN0cmluZyxcbiAgICBrZXlSYW5nZTogSURCS2V5UmFuZ2UsXG4gICAgbW9kZTogREJNb2RlID0gREJNb2RlLnJlYWRvbmx5LFxuICApOiBPYnNlcnZhYmxlPEV2ZW50PiB7XG4gICAgY29uc3Qgb2JzID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG5cbiAgICBvcGVuRGF0YWJhc2UodGhpcy5pbmRleGVkREIsIHRoaXMuZGJDb25maWcubmFtZSwgdGhpcy5kYkNvbmZpZy52ZXJzaW9uKVxuICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIHZhbGlkYXRlQmVmb3JlVHJhbnNhY3Rpb24oZGIsIHN0b3JlTmFtZSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgIG9icy5lcnJvcihyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBjcmVhdGVUcmFuc2FjdGlvbihcbiAgICAgICAgICBkYixcbiAgICAgICAgICBvcHRpb25zR2VuZXJhdG9yKFxuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHN0b3JlTmFtZSxcbiAgICAgICAgICAgIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgb2JzLmVycm9yKHJlYXNvbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBvYnMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICBjb25zdCBpbmRleCA9IG9iamVjdFN0b3JlLmluZGV4KGluZGV4TmFtZSk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5vcGVuQ3Vyc29yKGtleVJhbmdlKTtcblxuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICBvYnMubmV4dChldmVudCk7XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChyZWFzb24pID0+IG9icy5lcnJvcihyZWFzb24pKTtcblxuICAgIHJldHVybiBvYnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgaXRlbXMgYnkgYW4gaW5kZXguXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIHF1ZXJ5XG4gICAqIEBwYXJhbSBpbmRleE5hbWUgVGhlIGluZGV4IG5hbWUgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSBrZXlSYW5nZSAgVGhlIHJhbmdlIHZhbHVlIGFuZCBjcml0ZXJpYSB0byBhcHBseSBvbiB0aGUgaW5kZXguXG4gICAqL1xuICBnZXRBbGxCeUluZGV4PFQ+KHN0b3JlTmFtZTogc3RyaW5nLCBpbmRleE5hbWU6IHN0cmluZywga2V5UmFuZ2U6IElEQktleVJhbmdlKTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICBjb25zdCBkYXRhOiBUW10gPSBbXTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKGRiLCBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkb25seSwgc3RvcmVOYW1lLCBvYnMuZXJyb3IpKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleChpbmRleE5hbWUpO1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5vcGVuQ3Vyc29yKGtleVJhbmdlKTtcbiAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3Vyc29yOiBJREJDdXJzb3JXaXRoVmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIElEQlJlcXVlc3Q8SURCQ3Vyc29yV2l0aFZhbHVlPikucmVzdWx0O1xuICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICBkYXRhLnB1c2goY3Vyc29yLnZhbHVlKTtcbiAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYnMubmV4dChkYXRhKTtcbiAgICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IG9icy5lcnJvcihyZWFzb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBwcmltYXJ5IGtleXMgYnkgYW4gaW5kZXguXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIHF1ZXJ5XG4gICAqIEBwYXJhbSBpbmRleE5hbWUgVGhlIGluZGV4IG5hbWUgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSBrZXlSYW5nZSAgVGhlIHJhbmdlIHZhbHVlIGFuZCBjcml0ZXJpYSB0byBhcHBseSBvbiB0aGUgaW5kZXguXG4gICAqL1xuICBnZXRBbGxLZXlzQnlJbmRleChcbiAgICBzdG9yZU5hbWU6IHN0cmluZyxcbiAgICBpbmRleE5hbWU6IHN0cmluZyxcbiAgICBrZXlSYW5nZTogSURCS2V5UmFuZ2UsXG4gICk6IE9ic2VydmFibGU8eyBwcmltYXJ5S2V5OiBhbnk7IGtleTogYW55IH1bXT4ge1xuICAgIGNvbnN0IGRhdGE6IHsgcHJpbWFyeUtleTogYW55OyBrZXk6IGFueSB9W10gPSBbXTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKGRiLCBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkb25seSwgc3RvcmVOYW1lLCBvYnMuZXJyb3IpKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleChpbmRleE5hbWUpO1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleC5vcGVuS2V5Q3Vyc29yKGtleVJhbmdlKTtcbiAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3Vyc29yOiBJREJDdXJzb3IgPSAoZXZlbnQudGFyZ2V0IGFzIElEQlJlcXVlc3Q8SURCQ3Vyc29yPikucmVzdWx0O1xuICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICBkYXRhLnB1c2goeyBwcmltYXJ5S2V5OiBjdXJzb3IucHJpbWFyeUtleSwga2V5OiBjdXJzb3Iua2V5IH0pO1xuICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9icy5uZXh0KGRhdGEpO1xuICAgICAgICAgICAgICBvYnMuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4gb2JzLmVycm9yKHJlYXNvbikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiByb3dzIGluIGEgc3RvcmUuXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIHF1ZXJ5XG4gICAqIEBwYXJhbSBrZXlSYW5nZSAgVGhlIHJhbmdlIHZhbHVlIGFuZCBjcml0ZXJpYSB0byBhcHBseS5cbiAgICovXG4gIGNvdW50KHN0b3JlTmFtZTogc3RyaW5nLCBrZXlSYW5nZT86IElEQlZhbGlkS2V5IHwgSURCS2V5UmFuZ2UpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzKSA9PiB7XG4gICAgICBvcGVuRGF0YWJhc2UodGhpcy5pbmRleGVkREIsIHRoaXMuZGJDb25maWcubmFtZSwgdGhpcy5kYkNvbmZpZy52ZXJzaW9uKVxuICAgICAgICAudGhlbigoZGIpID0+IHtcbiAgICAgICAgICB2YWxpZGF0ZUJlZm9yZVRyYW5zYWN0aW9uKGRiLCBzdG9yZU5hbWUsIChlKSA9PiBvYnMuZXJyb3IoZSkpO1xuICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb24oZGIsIG9wdGlvbnNHZW5lcmF0b3IoREJNb2RlLnJlYWRvbmx5LCBzdG9yZU5hbWUsIG9icy5lcnJvcikpO1xuICAgICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICBjb25zdCByZXF1ZXN0OiBJREJSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuY291bnQoa2V5UmFuZ2UpO1xuICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiBvYnMuZXJyb3IoZSk7XG4gICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZSkgPT4ge1xuICAgICAgICAgICAgb2JzLm5leHQoKChlLnRhcmdldCBhcyBJREJPcGVuREJSZXF1ZXN0KS5yZXN1bHQgYXMgdW5rbm93bikgYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiBvYnMuZXJyb3IocmVhc29uKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHJvd3MgaW4gYSBzdG9yZS5cbiAgICogQHBhcmFtIHN0b3JlTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3RvcmUgdG8gcXVlcnlcbiAgICogQHBhcmFtIGtleVJhbmdlICBUaGUgcmFuZ2UgdmFsdWUgYW5kIGNyaXRlcmlhIHRvIGFwcGx5LlxuICAgKi9cbiAgY291bnRCeUluZGV4KHN0b3JlTmFtZTogc3RyaW5nLCBpbmRleE5hbWU6IHN0cmluZywga2V5UmFuZ2U/OiBJREJWYWxpZEtleSB8IElEQktleVJhbmdlKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9icykgPT4ge1xuICAgICAgb3BlbkRhdGFiYXNlKHRoaXMuaW5kZXhlZERCLCB0aGlzLmRiQ29uZmlnLm5hbWUsIHRoaXMuZGJDb25maWcudmVyc2lvbilcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgdmFsaWRhdGVCZWZvcmVUcmFuc2FjdGlvbihkYiwgc3RvcmVOYW1lLCAoZSkgPT4gb2JzLmVycm9yKGUpKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKGRiLCBvcHRpb25zR2VuZXJhdG9yKERCTW9kZS5yZWFkb25seSwgc3RvcmVOYW1lLCBvYnMuZXJyb3IpKTtcbiAgICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBvYmplY3RTdG9yZS5pbmRleChpbmRleE5hbWUpO1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3Q6IElEQlJlcXVlc3QgPSBpbmRleC5jb3VudChrZXlSYW5nZSk7XG4gICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGUpID0+IG9icy5lcnJvcihlKTtcbiAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICBvYnMubmV4dCgoKGUudGFyZ2V0IGFzIElEQk9wZW5EQlJlcXVlc3QpLnJlc3VsdCBhcyB1bmtub3duKSBhcyBudW1iZXIpO1xuICAgICAgICAgICAgb2JzLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IG9icy5lcnJvcihyZWFzb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIHN0b3JlIGJ5IG5hbWUuXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHN0b3JlIHRvIHF1ZXJ5XG4gICAqL1xuICBkZWxldGVPYmplY3RTdG9yZShzdG9yZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBEZWxldGVPYmplY3RTdG9yZSh0aGlzLmRiQ29uZmlnLm5hbWUsICsrdGhpcy5kYkNvbmZpZy52ZXJzaW9uLCBzdG9yZU5hbWUpO1xuICB9XG59XG4iXX0=