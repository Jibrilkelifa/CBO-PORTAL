import * as i0 from '@angular/core';
import { Directive, Input, NgModule, HostBinding, Injectable, Component, EventEmitter, Output, ContentChildren, HostListener, Inject, ViewChild, forwardRef, Optional, ElementRef, ContentChild, PLATFORM_ID, TemplateRef, ViewContainerRef, Pipe, ChangeDetectionStrategy, VERSION } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import * as i1 from '@angular/animations';
import { animation, animate, style, useAnimation, trigger, state, transition, group, query } from '@angular/animations';
import * as i3 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, fromEvent, zipWith, withLatestFrom, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { createPopper } from '@popperjs/core';
import * as i1$2 from '@angular/cdk/layout';
import * as i3$1 from '@angular/cdk/a11y';
import { A11yModule } from '@angular/cdk/a11y';
import { __classPrivateFieldSet, __classPrivateFieldGet } from 'tslib';
import * as i5 from '@coreui/icons-angular';
import { IconModule } from '@coreui/icons-angular';

var BreakpointInfix;
(function (BreakpointInfix) {
    BreakpointInfix["xs"] = "xs";
    BreakpointInfix["sm"] = "sm";
    BreakpointInfix["md"] = "md";
    BreakpointInfix["lg"] = "lg";
    BreakpointInfix["xl"] = "xl";
    BreakpointInfix["xxl"] = "xxl";
})(BreakpointInfix || (BreakpointInfix = {}));

class HtmlAttributesDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        const attribs = this.cHtmlAttr;
        for (const attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    }
    setStyle(styles) {
        for (const style in styles) {
            if (style) {
                this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
            }
        }
    }
    addClass(classes) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(this.el.nativeElement, element);
        });
    }
    setAttrib(key, value) {
        value !== null ?
            this.renderer.setAttribute(this.el.nativeElement, key, value) :
            this.renderer.removeAttribute(this.el.nativeElement, key);
    }
}
HtmlAttributesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HtmlAttributesDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
HtmlAttributesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: { cHtmlAttr: "cHtmlAttr" }, exportAs: ["cHtmlAttr"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HtmlAttributesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cHtmlAttr]',
                    exportAs: 'cHtmlAttr'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { cHtmlAttr: [{
                type: Input
            }] } });

class TemplateIdDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
TemplateIdDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TemplateIdDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
TemplateIdDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TemplateIdDirective, selector: "[cTemplateId]", inputs: { id: ["cTemplateId", "id"] }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TemplateIdDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTemplateId]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cTemplateId']
            }] } });

class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            // providers: [
            //   {provide: OutClickService}
            // ]
        };
    }
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, declarations: [
        // OutClickDirective,
        HtmlAttributesDirective,
        TemplateIdDirective], imports: [CommonModule], exports: [
        // OutClickDirective,
        HtmlAttributesDirective,
        TemplateIdDirective] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        // OutClickDirective,
                        HtmlAttributesDirective,
                        TemplateIdDirective
                    ],
                    exports: [
                        // OutClickDirective,
                        HtmlAttributesDirective,
                        TemplateIdDirective
                    ],
                    providers: []
                }]
        }] });

class AccordionButtonDirective {
    constructor() {
        /**
        * Default type for cAccordionButton. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
    }
    get hostClasses() {
        return {
            'accordion-button': true,
            collapsed: this.collapsed
        };
    }
    get ariaExpanded() {
        return !this.collapsed;
    }
}
AccordionButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AccordionButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: AccordionButtonDirective, selector: "[cAccordionButton]", inputs: { collapsed: "collapsed", type: "type" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses", "attr.aria-expanded": "this.ariaExpanded" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAccordionButton]'
                }]
        }], propDecorators: { collapsed: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaExpanded: [{
                type: HostBinding,
                args: ['attr.aria-expanded']
            }] } });

class AccordionService {
    constructor() {
        this.items = [];
        this.alwaysOpen = false;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    toggleItem(item) {
        item.visible = !item.visible;
        this.closeOtherItems(item);
    }
    closeOtherItems(openItem) {
        if (!this.alwaysOpen) {
            this.items.forEach((item) => {
                if (item !== openItem) {
                    item.visible = false;
                }
            });
        }
    }
}
AccordionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AccordionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AccordionComponent {
    /**
     * Make accordion items stay open when another item is opened
     * @type boolean
     */
    set alwaysOpen(value) {
        this.accordionService.alwaysOpen = coerceBooleanProperty(value);
    }
    get alwaysOpen() {
        return this.accordionService.alwaysOpen;
    }
    get hostClasses() {
        return {
            accordion: true,
            'accordion-flush': !!this.flush
        };
    }
    constructor(accordionService) {
        this.accordionService = accordionService;
    }
}
AccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionComponent, deps: [{ token: AccordionService }], target: i0.ɵɵFactoryTarget.Component });
AccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AccordionComponent, selector: "c-accordion", inputs: { flush: "flush", alwaysOpen: "alwaysOpen" }, host: { properties: { "class": "this.hostClasses" } }, providers: [AccordionService], exportAs: ["cAccordionItem"], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-accordion', template: `<ng-content></ng-content>`, exportAs: 'cAccordionItem', providers: [AccordionService], styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: AccordionService }]; }, propDecorators: { flush: [{
                type: Input
            }], alwaysOpen: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

const expandAnimation = animation([
    animate('{{ time }} {{ easing }}')
]);
const collapseAnimation = animation([
    style({ height: '*', minHeight: '*' }),
    animate('{{ time }} {{ easing }}', style({ height: 0, minHeight: 0 }))
]);
const expandHorizontalAnimation = animation([
    animate('{{ time }} {{ easing }}')
]);
const collapseHorizontalAnimation = animation([
    // style({ opacity: '*' }),
    animate('{{ time }} {{ easing }}'
    // style({ opacity: 0 })
    )
]);

// todo
// tslint:disable-next-line:no-conflicting-lifecycle
class CollapseDirective {
    /**
     * @ignore
     */
    set animate(value) {
        this._animate = value;
    }
    get animate() {
        return this._animate;
    }
    /**
     * Set horizontal collapsing to transition the width instead of height.
     */
    set horizontal(value) {
        this._horizontal = coerceBooleanProperty(value);
    }
    get horizontal() {
        return this._horizontal;
    }
    /**
     * Toggle the visibility of collapsible element.
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    /**
     * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
     */
    set navbar(value) {
        this._navbar = coerceBooleanProperty(value);
    }
    ;
    get navbar() {
        return this._navbar;
    }
    constructor(hostElement, renderer, animationBuilder) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.animationBuilder = animationBuilder;
        this._animate = true;
        this._horizontal = false;
        this._visible = false;
        this._navbar = false;
        /**
         * @ignore
         */
        this.duration = '350ms';
        /**
         * @ignore
         */
        this.transition = 'ease';
        /**
         * Event emitted on visibility change. [docs]
         * @type string
         */
        this.collapseChange = new EventEmitter();
        this.collapsing = false;
        this.host = this.hostElement.nativeElement;
        this.renderer.setStyle(this.host, 'display', 'none');
    }
    get hostClasses() {
        return {
            'navbar-collapse': this.navbar,
            'collapse-horizontal': this.horizontal
        };
    }
    ngAfterViewInit() {
        if (this.visible) {
            this.toggle();
        }
    }
    ngOnDestroy() {
        this.destroyPlayer();
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            if (!changes['visible'].firstChange || !changes['visible'].currentValue) {
                this.toggle(changes['visible'].currentValue);
            }
        }
    }
    ngDoCheck() {
        if (this._visible !== this.visible) {
            this.toggle();
        }
    }
    toggle(visible = this.visible) {
        this.createPlayer(visible);
        this.player?.play();
    }
    destroyPlayer() {
        this.player?.destroy();
    }
    createPlayer(visible = this.visible) {
        if (this.player?.hasStarted()) {
            this.destroyPlayer();
        }
        if (visible) {
            this.renderer.removeStyle(this.host, 'display');
        }
        const duration = this.animate ? this.duration : '0ms';
        const expand = this.horizontal ? expandHorizontalAnimation : expandAnimation;
        const collapse = this.horizontal ? collapseHorizontalAnimation : collapseAnimation;
        const dimension = this.horizontal ? 'width' : 'height';
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        const animationFactory = this.animationBuilder.build(useAnimation(visible ? expand : collapse, { params: { time: duration, easing: this.transition } }));
        this.player = animationFactory.create(this.host);
        this.renderer.setStyle(this.host, dimension, visible ? 0 : `${this.host.getBoundingClientRect()[dimension]}px`);
        !visible && this.host.offsetHeight;
        this.player.onStart(() => {
            this.setMaxSize();
            this.renderer.removeClass(this.host, 'collapse');
            this.renderer.addClass(this.host, 'collapsing');
            this.renderer.removeClass(this.host, 'show');
            this.collapsing = true;
            if (visible) {
                // @ts-ignore
                this.renderer.setStyle(this.host, dimension, `${this.host[scrollSize]}px`);
            }
            else {
                this.renderer.setStyle(this.host, dimension, '');
            }
            this.collapseChange.emit(visible ? 'opening' : 'collapsing');
        });
        this.player.onDone(() => {
            this.visible = visible;
            this.collapsing = false;
            this.renderer.removeClass(this.host, 'collapsing');
            this.renderer.addClass(this.host, 'collapse');
            if (visible) {
                this.renderer.addClass(this.host, 'show');
                this.renderer.setStyle(this.host, dimension, '');
            }
            else {
                this.renderer.removeClass(this.host, 'show');
            }
            this.collapseChange.emit(visible ? 'open' : 'collapsed');
        });
    }
    setMaxSize() {
        // setTimeout(() => {
        if (this.horizontal) {
            this.scrollWidth = this.host.scrollWidth;
            this.scrollWidth > 0 && this.renderer.setStyle(this.host, 'maxWidth', `${this.scrollWidth}px`);
            // } else {
            // this.scrollHeight = this.host.scrollHeight;
            // this.scrollHeight > 0 && this.renderer.setStyle(this.host, 'maxHeight', `${this.scrollHeight}px`);
        }
        // });
    }
}
CollapseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CollapseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.AnimationBuilder }], target: i0.ɵɵFactoryTarget.Directive });
CollapseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CollapseDirective, selector: "[cCollapse]", inputs: { animate: "animate", horizontal: "horizontal", visible: "visible", navbar: "navbar", duration: "duration", transition: "transition" }, outputs: { collapseChange: "collapseChange" }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cCollapse"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CollapseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCollapse]',
                    exportAs: 'cCollapse'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.AnimationBuilder }]; }, propDecorators: { animate: [{
                type: Input
            }], horizontal: [{
                type: Input
            }], visible: [{
                type: Input
            }], navbar: [{
                type: Input
            }], duration: [{
                type: Input
            }], transition: [{
                type: Input
            }], collapseChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

let nextId$1 = 0;
class AccordionItemComponent {
    /**
     * Toggle an accordion item programmatically
     * @type boolean
     * @default false
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    set open(value) {
        console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
        this.visible = value || this.visible;
    }
    get open() {
        return this.visible;
    }
    get hostClasses() {
        return {
            'accordion-item': true,
        };
    }
    constructor(accordionService) {
        this.accordionService = accordionService;
        this._visible = false;
        this.contentId = `accordion-item-${nextId$1++}`;
        this.itemContext = { $implicit: this.visible };
        this.templates = {};
    }
    ngOnInit() {
        this.accordionService.addItem(this);
    }
    ngOnDestroy() {
        this.accordionService.removeItem(this);
    }
    toggleItem() {
        this.accordionService.toggleItem(this);
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
}
AccordionItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionItemComponent, deps: [{ token: AccordionService }], target: i0.ɵɵFactoryTarget.Component });
AccordionItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AccordionItemComponent, selector: "c-accordion-item", inputs: { visible: "visible", open: "open" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cAccordionItem"], ngImport: i0, template: "<ng-container>\n  <div class=\"accordion-header\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext\"></ng-container>\n  </div>\n  <div class=\"accordion-collapse\" cCollapse [visible]=\"visible\" [attr.aria-expanded]=\"visible\" [id]=\"contentId\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #defaultAccordionHeaderTemplate>\n  <button cAccordionButton [collapsed]=\"!visible\" [attr.aria-controls]=\"contentId\" (click)=\"toggleItem()\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext\">\n    </ng-container>\n  </button>\n</ng-template>\n\n<ng-template #defaultAccordionHeaderContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #defaultAccordionBodyTemplate>\n  <div class=\"accordion-body\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext\">\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #defaultAccordionBodyContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"], dependencies: [{ kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: CollapseDirective, selector: "[cCollapse]", inputs: ["animate", "horizontal", "visible", "navbar", "duration", "transition"], outputs: ["collapseChange"], exportAs: ["cCollapse"] }, { kind: "directive", type: AccordionButtonDirective, selector: "[cAccordionButton]", inputs: ["collapsed", "type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-accordion-item', exportAs: 'cAccordionItem', template: "<ng-container>\n  <div class=\"accordion-header\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext\"></ng-container>\n  </div>\n  <div class=\"accordion-collapse\" cCollapse [visible]=\"visible\" [attr.aria-expanded]=\"visible\" [id]=\"contentId\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #defaultAccordionHeaderTemplate>\n  <button cAccordionButton [collapsed]=\"!visible\" [attr.aria-controls]=\"contentId\" (click)=\"toggleItem()\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext\">\n    </ng-container>\n  </button>\n</ng-template>\n\n<ng-template #defaultAccordionHeaderContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #defaultAccordionBodyTemplate>\n  <div class=\"accordion-body\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext\">\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #defaultAccordionBodyContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: AccordionService }]; }, propDecorators: { visible: [{
                type: Input
            }], open: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }] } });

class CollapseModule {
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CollapseModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CollapseModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CollapseModule, declarations: [CollapseDirective], imports: [CommonModule], exports: [CollapseDirective] });
CollapseModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CollapseModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CollapseModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CollapseDirective],
                    exports: [CollapseDirective],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class AccordionModule {
}
AccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, declarations: [AccordionComponent,
        AccordionButtonDirective,
        AccordionItemComponent], imports: [CommonModule,
        CollapseModule,
        SharedModule], exports: [AccordionComponent,
        AccordionButtonDirective,
        AccordionItemComponent] });
AccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, providers: [
        AccordionService
    ], imports: [CommonModule,
        CollapseModule,
        SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AccordionComponent,
                        AccordionButtonDirective,
                        AccordionItemComponent,
                    ],
                    imports: [
                        CommonModule,
                        CollapseModule,
                        SharedModule
                    ],
                    exports: [
                        AccordionComponent,
                        AccordionButtonDirective,
                        AccordionItemComponent,
                    ],
                    providers: [
                        AccordionService
                    ]
                }]
        }] });

class AlertHeadingDirective {
    get hostClasses() {
        return {
            'alert-heading': true,
        };
    }
    constructor() { }
}
AlertHeadingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertHeadingDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AlertHeadingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: AlertHeadingDirective, selector: "[cAlertHeading]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertHeadingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAlertHeading]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class AlertLinkDirective {
    get hostClasses() {
        return {
            'alert-link': true,
        };
    }
    constructor() { }
}
AlertLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AlertLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: AlertLinkDirective, selector: "[cAlertLink]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAlertLink]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ButtonDirective {
    constructor() {
        this._active = false;
        this._disabled = false;
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
         * @type Colors
         */
        this.color = 'primary';
        /**
         * Size the component small or large.
         * @type {'sm' | 'lg'}
         */
        this.size = '';
        /**
         * Specifies the type of button. Always specify the type attribute for the `<button>` element.
         * Different browsers may use different default types for the `<button>` element.
         */
        this.type = 'button';
    }
    /**
     * Toggle the active state for the component. [docs]
     * @type boolean
     */
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = coerceBooleanProperty(value);
    }
    /**
     * Toggle the disabled state for the component.
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            btn: true,
            [`btn-${this.color}`]: !!this.color && !this.variant,
            [`btn-${this.variant}`]: !!this.variant && !this.color,
            [`btn-${this.variant}-${this.color}`]: !!this.variant && !!this.color,
            [`btn-${this.size}`]: !!this.size,
            [`${this.shape}`]: !!this.shape,
            disabled: this.disabled,
            active: this.active
        };
    }
    get ariaDisabled() {
        return this.disabled || null;
    }
    ;
    get isActive() {
        return this.active || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get tabIndex() {
        return this.disabled ? '-1' : null;
    }
}
ButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ButtonDirective, selector: "[cButton]", inputs: { active: "active", color: "color", disabled: "disabled", shape: "shape", size: "size", type: "type", variant: "variant" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses", "attr.aria-disabled": "this.ariaDisabled", "attr.aria-pressed": "this.isActive", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.tabIndex" } }, exportAs: ["cButton"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cButton]',
                    exportAs: 'cButton'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { active: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], variant: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], isActive: [{
                type: HostBinding,
                args: ['attr.aria-pressed']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }] } });

class ButtonCloseDirective extends ButtonDirective {
    constructor() {
        super(...arguments);
        this._white = false;
    }
    /**
     * Change the default color to white.
     * @type boolean
     */
    get white() {
        return this._white;
    }
    set white(value) {
        this._white = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            btn: true,
            'btn-close': true,
            'btn-close-white': this.white,
            [`btn-${this.size}`]: !!this.size,
            disabled: this.disabled,
            active: this.active,
        };
    }
}
ButtonCloseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonCloseDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
ButtonCloseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ButtonCloseDirective, selector: "[cButtonClose]", inputs: { white: "white" }, host: { properties: { "class": "this.hostClasses" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cButtonClose]'
                }]
        }], propDecorators: { white: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class AlertComponent {
    constructor() {
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         *
         * @type Colors
         * @default 'primary'
         */
        this.color = 'primary';
        this._dismissible = false;
        this._fade = false;
        /**
         * Default role for alert. [docs]
         * @type string
         * @default 'alert'
         */
        this.role = 'alert';
        this._visible = true;
        /**
         * Event triggered on the alert dismiss.
         */
        this.visibleChange = new EventEmitter();
        this.templates = {};
    }
    /**
     * Optionally adds a close button to alert and allow it to self dismiss.
     * @type boolean
     */
    get dismissible() {
        return this._dismissible;
    }
    set dismissible(value) {
        this._dismissible = coerceBooleanProperty(value);
    }
    /**
     * Adds animation for dismissible alert.
     * @type boolean
     */
    get fade() {
        return this._fade;
    }
    set fade(value) {
        this._fade = coerceBooleanProperty(value);
    }
    /**
     * Toggle the visibility of alert component.
     * @type boolean
     */
    set visible(value) {
        if (this._visible !== value) {
            this._visible = coerceBooleanProperty(value);
            this.visibleChange.emit(value);
        }
    }
    ;
    get visible() {
        return this._visible;
    }
    get animationDisabled() {
        return !this.fade;
    }
    get animateType() {
        return this.visible ? 'show' : 'hide';
    }
    get hostClasses() {
        return {
            alert: true,
            'alert-dismissible': this.dismissible,
            fade: this.fade,
            show: !this.hide,
            [`alert-${this.color}`]: !!this.color && this.variant !== 'solid',
            [`bg-${this.color}`]: !!this.color && this.variant === 'solid',
            'text-white': !!this.color && this.variant === 'solid'
        };
    }
    onAnimationStart($event) {
        this.onAnimationEvent($event);
    }
    onAnimationDone($event) {
        this.onAnimationEvent($event);
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
    onAnimationEvent(event) {
        this.hide = event.phaseName === 'start' && event.toState === 'show';
        if (event.phaseName === 'done') {
            this.hide = (event.toState === 'hide' || event.toState === 'void');
            if (event.toState === 'show') {
                this.hide = false;
            }
        }
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AlertComponent, selector: "c-alert", inputs: { color: "color", dismissible: "dismissible", fade: "fade", role: "role", variant: "variant", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "@fadeInOut.start": "onAnimationStart($event)", "@fadeInOut.done": "onAnimationDone($event)" }, properties: { "attr.role": "this.role", "@.disabled": "this.animationDisabled", "@fadeInOut": "this.animateType", "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cAlert"], ngImport: i0, template: "<ng-container *ngIf=\"visible || !hide\">\n  <ng-template [ngIf]=\"dismissible\">\n    <ng-container *ngTemplateOutlet=\"templates?.alertButtonCloseTemplate || defaultAlertButtonCloseTemplate\">\n    </ng-container>\n  </ng-template>\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #defaultAlertButtonCloseTemplate>\n  <button (click)=\"visible=false\" aria-label=\"Close\" cButtonClose></button>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: ButtonCloseDirective, selector: "[cButtonClose]", inputs: ["white"] }], animations: [
        trigger('fadeInOut', [
            state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
            state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
            state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
            transition('show => hide', [
                animate('.3s ease-out'),
            ]),
            transition('hide => show', [
                animate('.3s ease-in'),
            ]),
            transition('show => void', [
                animate('.3s ease-out'),
            ]),
            transition('void => show', [
                animate('.3s ease-in'),
            ]),
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-alert', exportAs: 'cAlert', animations: [
                        trigger('fadeInOut', [
                            state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
                            state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                            state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                            transition('show => hide', [
                                animate('.3s ease-out'),
                            ]),
                            transition('hide => show', [
                                animate('.3s ease-in'),
                            ]),
                            transition('show => void', [
                                animate('.3s ease-out'),
                            ]),
                            transition('void => show', [
                                animate('.3s ease-in'),
                            ]),
                        ])
                    ], template: "<ng-container *ngIf=\"visible || !hide\">\n  <ng-template [ngIf]=\"dismissible\">\n    <ng-container *ngTemplateOutlet=\"templates?.alertButtonCloseTemplate || defaultAlertButtonCloseTemplate\">\n    </ng-container>\n  </ng-template>\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #defaultAlertButtonCloseTemplate>\n  <button (click)=\"visible=false\" aria-label=\"Close\" cButtonClose></button>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], dismissible: [{
                type: Input
            }], fade: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], variant: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], animationDisabled: [{
                type: HostBinding,
                args: ['@.disabled']
            }], animateType: [{
                type: HostBinding,
                args: ['@fadeInOut']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], onAnimationStart: [{
                type: HostListener,
                args: ['@fadeInOut.start', ['$event']]
            }], onAnimationDone: [{
                type: HostListener,
                args: ['@fadeInOut.done', ['$event']]
            }] } });

class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ButtonModule, declarations: [ButtonDirective,
        ButtonCloseDirective], imports: [CommonModule], exports: [ButtonDirective,
        ButtonCloseDirective] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonDirective,
                        ButtonCloseDirective,
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        ButtonDirective,
                        ButtonCloseDirective,
                    ]
                }]
        }] });

class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, declarations: [AlertComponent,
        AlertHeadingDirective,
        AlertLinkDirective], imports: [CommonModule,
        ButtonModule], exports: [AlertComponent,
        AlertHeadingDirective,
        AlertLinkDirective] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, imports: [CommonModule,
        ButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ButtonModule
                    ],
                    exports: [
                        AlertComponent,
                        AlertHeadingDirective,
                        AlertLinkDirective
                    ],
                    declarations: [
                        AlertComponent,
                        AlertHeadingDirective,
                        AlertLinkDirective
                    ]
                }]
        }] });

class AvatarComponent {
    constructor() {
        /**
         * Size the component small, large, or extra large.
         * @default 'md'
         */
        this.size = 'md';
    }
    get statusClass() {
        return {
            'avatar-status': true,
            [`bg-${this.status}`]: !!this.status
        };
    }
    get hostClasses() {
        return {
            avatar: true,
            [`avatar-${this.size}`]: !!this.size,
            [`bg-${this.color}`]: !!this.color,
            [`${this.shape}`]: !!this.shape,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
}
AvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AvatarComponent, selector: "c-avatar", inputs: { color: "color", shape: "shape", size: "size", src: "src", status: "status", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-container>\n  <ng-container *ngTemplateOutlet=\"defaultImageTemplate\"></ng-container>\n  <span *ngIf=\"!!status\" [ngClass]=\"statusClass\"></span>\n</ng-container>\n\n<ng-template #defaultImageTemplate>\n  <img *ngIf=\"!!src; else imageContent\" [src]=\"src\" class=\"avatar-img\" />\n  <ng-template #imageContent>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-avatar', template: "<ng-container>\n  <ng-container *ngTemplateOutlet=\"defaultImageTemplate\"></ng-container>\n  <span *ngIf=\"!!status\" [ngClass]=\"statusClass\"></span>\n</ng-container>\n\n<ng-template #defaultImageTemplate>\n  <img *ngIf=\"!!src; else imageContent\" [src]=\"src\" class=\"avatar-img\" />\n  <ng-template #imageContent>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], src: [{
                type: Input
            }], status: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class AvatarModule {
}
AvatarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AvatarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AvatarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: AvatarModule, declarations: [AvatarComponent], imports: [CommonModule], exports: [AvatarComponent] });
AvatarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AvatarModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AvatarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AvatarComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        AvatarComponent
                    ]
                }]
        }] });

class BadgeComponent {
    constructor() { }
    get hostClasses() {
        const positionClasses = {
            'position-absolute': !!this.position,
            'translate-middle': !!this.position,
            'top-0': this.position?.includes('top'),
            'top-100': this.position?.includes('bottom'),
            'start-100': this.position?.includes('end'),
            'start-0': this.position?.includes('start'),
        };
        return Object.assign({
            badge: true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
            [`badge-${this.size}`]: !!this.size,
            [`${this.shape}`]: !!this.shape,
        }, !!this.position ? positionClasses : {});
    }
}
BadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: BadgeComponent, selector: "c-badge", inputs: { color: "color", position: "position", shape: "shape", size: "size", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-badge', template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], position: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class BadgeModule {
}
BadgeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BadgeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BadgeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: BadgeModule, declarations: [BadgeComponent], imports: [CommonModule], exports: [BadgeComponent] });
BadgeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BadgeModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BadgeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BadgeComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        BadgeComponent
                    ]
                }]
        }] });

class BreadcrumbItemComponent {
    get ariaCurrent() {
        return this.active ? 'page' : null;
    }
    get hostClasses() {
        return {
            'breadcrumb-item': true,
            active: this.active
        };
    }
}
BreadcrumbItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: BreadcrumbItemComponent, selector: "c-breadcrumb-item", inputs: { active: "active", url: "url", attributes: "attributes", linkProps: "linkProps" }, host: { properties: { "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses" } }, ngImport: i0, template: "<a *ngIf=\"!active; else activeItem\"\n   [routerLink]=\"url\"\n   [cHtmlAttr]=\"attributes ?? {}\"\n   [target]=\"attributes?.['target']\"\n   [queryParams]=\"linkProps?.queryParams ?? null\"\n   [fragment]=\"linkProps?.fragment\"\n   [queryParamsHandling]=\"linkProps?.queryParamsHandling ?? null\"\n   [preserveFragment]=\"linkProps?.preserveFragment ?? false\"\n   [skipLocationChange]=\"linkProps?.skipLocationChange ?? false\"\n   [replaceUrl]=\"linkProps?.replaceUrl ?? false\"\n   [state]=\"linkProps?.state ?? {}\"\n>\n  <ng-container *ngTemplateOutlet=\"defaultBreadcrumbItemContentTemplate\"></ng-container>\n</a>\n\n<ng-template #activeItem>\n  <span [cHtmlAttr]=\"attributes ?? {}\">\n      <ng-container *ngTemplateOutlet=\"defaultBreadcrumbItemContentTemplate\"></ng-container>\n  </span>\n</ng-template>\n\n<ng-template #defaultBreadcrumbItemContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-breadcrumb-item', template: "<a *ngIf=\"!active; else activeItem\"\n   [routerLink]=\"url\"\n   [cHtmlAttr]=\"attributes ?? {}\"\n   [target]=\"attributes?.['target']\"\n   [queryParams]=\"linkProps?.queryParams ?? null\"\n   [fragment]=\"linkProps?.fragment\"\n   [queryParamsHandling]=\"linkProps?.queryParamsHandling ?? null\"\n   [preserveFragment]=\"linkProps?.preserveFragment ?? false\"\n   [skipLocationChange]=\"linkProps?.skipLocationChange ?? false\"\n   [replaceUrl]=\"linkProps?.replaceUrl ?? false\"\n   [state]=\"linkProps?.state ?? {}\"\n>\n  <ng-container *ngTemplateOutlet=\"defaultBreadcrumbItemContentTemplate\"></ng-container>\n</a>\n\n<ng-template #activeItem>\n  <span [cHtmlAttr]=\"attributes ?? {}\">\n      <ng-container *ngTemplateOutlet=\"defaultBreadcrumbItemContentTemplate\"></ng-container>\n  </span>\n</ng-template>\n\n<ng-template #defaultBreadcrumbItemContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"] }]
        }], propDecorators: { active: [{
                type: Input
            }], url: [{
                type: Input
            }], attributes: [{
                type: Input
            }], linkProps: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class BreadcrumbComponent {
    get hostClasses() {
        return {
            breadcrumb: true
        };
    }
    constructor() {
        /**
         * Default aria-label for breadcrumb. [docs]
         * @type string
         * @default 'breadcrumb'
         */
        this.ariaLabel = 'breadcrumb';
        /**
         * Default role for breadcrumb. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: BreadcrumbComponent, selector: "c-breadcrumb", inputs: { ariaLabel: "ariaLabel", role: "role" }, host: { properties: { "attr.aria-label": "this.ariaLabel", "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-breadcrumb', template: "<ng-content></ng-content>\n\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { ariaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }, {
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class BreadcrumbRouterService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.outlet = 'primary';
        this.breadcrumbsBehaviorSubject = new BehaviorSubject(new Array());
        this.breadcrumbs$ = this.breadcrumbsBehaviorSubject.asObservable();
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
            const breadcrumbs = [];
            let currentRoute = this.route.root;
            let url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach((childRoute) => {
                    // console.log('breadcrumb event', event, 'route', route);
                    if (childRoute.outlet === this.outlet) {
                        const routeSnapshot = childRoute.snapshot;
                        url +=
                            '/' +
                                routeSnapshot.url.map((segment) => segment.path).join('/');
                        breadcrumbs.push({
                            label: childRoute.snapshot.data['title'] || '',
                            url,
                            queryParams: routeSnapshot.queryParams,
                        });
                        currentRoute = childRoute;
                    }
                });
            } while (currentRoute);
            this.breadcrumbsBehaviorSubject.next(Object.assign([], breadcrumbs));
            // console.log('breadcrumbs', breadcrumbs);
            return breadcrumbs;
        });
    }
}
BreadcrumbRouterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterService, deps: [{ token: i3.Router }, { token: i3.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbRouterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i3.Router }, { type: i3.ActivatedRoute }]; } });

class BreadcrumbRouterComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.breadcrumbs = this.service.breadcrumbs$;
    }
    ngOnChanges(changes) {
        if (changes['items']) {
            this.setup();
        }
    }
    setup() {
        if (this.items && this.items.length > 0) {
            this.breadcrumbs = new Observable((observer) => {
                if (this.items) {
                    observer.next(this.items);
                }
            });
        }
    }
    ngOnDestroy() {
        this.breadcrumbs = undefined;
    }
}
BreadcrumbRouterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterComponent, deps: [{ token: BreadcrumbRouterService }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbRouterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: BreadcrumbRouterComponent, selector: "c-breadcrumb-router, [cBreadcrumbRouter]", inputs: { items: "items" }, usesOnChanges: true, ngImport: i0, template: "<c-breadcrumb class=\"m-0\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last=\"last\">\n    <ng-container *ngIf=\"breadcrumb?.label && (breadcrumb?.url?.slice(-1) === '/' || last)\">\n      <c-breadcrumb-item\n        [active]=\"last\"\n        [url]=\"breadcrumb?.url\"\n        [attributes]=\"breadcrumb?.attributes\"\n        [linkProps]=\"breadcrumb?.linkProps\"\n      >\n        {{ breadcrumb?.label }}\n      </c-breadcrumb-item>\n    </ng-container>\n  </ng-template>\n</c-breadcrumb>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: BreadcrumbItemComponent, selector: "c-breadcrumb-item", inputs: ["active", "url", "attributes", "linkProps"] }, { kind: "component", type: BreadcrumbComponent, selector: "c-breadcrumb", inputs: ["ariaLabel", "role"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-breadcrumb-router, [cBreadcrumbRouter]', template: "<c-breadcrumb class=\"m-0\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last=\"last\">\n    <ng-container *ngIf=\"breadcrumb?.label && (breadcrumb?.url?.slice(-1) === '/' || last)\">\n      <c-breadcrumb-item\n        [active]=\"last\"\n        [url]=\"breadcrumb?.url\"\n        [attributes]=\"breadcrumb?.attributes\"\n        [linkProps]=\"breadcrumb?.linkProps\"\n      >\n        {{ breadcrumb?.label }}\n      </c-breadcrumb-item>\n    </ng-container>\n  </ng-template>\n</c-breadcrumb>\n" }]
        }], ctorParameters: function () { return [{ type: BreadcrumbRouterService }]; }, propDecorators: { items: [{
                type: Input
            }] } });

class BreadcrumbModule {
}
BreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, declarations: [BreadcrumbRouterComponent,
        BreadcrumbItemComponent,
        BreadcrumbComponent], imports: [CommonModule, RouterModule, SharedModule], exports: [BreadcrumbComponent,
        BreadcrumbItemComponent,
        BreadcrumbRouterComponent] });
BreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, providers: [BreadcrumbRouterService], imports: [CommonModule, RouterModule, SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, SharedModule],
                    exports: [
                        BreadcrumbComponent,
                        BreadcrumbItemComponent,
                        BreadcrumbRouterComponent,
                    ],
                    declarations: [
                        BreadcrumbRouterComponent,
                        BreadcrumbItemComponent,
                        BreadcrumbComponent,
                    ],
                    providers: [BreadcrumbRouterService],
                }]
        }] });

class ButtonGroupComponent {
    get hostClasses() {
        return {
            'btn-group': !this.vertical,
            'btn-group-vertical': this.vertical,
            [`btn-group-${this.size}`]: !!this.size,
        };
    }
    constructor() {
        /**
         * Default role attr for ButtonGroup. [docs]
         * @type string
         * @default 'group'
         */
        this.role = 'group';
    }
}
ButtonGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ButtonGroupComponent, selector: "c-button-group", inputs: { size: "size", vertical: "vertical", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-button-group',
                    template: `<ng-content></ng-content>`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { size: [{
                type: Input
            }], vertical: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ButtonToolbarComponent {
    get hostClasses() {
        return {
            'btn-toolbar': true,
        };
    }
    constructor() {
        /**
         * Default role attr for ButtonToolbar. [docs]
         * @type string
         * @default 'toolbar'
         */
        this.role = 'toolbar';
    }
}
ButtonToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ButtonToolbarComponent, selector: "c-button-toolbar", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonToolbarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-button-toolbar',
                    template: `<ng-content></ng-content>`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ButtonGroupModule {
}
ButtonGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ButtonGroupModule, declarations: [ButtonGroupComponent,
        ButtonToolbarComponent], imports: [CommonModule], exports: [ButtonGroupComponent,
        ButtonToolbarComponent] });
ButtonGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonGroupModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonGroupComponent,
                        ButtonToolbarComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ButtonGroupComponent,
                        ButtonToolbarComponent
                    ]
                }]
        }] });

