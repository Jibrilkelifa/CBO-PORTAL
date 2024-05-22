import { AfterContentInit, QueryList } from '@angular/core';
import { CKEditorComponent } from './ckeditor.component';
import { CKButtonDirective } from './ckbutton.directive';
import * as i0 from "@angular/core";
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
export declare class CKGroupDirective implements AfterContentInit {
    name: string;
    previous: string | number;
    subgroupOf: string;
    toolbarButtons: QueryList<CKButtonDirective>;
    ngAfterContentInit(): void;
    initialize(editor: CKEditorComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CKGroupDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CKGroupDirective, "ckgroup", never, { "name": "name"; "previous": "previous"; "subgroupOf": "subgroupOf"; }, {}, ["toolbarButtons"], never, false>;
}
