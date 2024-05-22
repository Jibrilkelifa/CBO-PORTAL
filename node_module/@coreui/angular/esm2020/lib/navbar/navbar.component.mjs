import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { CollapseDirective } from '../collapse';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
// todo: fix container prop issue not rendering children
// todo: workaroud -  use <c-container> component directly in template
export class NavbarComponent {
    constructor(hostElement, breakpointObserver) {
        this.hostElement = hostElement;
        this.breakpointObserver = breakpointObserver;
        /**
         * Sets if the color of text should be colored for a light or dark dark background.
         */
        this.colorScheme = 'light';
        this.role = 'navigation';
    }
    get hostClasses() {
        const expandClassSuffix = this.expand === true ? '' : `-${this.expand}`;
        return {
            navbar: true,
            'navbar-light': this.colorScheme === 'light',
            'navbar-dark': this.colorScheme === 'dark',
            [`navbar-expand${expandClassSuffix}`]: !!this.expand,
            [`bg-${this.color}`]: !!this.color,
            [`${this.placement}`]: !!this.placement
        };
    }
    get containerClass() {
        return `container${this.container !== true ? '-' + this.container : ''}`;
    }
    get breakpoint() {
        if (typeof this.expand === 'string') {
            return getComputedStyle(this.hostElement.nativeElement).getPropertyValue(`--cui-breakpoint-${this.expand}`);
        }
        return false;
    }
    ngAfterContentInit() {
        if (this.breakpoint) {
            const onBreakpoint = `(min-width: ${this.breakpoint})`;
            this.breakpointObserver.observe([onBreakpoint]).subscribe(result => {
                if (this.collapse) {
                    const animate = this.collapse.animate;
                    this.collapse.toggle(false);
                    this.collapse.animate = false;
                    setTimeout(() => {
                        this.collapse.toggle(result.matches);
                        setTimeout(() => {
                            this.collapse.animate = animate;
                        });
                    });
                }
            });
        }
    }
}
NavbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarComponent, deps: [{ token: i0.ElementRef }, { token: i1.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Component });
NavbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavbarComponent, selector: "c-navbar", inputs: { color: "color", colorScheme: "colorScheme", container: "container", expand: "expand", placement: "placement", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, queries: [{ propertyName: "collapse", first: true, predicate: CollapseDirective, descendants: true }], ngImport: i0, template: "<ng-container *ngTemplateOutlet=\"container ? withContainerTemplate : noContainerTemplate\"></ng-container>\n\n<ng-template #withContainerTemplate>\n  <div [ngClass]=\"containerClass\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n\n<ng-template #noContainerTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-navbar', template: "<ng-container *ngTemplateOutlet=\"container ? withContainerTemplate : noContainerTemplate\"></ng-container>\n\n<ng-template #withContainerTemplate>\n  <div [ngClass]=\"containerClass\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n\n<ng-template #noContainerTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.BreakpointObserver }]; }, propDecorators: { color: [{
                type: Input
            }], colorScheme: [{
                type: Input
            }], container: [{
                type: Input
            }], expand: [{
                type: Input
            }], placement: [{
                type: Input
            }], collapse: [{
                type: ContentChild,
                args: [CollapseDirective]
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBR2hELHdEQUF3RDtBQUN4RCxzRUFBc0U7QUFPdEUsTUFBTSxPQUFPLGVBQWU7SUE0QjFCLFlBQ1UsV0FBdUIsRUFDdkIsa0JBQXNDO1FBRHRDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF4QmhEOztXQUVHO1FBQ00sZ0JBQVcsR0FBc0IsT0FBTyxDQUFDO1FBaUJ6QyxTQUFJLEdBQUcsWUFBWSxDQUFDO0lBSzFCLENBQUM7SUFFSixJQUNJLFdBQVc7UUFDYixNQUFNLGlCQUFpQixHQUFXLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hGLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSTtZQUNaLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxLQUFLLE9BQU87WUFDNUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLEtBQUssTUFBTTtZQUMxQyxDQUFDLGdCQUFnQixpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3BELENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDbEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLFlBQVksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMzRSxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ25DLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDN0c7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sWUFBWSxHQUFHLGVBQWUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDakUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDOUIsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7NEJBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3dCQUNsQyxDQUFDLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs0R0ExRVUsZUFBZTtnR0FBZixlQUFlLCtTQXVCWixpQkFBaUIsZ0RDdENqQyx5VUFXQTsyRkRJYSxlQUFlO2tCQUwzQixTQUFTOytCQUNFLFVBQVU7a0lBU1gsS0FBSztzQkFBYixLQUFLO2dCQUlHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBSUcsU0FBUztzQkFBakIsS0FBSztnQkFJRyxNQUFNO3NCQUFkLEtBQUs7Z0JBSUcsU0FBUztzQkFBakIsS0FBSztnQkFFMkIsUUFBUTtzQkFBeEMsWUFBWTt1QkFBQyxpQkFBaUI7Z0JBR3RCLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFRRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5cbmltcG9ydCB7IENvbGxhcHNlRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29sbGFwc2UnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuLy8gdG9kbzogZml4IGNvbnRhaW5lciBwcm9wIGlzc3VlIG5vdCByZW5kZXJpbmcgY2hpbGRyZW5cbi8vIHRvZG86IHdvcmthcm91ZCAtICB1c2UgPGMtY29udGFpbmVyPiBjb21wb25lbnQgZGlyZWN0bHkgaW4gdGVtcGxhdGVcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcj86IENvbG9ycztcbiAgLyoqXG4gICAqIFNldHMgaWYgdGhlIGNvbG9yIG9mIHRleHQgc2hvdWxkIGJlIGNvbG9yZWQgZm9yIGEgbGlnaHQgb3IgZGFyayBkYXJrIGJhY2tncm91bmQuXG4gICAqL1xuICBASW5wdXQoKSBjb2xvclNjaGVtZT86ICdkYXJrJyB8ICdsaWdodCcgPSAnbGlnaHQnO1xuICAvKipcbiAgICogRGVmaW5lcyBvcHRpb25hbCBjb250YWluZXIgd3JhcHBpbmcgY2hpbGRyZW4gZWxlbWVudHMuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI/OiBib29sZWFuIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnIHwgJ2ZsdWlkJztcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHJlc3BvbnNpdmUgYnJlYWtwb2ludCB0byBkZXRlcm1pbmUgd2hlbiBjb250ZW50IGNvbGxhcHNlcy5cbiAgICovXG4gIEBJbnB1dCgpIGV4cGFuZD86IGJvb2xlYW4gfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XG4gIC8qKlxuICAgKiBQbGFjZSBjb21wb25lbnQgaW4gbm9uLXN0YXRpYyBwb3NpdGlvbnMuXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ/OiAnZml4ZWQtdG9wJyB8ICdmaXhlZC1ib3R0b20nIHwgJ3N0aWNreS10b3AnO1xuXG4gIEBDb250ZW50Q2hpbGQoQ29sbGFwc2VEaXJlY3RpdmUpIGNvbGxhcHNlITogQ29sbGFwc2VEaXJlY3RpdmU7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBASW5wdXQoKSByb2xlID0gJ25hdmlnYXRpb24nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlclxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IGV4cGFuZENsYXNzU3VmZml4OiBzdHJpbmcgPSB0aGlzLmV4cGFuZCA9PT0gdHJ1ZSA/ICcnIDogYC0ke3RoaXMuZXhwYW5kfWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdmJhcjogdHJ1ZSxcbiAgICAgICduYXZiYXItbGlnaHQnOiB0aGlzLmNvbG9yU2NoZW1lID09PSAnbGlnaHQnLFxuICAgICAgJ25hdmJhci1kYXJrJzogdGhpcy5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnLFxuICAgICAgW2BuYXZiYXItZXhwYW5kJHtleHBhbmRDbGFzc1N1ZmZpeH1gXTogISF0aGlzLmV4cGFuZCxcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgICBbYCR7dGhpcy5wbGFjZW1lbnR9YF06ICEhdGhpcy5wbGFjZW1lbnRcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGNvbnRhaW5lckNsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBjb250YWluZXIke3RoaXMuY29udGFpbmVyICE9PSB0cnVlID8gJy0nICsgdGhpcy5jb250YWluZXIgOiAnJ31gO1xuICB9XG5cbiAgZ2V0IGJyZWFrcG9pbnQoKTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmV4cGFuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShgLS1jdWktYnJlYWtwb2ludC0ke3RoaXMuZXhwYW5kfWApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgY29uc3Qgb25CcmVha3BvaW50ID0gYChtaW4td2lkdGg6ICR7dGhpcy5icmVha3BvaW50fSlgO1xuICAgICAgdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbb25CcmVha3BvaW50XSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlKSB7XG4gICAgICAgICAgY29uc3QgYW5pbWF0ZSA9IHRoaXMuY29sbGFwc2UuYW5pbWF0ZTtcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICAgdGhpcy5jb2xsYXBzZS5hbmltYXRlID0gZmFsc2U7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlLnRvZ2dsZShyZXN1bHQubWF0Y2hlcyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZS5hbmltYXRlID0gYW5pbWF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250YWluZXIgPyB3aXRoQ29udGFpbmVyVGVtcGxhdGUgOiBub0NvbnRhaW5lclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjd2l0aENvbnRhaW5lclRlbXBsYXRlPlxuICA8ZGl2IFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjbm9Db250YWluZXJUZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==