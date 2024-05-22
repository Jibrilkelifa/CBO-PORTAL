import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class ProgressBarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcHJvZ3Jlc3MvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsb0JBQW9CLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNL0csTUFBTSxPQUFPLG9CQUFvQjtJQUsvQjs7O09BR0c7SUFDSCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBVUQ7O09BRUc7SUFDSCxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQW9CRCxZQUNVLFFBQW1CLEVBQ25CLFdBQXVCO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUF4Q3pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFPMUIsb0NBQW9DO1FBQzNCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFXZixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBT25COzs7V0FHRztRQUV1QixTQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3ZDLFVBQUssR0FBRztZQUNkLE9BQU8sRUFBRSxDQUFDO1lB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QkFPb0IsSUFBSTtzQkFEN0IsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxXQUFXO2dCQWlCcEIsR0FBRztzQkFETixLQUFLO2dCQVVGLEdBQUc7c0JBRE4sS0FBSztnQkFNRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5LCBOdW1iZXJJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZhbHVlOiBOdW1iZXJJbnB1dDtcblxuICAvKipcbiAgICogVXNlIHRvIGFuaW1hdGUgdGhlIHN0cmlwZXMgcmlnaHQgdG8gbGVmdCB2aWEgQ1NTMyBhbmltYXRpb25zLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYW5pbWF0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbmltYXRlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgfVxuICBnZXQgYW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGVkO1xuICB9XG4gIHByaXZhdGUgX2FuaW1hdGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdmFsdWVzICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICdzdWNjZXNzJywgJ2RhbmdlcicsICd3YXJuaW5nJywgJ2luZm8nLCAnZGFyaycsICdsaWdodCdcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yPzogQ29sb3JzO1xuICAvLyBUT0RPOiBjaGVjayBpZiB0aGlzIGlzIG5lY2Vzc2FyeS5cbiAgQElucHV0KCkgcHJlY2lzaW9uID0gMDtcbiAgLyoqXG4gICAqIFRoZSBwZXJjZW50IHRvIHByb2dyZXNzIHRoZSBQcm9ncmVzc0Jhci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuICAvKipcbiAgICogU2V0IHRoZSBwcm9ncmVzcyBiYXIgdmFyaWFudCB0byBvcHRpb25hbCBzdHJpcGVkLlxuICAgKiBAdmFsdWVzICdzdHJpcGVkJ1xuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudD86ICdzdHJpcGVkJztcblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgaHRtbCByb2xlIGF0dHJpYnV0ZS5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAncHJvZ3Jlc3NiYXInO1xuICBwcml2YXRlIHN0YXRlID0ge1xuICAgIHBlcmNlbnQ6IDAsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBnZXQgbWluKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubWluO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1pbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0ZS5taW4gPSBpc05hTih2YWx1ZSkgPyAwIDogdmFsdWU7XG4gIH1cblxuICBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubWF4O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1heCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0ZS5tYXggPSBpc05hTih2YWx1ZSkgfHwgdmFsdWUgPD0gMCB8fCB2YWx1ZSA9PT0gdGhpcy5taW4gPyAxMDAgOiB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3Byb2dyZXNzLWJhcic6IHRydWUsXG4gICAgICAncHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJzogdGhpcy5hbmltYXRlZCxcbiAgICAgIFtgcHJvZ3Jlc3MtYmFyLSR7dGhpcy52YXJpYW50fWBdOiAhIXRoaXMudmFyaWFudCxcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3JcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZXMoKTtcbiAgfVxuXG4gIHNldFBlcmNlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5wZXJjZW50ID0gKygodGhpcy52YWx1ZSAvICh0aGlzLm1heCAtIHRoaXMubWluKSkgKiAxMDApLnRvRml4ZWQodGhpcy5wcmVjaXNpb24pO1xuICB9XG5cbiAgc2V0VmFsdWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UGVyY2VudCgpO1xuICAgIGNvbnN0IGhvc3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaG9zdCwgJ3dpZHRoJywgYCR7dGhpcy5zdGF0ZS5wZXJjZW50fSVgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShob3N0LCAnYXJpYS12YWx1ZW5vdycsIFN0cmluZyh0aGlzLnZhbHVlKSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaG9zdCwgJ2FyaWEtdmFsdWVtaW4nLCBTdHJpbmcodGhpcy5taW4pKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShob3N0LCAnYXJpYS12YWx1ZW1heCcsIFN0cmluZyh0aGlzLm1heCkpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlcygpO1xuICB9XG59XG4iXX0=