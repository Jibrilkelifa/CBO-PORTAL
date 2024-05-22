import { Component, EventEmitter, HostBinding, HostListener, Inject, Input, Output, PLATFORM_ID, } from '@angular/core';
import { animate, state, style, transition, trigger, } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../offcanvas.service";
import * as i2 from "../../backdrop/backdrop.service";
import * as i3 from "@angular/cdk/a11y";
let nextId = 0;
export class OffcanvasComponent {
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
OffcanvasComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasComponent, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.OffcanvasService }, { token: i2.BackdropService }], target: i0.ɵɵFactoryTarget.Component });
OffcanvasComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: OffcanvasComponent, selector: "c-offcanvas", inputs: { backdrop: "backdrop", keyboard: "keyboard", placement: "placement", scroll: "scroll", id: "id", role: "role", ariaModal: "ariaModal", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "document:keydown": "onKeyDownHandler($event)" }, properties: { "attr.role": "this.role", "attr.aria-modal": "this.ariaModal", "class": "this.hostClasses", "attr.aria-hidden": "this.ariaHidden", "attr.tabindex": "this.tabIndex", "@showHide": "this.animateType" } }, exportAs: ["cOffcanvas"], usesOnChanges: true, ngImport: i0, template: "<div cdkTrapFocus cdkTrapFocusAutoCapture>\n  <ng-content></ng-content>\n</div>\n\n", styles: [""], dependencies: [{ kind: "directive", type: i3.CdkTrapFocus, selector: "[cdkTrapFocus]", inputs: ["cdkTrapFocus", "cdkTrapFocusAutoCapture"], exportAs: ["cdkTrapFocus"] }], animations: [
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
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.OffcanvasService }, { type: i2.BackdropService }]; }, propDecorators: { backdrop: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvb2ZmY2FudmFzL29mZmNhbnZhcy9vZmZjYW52YXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9vZmZjYW52YXMvb2ZmY2FudmFzL29mZmNhbnZhcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsTUFBTSxFQUNOLFdBQVcsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sR0FBRyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xGLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUs1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBRTlELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQXlCZixNQUFNLE9BQU8sa0JBQWtCO0lBSTdCLFlBQzRCLFFBQWEsRUFDVixVQUFlLEVBQ3BDLFFBQW1CLEVBQ25CLFdBQXVCLEVBQ3ZCLGdCQUFrQyxFQUNsQyxlQUFnQztRQUxkLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDVixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFHMUM7Ozs7V0FJRztRQUNNLGFB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b0JJLGFBQWE7c0JBQXRCLE1BQU07Z0JBUUgsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBVWhCLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxlQUFlO2dCQU14QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsV0FBVztnQkFNeEIsZ0JBQWdCO3NCQURmLFlBQVk7dUJBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPZmZjYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi4vb2ZmY2FudmFzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFja2Ryb3BTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYmFja2Ryb3AvYmFja2Ryb3Auc2VydmljZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1vZmZjYW52YXMnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2hvd0hpZGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbigndHJ1ZSA9PiBmYWxzZScsIFthbmltYXRlKCczMDBtcycpXSksXG4gICAgXSksXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9vZmZjYW52YXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vZmZjYW52YXMuY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjT2ZmY2FudmFzJyxcbn0pXG5leHBvcnQgY2xhc3MgT2ZmY2FudmFzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Njcm9sbDogQm9vbGVhbklucHV0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG9mZmNhbnZhc1NlcnZpY2U6IE9mZmNhbnZhc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBiYWNrZHJvcFNlcnZpY2U6IEJhY2tkcm9wU2VydmljZVxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBhIGJhY2tkcm9wIG9uIGJvZHkgd2hpbGUgb2ZmY2FudmFzIGlzIG9wZW4uXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCkgYmFja2Ryb3AgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIG9mZmNhbnZhcyB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZCBbZG9jc11cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBASW5wdXQoKSBrZXlib2FyZCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIENvbXBvbmVudHMgcGxhY2VtZW50LCB0aGVyZeKAmXMgbm8gZGVmYXVsdCBwbGFjZW1lbnQuXG4gICAqIEB0eXBlIHsnc3RhcnQnIHwgJ2VuZCcgfCAndG9wJyB8ICdib3R0b20nfVxuICAgKiBAZGVmYXVsdCAnc3RhcnQnXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZyB8ICdzdGFydCcgfCAnZW5kJyB8ICd0b3AnIHwgJ2JvdHRvbScgPSAnc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBib2R5IHNjcm9sbGluZyB3aGlsZSBvZmZjYW52YXMgaXMgdmlzaWJsZS5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHNjcm9sbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Njcm9sbCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG4gIGdldCBzY3JvbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbDtcbiAgfVxuICBwcml2YXRlIF9zY3JvbGwgPSBmYWxzZTtcblxuICBASW5wdXQoKSBpZCA9IGBvZmZjYW52YXMtJHt0aGlzLnBsYWNlbWVudH0tJHtuZXh0SWQrK31gO1xuICAvKipcbiAgICogRGVmYXVsdCByb2xlIGZvciBvZmZjYW52YXMuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2RpYWxvZydcbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdkaWFsb2cnO1xuXG4gIC8qKlxuICAgKiBTZXQgYXJpYS1tb2RhbCBodG1sIGF0dHIgZm9yIG9mZmNhbnZhcy4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbW9kYWwnKSBhcmlhTW9kYWwgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2Ygb2ZmY2FudmFzIGNvbXBvbmVudC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QmFja2Ryb3AodGhpcy5iYWNrZHJvcCk7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QmFja2Ryb3AoZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLnNldFNjcm9sbCgpO1xuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuICBwcml2YXRlIF92aXNpYmxlITogYm9vbGVhbjtcblxuICAvKipcbiAgICogRXZlbnQgdHJpZ2dlcmVkIG9uIHZpc2libGUgY2hhbmdlLlxuICAgKi9cbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBhY3RpdmVCYWNrZHJvcCE6IGFueTtcblxuICBwcml2YXRlIHN0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBvZmZjYW52YXM6IHRydWUsXG4gICAgICBbYG9mZmNhbnZhcy0ke3RoaXMucGxhY2VtZW50fWBdOiAhIXRoaXMucGxhY2VtZW50LFxuICAgICAgc2hvdzogdGhpcy52aXNpYmxlLFxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKVxuICBnZXQgYXJpYUhpZGRlbigpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZSA/IG51bGwgOiB0cnVlO1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCB0YWJJbmRleCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gJy0xJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnQHNob3dIaWRlJylcbiAgZ2V0IGFuaW1hdGVUeXBlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnICYmIHRoaXMua2V5Ym9hcmQgJiYgdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLm9mZmNhbnZhc1NlcnZpY2UudG9nZ2xlKHsgc2hvdzogZmFsc2UsIGlkOiB0aGlzLmlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U2Nyb2xsKCk7XG4gICAgdGhpcy5zdGF0ZVRvZ2dsZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vZmZjYW52YXNTZXJ2aWNlLnRvZ2dsZSh7IHNob3c6IGZhbHNlLCBpZDogdGhpcy5pZCB9KTtcbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snc2Nyb2xsJ10pIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGF0ZVRvZ2dsZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5zdGF0ZVRvZ2dsZVN1YnNjcmlwdGlvbiA9IHRoaXMub2ZmY2FudmFzU2VydmljZS5vZmZjYW52YXNTdGF0ZSQuc3Vic2NyaWJlKFxuICAgICAgICAoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMgPT09IGFjdGlvbi5vZmZjYW52YXMgfHwgdGhpcy5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICBpZiAoJ3Nob3cnIGluIGFjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSBhY3Rpb24/LnNob3cgPT09ICd0b2dnbGUnID8gIXRoaXMudmlzaWJsZSA6IGFjdGlvbi5zaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZVRvZ2dsZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYmFja2Ryb3BDbGlja1N1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5iYWNrZHJvcFNlcnZpY2UuYmFja2Ryb3BDbGljayQuc3Vic2NyaWJlKFxuICAgICAgICAoY2xpY2tlZCkgPT4ge1xuICAgICAgICAgIHRoaXMub2ZmY2FudmFzU2VydmljZS50b2dnbGUoeyBzaG93OiAhY2xpY2tlZCwgaWQ6IHRoaXMuaWQgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEJhY2tkcm9wKHNldEJhY2tkcm9wOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHNldEJhY2tkcm9wKSB7XG4gICAgICB0aGlzLmFjdGl2ZUJhY2tkcm9wID0gdGhpcy5iYWNrZHJvcFNlcnZpY2Uuc2V0QmFja2Ryb3AoJ29mZmNhbnZhcycpO1xuICAgICAgdGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaWJlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQmFja2Ryb3AgPSB0aGlzLmJhY2tkcm9wU2VydmljZS5jbGVhckJhY2tkcm9wKHRoaXMuYWN0aXZlQmFja2Ryb3ApO1xuICAgICAgdGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBzZXRGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgIGlmICghdGhpcy5zY3JvbGwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdwYWRkaW5nUmlnaHQucHgnLCAnMCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2Nyb2xsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmdSaWdodCcpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjZGtUcmFwRm9jdXMgY2RrVHJhcEZvY3VzQXV0b0NhcHR1cmU+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuXG4iXX0=