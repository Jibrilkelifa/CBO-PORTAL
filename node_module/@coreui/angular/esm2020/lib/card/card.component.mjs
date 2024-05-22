import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CardComponent {
    get hostClasses() {
        return {
            card: true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    constructor() { }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CardComponent, selector: "c-card, [c-card]", inputs: { color: "color", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card, [c-card]',
                    template: `<ng-content></ng-content>`
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2NhcmQvY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU85RCxNQUFNLE9BQU8sYUFBYTtJQWF4QixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUk7WUFDVixDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2xDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDN0MsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQzs7MEdBdEJOLGFBQWE7OEZBQWIsYUFBYSxtS0FGZCwyQkFBMkI7MkZBRTFCLGFBQWE7a0JBSnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7MEVBT1UsS0FBSztzQkFBYixLQUFLO2dCQUtHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JzLCBUZXh0Q29sb3JzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jYXJkLCBbYy1jYXJkXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yPzogQ29sb3JzO1xuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgVGV4dENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgdGV4dENvbG9yPzogVGV4dENvbG9ycztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmQ6IHRydWUsXG4gICAgICBbYGJnLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yLFxuICAgICAgW2B0ZXh0LSR7dGhpcy50ZXh0Q29sb3J9YF06ICEhdGhpcy50ZXh0Q29sb3IsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==