class CalloutComponent {
    get hostClasses() {
        return {
            callout: true,
            [`callout-${this.color}`]: !!this.color
        };
    }
    constructor() { }
}
CalloutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CalloutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CalloutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CalloutComponent, selector: "c-callout, [cCallout]", inputs: { color: "color" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CalloutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-callout, [cCallout]', template: `<ng-content></ng-content>`, styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CalloutModule {
}
CalloutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CalloutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalloutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CalloutModule, declarations: [CalloutComponent], imports: [CommonModule], exports: [CalloutComponent] });
CalloutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CalloutModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CalloutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CalloutComponent],
                    exports: [CalloutComponent],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class CardComponent {
    get hostClasses() {
        return {
            card: true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    constructor() { }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardComponent, selector: "c-card, [c-card]", inputs: { color: "color", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card, [c-card]',
                    template: `<ng-content></ng-content>`
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardBodyComponent {
    get hostClasses() {
        return {
            'card-body': true,
        };
    }
}
CardBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardBodyComponent, selector: "c-card-body, [c-card-body]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card-body, [c-card-body]',
                    template: '<ng-content></ng-content>'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardFooterComponent {
    get hostClasses() {
        return {
            'card-footer': true,
        };
    }
}
CardFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardFooterComponent, selector: "c-card-footer, [c-card-footer]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card-footer, [c-card-footer]',
                    template: '<ng-content></ng-content>'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardGroupComponent {
    get hostClasses() {
        return {
            'card-group': true
        };
    }
}
CardGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardGroupComponent, selector: "c-card-group, [c-card-group]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card-group, [c-card-group]',
                    template: '<ng-content></ng-content>'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardHeaderComponent {
    get hostClasses() {
        return {
            'card-header': true,
        };
    }
}
CardHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardHeaderComponent, selector: "c-card-header, [c-card-header]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card-header, [c-card-header]',
                    template: '<ng-content></ng-content>',
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardHeaderActionsComponent {
    constructor() {
        this.cardHeaderActions = true;
    }
}
CardHeaderActionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardHeaderActionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardHeaderActionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardHeaderActionsComponent, selector: "c-card-header-actions, [c-card-header-actions]", host: { properties: { "class.card-header-actions": "this.cardHeaderActions" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardHeaderActionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card-header-actions, [c-card-header-actions]',
                    template: '<ng-content></ng-content>',
                }]
        }], propDecorators: { cardHeaderActions: [{
                type: HostBinding,
                args: ['class.card-header-actions']
            }] } });

class CardImgDirective {
    get hostClasses() {
        const suffix = !!this.orientation ? `-${this.orientation}` : '';
        return {
            [`card-img${suffix}`]: true
        };
    }
}
CardImgDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardImgDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CardImgDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CardImgDirective, selector: "[cCardImg]", inputs: { orientation: ["cCardImg", "orientation"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardImgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardImg]'
                }]
        }], propDecorators: { orientation: [{
                type: Input,
                args: ['cCardImg']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardImgOverlayComponent {
    get hostClasses() {
        return {
            'card-img-overlay': true
        };
    }
}
CardImgOverlayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardImgOverlayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardImgOverlayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardImgOverlayComponent, selector: "c-card-img-overlay", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardImgOverlayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-card-img-overlay', template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardLinkDirective {
    get hostClasses() {
        return {
            'card-link': true
        };
    }
}
CardLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CardLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CardLinkDirective, selector: "[cCardLink]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardLink]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardSubtitleDirective {
    get hostClasses() {
        return {
            'card-subtitle': true
        };
    }
}
CardSubtitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardSubtitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CardSubtitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CardSubtitleDirective, selector: "[cCardSubtitle]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardSubtitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardSubtitle]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardTextDirective {
    get hostClasses() {
        return {
            'card-text': true
        };
    }
}
CardTextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardTextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CardTextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CardTextDirective, selector: "[cCardText]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardTextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardText]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardTitleDirective {
    get hostClasses() {
        return {
            'card-title': true
        };
    }
}
CardTitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CardTitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CardTitleDirective, selector: "[cCardTitle]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardTitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardTitle]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CardModule {
}
CardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CardModule, declarations: [CardComponent,
        CardBodyComponent,
        CardFooterComponent,
        CardGroupComponent,
        CardHeaderComponent,
        CardHeaderActionsComponent,
        CardImgDirective,
        CardImgOverlayComponent,
        CardLinkDirective,
        CardSubtitleDirective,
        CardTextDirective,
        CardTitleDirective], imports: [CommonModule], exports: [CardComponent,
        CardBodyComponent,
        CardFooterComponent,
        CardGroupComponent,
        CardHeaderComponent,
        CardHeaderActionsComponent,
        CardImgDirective,
        CardImgOverlayComponent,
        CardLinkDirective,
        CardSubtitleDirective,
        CardTextDirective,
        CardTitleDirective] });
CardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CardComponent,
                        CardBodyComponent,
                        CardFooterComponent,
                        CardGroupComponent,
                        CardHeaderComponent,
                        CardHeaderActionsComponent,
                        CardImgDirective,
                        CardImgOverlayComponent,
                        CardLinkDirective,
                        CardSubtitleDirective,
                        CardTextDirective,
                        CardTitleDirective,
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        CardComponent,
                        CardBodyComponent,
                        CardFooterComponent,
                        CardGroupComponent,
                        CardHeaderComponent,
                        CardHeaderActionsComponent,
                        CardImgDirective,
                        CardImgOverlayComponent,
                        CardLinkDirective,
                        CardSubtitleDirective,
                        CardTextDirective,
                        CardTitleDirective,
                    ]
                }]
        }] });

class IntersectionService {
    constructor() {
        this.intersecting = new BehaviorSubject(false);
        this.intersecting$ = this.intersecting.asObservable();
        this.defaultObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };
    }
    createIntersectionObserver(hostElement, observerOptions = this.defaultObserverOptions) {
        const options = { ...this.defaultObserverOptions, ...observerOptions };
        this.hostElement = hostElement;
        const handleIntersect = (entries, observer) => {
            entries.forEach((entry) => {
                this.intersecting.next(entry.isIntersecting);
            });
        };
        this.intersectionObserver = new IntersectionObserver(handleIntersect, options);
        this.intersectionObserver.observe(hostElement.nativeElement);
    }
    ngOnDestroy() {
        this.intersectionObserver?.unobserve(this.hostElement?.nativeElement);
    }
}
IntersectionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: IntersectionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
IntersectionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: IntersectionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: IntersectionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class ListenersService {
    constructor(renderer) {
        this.renderer = renderer;
        this.listeners = new Map();
    }
    setListeners({ hostElement, trigger, callbackOn, callbackOff, callbackToggle }) {
        const host = hostElement.nativeElement;
        const triggers = Array.isArray(trigger)
            ? trigger
            : trigger?.split(' ') ?? [];
        if (triggers?.includes('click')) {
            typeof callbackToggle === 'function' && this.listeners.set('click', this.renderer.listen(host, 'click', callbackToggle));
        }
        if (triggers?.includes('focus')) {
            typeof callbackOn === 'function' && this.listeners.set('focus', this.renderer.listen(host, 'focus', callbackOn));
        }
        if (triggers?.includes('click') || triggers?.includes('focus')) {
            typeof callbackOff === 'function' && this.listeners.set('blur', this.renderer.listen(host, 'blur', callbackOff));
        }
        if (triggers?.includes('hover')) {
            typeof callbackOn === 'function' && this.listeners.set('mouseenter', this.renderer.listen(host, 'mouseenter', callbackOn));
            typeof callbackOff === 'function' && this.listeners.set('mouseleave', this.renderer.listen(host, 'mouseleave', callbackOff));
        }
    }
    clearListeners() {
        this.listeners.forEach((unListen, key) => {
            unListen();
        });
        this.listeners.forEach((unListen, key) => {
            // @ts-ignore
            this.listeners.set(key, null);
        });
        this.listeners.clear();
    }
}
ListenersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListenersService, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Injectable });
ListenersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListenersService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListenersService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; } });

class CarouselService {
    constructor() {
        this.carouselIndex = new BehaviorSubject({});
        this.carouselIndex$ = this.carouselIndex.asObservable();
    }
    setIndex(index) {
        this.carouselIndex.next(index);
    }
}
CarouselService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CarouselService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class CarouselState {
    constructor(carouselService) {
        this.carouselService = carouselService;
        this._state = {
            activeItemIndex: -1,
            animate: true,
            items: [],
            direction: 'next',
            transition: 'slide'
        };
    }
    get state() {
        return this._state;
    }
    set state(state) {
        const prevState = { ...this._state };
        const nextState = { ...this._state, ...state };
        this._state = nextState;
        if (prevState.activeItemIndex !== nextState.activeItemIndex) {
            const activeItemIndex = this.state.activeItemIndex || 0;
            const itemInterval = this.state.items && this.state.items[activeItemIndex]?.interval || -1;
            this.carouselService.setIndex({
                active: nextState.activeItemIndex,
                interval: itemInterval,
                lastItemIndex: (nextState.items?.length ?? 0) - 1
            });
        }
    }
    setItems(newItems) {
        if (newItems.length) {
            const itemsArray = newItems.toArray();
            itemsArray.forEach((item, i) => {
                item.index = i;
            });
            this.state = {
                items: itemsArray
            };
        }
        else {
            this.reset();
        }
    }
    setNextIndex(nextIndex) {
        this.carouselService.setIndex(nextIndex);
    }
    direction(direction = 'next') {
        this.state = { direction };
        const { activeItemIndex = -1, items } = this.state;
        const itemsCount = items?.length ?? 0;
        if (itemsCount > 0) {
            return direction === 'next' ?
                (activeItemIndex === itemsCount - 1 ? 0 : activeItemIndex + 1) :
                (activeItemIndex === 0 ? itemsCount - 1 : activeItemIndex - 1);
        }
        else {
            return 0;
        }
    }
    reset() {
        this.state = {
            activeItemIndex: -1,
            animate: true,
            items: [],
            direction: 'next',
            transition: 'slide'
        };
    }
}
CarouselState.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselState, deps: [{ token: CarouselService }], target: i0.ɵɵFactoryTarget.Injectable });
CarouselState.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselState });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: CarouselService }]; } });

class CarouselConfig {
    constructor() {
        /* Animate transition of slides */
        this.activeIndex = 0;
        /* Animate transition of slides */
        this.animate = true;
        /* Darken controls, indicators, and captions */
        this.dark = false;
        /* Default direction of auto changing of slides */
        this.direction = 'next';
        /* Default interval of auto changing of slides */
        this.interval = 3000;
    }
}
CarouselConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CarouselConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselConfig });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselConfig, decorators: [{
            type: Injectable
        }] });

class CarouselComponent {
    get hostClasses() {
        return {
            carousel: true,
            slide: true,
            'carousel-dark': !!this.dark,
            'carousel-fade': this.transition === 'crossfade'
        };
    }
    constructor(config, hostElement, carouselService, carouselState, intersectionService, listenersService) {
        this.config = config;
        this.hostElement = hostElement;
        this.carouselService = carouselService;
        this.carouselState = carouselState;
        this.intersectionService = intersectionService;
        this.listenersService = listenersService;
        /**
         * Index of the active item.
         * @type number
         */
        this.activeIndex = 0;
        /**
         * Carousel automatically starts cycle items.
         * @type boolean
         */
        this.animate = true;
        /**
         * Carousel direction. [docs]
         * @type {'next' | 'prev'}
         */
        this.direction = 'next';
        /**
         * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
         * @type number
         * @default 0
         */
        this.interval = 0;
        /**
         * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
         * @type {'hover' | 'focus' | 'click'}
         */
        this.pause = 'hover';
        /**
         * Support left/right swipe interactions on touchscreen devices.
         * @type boolean
         * @default true
         */
        this.touch = true;
        /**
         * Set type of the transition.
         * @type {'slide' | 'crossfade'}
         * @default 'slide'
         */
        this.transition = 'slide';
        /**
         * Set whether the carousel should cycle continuously or have hard stops.
         * @type boolean
         * @default true
         */
        this.wrap = true;
        /**
         * Event emitted on carousel item change. [docs]
         * @type number
         */
        this.itemChange = new EventEmitter();
        this.activeItemInterval = 0;
        this._visible = true;
        Object.assign(this, config);
    }
    ngOnInit() {
        this.carouselStateSubscribe();
    }
    ngOnDestroy() {
        this.clearListeners();
        this.carouselStateSubscribe(false);
        this.intersectionServiceSubscribe(false);
        this.swipeSubscribe(false);
    }
    ngAfterContentInit() {
        this.intersectionService.createIntersectionObserver(this.hostElement);
        this.intersectionServiceSubscribe();
        this.carouselState.state = { activeItemIndex: this.activeIndex, animate: this.animate };
        this.setListeners();
        this.swipeSubscribe();
    }
    setListeners() {
        const config = {
            hostElement: this.hostElement,
            trigger: this.pause || [],
            callbackOff: () => {
                this.setTimer();
            },
            callbackOn: () => {
                this.resetTimer();
            }
        };
        this.listenersService.setListeners(config);
    }
    clearListeners() {
        this.listenersService.clearListeners();
    }
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    setTimer() {
        const interval = this.activeItemInterval || 0;
        this.resetTimer();
        if (interval > 0) {
            this.timerId = setTimeout(() => {
                const nextIndex = this.carouselState.direction(this.direction);
                this.carouselState.state = { activeItemIndex: nextIndex };
            }, interval);
        }
    }
    resetTimer() {
        clearTimeout(this.timerId);
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextItem) => {
                if ('active' in nextItem) {
                    this.itemChange.emit(nextItem.active);
                }
                this.activeItemInterval = typeof nextItem.interval === 'number' && nextItem.interval > -1 ? nextItem.interval : this.interval;
                const isLastItem = ((nextItem.active === nextItem.lastItemIndex) && this.direction === 'next') || ((nextItem.active === 0) && this.direction === 'prev');
                !this.wrap && isLastItem ? this.resetTimer() : this.setTimer();
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
    intersectionServiceSubscribe(subscribe = true) {
        if (subscribe) {
            this.intersectingSubscription = this.intersectionService.intersecting$.subscribe(isIntersecting => {
                this.visible = isIntersecting;
                isIntersecting ? this.setTimer() : this.resetTimer();
            });
        }
        else {
            this.intersectingSubscription?.unsubscribe();
        }
    }
    swipeSubscribe(subscribe = true) {
        if (this.touch && subscribe) {
            const carouselElement = this.hostElement.nativeElement;
            const touchStart$ = fromEvent(carouselElement, 'touchstart');
            const touchEnd$ = fromEvent(carouselElement, 'touchend');
            const touchMove$ = fromEvent(carouselElement, 'touchmove');
            this.swipeSubscription = touchStart$.pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))))
                .subscribe(([touchstart, [touchend, touchmove]]) => {
                touchstart.stopPropagation();
                touchmove.stopPropagation();
                const distanceX = touchstart.touches[0].clientX - touchmove.touches[0].clientX;
                if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
                    const nextIndex = this.carouselState.direction(distanceX > 0 ? 'next' : 'prev');
                    this.carouselState.state = { activeItemIndex: nextIndex };
                }
            });
        }
        else {
            this.swipeSubscription?.unsubscribe();
        }
    }
}
CarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselComponent, deps: [{ token: CarouselConfig }, { token: i0.ElementRef }, { token: CarouselService }, { token: CarouselState }, { token: IntersectionService }, { token: ListenersService }], target: i0.ɵɵFactoryTarget.Component });
CarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselComponent, selector: "c-carousel", inputs: { activeIndex: "activeIndex", animate: "animate", dark: "dark", direction: "direction", interval: "interval", pause: "pause", touch: "touch", transition: "transition", wrap: "wrap" }, outputs: { itemChange: "itemChange" }, host: { properties: { "class": "this.hostClasses" } }, providers: [CarouselService, CarouselState, CarouselConfig, IntersectionService, ListenersService], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel', template: '<ng-content></ng-content>', providers: [CarouselService, CarouselState, CarouselConfig, IntersectionService, ListenersService], styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: CarouselConfig, decorators: [{
                    type: Inject,
                    args: [CarouselConfig]
                }] }, { type: i0.ElementRef }, { type: CarouselService }, { type: CarouselState }, { type: IntersectionService }, { type: ListenersService }]; }, propDecorators: { activeIndex: [{
                type: Input
            }], animate: [{
                type: Input
            }], dark: [{
                type: Input
            }], direction: [{
                type: Input
            }], interval: [{
                type: Input
            }], pause: [{
                type: Input
            }], touch: [{
                type: Input
            }], transition: [{
                type: Input
            }], wrap: [{
                type: Input
            }], itemChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CarouselCaptionComponent {
    constructor() {
        this.carouselCaptionClass = true;
    }
}
CarouselCaptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselCaptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CarouselCaptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselCaptionComponent, selector: "c-carousel-caption", host: { properties: { "class.carousel-caption": "this.carouselCaptionClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselCaptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-caption', template: `<ng-content></ng-content>`, styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { carouselCaptionClass: [{
                type: HostBinding,
                args: ['class.carousel-caption']
            }] } });

class CarouselControlComponent {
    constructor(changeDetector, carouselState) {
        this.changeDetector = changeDetector;
        this.carouselState = carouselState;
        /**
         * Carousel control direction. [docs]
         * @type {'next' | 'prev'}
         */
        this.direction = 'next';
        this.hasContent = true;
    }
    /**
     * Carousel control caption. [docs]
     * @type string
     */
    set caption(value) {
        this._caption = value;
    }
    get caption() {
        return !!this._caption ? this._caption : this.direction === 'prev' ? 'Previous' : 'Next';
    }
    get hostRole() {
        return 'button';
    }
    get hostClasses() {
        return `carousel-control-${this.direction}`;
    }
    get carouselControlIconClass() {
        return `carousel-control-${this.direction}-icon`;
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            this.play();
        }
        if ($event.key === 'ArrowLeft') {
            this.play('prev');
        }
        if ($event.key === 'ArrowRight') {
            this.play('next');
        }
    }
    onClick($event) {
        this.play();
    }
    ngAfterViewInit() {
        this.hasContent = this.content?.nativeElement.childNodes.length ?? false;
        this.changeDetector.detectChanges();
    }
    play(direction = this.direction) {
        const nextIndex = this.carouselState.direction(direction);
        this.carouselState.state = { activeItemIndex: nextIndex };
    }
}
CarouselControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselControlComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: CarouselState }], target: i0.ɵɵFactoryTarget.Component });
CarouselControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselControlComponent, selector: "c-carousel-control", inputs: { caption: "caption", direction: "direction" }, host: { listeners: { "keyup": "onKeyUp($event)", "click": "onClick($event)" }, properties: { "attr.role": "this.hostRole", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: "<div #content *ngIf = \"hasContent; else default\"><ng-content></ng-content></div>\n<ng-template #default>\n  <span [class]=\"carouselControlIconClass\" [attr.aria-label]=\"direction\" [attr.aria-hidden]=\"true\"></span>\n  <span class=\"visually-hidden\">{{caption}}</span>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-control', template: "<div #content *ngIf = \"hasContent; else default\"><ng-content></ng-content></div>\n<ng-template #default>\n  <span [class]=\"carouselControlIconClass\" [attr.aria-label]=\"direction\" [attr.aria-hidden]=\"true\"></span>\n  <span class=\"visually-hidden\">{{caption}}</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: CarouselState }]; }, propDecorators: { caption: [{
                type: Input
            }], direction: [{
                type: Input
            }], hostRole: [{
                type: HostBinding,
                args: ['attr.role']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], content: [{
                type: ViewChild,
                args: ['content']
            }], onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class CarouselIndicatorsComponent {
    constructor(carouselService, carouselState) {
        this.carouselService = carouselService;
        this.carouselState = carouselState;
        this.items = [];
        this.active = 0;
    }
    ngOnInit() {
        this.carouselStateSubscribe();
    }
    ngOnDestroy() {
        this.carouselStateSubscribe(false);
    }
    onClick(index) {
        if (index !== this.active) {
            const direction = index < this.active ? 'prev' : 'next';
            this.carouselState.state = { direction, activeItemIndex: index };
        }
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
                this.items = this.carouselState?.state?.items?.map(item => item.index) ?? [];
                if ('active' in nextIndex) {
                    this.active = nextIndex.active ?? 0;
                }
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
}
CarouselIndicatorsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselIndicatorsComponent, deps: [{ token: CarouselService }, { token: CarouselState }], target: i0.ɵɵFactoryTarget.Component });
CarouselIndicatorsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselIndicatorsComponent, selector: "c-carousel-indicators", ngImport: i0, template: "<div class=\"carousel-indicators\">\n  <ng-container *ngFor=\"let item of items; let i=index\">\n    <button [attr.data-coreui-target]=\"i\" type=\"button\" (click)=\"onClick(i)\" [class]=\"{active: active === i}\" [attr.aria-current]=\"active === i\"></button>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselIndicatorsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-indicators', template: "<div class=\"carousel-indicators\">\n  <ng-container *ngFor=\"let item of items; let i=index\">\n    <button [attr.data-coreui-target]=\"i\" type=\"button\" (click)=\"onClick(i)\" [class]=\"{active: active === i}\" [attr.aria-current]=\"active === i\"></button>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: CarouselService }, { type: CarouselState }]; } });

function toLeft(fromState, toState) {
    return toState.left === true;
}
function toRight(fromState, toState) {
    return toState.left === false;
}
const slideAnimation = trigger('slideAnimation', [
    state('*', style({ transform: 'translateX(0)', display: 'block', opacity: 1 })),
    transition(toLeft, group([
        query(':leave', [
            animate('0.6s ease-in-out', style({
                transform: 'translateX(-100%)',
            })),
        ], { optional: true }),
        query(':enter', [
            style({
                transform: 'translateX(100%)',
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
    ])),
    transition(toRight, group([
        query(':enter', [
            style({
                transform: 'translateX(-100%)',
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
        query(':leave', [
            animate('0.6s ease-in-out', style({
                transform: 'translateX(100%)',
            })),
        ], { optional: true }),
    ])),
]);
const fadeAnimation = trigger('fadeAnimation', [
    state('*', style({ zIndex: 1, opacity: 1 })),
    transition(toLeft, group([
        query(':leave', [
            animate('0.6s ease-in-out', style({
                zIndex: 0,
                opacity: 0,
            })),
        ], { optional: true }),
        query(':enter', [
            style({
                zIndex: 1,
                opacity: 1
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
    ])),
    transition(toRight, group([
        query(':enter', [
            style({
                zIndex: 1,
                opacity: 1
            }),
            animate('0.6s ease-in-out', style('*')),
        ], { optional: true }),
        query(':leave', [
            animate('0.6s ease-in-out', style({
                zIndex: 0,
                opacity: 0,
            })),
        ], { optional: true }),
    ])),
]);

class CarouselItemComponent {
    /**
     * @ignore
     */
    set active(value) {
        this._active = coerceBooleanProperty(value);
        this.changeDetectorRef.markForCheck();
    }
    get active() {
        return this._active;
    }
    get hostClasses() {
        return {
            'carousel-item': true,
            active: this.active
        };
    }
    constructor(carouselService, changeDetectorRef) {
        this.carouselService = carouselService;
        this.changeDetectorRef = changeDetectorRef;
        this._active = false;
        /**
         * Time delay before cycling to next item. If -1, uses carousel interval value.
         * @type number
         * @default -1
         */
        this.interval = -1;
    }
    ngOnDestroy() {
        this.carouselStateSubscribe(false);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.carouselStateSubscribe();
        });
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
                if ('active' in nextIndex) {
                    this.active = nextIndex.active === this.index;
                }
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
}
CarouselItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselItemComponent, deps: [{ token: CarouselService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
CarouselItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselItemComponent, selector: "c-carousel-item", inputs: { active: "active", interval: "interval" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content *ngIf=\"active\"></ng-content>\n", styles: [":host{display:block}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-item', template: "<ng-content *ngIf=\"active\"></ng-content>\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: CarouselService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { active: [{
                type: Input
            }], interval: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class CarouselInnerComponent {
    constructor(carouselState) {
        this.carouselState = carouselState;
        this.carouselInnerClass = true;
        this.slide = { left: true };
        this.transition = 'slide';
    }
    ngAfterContentInit() {
        this.setItems();
    }
    ngAfterContentChecked() {
        this.setItems();
        const state = this.carouselState?.state;
        const nextIndex = state?.activeItemIndex;
        const nextDirection = state?.direction;
        if (this.activeIndex !== nextIndex) {
            this.animate = state?.animate;
            this.slide = { left: nextDirection === 'next' };
            this.activeIndex = state?.activeItemIndex;
            this.transition = state?.transition ?? 'slide';
        }
    }
    setItems() {
        if (this.prevContentItems !== this.contentItems) {
            this.prevContentItems = this.contentItems;
            this.carouselState.setItems(this.contentItems);
        }
    }
}
CarouselInnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselInnerComponent, deps: [{ token: CarouselState }], target: i0.ɵɵFactoryTarget.Component });
CarouselInnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselInnerComponent, selector: "c-carousel-inner", host: { properties: { "class.carousel-inner": "this.carouselInnerClass" } }, queries: [{ propertyName: "contentItems", predicate: CarouselItemComponent }], ngImport: i0, template: "<div [@slideAnimation]=\"slide\" [@.disabled]=\"!animate\">\n  <ng-content></ng-content>\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]=\"slide\" [@.disabled]=\"!animate\" >-->\n<!--  <ng-content></ng-content>-->\n<!--</div>-->\n", styles: [":host{display:block}\n"], animations: [slideAnimation, fadeAnimation] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselInnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-inner', animations: [slideAnimation, fadeAnimation], template: "<div [@slideAnimation]=\"slide\" [@.disabled]=\"!animate\">\n  <ng-content></ng-content>\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]=\"slide\" [@.disabled]=\"!animate\" >-->\n<!--  <ng-content></ng-content>-->\n<!--</div>-->\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: CarouselState }]; }, propDecorators: { carouselInnerClass: [{
                type: HostBinding,
                args: ['class.carousel-inner']
            }], contentItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }] } });

class CarouselModule {
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, declarations: [CarouselComponent,
        CarouselCaptionComponent,
        CarouselControlComponent,
        CarouselIndicatorsComponent,
        CarouselInnerComponent,
        CarouselItemComponent], imports: [CommonModule], exports: [CarouselComponent,
        CarouselCaptionComponent,
        CarouselControlComponent,
        CarouselIndicatorsComponent,
        CarouselInnerComponent,
        CarouselItemComponent] });
CarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, providers: [CarouselService, CarouselState, CarouselConfig], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CarouselComponent,
                        CarouselCaptionComponent,
                        CarouselControlComponent,
                        CarouselIndicatorsComponent,
                        CarouselInnerComponent,
                        CarouselItemComponent,
                    ],
                    imports: [CommonModule],
                    providers: [CarouselService, CarouselState, CarouselConfig],
                    exports: [
                        CarouselComponent,
                        CarouselCaptionComponent,
                        CarouselControlComponent,
                        CarouselIndicatorsComponent,
                        CarouselInnerComponent,
                        CarouselItemComponent,
                    ],
                }]
        }] });

class DropdownDividerDirective {
    constructor() {
    }
    get hostClasses() {
        return {
            'dropdown-divider': true,
        };
    }
}
DropdownDividerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownDividerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DropdownDividerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownDividerDirective, selector: "[cDropdownDivider]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownDividerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownDivider]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class DropdownHeaderDirective {
    constructor() {
    }
    get hostClasses() {
        return {
            'dropdown-header': true,
        };
    }
}
DropdownHeaderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownHeaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DropdownHeaderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownHeaderDirective, selector: "[cDropdownHeader]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownHeaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownHeader]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class DropdownService {
    constructor() {
        this.dropdownState = new BehaviorSubject({});
        this.dropdownState$ = this.dropdownState.asObservable();
    }
    toggle(state) {
        this.dropdownState.next(state);
    }
}
DropdownService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DropdownService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DropdownMenuDirective {
    constructor(elementRef, dropdownService) {
        this.elementRef = elementRef;
        this.dropdownService = dropdownService;
        /**
         * Toggle the visibility of dropdown menu component.
         */
        this.visible = false;
        this._dark = false;
    }
    /**
     * Sets a darker color scheme to match a dark navbar.
     */
    get dark() {
        return this._dark;
    }
    set dark(value) {
        this._dark = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            'dropdown-menu': true,
            'dropdown-menu-dark': this.dark,
            [`dropdown-menu-${this.alignment}`]: !!this.alignment,
            show: this.visible,
        };
    }
    get hostStyles() {
        // workaround for popper position calculate (see also: dropdown.component)
        return {
            visibility: this.visible ? null : '',
            display: this.visible ? null : '',
        };
    }
    ngOnInit() {
        this.dropdownStateSubscribe();
    }
    ngOnDestroy() {
        this.dropdownStateSubscribe(false);
    }
    dropdownStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.dropdownStateSubscription =
                this.dropdownService.dropdownState$.subscribe((state) => {
                    if ('visible' in state) {
                        this.visible =
                            state.visible === 'toggle' ? !this.visible : state.visible;
                    }
                });
        }
        else {
            this.dropdownStateSubscription.unsubscribe();
        }
    }
}
DropdownMenuDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownMenuDirective, deps: [{ token: i0.ElementRef }, { token: DropdownService }], target: i0.ɵɵFactoryTarget.Directive });
DropdownMenuDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownMenuDirective, selector: "[cDropdownMenu]", inputs: { alignment: "alignment", visible: "visible", dark: "dark" }, host: { properties: { "class": "this.hostClasses", "style": "this.hostStyles" } }, exportAs: ["cDropdownMenu"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownMenuDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownMenu]',
                    exportAs: 'cDropdownMenu',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: DropdownService }]; }, propDecorators: { alignment: [{
                type: Input
            }], visible: [{
                type: Input
            }], dark: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyles: [{
                type: HostBinding,
                args: ['style']
            }] } });

