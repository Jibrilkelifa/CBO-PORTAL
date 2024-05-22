import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, Output, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import * as i0 from "@angular/core";
import * as i1 from "../modal.service";
import * as i2 from "../../backdrop/backdrop.service";
import * as i3 from "@angular/cdk/a11y";
import * as i4 from "../modal-content/modal-content.component";
import * as i5 from "../modal-dialog/modal-dialog.component";
export class ModalComponent {
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
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalComponent, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.ModalService }, { token: i2.BackdropService }], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalComponent, selector: "c-modal", inputs: { alignment: "alignment", backdrop: "backdrop", fullscreen: "fullscreen", keyboard: "keyboard", id: "id", size: "size", transition: "transition", role: "role", ariaModal: "ariaModal", scrollable: "scrollable", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "@showHide.start": "animateStart($event)", "@showHide.done": "animateDone($event)", "document:keyup": "onKeyDownHandler($event)", "mousedown": "onMouseDownHandler($event)", "click": "onClickHandler($event)" }, properties: { "attr.role": "this.role", "attr.aria-modal": "this.ariaModal", "class": "this.hostClasses", "attr.aria-hidden": "this.ariaHidden", "attr.tabindex": "this.tabIndex", "@showHide": "this.animateTrigger" } }, viewQueries: [{ propertyName: "modalContent", first: true, predicate: ModalContentComponent, descendants: true, read: ElementRef }], exportAs: ["cModal"], ngImport: i0, template: "<c-modal-dialog\n  [alignment]=\"alignment\"\n  [fullscreen]=\"fullscreen\"\n  [scrollable]=\"scrollable\"\n  [size]=\"size\">\n  <c-modal-content>\n    <div [cdkTrapFocus]=\"visible\" [cdkTrapFocusAutoCapture]=\"visible\" style=\"display: contents;\">\n      <ng-content></ng-content>\n    </div>\n  </c-modal-content>\n</c-modal-dialog>\n", styles: [""], dependencies: [{ kind: "directive", type: i3.CdkTrapFocus, selector: "[cdkTrapFocus]", inputs: ["cdkTrapFocus", "cdkTrapFocusAutoCapture"], exportAs: ["cdkTrapFocus"] }, { kind: "component", type: i4.ModalContentComponent, selector: "c-modal-content" }, { kind: "component", type: i5.ModalDialogComponent, selector: "c-modal-dialog", inputs: ["alignment", "fullscreen", "scrollable", "size"] }], animations: [
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
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.ModalService }, { type: i2.BackdropService }]; }, propDecorators: { alignment: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9tb2RhbC9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL21vZGFsL21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBa0IsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7O0FBeUJqRixNQUFNLE9BQU8sY0FBYztJQUt6QixZQUM0QixRQUFrQixFQUNwQyxRQUFtQixFQUNuQixXQUF1QixFQUN2QixZQUEwQixFQUMxQixlQUFnQztRQUpkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFHMUM7Ozs7V0FJRztRQUNNLGNBQVMsR0FBc0IsS0FBSyxDQUFDO1FBQzlDOzs7O1dBSUc7UUFDTSxhQUFRLEdBQXVCLElBQUks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M0MsV0FBVztzQkFEVixZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQWExQyxnQkFBZ0I7c0JBRGYsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFjbkMsa0JBQWtCO3NCQUR4QixZQUFZO3VCQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFNOUIsY0FBYztzQkFEcEIsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25FdmVudCwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9iYWNrZHJvcC9iYWNrZHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL21vZGFsLWNvbnRlbnQvbW9kYWwtY29udGVudC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLW1vZGFsJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Nob3dIaWRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICd2aXNpYmxlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIC8vIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2hpZGRlbicsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAvLyBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCd2aXNpYmxlIDw9PiAqJywgW2FuaW1hdGUoJzMwMG1zJyldKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY01vZGFsJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2Nyb2xsYWJsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlzaWJsZTogQm9vbGVhbklucHV0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBiYWNrZHJvcFNlcnZpY2U6IEJhY2tkcm9wU2VydmljZVxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBBbGlnbiB0aGUgbW9kYWwgaW4gdGhlIGNlbnRlciBvciB0b3Agb2YgdGhlIHNjcmVlbi5cbiAgICogQHR5cGUgeyd0b3AnIHwgJ2NlbnRlcid9XG4gICAqIEBkZWZhdWx0ICd0b3AnXG4gICAqL1xuICBASW5wdXQoKSBhbGlnbm1lbnQ/OiAndG9wJyB8ICdjZW50ZXInID0gJ3RvcCc7XG4gIC8qKlxuICAgKiBBcHBseSBhIGJhY2tkcm9wIG9uIGJvZHkgd2hpbGUgbW9kYWwgaXMgb3Blbi5cbiAgICogQHR5cGUgYm9vbGVhbiB8ICdzdGF0aWMnXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIEBJbnB1dCgpIGJhY2tkcm9wOiBib29sZWFuIHwgJ3N0YXRpYycgPSB0cnVlO1xuICAvKipcbiAgICogU2V0IG1vZGFsIHRvIGNvdmVyIHRoZSBlbnRpcmUgdXNlciB2aWV3cG9ydC5cbiAgICogQHR5cGUge2Jvb2xlYW4gfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCd9XG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKi9cbiAgQElucHV0KCkgZnVsbHNjcmVlbj86IGJvb2xlYW4gfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIEBJbnB1dCgpIGtleWJvYXJkID0gdHJ1ZTtcbiAgQElucHV0KCkgaWQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTaXplIHRoZSBjb21wb25lbnQgc21hbGwsIGxhcmdlLCBvciBleHRyYSBsYXJnZS5cbiAgICovXG4gIEBJbnB1dCgpIHNpemU/OiAnc20nIHwgJ2xnJyB8ICd4bCc7XG4gIC8qKlxuICAgKiBSZW1vdmUgYW5pbWF0aW9uIHRvIGNyZWF0ZSBtb2RhbCB0aGF0IHNpbXBseSBhcHBlYXIgcmF0aGVyIHRoYW4gZmFkZSBpbiB0byB2aWV3LlxuICAgKi9cbiAgQElucHV0KCkgdHJhbnNpdGlvbiA9IHRydWU7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHJvbGUgZm9yIG1vZGFsLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdkaWFsb2cnXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnZGlhbG9nJztcbiAgLyoqXG4gICAqIFNldCBhcmlhLW1vZGFsIGh0bWwgYXR0ciBmb3IgbW9kYWwuIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLW1vZGFsJykgYXJpYU1vZGFsID0gdHJ1ZTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2Nyb2xsYWJsZSBtb2RhbCB0aGF0IGFsbG93cyBzY3JvbGxpbmcgdGhlIG1vZGFsIGJvZHkuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGxhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2Nyb2xsYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgc2Nyb2xsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgX3Njcm9sbGFibGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIG1vZGFsIGNvbXBvbmVudC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl92aXNpYmxlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnNldEJhY2tkcm9wKHRoaXMuYmFja2Ryb3AgIT09IGZhbHNlICYmIG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuc2V0Qm9keVN0eWxlcyhuZXdWYWx1ZSk7XG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwcml2YXRlIF92aXNpYmxlITogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXZlbnQgdHJpZ2dlcmVkIG9uIG1vZGFsIGRpc21pc3MuXG4gICAqL1xuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKE1vZGFsQ29udGVudENvbXBvbmVudCwgeyByZWFkOiBFbGVtZW50UmVmIH0pIG1vZGFsQ29udGVudCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgYWN0aXZlQmFja2Ryb3AhOiBhbnk7XG4gIHByaXZhdGUgc3RhdGVUb2dnbGVTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gcHJpdmF0ZSBpbkJvdW5kaW5nQ2xpZW50UmVjdCE6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgIGZhZGU6IHRoaXMudHJhbnNpdGlvbixcbiAgICAgIHNob3c6IHRoaXMuc2hvd1xuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKVxuICBnZXQgYXJpYUhpZGRlbigpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZSA/IG51bGwgOiB0cnVlO1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCB0YWJJbmRleCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gJy0xJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnQHNob3dIaWRlJylcbiAgZ2V0IGFuaW1hdGVUcmlnZ2VyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICB9XG5cbiAgZ2V0IHNob3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZSAmJiB0aGlzLl9zaG93O1xuICB9XG5cbiAgc2V0IHNob3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93ID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9zaG93ID0gdHJ1ZTtcblxuICBwcml2YXRlIGdldCBzY3JvbGxiYXJXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBNYXRoLmFicygod2luZG93Py5pbm5lcldpZHRoID8/IGRvY3VtZW50V2lkdGgpIC0gZG9jdW1lbnRXaWR0aCk7XG4gICAgcmV0dXJuIGAke3Njcm9sbGJhcldpZHRofXB4YDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ0BzaG93SGlkZS5zdGFydCcsIFsnJGV2ZW50J10pXG4gIGFuaW1hdGVTdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuc2Nyb2xsYmFyV2lkdGg7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICd2aXNpYmxlJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcsIHNjcm9sbGJhcldpZHRoKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdibG9jaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ0BzaG93SGlkZS5kb25lJywgWyckZXZlbnQnXSlcbiAgYW5pbWF0ZURvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdvdmVyZmxvdycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNob3cgPSB0aGlzLnZpc2libGU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXG4gIG9uS2V5RG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiB0aGlzLmtleWJvYXJkICYmIHRoaXMudmlzaWJsZSkge1xuICAgICAgaWYgKHRoaXMuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGljQmFja2Ryb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnRvZ2dsZSh7IHNob3c6IGZhbHNlLCBtb2RhbDogdGhpcyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdXNlRG93blRhcmdldDogRXZlbnRUYXJnZXQgfCBudWxsID0gbnVsbDtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Nb3VzZURvd25IYW5kbGVyKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubW91c2VEb3duVGFyZ2V0ID0gJGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2tIYW5kbGVyKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMubW91c2VEb3duVGFyZ2V0ICE9PSAkZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLm1vdXNlRG93blRhcmdldCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9ICRldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuXG4gICAgICBpZiAodGhpcy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0aWNCYWNrZHJvcCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnRvZ2dsZSh7IHNob3c6IGZhbHNlLCBtb2RhbDogdGhpcyB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS50b2dnbGUoeyBzaG93OiBmYWxzZSwgbW9kYWw6IHRoaXMgfSk7XG4gICAgdGhpcy5zdGF0ZVRvZ2dsZVN1YnNjcmliZShmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRlVG9nZ2xlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uID0gdGhpcy5tb2RhbFNlcnZpY2UubW9kYWxTdGF0ZSQuc3Vic2NyaWJlKFxuICAgICAgICAoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMgPT09IGFjdGlvbi5tb2RhbCB8fCB0aGlzLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIGlmICgnc2hvdycgaW4gYWN0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGFjdGlvbj8uc2hvdyA9PT0gJ3RvZ2dsZScgPyAhdGhpcy52aXNpYmxlIDogYWN0aW9uLnNob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRCYWNrZHJvcChzZXRCYWNrZHJvcDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzZXRCYWNrZHJvcCkge1xuICAgICAgdGhpcy5hY3RpdmVCYWNrZHJvcCA9IHRoaXMuYmFja2Ryb3BTZXJ2aWNlLnNldEJhY2tkcm9wKCdtb2RhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUJhY2tkcm9wID0gdGhpcy5iYWNrZHJvcFNlcnZpY2UuY2xlYXJCYWNrZHJvcCh0aGlzLmFjdGl2ZUJhY2tkcm9wKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEJvZHlTdHlsZXMob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBpZiAodGhpcy5iYWNrZHJvcCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdGF0aWNCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21vZGFsLXN0YXRpYycpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW9kYWwtc3RhdGljJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cteScpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxjLW1vZGFsLWRpYWxvZ1xuICBbYWxpZ25tZW50XT1cImFsaWdubWVudFwiXG4gIFtmdWxsc2NyZWVuXT1cImZ1bGxzY3JlZW5cIlxuICBbc2Nyb2xsYWJsZV09XCJzY3JvbGxhYmxlXCJcbiAgW3NpemVdPVwic2l6ZVwiPlxuICA8Yy1tb2RhbC1jb250ZW50PlxuICAgIDxkaXYgW2Nka1RyYXBGb2N1c109XCJ2aXNpYmxlXCIgW2Nka1RyYXBGb2N1c0F1dG9DYXB0dXJlXT1cInZpc2libGVcIiBzdHlsZT1cImRpc3BsYXk6IGNvbnRlbnRzO1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2MtbW9kYWwtY29udGVudD5cbjwvYy1tb2RhbC1kaWFsb2c+XG4iXX0=