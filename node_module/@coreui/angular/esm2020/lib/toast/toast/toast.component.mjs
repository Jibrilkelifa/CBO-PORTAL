import { Component, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../toaster/toaster.service";
export class ToastComponent {
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
ToastComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ToasterService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ToasterService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { autohide: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90b2FzdC90b2FzdC90b2FzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0L3RvYXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQW1DNUUsTUFBTSxPQUFPLGNBQWM7SUFnQ3pCOzs7T0FHRztJQUNILElBQ0ksT0FBTyxDQUFDLEtBQWM7UUFDeEIsTUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxR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RFYsS0FBSztnQkFrQkcsS0FBSztzQkFBYixLQUFLO2dCQU1JLGFBQWE7c0JBQXRCLE1BQU07Z0JBTUcsS0FBSztzQkFBZCxNQUFNO2dCQTBCSCxpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsWUFBWTtnQkFNckIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLFlBQVk7Z0JBTXpCLGdCQUFnQjtzQkFEZixZQUFZO3VCQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU01QyxlQUFlO3NCQURkLFlBQVk7dUJBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBS2hCLFdBQVc7c0JBQXJDLFlBQVk7dUJBQUMsV0FBVztnQkFJQyxVQUFVO3NCQUFuQyxZQUFZO3VCQUFDLFVBQVU7Z0JBS3BCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJy4uL3RvYXN0ZXIvdG9hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRUb2FzdGVyUGxhY2VtZW50IH0gZnJvbSAnLi4vdG9hc3Rlci90b2FzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi8uLi9jb3JldWkudHlwZXMnO1xuXG50eXBlIEFuaW1hdGVUeXBlID0gKCdoaWRlJyB8ICdzaG93Jyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtdG9hc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddLFxuICBleHBvcnRBczogJ2NUb2FzdCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICBzdGF0ZSgnc2hvdycsIHN0eWxlKHtvcGFjaXR5OiAxLCBoZWlnaHQ6ICcqJywgcGFkZGluZzogJyonLCBib3JkZXI6ICcqJywgbWFyZ2luOiAnKid9KSksXG4gICAgICBzdGF0ZSgnaGlkZScsIHN0eWxlKHtvcGFjaXR5OiAwLCBoZWlnaHQ6IDAsIHBhZGRpbmc6IDAsIGJvcmRlcjogMCwgbWFyZ2luOiAwfSkpLFxuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7b3BhY2l0eTogMCwgaGVpZ2h0OiAwLCBwYWRkaW5nOiAwLCBib3JkZXI6IDAsIG1hcmdpbjogMH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Nob3cgPT4gaGlkZScsIFtcbiAgICAgICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nKSxcbiAgICAgIF0sIHtcbiAgICAgICAgcGFyYW1zOiB7dGltZTogJzMwMG1zJywgZWFzaW5nOiAnZWFzZS1vdXQnfVxuICAgICAgfSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRlID0+IHNob3cnLCBbYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nKV0sIHtcbiAgICAgICAgcGFyYW1zOiB7dGltZTogJzMwMG1zJywgZWFzaW5nOiAnZWFzZS1pbid9LFxuICAgICAgfSksXG4gICAgICB0cmFuc2l0aW9uKCdzaG93ID0+IHZvaWQnLCBbYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nKV0sIHtcbiAgICAgICAgcGFyYW1zOiB7dGltZTogJzMwMG1zJywgZWFzaW5nOiAnZWFzZS1vdXQnfSxcbiAgICAgIH0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBzaG93JywgW2FuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19JyldLCB7XG4gICAgICAgIHBhcmFtczoge3RpbWU6ICczMDBtcycsIGVhc2luZzogJ2Vhc2UtaW4nfSxcbiAgICAgIH0pLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlzaWJsZTogQm9vbGVhbklucHV0O1xuXG4gIHB1YmxpYyBkeW5hbWljITogYm9vbGVhbjtcbiAgcHVibGljIHBsYWNlbWVudCE6IFRUb2FzdGVyUGxhY2VtZW50O1xuICBwdWJsaWMgaGlkZSE6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEF1dG8gaGlkZSB0aGUgdG9hc3QuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGF1dG9oaWRlID0gdHJ1ZTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnMgPSAnJztcblxuICAvKipcbiAgICogRGVsYXkgaGlkaW5nIHRoZSB0b2FzdCAobXMpLlxuICAgKiBAdHlwZSBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpIGRlbGF5ID0gNTAwMDtcblxuICAvKipcbiAgICogQXBwbHkgZmFkZSB0cmFuc2l0aW9uIHRvIHRoZSB0b2FzdC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgZmFkZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIGlmICh0aGlzLl92aXNpYmxlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fdmlzaWJsZSA9IG5ld1ZhbHVlO1xuICAgICAgbmV3VmFsdWUgPyB0aGlzLnNldFRpbWVyKCkgOiB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG4gIHByaXZhdGUgX3Zpc2libGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQElucHV0KCkgaW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgb24gdmlzaWJpbGl0eSBjaGFuZ2UuIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCBvbiB0aW1lciB0aWNrLiBbZG9jc11cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBAT3V0cHV0KCkgdGltZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgdGltZXJJZDogYW55O1xuICBwcml2YXRlIGNsb2NrSWQ6IGFueTtcbiAgcHJpdmF0ZSBjbG9ja1RpbWVySWQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBwcml2YXRlIF9jbG9jayE6IG51bWJlcjtcblxuICBnZXQgY2xvY2soKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvY2s7XG4gIH1cblxuICBzZXQgY2xvY2sodmFsdWUpIHtcbiAgICB0aGlzLl9jbG9jayA9IHZhbHVlO1xuICAgIHRoaXMudGltZXIuZW1pdCh0aGlzLl9jbG9jayk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnQC5kaXNhYmxlZCcpXG4gIGdldCBhbmltYXRpb25EaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZmFkZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnQGZhZGVJbk91dCcpXG4gIGdldCBhbmltYXRlVHlwZSgpOiBBbmltYXRlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZSA/ICdzaG93JyA6ICdoaWRlJztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ0BmYWRlSW5PdXQuc3RhcnQnLCBbJyRldmVudCddKVxuICBvbkFuaW1hdGlvblN0YXJ0KCRldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQW5pbWF0aW9uRXZlbnQoJGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ0BmYWRlSW5PdXQuZG9uZScsIFsnJGV2ZW50J10pXG4gIG9uQW5pbWF0aW9uRG9uZSgkZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkFuaW1hdGlvbkV2ZW50KCRldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBvbk1vdXNlT3ZlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0Jykgb25Nb3VzZU91dCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRpbWVyKCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvYXN0OiB0cnVlLFxuICAgICAgZmFkZTogdGhpcy5mYWRlLFxuICAgICAgc2hvdzogIXRoaXMuaGlkZSxcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgICAnYm9yZGVyLTAnOiAhIXRoaXMuY29sb3JcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5zZXRTdGF0ZSh7XG4gICAgICAgIHRvYXN0OiB0aGlzLFxuICAgICAgICBzaG93OiB0aGlzLnZpc2libGUsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgICAgdGhpcy5zZXRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICB9XG5cbiAgc2V0VGltZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgaWYgKHRoaXMuYXV0b2hpZGUgJiYgdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRpbWVySWQgPSB0aGlzLmRlbGF5ID4gMCA/IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5vbkNsb3NlKCksIHRoaXMuZGVsYXkpIDogbnVsbDtcbiAgICAgIHRoaXMuc2V0Q2xvY2soKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRpbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDbG9jaygpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySWQpO1xuICAgIHRoaXMudGltZXJJZCA9IG51bGw7XG4gIH1cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc2V0U3RhdGUoe1xuICAgICAgdG9hc3Q6IHRoaXMsXG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgfSk7XG4gIH1cblxuICBzZXRDbG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2xvY2soKTtcbiAgICB0aGlzLmNsb2NrID0gMDtcbiAgICB0aGlzLmNsb2NrSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb2NrICs9IDE7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuY2xvY2tUaW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyQ2xvY2soKTtcbiAgICB9LCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIGNsZWFyQ2xvY2soKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvY2tUaW1lcklkKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2xvY2tJZCk7XG4gICAgdGhpcy5jbG9ja0lkID0gbnVsbDtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uRXZlbnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5oaWRlID0gZXZlbnQucGhhc2VOYW1lID09PSAnc3RhcnQnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdzaG93JztcbiAgICBpZiAoZXZlbnQucGhhc2VOYW1lID09PSAnZG9uZScpIHtcbiAgICAgIHRoaXMuaGlkZSA9IChldmVudC50b1N0YXRlID09PSAnaGlkZScgfHwgZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKTtcbiAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAnc2hvdycpIHtcbiAgICAgICAgdGhpcy5oaWRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=