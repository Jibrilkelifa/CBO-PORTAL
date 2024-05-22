import { Component, ContentChild, Directive, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Optional, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { filter } from 'rxjs/operators';
import { createPopper } from '@popperjs/core';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { DropdownService } from '../dropdown.service';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
// lightweight injection token
export class DropdownToken {
}
export class DropdownToggleDirective {
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
DropdownToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownToggleDirective, deps: [{ token: i0.ElementRef }, { token: i1.DropdownService }, { token: DropdownToken, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DropdownToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownToggleDirective, selector: "[cDropdownToggle]", inputs: { dropdownComponent: "dropdownComponent", disabled: "disabled", caret: "caret", split: "split" }, host: { listeners: { "click": "onClick($event)" }, properties: { "class": "this.hostClasses" } }, providers: [{ provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent) }], exportAs: ["cDropdownToggle"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownToggle]',
                    providers: [{ provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent) }],
                    exportAs: 'cDropdownToggle'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DropdownService }, { type: DropdownToken, decorators: [{
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
export class DropdownComponent {
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
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownComponent, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i1.DropdownService }], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: DropdownComponent, selector: "c-dropdown", inputs: { alignment: "alignment", autoClose: "autoClose", dark: "dark", direction: "direction", placement: "placement", popper: "popper", popperOptions: "popperOptions", variant: "variant", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "click": "onHostClick($event)" }, properties: { "class": "this.hostClasses", "style": "this.hostStyle" } }, providers: [DropdownService], queries: [{ propertyName: "_toggler", first: true, predicate: DropdownToggleDirective, descendants: true }, { propertyName: "_menu", first: true, predicate: DropdownMenuDirective, descendants: true }, { propertyName: "_menuElementRef", first: true, predicate: DropdownMenuDirective, descendants: true, read: ElementRef }], exportAs: ["cDropdown"], usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block;min-width:-moz-fit-content;min-width:fit-content}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-dropdown', template: '<ng-content></ng-content>', exportAs: 'cDropdown', providers: [DropdownService], styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block;min-width:-moz-fit-content;min-width:fit-content}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"] }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.DropdownService }]; }, propDecorators: { alignment: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9kcm9wZG93bi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUlMLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFLTCxRQUFRLEVBQ1IsTUFBTSxFQUdQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxZQUFZLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFdEQsOEJBQThCO0FBQzlCLE1BQU0sT0FBZ0IsYUFBYTtDQUFHO0FBT3RDLE1BQU0sT0FBTyx1QkFBdUI7SUFLbEMsWUFDUyxVQUFzQixFQUNyQixlQUFnQyxFQUNyQixRQUF3QjtRQUZwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQVU3Qzs7OztXQUlHO1FBQ00sYUFBUSxHQUFhLEtBQUssQ0FBQztRQUVwQzs7O1dBR0c7UUFDTSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBZWQsV0FBTSxHQUFHLEtBQUssQ0FBQztJQW5DcEIsQ0FB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QywyQkFBMkI7MkZBSzFCLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxZQUFZLFlBQ1osMkJBQTJCLFlBRTNCLFdBQVcsYUFDVixDQUFDLGVBQWUsQ0FBQzs7MEJBUXpCLE1BQU07MkJBQUMsUUFBUTtnTEFjVCxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBUUYsSUFBSTtzQkFEUCxLQUFLO2dCQWVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSztnQkFRRixNQUFNO3NCQURULEtBQUs7Z0JBZ0JGLGFBQWE7c0JBRGhCLEtBQUs7Z0JBNkNHLE9BQU87c0JBQWYsS0FBSztnQkFRRixPQUFPO3NCQURWLEtBQUs7Z0JBaUJJLGFBQWE7c0JBQXRCLE1BQU07Z0JBR2dDLFFBQVE7c0JBQTlDLFlBQVk7dUJBQUMsdUJBQXVCO2dCQUNBLEtBQUs7c0JBQXpDLFlBQVk7dUJBQUMscUJBQXFCO2dCQUN3QixlQUFlO3NCQUF6RSxZQUFZO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFTckQsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBZWhCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxPQUFPO2dCQVFaLFdBQVc7c0JBRGxCLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgY3JlYXRlUG9wcGVyLCBJbnN0YW5jZSwgT3B0aW9ucywgUGxhY2VtZW50IH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG5pbXBvcnQgeyBEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuLi9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4uL2Ryb3Bkb3duLnNlcnZpY2UnO1xuXG4vLyBsaWdodHdlaWdodCBpbmplY3Rpb24gdG9rZW5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEcm9wZG93blRva2VuIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjRHJvcGRvd25Ub2dnbGVdJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBEcm9wZG93blRva2VuLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93bkNvbXBvbmVudCkgfV0sXG4gIGV4cG9ydEFzOiAnY0Ryb3Bkb3duVG9nZ2xlJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zcGxpdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcG9wcGVyOiBCb29sZWFuSW5wdXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkcm9wZG93blNlcnZpY2U6IERyb3Bkb3duU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgZHJvcGRvd24/OiBEcm9wZG93blRva2VuXG4gICkge31cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBkaXNhYmxlZCBzdGF0ZSBmb3IgdGhlIHRvZ2dsZXIuXG4gICAqIEB0eXBlIERyb3Bkb3duQ29tcG9uZW50IHwgdW5kZWZpbmVkXG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKi9cbiAgQElucHV0KCkgZHJvcGRvd25Db21wb25lbnQ/OiBEcm9wZG93bkNvbXBvbmVudDtcblxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIHRvZ2dsZXIuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHBzZXVkbyBlbGVtZW50IGNhcmV0IG9uIHRvZ2dsZXIuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGNhcmV0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ3JlYXRlIHNwbGl0IGJ1dHRvbiBkcm9wZG93bnMgd2l0aCB2aXJ0dWFsbHkgdGhlIHNhbWUgbWFya3VwIGFzIHNpbmdsZSBidXR0b24gZHJvcGRvd25zLCBidXQgd2l0aCB0aGUgYWRkaXRpb24gb2YgYC5kcm9wZG93bi10b2dnbGUtc3BsaXRgIGNsYXNzIGZvciBwcm9wZXIgc3BhY2luZyBhcm91bmQgdGhlIGRyb3Bkb3duIGNhcmV0LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc3BsaXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zcGxpdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgc3BsaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NwbGl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc3BsaXQgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkcm9wZG93bi10b2dnbGUnOiB0aGlzLmNhcmV0LFxuICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZS1zcGxpdCc6IHRoaXMuc3BsaXQsXG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICF0aGlzLmRpc2FibGVkICYmIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnRvZ2dsZSh7IHZpc2libGU6ICd0b2dnbGUnLCBkcm9wZG93bjogdGhpcy5kcm9wZG93biB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5kcm9wZG93biA9IHRoaXMuZHJvcGRvd25Db21wb25lbnQ7XG4gICAgICB0aGlzLmRyb3Bkb3duU2VydmljZSA9IHRoaXMuZHJvcGRvd25Db21wb25lbnQ/LmRyb3Bkb3duU2VydmljZTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY0Ryb3Bkb3duJyxcbiAgcHJvdmlkZXJzOiBbRHJvcGRvd25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kYXJrOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXNpYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBkcm9wZG93blNlcnZpY2U6IERyb3Bkb3duU2VydmljZVxuICApIHtcbiAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYWxpZ25tZW50IG9mIGRyb3Bkb3duIG1lbnUuXG4gICAqIEB0eXBlIHsnc3RhcnQnIHwgJ2VuZCcgfCB7IHhzOiAnc3RhcnQnIHwgJ2VuZCcgfSB8IHsgc206ICdzdGFydCcgfCAnZW5kJyB9IHwgeyBtZDogJ3N0YXJ0JyB8ICdlbmQnIH0gfCB7IGxnOiAnc3RhcnQnIHwgJ2VuZCcgfSB8IHsgeGw6ICdzdGFydCcgfCAnZW5kJ30gfCB7IHh4bDogJ3N0YXJ0JyB8ICdlbmQnfX1cbiAgICovXG4gIEBJbnB1dCgpIGFsaWdubWVudD86IHN0cmluZztcblxuICBASW5wdXQoKSBhdXRvQ2xvc2U6IGJvb2xlYW4gfCAnaW5zaWRlJyB8ICdvdXRzaWRlJyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFNldHMgYSBkYXJrZXIgY29sb3Igc2NoZW1lIHRvIG1hdGNoIGEgZGFyayBuYXZiYXIuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkYXJrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGFyayA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG5cbiAgZ2V0IGRhcmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhcms7XG4gIH1cblxuICBwcml2YXRlIF9kYXJrID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNldHMgYSBzcGVjaWZpZWQgIGRpcmVjdGlvbiBhbmQgbG9jYXRpb24gb2YgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAqIEB0eXBlICdkcm9wdXAnIHwgJ2Ryb3BlbmQnIHwgJ2Ryb3BzdGFydCdcbiAgICovXG4gIEBJbnB1dCgpIGRpcmVjdGlvbj86ICdjZW50ZXInIHwgJ2Ryb3B1cCcgfCAnZHJvcHVwLWNlbnRlcicgfCAnZHJvcGVuZCcgfCAnZHJvcHN0YXJ0JztcblxuICAvKipcbiAgICogRGVzY3JpYmVzIHRoZSBwbGFjZW1lbnQgb2YgeW91ciBjb21wb25lbnQgYWZ0ZXIgUG9wcGVyLmpzIGhhcyBhcHBsaWVkIGFsbCB0aGUgbW9kaWZpZXJzIHRoYXQgbWF5IGhhdmUgZmxpcHBlZCBvciBhbHRlcmVkIHRoZSBvcmlnaW5hbGx5IHByb3ZpZGVkIHBsYWNlbWVudCBwcm9wZXJ0eS5cbiAgICogQHR5cGUgUGxhY2VtZW50XG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IFBsYWNlbWVudCA9ICdib3R0b20tc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIGR5bmFtaWMgcG9zaXRpb25pbmcgc2V0IHRoaXMgcHJvcGVydHkgdG8gYGZhbHNlYC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcG9wcGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcG9wcGVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBwb3BwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcHBlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3BvcHBlciA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBvcHBlciBPcHRpb25zIG9iamVjdCwgcGxhY2VtZW50IHByb3AgdGFrZXMgcHJlY2VkZW5jZSBvdmVyXG4gICAqIEB0eXBlIFBhcnRpYWw8T3B0aW9ucz5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3BwZXJPcHRpb25zKHZhbHVlOiBQYXJ0aWFsPE9wdGlvbnM+KSB7XG4gICAgdGhpcy5fcG9wcGVyT3B0aW9ucyA9IHsgLi4udGhpcy5fcG9wcGVyT3B0aW9ucywgLi4udmFsdWUgfTtcbiAgfTtcblxuICBnZXQgcG9wcGVyT3B0aW9ucygpOiBQYXJ0aWFsPE9wdGlvbnM+IHtcbiAgICBsZXQgcGxhY2VtZW50ID0gdGhpcy5wbGFjZW1lbnQ7XG4gICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnZHJvcHVwJzoge1xuICAgICAgICBwbGFjZW1lbnQgPSAndG9wLXN0YXJ0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkcm9wZW5kJzoge1xuICAgICAgICBwbGFjZW1lbnQgPSAncmlnaHQtc3RhcnQnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2Ryb3BzdGFydCc6IHtcbiAgICAgICAgcGxhY2VtZW50ID0gJ2xlZnQtc3RhcnQnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NlbnRlcic6IHtcbiAgICAgICAgcGxhY2VtZW50ID0gJ2JvdHRvbSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZHJvcHVwLWNlbnRlcic6IHtcbiAgICAgICAgcGxhY2VtZW50ID0gJ3RvcCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5hbGlnbm1lbnQgPT09ICdlbmQnKSB7XG4gICAgICBwbGFjZW1lbnQgPSAnYm90dG9tLWVuZCc7XG4gICAgfVxuICAgIHRoaXMuX3BvcHBlck9wdGlvbnMgPSB7IC4uLnRoaXMuX3BvcHBlck9wdGlvbnMsIHBsYWNlbWVudDogcGxhY2VtZW50IH07XG4gICAgcmV0dXJuIHRoaXMuX3BvcHBlck9wdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIF9wb3BwZXJPcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+ID0ge1xuICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgbW9kaWZpZXJzOiBbXSxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRyb3Bkb3duIHZhcmlhbnQgdG8gYSBidG4tZ3JvdXAsIGRyb3Bkb3duLCBpbnB1dC1ncm91cCwgYW5kIG5hdi1pdGVtLlxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudD86ICdidG4tZ3JvdXAnIHwgJ2Ryb3Bkb3duJyB8ICdpbnB1dC1ncm91cCcgfCAnbmF2LWl0ZW0nID0gJ2Ryb3Bkb3duJztcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIGRyb3Bkb3duIG1lbnUgY29tcG9uZW50LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IF92YWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgaWYgKF92YWx1ZSAhPT0gdGhpcy5fdmlzaWJsZSkge1xuICAgICAgdGhpcy5hY3RpdmVUcmFwID0gX3ZhbHVlO1xuICAgICAgdGhpcy5fdmlzaWJsZSA9IF92YWx1ZTtcbiAgICAgIF92YWx1ZSA/IHRoaXMuY3JlYXRlUG9wcGVySW5zdGFuY2UoKSA6IHRoaXMuZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChfdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaWJsZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZHJvcGRvd25Db250ZXh0ID0geyAkaW1wbGljaXQ6IHRoaXMudmlzaWJsZSB9O1xuICBAQ29udGVudENoaWxkKERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlKSBfdG9nZ2xlciE6IERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKERyb3Bkb3duTWVudURpcmVjdGl2ZSkgX21lbnUhOiBEcm9wZG93bk1lbnVEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoRHJvcGRvd25NZW51RGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgX21lbnVFbGVtZW50UmVmITogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgYWN0aXZlVHJhcCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZHJvcGRvd25TdGF0ZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwb3BwZXJJbnN0YW5jZSE6IEluc3RhbmNlIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIGxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyb3Bkb3duOlxuICAgICAgICAodGhpcy52YXJpYW50ID09PSAnZHJvcGRvd24nIHx8IHRoaXMudmFyaWFudCA9PT0gJ25hdi1pdGVtJykgJiZcbiAgICAgICAgIXRoaXMuZGlyZWN0aW9uLFxuICAgICAgW2Ake3RoaXMuZGlyZWN0aW9ufWBdOiAhIXRoaXMuZGlyZWN0aW9uLFxuICAgICAgW2Ake3RoaXMudmFyaWFudH1gXTogISF0aGlzLnZhcmlhbnQsXG4gICAgICAnZHJvcHVwJzogdGhpcy5kaXJlY3Rpb24gPT09ICdkcm9wdXAnIHx8IHRoaXMuZGlyZWN0aW9uID09PSAnZHJvcHVwLWNlbnRlcicsXG4gICAgICBzaG93OiB0aGlzLnZpc2libGVcbiAgICB9O1xuICB9XG5cbiAgLy8gdG9kbzogZmluZCBiZXR0ZXIgc29sdXRpb25cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBob3N0U3R5bGUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy52YXJpYW50ID09PSAnaW5wdXQtZ3JvdXAnID8geyBkaXNwbGF5OiAnY29udGVudHMnIH0gOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgY2xpY2tlZFRhcmdldCE6IEhUTUxFbGVtZW50O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHJpdmF0ZSBvbkhvc3RDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrZWRUYXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZHJvcGRvd25TdGF0ZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5kcm9wZG93blN0YXRlU3Vic2NyaXB0aW9uID1cbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UuZHJvcGRvd25TdGF0ZSQucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcyA9PT0gc3RhdGUuZHJvcGRvd247XG4gICAgICAgICAgfSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKCd2aXNpYmxlJyBpbiBzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGU/LnZpc2libGUgPT09ICd0b2dnbGUnXG4gICAgICAgICAgICA/IHRoaXMudG9nZ2xlRHJvcGRvd24oKVxuICAgICAgICAgICAgOiAodGhpcy52aXNpYmxlID0gc3RhdGUudmlzaWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcm9wZG93blN0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdG9nZ2xlcj8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldD8uY2xvc2VzdCgnW2NEcm9wZG93blRvZ2dsZV0nKSkpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFyaWFudCA9PT0gJ25hdi1pdGVtJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl90b2dnbGVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25hdi1saW5rJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUodGhpcy52aXNpYmxlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1sndmlzaWJsZSddICYmICFjaGFuZ2VzWyd2aXNpYmxlJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKGNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpYmUoZmFsc2UpO1xuICAgIHRoaXMuZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG4gIH1cblxuICBzZXRWaXNpYmxlU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duU2VydmljZS50b2dnbGUoeyB2aXNpYmxlOiB2YWx1ZSwgZHJvcGRvd246IHRoaXMgfSk7XG4gIH1cblxuICAvLyB0b2RvOiB0dXJuIG9mZiBwb3BwZXIgaW4gbmF2YmFyLW5hdlxuICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlciAmJiB0aGlzLl9tZW51KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIC8vIHdvcmthcm91bmQgZm9yIHBvcHBlciBwb3NpdGlvbiBjYWxjdWxhdGUgKHNlZSBhbHNvOiBkcm9wZG93bi1tZW51LmNvbXBvbmVudClcbiAgICAgICAgdGhpcy5fbWVudS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB0aGlzLl9tZW51LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaWYgKHRoaXMucG9wcGVyKSB7XG4gICAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZSA9IGNyZWF0ZVBvcHBlcihcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5fbWVudS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB7IC4uLnRoaXMucG9wcGVyT3B0aW9ucyB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIHRoaXMucG9wcGVySW5zdGFuY2U/LmRlc3Ryb3koKTtcbiAgICB0aGlzLnBvcHBlckluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHNldExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKFxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5kb2N1bWVudCwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuX21lbnVFbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrZWRUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RvZ2dsZXI/LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9DbG9zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZFRhcmdldCA9PT0gdGFyZ2V0ICYmIHRoaXMuYXV0b0Nsb3NlID09PSAnaW5zaWRlJykge1xuICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZFRhcmdldCAhPT0gdGFyZ2V0ICYmIHRoaXMuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScpIHtcbiAgICAgICAgICB0aGlzLnNldFZpc2libGVTdGF0ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5hdXRvQ2xvc2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmRvY3VtZW50LCAna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicgJiYgdGhpcy5hdXRvQ2xvc2UgIT09IGZhbHNlICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKCh1bkxpc3RlbikgPT4ge1xuICAgICAgdW5MaXN0ZW4oKTtcbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5saXN0ZW5lcnMuZmlsbCh1bmRlZmluZWQpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbn1cbiJdfQ==