// lightweight injection token
class DropdownToken {
}
class DropdownToggleDirective {
    constructor(elementRef, dropdownService, dropdown) {
        this.elementRef = elementRef;
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        /**
         * Disables the toggler.
         * @type boolean
         * @default false
         */
        this.disabled = false;
        /**
         * Enables pseudo element caret on toggler.
         * @type boolean
         */
        this.caret = true;
        this._split = false;
    }
    /**
     * Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
     * @type boolean
     */
    set split(value) {
        this._split = coerceBooleanProperty(value);
    }
    get split() {
        return this._split;
    }
    get hostClasses() {
        return {
            'dropdown-toggle': this.caret,
            'dropdown-toggle-split': this.split,
            disabled: this.disabled
        };
    }
    onClick($event) {
        $event.preventDefault();
        !this.disabled && this.dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
    }
    ngAfterViewInit() {
        if (this.dropdownComponent) {
            this.dropdown = this.dropdownComponent;
            this.dropdownService = this.dropdownComponent?.dropdownService;
        }
    }
}
DropdownToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownToggleDirective, deps: [{ token: i0.ElementRef }, { token: DropdownService }, { token: DropdownToken, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DropdownToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownToggleDirective, selector: "[cDropdownToggle]", inputs: { dropdownComponent: "dropdownComponent", disabled: "disabled", caret: "caret", split: "split" }, host: { listeners: { "click": "onClick($event)" }, properties: { "class": "this.hostClasses" } }, providers: [{ provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent) }], exportAs: ["cDropdownToggle"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownToggle]',
                    providers: [{ provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent) }],
                    exportAs: 'cDropdownToggle'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: DropdownService }, { type: DropdownToken, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { dropdownComponent: [{
                type: Input
            }], disabled: [{
                type: Input
            }], caret: [{
                type: Input
            }], split: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
class DropdownComponent {
    constructor(document, elementRef, renderer, ngZone, changeDetectorRef, dropdownService) {
        this.document = document;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.dropdownService = dropdownService;
        this.autoClose = true;
        this._dark = false;
        /**
         * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
         * @type Placement
         */
        this.placement = 'bottom-start';
        this._popper = true;
        this._popperOptions = {
            placement: this.placement,
            modifiers: [],
            strategy: 'absolute'
        };
        /**
         * Set the dropdown variant to a btn-group, dropdown, input-group, and nav-item.
         */
        this.variant = 'dropdown';
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this.dropdownContext = { $implicit: this.visible };
        this.activeTrap = false;
        this.listeners = [];
        this.dropdownStateSubscribe();
    }
    /**
     * Sets a darker color scheme to match a dark navbar.
     * @type boolean
     * @default false
     */
    set dark(value) {
        this._dark = coerceBooleanProperty(value);
    }
    ;
    get dark() {
        return this._dark;
    }
    /**
     * If you want to disable dynamic positioning set this property to `false`.
     * @type boolean
     * @default true
     */
    set popper(value) {
        this._popper = coerceBooleanProperty(value);
    }
    get popper() {
        return this._popper;
    }
    /**
     * Optional popper Options object, placement prop takes precedence over
     * @type Partial<Options>
     */
    set popperOptions(value) {
        this._popperOptions = { ...this._popperOptions, ...value };
    }
    ;
    get popperOptions() {
        let placement = this.placement;
        switch (this.direction) {
            case 'dropup': {
                placement = 'top-start';
                break;
            }
            case 'dropend': {
                placement = 'right-start';
                break;
            }
            case 'dropstart': {
                placement = 'left-start';
                break;
            }
            case 'center': {
                placement = 'bottom';
                break;
            }
            case 'dropup-center': {
                placement = 'top';
                break;
            }
        }
        if (this.alignment === 'end') {
            placement = 'bottom-end';
        }
        this._popperOptions = { ...this._popperOptions, placement: placement };
        return this._popperOptions;
    }
    /**
     * Toggle the visibility of dropdown menu component.
     * @type boolean
     * @default false
     */
    set visible(value) {
        const _value = coerceBooleanProperty(value);
        if (_value !== this._visible) {
            this.activeTrap = _value;
            this._visible = _value;
            _value ? this.createPopperInstance() : this.destroyPopperInstance();
            this.visibleChange.emit(_value);
        }
    }
    get visible() {
        return this._visible;
    }
    get hostClasses() {
        return {
            dropdown: (this.variant === 'dropdown' || this.variant === 'nav-item') &&
                !this.direction,
            [`${this.direction}`]: !!this.direction,
            [`${this.variant}`]: !!this.variant,
            'dropup': this.direction === 'dropup' || this.direction === 'dropup-center',
            show: this.visible
        };
    }
    // todo: find better solution
    get hostStyle() {
        return this.variant === 'input-group' ? { display: 'contents' } : {};
    }
    onHostClick($event) {
        this.clickedTarget = $event.target;
    }
    dropdownStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.dropdownStateSubscription =
                this.dropdownService.dropdownState$.pipe(filter((state) => {
                    return this === state.dropdown;
                })).subscribe((state) => {
                    if ('visible' in state) {
                        state?.visible === 'toggle'
                            ? this.toggleDropdown()
                            : (this.visible = state.visible);
                    }
                });
        }
        else {
            this.dropdownStateSubscription.unsubscribe();
        }
    }
    toggleDropdown() {
        this.visible = !this.visible;
    }
    onClick(event) {
        if (!this._toggler?.elementRef.nativeElement.contains(event.target?.closest('[cDropdownToggle]'))) {
            this.toggleDropdown();
        }
    }
    ngAfterContentInit() {
        if (this.variant === 'nav-item') {
            this.renderer.addClass(this._toggler.elementRef.nativeElement, 'nav-link');
        }
    }
    ngOnInit() {
        this.setVisibleState(this.visible);
    }
    ngOnChanges(changes) {
        if (changes['visible'] && !changes['visible'].firstChange) {
            this.setVisibleState(changes['visible'].currentValue);
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.dropdownStateSubscribe(false);
        this.destroyPopperInstance();
    }
    setVisibleState(value) {
        this.dropdownService.toggle({ visible: value, dropdown: this });
    }
    // todo: turn off popper in navbar-nav
    createPopperInstance() {
        if (this._toggler && this._menu) {
            this.ngZone.runOutsideAngular(() => {
                // workaround for popper position calculate (see also: dropdown-menu.component)
                this._menu.elementRef.nativeElement.style.visibility = 'hidden';
                this._menu.elementRef.nativeElement.style.display = 'block';
                if (this.popper) {
                    this.popperInstance = createPopper(this._toggler.elementRef.nativeElement, this._menu.elementRef.nativeElement, { ...this.popperOptions });
                }
                this.ngZone.run(() => {
                    this.setListeners();
                    this.changeDetectorRef.markForCheck();
                    this.changeDetectorRef.detectChanges();
                });
            });
        }
    }
    destroyPopperInstance() {
        this.clearListeners();
        this.popperInstance?.destroy();
        this.popperInstance = undefined;
        this.changeDetectorRef.markForCheck();
    }
    setListeners() {
        this.listeners.push(this.renderer.listen(this.document, 'click', (event) => {
            const target = event.target;
            if (this._menuElementRef?.nativeElement.contains(event.target)) {
                this.clickedTarget = target;
            }
            if (this._toggler?.elementRef.nativeElement.contains(event.target)) {
                return;
            }
            if (this.autoClose === true) {
                this.setVisibleState(false);
                return;
            }
            if (this.clickedTarget === target && this.autoClose === 'inside') {
                this.setVisibleState(false);
                return;
            }
            if (this.clickedTarget !== target && this.autoClose === 'outside') {
                this.setVisibleState(false);
                return;
            }
        }));
        this.listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'keyup', (event) => {
            if (event.key === 'Escape' && this.autoClose !== false) {
                event.stopPropagation();
                this.setVisibleState(false);
                return;
            }
        }));
        this.listeners.push(this.renderer.listen(this.document, 'keyup', (event) => {
            if (event.key === 'Tab' && this.autoClose !== false && !this.elementRef.nativeElement.contains(event.target)) {
                this.setVisibleState(false);
                return;
            }
        }));
    }
    clearListeners() {
        this.listeners.forEach((unListen) => {
            unListen();
        });
        // @ts-ignore
        this.listeners.fill(undefined);
        this.listeners = [];
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownComponent, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: DropdownService }], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: DropdownComponent, selector: "c-dropdown", inputs: { alignment: "alignment", autoClose: "autoClose", dark: "dark", direction: "direction", placement: "placement", popper: "popper", popperOptions: "popperOptions", variant: "variant", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "click": "onHostClick($event)" }, properties: { "class": "this.hostClasses", "style": "this.hostStyle" } }, providers: [DropdownService], queries: [{ propertyName: "_toggler", first: true, predicate: DropdownToggleDirective, descendants: true }, { propertyName: "_menu", first: true, predicate: DropdownMenuDirective, descendants: true }, { propertyName: "_menuElementRef", first: true, predicate: DropdownMenuDirective, descendants: true, read: ElementRef }], exportAs: ["cDropdown"], usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block;min-width:-moz-fit-content;min-width:fit-content}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-dropdown', template: '<ng-content></ng-content>', exportAs: 'cDropdown', providers: [DropdownService], styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block;min-width:-moz-fit-content;min-width:fit-content}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"] }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: DropdownService }]; }, propDecorators: { alignment: [{
                type: Input
            }], autoClose: [{
                type: Input
            }], dark: [{
                type: Input
            }], direction: [{
                type: Input
            }], placement: [{
                type: Input
            }], popper: [{
                type: Input
            }], popperOptions: [{
                type: Input
            }], variant: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], _toggler: [{
                type: ContentChild,
                args: [DropdownToggleDirective]
            }], _menu: [{
                type: ContentChild,
                args: [DropdownMenuDirective]
            }], _menuElementRef: [{
                type: ContentChild,
                args: [DropdownMenuDirective, { read: ElementRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyle: [{
                type: HostBinding,
                args: ['style']
            }], onHostClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class DropdownItemDirective {
    constructor(dropdownService, dropdown) {
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        /**
         * Configure dropdown-item close dropdown behavior.
         * @type boolean
         * @default true
         */
        this.autoClose = true;
        this._tabIndex = null;
    }
    get ariaCurrent() {
        return this.active ? 'true' : null;
    }
    get hostClasses() {
        return {
            'dropdown-item': true,
            active: this.active,
            disabled: this.disabled
        };
    }
    set tabIndex(value) {
        this._tabIndex = value;
    }
    get tabIndex() {
        return this.disabled ? '-1' : this._tabIndex;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    onClick($event) {
        if (this.autoClose) {
            this.dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
        }
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            if (this.autoClose) {
                this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
            }
        }
    }
}
DropdownItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownItemDirective, deps: [{ token: DropdownService }, { token: DropdownComponent, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DropdownItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownItemDirective, selector: "[cDropdownItem]", inputs: { active: "active", autoClose: "autoClose", disabled: "disabled", tabIndex: "tabIndex" }, host: { listeners: { "click": "onClick($event)", "keyup": "onKeyUp($event)" }, properties: { "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses", "attr.tabindex": "this.tabIndex", "attr.aria-disabled": "this.isDisabled" } }, exportAs: ["cDropdownItem"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownItem]',
                    exportAs: 'cDropdownItem'
                }]
        }], ctorParameters: function () { return [{ type: DropdownService }, { type: DropdownComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { active: [{
                type: Input
            }], autoClose: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }, {
                type: Input
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });

class DropdownItemPlainDirective {
    constructor() {
    }
    get hostClasses() {
        return {
            'dropdown-item-text': true,
        };
    }
}
DropdownItemPlainDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownItemPlainDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DropdownItemPlainDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownItemPlainDirective, selector: "[cDropdownItemPlain]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownItemPlainDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownItemPlain]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class DropdownCloseDirective {
    constructor(dropdownService, dropdown) {
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        this._tabIndex = null;
    }
    ngAfterViewInit() {
        if (this.dropdownComponent) {
            this.dropdown = this.dropdownComponent;
            this.dropdownService = this.dropdownComponent?.dropdownService;
        }
    }
    get hostClasses() {
        return {
            disabled: this.disabled
        };
    }
    set tabIndex(value) {
        this._tabIndex = value;
    }
    get tabIndex() {
        return this.disabled ? '-1' : this._tabIndex;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    onClick($event) {
        !this.disabled && this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            !this.disabled && this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
        }
    }
}
DropdownCloseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownCloseDirective, deps: [{ token: DropdownService }, { token: DropdownComponent, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DropdownCloseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownCloseDirective, selector: "[cDropdownClose]", inputs: { disabled: "disabled", dropdownComponent: "dropdownComponent", tabIndex: "tabIndex" }, host: { listeners: { "click": "onClick($event)", "keyup": "onKeyUp($event)" }, properties: { "class": "this.hostClasses", "attr.tabindex": "this.tabIndex", "attr.aria-disabled": "this.isDisabled" } }, exportAs: ["cDropdownClose"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownClose]',
                    exportAs: 'cDropdownClose'
                }]
        }], ctorParameters: function () { return [{ type: DropdownService }, { type: DropdownComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { disabled: [{
                type: Input
            }], dropdownComponent: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }, {
                type: Input
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });

class DropdownModule {
}
DropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, declarations: [DropdownComponent,
        DropdownDividerDirective,
        DropdownHeaderDirective,
        DropdownItemDirective,
        DropdownItemPlainDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownCloseDirective], imports: [CommonModule], exports: [DropdownComponent,
        DropdownDividerDirective,
        DropdownHeaderDirective,
        DropdownItemDirective,
        DropdownItemPlainDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownCloseDirective] });
DropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, providers: [
        DropdownService,
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DropdownComponent,
                        DropdownDividerDirective,
                        DropdownHeaderDirective,
                        DropdownItemDirective,
                        DropdownItemPlainDirective,
                        DropdownToggleDirective,
                        DropdownMenuDirective,
                        DropdownCloseDirective
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        DropdownComponent,
                        DropdownDividerDirective,
                        DropdownHeaderDirective,
                        DropdownItemDirective,
                        DropdownItemPlainDirective,
                        DropdownToggleDirective,
                        DropdownMenuDirective,
                        DropdownCloseDirective
                    ],
                    providers: [
                        DropdownService,
                    ]
                }]
        }] });

class FooterComponent {
    constructor() {
        /**
         * Default role for footer. [docs]
         * @type string
         * @default 'footer'
         */
        this.role = 'footer';
    }
    get getClasses() {
        return {
            footer: true,
            [`footer-${this.position}`]: !!this.position,
        };
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: FooterComponent, selector: "c-footer, [cFooter]", inputs: { position: "position", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.getClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-footer, [cFooter]',
                    template: `<ng-content></ng-content>`,
                }]
        }], propDecorators: { position: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FooterModule {
}
FooterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FooterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FooterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: FooterModule, declarations: [FooterComponent], imports: [CommonModule], exports: [FooterComponent] });
FooterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FooterModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FooterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FooterComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        FooterComponent
                    ]
                }]
        }] });

class FormDirective {
    /**
     * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
     * @type boolean
     * @default false
     */
    set validated(value) {
        this._validated = coerceBooleanProperty(value);
    }
    get validated() {
        return this._validated;
    }
    get hostClasses() {
        return {
            'was-validated': this.validated,
        };
    }
    constructor() {
        this._validated = false;
    }
}
FormDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormDirective, selector: "form[cForm]", inputs: { validated: "validated" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'form[cForm]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { validated: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormFeedbackComponent {
    constructor() {
        /**
         * If your form layout allows it, you can display validation feedback in a styled tooltip.
         */
        this._tooltip = false;
    }
    set tooltip(value) {
        this._tooltip = coerceBooleanProperty(value);
    }
    get tooltip() {
        return this._tooltip;
    }
    get hostClasses() {
        return {
            'valid-feedback': this.valid === true && !this.tooltip,
            'valid-tooltip': this.valid === true && this.tooltip,
            'invalid-feedback': this.valid !== true && !this.tooltip,
            'invalid-tooltip': this.valid !== true && this.tooltip
        };
    }
}
FormFeedbackComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormFeedbackComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFeedbackComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: FormFeedbackComponent, selector: "c-form-feedback", inputs: { tooltip: "tooltip", valid: "valid" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormFeedbackComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-form-feedback',
                    template: '<ng-content></ng-content>'
                }]
        }], propDecorators: { tooltip: [{
                type: Input
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class InputGroupComponent {
    get hostClasses() {
        return {
            'input-group': true,
            [`input-group-${this.sizing}`]: !!this.sizing,
        };
    }
    constructor() {
        /**
         * Size the component small or large.
         */
        this.sizing = '';
    }
}
InputGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: InputGroupComponent, selector: "c-input-group", inputs: { sizing: "sizing" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-input-group',
                    template: `<ng-content></ng-content>`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { sizing: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormSelectDirective {
    get hostClasses() {
        return {
            'form-select': true,
            [`form-select-${this.sizing}`]: !!this.sizing,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false,
        };
    }
    constructor() {
        /**
         * Size the component small or large.
         */
        this.sizing = '';
    }
}
FormSelectDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormSelectDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormSelectDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormSelectDirective, selector: "select[cSelect]", inputs: { sizing: "sizing", valid: "valid" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'select[cSelect]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { sizing: [{
                type: Input
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormLabelDirective {
    get hostClasses() {
        return {
            'form-label': true,
            'col-form-label': this.col === 'col',
            [`col-form-label-${this.sizing}`]: !!this.sizing && this.col === 'col',
        };
    }
    constructor() {
        /**
         * For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls.
         * @type 'col'
         */
        this.col = '';
        /**
         * Size the label small or large.
         */
        this.sizing = '';
    }
}
FormLabelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormLabelDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormLabelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormLabelDirective, selector: "[cLabel]", inputs: { col: ["cLabel", "col"], sizing: "sizing" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cLabel]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { col: [{
                type: Input,
                args: ['cLabel']
            }], sizing: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormCheckLabelDirective {
    get hostClasses() {
        return {
            'form-check-label': true,
        };
    }
}
FormCheckLabelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckLabelDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormCheckLabelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormCheckLabelDirective, selector: "label[cFormCheckLabel]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'label[cFormCheckLabel]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormCheckComponent {
    constructor() {
        this._inline = false;
        /**
         * Size the component large or extra large. Works only with `[switch]="true"` [docs]
         * @type {'lg' | 'xl' | ''}
         */
        this.sizing = '';
        this._switch = false;
        this._formCheckClass = true;
    }
    /**
     * Group checkboxes or radios on the same horizontal row.
     * @type boolean
     * @default false
     */
    set inline(value) {
        this._inline = coerceBooleanProperty(value);
    }
    get inline() {
        return this._inline;
    }
    /**
   * Render a toggle switch on for checkbox.
   * @type boolean
   * @default false
   */
    set switch(value) {
        this._switch = coerceBooleanProperty(value);
    }
    get switch() {
        return this._switch;
    }
    get hostClasses() {
        return {
            'form-check': this.formCheckClass,
            'form-switch': this.switch,
            [`form-switch-${this.sizing}`]: this.switch && !!this.sizing,
            'form-check-inline': this.inline
        };
    }
    get formCheckClass() {
        return this._formCheckClass;
    }
    ngAfterContentInit() {
        this._formCheckClass = !!this.formCheckLabel;
    }
}
FormCheckComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormCheckComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: FormCheckComponent, selector: "c-form-check", inputs: { inline: "inline", sizing: "sizing", switch: "switch" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "formCheckLabel", first: true, predicate: FormCheckLabelDirective, descendants: true }], exportAs: ["cFormCheck"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-form-check',
                    template: '<ng-content></ng-content>',
                    exportAs: 'cFormCheck'
                }]
        }], propDecorators: { inline: [{
                type: Input
            }], sizing: [{
                type: Input
            }], switch: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], formCheckLabel: [{
                type: ContentChild,
                args: [FormCheckLabelDirective]
            }] } });

