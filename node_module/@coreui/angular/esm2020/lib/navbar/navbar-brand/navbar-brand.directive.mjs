import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NavbarBrandDirective {
    constructor() {
        this.navbarBrand = true;
        this.role = 'button';
    }
}
NavbarBrandDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarBrandDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NavbarBrandDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: NavbarBrandDirective, selector: "[cNavbarBrand]", host: { properties: { "class.navbar-brand": "this.navbarBrand", "attr.role": "this.role" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarBrandDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavbarBrand]'
                }]
        }], propDecorators: { navbarBrand: [{
                type: HostBinding,
                args: ['class.navbar-brand']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWJyYW5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbmF2YmFyL25hdmJhci1icmFuZC9uYXZiYXItYnJhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt2RCxNQUFNLE9BQU8sb0JBQW9CO0lBSGpDO1FBS3FDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFNBQUksR0FBRyxRQUFRLENBQUM7S0FFM0M7O2lIQUxZLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OEJBR29DLFdBQVc7c0JBQTdDLFdBQVc7dUJBQUMsb0JBQW9CO2dCQUNQLElBQUk7c0JBQTdCLFdBQVc7dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NOYXZiYXJCcmFuZF0nXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckJyYW5kRGlyZWN0aXZlIHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5hdmJhci1icmFuZCcpIG5hdmJhckJyYW5kID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ2J1dHRvbic7XG5cbn1cbiJdfQ==