import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class NavbarNavComponent {
    constructor() {
        this._scroll = false;
    }
    /**
     * Enable vertical scrolling of a collapsed navbar toggleable contents.
     * @type boolean
     */
    set scroll(value) {
        this._scroll = coerceBooleanProperty(value);
    }
    ;
    get scroll() {
        return this._scroll;
    }
    get hostClasses() {
        return {
            'navbar-nav': true,
            'navbar-nav-scroll': this.scroll
        };
    }
}
NavbarNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavbarNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NavbarNavComponent, selector: "c-navbar-nav", inputs: { scroll: "scroll" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarNavComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-navbar-nav',
                    template: '<ng-content></ng-content>',
                }]
        }], propDecorators: { scroll: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL25hdmJhci9uYXZiYXItbmF2L25hdmJhci1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBTTVFLE1BQU0sT0FBTyxrQkFBa0I7SUFKL0I7UUFtQlUsWUFBTyxHQUFHLEtBQUssQ0FBQztLQVV6QjtJQXJCQzs7O09BR0c7SUFDSCxJQUNJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUdELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7K0dBdkJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLHlJQUZuQiwyQkFBMkI7MkZBRTFCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OEJBVUssTUFBTTtzQkFEVCxLQUFLO2dCQVVGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1uYXZiYXItbmF2JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyTmF2Q29tcG9uZW50IHtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2Nyb2xsOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB2ZXJ0aWNhbCBzY3JvbGxpbmcgb2YgYSBjb2xsYXBzZWQgbmF2YmFyIHRvZ2dsZWFibGUgY29udGVudHMuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zY3JvbGwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9O1xuICBnZXQgc2Nyb2xsKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGw7XG4gIH1cbiAgcHJpdmF0ZSBfc2Nyb2xsID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnbmF2YmFyLW5hdic6IHRydWUsXG4gICAgICAnbmF2YmFyLW5hdi1zY3JvbGwnOiB0aGlzLnNjcm9sbFxuICAgIH07XG4gIH1cblxufVxuIl19