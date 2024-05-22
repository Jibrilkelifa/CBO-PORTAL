import { ElementRef, Renderer2, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class Lightbox implements AfterViewInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    private cd;
    images: any[];
    type: string;
    style: any;
    styleClass: string;
    appendTo: any;
    easing: 'ease-out';
    effectDuration: any;
    autoZIndex: boolean;
    baseZIndex: number;
    closeOnEscape: boolean;
    visible: boolean;
    loading: boolean;
    currentImage: any;
    captionText: string;
    zindex: any;
    panel: any;
    index: number;
    mask: any;
    preventDocumentClickListener: boolean;
    documentClickListener: any;
    documentEscapeListener: any;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    onImageClick(event: any, image: any, i: any, content: any): void;
    ngAfterViewInit(): void;
    onLinkClick(event: any, content: any): void;
    displayImage(image: any): void;
    show(): void;
    hide(event: any): void;
    center(): void;
    onImageLoad(event: any, content: any): void;
    prev(placeholder: any): void;
    next(placeholder: any): void;
    bindGlobalListeners(): void;
    unbindGlobalListeners(): void;
    get leftVisible(): boolean;
    get rightVisible(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lightbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lightbox, "p-lightbox", never, { "images": "images"; "type": "type"; "style": "style"; "styleClass": "styleClass"; "appendTo": "appendTo"; "easing": "easing"; "effectDuration": "effectDuration"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "closeOnEscape": "closeOnEscape"; }, {}, never, ["a", "*"], false, never>;
}
export declare class LightboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LightboxModule, [typeof Lightbox], [typeof i1.CommonModule], [typeof Lightbox]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LightboxModule>;
}
