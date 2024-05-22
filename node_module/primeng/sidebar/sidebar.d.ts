import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/ripple";
export declare class Sidebar implements AfterViewInit, AfterContentInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    config: PrimeNGConfig;
    appendTo: any;
    blockScroll: boolean;
    style: any;
    styleClass: string;
    ariaCloseLabel: string;
    autoZIndex: boolean;
    baseZIndex: number;
    modal: boolean;
    dismissible: boolean;
    showCloseIcon: boolean;
    closeOnEscape: boolean;
    transitionOptions: string;
    templates: QueryList<any>;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    initialized: boolean;
    _visible: boolean;
    _position: string;
    _fullScreen: boolean;
    container: HTMLDivElement;
    transformOptions: any;
    mask: HTMLDivElement;
    maskClickListener: Function;
    documentEscapeListener: Function;
    animationEndListener: any;
    contentTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef, config: PrimeNGConfig);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    get visible(): boolean;
    set visible(val: boolean);
    get position(): string;
    set position(value: string);
    get fullScreen(): boolean;
    set fullScreen(value: boolean);
    show(): void;
    hide(emit?: boolean): void;
    close(event: Event): void;
    enableModality(): void;
    disableModality(): void;
    destroyModal(): void;
    onAnimationStart(event: any): void;
    onAnimationEnd(event: any): void;
    appendContainer(): void;
    bindDocumentEscapeListener(): void;
    unbindDocumentEscapeListener(): void;
    unbindMaskClickListener(): void;
    unbindGlobalListeners(): void;
    unbindAnimationEndListener(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Sidebar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Sidebar, "p-sidebar", never, { "appendTo": "appendTo"; "blockScroll": "blockScroll"; "style": "style"; "styleClass": "styleClass"; "ariaCloseLabel": "ariaCloseLabel"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "modal": "modal"; "dismissible": "dismissible"; "showCloseIcon": "showCloseIcon"; "closeOnEscape": "closeOnEscape"; "transitionOptions": "transitionOptions"; "visible": "visible"; "position": "position"; "fullScreen": "fullScreen"; }, { "onShow": "onShow"; "onHide": "onHide"; "visibleChange": "visibleChange"; }, ["templates"], ["*"], false, never>;
}
export declare class SidebarModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SidebarModule, [typeof Sidebar], [typeof i1.CommonModule, typeof i2.RippleModule], [typeof Sidebar]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SidebarModule>;
}
