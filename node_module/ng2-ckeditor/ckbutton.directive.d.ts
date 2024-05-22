/// <reference types="ckeditor" />
import { OnInit, EventEmitter } from '@angular/core';
import { CKEditorComponent } from './ckeditor.component';
import * as i0 from "@angular/core";
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
export declare class CKButtonDirective implements OnInit {
    click: EventEmitter<CKEDITOR.editor>;
    label: string;
    command: string;
    toolbar: string;
    name: string;
    icon: string;
    initialize(editor: CKEditorComponent): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CKButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CKButtonDirective, "ckbutton", never, { "label": "label"; "command": "command"; "toolbar": "toolbar"; "name": "name"; "icon": "icon"; }, { "click": "click"; }, never, never, false>;
}
