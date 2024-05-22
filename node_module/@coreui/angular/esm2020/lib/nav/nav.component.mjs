import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NavComponent {
    get hostClasses() {
        return {
            nav: true,
            [`nav-${this.layout}`]: !!this.layout,
            [`nav-${this.variant}`]: !!this.variant
        };
    }
}
NavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavComponent, selector: "c-nav", inputs: { layout: "layout", variant: "variant" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `
    <ng-content></ng-content>`, isInline: true, styles: [":host .nav-link:focus{outline:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-nav', template: `
    <ng-content></ng-content>`, styles: [":host .nav-link:focus{outline:0}\n"] }]
        }], propDecorators: { layout: [{
                type: Input
            }], variant: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbmF2L25hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE5RCxNQUFNLE9BQU8sWUFBWTtJQVl2QixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUk7WUFDVCxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3JDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDeEMsQ0FBQztJQUNKLENBQUM7O3lHQW5CVSxZQUFZOzZGQUFaLFlBQVksc0pBSmI7OEJBQ2tCOzJGQUdqQixZQUFZO2tCQU54QixTQUFTOytCQUNFLE9BQU8sWUFDUDs4QkFDa0I7OEJBUW5CLE1BQU07c0JBQWQsS0FBSztnQkFLRyxPQUFPO3NCQUFmLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLW5hdicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL25hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IGEgbGF5b3V0IHR5cGUgZm9yIGNvbXBvbmVudC5cbiAgICogQHR5cGUgeydmaWxsJyB8ICdqdXN0aWZpZWQnfVxuICAgKi9cbiAgQElucHV0KCkgbGF5b3V0PzogJ2ZpbGwnIHwgJ2p1c3RpZmllZCc7XG4gIC8qKlxuICAgKiBTZXQgdGhlIG5hdiB2YXJpYW50IHRvIHRhYnMgb3IgcGlsbHMuXG4gICAqIEB0eXBlIHsndGFicycgfCAncGlsbHMnIHwgJ3VuZGVybGluZSd9XG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50PzogJycgfCAndGFicycgfCAncGlsbHMnIDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdjogdHJ1ZSxcbiAgICAgIFtgbmF2LSR7dGhpcy5sYXlvdXR9YF06ICEhdGhpcy5sYXlvdXQsXG4gICAgICBbYG5hdi0ke3RoaXMudmFyaWFudH1gXTogISF0aGlzLnZhcmlhbnRcbiAgICB9O1xuICB9XG59XG4iXX0=