class FormCheckInputDirective {
    /**
     * Set component indeterminate state.
     * @type boolean
     */
    set indeterminate(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._indeterminate !== newValue) {
            this._indeterminate = newValue;
            this.renderer.setProperty(this.hostElement.nativeElement, 'indeterminate', newValue);
        }
    }
    ;
    get indeterminate() {
        return this._indeterminate;
    }
    get hostClasses() {
        return {
            'form-check-input': true,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false
        };
    }
    get checked() {
        return this.hostElement?.nativeElement?.checked;
    }
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        /**
         * Specifies the type of component.
         * @type {'checkbox' | 'radio'}
         * @default 'checkbox'
         */
        this.type = 'checkbox';
        this._indeterminate = false;
    }
}
FormCheckInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckInputDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FormCheckInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormCheckInputDirective, selector: "input[cFormCheckInput]", inputs: { type: "type", indeterminate: "indeterminate", valid: "valid" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[cFormCheckInput]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], indeterminate: [{
                type: Input
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormControlDirective {
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly` [docs]
     */
    set plaintext(value) {
        this._plaintext = coerceBooleanProperty(value);
    }
    get plaintext() {
        return this._plaintext;
    }
    constructor(hostElement) {
        this.hostElement = hostElement;
        /**
         * Size the component small or large.
         * @type {'sm' | 'lg'}
         */
        this.sizing = '';
        /**
         * Specifies the type of input element.
         */
        this.type = 'text';
        this._plaintext = false;
    }
    get hostClasses() {
        const isRangeType = this.type === 'range';
        return {
            'form-control': !isRangeType && !this.plaintext,
            'form-control-plaintext': !isRangeType && this.plaintext,
            'form-control-color': this.type === 'color',
            'form-range': isRangeType,
            [`form-control-${this.sizing}`]: !!this.sizing && !isRangeType,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false
        };
    }
    get hostTag() {
        return this.hostElement.nativeElement.tagName;
    }
    ngOnInit() {
        const hostTag = this.hostTag.toLowerCase();
        if (hostTag !== 'input' && hostTag !== 'textarea') {
            console.warn(`CoreUI [cFormControl] works with '<input>' and '<texarea>' - not with '<${hostTag}>'`);
        }
    }
}
FormControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormControlDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FormControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormControlDirective, selector: "input[cFormControl], textarea[cFormControl]", inputs: { sizing: "sizing", valid: "valid", type: "type", plaintext: "plaintext" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[cFormControl], textarea[cFormControl]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { sizing: [{
                type: Input
            }], valid: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], plaintext: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormTextDirective {
    get hostClasses() {
        return {
            'form-text': true,
        };
    }
    constructor() { }
}
FormTextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormTextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormTextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormTextDirective, selector: "[cFormText]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormTextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cFormText]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormFloatingDirective {
    /**
     * Enable floating labels
     * @type boolean
     */
    get floating() {
        return this._floating;
    }
    set floating(value) {
        this._floating = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            'form-floating': this.floating,
        };
    }
    constructor() {
        this._floating = true;
    }
}
FormFloatingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormFloatingDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormFloatingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormFloatingDirective, selector: "[cFormFloating]", inputs: { floating: ["cFormFloating", "floating"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormFloatingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cFormFloating]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { floating: [{
                type: Input,
                args: ['cFormFloating']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class InputGroupTextDirective {
    get hostClasses() {
        return {
            'input-group-text': true,
        };
    }
    constructor() { }
}
InputGroupTextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputGroupTextDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
InputGroupTextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: InputGroupTextDirective, selector: "[cInputGroupText]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputGroupTextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cInputGroupText]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class FormModule {
}
FormModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: FormModule, declarations: [FormDirective,
        FormCheckComponent,
        FormControlDirective,
        FormFeedbackComponent,
        FormFloatingDirective,
        FormLabelDirective,
        FormSelectDirective,
        FormTextDirective,
        InputGroupComponent,
        InputGroupTextDirective,
        FormCheckLabelDirective,
        FormCheckInputDirective], imports: [CommonModule], exports: [FormDirective,
        FormCheckComponent,
        FormControlDirective,
        FormFeedbackComponent,
        FormFloatingDirective,
        FormLabelDirective,
        FormSelectDirective,
        FormTextDirective,
        InputGroupComponent,
        InputGroupTextDirective,
        FormCheckLabelDirective,
        FormCheckInputDirective] });
FormModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FormDirective,
                        FormCheckComponent,
                        FormControlDirective,
                        FormFeedbackComponent,
                        FormFloatingDirective,
                        FormLabelDirective,
                        FormSelectDirective,
                        FormTextDirective,
                        InputGroupComponent,
                        InputGroupTextDirective,
                        FormCheckLabelDirective,
                        FormCheckInputDirective,
                    ],
                    imports: [CommonModule],
                    exports: [
                        FormDirective,
                        FormCheckComponent,
                        FormControlDirective,
                        FormFeedbackComponent,
                        FormFloatingDirective,
                        FormLabelDirective,
                        FormSelectDirective,
                        FormTextDirective,
                        InputGroupComponent,
                        InputGroupTextDirective,
                        FormCheckLabelDirective,
                        FormCheckInputDirective
                    ]
                }]
        }] });

class ContainerComponent {
    constructor() {
        /**
         * Set container 100% wide until a breakpoint.
         */
        this.breakpoint = '';
        this._fluid = false;
    }
    /**
     * Set container 100% wide, spanning the entire width of the viewport.
     */
    set fluid(value) {
        this._fluid = coerceBooleanProperty(value);
    }
    ;
    get fluid() {
        return this._fluid;
    }
    get hostClasses() {
        return {
            container: !this.fluid && !this.breakpoint,
            'container-fluid': this.fluid,
            [`container-${this.breakpoint}`]: !!this.breakpoint,
        };
    }
}
ContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ContainerComponent, selector: "c-container, [cContainer]", inputs: { breakpoint: "breakpoint", fluid: "fluid" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-container, [cContainer]', template: '<ng-content></ng-content>', styles: [":host{display:block}\n"] }]
        }], propDecorators: { breakpoint: [{
                type: Input
            }], fluid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ColDirective {
    constructor() {
        this._xs = false;
        this._sm = false;
        this._md = false;
        this._lg = false;
        this._xl = false;
        this._xxl = false;
    }
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     * @type { 'auto' | number |  boolean }
     */
    set cCol(value) {
        this.xs = this.xs || this.coerceInput(value);
    }
    set xs(value) {
        this._xs = this.coerceInput(value);
    }
    get xs() {
        return this._xs;
    }
    /**
     * The number of columns/offset/order on small devices (<768px).
     * @type { 'auto' | number |  boolean }
     */
    set sm(value) {
        this._sm = this.coerceInput(value);
    }
    get sm() {
        return this._sm;
    }
    /**
     * The number of columns/offset/order on medium devices (<992px).
     * @type { 'auto' | number |  boolean }
     */
    set md(value) {
        this._md = this.coerceInput(value);
    }
    get md() {
        return this._md;
    }
    /**
     * The number of columns/offset/order on large devices (<1200px).
     * @type { 'auto' | number |  boolean }
     */
    set lg(value) {
        this._lg = this.coerceInput(value);
    }
    get lg() {
        return this._lg;
    }
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xl(value) {
        this._xl = this.coerceInput(value);
    }
    get xl() {
        return this._xl;
    }
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xxl(value) {
        this._xxl = this.coerceInput(value);
    }
    get xxl() {
        return this._xxl;
    }
    get hostClasses() {
        const classes = {
            col: true
        };
        Object.keys(BreakpointInfix).forEach((breakpoint) => {
            // @ts-ignore
            const value = this[breakpoint];
            const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
            classes[`col${infix}`] = value === true;
            classes[`col${infix}-${value}`] = (typeof value === 'number') || (typeof value === 'string');
        });
        if (typeof this.offset === 'object') {
            const offset = { ...this.offset };
            Object.entries(offset).forEach((entry) => {
                const [breakpoint, value] = [...entry];
                const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
                classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
            });
        }
        else {
            classes[`offset-${this.offset}`] = (typeof this.offset === 'number') && this.offset > 0 && this.offset <= 11;
        }
        if (typeof this.order === 'object') {
            const order = { ...this.order };
            Object.entries(order).forEach((entry) => {
                const [breakpoint, value] = [...entry];
                const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
                classes[`order${infix}-${value}`] = value;
            });
        }
        else {
            classes[`order-${this.order}`] = !!this.order;
        }
        // if there is no 'col' class, add one
        classes.col = (!Object.entries(classes).filter(i => i[0].startsWith('col-') && i[1]).length) || this.xs === true;
        return classes;
    }
    coerceInput(value) {
        if (value === 'auto') {
            return value;
        }
        if (value === '' || value === undefined || value === null) {
            return coerceBooleanProperty(value);
        }
        if (typeof value === 'boolean') {
            return value;
        }
        return coerceNumberProperty(value);
    }
}
ColDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ColDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ColDirective, selector: "[cCol]", inputs: { cCol: "cCol", xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl", offset: "offset", order: "order" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCol]'
                }]
        }], propDecorators: { cCol: [{
                type: Input
            }], xs: [{
                type: Input
            }], sm: [{
                type: Input
            }], md: [{
                type: Input
            }], lg: [{
                type: Input
            }], xl: [{
                type: Input
            }], xxl: [{
                type: Input
            }], offset: [{
                type: Input
            }], order: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ColComponent extends ColDirective {
}
ColComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ColComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ColComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ColComponent, selector: "c-col", usesInheritance: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ColComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-col', template: '<ng-content></ng-content>', styles: [":host{display:block}\n"] }]
        }] });

class RowDirective {
    get hostClasses() {
        const cols = this.xs;
        const classes = {
            row: true,
            [`row-cols-${cols}`]: !!cols,
        };
        Object.keys(BreakpointInfix).forEach(breakpoint => {
            // @ts-ignore
            const value = this[breakpoint];
            if ((typeof value === 'number') || (typeof value === 'string')) {
                const infix = breakpoint === 'xs' ? '' : breakpoint;
                classes[`row-cols-${infix}-${value}`] = !!value;
            }
        });
        return classes;
    }
}
RowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: RowDirective, selector: "[cRow]", inputs: { xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cRow]'
                }]
        }], propDecorators: { xs: [{
                type: Input
            }], sm: [{
                type: Input
            }], md: [{
                type: Input
            }], lg: [{
                type: Input
            }], xl: [{
                type: Input
            }], xxl: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class RowComponent extends RowDirective {
}
RowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RowComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: RowComponent, selector: "c-row", usesInheritance: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-row', template: '<ng-content></ng-content>' }]
        }] });

class GutterDirective {
    constructor() {
        /**
         * Define padding between columns to space and align content responsively in the Bootstrap grid system.
         */
        this.gutter = {};
    }
    get hostClasses() {
        let gutterClass;
        if (typeof this.gutter === 'number') {
            gutterClass = GutterDirective.getGutterClasses({ g: this.gutter });
            return gutterClass;
        }
        {
            // @ts-ignore
            const { g, gx, gy } = { ...this.gutter };
            gutterClass = GutterDirective.getGutterClasses({ g, gx, gy });
        }
        Object.keys(BreakpointInfix).forEach(key => {
            // @ts-ignore
            const gutter = this.gutter[key] ? { ...this.gutter[key] } : undefined;
            if (gutter) {
                const classes = GutterDirective.getGutterClasses(gutter, key);
                gutterClass = { ...gutterClass, ...classes };
            }
        });
        return gutterClass;
    }
    static getGutterClasses(gutter, breakpoint) {
        const { g, gx, gy } = { ...gutter };
        const infix = breakpoint ? `-${breakpoint}` : '';
        return {
            [`g${infix}-${g}`]: typeof g === 'number',
            [`gx${infix}-${gx}`]: typeof gx === 'number',
            [`gy${infix}-${gy}`]: typeof gy === 'number'
        };
    }
}
GutterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GutterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GutterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: GutterDirective, selector: "[gutter]", inputs: { gutter: "gutter" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GutterDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[gutter]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { gutter: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class GridModule {
}
GridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: GridModule, declarations: [ContainerComponent,
        RowComponent,
        ColComponent,
        RowDirective,
        ColDirective,
        GutterDirective], imports: [CommonModule], exports: [ContainerComponent,
        RowComponent,
        ColComponent,
        GutterDirective,
        RowDirective,
        ColDirective] });
GridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GridModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [
                        ContainerComponent,
                        RowComponent,
                        ColComponent,
                        GutterDirective,
                        RowDirective,
                        ColDirective,
                    ],
                    declarations: [
                        ContainerComponent,
                        RowComponent,
                        ColComponent,
                        RowDirective,
                        ColDirective,
                        GutterDirective,
                    ],
                    providers: [],
                }]
        }] });

class HeaderComponent {
    constructor() {
        /**
         * Default role for header. [docs]
         * @type string
         * @default 'header'
         */
        this.role = 'header';
    }
    get getClasses() {
        return !!this.container ? this.containerClasses : this.headerClasses;
    }
    get headerClasses() {
        return {
            header: true,
            [`header-${this.position}`]: !!this.position,
        };
    }
    get containerClasses() {
        return {
            container: this.container === true,
            [`container-${this.container}`]: typeof this.container === 'string'
        };
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderComponent, selector: "c-header, [c-header]", inputs: { container: "container", position: "position", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.getClasses" } }, ngImport: i0, template: "<div [class]=\"headerClasses\" *ngIf=\"!!container; else elseBlock\">\n  <ng-content></ng-content>\n</div>\n<ng-template #elseBlock>\n  <ng-content></ng-content>\n</ng-template>\n\n\n", dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-header, [c-header]', template: "<div [class]=\"headerClasses\" *ngIf=\"!!container; else elseBlock\">\n  <ng-content></ng-content>\n</div>\n<ng-template #elseBlock>\n  <ng-content></ng-content>\n</ng-template>\n\n\n" }]
        }], propDecorators: { container: [{
                type: Input
            }], position: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class HeaderBrandComponent {
    constructor() {
        /**
         * Default role for header-brand. [docs]
         * @type string
         * @default 'button'
         */
        this.role = 'button';
        this.headerBrandClass = true;
    }
}
HeaderBrandComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderBrandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderBrandComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderBrandComponent, selector: "c-header-brand", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.header-brand": "this.headerBrandClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderBrandComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-header-brand',
                    template: `<ng-content></ng-content>`
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], headerBrandClass: [{
                type: HostBinding,
                args: ['class.header-brand']
            }] } });

class HeaderDividerComponent {
    constructor() {
        this.headerDividerClass = true;
    }
}
HeaderDividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderDividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderDividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderDividerComponent, selector: "c-header-divider, [cHeaderDivider]", host: { properties: { "class.header-divider": "this.headerDividerClass" } }, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderDividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-header-divider, [cHeaderDivider]',
                    template: ``
                }]
        }], propDecorators: { headerDividerClass: [{
                type: HostBinding,
                args: ['class.header-divider']
            }] } });

class HeaderNavComponent {
    constructor() {
        /**
         * Default role for header-nav. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
        this.headerNavClass = true;
    }
}
HeaderNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderNavComponent, selector: "c-header-nav", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.header-nav": "this.headerNavClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-header-nav', template: `<ng-content></ng-content>` }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], headerNavClass: [{
                type: HostBinding,
                args: ['class.header-nav']
            }] } });

class HeaderTextComponent {
    constructor() {
        this.headerTextClass = true;
    }
}
HeaderTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderTextComponent, selector: "c-header-text, [cHeaderText]", host: { properties: { "class.header-text": "this.headerTextClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-header-text, [cHeaderText]',
                    template: `<ng-content></ng-content>`,
                }]
        }], propDecorators: { headerTextClass: [{
                type: HostBinding,
                args: ['class.header-text']
            }] } });

class HeaderTogglerDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.headerToggler = true;
        /**
         * Default role for header-toggler. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
        /**
         * Default aria-label attr for header-toggler. [docs]
         * @type string
         * @default 'Toggle navigation'
         */
        this.ariaLabel = 'Toggle navigation';
    }
    addDefaultIcon() {
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'header-toggler-icon');
        this.renderer.appendChild(this.hostElement.nativeElement, span);
    }
    ngAfterContentInit() {
        this.hasContent = this.hostElement.nativeElement.childNodes.length > 0;
        if (!this.hasContent) {
            this.addDefaultIcon();
        }
    }
}
HeaderTogglerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTogglerDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
HeaderTogglerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: HeaderTogglerDirective, selector: "[cHeaderToggler]", inputs: { type: "type", ariaLabel: "ariaLabel" }, host: { properties: { "class.header-toggler": "this.headerToggler", "attr.type": "this.type", "attr.aria-label": "this.ariaLabel" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTogglerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cHeaderToggler]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { headerToggler: [{
                type: HostBinding,
                args: ['class.header-toggler']
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], ariaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }, {
                type: Input
            }] } });

class HeaderModule {
}
HeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: HeaderModule, declarations: [HeaderComponent,
        HeaderBrandComponent,
        HeaderDividerComponent,
        HeaderNavComponent,
        HeaderTextComponent,
        HeaderTogglerDirective], imports: [CommonModule], exports: [HeaderComponent,
        HeaderBrandComponent,
        HeaderDividerComponent,
        HeaderNavComponent,
        HeaderTextComponent,
        HeaderTogglerDirective] });
HeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HeaderComponent,
                        HeaderBrandComponent,
                        HeaderDividerComponent,
                        HeaderNavComponent,
                        HeaderTextComponent,
                        HeaderTogglerDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        HeaderComponent,
                        HeaderBrandComponent,
                        HeaderDividerComponent,
                        HeaderNavComponent,
                        HeaderTextComponent,
                        HeaderTogglerDirective
                    ]
                }]
        }] });

class ImgDirective {
    /**
     * Make image responsive.
     * @type boolean
     */
    set fluid(value) {
        this._fluid = coerceBooleanProperty(value);
    }
    ;
    get fluid() {
        return this._fluid;
    }
    /**
     * Make image rounded.
     * @type boolean
     */
    set rounded(value) {
        this._rounded = coerceBooleanProperty(value);
    }
    ;
    get rounded() {
        return this._rounded;
    }
    /**
     * Give an image a rounded 1px border appearance.
     * @type boolean
     */
    set thumbnail(value) {
        this._thumbnail = coerceBooleanProperty(value);
    }
    ;
    get thumbnail() {
        return this._thumbnail;
    }
    get getStyles() {
        return { backgroundColor: this.placeholderColor };
    }
    get hostClasses() {
        const align = this.align;
        return {
            [`float-${align}`]: align === 'start' || align === 'end',
            'd-block': align === 'center',
            'mx-auto': align === 'center',
            'img-fluid': this.fluid,
            'rounded': this.rounded,
            'img-thumbnail': this.thumbnail,
        };
    }
    constructor() {
        /**
         * Set the horizontal aligment.
         * @type {'' | 'start' | 'end' | 'center'}
         */
        this.align = '';
        this._fluid = false;
        this._rounded = false;
        this._thumbnail = false;
        /**
         * Color for image placeholder.
         */
        this.placeholderColor = 'transparent';
    }
}
ImgDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ImgDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ImgDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ImgDirective, selector: "[cImg]", inputs: { align: "align", fluid: "fluid", rounded: "rounded", thumbnail: "thumbnail", placeholderColor: "placeholderColor" }, host: { properties: { "style": "this.getStyles", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ImgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cImg]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { align: [{
                type: Input
            }], fluid: [{
                type: Input
            }], rounded: [{
                type: Input
            }], thumbnail: [{
                type: Input
            }], placeholderColor: [{
                type: Input
            }], getStyles: [{
                type: HostBinding,
                args: ['style']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ImgModule {
}
ImgModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ImgModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ImgModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ImgModule, declarations: [ImgDirective], imports: [CommonModule], exports: [ImgDirective] });
ImgModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ImgModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ImgModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ImgDirective
                    ],
                    declarations: [
                        ImgDirective
                    ],
                }]
        }] });

class ListGroupDirective {
    /**
     * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
     * @type boolean
     */
    set flush(value) {
        this._flush = coerceBooleanProperty(value);
    }
    ;
    get flush() {
        return this._flush;
    }
    get hostClasses() {
        const classes = {
            'list-group': true,
            'list-group-horizontal': this.horizontal === true || this.horizontal === '',
            [`list-group-horizontal-${this.horizontal}`]: !!this.horizontal && typeof this.horizontal !== 'boolean',
            'list-group-flush': this.flush,
        };
        return classes;
    }
    constructor() {
        this._flush = false;
    }
}
ListGroupDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ListGroupDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ListGroupDirective, selector: "[cListGroup]", inputs: { flush: "flush", horizontal: "horizontal" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cListGroup]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { flush: [{
                type: Input
            }], horizontal: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ListGroupItemDirective {
    /**
     * Set disabled attr for the host element. [docs]
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    get ariaCurrent() {
        return !!this.active;
    }
    get hostClasses() {
        const host = this.hostElement.nativeElement;
        return {
            'list-group-item': true,
            'list-group-item-action': host.nodeName === 'A' || host.nodeName === 'BUTTON',
            active: !!this.active,
            disabled: this.isDisabled,
            [`list-group-item-${this.color}`]: !!this.color
        };
    }
    constructor(hostElement) {
        this.hostElement = hostElement;
        this._disabled = false;
    }
}
ListGroupItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupItemDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ListGroupItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ListGroupItemDirective, selector: "[cListGroupItem], c-list-group-item", inputs: { active: "active", color: "color", disabled: "disabled" }, host: { properties: { "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex", "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses" } }, exportAs: ["cListGroupItem"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cListGroupItem], c-list-group-item',
                    exportAs: 'cListGroupItem'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { active: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ListGroupModule {
}
ListGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, declarations: [ListGroupDirective, ListGroupItemDirective], imports: [CommonModule], exports: [ListGroupDirective,
        ListGroupItemDirective] });
ListGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ListGroupDirective, ListGroupItemDirective],
                    exports: [
                        ListGroupDirective,
                        ListGroupItemDirective
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class NavLinkDirective {
    constructor() {
        this._cNavLink = true;
        this._disabled = false;
    }
    /**
     * Sets .nav-link class to the host. [docs]
     * @type boolean
     * @default true
     */
    set cNavLink(value) {
        this._cNavLink = coerceBooleanProperty(value);
    }
    ;
    get cNavLink() {
        return this._cNavLink;
    }
    /**
     * Set disabled attr for the host element. [docs]
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get ariaCurrent() {
        return this.active ? 'page' : null;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    get getCursorStyle() {
        return this.disabled ? null : 'pointer';
    }
    get hostClasses() {
        return {
            'nav-link': this.cNavLink,
            disabled: this.disabled,
            active: this.active
        };
    }
}
NavLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NavLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: NavLinkDirective, selector: "[cNavLink]", inputs: { cNavLink: "cNavLink", active: "active", disabled: "disabled" }, host: { properties: { "attr.aria-current": "this.ariaCurrent", "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex", "style.cursor": "this.getCursorStyle", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavLink]'
                }]
        }], propDecorators: { cNavLink: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], getCursorStyle: [{
                type: HostBinding,
                args: ['style.cursor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class NavItemComponent {
    get hostClasses() {
        return {
            'nav-item': true
        };
    }
}
NavItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavItemComponent, selector: "c-nav-item", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-nav-item', template: "<ng-content></ng-content>\n", styles: [":host{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}\n"] }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class NavComponent {
    get hostClasses() {
        return {
            nav: true,
            [`nav-${this.layout}`]: !!this.layout,
            [`nav-${this.variant}`]: !!this.variant
        };
    }
}
NavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavComponent, selector: "c-nav", inputs: { layout: "layout", variant: "variant" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `
    <ng-content></ng-content>`, isInline: true, styles: [":host .nav-link:focus{outline:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-nav', template: `
    <ng-content></ng-content>`, styles: [":host .nav-link:focus{outline:0}\n"] }]
        }], propDecorators: { layout: [{
                type: Input
            }], variant: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class NavModule {
}
NavModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NavModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: NavModule, declarations: [NavComponent, NavItemComponent, NavLinkDirective], imports: [CommonModule], exports: [NavComponent, NavItemComponent, NavLinkDirective] });
NavModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NavComponent, NavItemComponent, NavLinkDirective],
                    imports: [
                        CommonModule
                    ],
                    exports: [NavComponent, NavItemComponent, NavLinkDirective]
                }]
        }] });

// todo: fix container prop issue not rendering children
// todo: workaroud -  use <c-container> component directly in template
class NavbarComponent {
    constructor(hostElement, breakpointObserver) {
        this.hostElement = hostElement;
        this.breakpointObserver = breakpointObserver;
        /**
         * Sets if the color of text should be colored for a light or dark dark background.
         */
        this.colorScheme = 'light';
        this.role = 'navigation';
    }
    get hostClasses() {
        const expandClassSuffix = this.expand === true ? '' : `-${this.expand}`;
        return {
            navbar: true,
            'navbar-light': this.colorScheme === 'light',
            'navbar-dark': this.colorScheme === 'dark',
            [`navbar-expand${expandClassSuffix}`]: !!this.expand,
            [`bg-${this.color}`]: !!this.color,
            [`${this.placement}`]: !!this.placement
        };
    }
    get containerClass() {
        return `container${this.container !== true ? '-' + this.container : ''}`;
    }
    get breakpoint() {
        if (typeof this.expand === 'string') {
            return getComputedStyle(this.hostElement.nativeElement).getPropertyValue(`--cui-breakpoint-${this.expand}`);
        }
        return false;
    }
    ngAfterContentInit() {
        if (this.breakpoint) {
            const onBreakpoint = `(min-width: ${this.breakpoint})`;
            this.breakpointObserver.observe([onBreakpoint]).subscribe(result => {
                if (this.collapse) {
                    const animate = this.collapse.animate;
                    this.collapse.toggle(false);
                    this.collapse.animate = false;
                    setTimeout(() => {
                        this.collapse.toggle(result.matches);
                        setTimeout(() => {
                            this.collapse.animate = animate;
                        });
                    });
                }
            });
        }
    }
}
NavbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarComponent, deps: [{ token: i0.ElementRef }, { token: i1$2.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Component });
NavbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavbarComponent, selector: "c-navbar", inputs: { color: "color", colorScheme: "colorScheme", container: "container", expand: "expand", placement: "placement", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, queries: [{ propertyName: "collapse", first: true, predicate: CollapseDirective, descendants: true }], ngImport: i0, template: "<ng-container *ngTemplateOutlet=\"container ? withContainerTemplate : noContainerTemplate\"></ng-container>\n\n<ng-template #withContainerTemplate>\n  <div [ngClass]=\"containerClass\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n\n<ng-template #noContainerTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-navbar', template: "<ng-container *ngTemplateOutlet=\"container ? withContainerTemplate : noContainerTemplate\"></ng-container>\n\n<ng-template #withContainerTemplate>\n  <div [ngClass]=\"containerClass\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n\n<ng-template #noContainerTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1$2.BreakpointObserver }]; }, propDecorators: { color: [{
                type: Input
            }], colorScheme: [{
                type: Input
            }], container: [{
                type: Input
            }], expand: [{
                type: Input
            }], placement: [{
                type: Input
            }], collapse: [{
                type: ContentChild,
                args: [CollapseDirective]
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class NavbarBrandDirective {
    constructor() {
        this.navbarBrand = true;
        this.role = 'button';
    }
}
NavbarBrandDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarBrandDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NavbarBrandDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: NavbarBrandDirective, selector: "[cNavbarBrand]", host: { properties: { "class.navbar-brand": "this.navbarBrand", "attr.role": "this.role" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarBrandDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavbarBrand]'
                }]
        }], propDecorators: { navbarBrand: [{
                type: HostBinding,
                args: ['class.navbar-brand']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }] } });

class NavbarNavComponent {
    constructor() {
        this._scroll = false;
    }
    /**
     * Enable vertical scrolling of a collapsed navbar toggleable contents.
     * @type boolean
     */
    set scroll(value) {
        this._scroll = coerceBooleanProperty(value);
    }
    ;
    get scroll() {
        return this._scroll;
    }
    get hostClasses() {
        return {
            'navbar-nav': true,
            'navbar-nav-scroll': this.scroll
        };
    }
}
NavbarNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavbarNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavbarNavComponent, selector: "c-navbar-nav", inputs: { scroll: "scroll" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarNavComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-navbar-nav',
                    template: '<ng-content></ng-content>',
                }]
        }], propDecorators: { scroll: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class NavbarTextComponent {
    constructor() {
        this.navbarTextClass = true;
    }
}
NavbarTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavbarTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavbarTextComponent, selector: "c-navbar-text", host: { properties: { "class.navbar-text": "this.navbarTextClass" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-navbar-text',
                    template: '<ng-content></ng-content>',
                }]
        }], propDecorators: { navbarTextClass: [{
                type: HostBinding,
                args: ['class.navbar-text']
            }] } });

class NavbarTogglerDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navbarToggler = true;
        /**
         * Default type for navbar-toggler. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
        /**
         * Default aria-label attr for navbar-toggler. [docs]
         * @type string
         * @default 'Toggle navigation'
         */
        this.ariaLabel = 'Toggle navigation';
    }
    handleClick() {
        this.collapseRef?.toggle(!this.collapseRef?.visible);
    }
    addDefaultIcon() {
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'navbar-toggler-icon');
        this.renderer.appendChild(this.hostElement.nativeElement, span);
    }
    ngAfterContentInit() {
        this.hasContent = this.hostElement.nativeElement.childNodes.length;
        if (!this.hasContent) {
            this.addDefaultIcon();
        }
    }
}
NavbarTogglerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarTogglerDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NavbarTogglerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: NavbarTogglerDirective, selector: "[cNavbarToggler]", inputs: { collapseRef: ["cNavbarToggler", "collapseRef"], type: "type", ariaLabel: "ariaLabel" }, host: { listeners: { "click": "handleClick($event)" }, properties: { "class.navbar-toggler": "this.navbarToggler", "attr.type": "this.type", "attr.aria-label": "this.ariaLabel" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarTogglerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavbarToggler]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { collapseRef: [{
                type: Input,
                args: ['cNavbarToggler']
            }], navbarToggler: [{
                type: HostBinding,
                args: ['class.navbar-toggler']
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], ariaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }, {
                type: Input
            }], handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class NavbarModule {
}
NavbarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NavbarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, declarations: [NavbarComponent,
        NavbarNavComponent,
        NavbarTextComponent,
        NavbarBrandDirective,
        NavbarTogglerDirective], imports: [CommonModule,
        RouterModule], exports: [NavbarComponent,
        NavbarNavComponent,
        NavbarTextComponent,
        NavbarBrandDirective,
        NavbarTogglerDirective] });
NavbarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, imports: [CommonModule,
        RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NavbarComponent,
                        NavbarNavComponent,
                        NavbarTextComponent,
                        NavbarBrandDirective,
                        NavbarTogglerDirective
                    ],
                    exports: [
                        NavbarComponent,
                        NavbarNavComponent,
                        NavbarTextComponent,
                        NavbarBrandDirective,
                        NavbarTogglerDirective
                    ],
                    imports: [
                        CommonModule,
                        RouterModule
                    ]
                }]
        }] });

class ModalBodyComponent {
    get hostClasses() {
        return {
            'modal-body': true,
        };
    }
}
ModalBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalBodyComponent, selector: "c-modal-body", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-modal-body', template: '<ng-content></ng-content>', styles: [":host{display:block}\n"] }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ModalContentComponent {
    constructor() { }
    get hostClasses() {
        return {
            'modal-content': true
        };
    }
}
ModalContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalContentComponent, selector: "c-modal-content", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-modal-content',
                    template: '<ng-content></ng-content>'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ModalDialogComponent {
    get hostClasses() {
        return {
            'modal-dialog': true,
            'modal-dialog-centered': this.alignment === 'center',
            'modal-fullscreen': this.fullscreen === true,
            [`modal-fullscreen-${this.fullscreen}-down`]: this.fullscreen,
            'modal-dialog-scrollable': this.scrollable,
            [`modal-${this.size}`]: this.size
        };
    }
}
ModalDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalDialogComponent, selector: "c-modal-dialog", inputs: { alignment: "alignment", fullscreen: "fullscreen", scrollable: "scrollable", size: "size" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-modal-dialog', template: '<ng-content></ng-content>', styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"] }]
        }], propDecorators: { alignment: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], scrollable: [{
                type: Input
            }], size: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ModalService {
    constructor() {
        this.modalState = new Subject();
        this.modalState$ = this.modalState.asObservable();
    }
    toggle(action) {
        this.modalState.next(action);
    }
}
ModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ModalToggleDirective {
    constructor(modalService) {
        this.modalService = modalService;
    }
    dismiss($event) {
        $event.preventDefault();
        this.modalService.toggle({ show: 'toggle', id: this.id });
    }
}
ModalToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalToggleDirective, deps: [{ token: ModalService }], target: i0.ɵɵFactoryTarget.Directive });
ModalToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ModalToggleDirective, selector: "[cModalToggle]", inputs: { id: ["cModalToggle", "id"] }, host: { listeners: { "click": "dismiss($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cModalToggle]'
                }]
        }], ctorParameters: function () { return [{ type: ModalService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cModalToggle']
            }], dismiss: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class ModalFooterComponent {
    get hostClasses() {
        return {
            'modal-footer': true,
        };
    }
}
ModalFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalFooterComponent, selector: "c-modal-footer", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-modal-footer',
                    template: '<ng-content></ng-content>',
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ModalHeaderComponent {
    get hostClasses() {
        return {
            'modal-header': true
        };
    }
}
ModalHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalHeaderComponent, selector: "c-modal-header", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `
    <ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-modal-header',
                    template: `
    <ng-content></ng-content>`,
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ModalTitleDirective {
    get hostClasses() {
        return {
            'modal-title': true,
        };
    }
}
ModalTitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ModalTitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ModalTitleDirective, selector: "[cModalTitle]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalTitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cModalTitle]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class BackdropService {
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.backdropClick = new Subject();
        this.backdropClick$ = this.backdropClick.asObservable();
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    setBackdrop(type = 'modal') {
        const backdropElement = this.renderer.createElement('div');
        this.renderer.addClass(backdropElement, `${type}-backdrop`);
        this.renderer.addClass(backdropElement, 'fade');
        this.renderer.appendChild(this.document.body, backdropElement);
        this.unListen = this.renderer.listen(backdropElement, 'click', (e) => {
            this.onClickHandler();
        });
        setTimeout(() => {
            this.renderer.addClass(backdropElement, 'show');
        });
        return backdropElement;
    }
    clearBackdrop(backdrop) {
        if (backdrop) {
            this.unListen();
            this.renderer.removeClass(backdrop, 'show');
            setTimeout(() => {
                this.renderer.removeChild(this.document.body, backdrop);
                backdrop = undefined;
            }, 300);
        }
        return backdrop;
    }
    onClickHandler() {
        this.backdropClick.next(true);
    }
}
BackdropService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BackdropService, deps: [{ token: DOCUMENT }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable });
BackdropService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BackdropService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.RendererFactory2 }]; } });

class ModalComponent {
    constructor(document, renderer, hostElement, modalService, backdropService) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.modalService = modalService;
        this.backdropService = backdropService;
        /**
         * Align the modal in the center or top of the screen.
         * @type {'top' | 'center'}
         * @default 'top'
         */
        this.alignment = 'top';
        /**
         * Apply a backdrop on body while modal is open.
         * @type boolean | 'static'
         * @default true
         */
        this.backdrop = true;
        /**
         * Closes the modal when escape key is pressed.
         * @type boolean
         * @default true
         */
        this.keyboard = true;
        /**
         * Remove animation to create modal that simply appear rather than fade in to view.
         */
        this.transition = true;
        /**
         * Default role for modal. [docs]
         * @type string
         * @default 'dialog'
         */
        this.role = 'dialog';
        /**
         * Set aria-modal html attr for modal. [docs]
         * @type boolean
         * @default true
         */
        this.ariaModal = true;
        this._scrollable = false;
        /**
         * Event triggered on modal dismiss.
         */
        this.visibleChange = new EventEmitter();
        this._show = true;
        this.mouseDownTarget = null;
    }
    /**
     * Create a scrollable modal that allows scrolling the modal body.
     * @type boolean
     */
    set scrollable(value) {
        this._scrollable = coerceBooleanProperty(value);
    }
    get scrollable() {
        return this._scrollable;
    }
    /**
     * Toggle the visibility of modal component.
     * @type boolean
     */
    set visible(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._visible !== newValue) {
            this._visible = newValue;
            this.setBackdrop(this.backdrop !== false && newValue);
            this.setBodyStyles(newValue);
            this.visibleChange.emit(newValue);
        }
    }
    get visible() {
        return this._visible;
    }
    // private inBoundingClientRect!: boolean;
    get hostClasses() {
        return {
            modal: true,
            fade: this.transition,
            show: this.show
        };
    }
    get ariaHidden() {
        return this.visible ? null : true;
    }
    ;
    get tabIndex() {
        return '-1';
    }
    get animateTrigger() {
        return this.visible ? 'visible' : 'hidden';
    }
    get show() {
        return this.visible && this._show;
    }
    set show(value) {
        this._show = value;
    }
    get scrollbarWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = this.document.documentElement.clientWidth;
        const scrollbarWidth = Math.abs((window?.innerWidth ?? documentWidth) - documentWidth);
        return `${scrollbarWidth}px`;
    }
    animateStart(event) {
        const scrollbarWidth = this.scrollbarWidth;
        if (event.toState === 'visible') {
            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
            this.renderer.setStyle(this.document.body, 'padding-right', scrollbarWidth);
            this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'block');
        }
        else {
            if (!this.transition) {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none');
            }
        }
    }
    animateDone(event) {
        setTimeout(() => {
            if (event.toState === 'hidden') {
                this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none');
                this.renderer.removeStyle(this.document.body, 'overflow');
                this.renderer.removeStyle(this.document.body, 'padding-right');
            }
        });
        this.show = this.visible;
    }
    onKeyDownHandler(event) {
        if (event.key === 'Escape' && this.keyboard && this.visible) {
            if (this.backdrop === 'static') {
                this.setStaticBackdrop();
            }
            else {
                this.modalService.toggle({ show: false, modal: this });
            }
        }
    }
    onMouseDownHandler($event) {
        this.mouseDownTarget = $event.target;
    }
    onClickHandler($event) {
        if (this.mouseDownTarget !== $event.target) {
            this.mouseDownTarget = null;
            return;
        }
        const targetElement = $event.target;
        if (targetElement === this.hostElement.nativeElement) {
            if (this.backdrop === 'static') {
                this.setStaticBackdrop();
                return;
            }
            this.modalService.toggle({ show: false, modal: this });
        }
    }
    ngOnInit() {
        this.stateToggleSubscribe();
    }
    ngOnDestroy() {
        this.modalService.toggle({ show: false, modal: this });
        this.stateToggleSubscribe(false);
    }
    stateToggleSubscribe(subscribe = true) {
        if (subscribe) {
            this.stateToggleSubscription = this.modalService.modalState$.subscribe((action) => {
                if (this === action.modal || this.id === action.id) {
                    if ('show' in action) {
                        this.visible = action?.show === 'toggle' ? !this.visible : action.show;
                    }
                }
                else {
                    if (this.visible) {
                        this.visible = false;
                    }
                }
            });
        }
        else {
            this.stateToggleSubscription.unsubscribe();
        }
    }
    setBackdrop(setBackdrop) {
        if (setBackdrop) {
            this.activeBackdrop = this.backdropService.setBackdrop('modal');
        }
        else {
            this.activeBackdrop = this.backdropService.clearBackdrop(this.activeBackdrop);
        }
    }
    setBodyStyles(open) {
        if (open) {
            if (this.backdrop === true) {
                this.renderer.addClass(this.document.body, 'modal-open');
            }
        }
        else {
            this.renderer.removeClass(this.document.body, 'modal-open');
        }
    }
    setStaticBackdrop() {
        if (this.transition) {
            this.renderer.addClass(this.hostElement.nativeElement, 'modal-static');
            this.renderer.setStyle(this.hostElement.nativeElement, 'overflow-y', 'hidden');
            setTimeout(() => {
                this.renderer.removeClass(this.hostElement.nativeElement, 'modal-static');
                this.renderer.removeStyle(this.hostElement.nativeElement, 'overflow-y');
            }, 300);
        }
    }
}
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalComponent, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: ModalService }, { token: BackdropService }], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalComponent, selector: "c-modal", inputs: { alignment: "alignment", backdrop: "backdrop", fullscreen: "fullscreen", keyboard: "keyboard", id: "id", size: "size", transition: "transition", role: "role", ariaModal: "ariaModal", scrollable: "scrollable", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "@showHide.start": "animateStart($event)", "@showHide.done": "animateDone($event)", "document:keyup": "onKeyDownHandler($event)", "mousedown": "onMouseDownHandler($event)", "click": "onClickHandler($event)" }, properties: { "attr.role": "this.role", "attr.aria-modal": "this.ariaModal", "class": "this.hostClasses", "attr.aria-hidden": "this.ariaHidden", "attr.tabindex": "this.tabIndex", "@showHide": "this.animateTrigger" } }, viewQueries: [{ propertyName: "modalContent", first: true, predicate: ModalContentComponent, descendants: true, read: ElementRef }], exportAs: ["cModal"], ngImport: i0, template: "<c-modal-dialog\n  [alignment]=\"alignment\"\n  [fullscreen]=\"fullscreen\"\n  [scrollable]=\"scrollable\"\n  [size]=\"size\">\n  <c-modal-content>\n    <div [cdkTrapFocus]=\"visible\" [cdkTrapFocusAutoCapture]=\"visible\" style=\"display: contents;\">\n      <ng-content></ng-content>\n    </div>\n  </c-modal-content>\n</c-modal-dialog>\n", styles: [""], dependencies: [{ kind: "directive", type: i3$1.CdkTrapFocus, selector: "[cdkTrapFocus]", inputs: ["cdkTrapFocus", "cdkTrapFocusAutoCapture"], exportAs: ["cdkTrapFocus"] }, { kind: "component", type: ModalContentComponent, selector: "c-modal-content" }, { kind: "component", type: ModalDialogComponent, selector: "c-modal-dialog", inputs: ["alignment", "fullscreen", "scrollable", "size"] }], animations: [
        trigger('showHide', [
            state('visible', style({
            // display: 'block'
            })),
            state('hidden', style({
            // display: 'none'
            })),
            transition('visible <=> *', [animate('300ms')])
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-modal', animations: [
                        trigger('showHide', [
                            state('visible', style({
                            // display: 'block'
                            })),
                            state('hidden', style({
                            // display: 'none'
                            })),
                            transition('visible <=> *', [animate('300ms')])
                        ])
                    ], exportAs: 'cModal', template: "<c-modal-dialog\n  [alignment]=\"alignment\"\n  [fullscreen]=\"fullscreen\"\n  [scrollable]=\"scrollable\"\n  [size]=\"size\">\n  <c-modal-content>\n    <div [cdkTrapFocus]=\"visible\" [cdkTrapFocusAutoCapture]=\"visible\" style=\"display: contents;\">\n      <ng-content></ng-content>\n    </div>\n  </c-modal-content>\n</c-modal-dialog>\n" }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: ModalService }, { type: BackdropService }]; }, propDecorators: { alignment: [{
                type: Input
            }], backdrop: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], keyboard: [{
                type: Input
            }], id: [{
                type: Input
            }], size: [{
                type: Input
            }], transition: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], ariaModal: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.aria-modal']
            }], scrollable: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], modalContent: [{
                type: ViewChild,
                args: [ModalContentComponent, { read: ElementRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaHidden: [{
                type: HostBinding,
                args: ['attr.aria-hidden']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], animateTrigger: [{
                type: HostBinding,
                args: ['@showHide']
            }], animateStart: [{
                type: HostListener,
                args: ['@showHide.start', ['$event']]
            }], animateDone: [{
                type: HostListener,
                args: ['@showHide.done', ['$event']]
            }], onKeyDownHandler: [{
                type: HostListener,
                args: ['document:keyup', ['$event']]
            }], onMouseDownHandler: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], onClickHandler: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class ModalModule {
}
ModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, declarations: [ModalBodyComponent,
        ModalContentComponent,
        ModalDialogComponent,
        ModalToggleDirective,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        ModalComponent], imports: [CommonModule,
        A11yModule], exports: [ModalBodyComponent,
        ModalContentComponent,
        ModalDialogComponent,
        ModalToggleDirective,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        ModalComponent] });
ModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, providers: [
        ModalService
    ], imports: [CommonModule,
        A11yModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ModalBodyComponent,
                        ModalContentComponent,
                        ModalDialogComponent,
                        ModalToggleDirective,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalTitleDirective,
                        ModalComponent,
                    ],
                    exports: [
                        ModalBodyComponent,
                        ModalContentComponent,
                        ModalDialogComponent,
                        ModalToggleDirective,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalTitleDirective,
                        ModalComponent,
                    ],
                    imports: [
                        CommonModule,
                        A11yModule
                    ],
                    providers: [
                        ModalService
                    ]
                }]
        }] });

