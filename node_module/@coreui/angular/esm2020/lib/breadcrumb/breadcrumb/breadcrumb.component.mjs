import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BreadcrumbComponent {
    get hostClasses() {
        return {
            breadcrumb: true
        };
    }
    constructor() {
        /**
         * Default aria-label for breadcrumb. [docs]
         * @type string
         * @default 'breadcrumb'
         */
        this.ariaLabel = 'breadcrumb';
        /**
         * Default role for breadcrumb. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
    }
}
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: BreadcrumbComponent, selector: "c-breadcrumb", inputs: { ariaLabel: "ariaLabel", role: "role" }, host: { properties: { "attr.aria-label": "this.ariaLabel", "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-breadcrumb', template: "<ng-content></ng-content>\n\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { ariaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }, {
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnJlYWRjcnVtYi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU85RCxNQUFNLE9BQU8sbUJBQW1CO0lBaUI5QixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQTtJQUNILENBQUM7SUFFRDtRQXZCQTs7OztXQUlHO1FBRU0sY0FBUyxHQUFHLFlBQVksQ0FBQztRQUVsQzs7OztXQUlHO1FBRU0sU0FBSSxHQUFHLFlBQVksQ0FBQztJQVNiLENBQUM7O2dIQXhCTixtQkFBbUI7b0dBQW5CLG1CQUFtQiw0TkNQaEMsK0JBRUE7MkZES2EsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGNBQWM7MEVBV2YsU0FBUztzQkFEakIsV0FBVzt1QkFBQyxpQkFBaUI7O3NCQUM3QixLQUFLO2dCQVFHLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCBhcmlhLWxhYmVsIGZvciBicmVhZGNydW1iLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdicmVhZGNydW1iJ1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICBASW5wdXQoKSBhcmlhTGFiZWwgPSAnYnJlYWRjcnVtYic7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgcm9sZSBmb3IgYnJlYWRjcnVtYi4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnbmF2aWdhdGlvbidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgQElucHV0KCkgcm9sZSA9ICduYXZpZ2F0aW9uJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicmVhZGNydW1iOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG4iXX0=