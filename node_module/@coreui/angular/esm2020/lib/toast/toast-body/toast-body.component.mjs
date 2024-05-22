import { Component, HostBinding, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../toast/toast.component";
export class ToastBodyComponent {
    constructor(toast) {
        this.toast = toast;
        this.toastBodyClass = true;
    }
}
ToastBodyComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastBodyComponent, deps: [{ token: i1.ToastComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ToastBodyComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ToastBodyComponent, selector: "c-toast-body", host: { properties: { "class.toast-body": "this.toastBodyClass" } }, exportAs: ["cToastBody"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toast-body', template: '<ng-content></ng-content>', exportAs: 'cToastBody', styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ToastComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { toastBodyClass: [{
                type: HostBinding,
                args: ['class.toast-body']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0LWJvZHkvdG9hc3QtYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTakUsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QixZQUNxQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUhWLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0lBSW5ELENBQUM7OytHQU5NLGtCQUFrQjttR0FBbEIsa0JBQWtCLG1KQUpuQiwyQkFBMkI7MkZBSTFCLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxjQUFjLFlBQ2QsMkJBQTJCLFlBRTNCLFlBQVk7OzBCQU9uQixRQUFROzRDQUhzQixjQUFjO3NCQUE5QyxXQUFXO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtdG9hc3QtYm9keScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LWJvZHkuY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjVG9hc3RCb2R5J1xufSlcbmV4cG9ydCBjbGFzcyBUb2FzdEJvZHlDb21wb25lbnQge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG9hc3QtYm9keScpIHRvYXN0Qm9keUNsYXNzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdG9hc3Q/OiBUb2FzdENvbXBvbmVudFxuICApIHsgfVxuXG59XG4iXX0=