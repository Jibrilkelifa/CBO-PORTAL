import { ObjectStoreMeta } from './ngx-indexed-db.meta';
import { Observable } from 'rxjs';
export declare function openDatabase(indexedDB: IDBFactory, dbName: string, version?: number, upgradeCallback?: (a: Event, b: IDBDatabase) => void): Promise<IDBDatabase>;
export declare function CreateObjectStore(indexedDB: IDBFactory, dbName: string, version: number, storeSchemas: ObjectStoreMeta[], migrationFactory?: () => {
    [key: number]: (db: IDBDatabase, transaction: IDBTransaction) => void;
}): void;
export declare function DeleteObjectStore(dbName: string, version: number, storeName: string): Observable<boolean>;
