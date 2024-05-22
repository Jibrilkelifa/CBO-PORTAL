import { AnimationEvent } from '@angular/animations';
import { AfterContentInit, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { OverlayModeType, OverlayOptions, OverlayService, PrimeNGConfig, ResponsiveOverlayOptions } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/api";
export declare const OVERLAY_VALUE_ACCESSOR: any;
export declare class Overlay implements AfterContentInit, OnDestroy {
    private document;
    el: ElementRef;
    renderer: Renderer2;
    private config;
    overlayService: OverlayService;
    private zone;
    get visible(): boolean;
    set visible(value: boolean);
    get mode(): OverlayModeType | string;
    set mode(value: OverlayModeType | string);
    get style(): any;
    set style(value: any);
    get styleClass(): string;
    set styleClass(value: string);
    get contentStyle(): any;
    set contentStyle(value: any);
    get contentStyleClass(): string;
    set contentStyleClass(value: string);
    get target(): any;
    set target(value: any);
    get appendTo(): any;
    set appendTo(value: any);
    get autoZIndex(): boolean;
    set autoZIndex(value: boolean);
    get baseZIndex(): number;
    set baseZIndex(value: number);
    get showTransitionOptions(): string;
    set showTransitionOptions(value: string);
    get hideTransitionOptions(): string;
    set hideTransitionOptions(value: string);
    get listener(): any;
    set listener(value: any);
    get responsive(): ResponsiveOverlayOptions | undefined;
    set responsive(val: ResponsiveOverlayOptions | undefined);
    get options(): OverlayOptions | undefined;
    set options(val: OverlayOptions | undefined);
    visibleChange: EventEmitter<any>;
    onBeforeShow: EventEmitter<any>;
    onShow: EventEmitter<any>;
    onBeforeHide: EventEmitter<any>;
    onHide: EventEmitter<any>;
    onAnimationStart: EventEmitter<any>;
    onAnimationDone: EventEmitter<any>;
    templates: QueryList<any> | undefined;
    overlayViewChild: ElementRef | undefined;
    contentViewChild: ElementRef | undefined;
    contentTemplate: TemplateRef<any> | undefined;
    _visible: boolean;
    _mode: OverlayModeType | string;
    _style: any;
    _styleClass: string | undefined;
    _contentStyle: any;
    _contentStyleClass: string | undefined;
    _target: any;
    _appendTo: 'body' | HTMLElement | undefined;
    _autoZIndex: boolean | undefined;
    _baseZIndex: number | undefined;
    _showTransitionOptions: string | undefined;
    _hideTransitionOptions: string | undefined;
    _listener: any;
    _responsive: ResponsiveOverlayOptions | undefined;
    _options: OverlayOptions | undefined;
    modalVisible: boolean;
    isOverlayClicked: boolean;
    isOverlayContentClicked: boolean;
    scrollHandler: any;
    documentClickListener: any;
    documentResizeListener: any;
    private documentKeyboardListener;
    private window;
    protected transformOptions: any;
    get modal(): boolean;
    get overlayMode(): string;
    get overlayOptions(): OverlayOptions;
    get overlayResponsiveOptions(): ResponsiveOverlayOptions;
    get overlayResponsiveDirection(): import("primeng/api").ResponsiveOverlayDirectionType;
    get overlayEl(): any;
    get contentEl(): any;
    get targetEl(): any;
    constructor(document: Document, el: ElementRef, renderer: Renderer2, config: PrimeNGConfig, overlayService: OverlayService, zone: NgZone);
    ngAfterContentInit(): void;
    show(overlay?: HTMLElement, isFocus?: boolean): void;
    hide(overlay?: HTMLElement, isFocus?: boolean): void;
    alignOverlay(): void;
    onVisibleChange(visible: boolean): void;
    onOverlayClick(event: any): void;
    onOverlayContentClick(event: MouseEvent): void;
    onOverlayContentAnimationStart(event: AnimationEvent): void;
    onOverlayContentAnimationDone(event: AnimationEvent): void;
    handleEvents(name: string, params: any): void;
    bindListeners(): void;
    unbindListeners(): void;
    bindScrollListener(): void;
    unbindScrollListener(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    bindDocumentResizeListener(): void;
    unbindDocumentResizeListener(): void;
    bindDocumentKeyboardListener(): void;
    unbindDocumentKeyboardListener(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Overlay, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Overlay, "p-overlay", never, { "visible": "visible"; "mode": "mode"; "style": "style"; "styleClass": "styleClass"; "contentStyle": "contentStyle"; "contentStyleClass": "contentStyleClass"; "target": "target"; "appendTo": "appendTo"; "autoZIndex": "autoZIndex"; "baseZIndex": "baseZIndex"; "showTransitionOptions": "showTransitionOptions"; "hideTransitionOptions": "hideTransitionOptions"; "listener": "listener"; "responsive": "responsive"; "options": "options"; }, { "visibleChange": "visibleChange"; "onBeforeShow": "onBeforeShow"; "onShow": "onShow"; "onBeforeHide": "onBeforeHide"; "onHide": "onHide"; "onAnimationStart": "onAnimationStart"; "onAnimationDone": "onAnimationDone"; }, ["templates"], ["*"], false, never>;
}
export declare class OverlayModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<OverlayModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<OverlayModule, [typeof Overlay], [typeof i1.CommonModule, typeof i2.SharedModule], [typeof Overlay, typeof i2.SharedModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<OverlayModule>;
}