class OffcanvasService {
    constructor() {
        this.offcanvasState = new Subject();
        this.offcanvasState$ = this.offcanvasState.asObservable();
    }
    toggle(action) {
        this.offcanvasState.next(action);
    }
}
OffcanvasService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OffcanvasService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

let nextId = 0;
class OffcanvasComponent {
    constructor(document, platformId, renderer, hostElement, offcanvasService, backdropService) {
        this.document = document;
        this.platformId = platformId;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.offcanvasService = offcanvasService;
        this.backdropService = backdropService;
        /**
         * Apply a backdrop on body while offcanvas is open.
         * @type boolean
         * @default true
         */
        this.backdrop = true;
        /**
         * Closes the offcanvas when escape key is pressed [docs]
         * @type boolean
         * @default true
         */
        this.keyboard = true;
        /**
         * Components placement, there’s no default placement.
         * @type {'start' | 'end' | 'top' | 'bottom'}
         * @default 'start'
         */
        this.placement = 'start';
        this._scroll = false;
        this.id = `offcanvas-${this.placement}-${nextId++}`;
        /**
         * Default role for offcanvas. [docs]
         * @type string
         * @default 'dialog'
         */
        this.role = 'dialog';
        /**
         * Set aria-modal html attr for offcanvas. [docs]
         * @type boolean
         * @default true
         */
        this.ariaModal = true;
        /**
         * Event triggered on visible change.
         */
        this.visibleChange = new EventEmitter();
    }
    /**
     * Allow body scrolling while offcanvas is visible.
     * @type boolean
     */
    set scroll(value) {
        this._scroll = coerceBooleanProperty(value);
    }
    ;
    get scroll() {
        return this._scroll;
    }
    /**
     * Toggle the visibility of offcanvas component.
     * @type boolean
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
        if (value) {
            this.setBackdrop(this.backdrop);
            this.setFocus();
        }
        else {
            this.setBackdrop(false);
        }
        this.setScroll();
        this.visibleChange.emit(value);
    }
    get visible() {
        return this._visible;
    }
    get hostClasses() {
        return {
            offcanvas: true,
            [`offcanvas-${this.placement}`]: !!this.placement,
            show: this.visible,
        };
    }
    get ariaHidden() {
        return this.visible ? null : true;
    }
    ;
    get tabIndex() {
        return '-1';
    }
    get animateType() {
        return this.visible;
    }
    onKeyDownHandler(event) {
        if (event.key === 'Escape' && this.keyboard && this.visible) {
            this.offcanvasService.toggle({ show: false, id: this.id });
        }
    }
    ngOnInit() {
        this.setScroll();
        this.stateToggleSubscribe();
    }
    ngOnDestroy() {
        this.offcanvasService.toggle({ show: false, id: this.id });
        this.stateToggleSubscribe(false);
    }
    ngOnChanges(changes) {
        if (changes['scroll']) {
            this.setScroll();
        }
    }
    stateToggleSubscribe(subscribe = true) {
        if (subscribe) {
            this.stateToggleSubscription = this.offcanvasService.offcanvasState$.subscribe((action) => {
                if (this === action.offcanvas || this.id === action.id) {
                    if ('show' in action) {
                        this.visible = action?.show === 'toggle' ? !this.visible : action.show;
                    }
                }
            });
        }
        else {
            this.stateToggleSubscription.unsubscribe();
        }
    }
    backdropClickSubscribe(subscribe = true) {
        if (subscribe) {
            this.backdropClickSubscription = this.backdropService.backdropClick$.subscribe((clicked) => {
                this.offcanvasService.toggle({ show: !clicked, id: this.id });
            });
        }
        else {
            this.backdropClickSubscription?.unsubscribe();
        }
    }
    setBackdrop(setBackdrop) {
        if (setBackdrop) {
            this.activeBackdrop = this.backdropService.setBackdrop('offcanvas');
            this.backdropClickSubscribe();
        }
        else {
            this.activeBackdrop = this.backdropService.clearBackdrop(this.activeBackdrop);
            this.backdropClickSubscribe(false);
        }
    }
    setFocus() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => this.hostElement.nativeElement.focus());
        }
    }
    setScroll() {
        if (this.visible) {
            if (!this.scroll) {
                this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
                this.renderer.setStyle(this.document.body, 'paddingRight.px', '0');
            }
            return;
        }
        if (!this.scroll) {
            this.renderer.removeStyle(this.document.body, 'overflow');
            this.renderer.removeStyle(this.document.body, 'paddingRight');
        }
    }
}
OffcanvasComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasComponent, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: OffcanvasService }, { token: BackdropService }], target: i0.ɵɵFactoryTarget.Component });
OffcanvasComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: OffcanvasComponent, selector: "c-offcanvas", inputs: { backdrop: "backdrop", keyboard: "keyboard", placement: "placement", scroll: "scroll", id: "id", role: "role", ariaModal: "ariaModal", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "document:keydown": "onKeyDownHandler($event)" }, properties: { "attr.role": "this.role", "attr.aria-modal": "this.ariaModal", "class": "this.hostClasses", "attr.aria-hidden": "this.ariaHidden", "attr.tabindex": "this.tabIndex", "@showHide": "this.animateType" } }, exportAs: ["cOffcanvas"], usesOnChanges: true, ngImport: i0, template: "<div cdkTrapFocus cdkTrapFocusAutoCapture>\n  <ng-content></ng-content>\n</div>\n\n", styles: [""], dependencies: [{ kind: "directive", type: i3$1.CdkTrapFocus, selector: "[cdkTrapFocus]", inputs: ["cdkTrapFocus", "cdkTrapFocusAutoCapture"], exportAs: ["cdkTrapFocus"] }], animations: [
        trigger('showHide', [
            state('true', style({
                visibility: 'visible',
            })),
            state('false', style({
                visibility: 'hidden',
            })),
            transition('true => false', [animate('300ms')]),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-offcanvas', animations: [
                        trigger('showHide', [
                            state('true', style({
                                visibility: 'visible',
                            })),
                            state('false', style({
                                visibility: 'hidden',
                            })),
                            transition('true => false', [animate('300ms')]),
                        ]),
                    ], exportAs: 'cOffcanvas', template: "<div cdkTrapFocus cdkTrapFocusAutoCapture>\n  <ng-content></ng-content>\n</div>\n\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: OffcanvasService }, { type: BackdropService }]; }, propDecorators: { backdrop: [{
                type: Input
            }], keyboard: [{
                type: Input
            }], placement: [{
                type: Input
            }], scroll: [{
                type: Input
            }], id: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], ariaModal: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.aria-modal']
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaHidden: [{
                type: HostBinding,
                args: ['attr.aria-hidden']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], animateType: [{
                type: HostBinding,
                args: ['@showHide']
            }], onKeyDownHandler: [{
                type: HostListener,
                args: ['document:keydown', ['$event']]
            }] } });

class OffcanvasBodyComponent {
    get hostClasses() {
        return {
            'offcanvas-body': true,
        };
    }
}
OffcanvasBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
OffcanvasBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: OffcanvasBodyComponent, selector: "c-offcanvas-body", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-offcanvas-body', template: `<ng-content></ng-content>`, styles: [":host{display:block}\n"] }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class OffcanvasHeaderComponent {
    get hostClasses() {
        return {
            'offcanvas-header': true,
        };
    }
}
OffcanvasHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
OffcanvasHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: OffcanvasHeaderComponent, selector: "c-offcanvas-header", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-offcanvas-header', template: `<ng-content></ng-content>` }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class OffcanvasTitleDirective {
    get hostClasses() {
        return {
            'offcanvas-title': true,
        };
    }
}
OffcanvasTitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
OffcanvasTitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: OffcanvasTitleDirective, selector: "[cOffcanvasTitle]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasTitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cOffcanvasTitle]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class OffcanvasToggleDirective {
    constructor(offcanvasService) {
        this.offcanvasService = offcanvasService;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.offcanvasService.toggle({ show: 'toggle', id: this.id });
    }
}
OffcanvasToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasToggleDirective, deps: [{ token: OffcanvasService }], target: i0.ɵɵFactoryTarget.Directive });
OffcanvasToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: OffcanvasToggleDirective, selector: "[cOffcanvasToggle]", inputs: { id: ["cOffcanvasToggle", "id"] }, host: { listeners: { "click": "toggleOpen($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cOffcanvasToggle]'
                }]
        }], ctorParameters: function () { return [{ type: OffcanvasService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cOffcanvasToggle']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class OffcanvasModule {
}
OffcanvasModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OffcanvasModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, declarations: [OffcanvasComponent,
        OffcanvasBodyComponent,
        OffcanvasHeaderComponent,
        OffcanvasTitleDirective,
        OffcanvasToggleDirective], imports: [CommonModule,
        A11yModule], exports: [OffcanvasComponent,
        OffcanvasBodyComponent,
        OffcanvasHeaderComponent,
        OffcanvasTitleDirective,
        OffcanvasToggleDirective] });
OffcanvasModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, providers: [
        OffcanvasService,
        BackdropService
    ], imports: [CommonModule,
        A11yModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OffcanvasComponent,
                        OffcanvasBodyComponent,
                        OffcanvasHeaderComponent,
                        OffcanvasTitleDirective,
                        OffcanvasToggleDirective
                    ],
                    exports: [
                        OffcanvasComponent,
                        OffcanvasBodyComponent,
                        OffcanvasHeaderComponent,
                        OffcanvasTitleDirective,
                        OffcanvasToggleDirective
                    ],
                    imports: [
                        CommonModule,
                        A11yModule
                    ],
                    providers: [
                        OffcanvasService,
                        BackdropService
                    ],
                }]
        }] });

class PageLinkDirective {
    get hostClasses() {
        return {
            'page-link': true,
        };
    }
}
PageLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PageLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PageLinkDirective, selector: "[cPageLink]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPageLink]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class PageItemDirective {
    get ariaCurrent() {
        return this.active ? 'page' : null;
    }
    get hostClasses() {
        return {
            'page-item': true,
            disabled: this.disabled,
            active: this.active,
        };
    }
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterContentInit() {
        this.setAttributes();
    }
    ngOnChanges(changes) {
        if (changes['disabled']) {
            this.setAttributes();
        }
    }
    setAttributes() {
        if (!this.pageLinkElementRef) {
            return;
        }
        const pageLinkElement = this.pageLinkElementRef.nativeElement;
        if (this.disabled) {
            this.renderer.setAttribute(pageLinkElement, 'aria-disabled', 'true');
            this.renderer.setAttribute(pageLinkElement, 'tabindex', '-1');
        }
        else {
            this.renderer.removeAttribute(pageLinkElement, 'aria-disabled');
            this.renderer.removeAttribute(pageLinkElement, 'tabindex');
        }
    }
}
PageItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageItemDirective, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
PageItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PageItemDirective, selector: "[cPageItem]", inputs: { active: "active", disabled: "disabled" }, host: { properties: { "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses" } }, queries: [{ propertyName: "pageLinkElementRef", first: true, predicate: PageLinkDirective, descendants: true, read: ElementRef }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPageItem]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], pageLinkElementRef: [{
                type: ContentChild,
                args: [PageLinkDirective, { read: ElementRef }]
            }] } });

class PageItemComponent extends PageItemDirective {
}
PageItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageItemComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PageItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: PageItemComponent, selector: "c-page-item", usesInheritance: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-page-item', template: `<ng-content></ng-content>`, styles: [":host{display:list-item;text-align:-webkit-match-parent;text-align:match-parent}\n"] }]
        }] });

class PaginationComponent {
    constructor() {
        /**
         * Set the alignment of pagination components.
         * @values 'start', 'center', 'end'
         */
        this.align = '';
        /**
         * Default role for pagination. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
    }
    get paginationClass() {
        return {
            pagination: true,
            [`pagination-${this.size}`]: !!this.size,
            [`justify-content-${this.align}`]: !!this.align
        };
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: PaginationComponent, selector: "c-pagination", inputs: { align: "align", size: "size", role: "role" }, host: { properties: { "attr.role": "this.role" } }, ngImport: i0, template: "<ul [ngClass]=\"paginationClass\">\n  <ng-content></ng-content>\n</ul>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-pagination', template: "<ul [ngClass]=\"paginationClass\">\n  <ng-content></ng-content>\n</ul>\n" }]
        }], propDecorators: { align: [{
                type: Input
            }], size: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }] } });

class PaginationModule {
}
PaginationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, declarations: [PaginationComponent,
        PageItemComponent,
        PageItemDirective,
        PageLinkDirective], imports: [CommonModule], exports: [PaginationComponent,
        PageItemComponent,
        PageItemDirective,
        PageLinkDirective] });
PaginationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PaginationComponent,
                        PageItemComponent,
                        PageItemDirective,
                        PageLinkDirective
                    ],
                    exports: [
                        PaginationComponent,
                        PageItemComponent,
                        PageItemDirective,
                        PageLinkDirective
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class PlaceholderDirective {
    constructor() {
        this._visible = false;
    }
    /**
     * placeholder toggler
     * @type boolean
     * @default true
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    get ariaHidden() {
        return this.visible ? null : true;
    }
    ;
    get hostClasses() {
        return {
            'placeholder': this.visible,
            [`placeholder-${this.size}`]: !!this.size
        };
    }
}
PlaceholderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PlaceholderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PlaceholderDirective, selector: "[cPlaceholder]", inputs: { visible: ["cPlaceholder", "visible"], size: ["cPlaceholderSize", "size"] }, host: { properties: { "attr.aria-hidden": "this.ariaHidden", "class": "this.hostClasses" } }, exportAs: ["cPlaceholder"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPlaceholder]',
                    exportAs: 'cPlaceholder'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { visible: [{
                type: Input,
                args: ['cPlaceholder']
            }], size: [{
                type: Input,
                args: ['cPlaceholderSize']
            }], ariaHidden: [{
                type: HostBinding,
                args: ['attr.aria-hidden']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class PlaceholderAnimationDirective {
    constructor() {
        this.animate = false;
    }
    get hostClasses() {
        return {
            [`placeholder-${this.animation}`]: this.animate && !!this.animation
        };
    }
    ngAfterContentInit() {
        this.animate = this.placeholder?.visible;
    }
}
PlaceholderAnimationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderAnimationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PlaceholderAnimationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PlaceholderAnimationDirective, selector: "[cPlaceholderAnimation]", inputs: { animation: ["cPlaceholderAnimation", "animation"] }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "placeholder", first: true, predicate: PlaceholderDirective, descendants: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderAnimationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPlaceholderAnimation]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { animation: [{
                type: Input,
                args: ['cPlaceholderAnimation']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], placeholder: [{
                type: ContentChild,
                args: [PlaceholderDirective]
            }] } });

class PlaceholderModule {
}
PlaceholderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PlaceholderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderModule, declarations: [PlaceholderDirective,
        PlaceholderAnimationDirective], imports: [CommonModule], exports: [PlaceholderDirective,
        PlaceholderAnimationDirective] });
PlaceholderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PlaceholderDirective,
                        PlaceholderAnimationDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        PlaceholderDirective,
                        PlaceholderAnimationDirective
                    ]
                }]
        }] });

class PopoverComponent {
    constructor(renderer) {
        this.renderer = renderer;
        /**
         * Content of popover
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Toggle the visibility of popover component.
         * @type boolean
         */
        this.visible = false;
        this.role = 'tooltip';
    }
    get hostClasses() {
        return {
            popover: true,
            fade: true,
            show: this.visible,
            'bs-popover-auto': true
        };
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateView(this.content);
        });
    }
    ngOnChanges(changes) {
        if (changes['content']) {
            setTimeout(() => {
                this.updateView(this.content);
            });
        }
    }
    ngOnDestroy() {
        this.clear();
    }
    clear() {
        this.viewContainerRef?.clear();
        if (!!this.textNode) {
            this.renderer.removeChild(this.textNode.parentNode, this.textNode);
        }
    }
    updateView(content) {
        this.clear();
        if (!content) {
            return;
        }
        if (content instanceof TemplateRef) {
            this.viewContainerRef.createEmbeddedView(content);
        }
        else {
            this.textNode = this.renderer.createText(content);
            const popoverBody = this.renderer.createElement('div');
            this.renderer.addClass(popoverBody, 'popover-body');
            this.renderer.appendChild(popoverBody, this.textNode);
            const element = this.viewContainerRef.element.nativeElement;
            this.renderer.appendChild(element.parentNode, popoverBody);
        }
    }
}
PopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
PopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: PopoverComponent, selector: "c-popover", inputs: { content: "content", visible: "visible", id: "id", role: "role" }, host: { properties: { "attr.id": "this.id", "attr.role": "this.role", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "viewContainerRef", first: true, predicate: ["popoverTemplate"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: "<ng-container>\n  <div [ngClass]=\"{'popover-arrow': !!content}\" data-popper-arrow></div>\n  <ng-container #popoverTemplate></ng-container>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-popover', template: "<ng-container>\n  <div [ngClass]=\"{'popover-arrow': !!content}\" data-popper-arrow></div>\n  <ng-container #popoverTemplate></ng-container>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { content: [{
                type: Input
            }], visible: [{
                type: Input
            }], id: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.id']
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], viewContainerRef: [{
                type: ViewChild,
                args: ['popoverTemplate', { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class PopoverDirective {
    /**
     * Optional popper Options object, takes precedence over cPopoverPlacement prop
     * @type Partial<Options>
     */
    set popperOptions(value) {
        this._popperOptions = { ...this._popperOptions, placement: this.placement, ...value };
    }
    ;
    get popperOptions() {
        return { placement: this.placement, ...this._popperOptions };
    }
    /**
     * Toggle the visibility of popover component.
     */
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    get ariaDescribedBy() {
        return this.popoverId ? this.popoverId : null;
    }
    constructor(document, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.viewContainerRef = viewContainerRef;
        this.listenersService = listenersService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Content of popover
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
         */
        this.placement = 'top';
        /**
         * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
         * @type {'hover' | 'focus' | 'click'}
         */
        this.trigger = 'hover';
        this._visible = false;
        this._popperOptions = {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8]
                    }
                }
            ]
        };
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            changes['visible'].currentValue ? this.addPopoverElement() : this.removePopoverElement();
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.destroyPopoverElement();
    }
    ngOnInit() {
        this.setListeners();
    }
    setListeners() {
        const config = {
            hostElement: this.hostElement,
            trigger: this.trigger,
            callbackToggle: () => {
                this.visible = !this.visible;
                this.visible ? this.addPopoverElement() : this.removePopoverElement();
            },
            callbackOff: () => {
                this.visible = false;
                this.removePopoverElement();
            },
            callbackOn: () => {
                this.visible = true;
                this.addPopoverElement();
            }
        };
        this.listenersService.setListeners(config);
    }
    clearListeners() {
        this.listenersService.clearListeners();
    }
    getUID(prefix) {
        let uid = prefix ?? 'random-id';
        do {
            uid = `${prefix}-${Math.floor(Math.random() * 1000000).toString(10)}`;
        } while (this.document.getElementById(uid));
        return uid;
    }
    createPopoverElement() {
        if (!this.popoverRef) {
            this.popoverRef = this.viewContainerRef.createComponent(PopoverComponent);
            // this.viewContainerRef.detach();
        }
    }
    destroyPopoverElement() {
        this.popover?.remove();
        this.popoverRef?.destroy();
        // @ts-ignore
        this.popoverRef = undefined;
        this.popperInstance?.destroy();
        this.viewContainerRef?.detach();
        this.viewContainerRef?.clear();
    }
    addPopoverElement() {
        if (!this.popoverRef) {
            this.createPopoverElement();
        }
        this.popoverRef.instance.content = this.content;
        this.popover = this.popoverRef.location.nativeElement;
        this.renderer.addClass(this.popover, 'd-none');
        this.renderer.addClass(this.popover, 'fade');
        this.popperInstance?.destroy();
        setTimeout(() => {
            this.popperInstance = createPopper(this.hostElement.nativeElement, this.popover, { ...this.popperOptions });
            this.viewContainerRef.insert(this.popoverRef.hostView);
            this.renderer.appendChild(this.document.body, this.popover);
            if (!this.visible) {
                this.removePopoverElement();
                return;
            }
            setTimeout(() => {
                this.popoverId = this.getUID('popover');
                this.popoverRef.instance.id = this.popoverId;
                if (!this.visible) {
                    this.removePopoverElement();
                    return;
                }
                this.renderer.removeClass(this.popover, 'd-none');
                this.popoverRef.instance.visible = this.visible;
                this.popperInstance.forceUpdate();
                this.changeDetectorRef.markForCheck();
            }, 100);
        });
    }
    removePopoverElement() {
        this.popoverId = '';
        if (!this.popoverRef) {
            return;
        }
        this.popoverRef.instance.visible = false;
        this.popoverRef.instance.id = undefined;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.viewContainerRef.detach();
        }, 300);
    }
}
PopoverDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverDirective, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: ListenersService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
PopoverDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PopoverDirective, selector: "[cPopover]", inputs: { content: ["cPopover", "content"], popperOptions: ["cPopoverOptions", "popperOptions"], placement: ["cPopoverPlacement", "placement"], trigger: ["cPopoverTrigger", "trigger"], visible: ["cPopoverVisible", "visible"] }, host: { properties: { "attr.aria-describedby": "this.ariaDescribedBy" } }, providers: [ListenersService], exportAs: ["cPopover"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPopover]',
                    exportAs: 'cPopover',
                    providers: [ListenersService]
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: ListenersService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cPopover']
            }], popperOptions: [{
                type: Input,
                args: ['cPopoverOptions']
            }], placement: [{
                type: Input,
                args: ['cPopoverPlacement']
            }], trigger: [{
                type: Input,
                args: ['cPopoverTrigger']
            }], visible: [{
                type: Input,
                args: ['cPopoverVisible']
            }], ariaDescribedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });

class PopoverModule {
}
PopoverModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PopoverModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, declarations: [PopoverDirective,
        PopoverComponent], imports: [CommonModule], exports: [PopoverDirective,
        PopoverComponent] });
PopoverModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PopoverDirective,
                        PopoverComponent
                    ],
                    exports: [
                        PopoverDirective,
                        PopoverComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class ProgressComponent {
    constructor() {
        this._height = 0;
        this._thin = false;
        this._white = false;
    }
    /**
     * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
     * @type number
     */
    set height(value) {
        this._height = coerceNumberProperty(value);
    }
    get height() {
        return this._height;
    }
    /**
     * Displays thin progress.
     * @type boolean
     */
    set thin(value) {
        this._thin = coerceBooleanProperty(value);
    }
    get thin() {
        return this._thin;
    }
    /**
     * Change the default color to white.
     * @type boolean
     */
    get white() {
        return this._white;
    }
    set white(value) {
        this._white = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            progress: true,
            'progress-thin': this.thin,
            'progress-white': this.white
        };
    }
    get hostStyle() {
        return !!this.height ? `${this.height}px` : '';
    }
}
ProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ProgressComponent, selector: "c-progress", inputs: { height: "height", thin: "thin", white: "white" }, host: { properties: { "class": "this.hostClasses", "style.height": "this.hostStyle" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-progress',
                    template: '<ng-content></ng-content>'
                }]
        }], propDecorators: { height: [{
                type: Input
            }], thin: [{
                type: Input
            }], white: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyle: [{
                type: HostBinding,
                args: ['style.height']
            }] } });

class ProgressBarComponent {
    /**
     * Use to animate the stripes right to left via CSS3 animations.
     * @type boolean
     */
    set animated(value) {
        this._animated = coerceBooleanProperty(value);
    }
    get animated() {
        return this._animated;
    }
    /**
     * The percent to progress the ProgressBar.
     */
    set value(value) {
        this._value = coerceNumberProperty(value);
    }
    ;
    get value() {
        return this._value;
    }
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this._animated = false;
        // TODO: check if this is necessary.
        this.precision = 0;
        this._value = 0;
        /**
         * Set default html role attribute.
         * @type string
         */
        this.role = 'progressbar';
        this.state = {
            percent: 0,
            min: 0,
            max: 100
        };
    }
    get min() {
        return this.state.min;
    }
    set min(value) {
        this.state.min = isNaN(value) ? 0 : value;
    }
    get max() {
        return this.state.max;
    }
    set max(value) {
        this.state.max = isNaN(value) || value <= 0 || value === this.min ? 100 : value;
    }
    get hostClasses() {
        return {
            'progress-bar': true,
            'progress-bar-animated': this.animated,
            [`progress-bar-${this.variant}`]: !!this.variant,
            [`bg-${this.color}`]: !!this.color
        };
    }
    ngOnInit() {
        this.setValues();
    }
    setPercent() {
        this.state.percent = +((this.value / (this.max - this.min)) * 100).toFixed(this.precision);
    }
    setValues() {
        this.setPercent();
        const host = this.hostElement.nativeElement;
        this.renderer.setStyle(host, 'width', `${this.state.percent}%`);
        this.renderer.setAttribute(host, 'aria-valuenow', String(this.value));
        this.renderer.setAttribute(host, 'aria-valuemin', String(this.min));
        this.renderer.setAttribute(host, 'aria-valuemax', String(this.max));
    }
    ngOnChanges(changes) {
        this.setValues();
    }
}
ProgressBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressBarComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
ProgressBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ProgressBarComponent, selector: "c-progress-bar", inputs: { animated: "animated", color: "color", precision: "precision", value: "value", variant: "variant", role: "role", min: "min", max: "max" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-progress-bar',
                    template: '<ng-content></ng-content>'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { animated: [{
                type: Input
            }], color: [{
                type: Input
            }], precision: [{
                type: Input
            }], value: [{
                type: Input
            }], variant: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ProgressModule {
}
ProgressModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ProgressModule, declarations: [ProgressComponent, ProgressBarComponent], imports: [CommonModule], exports: [ProgressComponent,
        ProgressBarComponent] });
ProgressModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ProgressComponent, ProgressBarComponent],
                    exports: [
                        ProgressComponent,
                        ProgressBarComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class ClassToggleService {
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    toggle(selector, className) {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.contains(className) ?
                this.renderer.removeClass(element, className) :
                this.renderer.addClass(element, className);
        }
    }
}
ClassToggleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ClassToggleService, deps: [{ token: DOCUMENT }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable });
ClassToggleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ClassToggleService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ClassToggleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.RendererFactory2 }]; } });

class SpinnerComponent {
    constructor() {
        /**
         * Label for accessibility.
         * @type string
         * @default 'Loading...'
         */
        this.label = "Loading...";
        /**
         * Set the button variant to an outlined button or a ghost button.
         * @values 'border' | 'grow'
         * @default 'border'
         */
        this.variant = 'border';
        this.role = 'status';
    }
    get hostClasses() {
        return {
            [`spinner-${this.variant}`]: true,
            [`text-${this.color}`]: !!this.color,
            [`spinner-${this.variant}-${this.size}`]: !!this.size
        };
    }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SpinnerComponent, selector: "c-spinner", inputs: { color: "color", label: "label", size: "size", variant: "variant", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: "<span class=\"visually-hidden\">{{label}}</span>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-spinner', template: "<span class=\"visually-hidden\">{{label}}</span>\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], label: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class SpinnerModule {
}
SpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SpinnerModule, declarations: [SpinnerComponent], imports: [CommonModule,
        SharedModule], exports: [SpinnerComponent] });
SpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerModule, imports: [CommonModule,
        SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SpinnerComponent
                    ],
                    exports: [
                        SpinnerComponent
                    ],
                    imports: [
                        CommonModule,
                        SharedModule
                    ]
                }]
        }] });

class SidebarService {
    constructor() {
        this.sidebarState = new BehaviorSubject({});
        this.sidebarState$ = this.sidebarState.asObservable();
    }
    toggle(action) {
        this.sidebarState.next(action);
    }
}
SidebarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SidebarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SidebarBackdropService {
    constructor(document, 
    // private rendererFactory: RendererFactory2,
    sidebarService) {
        this.document = document;
        this.sidebarService = sidebarService;
        this.clickListener = () => { };
        // this.renderer = rendererFactory.createRenderer(null, null);
    }
    setBackdrop(sidebar) {
        const backdrop = this.document.getElementsByClassName('sidebar-backdrop');
        // console.log(`sidebar-${this.id}`, ' setBackdrop', backdrop);
        if (backdrop.length === 0) {
            this.backdrop = this.renderer.createElement('div');
            this.renderer.addClass(this.backdrop, 'sidebar-backdrop');
            this.renderer.appendChild(this.document.body, this.backdrop);
            this.clickListener = this.renderer.listen(this.backdrop, 'click', (e) => {
                // console.log(`sidebar-${this.id}`, ' backdrop click', e);
                this.sidebarService.toggle({ toggle: 'visible', sidebar });
            });
        }
        // console.log(this.backdrop, sidebar.sidebarState.mobile, sidebar.sidebarState.show);
        if (this.backdrop && sidebar.sidebarState.mobile && sidebar.sidebarState.visible) {
            this.renderer.addClass(this.backdrop, 'fade');
            this.renderer.addClass(this.backdrop, 'show');
            // this.renderer.removeClass(this.backdrop, 'd-none');
        }
        else {
            this.renderer.removeClass(this.backdrop, 'show');
            this.renderer.removeClass(this.backdrop, 'fade');
            // this.renderer.addClass(this.backdrop, 'd-none');
        }
    }
    clearBackdrop() {
        if (this.backdrop) {
            // clear backdrop click Listener
            this.clickListener();
            // this.renderer.listen(this.backdrop, 'click', (e): void => {} );
            this.renderer.removeChild(this.document.body, this.backdrop);
            // @ts-ignore
            this.backdrop = undefined;
        }
    }
}
SidebarBackdropService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBackdropService, deps: [{ token: DOCUMENT }, { token: SidebarService }], target: i0.ɵɵFactoryTarget.Injectable });
SidebarBackdropService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBackdropService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: SidebarService }]; } });

