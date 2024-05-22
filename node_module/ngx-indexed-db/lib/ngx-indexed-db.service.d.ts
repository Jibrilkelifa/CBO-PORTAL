import { DBConfig, Key, ObjectStoreMeta, DBMode, WithID } from './ngx-indexed-db.meta';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxIndexedDBService {
    private dbConfigs;
    private platformId;
    private readonly isBrowser;
    private indexedDB;
    private defaultDatabaseName?;
    private selectedDb;
    constructor(dbConfigs: Record<string, DBConfig>, platformId: any);
    private instanciateConfig;
    private get dbConfig();
    /**
     * Selects a database for the current context.
     * @param {string} [databaseName=undefined] Database name to select.
     */
    selectDb(databaseName?: string): void;
    /**
     * Allows to crate a new object store ad-hoc
     * @param storeName The name of the store to be created
     * @param migrationFactory The migration factory if exists
     */
    createObjectStore(storeSchema: ObjectStoreMeta, migrationFactory?: () => {
        [key: number]: (db: IDBDatabase, transaction: IDBTransaction) => void;
    }): void;
    /**
     * Adds new entry in the store and returns its key
     * @param storeName The name of the store to add the item
     * @param value The entry to be added
     * @param key The optional key for the entry
     */
    add<T>(storeName: string, value: T, key?: any): Observable<T & WithID>;
    /**
     * Adds new entries in the store and returns its key
     * @param storeName The name of the store to add the item
     * @param values The entries to be added containing optional key attribute
     */
    bulkAdd<T>(storeName: string, values: Array<T & {
        key?: any;
    }>): Observable<number[]>;
    /**
     * Delete entries in the store and returns current entries in the store
     * @param storeName The name of the store to add the item
     * @param keys The keys to be deleted
     */
    bulkDelete(storeName: string, keys: Key[]): Observable<number[]>;
    /**
     * Returns entry by key.
     * @param storeName The name of the store to query
     * @param key The entry key
     */
    getByKey<T>(storeName: string, key: IDBValidKey): Observable<T>;
    /**
     * Retrieve multiple entries in the store
     * @param storeName The name of the store to retrieve the items
     * @param keys The ids entries to be retrieve
     */
    bulkGet<T>(storeName: string, keys: Array<IDBValidKey>): any;
    /**
     * Returns entry by id.
     * @param storeName The name of the store to query
     * @param id The entry id
     */
    getByID<T>(storeName: string, id: string | number): Observable<T>;
    /**
     * Returns entry by index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param key The entry key.
     */
    getByIndex<T>(storeName: string, indexName: string, key: IDBValidKey): Observable<T>;
    /**
     * Return all elements from one store
     * @param storeName The name of the store to select the items
     */
    getAll<T>(storeName: string): Observable<T[]>;
    /**
     * Adds or updates a record in store with the given value and key. Return all items present in the store
     * @param storeName The name of the store to update
     * @param value The new value for the entry
     */
    update<T>(storeName: string, value: T): Observable<T>;
    /**
     * Adds or updates a record in store with the given value and key. Return all items present in the store
     * @param storeName The name of the store to update
     * @param items The values to insert in the DB
     *
     * @Return The return value is an Observable with the primary key of the object that was last in given array
     *
     * @error If the call to bulkPut fails the transaction will be aborted and previously inserted entities will be deleted
     */
    bulkPut<T>(storeName: string, items: Array<T>): Observable<Key>;
    /**
     * Returns all items from the store after delete.
     * @param storeName The name of the store to have the entry deleted
     * @param key The key of the entry to be deleted
     */
    delete<T>(storeName: string, key: Key): Observable<T[]>;
    /**
     * Returns true from the store after a successful delete.
     * @param storeName The name of the store to have the entry deleted
     * @param key The key of the entry to be deleted
     */
    deleteByKey(storeName: string, key: Key): Observable<boolean>;
    /**
     * Returns true if successfully delete all entries from the store.
     * @param storeName The name of the store to have the entries deleted
     */
    clear(storeName: string): Observable<boolean>;
    /**
     * Returns true if successfully delete the DB.
     */
    deleteDatabase(): Observable<boolean>;
    /**
     * Returns the open cursor event
     * @param storeName The name of the store to have the entries deleted
     * @param keyRange The key range which the cursor should be open on
     */
    openCursor(storeName: string, keyRange?: IDBKeyRange): Observable<Event>;
    /**
     * Open a cursor by index filter.
     * @param storeName The name of the store to query.
     * @param indexName The index name to filter.
     * @param keyRange The range value and criteria to apply on the index.
     */
    openCursorByIndex(storeName: string, indexName: string, keyRange: IDBKeyRange, mode?: DBMode): Observable<Event>;
    /**
     * Returns all items by an index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param keyRange  The range value and criteria to apply on the index.
     */
    getAllByIndex<T>(storeName: string, indexName: string, keyRange: IDBKeyRange): Observable<T[]>;
    /**
     * Returns all primary keys by an index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param keyRange  The range value and criteria to apply on the index.
     */
    getAllKeysByIndex(storeName: string, indexName: string, keyRange: IDBKeyRange): Observable<{
        primaryKey: any;
        key: any;
    }[]>;
    /**
     * Returns the number of rows in a store.
     * @param storeName The name of the store to query
     * @param keyRange  The range value and criteria to apply.
     */
    count(storeName: string, keyRange?: IDBValidKey | IDBKeyRange): Observable<number>;
    /**
     * Returns the number of rows in a store.
     * @param storeName The name of the store to query
     * @param keyRange  The range value and criteria to apply.
     */
    countByIndex(storeName: string, indexName: string, keyRange?: IDBValidKey | IDBKeyRange): Observable<number>;
    /**
     * Delete the store by name.
     * @param storeName The name of the store to query
     */
    deleteObjectStore(storeName: string): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxIndexedDBService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxIndexedDBService>;
}
