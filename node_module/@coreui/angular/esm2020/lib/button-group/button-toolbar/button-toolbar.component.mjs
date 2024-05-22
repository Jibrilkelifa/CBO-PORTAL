import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonToolbarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9idXR0b24tZ3JvdXAvYnV0dG9uLXRvb2xiYXIvYnV0dG9uLXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNOUQsTUFBTSxPQUFPLHNCQUFzQjtJQVNqQyxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUk7U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRDtRQWZBOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsU0FBUyxDQUFDO0lBU1YsQ0FBQzs7bUhBaEJOLHNCQUFzQjt1R0FBdEIsc0JBQXNCLG1LQUZ2QiwyQkFBMkI7MkZBRTFCLHNCQUFzQjtrQkFKbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0QzswRUFRVSxJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWJ1dHRvbi10b29sYmFyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVG9vbGJhckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHJvbGUgYXR0ciBmb3IgQnV0dG9uVG9vbGJhci4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAndG9vbGJhcidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgQElucHV0KCkgcm9sZSA9ICd0b29sYmFyJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdidG4tdG9vbGJhcic6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==