var _SidebarComponent_narrow, _SidebarComponent_overlaid, _SidebarComponent_unfoldable, _SidebarComponent_visible, _SidebarComponent_onMobile, _SidebarComponent_layoutChangeSubscription, _SidebarComponent_stateToggleSubscription, _SidebarComponent_stateInitial;
class SidebarComponent {
    /**
     * Make sidebar narrow. [docs]
     * @type boolean
     */
    set narrow(value) {
        __classPrivateFieldSet(this, _SidebarComponent_narrow, coerceBooleanProperty(value), "f");
    }
    get narrow() {
        return __classPrivateFieldGet(this, _SidebarComponent_narrow, "f");
    }
    /**
     * Set sidebar to overlaid variant.
     * @type boolean
     */
    set overlaid(value) {
        __classPrivateFieldSet(this, _SidebarComponent_overlaid, coerceBooleanProperty(value), "f");
    }
    get overlaid() {
        return __classPrivateFieldGet(this, _SidebarComponent_overlaid, "f");
    }
    /**
     * Expand narrowed sidebar on hover. [docs]
     */
    set unfoldable(value) {
        __classPrivateFieldSet(this, _SidebarComponent_unfoldable, coerceBooleanProperty(value), "f");
    }
    get unfoldable() {
        return __classPrivateFieldGet(this, _SidebarComponent_unfoldable, "f");
    }
    /**
     * Toggle the visibility of sidebar component. [docs]
     */
    set visible(value) {
        const visible = coerceBooleanProperty(value);
        if (__classPrivateFieldGet(this, _SidebarComponent_visible, "f") !== visible) {
            __classPrivateFieldSet(this, _SidebarComponent_visible, visible, "f");
            this.visibleChange.emit(__classPrivateFieldGet(this, _SidebarComponent_visible, "f"));
        }
    }
    get visible() {
        return __classPrivateFieldGet(this, _SidebarComponent_visible, "f");
    }
    set sidebarState(value) {
        const newState = value;
        if ('toggle' in newState) {
            if (newState.toggle === 'visible') {
                newState.visible = !this.state.visible;
                this.visible = newState.visible;
            }
            else if (newState.toggle === 'unfoldable') {
                newState.unfoldable = !this.state.unfoldable;
                this.unfoldable = newState.unfoldable;
            }
        }
        else {
            this.visible = (newState.visible ?? this.visible) && !this.overlaid;
        }
        this.state = {
            ...this.state,
            ...newState,
        };
        this.state.mobile && this.state.visible
            ? this.backdropService.setBackdrop(this)
            : this.backdropService.clearBackdrop();
    }
    get sidebarState() {
        return this.state;
    }
    get getMobileBreakpoint() {
        const element = this.document.documentElement;
        const mobileBreakpoint = getComputedStyle(element).getPropertyValue('--cui-mobile-breakpoint') ||
            'md';
        const breakpointValue = getComputedStyle(element).getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) || '768px';
        return `${parseFloat(breakpointValue.trim()) - 0.02}px` || '767.98px';
    }
    constructor(document, renderer, breakpointObserver, sidebarService, backdropService) {
        this.document = document;
        this.renderer = renderer;
        this.breakpointObserver = breakpointObserver;
        this.sidebarService = sidebarService;
        this.backdropService = backdropService;
        _SidebarComponent_narrow.set(this, false);
        _SidebarComponent_overlaid.set(this, false);
        _SidebarComponent_unfoldable.set(this, false);
        _SidebarComponent_visible.set(this, false);
        _SidebarComponent_onMobile.set(this, false);
        _SidebarComponent_layoutChangeSubscription.set(this, void 0);
        _SidebarComponent_stateToggleSubscription.set(this, void 0);
        this.state = {
            sidebar: this,
        };
        _SidebarComponent_stateInitial.set(this, {
            narrow: false,
            visible: false,
            unfoldable: false,
        });
        /**
         * Place sidebar in non-static positions. [docs]
         * @default 'fixed'
         */
        this.position = 'fixed';
        /**
         * Event emitted on visibility change. [docs]
         * @type boolean
         */
        this.visibleChange = new EventEmitter();
        this.backdropService.renderer = renderer;
    }
    get getClasses() {
        const { mobile, visible } = this.sidebarState;
        return {
            sidebar: true,
            'sidebar-fixed': this.position === 'fixed' && !mobile,
            'sidebar-narrow': this.narrow && !this.unfoldable,
            'sidebar-narrow-unfoldable': this.unfoldable,
            'sidebar-overlaid': this.overlaid,
            [`sidebar-${this.size}`]: !!this.size,
            show: visible && __classPrivateFieldGet(this, _SidebarComponent_onMobile, "f"),
            hide: !visible,
        };
    }
    ngOnInit() {
        this.setInitialState();
        this.layoutChangeSubscribe();
        this.stateToggleSubscribe();
    }
    ngOnDestroy() {
        this.stateToggleSubscribe(false);
        this.layoutChangeSubscribe(false);
    }
    ngOnChanges(changes) {
        const oldStateMap = new Map(Object.entries(this.state));
        const newStateMap = new Map();
        newStateMap.set('sidebar', this);
        const propList = ['visible', 'unfoldable', 'narrow'];
        for (const propName in changes) {
            if (propList.includes(propName)) {
                if (changes[propName] && !changes[propName].firstChange) {
                    const value = coerceBooleanProperty(changes[propName].currentValue);
                    if (oldStateMap.get(propName) !== value) {
                        newStateMap.set(propName, value);
                    }
                }
            }
        }
        if (newStateMap.size > 1) {
            const state = Object.fromEntries(newStateMap.entries());
            this.sidebarService.toggle(state);
        }
    }
    setInitialState() {
        __classPrivateFieldSet(this, _SidebarComponent_stateInitial, {
            narrow: this.narrow,
            visible: this.visible,
            unfoldable: this.unfoldable,
        }, "f");
        this.sidebarService.toggle({
            ...__classPrivateFieldGet(this, _SidebarComponent_stateInitial, "f"),
            sidebar: this,
        });
    }
    stateToggleSubscribe(subscribe = true) {
        if (subscribe) {
            __classPrivateFieldSet(this, _SidebarComponent_stateToggleSubscription, this.sidebarService.sidebarState$.subscribe((state) => {
                if (this === state.sidebar || this.id === state.id) {
                    this.sidebarState = state;
                }
            }), "f");
        }
        else {
            __classPrivateFieldGet(this, _SidebarComponent_stateToggleSubscription, "f").unsubscribe();
        }
    }
    layoutChangeSubscribe(subscribe = true) {
        const onMobile = `(max-width: ${this.getMobileBreakpoint})`;
        if (subscribe) {
            const layoutChanges = this.breakpointObserver.observe([onMobile]);
            __classPrivateFieldSet(this, _SidebarComponent_layoutChangeSubscription, layoutChanges.subscribe((result) => {
                const isOnMobile = result.breakpoints[onMobile];
                const isUnfoldable = isOnMobile ? false : this.unfoldable;
                if (__classPrivateFieldGet(this, _SidebarComponent_onMobile, "f") !== isOnMobile) {
                    __classPrivateFieldSet(this, _SidebarComponent_onMobile, isOnMobile, "f");
                    this.sidebarService.toggle({
                        mobile: isOnMobile,
                        unfoldable: isUnfoldable,
                        visible: isOnMobile ? !isOnMobile : __classPrivateFieldGet(this, _SidebarComponent_stateInitial, "f").visible,
                        sidebar: this,
                    });
                }
            }), "f");
        }
        else {
            __classPrivateFieldGet(this, _SidebarComponent_layoutChangeSubscription, "f").unsubscribe();
        }
    }
}
_SidebarComponent_narrow = new WeakMap(), _SidebarComponent_overlaid = new WeakMap(), _SidebarComponent_unfoldable = new WeakMap(), _SidebarComponent_visible = new WeakMap(), _SidebarComponent_onMobile = new WeakMap(), _SidebarComponent_layoutChangeSubscription = new WeakMap(), _SidebarComponent_stateToggleSubscription = new WeakMap(), _SidebarComponent_stateInitial = new WeakMap();
SidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarComponent, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i1$2.BreakpointObserver }, { token: SidebarService }, { token: SidebarBackdropService }], target: i0.ɵɵFactoryTarget.Component });
SidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarComponent, selector: "c-sidebar", inputs: { colorScheme: "colorScheme", id: "id", narrow: "narrow", overlaid: "overlaid", placement: "placement", position: "position", size: "size", unfoldable: "unfoldable", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { properties: { "class": "this.getClasses" } }, exportAs: ["cSidebar"], usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar',
                    exportAs: 'cSidebar',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i1$2.BreakpointObserver }, { type: SidebarService }, { type: SidebarBackdropService }]; }, propDecorators: { colorScheme: [{
                type: Input
            }], id: [{
                type: Input
            }], narrow: [{
                type: Input
            }], overlaid: [{
                type: Input
            }], placement: [{
                type: Input
            }], position: [{
                type: Input
            }], size: [{
                type: Input
            }], unfoldable: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class SidebarBrandComponent {
    constructor() {
        this.sidebarBrandClass = true;
        this.brandImg = false;
    }
    ngOnInit() {
        this.brandImg = Boolean(this.brandFull || this.brandNarrow);
    }
}
SidebarBrandComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBrandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarBrandComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarBrandComponent, selector: "c-sidebar-brand", inputs: { brandFull: "brandFull", brandNarrow: "brandNarrow", routerLink: "routerLink" }, host: { properties: { "class.sidebar-brand": "this.sidebarBrandClass" } }, ngImport: i0, template: "<ng-template [ngIf]=\"brandImg\">\n  <a [routerLink]=\"routerLink\">\n    <img *ngIf=\"brandFull\"\n         [cHtmlAttr]=\"brandFull\"\n         [ngClass]=\"'sidebar-brand-full'\">\n    <img *ngIf=\"brandNarrow\"\n         [cHtmlAttr]=\"brandNarrow\"\n         [ngClass]=\"'sidebar-brand-narrow'\">\n  </a>\n</ng-template>\n<ng-template [ngIf]=\"!brandImg\">\n  <ng-content></ng-content>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBrandComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-brand', template: "<ng-template [ngIf]=\"brandImg\">\n  <a [routerLink]=\"routerLink\">\n    <img *ngIf=\"brandFull\"\n         [cHtmlAttr]=\"brandFull\"\n         [ngClass]=\"'sidebar-brand-full'\">\n    <img *ngIf=\"brandNarrow\"\n         [cHtmlAttr]=\"brandNarrow\"\n         [ngClass]=\"'sidebar-brand-narrow'\">\n  </a>\n</ng-template>\n<ng-template [ngIf]=\"!brandImg\">\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], propDecorators: { brandFull: [{
                type: Input
            }], brandNarrow: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], sidebarBrandClass: [{
                type: HostBinding,
                args: ['class.sidebar-brand']
            }] } });

/**
 * Allows the sidebar to be toggled/folded via click on host element.
 */
class SidebarToggleDirective {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        /**
         * Sidebar property name for toggle action. [docs]
         *
         * @type 'visible' | 'unfoldable'
         * @default 'visible'
         */
        this.toggle = 'visible';
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ toggle: this.toggle, id: this.id });
    }
}
SidebarToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarToggleDirective, deps: [{ token: SidebarService }], target: i0.ɵɵFactoryTarget.Directive });
SidebarToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: SidebarToggleDirective, selector: "[cSidebarToggle]", inputs: { id: ["cSidebarToggle", "id"], toggle: "toggle" }, host: { listeners: { "click": "toggleOpen($event)" } }, exportAs: ["cSidebarToggle"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cSidebarToggle]',
                    exportAs: 'cSidebarToggle'
                }]
        }], ctorParameters: function () { return [{ type: SidebarService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cSidebarToggle']
            }], toggle: [{
                type: Input
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class SidebarTogglerComponent {
    constructor() {
        this.role = 'button';
        this.sidebarTogglerClass = true;
    }
}
SidebarTogglerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarTogglerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarTogglerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarTogglerComponent, selector: "c-sidebar-toggler", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.sidebar-toggler": "this.sidebarTogglerClass" } }, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarTogglerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar-toggler',
                    template: ``,
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], sidebarTogglerClass: [{
                type: HostBinding,
                args: ['class.sidebar-toggler']
            }] } });

class SidebarHeaderComponent {
    constructor() { }
    get hostClasses() {
        return {
            'sidebar-header': true
        };
    }
}
SidebarHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarHeaderComponent, selector: "c-sidebar-header", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-header', template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class SidebarFooterComponent {
    constructor() { }
    get hostClasses() {
        return {
            'sidebar-footer': true
        };
    }
}
SidebarFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarFooterComponent, selector: "c-sidebar-footer", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-footer', template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class SidebarNavService {
}
SidebarNavService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SidebarNavService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavService, decorators: [{
            type: Injectable
        }] });
class SidebarNavHelper {
    constructor() {
        this.hasBadge = (item) => Boolean(item.badge);
        this.hasIcon = (item) => Boolean(item.icon) || item.icon === '';
        this.hasIconComponent = (item) => Boolean(item.iconComponent);
    }
    itemType(item) {
        if (item.divider) {
            return 'divider';
        }
        else if (item.title) {
            return 'title';
        }
        else if (item.children && item.children.length > 0) {
            return 'group';
        }
        else if (item.label) {
            return 'label';
        }
        else if (!Object.keys(item).length) {
            return 'empty';
        }
        else {
            return 'link';
        }
    }
    isActive(router, item) {
        return router.isActive(item.url, false);
    }
    getIconClass(item) {
        const classes = {
            'nav-icon': true
        };
        const icon = item.icon;
        // @ts-ignore
        classes[icon] = this.hasIcon(item);
        return classes;
    }
}
SidebarNavHelper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavHelper, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SidebarNavHelper.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavHelper });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavHelper, decorators: [{
            type: Injectable
        }] });

class SidebarNavDividerComponent {
    constructor() {
    }
}
SidebarNavDividerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavDividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarNavDividerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavDividerComponent, selector: "c-sidebar-nav-divider", inputs: { item: "item" }, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavDividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar-nav-divider',
                    template: ``
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { item: [{
                type: Input
            }] } });

class SidebarNavBadgePipe {
    transform(item, args) {
        const badge = item.badge;
        return {
            badge: true,
            'ms-auto': true,
            'badge-sm': !badge.size,
            [`badge-${badge.size}`]: !!badge.size,
            [`bg-${badge.color}`]: !!badge.color,
            [`${badge.class}`]: !!badge.class
        };
    }
}
SidebarNavBadgePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavBadgePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavBadgePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavBadgePipe, name: "cSidebarNavBadge" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavBadgePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavBadge'
                }]
        }] });

class SidebarNavLabelComponent {
    constructor(helper) {
        this.helper = helper;
        this.classes = {
            'c-nav-label': true,
            'c-active': true
        };
        this.iconClasses = {};
    }
    ngOnInit() {
        this.iconClasses = this.helper.getIconClass(this.item);
    }
    getItemClass() {
        const itemClass = this.item.class;
        // @ts-ignore
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    }
    getLabelIconClass() {
        const variant = `text-${this.item.label.variant}`;
        // @ts-ignore
        this.iconClasses[variant] = !!this.item.label.variant;
        const labelClass = this.item.label.class;
        // @ts-ignore
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    }
}
SidebarNavLabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLabelComponent, deps: [{ token: SidebarNavHelper }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavLabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavLabelComponent, selector: "c-sidebar-nav-label", inputs: { item: "item" }, ngImport: i0, template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n", dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "pipe", type: SidebarNavBadgePipe, name: "cSidebarNavBadge" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav-label', template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n" }]
        }], ctorParameters: function () { return [{ type: SidebarNavHelper }]; }, propDecorators: { item: [{
                type: Input
            }] } });

class SidebarNavIconPipe {
    transform(item, args) {
        const icon = item.icon;
        const classes = {
            'nav-icon': true,
            [`${icon}`]: !!icon
        };
        return classes;
    }
}
SidebarNavIconPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavIconPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavIconPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavIconPipe, name: "cSidebarNavIcon" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavIconPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavIcon'
                }]
        }] });

class SidebarNavLinkPipe {
    transform(item) {
        const disabled = item?.attributes?.disabled;
        const classes = {
            'nav-link': true,
            disabled,
            'btn-link': disabled,
            [`nav-link-${item.variant}`]: !!item.variant
        };
        return classes;
    }
}
SidebarNavLinkPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavLinkPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkPipe, name: "cSidebarNavLink" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavLink'
                }]
        }] });

