import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../offcanvas.service";
export class OffcanvasToggleDirective {
    constructor(offcanvasService) {
        this.offcanvasService = offcanvasService;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.offcanvasService.toggle({ show: 'toggle', id: this.id });
    }
}
OffcanvasToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasToggleDirective, deps: [{ token: i1.OffcanvasService }], target: i0.ɵɵFactoryTarget.Directive });
OffcanvasToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: OffcanvasToggleDirective, selector: "[cOffcanvasToggle]", inputs: { id: ["cOffcanvasToggle", "id"] }, host: { listeners: { "click": "toggleOpen($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cOffcanvasToggle]'
                }]
        }], ctorParameters: function () { return [{ type: i1.OffcanvasService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cOffcanvasToggle']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL29mZmNhbnZhcy9vZmZjYW52YXMtdG9nZ2xlL29mZmNhbnZhcy10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTy9ELE1BQU0sT0FBTyx3QkFBd0I7SUFRbkMsWUFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDO0lBR0osVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDOztxSEFoQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjt1R0FPNEIsRUFBRTtzQkFBNUIsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBT3pCLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2ZmY2FudmFzU2VydmljZSB9IGZyb20gJy4uL29mZmNhbnZhcy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NPZmZjYW52YXNUb2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBPZmZjYW52YXNUb2dnbGVEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBIdG1sIGlkIGF0dHIgb2Ygb2ZmY2FudmFzIHRvIHRvZ2dsZS5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoJ2NPZmZjYW52YXNUb2dnbGUnKSBpZD86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG9mZmNhbnZhc1NlcnZpY2U6IE9mZmNhbnZhc1NlcnZpY2VcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub2ZmY2FudmFzU2VydmljZS50b2dnbGUoeyBzaG93OiAndG9nZ2xlJywgaWQ6IHRoaXMuaWQgfSk7XG4gIH1cbn1cbiJdfQ==