import * as i0 from '@angular/core';
import { InjectionToken, PLATFORM_ID, Injectable, Inject, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Observable, from, combineLatest, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

function openDatabase(indexedDB, dbName, version, upgradeCallback) {
    return new Promise((resolve, reject) => {
        if (!indexedDB) {
            reject('IndexedDB not available');
        }
        const request = indexedDB.open(dbName, version);
        let db;
        request.onsuccess = (event) => {
            db = request.result;
            resolve(db);
        };
        request.onerror = (event) => {
            reject(`IndexedDB error: ${request.error}`);
        };
        if (typeof upgradeCallback === 'function') {
            request.onupgradeneeded = (event) => {
                upgradeCallback(event, db);
            };
        }
    });
}
function CreateObjectStore(indexedDB, dbName, version, storeSchemas, migrationFactory) {
    if (!indexedDB) {
        return;
    }
    const request = indexedDB.open(dbName, version);
    request.onupgradeneeded = (event) => {
        const database = event.target.result;
        storeSchemas.forEach((storeSchema) => {
            if (!database.objectStoreNames.contains(storeSchema.store)) {
                const objectStore = database.createObjectStore(storeSchema.store, storeSchema.storeConfig);
                storeSchema.storeSchema.forEach((schema) => {
                    objectStore.createIndex(schema.name, schema.keypath, schema.options);
                });
            }
        });
        const storeMigrations = migrationFactory && migrationFactory();
        if (storeMigrations) {
            Object.keys(storeMigrations)
                .map((k) => parseInt(k, 10))
                .filter((v) => v > event.oldVersion)
                .sort((a, b) => a - b)
                .forEach((v) => {
                storeMigrations[v](database, request.transaction);
            });
        }
        database.close();
    };
    request.onsuccess = (e) => {
        e.target.result.close();
    };
}
function DeleteObjectStore(dbName, version, storeName) {
    if (!dbName || !version || !storeName) {
        throw Error('Params: "dbName", "version", "storeName" are mandatory.');
    }
    return new Observable((obs) => {
        try {
            const newVersion = version + 1;
            const request = indexedDB.open(dbName, newVersion);
            request.onupgradeneeded = (event) => {
                const database = event.target.result;
                database.deleteObjectStore(storeName);
                database.close();
                console.log('onupgradeneeded');
                obs.next(true);
                obs.complete();
            };
            request.onerror = (e) => obs.error(e);
        }
        catch (error) {
            obs.error(error);
        }
    });
}

function validateStoreName(db, storeName) {
    return db.objectStoreNames.contains(storeName);
}
function validateBeforeTransaction(db, storeName, reject) {
    if (!db) {
        reject('You need to use the openDatabase function to create a database before you query it!');
    }
    if (!validateStoreName(db, storeName)) {
        reject(`objectStore does not exists: ${storeName}`);
    }
}
function createTransaction(db, options) {
    const trans = db.transaction(options.storeName, options.dbMode);
    trans.onerror = options.error;
    trans.onabort = options.abort;
    return trans;
}
function optionsGenerator(type, storeName, reject, resolve) {
    return {
        storeName,
        dbMode: type,
        error: (e) => {
            reject(e);
        },
        abort: (e) => {
            reject(e);
        },
    };
}

var DBMode;
(function (DBMode) {
    DBMode["readonly"] = "readonly";
    DBMode["readwrite"] = "readwrite";
})(DBMode || (DBMode = {}));
const CONFIG_TOKEN = new InjectionToken(null);

class NgxIndexedDBService {
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

class NgxIndexedDBModule {
    static forRoot(...dbConfigs) {
        const value = {};
        for (const dbConfig of dbConfigs) {
            Object.assign(value, { [dbConfig.name]: dbConfig });
        }
        return {
            ngModule: NgxIndexedDBModule,
            providers: [NgxIndexedDBService, { provide: CONFIG_TOKEN, useValue: value }]
        };
    }
}
NgxIndexedDBModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxIndexedDBModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, imports: [CommonModule] });
NgxIndexedDBModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CONFIG_TOKEN, DBMode, NgxIndexedDBModule, NgxIndexedDBService };
//# sourceMappingURL=ngx-indexed-db.mjs.map