class SidebarNavLinkContentComponent {
    constructor(helper) {
        this.helper = helper;
    }
}
SidebarNavLinkContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkContentComponent, deps: [{ token: SidebarNavHelper }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavLinkContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavLinkContentComponent, selector: "c-sidebar-nav-link-content", inputs: { item: "item" }, providers: [SidebarNavHelper], ngImport: i0, template: `
    <ng-container *ngIf="true">
      <ng-container>{{item?.name ?? ''}}</ng-container>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar-nav-link-content',
                    template: `
    <ng-container *ngIf="true">
      <ng-container>{{item?.name ?? ''}}</ng-container>
    </ng-container>
  `,
                    providers: [SidebarNavHelper]
                }]
        }], ctorParameters: function () { return [{ type: SidebarNavHelper }]; }, propDecorators: { item: [{
                type: Input
            }] } });
class SidebarNavLinkComponent {
    set item(item) {
        this._item = JSON.parse(JSON.stringify(item));
    }
    get item() {
        return this._item;
    }
    constructor(router) {
        this.router = router;
        // tslint:disable-next-line:variable-name
        this._item = {};
        this.linkClick = new EventEmitter();
        this.navigationEndObservable = router.events.pipe(filter(event => {
            return event instanceof NavigationEnd;
        }));
    }
    ngOnInit() {
        // @ts-ignore
        this.url = typeof this.item.url === 'string' ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : (this.item.href || this.url);
        this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
        this.navSubscription = this.navigationEndObservable.subscribe(event => {
            const itemUrlArray = this.href.split(/[?#(;]/)[0].split('/');
            const urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
            this.linkActive = itemUrlArray.every((value, index) => value === urlArray[index]);
        });
    }
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
    getLinkType() {
        return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
    }
    isDisabled() {
        return this.item?.attributes?.['disabled'];
    }
    isExternalLink() {
        const linkPath = Array.isArray(this.item.url) ? this.item.url[0] : this.item.url;
        return !!this.item.href || linkPath.substring(0, 4) === 'http';
    }
    linkClicked() {
        this.linkClick.emit();
    }
}
SidebarNavLinkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkComponent, deps: [{ token: i3.Router }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavLinkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavLinkComponent, selector: "c-sidebar-nav-link", inputs: { item: "item" }, outputs: { linkClick: "linkClick" }, providers: [SidebarNavHelper], ngImport: i0, template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'disabled'\"\n     [ngClass]=\"item | cSidebarNavLink\"\n     [cHtmlAttr]=\"item.attributes ?? {}\"\n  >\n    <ng-container *ngTemplateOutlet=\"iconTemplate; context: {$implicit: item}\"></ng-container>\n    <c-sidebar-nav-link-content [item]=\"item\"></c-sidebar-nav-link-content>\n    <span *ngIf=\"item.badge\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge?.text }}</span>\n  </a>\n  <a *ngSwitchCase=\"'external'\"\n     [ngClass]=\"item | cSidebarNavLink\"\n     [href]=\"href\"\n     [cHtmlAttr]=\"item.attributes ?? {}\"\n     (click)=\"linkClicked()\"\n  >\n    <ng-container *ngTemplateOutlet=\"iconTemplate; context: {$implicit: item}\"></ng-container>\n    <c-sidebar-nav-link-content [item]=\"item\"></c-sidebar-nav-link-content>\n    <span *ngIf=\"item.badge\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge?.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"item | cSidebarNavLink\"\n     [cHtmlAttr]=\"item.attributes ?? {}\"\n     [target]=\"item.attributes?.['target']\"\n     [queryParams]=\"item.linkProps?.queryParams ?? null\"\n     [fragment]=\"item.linkProps?.fragment\"\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\n     [preserveFragment]=\"item.linkProps?.preserveFragment ?? false\"\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange ?? false\"\n     [replaceUrl]=\"item.linkProps?.replaceUrl ?? false\"\n     [state]=\"item.linkProps?.state ?? {}\"\n     [routerLink]=\"item.url\"\n     routerLinkActive=\"active\"\n     [routerLinkActiveOptions]=\"item.linkProps?.routerLinkActiveOptions ?? { exact: false }\"\n     (click)=\"linkClicked()\"\n  >\n<!--    [class.active]=\"linkActive\"-->\n    <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\"></ng-container>\n    <c-sidebar-nav-link-content [item]=\"item\"></c-sidebar-nav-link-content>\n    <span *ngIf=\"item.badge\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge?.text }}</span>\n  </a>\n</ng-container>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [name]=\"item.iconComponent?.name\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n    ></svg>\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "directive", type: i5.IconDirective, selector: "svg[cIcon]", inputs: ["cIcon", "size", "title", "customClasses", "width", "height", "name", "viewBox", "xmlns", "pointer-events", "role"], exportAs: ["cIcon"] }, { kind: "component", type: SidebarNavLinkContentComponent, selector: "c-sidebar-nav-link-content", inputs: ["item"] }, { kind: "pipe", type: SidebarNavBadgePipe, name: "cSidebarNavBadge" }, { kind: "pipe", type: SidebarNavIconPipe, name: "cSidebarNavIcon" }, { kind: "pipe", type: SidebarNavLinkPipe, name: "cSidebarNavLink" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav-link', providers: [SidebarNavHelper], template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'disabled'\"\n     [ngClass]=\"item | cSidebarNavLink\"\n     [cHtmlAttr]=\"item.attributes ?? {}\"\n  >\n    <ng-container *ngTemplateOutlet=\"iconTemplate; context: {$implicit: item}\"></ng-container>\n    <c-sidebar-nav-link-content [item]=\"item\"></c-sidebar-nav-link-content>\n    <span *ngIf=\"item.badge\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge?.text }}</span>\n  </a>\n  <a *ngSwitchCase=\"'external'\"\n     [ngClass]=\"item | cSidebarNavLink\"\n     [href]=\"href\"\n     [cHtmlAttr]=\"item.attributes ?? {}\"\n     (click)=\"linkClicked()\"\n  >\n    <ng-container *ngTemplateOutlet=\"iconTemplate; context: {$implicit: item}\"></ng-container>\n    <c-sidebar-nav-link-content [item]=\"item\"></c-sidebar-nav-link-content>\n    <span *ngIf=\"item.badge\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge?.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"item | cSidebarNavLink\"\n     [cHtmlAttr]=\"item.attributes ?? {}\"\n     [target]=\"item.attributes?.['target']\"\n     [queryParams]=\"item.linkProps?.queryParams ?? null\"\n     [fragment]=\"item.linkProps?.fragment\"\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\n     [preserveFragment]=\"item.linkProps?.preserveFragment ?? false\"\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange ?? false\"\n     [replaceUrl]=\"item.linkProps?.replaceUrl ?? false\"\n     [state]=\"item.linkProps?.state ?? {}\"\n     [routerLink]=\"item.url\"\n     routerLinkActive=\"active\"\n     [routerLinkActiveOptions]=\"item.linkProps?.routerLinkActiveOptions ?? { exact: false }\"\n     (click)=\"linkClicked()\"\n  >\n<!--    [class.active]=\"linkActive\"-->\n    <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\"></ng-container>\n    <c-sidebar-nav-link-content [item]=\"item\"></c-sidebar-nav-link-content>\n    <span *ngIf=\"item.badge\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge?.text }}</span>\n  </a>\n</ng-container>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [name]=\"item.iconComponent?.name\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n    ></svg>\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i3.Router }]; }, propDecorators: { item: [{
                type: Input
            }], linkClick: [{
                type: Output
            }] } });

class SidebarNavTitleComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        const nativeElement = this.el.nativeElement;
        const name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            const classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            const wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    }
    addAttribs(attribs, element) {
        if (attribs) {
            for (const attr in attribs) {
                if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                    this.setStyle(attribs[attr], element);
                }
                else if (attr === 'class') {
                    this.addClass(attribs[attr], element);
                }
                else {
                    this.setAttrib(attr, attribs[attr], element);
                }
            }
        }
    }
    setStyle(styles, el) {
        for (const style in styles) {
            if (style) {
                this.renderer.setStyle(el, style, styles[style]);
            }
        }
    }
    addClass(classes, el) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(el, element);
        });
    }
    setAttrib(key, value, el) {
        this.renderer.setAttribute(el, key, value);
    }
}
SidebarNavTitleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavTitleComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavTitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavTitleComponent, selector: "c-sidebar-nav-title", inputs: { item: "item" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar-nav-title',
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { item: [{
                type: Input
            }] } });

class SidebarNavItemClassPipe {
    constructor(helper) {
        this.helper = helper;
    }
    // transform(item: any, ...args: any[]): any {
    transform(item, args) {
        const itemType = this.helper.itemType(item);
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'group') {
            // itemClass = 'c-sidebar-nav-group' ;
            itemClass = '';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
}
SidebarNavItemClassPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavItemClassPipe, deps: [{ token: SidebarNavHelper }], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavItemClassPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavItemClassPipe, name: "cSidebarNavItemClass" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavItemClassPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavItemClass'
                }]
        }], ctorParameters: function () { return [{ type: SidebarNavHelper }]; } });

class SidebarNavGroupService {
    constructor() {
        this.sidebarNavGroupState = new BehaviorSubject({});
        this.sidebarNavGroupState$ = this.sidebarNavGroupState.asObservable();
    }
    toggle(action) {
        this.sidebarNavGroupState.next(action);
    }
}
SidebarNavGroupService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavGroupService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SidebarNavGroupService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavGroupService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavGroupService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class SidebarNavComponent {
    constructor(sidebar, helper, router, renderer, hostElement, sidebarService) {
        this.sidebar = sidebar;
        this.helper = helper;
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.sidebarService = sidebarService;
        this.navItems = [];
        this.dropdownMode = 'path';
        this.role = 'nav';
        this.navItemsArray = [];
    }
    get hostClasses() {
        return {
            'sidebar-nav': !this.groupItems,
            compact: !this.groupItems && !!this.compact
        };
    }
    get sidebarNavGroupItemsClass() {
        return !!this.groupItems;
    }
    ngOnChanges(changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    }
    hideMobile() {
        // todo: proper scrollIntoView() after NavigationEnd
        if (this.sidebar && this.sidebar.sidebarState.mobile) {
            this.sidebarService.toggle({ toggle: 'visible', sidebar: this.sidebar });
        }
    }
}
SidebarNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavComponent, deps: [{ token: SidebarComponent, optional: true }, { token: SidebarNavHelper }, { token: i3.Router }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: SidebarService }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavComponent, selector: "c-sidebar-nav", inputs: { navItems: "navItems", dropdownMode: "dropdownMode", groupItems: "groupItems", compact: "compact" }, host: { properties: { "class": "this.hostClasses", "class.nav-group-items": "this.sidebarNavGroupItemsClass", "attr.role": "this.role" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngFor=\"let item of navItemsArray\">\n  <ng-container [ngSwitch]=\"helper.itemType(item)\">\n    <c-sidebar-nav-group\n      #rla=\"routerLinkActive\"\n      *ngSwitchCase=\"'group'\"\n      [dropdownMode]=\"dropdownMode\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n      routerLinkActive=\"show\"\n    >\n    </c-sidebar-nav-group>\n    <c-sidebar-nav-divider\n      *ngSwitchCase=\"'divider'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-divider>\n    <c-sidebar-nav-title\n      *ngSwitchCase=\"'title'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-title>\n    <c-sidebar-nav-label\n      *ngSwitchCase=\"'label'\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-label>\n    <ng-container\n      *ngSwitchCase=\"'empty'\">\n    </ng-container>\n    <c-sidebar-nav-link\n      (linkClick)=\"hideMobile()\"\n      *ngSwitchDefault\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n    >\n    </c-sidebar-nav-link>\n  </ng-container>\n</ng-container>\n<ng-content></ng-content>\n", styles: [""], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i1$1.NgClass; }), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(function () { return i1$1.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(function () { return i1$1.NgSwitch; }), selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i0.forwardRef(function () { return i1$1.NgSwitchCase; }), selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i0.forwardRef(function () { return i1$1.NgSwitchDefault; }), selector: "[ngSwitchDefault]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.RouterLinkActive; }), selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "directive", type: i0.forwardRef(function () { return HtmlAttributesDirective; }), selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "component", type: i0.forwardRef(function () { return SidebarNavDividerComponent; }), selector: "c-sidebar-nav-divider", inputs: ["item"] }, { kind: "component", type: i0.forwardRef(function () { return SidebarNavGroupComponent; }), selector: "c-sidebar-nav-group", inputs: ["item", "dropdownMode", "show"] }, { kind: "component", type: i0.forwardRef(function () { return SidebarNavLabelComponent; }), selector: "c-sidebar-nav-label", inputs: ["item"] }, { kind: "component", type: i0.forwardRef(function () { return SidebarNavLinkComponent; }), selector: "c-sidebar-nav-link", inputs: ["item"], outputs: ["linkClick"] }, { kind: "component", type: i0.forwardRef(function () { return SidebarNavTitleComponent; }), selector: "c-sidebar-nav-title", inputs: ["item"] }, { kind: "pipe", type: i0.forwardRef(function () { return SidebarNavItemClassPipe; }), name: "cSidebarNavItemClass" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav', template: "<ng-container *ngFor=\"let item of navItemsArray\">\n  <ng-container [ngSwitch]=\"helper.itemType(item)\">\n    <c-sidebar-nav-group\n      #rla=\"routerLinkActive\"\n      *ngSwitchCase=\"'group'\"\n      [dropdownMode]=\"dropdownMode\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n      routerLinkActive=\"show\"\n    >\n    </c-sidebar-nav-group>\n    <c-sidebar-nav-divider\n      *ngSwitchCase=\"'divider'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-divider>\n    <c-sidebar-nav-title\n      *ngSwitchCase=\"'title'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-title>\n    <c-sidebar-nav-label\n      *ngSwitchCase=\"'label'\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-label>\n    <ng-container\n      *ngSwitchCase=\"'empty'\">\n    </ng-container>\n    <c-sidebar-nav-link\n      (linkClick)=\"hideMobile()\"\n      *ngSwitchDefault\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n    >\n    </c-sidebar-nav-link>\n  </ng-container>\n</ng-container>\n<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return [{ type: SidebarComponent, decorators: [{
                    type: Optional
                }] }, { type: SidebarNavHelper }, { type: i3.Router }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: SidebarService }]; }, propDecorators: { navItems: [{
                type: Input
            }], dropdownMode: [{
                type: Input
            }], groupItems: [{
                type: Input
            }], compact: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], sidebarNavGroupItemsClass: [{
                type: HostBinding,
                args: ['class.nav-group-items']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }] } });
class SidebarNavGroupComponent {
    constructor(router, renderer, hostElement, helper, sidebarNavGroupService) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.helper = helper;
        this.sidebarNavGroupService = sidebarNavGroupService;
        this.dropdownMode = 'path';
        this.navItems = [];
        this.display = { display: 'block' };
        this.navigationEndObservable = router.events.pipe(filter((event) => event instanceof NavigationEnd));
    }
    get hostClasses() {
        return {
            'nav-group': true,
            show: this.open
        };
    }
    ngOnInit() {
        this.navItems = [...this.item.children];
        this.navSubscription = this.navigationEndObservable.subscribe((event) => {
            if (this.dropdownMode !== 'none') {
                const samePath = this.samePath(event.url);
                this.openGroup(samePath);
            }
        });
        if (this.samePath(this.router.routerState.snapshot.url)) {
            this.openGroup(true);
        }
        this.navGroupSubscription = this.sidebarNavGroupService.sidebarNavGroupState$.subscribe(next => {
            if (this.dropdownMode === 'close' && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
                if (next.sidebarNavGroup.item.url.startsWith(this.item.url)) {
                    return;
                }
                if (this.samePath(this.router.routerState.snapshot.url)) {
                    this.openGroup(true);
                    return;
                }
                this.openGroup(false);
            }
        });
    }
    samePath(url) {
        // console.log('item:', this.item.name, this.item.url, 'url:', url);
        const itemArray = this.item.url?.split('/');
        const urlArray = url.split('/');
        return itemArray?.every((value, index) => {
            // console.log(value === urlArray[index], 'value:', value, 'index:', index, urlArray[index], url);
            return value === urlArray[index];
        });
    }
    openGroup(open) {
        this.open = open;
    }
    toggleGroup($event) {
        $event.preventDefault();
        this.openGroup(!this.open);
        if (this.open) {
            this.sidebarNavGroupService.toggle({ open: this.open, sidebarNavGroup: this });
        }
    }
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
    onAnimationStart($event) {
        this.display = { display: 'block' };
        if ($event.toState === 'open') {
            const host = this.sidebarNav.nativeElement;
            this.renderer.setStyle(host, 'height', `${host['scrollHeight']}px`);
        }
    }
    onAnimationDone($event) {
        if ($event.toState === 'open') {
            const host = this.sidebarNav.nativeElement;
            this.renderer.setStyle(host, 'height', 'auto');
        }
        if ($event.toState === 'closed') {
            setTimeout(() => {
                this.display = null;
            });
        }
    }
}
SidebarNavGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavGroupComponent, deps: [{ token: i3.Router }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: SidebarNavHelper }, { token: SidebarNavGroupService }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavGroupComponent, selector: "c-sidebar-nav-group", inputs: { item: "item", dropdownMode: "dropdownMode", show: "show" }, host: { properties: { "class": "this.hostClasses" } }, providers: [SidebarNavHelper], viewQueries: [{ propertyName: "sidebarNav", first: true, predicate: SidebarNavComponent, descendants: true, read: ElementRef }], ngImport: i0, template: "<a (click)=\"toggleGroup($event)\"\n   [cHtmlAttr]=\"item.attributes\"\n   class=\"nav-link nav-group-toggle\"\n   href>\n  <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\"></ng-container>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n<c-sidebar-nav\n  (@openClose.done)=\"onAnimationDone($event)\"\n  (@openClose.start)=\"onAnimationStart($event)\"\n  [@openClose]=\"open ? 'open' : 'closed'\"\n  [dropdownMode]=\"dropdownMode\"\n  [groupItems]=\"true\"\n  [navItems]=\"navItems\"\n  [ngStyle]=\"display\"\n>\n</c-sidebar-nav>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n      [name]=\"item.iconComponent?.name\"\n    ></svg>\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n", styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "directive", type: i5.IconDirective, selector: "svg[cIcon]", inputs: ["cIcon", "size", "title", "customClasses", "width", "height", "name", "viewBox", "xmlns", "pointer-events", "role"], exportAs: ["cIcon"] }, { kind: "component", type: SidebarNavComponent, selector: "c-sidebar-nav", inputs: ["navItems", "dropdownMode", "groupItems", "compact"] }, { kind: "pipe", type: SidebarNavBadgePipe, name: "cSidebarNavBadge" }, { kind: "pipe", type: SidebarNavIconPipe, name: "cSidebarNavIcon" }], animations: [
        trigger('openClose', [
            state('open', style({
                height: '*'
            })),
            state('closed', style({
                height: '0px'
            })),
            transition('open <=> closed', [
                animate('.15s ease')
            ])
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav-group', providers: [SidebarNavHelper], animations: [
                        trigger('openClose', [
                            state('open', style({
                                height: '*'
                            })),
                            state('closed', style({
                                height: '0px'
                            })),
                            transition('open <=> closed', [
                                animate('.15s ease')
                            ])
                        ])
                    ], template: "<a (click)=\"toggleGroup($event)\"\n   [cHtmlAttr]=\"item.attributes\"\n   class=\"nav-link nav-group-toggle\"\n   href>\n  <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\"></ng-container>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n<c-sidebar-nav\n  (@openClose.done)=\"onAnimationDone($event)\"\n  (@openClose.start)=\"onAnimationStart($event)\"\n  [@openClose]=\"open ? 'open' : 'closed'\"\n  [dropdownMode]=\"dropdownMode\"\n  [groupItems]=\"true\"\n  [navItems]=\"navItems\"\n  [ngStyle]=\"display\"\n>\n</c-sidebar-nav>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n      [name]=\"item.iconComponent?.name\"\n    ></svg>\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n", styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.Router }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: SidebarNavHelper }, { type: SidebarNavGroupService }]; }, propDecorators: { item: [{
                type: Input
            }], dropdownMode: [{
                type: Input
            }], show: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], sidebarNav: [{
                type: ViewChild,
                args: [SidebarNavComponent, { read: ElementRef }]
            }] } });

class SidebarModule {
}
SidebarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SidebarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, declarations: [SidebarComponent,
        SidebarTogglerComponent,
        SidebarToggleDirective,
        SidebarBrandComponent,
        SidebarNavBadgePipe,
        SidebarNavComponent,
        SidebarNavDividerComponent,
        SidebarNavGroupComponent,
        // SidebarNavGroupToggleDirective,
        SidebarNavIconPipe,
        SidebarNavItemClassPipe,
        SidebarNavLabelComponent,
        SidebarNavLinkComponent,
        SidebarNavLinkContentComponent,
        SidebarNavLinkPipe,
        SidebarNavTitleComponent,
        SidebarHeaderComponent,
        SidebarFooterComponent], imports: [CommonModule,
        RouterModule,
        SharedModule,
        IconModule], exports: [SidebarComponent,
        SidebarToggleDirective,
        SidebarTogglerComponent,
        SidebarBrandComponent,
        SidebarNavComponent,
        SidebarHeaderComponent,
        SidebarFooterComponent] });
SidebarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, providers: [
        SidebarService,
        SidebarNavHelper,
        SidebarNavGroupService
    ], imports: [CommonModule,
        RouterModule,
        SharedModule,
        IconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SidebarComponent,
                        SidebarTogglerComponent,
                        SidebarToggleDirective,
                        SidebarBrandComponent,
                        SidebarNavBadgePipe,
                        SidebarNavComponent,
                        SidebarNavDividerComponent,
                        SidebarNavGroupComponent,
                        // SidebarNavGroupToggleDirective,
                        SidebarNavIconPipe,
                        SidebarNavItemClassPipe,
                        SidebarNavLabelComponent,
                        SidebarNavLinkComponent,
                        SidebarNavLinkContentComponent,
                        SidebarNavLinkPipe,
                        SidebarNavTitleComponent,
                        SidebarHeaderComponent,
                        SidebarFooterComponent,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule,
                        SharedModule,
                        IconModule
                    ],
                    exports: [
                        SidebarComponent,
                        SidebarToggleDirective,
                        SidebarTogglerComponent,
                        SidebarBrandComponent,
                        SidebarNavComponent,
                        SidebarHeaderComponent,
                        SidebarFooterComponent,
                    ],
                    providers: [
                        SidebarService,
                        SidebarNavHelper,
                        SidebarNavGroupService
                    ],
                }]
        }] });

class TableColorDirective {
    get hostClasses() {
        return {
            [`table-${this.color}`]: !!this.color,
        };
    }
}
TableColorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TableColorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TableColorDirective, selector: "[cTableColor]", inputs: { color: ["cTableColor", "color"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTableColor]'
                }]
        }], propDecorators: { color: [{
                type: Input,
                args: ['cTableColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class TableActiveDirective {
    /**
     * Highlight a table row or cell
     * @type boolean
     */
    set active(value) {
        this._active = coerceBooleanProperty(value);
    }
    ;
    get active() {
        return this._active;
    }
    ;
    get hostClasses() {
        return {
            'table-active': this.active,
        };
    }
    constructor() {
        this._active = false;
    }
}
TableActiveDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableActiveDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TableActiveDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TableActiveDirective, selector: "[cTableActive]", inputs: { active: ["cTableActive", "active"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableActiveDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTableActive]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { active: [{
                type: Input,
                args: ['cTableActive']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class TableDirective {
    /**
     * Add borders on all sides of the table and cells.
     * @type boolean
     */
    set bordered(value) {
        this._bordered = coerceBooleanProperty(value);
    }
    ;
    get bordered() {
        return this._bordered;
    }
    /**
     * Remove borders on all sides of the table and cells.
     * @type boolean
     */
    set borderless(value) {
        this._borderless = coerceBooleanProperty(value);
    }
    ;
    get borderless() {
        return this._borderless;
    }
    /**
     * Enable a hover state on table rows within table body.
     * @type boolean
     */
    set hover(value) {
        this._hover = coerceBooleanProperty(value);
    }
    ;
    get hover() {
        return this._hover;
    }
    /**
     * Make table more compact by cutting all cell `padding` in half.
     * @type boolean
     */
    set small(value) {
        this._small = coerceBooleanProperty(value);
    }
    ;
    get small() {
        return this._small;
    }
    /**
     * Add zebra-striping to any table row within the table body.
     * @type boolean
     */
    set striped(value) {
        this._striped = coerceBooleanProperty(value);
    }
    ;
    get striped() {
        return this._striped;
    }
    /**
     * Add zebra-striping to any table column.
     * @type boolean
     * @since 4.2.4
     */
    set stripedColumns(value) {
        this._stripedColumns = coerceBooleanProperty(value);
    }
    ;
    get stripedColumns() {
        return this._stripedColumns;
    }
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this._bordered = false;
        this._borderless = false;
        this._hover = false;
        this._small = false;
        this._striped = false;
        this._stripedColumns = false;
    }
    get hostClasses() {
        return {
            table: true,
            [`align-${this.align}`]: !!this.align,
            [`caption-${this.caption}`]: !!this.caption,
            [`border-${this.borderColor}`]: !!this.borderColor,
            'table-bordered': this.bordered,
            'table-borderless': this.borderless,
            [`table-${this.color}`]: !!this.color,
            'table-hover': this.hover,
            'table-sm': this.small,
            'table-striped': this.striped,
            'table-striped-columns': this.stripedColumns
        };
    }
    ngOnInit() {
        this.setResponsiveWrapper();
    }
    // todo
    setResponsiveWrapper() {
        if (!!this.responsive) {
            const nativeElement = this.hostElement.nativeElement;
            const wrapper = this.renderer.createElement('div');
            const className = this.responsive === true ? 'table-responsive' : `table-responsive-${this.responsive}`;
            this.renderer.addClass(wrapper, className);
            const parentNode = this.renderer.parentNode(nativeElement);
            this.renderer.appendChild(parentNode, wrapper);
            this.renderer.insertBefore(parentNode, wrapper, nativeElement);
            this.renderer.appendChild(wrapper, nativeElement);
        }
    }
}
TableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
TableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TableDirective, selector: "[cTable]", inputs: { align: "align", borderColor: "borderColor", bordered: "bordered", borderless: "borderless", caption: "caption", color: "color", hover: "hover", responsive: "responsive", small: "small", striped: "striped", stripedColumns: "stripedColumns" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTable]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { align: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], bordered: [{
                type: Input
            }], borderless: [{
                type: Input
            }], caption: [{
                type: Input
            }], color: [{
                type: Input
            }], hover: [{
                type: Input
            }], responsive: [{
                type: Input
            }], small: [{
                type: Input
            }], striped: [{
                type: Input
            }], stripedColumns: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class TableModule {
}
TableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: TableModule, declarations: [TableDirective,
        TableColorDirective,
        TableActiveDirective], imports: [CommonModule], exports: [TableDirective,
        TableColorDirective,
        TableActiveDirective] });
TableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableDirective,
                        TableColorDirective,
                        TableActiveDirective
                    ],
                    exports: [
                        TableDirective,
                        TableColorDirective,
                        TableActiveDirective
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class TabService {
    constructor() {
        this.activeTabPaneIdx = new Subject();
        this.activeTabPaneIdx$ = this.activeTabPaneIdx.asObservable();
    }
    setActiveTabIdx(tabContentState) {
        this.activeTabPaneIdx.next(tabContentState);
    }
}
TabService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TabService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TabPaneComponent {
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._active = false;
    }
    set active(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._active !== newValue) {
            this._active = newValue;
            this.changeDetectorRef.markForCheck();
        }
    }
    get active() {
        return this._active;
    }
    get hostClasses() {
        return {
            'tab-pane': true,
            fade: true,
            show: this.active,
            active: this.active
        };
    }
    ngOnInit() {
        this.subscribeTabService();
    }
    ngOnDestroy() {
        this.subscribeTabService(false);
    }
    subscribeTabService(subscribe = true) {
        if (subscribe) {
            this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
                if (tabContentState.tabContent === this.tabContent) {
                    this.active = (tabContentState.activeIdx === this.tabPaneIdx);
                }
            });
        }
        else {
            this.tabServiceSubscription.unsubscribe();
        }
    }
}
TabPaneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabPaneComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: TabService }], target: i0.ɵɵFactoryTarget.Component });
TabPaneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: TabPaneComponent, selector: "c-tab-pane", host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cTabPane"], ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabPaneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-tab-pane', exportAs: 'cTabPane', template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TabService }]; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class TabContentComponent {
    /**
     * Set active tabPane index
     * @type number
     */
    set activeTabPaneIdx(value) {
        const newValue = coerceNumberProperty(value);
        if (this._activeTabPaneIdx != newValue) {
            this._activeTabPaneIdx = newValue;
            this.activeTabPaneIdxChange.emit(newValue);
            this.changeDetectorRef.markForCheck();
            this.changeDetectorRef.detectChanges();
        }
    }
    ;
    get activeTabPaneIdx() {
        return this._activeTabPaneIdx;
    }
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._activeTabPaneIdx = -1;
        /**
         * Event emited on the active tab pane index change.
         */
        this.activeTabPaneIdxChange = new EventEmitter();
    }
    get hostClasses() {
        return {
            'tab-content': true
        };
    }
    ngAfterContentInit() {
        this.subscribeTabService();
    }
    ngAfterContentChecked() {
        this.panes?.forEach((tabPane, index) => {
            tabPane.tabContent = this;
            tabPane.tabPaneIdx = index;
        });
        this.refreshTabPaneActive(this.activeTabPaneIdx);
        this.tabService.setActiveTabIdx({ tabContent: this, activeIdx: this.activeTabPaneIdx });
    }
    ngOnChanges(changes) {
        if (changes['activeTabPaneIdx']?.currentValue) {
            this.tabService.setActiveTabIdx({ tabContent: this, activeIdx: changes['activeTabPaneIdx'].currentValue });
        }
    }
    ngOnDestroy() {
        this.subscribeTabService(false);
    }
    subscribeTabService(subscribe = true) {
        if (subscribe) {
            this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
                if (this === tabContentState.tabContent) {
                    this.activeTabPaneIdx = tabContentState.activeIdx;
                }
            });
        }
        else {
            this.tabServiceSubscription.unsubscribe();
        }
    }
    refreshTabPaneActive(idx) {
        // hack for active state pane refresh todo?
        this.panes?.forEach((tabPane, index) => {
            tabPane.active = idx === index;
        });
    }
}
TabContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: TabService }], target: i0.ɵɵFactoryTarget.Component });
TabContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: TabContentComponent, selector: "c-tab-content", inputs: { activeTabPaneIdx: "activeTabPaneIdx" }, outputs: { activeTabPaneIdxChange: "activeTabPaneIdxChange" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "panes", predicate: TabPaneComponent }], exportAs: ["cTabContent"], usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-tab-content', changeDetection: ChangeDetectionStrategy.OnPush, exportAs: 'cTabContent', template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TabService }]; }, propDecorators: { activeTabPaneIdx: [{
                type: Input
            }], activeTabPaneIdxChange: [{
                type: Output
            }], panes: [{
                type: ContentChildren,
                args: [TabPaneComponent]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class TabContentRefDirective {
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._active = false;
        this._disabled = false;
        /**
         * c-tab-pane index respectively
         * @type number
         */
        this.tabPaneIdx = -1;
    }
    /**
     * Set active state of tab content
     * @type boolean
     */
    set active(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._active !== newValue) {
            this._active = newValue;
            this.changeDetectorRef.detectChanges();
        }
    }
    get active() {
        return this._active;
    }
    /**
     * Set disabled state of tab content
     * @type boolean
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get disabled() {
        return this._disabled || this.tabPaneIdx >= this.tabContentRef?.panes?.length;
    }
    get hostClasses() {
        return {
            active: this.active,
            disabled: this.disabled
        };
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    ngOnChanges(changes) {
        if (changes['active']?.currentValue) {
            this.setActiveTabPane();
        }
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.setActiveTabPane();
    }
    setActiveTabPane() {
        setTimeout(() => {
            if (this.tabPaneIdx < this.tabContentRef.panes.length) {
                this.active = true;
                this.tabService.setActiveTabIdx({ tabContent: this.tabContentRef, activeIdx: this.tabPaneIdx });
            }
            else {
                this.active = false;
            }
        });
    }
    ngOnInit() {
        this.subscribeTabService();
    }
    ngOnDestroy() {
        this.subscribeTabService(false);
    }
    subscribeTabService(subscribe = true) {
        if (subscribe) {
            this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
                if (tabContentState.tabContent === this.tabContentRef) {
                    this.active = (tabContentState.activeIdx === this.tabPaneIdx);
                }
            });
        }
        else {
            this.tabServiceSubscription.unsubscribe();
        }
    }
}
TabContentRefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentRefDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: TabService }], target: i0.ɵɵFactoryTarget.Directive });
TabContentRefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TabContentRefDirective, selector: "[cTabContent]", inputs: { tabContentRef: ["cTabContent", "tabContentRef"], active: "active", disabled: "disabled", tabPaneIdx: "tabPaneIdx" }, host: { listeners: { "click": "toggleOpen($event)" }, properties: { "class": "this.hostClasses", "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentRefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTabContent]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: TabService }]; }, propDecorators: { tabContentRef: [{
                type: Input,
                args: ['cTabContent']
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], tabPaneIdx: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class TabsModule {
}
TabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, declarations: [TabContentComponent,
        TabPaneComponent,
        TabContentRefDirective], imports: [CommonModule], exports: [TabContentComponent,
        TabPaneComponent,
        TabContentRefDirective] });
TabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, providers: [
        TabService
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TabContentComponent,
                        TabPaneComponent,
                        TabContentRefDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TabContentComponent,
                        TabPaneComponent,
                        TabContentRefDirective
                    ],
                    providers: [
                        TabService
                    ]
                }]
        }] });

class ToasterService {
    constructor() {
        this.toasterState = new BehaviorSubject({});
        this.toasterState$ = this.toasterState.asObservable();
    }
    setState(state) {
        this.toasterState.next({ ...state });
    }
}
ToasterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ToasterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ToastComponent {
    /**
     * Toggle the visibility of component.
     * @type boolean
     */
    set visible(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._visible !== newValue) {
            this._visible = newValue;
            newValue ? this.setTimer() : this.clearTimer();
            this.visibleChange.emit(newValue);
            this.changeDetectorRef.markForCheck();
        }
    }
    get visible() {
        return this._visible;
    }
    constructor(hostElement, renderer, toasterService, changeDetectorRef) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Auto hide the toast.
         * @type boolean
         */
        this.autohide = true;
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         * @type Colors
         */
        this.color = '';
        /**
         * Delay hiding the toast (ms).
         * @type number
         */
        this.delay = 5000;
        /**
         * Apply fade transition to the toast.
         * @type boolean
         */
        this.fade = true;
        this._visible = false;
        /**
         * Event emitted on visibility change. [docs]
         * @type boolean
         */
        this.visibleChange = new EventEmitter();
        /**
         * Event emitted on timer tick. [docs]
         * @type number
         */
        this.timer = new EventEmitter();
    }
    get clock() {
        return this._clock;
    }
    set clock(value) {
        this._clock = value;
        this.timer.emit(this._clock);
        this.changeDetectorRef.markForCheck();
    }
    get animationDisabled() {
        return !this.fade;
    }
    get animateType() {
        return this.visible ? 'show' : 'hide';
    }
    onAnimationStart($event) {
        this.onAnimationEvent($event);
    }
    onAnimationDone($event) {
        this.onAnimationEvent($event);
    }
    onMouseOver() {
        this.clearTimer();
    }
    onMouseOut() {
        this.setTimer();
    }
    get hostClasses() {
        return {
            toast: true,
            fade: this.fade,
            show: !this.hide,
            [`bg-${this.color}`]: !!this.color,
            'border-0': !!this.color
        };
    }
    ngOnInit() {
        if (this.visible) {
            this.toasterService.setState({
                toast: this,
                show: this.visible,
                placement: this.placement,
            });
            this.clearTimer();
            this.setTimer();
        }
    }
    ngOnDestroy() {
        this.clearTimer();
    }
    setTimer() {
        this.clearTimer();
        if (this.autohide && this.visible) {
            this.timerId = this.delay > 0 ? setTimeout(() => this.onClose(), this.delay) : null;
            this.setClock();
        }
    }
    clearTimer() {
        this.clearClock();
        clearTimeout(this.timerId);
        this.timerId = null;
    }
    onClose() {
        this.clearTimer();
        this.toasterService.setState({
            toast: this,
            show: false,
            placement: this.placement,
        });
    }
    setClock() {
        this.clearClock();
        this.clock = 0;
        this.clockId = setInterval(() => {
            this.clock += 1;
            this.changeDetectorRef.markForCheck();
        }, 1000);
        this.clockTimerId = setTimeout(() => {
            this.clearClock();
        }, this.delay);
    }
    clearClock() {
        clearTimeout(this.clockTimerId);
        clearInterval(this.clockId);
        this.clockId = null;
    }
    onAnimationEvent(event) {
        this.hide = event.phaseName === 'start' && event.toState === 'show';
        if (event.phaseName === 'done') {
            this.hide = (event.toState === 'hide' || event.toState === 'void');
            if (event.toState === 'show') {
                this.hide = false;
            }
        }
    }
}
ToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: ToasterService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ToastComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ToastComponent, selector: "c-toast", inputs: { autohide: "autohide", color: "color", delay: "delay", fade: "fade", visible: "visible", index: "index" }, outputs: { visibleChange: "visibleChange", timer: "timer" }, host: { listeners: { "@fadeInOut.start": "onAnimationStart($event)", "@fadeInOut.done": "onAnimationDone($event)", "mouseover": "onMouseOver()", "mouseout": "onMouseOut()" }, properties: { "@.disabled": "this.animationDisabled", "@fadeInOut": "this.animateType", "class": "this.hostClasses" } }, exportAs: ["cToast"], ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block;overflow:hidden}\n"], animations: [
        trigger('fadeInOut', [
            state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
            state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
            state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
            transition('show => hide', [
                animate('{{ time }} {{ easing }}'),
            ], {
                params: { time: '300ms', easing: 'ease-out' }
            }),
            transition('hide => show', [animate('{{ time }} {{ easing }}')], {
                params: { time: '300ms', easing: 'ease-in' },
            }),
            transition('show => void', [animate('{{ time }} {{ easing }}')], {
                params: { time: '300ms', easing: 'ease-out' },
            }),
            transition('void => show', [animate('{{ time }} {{ easing }}')], {
                params: { time: '300ms', easing: 'ease-in' },
            }),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toast', exportAs: 'cToast', animations: [
                        trigger('fadeInOut', [
                            state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
                            state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                            state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                            transition('show => hide', [
                                animate('{{ time }} {{ easing }}'),
                            ], {
                                params: { time: '300ms', easing: 'ease-out' }
                            }),
                            transition('hide => show', [animate('{{ time }} {{ easing }}')], {
                                params: { time: '300ms', easing: 'ease-in' },
                            }),
                            transition('show => void', [animate('{{ time }} {{ easing }}')], {
                                params: { time: '300ms', easing: 'ease-out' },
                            }),
                            transition('void => show', [animate('{{ time }} {{ easing }}')], {
                                params: { time: '300ms', easing: 'ease-in' },
                            }),
                        ]),
                    ], template: "<ng-content></ng-content>\n", styles: [":host{display:block;overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: ToasterService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { autohide: [{
                type: Input
            }], color: [{
                type: Input
            }], delay: [{
                type: Input
            }], fade: [{
                type: Input
            }], visible: [{
                type: Input
            }], index: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], timer: [{
                type: Output
            }], animationDisabled: [{
                type: HostBinding,
                args: ['@.disabled']
            }], animateType: [{
                type: HostBinding,
                args: ['@fadeInOut']
            }], onAnimationStart: [{
                type: HostListener,
                args: ['@fadeInOut.start', ['$event']]
            }], onAnimationDone: [{
                type: HostListener,
                args: ['@fadeInOut.done', ['$event']]
            }], onMouseOver: [{
                type: HostListener,
                args: ['mouseover']
            }], onMouseOut: [{
                type: HostListener,
                args: ['mouseout']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ToastBodyComponent {
    constructor(toast) {
        this.toast = toast;
        this.toastBodyClass = true;
    }
}
ToastBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastBodyComponent, deps: [{ token: ToastComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ToastBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ToastBodyComponent, selector: "c-toast-body", host: { properties: { "class.toast-body": "this.toastBodyClass" } }, exportAs: ["cToastBody"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toast-body', template: '<ng-content></ng-content>', exportAs: 'cToastBody', styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: ToastComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { toastBodyClass: [{
                type: HostBinding,
                args: ['class.toast-body']
            }] } });

class ToastCloseDirective {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.toasterService.setState({ show: false, toast: this.toast });
    }
}
ToastCloseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastCloseDirective, deps: [{ token: ToasterService }], target: i0.ɵɵFactoryTarget.Directive });
ToastCloseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ToastCloseDirective, selector: "[cToastClose]", inputs: { toast: ["cToastClose", "toast"] }, host: { listeners: { "click": "toggleOpen($event)" } }, exportAs: ["cToastClose"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cToastClose]',
                    exportAs: 'cToastClose'
                }]
        }], ctorParameters: function () { return [{ type: ToasterService }]; }, propDecorators: { toast: [{
                type: Input,
                args: ['cToastClose']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class ToastHeaderComponent {
    constructor(toast) {
        this.toast = toast;
        /**
         * Add close button to a toast header
         * @type boolean
         */
        this.closeButton = true;
        this.toastHeaderClass = true;
    }
}
ToastHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastHeaderComponent, deps: [{ token: ToastComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ToastHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ToastHeaderComponent, selector: "c-toast-header", inputs: { closeButton: "closeButton" }, host: { properties: { "class.toast-header": "this.toastHeaderClass" } }, exportAs: ["cToastHeader"], ngImport: i0, template: "<ng-container>\n  <ng-content></ng-content>\n  <button *ngIf=\"closeButton\" [cToastClose]=\"toast\" [style]=\"{outline: 0}\" aria-label=\"close\" cButtonClose class=\"ms-auto\"></button>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: ButtonCloseDirective, selector: "[cButtonClose]", inputs: ["white"] }, { kind: "directive", type: ToastCloseDirective, selector: "[cToastClose]", inputs: ["cToastClose"], exportAs: ["cToastClose"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toast-header', exportAs: 'cToastHeader', template: "<ng-container>\n  <ng-content></ng-content>\n  <button *ngIf=\"closeButton\" [cToastClose]=\"toast\" [style]=\"{outline: 0}\" aria-label=\"close\" cButtonClose class=\"ms-auto\"></button>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: ToastComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { closeButton: [{
                type: Input
            }], toastHeaderClass: [{
                type: HostBinding,
                args: ['class.toast-header']
            }] } });

class ToasterHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ToasterHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterHostDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ToasterHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ToasterHostDirective, selector: "[cToasterHost]", exportAs: ["cToasterHost"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cToasterHost]',
                    exportAs: 'cToasterHost'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });

var ToasterPlacement;
(function (ToasterPlacement) {
    ToasterPlacement["Static"] = "static";
    ToasterPlacement["TopStart"] = "top-start";
    ToasterPlacement["TopCenter"] = "top-center";
    ToasterPlacement["TopEnd"] = "top-end";
    ToasterPlacement["MiddleStart"] = "middle-start";
    ToasterPlacement["MiddleCenter"] = "middle-center";
    ToasterPlacement["MiddleEnd"] = "middle-end";
    ToasterPlacement["BottomStart"] = "bottom-start";
    ToasterPlacement["BottomCenter"] = "bottom-center";
    ToasterPlacement["BottomEnd"] = "bottom-end";
})(ToasterPlacement || (ToasterPlacement = {}));
class ToasterComponent {
    constructor(componentFactoryResolver, hostElement, renderer, toasterService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.toasterService = toasterService;
        this.placements = Object.values(ToasterPlacement);
        this.toastsDynamic = [];
        /**
         * Toaster placement
         * @type TToasterPlacement
         */
        this.placement = ToasterPlacement.TopEnd;
        /**
         * Toaster position
         * @type (string | 'absolute' | 'fixed' | 'static')
         */
        this.position = 'absolute';
    }
    get hostClasses() {
        return {
            toaster: true,
            'toast-container': true,
            [`position-${this.position}`]: !!this.position,
            'top-0': this.placement.includes('top'),
            'top-50': this.placement.includes('middle'),
            'bottom-0': this.placement.includes('bottom'),
            'start-0': this.placement.includes('start'),
            'start-50': this.placement.includes('center'),
            'end-0': this.placement.includes('end'),
            'translate-middle-x': this.placement.includes('center') && !this.placement.includes('middle'),
            'translate-middle-y': this.placement.includes('middle') && !this.placement.includes('center'),
            'translate-middle': this.placement.includes('middle') && this.placement.includes('center'),
        };
    }
    ngOnInit() {
        this.stateToasterSubscribe(true);
    }
    ngOnDestroy() {
        this.stateToasterSubscribe(false);
    }
    ngAfterContentChecked() {
        this.toasts = this.contentToasts;
    }
    addToast(toast, props, options) {
        let componentRef;
        if (parseInt(VERSION.major) < 13) {
            const factory = this.componentFactoryResolver.resolveComponentFactory(toast);
            componentRef = this.toasterHost.viewContainerRef.createComponent(factory, options?.index, options?.injector, options?.projectableNodes, options?.ngModuleRef);
        }
        else {
            // @ts-ignore
            componentRef = this.toasterHost.viewContainerRef.createComponent(toast, options);
        }
        this.toastsDynamic.push(componentRef);
        const index = this.toastsDynamic.indexOf(componentRef);
        for (const [key, value] of Object.entries(props)) {
            componentRef.instance[key] = value;
        }
        componentRef.instance['placement'] = this.placement;
        componentRef.instance['dynamic'] = true;
        componentRef.instance['index'] = index;
        componentRef.instance['visible'] = true;
        componentRef.instance['visibleChange'].emit(true);
        componentRef.changeDetectorRef?.detectChanges();
        return componentRef;
    }
    removeToast(state) {
        this.toastsDynamic?.forEach(item => {
            if (state.toast?.dynamic && (item.instance === state.toast)) {
                item.instance.visible = false;
                item.instance['visibleChange'].emit(false);
                setTimeout(() => {
                    item.destroy();
                }, 300);
            }
        });
        this.toasts?.forEach(item => {
            if (item.element.nativeElement === state.toast?.hostElement.nativeElement) {
                if (!state.toast?.dynamic) {
                    // @ts-ignore
                    state.toast.visible = false;
                }
            }
        });
    }
    stateToasterSubscribe(subscribe = true) {
        if (subscribe) {
            this.stateToasterSubscription = this.toasterService.toasterState$.subscribe((state) => {
                if (state.show === false) {
                    this.removeToast(state);
                }
                if (state.show === true && state.toast?.dynamic === undefined) {
                }
            });
        }
        else {
            this.stateToasterSubscription.unsubscribe();
        }
    }
}
ToasterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: ToasterService }], target: i0.ɵɵFactoryTarget.Component });
ToasterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ToasterComponent, selector: "c-toaster", inputs: { placement: "placement", position: "position" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentToasts", predicate: ToastComponent, read: ViewContainerRef }], viewQueries: [{ propertyName: "toasterHost", first: true, predicate: ToasterHostDirective, descendants: true, static: true }], exportAs: ["cToaster"], ngImport: i0, template: "<ng-template cToasterHost></ng-template>\n<ng-content cToasterHost></ng-content>\n", dependencies: [{ kind: "directive", type: ToasterHostDirective, selector: "[cToasterHost]", exportAs: ["cToasterHost"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toaster', exportAs: 'cToaster', template: "<ng-template cToasterHost></ng-template>\n<ng-content cToasterHost></ng-content>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: ToasterService }]; }, propDecorators: { placement: [{
                type: Input
            }], position: [{
                type: Input
            }], toasterHost: [{
                type: ViewChild,
                args: [ToasterHostDirective, { static: true }]
            }], contentToasts: [{
                type: ContentChildren,
                args: [ToastComponent, { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ToastModule {
}
ToastModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToastModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, declarations: [ToastComponent,
        ToastHeaderComponent,
        ToastBodyComponent,
        ToasterComponent,
        ToasterHostDirective,
        ToastCloseDirective], imports: [CommonModule, ButtonModule], exports: [ToastComponent,
        ToastHeaderComponent,
        ToastBodyComponent,
        ToasterComponent,
        ToasterHostDirective,
        ToastCloseDirective] });
ToastModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, providers: [ToasterService], imports: [CommonModule, ButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ToastComponent,
                        ToastHeaderComponent,
                        ToastBodyComponent,
                        ToasterComponent,
                        ToasterHostDirective,
                        ToastCloseDirective
                    ],
                    imports: [CommonModule, ButtonModule],
                    providers: [ToasterService],
                    exports: [
                        ToastComponent,
                        ToastHeaderComponent,
                        ToastBodyComponent,
                        ToasterComponent,
                        ToasterHostDirective,
                        ToastCloseDirective
                    ]
                }]
        }] });

class TooltipComponent {
    constructor(renderer) {
        this.renderer = renderer;
        /**
         * Content of tooltip
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Toggle the visibility of popover component.
         * @type boolean
         */
        this.visible = false;
        this.role = 'tooltip';
    }
    get hostClasses() {
        return {
            tooltip: true,
            fade: true,
            show: this.visible,
            'bs-tooltip-auto': true
        };
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateView(this.content);
        });
    }
    ngOnChanges(changes) {
        if (changes['content']) {
            setTimeout(() => {
                this.updateView(this.content);
            });
        }
    }
    ngOnDestroy() {
        this.clear();
    }
    clear() {
        this.viewContainerRef?.clear();
        if (!!this.textNode) {
            this.renderer.removeChild(this.textNode.parentNode, this.textNode);
        }
    }
    updateView(content) {
        this.clear();
        if (!content) {
            return;
        }
        if (content instanceof TemplateRef) {
            this.viewContainerRef.createEmbeddedView(content);
        }
        else {
            this.textNode = this.renderer.createText(content);
            const element = this.viewContainerRef.element.nativeElement;
            this.renderer.appendChild(element.parentNode, this.textNode);
        }
    }
}
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: TooltipComponent, selector: "c-tooltip", inputs: { content: "content", visible: "visible", id: "id", role: "role" }, host: { properties: { "attr.id": "this.id", "attr.role": "this.role", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "viewContainerRef", first: true, predicate: ["tooltipTemplate"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: "<ng-container>\n  <div class=\"tooltip-arrow\" data-popper-arrow></div>\n  <div class=\"tooltip-inner\">\n    <ng-container #tooltipTemplate></ng-container>\n  </div>\n</ng-container>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-tooltip', template: "<ng-container>\n  <div class=\"tooltip-arrow\" data-popper-arrow></div>\n  <div class=\"tooltip-inner\">\n    <ng-container #tooltipTemplate></ng-container>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { content: [{
                type: Input
            }], visible: [{
                type: Input
            }], id: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.id']
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], viewContainerRef: [{
                type: ViewChild,
                args: ['tooltipTemplate', { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class TooltipDirective {
    /**
     * Optional popper Options object, takes precedence over cPopoverPlacement prop
     * @type Partial<Options>
     */
    set popperOptions(value) {
        this._popperOptions = { ...this._popperOptions, placement: this.placement, ...value };
    }
    ;
    get popperOptions() {
        return { placement: this.placement, ...this._popperOptions };
    }
    /**
     * Toggle the visibility of tooltip component.
     */
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    get ariaDescribedBy() {
        return this.tooltipId ? this.tooltipId : null;
    }
    constructor(document, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.viewContainerRef = viewContainerRef;
        this.listenersService = listenersService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Content of tooltip
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
         */
        this.placement = 'top';
        /**
         * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
         * @type {'hover' | 'focus' | 'click'}
         */
        this.trigger = 'hover';
        this._visible = false;
        this._popperOptions = {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 0]
                    }
                }
            ]
        };
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            changes['visible'].currentValue ? this.addTooltipElement() : this.removeTooltipElement();
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.destroyTooltipElement();
    }
    ngOnInit() {
        this.setListeners();
    }
    setListeners() {
        const config = {
            hostElement: this.hostElement,
            trigger: this.trigger,
            callbackToggle: () => {
                this.visible = !this.visible;
                this.visible ? this.addTooltipElement() : this.removeTooltipElement();
            },
            callbackOff: () => {
                this.visible = false;
                this.removeTooltipElement();
            },
            callbackOn: () => {
                this.visible = true;
                this.addTooltipElement();
            }
        };
        this.listenersService.setListeners(config);
    }
    clearListeners() {
        this.listenersService.clearListeners();
    }
    getUID(prefix) {
        let uid = prefix ?? 'random-id';
        do {
            uid = `${prefix}-${Math.floor(Math.random() * 1000000).toString(10)}`;
        } while (this.document.getElementById(uid));
        return uid;
    }
    createTooltipElement() {
        if (!this.tooltipRef) {
            this.tooltipRef = this.viewContainerRef.createComponent(TooltipComponent);
            // this.viewContainerRef.detach();
        }
    }
    destroyTooltipElement() {
        this.tooltip?.remove();
        this.tooltipRef?.destroy();
        // @ts-ignore
        this.tooltipRef = undefined;
        this.popperInstance?.destroy();
        this.viewContainerRef?.detach();
        this.viewContainerRef?.clear();
    }
    addTooltipElement() {
        if (!this.tooltipRef) {
            this.createTooltipElement();
        }
        this.tooltipId = this.getUID('tooltip');
        this.tooltipRef.instance.id = this.tooltipId;
        this.tooltipRef.instance.content = this.content;
        this.tooltip = this.tooltipRef.location.nativeElement;
        this.renderer.addClass(this.tooltip, 'd-none');
        this.renderer.addClass(this.tooltip, 'fade');
        this.popperInstance?.destroy();
        this.viewContainerRef.insert(this.tooltipRef.hostView);
        this.renderer.appendChild(this.document.body, this.tooltip);
        this.popperInstance = createPopper(this.hostElement.nativeElement, this.tooltip, { ...this.popperOptions });
        if (!this.visible) {
            this.removeTooltipElement();
            return;
        }
        this.renderer.removeClass(this.tooltip, 'd-none');
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.tooltipRef.instance.visible = this.visible;
            this.popperInstance.forceUpdate();
            this.changeDetectorRef.markForCheck();
        }, 100);
    }
    removeTooltipElement() {
        this.tooltipId = '';
        if (!this.tooltipRef) {
            return;
        }
        this.tooltipRef.instance.visible = false;
        this.tooltipRef.instance.id = undefined;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.viewContainerRef?.detach();
        }, 300);
    }
}
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipDirective, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: ListenersService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TooltipDirective, selector: "[cTooltip]", inputs: { content: ["cTooltip", "content"], popperOptions: ["cTooltipOptions", "popperOptions"], placement: ["cTooltipPlacement", "placement"], trigger: ["cTooltipTrigger", "trigger"], visible: ["cTooltipVisible", "visible"] }, host: { properties: { "attr.aria-describedby": "this.ariaDescribedBy" } }, providers: [ListenersService], exportAs: ["cTooltip"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTooltip]',
                    exportAs: 'cTooltip',
                    providers: [ListenersService]
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: ListenersService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cTooltip']
            }], popperOptions: [{
                type: Input,
                args: ['cTooltipOptions']
            }], placement: [{
                type: Input,
                args: ['cTooltipPlacement']
            }], trigger: [{
                type: Input,
                args: ['cTooltipTrigger']
            }], visible: [{
                type: Input,
                args: ['cTooltipVisible']
            }], ariaDescribedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });

class TooltipModule {
}
TooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: TooltipModule, declarations: [TooltipComponent,
        TooltipDirective], imports: [CommonModule], exports: [TooltipComponent,
        TooltipDirective] });
TooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TooltipComponent,
                        TooltipDirective,
                    ],
                    exports: [
                        TooltipComponent,
                        TooltipDirective,
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class BgColorDirective {
    get hostClasses() {
        return {
            [`bg-${this.color}`]: !!this.color,
            'bg-gradient': this.gradient,
        };
    }
    constructor() {
        /**
         * Set the background of an element to any contextual class
         */
        this.color = '';
    }
}
BgColorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BgColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BgColorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: BgColorDirective, selector: "[cBgColor]", inputs: { color: ["cBgColor", "color"], gradient: "gradient" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BgColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cBgColor]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input,
                args: ['cBgColor']
            }], gradient: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class BorderDirective {
    constructor() {
        /**
         * Add or remove an element’s borders
         * @type Border
         */
        this.border = true;
    }
    get hostClasses() {
        if (typeof this.border === 'boolean') {
            return { border: true };
        }
        if (typeof this.border === 'number' || typeof this.border === 'string') {
            return {
                border: true,
                [`border-${this.border}`]: true
            };
        }
        if (typeof this.border === 'object') {
            const borderObj = { top: undefined, end: undefined, bottom: undefined, start: undefined, color: undefined, ...this.border };
            // @ts-ignore
            const keys = Object.keys(borderObj).filter(key => borderObj[key] !== undefined);
            const classes = {};
            keys.forEach(key => {
                // @ts-ignore
                const val = borderObj[key];
                if (typeof val === 'boolean') {
                    // @ts-ignore
                    classes[`border-${key}`] = true;
                }
                else if (typeof val === 'number' || typeof val === 'string') {
                    // @ts-ignore
                    classes[`border-${key}-${val}`] = true;
                }
                else if (typeof val === 'object') {
                    if ('color' in val) {
                        // @ts-ignore
                        classes[`border-${key}-${val.color}`] = true;
                    }
                    if ('width' in val) {
                        // @ts-ignore
                        classes[`border-${key}-${val.width}`] = true;
                    }
                }
            });
            return Object.entries(classes).length === 0 ? { border: false } : classes;
        }
    }
}
BorderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BorderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BorderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: BorderDirective, selector: "[cBorder]", inputs: { border: ["cBorder", "border"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BorderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cBorder]'
                }]
        }], propDecorators: { border: [{
                type: Input,
                args: ['cBorder']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class TextColorDirective {
    get hostClasses() {
        const color = this.color;
        return {
            [`text-${color}`]: !!color
        };
    }
    constructor() {
        /**
         * Set text-color of element
         * @type TextColors
         */
        this.color = '';
    }
}
TextColorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TextColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TextColorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TextColorDirective, selector: "[cTextColor]", inputs: { color: ["cTextColor", "color"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TextColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTextColor]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input,
                args: ['cTextColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class RoundedDirective {
    constructor() {
        /**
         * Set border radius variant and radius size
         * @type Rounded
         */
        this.rounded = true;
    }
    get hostClasses() {
        if (typeof this.rounded === 'boolean') {
            return { rounded: true };
        }
        if (typeof this.rounded === 'number' || typeof this.rounded === 'string') {
            return {
                [`rounded-${this.rounded}`]: true
            };
        }
        if (typeof this.rounded === 'object') {
            const roundedObj = {
                top: undefined,
                end: undefined,
                bottom: undefined,
                start: undefined,
                circle: undefined,
                pill: undefined,
                size: undefined,
                ...this.rounded,
            };
            // @ts-ignore
            const keys = Object.keys(roundedObj).filter(key => roundedObj[key] !== undefined);
            const classes = {};
            keys.forEach(key => {
                // @ts-ignore
                const val = roundedObj[key];
                if (typeof val === 'boolean') {
                    // @ts-ignore
                    classes[`rounded-${key}`] = val;
                }
                else {
                    // @ts-ignore
                    classes[`rounded-${val}`] = true;
                }
            });
            // console.log('rounded keys', keys, classes);
            return Object.entries(classes).length === 0 ? { rounded: false } : classes;
        }
    }
}
RoundedDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RoundedDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RoundedDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: RoundedDirective, selector: "[cRounded]", inputs: { rounded: ["cRounded", "rounded"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RoundedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cRounded]'
                }]
        }], propDecorators: { rounded: [{
                type: Input,
                args: ['cRounded']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class AlignDirective {
    get hostClasses() {
        return {
            [`align-${this.align}`]: !!this.align,
        };
    }
}
AlignDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlignDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AlignDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: AlignDirective, selector: "[cAlign]", inputs: { align: ["cAlign", "align"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlignDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAlign]'
                }]
        }], propDecorators: { align: [{
                type: Input,
                args: ['cAlign']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class UtilitiesModule {
}
UtilitiesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: UtilitiesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UtilitiesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: UtilitiesModule, declarations: [BgColorDirective,
        BorderDirective,
        RoundedDirective,
        TextColorDirective,
        AlignDirective], imports: [CommonModule], exports: [BgColorDirective,
        BorderDirective,
        RoundedDirective,
        TextColorDirective,
        AlignDirective] });
UtilitiesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: UtilitiesModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: UtilitiesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BgColorDirective,
                        BorderDirective,
                        RoundedDirective,
                        TextColorDirective,
                        AlignDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        BgColorDirective,
                        BorderDirective,
                        RoundedDirective,
                        TextColorDirective,
                        AlignDirective
                    ]
                }]
        }] });

class WidgetStatAComponent {
    constructor() {
        this.templates = {};
    }
    get hostClasses() {
        return {
            'card': true,
            [`bg-${this.color}`]: !!this.color,
            'text-high-emphasis-inverse': !!this.color
        };
    }
    get bodyClasses() {
        return {
            'pb-0': true,
            'd-flex': true,
            'justify-content-between': true,
            'align-items-start': true,
        };
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
}
WidgetStatAComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatAComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatAComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatAComponent, selector: "c-widget-stat-a", inputs: { color: "color", title: "title", value: "value" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cWidgetStatA"], ngImport: i0, template: "<ng-container>\n  <c-card-body [ngClass]=\"bodyClasses\">\n    <div>\n      <div *ngIf=\"!!value || templates?.widgetValueTemplate\" class=\"fs-4 fw-semibold\">\n        <ng-container *ngTemplateOutlet=\"templates?.widgetValueTemplate || defaultWidgetValueTemplate\"></ng-container>\n      </div>\n      <div *ngIf=\"!!title || templates?.widgetTitleTemplate\">\n        <ng-container *ngTemplateOutlet=\"templates?.widgetTitleTemplate || defaultWidgetTitleTemplate\"></ng-container>\n      </div>\n    </div>\n    <ng-container *ngTemplateOutlet=\"templates?.widgetActionTemplate || defaultWidgetActionTemplate\"></ng-container>\n  </c-card-body>\n  <ng-container *ngTemplateOutlet=\"templates?.widgetChartTemplate || defaultWidgetChartTemplate\"></ng-container>\n</ng-container>\n\n<ng-template #defaultWidgetTitleTemplate>\n  {{title}}\n</ng-template>\n\n<ng-template #defaultWidgetValueTemplate>\n  {{value}}\n</ng-template>\n\n<ng-template #defaultWidgetChartTemplate>\n  <ng-content select=\".chart-wrapper\"></ng-content>\n</ng-template>\n\n<ng-template #defaultWidgetActionTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatAComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-a', exportAs: 'cWidgetStatA', template: "<ng-container>\n  <c-card-body [ngClass]=\"bodyClasses\">\n    <div>\n      <div *ngIf=\"!!value || templates?.widgetValueTemplate\" class=\"fs-4 fw-semibold\">\n        <ng-container *ngTemplateOutlet=\"templates?.widgetValueTemplate || defaultWidgetValueTemplate\"></ng-container>\n      </div>\n      <div *ngIf=\"!!title || templates?.widgetTitleTemplate\">\n        <ng-container *ngTemplateOutlet=\"templates?.widgetTitleTemplate || defaultWidgetTitleTemplate\"></ng-container>\n      </div>\n    </div>\n    <ng-container *ngTemplateOutlet=\"templates?.widgetActionTemplate || defaultWidgetActionTemplate\"></ng-container>\n  </c-card-body>\n  <ng-container *ngTemplateOutlet=\"templates?.widgetChartTemplate || defaultWidgetChartTemplate\"></ng-container>\n</ng-container>\n\n<ng-template #defaultWidgetTitleTemplate>\n  {{title}}\n</ng-template>\n\n<ng-template #defaultWidgetValueTemplate>\n  {{value}}\n</ng-template>\n\n<ng-template #defaultWidgetChartTemplate>\n  <ng-content select=\".chart-wrapper\"></ng-content>\n</ng-template>\n\n<ng-template #defaultWidgetActionTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], title: [{
                type: Input
            }], value: [{
                type: Input
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class WidgetStatBComponent extends CardComponent {
    constructor() {
        super();
        this._inverse = false;
    }
    /**
     * Invert colors from their default dark shade.
     * @type boolean
     */
    get inverse() {
        return this._inverse;
    }
    set inverse(value) {
        this._inverse = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            'card': true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
            'text-high-emphasis-inverse': !!this.color
        };
    }
}
WidgetStatBComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatBComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatBComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatBComponent, selector: "c-widget-stat-b", inputs: { color: "color", textColor: "textColor", title: "title", text: "text", value: "value", inverse: "inverse" }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cWidgetStatB"], usesInheritance: true, ngImport: i0, template: "<c-card-body>\n  <div *ngIf=\"!!value\" class=\"fs-4 fw-semibold\">{{value}}</div>\n  <div *ngIf=\"!!title\">{{title}}</div>\n  <ng-content></ng-content>\n  <small *ngIf=\"text\" [ngClass]=\"inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'\">\n    {{text}}\n  </small>\n</c-card-body>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatBComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-b', exportAs: 'cWidgetStatB', template: "<c-card-body>\n  <div *ngIf=\"!!value\" class=\"fs-4 fw-semibold\">{{value}}</div>\n  <div *ngIf=\"!!title\">{{title}}</div>\n  <ng-content></ng-content>\n  <small *ngIf=\"text\" [ngClass]=\"inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'\">\n    {{text}}\n  </small>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], title: [{
                type: Input
            }], text: [{
                type: Input
            }], value: [{
                type: Input
            }], inverse: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class WidgetStatCComponent extends CardComponent {
    constructor() {
        super();
        this._inverse = false;
        this.templates = {};
    }
    /**
     * Invert colors from their default dark shade.
     * @type boolean
     */
    get inverse() {
        return this._inverse;
    }
    set inverse(value) {
        this._inverse = coerceBooleanProperty(value);
    }
    get hostExtendedClass() {
        return {
            'high-emphasis-inverse': this.inverse
        };
    }
    get iconClasses() {
        return {
            'mb-4': !this.textColor,
            'text-end': true,
            'text-medium-emphasis': !this.inverse,
            'text-medium-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    get titleClasses() {
        return {
            'text-medium-emphasis': !this.inverse,
            'text-medium-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    get valueClasses() {
        return {
            'fs-4': !this.textColor,
            'fw-semibold': true,
            'text-high-emphasis': !this.inverse,
            'text-high-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
}
WidgetStatCComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatCComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatCComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatCComponent, selector: "c-widget-stat-c", inputs: { icon: "icon", title: "title", value: "value", inverse: "inverse" }, host: { properties: { "class": "this.hostExtendedClass" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cWidgetStatC"], usesInheritance: true, ngImport: i0, template: "<c-card-body>\n  <div *ngIf=\"icon || templates?.widgetIconTemplate\" [ngClass]=\"iconClasses\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n  </div>\n  <div *ngIf=\"!!value\" [ngClass]=\"valueClasses\">\n    {{value}}\n  </div>\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">\n    {{title}}\n  </div>\n  <ng-container *ngIf=\"templates?.widgetProgressTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetProgressTemplate || defaultWidgetProgressTemplate\"></ng-container>\n  </ng-container>\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{icon}}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatCComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-c', exportAs: 'cWidgetStatC', template: "<c-card-body>\n  <div *ngIf=\"icon || templates?.widgetIconTemplate\" [ngClass]=\"iconClasses\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n  </div>\n  <div *ngIf=\"!!value\" [ngClass]=\"valueClasses\">\n    {{value}}\n  </div>\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">\n    {{title}}\n  </div>\n  <ng-container *ngIf=\"templates?.widgetProgressTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetProgressTemplate || defaultWidgetProgressTemplate\"></ng-container>\n  </ng-container>\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{icon}}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { icon: [{
                type: Input
            }], title: [{
                type: Input
            }], value: [{
                type: Input
            }], inverse: [{
                type: Input
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], hostExtendedClass: [{
                type: HostBinding,
                args: ['class']
            }] } });

class WidgetStatDComponent {
    constructor() {
    }
    get hostClasses() {
        return {
            'card': true
        };
    }
    get headerClasses() {
        return {
            'position-relative': true,
            'd-flex': true,
            'justify-content-center': true,
            'align-items-center': true,
            [`bg-${this.color}`]: this.color,
        };
    }
}
WidgetStatDComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatDComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatDComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatDComponent, selector: "c-widget-stat-d", inputs: { color: "color", values: "values" }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cWidgetStatD"], ngImport: i0, template: "<c-card-header [ngClass]=\"headerClasses\">\n  <ng-content></ng-content>\n</c-card-header>\n<c-card-body cRow class=\"text-center\">\n  <ng-template [ngForOf]=\"values\" let-i=\"index\" let-item ngFor>\n    <div *ngIf=\"i % 2 !== 0\" class=\"vr\"></div>\n    <c-col>\n      <div class=\"fs-5 fw-semibold\">{{item.value}}</div>\n      <div class=\"text-uppercase text-medium-emphasis small\">{{item.title}}</div>\n    </c-col>\n  </ng-template>\n</c-card-body>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "component", type: CardHeaderComponent, selector: "c-card-header, [c-card-header]" }, { kind: "component", type: ColComponent, selector: "c-col" }, { kind: "directive", type: RowDirective, selector: "[cRow]", inputs: ["xs", "sm", "md", "lg", "xl", "xxl"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatDComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-d', exportAs: 'cWidgetStatD', template: "<c-card-header [ngClass]=\"headerClasses\">\n  <ng-content></ng-content>\n</c-card-header>\n<c-card-body cRow class=\"text-center\">\n  <ng-template [ngForOf]=\"values\" let-i=\"index\" let-item ngFor>\n    <div *ngIf=\"i % 2 !== 0\" class=\"vr\"></div>\n    <c-col>\n      <div class=\"fs-5 fw-semibold\">{{item.value}}</div>\n      <div class=\"text-uppercase text-medium-emphasis small\">{{item.title}}</div>\n    </c-col>\n  </ng-template>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], values: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class WidgetStatEComponent extends CardComponent {
    constructor() {
        super();
    }
    get titleClasses() {
        return {
            'text-medium-emphasis': !this.textColor,
            'small': true,
            'text-uppercase': true,
            'fw-semibold': true,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
}
WidgetStatEComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatEComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatEComponent, selector: "c-widget-stat-e", inputs: { title: "title", value: "value" }, exportAs: ["cWidgetStatE"], usesInheritance: true, ngImport: i0, template: "<c-card-body class=\"text-center\">\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">{{title}}</div>\n  <div *ngIf=\"!!value\" class=\"fs-6 fw-semibold py-3\">{{value}}</div>\n  <ng-content></ng-content>\n</c-card-body>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-e', exportAs: 'cWidgetStatE', template: "<c-card-body class=\"text-center\">\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">{{title}}</div>\n  <div *ngIf=\"!!value\" class=\"fs-6 fw-semibold py-3\">{{value}}</div>\n  <ng-content></ng-content>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

class WidgetStatFComponent {
    constructor() {
        this._padding = false;
        this.templates = {};
    }
    /**
     * Set padding of your component.
     * @type boolean
     */
    get padding() {
        return this._padding;
    }
    set padding(value) {
        this._padding = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            card: true
        };
    }
    get cardBodyClasses() {
        return {
            'd-flex': true,
            'align-items-center': true,
            'p-0': !this.padding,
        };
    }
    get iconClasses() {
        return {
            'me-3': !this.textColor,
            'text-white': true,
            [`bg-${this.color}`]: !!this.color,
            'p-3': this.padding,
            'p-4': !this.padding,
        };
    }
    get titleClasses() {
        return {
            'text-medium-emphasis': !this.textColor,
            'small': true,
            'text-uppercase': true,
            'fw-semibold': true,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    get valueClasses() {
        return {
            'fs-6': !this.textColor,
            'fw-semibold': true,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
}
WidgetStatFComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatFComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatFComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatFComponent, selector: "c-widget-stat-f", inputs: { color: "color", textColor: "textColor", footer: "footer", icon: "icon", padding: "padding", title: "title", value: "value" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cWidgetStatB"], ngImport: i0, template: "<ng-container>\n  <c-card-body [ngClass]=\"cardBodyClasses\">\n    <div [ngClass]=\"iconClasses\">\n      <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n    </div>\n    <div>\n      <div [ngClass]=\"valueClasses\">{{value}}</div>\n      <div [ngClass]=\"titleClasses\">{{title}}</div>\n    </div>\n  </c-card-body>\n  <c-card-footer *ngIf=\"footer || templates?.widgetFooterTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetFooterTemplate || defaultFooterIconTemplate\"></ng-container>\n  </c-card-footer>\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{icon}}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{footer}}</span>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "component", type: CardFooterComponent, selector: "c-card-footer, [c-card-footer]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatFComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-f', exportAs: 'cWidgetStatB', template: "<ng-container>\n  <c-card-body [ngClass]=\"cardBodyClasses\">\n    <div [ngClass]=\"iconClasses\">\n      <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n    </div>\n    <div>\n      <div [ngClass]=\"valueClasses\">{{value}}</div>\n      <div [ngClass]=\"titleClasses\">{{title}}</div>\n    </div>\n  </c-card-body>\n  <c-card-footer *ngIf=\"footer || templates?.widgetFooterTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetFooterTemplate || defaultFooterIconTemplate\"></ng-container>\n  </c-card-footer>\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{icon}}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{footer}}</span>\n</ng-template>\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], footer: [{
                type: Input
            }], icon: [{
                type: Input
            }], padding: [{
                type: Input
            }], title: [{
                type: Input
            }], value: [{
                type: Input
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class WidgetModule {
}
WidgetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WidgetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: WidgetModule, declarations: [WidgetStatAComponent,
        WidgetStatBComponent,
        WidgetStatCComponent,
        WidgetStatDComponent,
        WidgetStatEComponent,
        WidgetStatFComponent], imports: [CommonModule,
        CardModule,
        GridModule], exports: [WidgetStatAComponent,
        WidgetStatBComponent,
        WidgetStatCComponent,
        WidgetStatDComponent,
        WidgetStatEComponent,
        WidgetStatFComponent] });
WidgetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetModule, imports: [CommonModule,
        CardModule,
        GridModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        WidgetStatAComponent,
                        WidgetStatBComponent,
                        WidgetStatCComponent,
                        WidgetStatDComponent,
                        WidgetStatEComponent,
                        WidgetStatFComponent
                    ],
                    imports: [
                        CommonModule,
                        CardModule,
                        GridModule,
                    ],
                    exports: [
                        WidgetStatAComponent,
                        WidgetStatBComponent,
                        WidgetStatCComponent,
                        WidgetStatDComponent,
                        WidgetStatEComponent,
                        WidgetStatFComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of coreui-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionButtonDirective, AccordionComponent, AccordionItemComponent, AccordionModule, AlertComponent, AlertHeadingDirective, AlertLinkDirective, AlertModule, AlignDirective, AvatarComponent, AvatarModule, BadgeComponent, BadgeModule, BgColorDirective, BorderDirective, BreadcrumbComponent, BreadcrumbItemComponent, BreadcrumbModule, BreadcrumbRouterComponent, BreadcrumbRouterService, BreakpointInfix, ButtonCloseDirective, ButtonDirective, ButtonGroupComponent, ButtonGroupModule, ButtonModule, ButtonToolbarComponent, CalloutComponent, CalloutModule, CardBodyComponent, CardComponent, CardFooterComponent, CardGroupComponent, CardHeaderActionsComponent, CardHeaderComponent, CardImgDirective, CardImgOverlayComponent, CardLinkDirective, CardModule, CardSubtitleDirective, CardTextDirective, CardTitleDirective, CarouselCaptionComponent, CarouselComponent, CarouselConfig, CarouselControlComponent, CarouselIndicatorsComponent, CarouselInnerComponent, CarouselItemComponent, CarouselModule, ClassToggleService, ColComponent, ColDirective, CollapseDirective, CollapseModule, ContainerComponent, DropdownCloseDirective, DropdownComponent, DropdownDividerDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownItemPlainDirective, DropdownMenuDirective, DropdownModule, DropdownService, DropdownToggleDirective, FooterComponent, FooterModule, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, FormControlDirective, FormDirective, FormFeedbackComponent, FormFloatingDirective, FormLabelDirective, FormModule, FormSelectDirective, FormTextDirective, GridModule, GutterDirective, HeaderBrandComponent, HeaderComponent, HeaderDividerComponent, HeaderModule, HeaderNavComponent, HeaderTextComponent, HeaderTogglerDirective, HtmlAttributesDirective, ImgDirective, ImgModule, InputGroupComponent, InputGroupTextDirective, IntersectionService, ListGroupDirective, ListGroupItemDirective, ListGroupModule, ModalBodyComponent, ModalComponent, ModalContentComponent, ModalDialogComponent, ModalFooterComponent, ModalHeaderComponent, ModalModule, ModalService, ModalTitleDirective, ModalToggleDirective, NavComponent, NavItemComponent, NavLinkDirective, NavModule, NavbarBrandDirective, NavbarComponent, NavbarModule, NavbarNavComponent, NavbarTextComponent, NavbarTogglerDirective, OffcanvasBodyComponent, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasModule, OffcanvasService, OffcanvasTitleDirective, OffcanvasToggleDirective, PageItemComponent, PageItemDirective, PageLinkDirective, PaginationComponent, PaginationModule, PlaceholderAnimationDirective, PlaceholderDirective, PlaceholderModule, PopoverComponent, PopoverDirective, PopoverModule, ProgressBarComponent, ProgressComponent, ProgressModule, RoundedDirective, RowComponent, RowDirective, SharedModule, SidebarBrandComponent, SidebarComponent, SidebarFooterComponent, SidebarHeaderComponent, SidebarModule, SidebarNavComponent, SidebarService, SidebarToggleDirective, SidebarTogglerComponent, SpinnerComponent, SpinnerModule, TabContentComponent, TabContentRefDirective, TabPaneComponent, TabService, TableActiveDirective, TableColorDirective, TableDirective, TableModule, TabsModule, TemplateIdDirective, TextColorDirective, ToastBodyComponent, ToastCloseDirective, ToastComponent, ToastHeaderComponent, ToastModule, ToasterComponent, ToasterHostDirective, ToasterPlacement, ToasterService, TooltipComponent, TooltipDirective, TooltipModule, UtilitiesModule, WidgetModule, WidgetStatAComponent, WidgetStatBComponent, WidgetStatCComponent, WidgetStatDComponent, WidgetStatEComponent, WidgetStatFComponent };
//# sourceMappingURL=coreui-angular.mjs.map
