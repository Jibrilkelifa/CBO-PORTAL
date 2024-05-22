import { Component, HostBinding, Input } from '@angular/core';
import { AccordionService } from '../accordion.service';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../accordion.service";
export class AccordionComponent {
    /**
     * Make accordion items stay open when another item is opened
     * @type boolean
     */
    set alwaysOpen(value) {
        this.accordionService.alwaysOpen = coerceBooleanProperty(value);
    }
    get alwaysOpen() {
        return this.accordionService.alwaysOpen;
    }
    get hostClasses() {
        return {
            accordion: true,
            'accordion-flush': !!this.flush
        };
    }
    constructor(accordionService) {
        this.accordionService = accordionService;
    }
}
AccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionComponent, deps: [{ token: i1.AccordionService }], target: i0.ɵɵFactoryTarget.Component });
AccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AccordionComponent, selector: "c-accordion", inputs: { flush: "flush", alwaysOpen: "alwaysOpen" }, host: { properties: { "class": "this.hostClasses" } }, providers: [AccordionService], exportAs: ["cAccordionItem"], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-accordion', template: `<ng-content></ng-content>`, exportAs: 'cAccordionItem', providers: [AccordionService], styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AccordionService }]; }, propDecorators: { flush: [{
                type: Input
            }], alwaysOpen: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYWNjb3JkaW9uL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQVM1RSxNQUFNLE9BQU8sa0JBQWtCO0lBUzdCOzs7T0FHRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixpQkFBaUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7OytHQS9CTyxrQkFBa0I7bUdBQWxCLGtCQUFrQixtSkFGbEIsQ0FBQyxnQkFBZ0IsQ0FBQyx3REFIbkIsMkJBQTJCOzJGQUsxQixrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0UsYUFBYSxZQUNiLDJCQUEyQixZQUUzQixnQkFBZ0IsYUFDZixDQUFDLGdCQUFnQixDQUFDO3VHQVVwQixLQUFLO3NCQUFiLEtBQUs7Z0JBTUYsVUFBVTtzQkFEYixLQUFLO2dCQVNGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL2FjY29yZGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjQWNjb3JkaW9uSXRlbScsXG4gIHByb3ZpZGVyczogW0FjY29yZGlvblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Fsd2F5c09wZW46IEJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kLWNvbG9yLCBzb21lIGJvcmRlcnMsIGFuZCBzb21lIHJvdW5kZWQgY29ybmVycyB0byByZW5kZXIgYWNjb3JkaW9ucyBlZGdlLXRvLWVkZ2Ugd2l0aCB0aGVpciBwYXJlbnQgY29udGFpbmVyLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBmbHVzaD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBNYWtlIGFjY29yZGlvbiBpdGVtcyBzdGF5IG9wZW4gd2hlbiBhbm90aGVyIGl0ZW0gaXMgb3BlbmVkXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbHdheXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLmFsd2F5c09wZW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIGdldCBhbHdheXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjY29yZGlvblNlcnZpY2UuYWx3YXlzT3BlbjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWNjb3JkaW9uOiB0cnVlLFxuICAgICAgJ2FjY29yZGlvbi1mbHVzaCc6ICEhdGhpcy5mbHVzaFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IEFjY29yZGlvblNlcnZpY2VcbiAgKSB7fVxuXG59XG4iXX0=