import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CalloutComponent {
    get hostClasses() {
        return {
            callout: true,
            [`callout-${this.color}`]: !!this.color
        };
    }
    constructor() { }
}
CalloutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CalloutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CalloutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CalloutComponent, selector: "c-callout, [cCallout]", inputs: { color: "color" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CalloutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-callout, [cCallout]', template: `<ng-content></ng-content>`, styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCLElBQ0ksV0FBVztRQUViLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSTtZQUNiLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQzs7NkdBakJOLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLGdKQUhqQiwyQkFBMkI7MkZBRzFCLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSx1QkFBdUIsWUFDdkIsMkJBQTJCOzBFQVM1QixLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jYWxsb3V0LCBbY0NhbGxvdXRdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsbG91dC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGxvdXRDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcj86IENvbG9ycztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FsbG91dDogdHJ1ZSxcbiAgICAgIFtgY2FsbG91dC0ke3RoaXMuY29sb3J9YF06ICEhdGhpcy5jb2xvclxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=