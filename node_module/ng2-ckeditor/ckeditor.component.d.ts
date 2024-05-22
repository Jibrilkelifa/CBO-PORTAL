/// <reference types="ckeditor" />
import { EventEmitter, NgZone, QueryList, AfterViewInit, SimpleChanges, OnChanges, OnDestroy, ElementRef } from '@angular/core';
import { CKButtonDirective } from './ckbutton.directive';
import { CKGroupDirective } from './ckgroup.directive';
import * as i0 from "@angular/core";
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
export declare class CKEditorComponent implements OnChanges, AfterViewInit, OnDestroy {
    private zone;
    config: CKEDITOR.config;
    readonly: boolean;
    debounce: string;
    change: EventEmitter<CKEDITOR.eventInfo>;
    editorChange: EventEmitter<CKEDITOR.eventInfo>;
    ready: EventEmitter<CKEDITOR.eventInfo>;
    blur: EventEmitter<CKEDITOR.eventInfo>;
    focus: EventEmitter<CKEDITOR.eventInfo>;
    contentDom: EventEmitter<CKEDITOR.eventInfo>;
    fileUploadRequest: EventEmitter<CKEDITOR.eventInfo>;
    fileUploadResponse: EventEmitter<CKEDITOR.eventInfo>;
    paste: EventEmitter<CKEDITOR.eventInfo>;
    drop: EventEmitter<CKEDITOR.eventInfo>;
    host: ElementRef<HTMLTextAreaElement>;
    toolbarButtons: QueryList<CKButtonDirective>;
    toolbarGroups: QueryList<CKGroupDirective>;
    _value: string;
    instance: CKEDITOR.editor;
    debounceTimeout: number;
    private destroyed;
    /**
     * Constructor
     */
    constructor(zone: NgZone);
    get value(): string;
    set value(v: string);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * On component destroy
     */
    ngOnDestroy(): void;
    /**
     * On component view init
     */
    ngAfterViewInit(): void;
    /**
     * On component view checked
     */
    ngAfterViewChecked(): void;
    /**
     * Value update process
     */
    updateValue(value: any): void;
    /**
     * CKEditor init
     */
    ckeditorInit(config: CKEDITOR.config): void;
    /**
     * Implements ControlValueAccessor
     */
    writeValue(value: string): void;
    onChange: (_: string) => void;
    onTouched: () => void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    private documentContains;
    static ɵfac: i0.ɵɵFactoryDeclaration<CKEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CKEditorComponent, "ckeditor", never, { "config": "config"; "readonly": "readonly"; "debounce": "debounce"; "value": "value"; }, { "change": "change"; "editorChange": "editorChange"; "ready": "ready"; "blur": "blur"; "focus": "focus"; "contentDom": "contentDom"; "fileUploadRequest": "fileUploadRequest"; "fileUploadResponse": "fileUploadResponse"; "paste": "paste"; "drop": "drop"; }, ["toolbarButtons", "toolbarGroups"], never, false>;
}
