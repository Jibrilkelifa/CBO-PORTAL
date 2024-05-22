import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class FormFeedbackComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1mZWVkYmFjay9mb3JtLWZlZWRiYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU01RSxNQUFNLE9BQU8scUJBQXFCO0lBSmxDO1FBT0U7O1dBRUc7UUFDSyxhQUFRLEdBQUcsS0FBSyxDQUFDO0tBc0IxQjtJQXJCQyxJQUNJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBTUQsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDdEQsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3BELGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDeEQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87U0FDdkQsQ0FBQztJQUNKLENBQUM7O2tIQTNCVSxxQkFBcUI7c0dBQXJCLHFCQUFxQiw4SkFGdEIsMkJBQTJCOzJGQUUxQixxQkFBcUI7a0JBSmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OEJBU0ssT0FBTztzQkFEVixLQUFLO2dCQVVHLEtBQUs7c0JBQWIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtZm9ybS1mZWVkYmFjaycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZlZWRiYWNrQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Rvb2x0aXA6IEJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogSWYgeW91ciBmb3JtIGxheW91dCBhbGxvd3MgaXQsIHlvdSBjYW4gZGlzcGxheSB2YWxpZGF0aW9uIGZlZWRiYWNrIGluIGEgc3R5bGVkIHRvb2x0aXAuXG4gICAqL1xuICBwcml2YXRlIF90b29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCB0b29sdGlwKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHRvb2x0aXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdmFsaWRhdGlvbiBzdGF0ZSB0byB2YWxpZC5cbiAgICovXG4gIEBJbnB1dCgpIHZhbGlkPzogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd2YWxpZC1mZWVkYmFjayc6IHRoaXMudmFsaWQgPT09IHRydWUgJiYgIXRoaXMudG9vbHRpcCxcbiAgICAgICd2YWxpZC10b29sdGlwJzogdGhpcy52YWxpZCA9PT0gdHJ1ZSAmJiB0aGlzLnRvb2x0aXAsXG4gICAgICAnaW52YWxpZC1mZWVkYmFjayc6IHRoaXMudmFsaWQgIT09IHRydWUgJiYgIXRoaXMudG9vbHRpcCxcbiAgICAgICdpbnZhbGlkLXRvb2x0aXAnOiB0aGlzLnZhbGlkICE9PSB0cnVlICYmIHRoaXMudG9vbHRpcFxuICAgIH07XG4gIH1cbn1cbiJdfQ==