import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../sidebar.service";
/**
 * Allows the sidebar to be toggled/folded via click on host element.
 */
export class SidebarToggleDirective {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        /**
         * Sidebar property name for toggle action. [docs]
         *
         * @type 'visible' | 'unfoldable'
         * @default 'visible'
         */
        this.toggle = 'visible';
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ toggle: this.toggle, id: this.id });
    }
}
SidebarToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarToggleDirective, deps: [{ token: i1.SidebarService }], target: i0.ɵɵFactoryTarget.Directive });
SidebarToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: SidebarToggleDirective, selector: "[cSidebarToggle]", inputs: { id: ["cSidebarToggle", "id"], toggle: "toggle" }, host: { listeners: { "click": "toggleOpen($event)" } }, exportAs: ["cSidebarToggle"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cSidebarToggle]',
                    exportAs: 'cSidebarToggle'
                }]
        }], ctorParameters: function () { return [{ type: i1.SidebarService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cSidebarToggle']
            }], toggle: [{
                type: Input
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci10b2dnbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItdG9nZ2xlL3NpZGViYXItdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUk3RDs7R0FFRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7SUFlakMsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUeEM7Ozs7O1dBS0c7UUFDTSxXQUFNLEdBQTZCLFNBQVMsQ0FBQTtJQUlsRCxDQUFDO0lBR0osVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O21IQXZCVSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO3FHQU8wQixFQUFFO3NCQUExQixLQUFLO3VCQUFDLGdCQUFnQjtnQkFPZCxNQUFNO3NCQUFkLEtBQUs7Z0JBT04sVUFBVTtzQkFEVCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTaWRlYmFyU2VydmljZX0gZnJvbSAnLi4vc2lkZWJhci5zZXJ2aWNlJztcblxuLyoqXG4gKiBBbGxvd3MgdGhlIHNpZGViYXIgdG8gYmUgdG9nZ2xlZC9mb2xkZWQgdmlhIGNsaWNrIG9uIGhvc3QgZWxlbWVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NTaWRlYmFyVG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnY1NpZGViYXJUb2dnbGUnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJUb2dnbGVEaXJlY3RpdmUge1xuICAvKipcbiAgICogSWQgb2Ygc2lkZWJhciBmb3IgdG9nZ2xlIGFjdGlvbi4gW2RvY3NdXG4gICAqXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCdjU2lkZWJhclRvZ2dsZScpIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogU2lkZWJhciBwcm9wZXJ0eSBuYW1lIGZvciB0b2dnbGUgYWN0aW9uLiBbZG9jc11cbiAgICpcbiAgICogQHR5cGUgJ3Zpc2libGUnIHwgJ3VuZm9sZGFibGUnXG4gICAqIEBkZWZhdWx0ICd2aXNpYmxlJ1xuICAgKi9cbiAgQElucHV0KCkgdG9nZ2xlOiAndmlzaWJsZScgfCAndW5mb2xkYWJsZScgPSAndmlzaWJsZSdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBTaWRlYmFyU2VydmljZVxuICApIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KTogdm9pZCB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyB0b2dnbGU6IHRoaXMudG9nZ2xlLCBpZDogdGhpcy5pZCB9KTtcbiAgfVxufVxuIl19