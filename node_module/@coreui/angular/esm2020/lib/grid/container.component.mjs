import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class ContainerComponent {
    constructor() {
        /**
         * Set container 100% wide until a breakpoint.
         */
        this.breakpoint = '';
        this._fluid = false;
    }
    /**
     * Set container 100% wide, spanning the entire width of the viewport.
     */
    set fluid(value) {
        this._fluid = coerceBooleanProperty(value);
    }
    ;
    get fluid() {
        return this._fluid;
    }
    get hostClasses() {
        return {
            container: !this.fluid && !this.breakpoint,
            'container-fluid': this.fluid,
            [`container-${this.breakpoint}`]: !!this.breakpoint,
        };
    }
}
ContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ContainerComponent, selector: "c-container, [cContainer]", inputs: { breakpoint: "breakpoint", fluid: "fluid" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-container, [cContainer]', template: '<ng-content></ng-content>', styles: [":host{display:block}\n"] }]
        }], propDecorators: { breakpoint: [{
                type: Input
            }], fluid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBVTVFLE1BQU0sT0FBTyxrQkFBa0I7SUFML0I7UUFTRTs7V0FFRztRQUNNLGVBQVUsR0FBK0IsRUFBRSxDQUFDO1FBVzdDLFdBQU0sR0FBRyxLQUFLLENBQUM7S0FVeEI7SUFwQkM7O09BRUc7SUFDSCxJQUNJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUdELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDMUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDN0IsQ0FBQyxhQUFhLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUNwRCxDQUFDO0lBQ0osQ0FBQzs7K0dBM0JVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDhLQUhuQiwyQkFBMkI7MkZBRzFCLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSwyQkFBMkIsWUFDM0IsMkJBQTJCOzhCQVU1QixVQUFVO3NCQUFsQixLQUFLO2dCQUtGLEtBQUs7c0JBRFIsS0FBSztnQkFVRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDb250YWluZXIgfSBmcm9tICcuL2NvbnRhaW5lci50eXBlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jb250YWluZXIsIFtjQ29udGFpbmVyXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBJQ29udGFpbmVye1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mbHVpZDogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXQgY29udGFpbmVyIDEwMCUgd2lkZSB1bnRpbCBhIGJyZWFrcG9pbnQuXG4gICAqL1xuICBASW5wdXQoKSBicmVha3BvaW50OiBFeGNsdWRlPEJyZWFrcG9pbnRzLCAneHMnPiA9ICcnO1xuICAvKipcbiAgICogU2V0IGNvbnRhaW5lciAxMDAlIHdpZGUsIHNwYW5uaW5nIHRoZSBlbnRpcmUgd2lkdGggb2YgdGhlIHZpZXdwb3J0LlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGZsdWlkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmx1aWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9O1xuICBnZXQgZmx1aWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZsdWlkO1xuICB9XG4gIHByaXZhdGUgX2ZsdWlkID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXI6ICF0aGlzLmZsdWlkICYmICF0aGlzLmJyZWFrcG9pbnQsXG4gICAgICAnY29udGFpbmVyLWZsdWlkJzogdGhpcy5mbHVpZCxcbiAgICAgIFtgY29udGFpbmVyLSR7dGhpcy5icmVha3BvaW50fWBdOiAhIXRoaXMuYnJlYWtwb2ludCxcbiAgICB9O1xuICB9XG59XG4iXX0=