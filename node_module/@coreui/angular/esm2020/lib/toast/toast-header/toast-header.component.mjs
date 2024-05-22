import { Component, HostBinding, Input, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../toast/toast.component";
import * as i2 from "@angular/common";
import * as i3 from "../../button/button-close.directive";
import * as i4 from "../toast-close.directive";
export class ToastHeaderComponent {
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
ToastHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastHeaderComponent, deps: [{ token: i1.ToastComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ToastHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ToastHeaderComponent, selector: "c-toast-header", inputs: { closeButton: "closeButton" }, host: { properties: { "class.toast-header": "this.toastHeaderClass" } }, exportAs: ["cToastHeader"], ngImport: i0, template: "<ng-container>\n  <ng-content></ng-content>\n  <button *ngIf=\"closeButton\" [cToastClose]=\"toast\" [style]=\"{outline: 0}\" aria-label=\"close\" cButtonClose class=\"ms-auto\"></button>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ButtonCloseDirective, selector: "[cButtonClose]", inputs: ["white"] }, { kind: "directive", type: i4.ToastCloseDirective, selector: "[cToastClose]", inputs: ["cToastClose"], exportAs: ["cToastClose"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toast-header', exportAs: 'cToastHeader', template: "<ng-container>\n  <ng-content></ng-content>\n  <button *ngIf=\"closeButton\" [cToastClose]=\"toast\" [style]=\"{outline: 0}\" aria-label=\"close\" cButtonClose class=\"ms-auto\"></button>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ToastComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { closeButton: [{
                type: Input
            }], toastHeaderClass: [{
                type: HostBinding,
                args: ['class.toast-header']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdG9hc3QvdG9hc3QtaGVhZGVyL3RvYXN0LWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0LWhlYWRlci90b2FzdC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU3hFLE1BQU0sT0FBTyxvQkFBb0I7SUFVL0IsWUFDcUIsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFUM0M7OztXQUdHO1FBQ00sZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFTyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFJdkQsQ0FBQzs7aUhBWk0sb0JBQW9CO3FHQUFwQixvQkFBb0IsbU1DVGpDLGdOQUlBOzJGREthLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSxnQkFBZ0IsWUFHaEIsY0FBYzs7MEJBYXJCLFFBQVE7NENBTEYsV0FBVztzQkFBbkIsS0FBSztnQkFFNkIsZ0JBQWdCO3NCQUFsRCxXQUFXO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuLi90b2FzdC90b2FzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXRvYXN0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjVG9hc3RIZWFkZXInXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVhZGVyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogQWRkIGNsb3NlIGJ1dHRvbiB0byBhIHRvYXN0IGhlYWRlclxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvbiA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b2FzdC1oZWFkZXInKSB0b2FzdEhlYWRlckNsYXNzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdG9hc3Q/OiBUb2FzdENvbXBvbmVudFxuICApIHsgfVxuXG59XG4iLCI8bmctY29udGFpbmVyPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxidXR0b24gKm5nSWY9XCJjbG9zZUJ1dHRvblwiIFtjVG9hc3RDbG9zZV09XCJ0b2FzdFwiIFtzdHlsZV09XCJ7b3V0bGluZTogMH1cIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBjQnV0dG9uQ2xvc2UgY2xhc3M9XCJtcy1hdXRvXCI+PC9idXR0b24+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==