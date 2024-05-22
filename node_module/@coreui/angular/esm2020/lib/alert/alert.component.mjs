import { Component, ContentChildren, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplateIdDirective } from '../shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button-close.directive";
export class AlertComponent {
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
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AlertComponent, selector: "c-alert", inputs: { color: "color", dismissible: "dismissible", fade: "fade", role: "role", variant: "variant", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "@fadeInOut.start": "onAnimationStart($event)", "@fadeInOut.done": "onAnimationDone($event)" }, properties: { "attr.role": "this.role", "@.disabled": "this.animationDisabled", "@fadeInOut": "this.animateType", "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cAlert"], ngImport: i0, template: "<ng-container *ngIf=\"visible || !hide\">\n  <ng-template [ngIf]=\"dismissible\">\n    <ng-container *ngTemplateOutlet=\"templates?.alertButtonCloseTemplate || defaultAlertButtonCloseTemplate\">\n    </ng-container>\n  </ng-template>\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #defaultAlertButtonCloseTemplate>\n  <button (click)=\"visible=false\" aria-label=\"Close\" cButtonClose></button>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.ButtonCloseDirective, selector: "[cButtonClose]", inputs: ["white"] }], animations: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBa0IsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQTZCaEQsTUFBTSxPQUFPLGNBQWM7SUF6QjNCO1FBZ0NFOzs7OztXQUtHO1FBQ00sVUFBSyxHQUFXLFNBQVMsQ0FBQztRQWEzQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQWFyQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXRCOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsT0FBTyxDQUFDO1FBc0JoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXhCOztXQUVHO1FBQ08sa0JBQWEsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwRSxjQUFTLEdBQVEsRUFBRSxDQUFDO0tBbURyQjtJQWhIQzs7O09BR0c7SUFDSCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFlB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QUdyRCxpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsWUFBWTtnQkFNckIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLFlBQVk7Z0JBTXJCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPO2dCQWNwQixnQkFBZ0I7c0JBRGYsWUFBWTt1QkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFNNUMsZUFBZTtzQkFEZCxZQUFZO3VCQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgVGVtcGxhdGVJZERpcmVjdGl2ZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbnR5cGUgQW5pbWF0ZVR5cGUgPSAoJ2hpZGUnIHwgJ3Nob3cnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY0FsZXJ0JyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZhZGVJbk91dCcsIFtcbiAgICAgIHN0YXRlKCdzaG93Jywgc3R5bGUoe29wYWNpdHk6IDEsIGhlaWdodDogJyonLCBwYWRkaW5nOiAnKicsIGJvcmRlcjogJyonLCBtYXJnaW46ICcqJ30pKSxcbiAgICAgIHN0YXRlKCdoaWRlJywgc3R5bGUoe29wYWNpdHk6IDAsIGhlaWdodDogMCwgcGFkZGluZzogMCwgYm9yZGVyOiAwLCBtYXJnaW46IDB9KSksXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtvcGFjaXR5OiAwLCBoZWlnaHQ6IDAsIHBhZGRpbmc6IDAsIGJvcmRlcjogMCwgbWFyZ2luOiAwfSkpLFxuICAgICAgdHJhbnNpdGlvbignc2hvdyA9PiBoaWRlJywgW1xuICAgICAgICBhbmltYXRlKCcuM3MgZWFzZS1vdXQnKSxcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZSA9PiBzaG93JywgW1xuICAgICAgICBhbmltYXRlKCcuM3MgZWFzZS1pbicpLFxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdzaG93ID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJy4zcyBlYXNlLW91dCcpLFxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IHNob3cnLCBbXG4gICAgICAgIGFuaW1hdGUoJy4zcyBlYXNlLWluJyksXG4gICAgICBdKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc21pc3NpYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mYWRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXNpYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgaGlkZSE6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICpcbiAgICogQHR5cGUgQ29sb3JzXG4gICAqIEBkZWZhdWx0ICdwcmltYXJ5J1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I6IENvbG9ycyA9ICdwcmltYXJ5JztcblxuICAvKipcbiAgICogT3B0aW9uYWxseSBhZGRzIGEgY2xvc2UgYnV0dG9uIHRvIGFsZXJ0IGFuZCBhbGxvdyBpdCB0byBzZWxmIGRpc21pc3MuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNtaXNzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzbWlzc2libGU7XG4gIH1cbiAgc2V0IGRpc21pc3NpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzbWlzc2libGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc21pc3NpYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFkZHMgYW5pbWF0aW9uIGZvciBkaXNtaXNzaWJsZSBhbGVydC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGZhZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhZGU7XG4gIH1cbiAgc2V0IGZhZGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mYWRlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9mYWRlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgcm9sZSBmb3IgYWxlcnQuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2FsZXJ0J1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBASW5wdXQoKSByb2xlID0gJ2FsZXJ0JztcblxuICAvKipcbiAgICogU2V0IHRoZSBhbGVydCB2YXJpYW50IHRvIGEgc29saWQuXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudD86ICdzb2xpZCcgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBhbGVydCBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl92aXNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG4gIHByaXZhdGUgX3Zpc2libGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFdmVudCB0cmlnZ2VyZWQgb24gdGhlIGFsZXJ0IGRpc21pc3MuXG4gICAqL1xuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHRlbXBsYXRlczogYW55ID0ge307XG4gIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVJZERpcmVjdGl2ZSwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgY29udGVudFRlbXBsYXRlcyE6IFF1ZXJ5TGlzdDxUZW1wbGF0ZUlkRGlyZWN0aXZlPjtcblxuICBASG9zdEJpbmRpbmcoJ0AuZGlzYWJsZWQnKVxuICBnZXQgYW5pbWF0aW9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmZhZGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ0BmYWRlSW5PdXQnKVxuICBnZXQgYW5pbWF0ZVR5cGUoKTogQW5pbWF0ZVR5cGUge1xuICAgIHJldHVybiB0aGlzLnZpc2libGUgPyAnc2hvdycgOiAnaGlkZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsZXJ0OiB0cnVlLFxuICAgICAgJ2FsZXJ0LWRpc21pc3NpYmxlJzogdGhpcy5kaXNtaXNzaWJsZSxcbiAgICAgIGZhZGU6IHRoaXMuZmFkZSxcbiAgICAgIHNob3c6ICF0aGlzLmhpZGUsXG4gICAgICBbYGFsZXJ0LSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yICYmIHRoaXMudmFyaWFudCAhPT0gJ3NvbGlkJyxcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IgJiYgdGhpcy52YXJpYW50ID09PSAnc29saWQnLFxuICAgICAgJ3RleHQtd2hpdGUnOiAhIXRoaXMuY29sb3IgJiYgdGhpcy52YXJpYW50ID09PSAnc29saWQnXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ0BmYWRlSW5PdXQuc3RhcnQnLCBbJyRldmVudCddKVxuICBvbkFuaW1hdGlvblN0YXJ0KCRldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQW5pbWF0aW9uRXZlbnQoJGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ0BmYWRlSW5PdXQuZG9uZScsIFsnJGV2ZW50J10pXG4gIG9uQW5pbWF0aW9uRG9uZSgkZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkFuaW1hdGlvbkV2ZW50KCRldmVudCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZW50VGVtcGxhdGVzLmZvckVhY2goKGNoaWxkOiBUZW1wbGF0ZUlkRGlyZWN0aXZlKSA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlc1tjaGlsZC5pZF0gPSBjaGlsZC50ZW1wbGF0ZVJlZjtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uRXZlbnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5oaWRlID0gZXZlbnQucGhhc2VOYW1lID09PSAnc3RhcnQnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdzaG93JztcbiAgICBpZiAoZXZlbnQucGhhc2VOYW1lID09PSAnZG9uZScpIHtcbiAgICAgIHRoaXMuaGlkZSA9IChldmVudC50b1N0YXRlID09PSAnaGlkZScgfHwgZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKTtcbiAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnc2hvdycpIHtcbiAgICAgICAgdGhpcy5oaWRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwidmlzaWJsZSB8fCAhaGlkZVwiPlxuICA8bmctdGVtcGxhdGUgW25nSWZdPVwiZGlzbWlzc2libGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzPy5hbGVydEJ1dHRvbkNsb3NlVGVtcGxhdGUgfHwgZGVmYXVsdEFsZXJ0QnV0dG9uQ2xvc2VUZW1wbGF0ZVwiPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0QWxlcnRCdXR0b25DbG9zZVRlbXBsYXRlPlxuICA8YnV0dG9uIChjbGljayk9XCJ2aXNpYmxlPWZhbHNlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgY0J1dHRvbkNsb3NlPjwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==