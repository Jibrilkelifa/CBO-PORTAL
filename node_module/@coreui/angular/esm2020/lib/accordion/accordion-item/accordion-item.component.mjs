import { Component, ContentChildren, HostBinding, Input, } from '@angular/core';
import { TemplateIdDirective } from '../../shared';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../accordion.service";
import * as i2 from "@angular/common";
import * as i3 from "../../collapse/collapse.directive";
import * as i4 from "../accordion-button/accordion-button.directive";
let nextId = 0;
export class AccordionItemComponent {
    /**
     * Toggle an accordion item programmatically
     * @type boolean
     * @default false
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    set open(value) {
        console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
        this.visible = value || this.visible;
    }
    get open() {
        return this.visible;
    }
    get hostClasses() {
        return {
            'accordion-item': true,
        };
    }
    constructor(accordionService) {
        this.accordionService = accordionService;
        this._visible = false;
        this.contentId = `accordion-item-${nextId++}`;
        this.itemContext = { $implicit: this.visible };
        this.templates = {};
    }
    ngOnInit() {
        this.accordionService.addItem(this);
    }
    ngOnDestroy() {
        this.accordionService.removeItem(this);
    }
    toggleItem() {
        this.accordionService.toggleItem(this);
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
}
AccordionItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionItemComponent, deps: [{ token: i1.AccordionService }], target: i0.ɵɵFactoryTarget.Component });
AccordionItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AccordionItemComponent, selector: "c-accordion-item", inputs: { visible: "visible", open: "open" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cAccordionItem"], ngImport: i0, template: "<ng-container>\n  <div class=\"accordion-header\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext\"></ng-container>\n  </div>\n  <div class=\"accordion-collapse\" cCollapse [visible]=\"visible\" [attr.aria-expanded]=\"visible\" [id]=\"contentId\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #defaultAccordionHeaderTemplate>\n  <button cAccordionButton [collapsed]=\"!visible\" [attr.aria-controls]=\"contentId\" (click)=\"toggleItem()\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext\">\n    </ng-container>\n  </button>\n</ng-template>\n\n<ng-template #defaultAccordionHeaderContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #defaultAccordionBodyTemplate>\n  <div class=\"accordion-body\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext\">\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #defaultAccordionBodyContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"], dependencies: [{ kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.CollapseDirective, selector: "[cCollapse]", inputs: ["animate", "horizontal", "visible", "navbar", "duration", "transition"], outputs: ["collapseChange"], exportAs: ["cCollapse"] }, { kind: "directive", type: i4.AccordionButtonDirective, selector: "[cAccordionButton]", inputs: ["collapsed", "type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-accordion-item', exportAs: 'cAccordionItem', template: "<ng-container>\n  <div class=\"accordion-header\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext\"></ng-container>\n  </div>\n  <div class=\"accordion-collapse\" cCollapse [visible]=\"visible\" [attr.aria-expanded]=\"visible\" [id]=\"contentId\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #defaultAccordionHeaderTemplate>\n  <button cAccordionButton [collapsed]=\"!visible\" [attr.aria-controls]=\"contentId\" (click)=\"toggleItem()\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext\">\n    </ng-container>\n  </button>\n</ng-template>\n\n<ng-template #defaultAccordionHeaderContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #defaultAccordionBodyTemplate>\n  <div class=\"accordion-body\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext\">\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #defaultAccordionBodyContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AccordionService }]; }, propDecorators: { visible: [{
                type: Input
            }], open: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsV0FBVyxFQUNYLEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbkQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFNUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBUWYsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQzs7OztPQUlHO0lBQ0gsSUFDSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUdELElBQ0ksSUFBSSxDQUFDLEtBQWM7UUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQywwRUFBMEUsQ0FBQyxDQUFBO1FBQ3hGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdkMsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFPRCxZQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBeEJwQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBaUJsQyxjQUFTLEdBQUcsa0JBQWtCLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUFRLEVBQUUsQ0FBQztJQU1oQixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUEwQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O21IQTNEVSxzQkFBc0I7dUdBQXRCLHNCQUFzQiw4TEFxQ2hCLG1CQUFtQiw4RUMzRHRDLGd6Q0FnQ0E7MkZEVmEsc0JBQXNCO2tCQU5sQyxTQUFTOytCQUNFLGtCQUFrQixZQUdsQixnQkFBZ0I7dUdBWXRCLE9BQU87c0JBRFYsS0FBSztnQkFVRixJQUFJO3NCQURQLEtBQUs7Z0JBVUYsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBVXVDLGdCQUFnQjtzQkFBMUUsZUFBZTt1QkFBQyxtQkFBbUIsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCwgUXVlcnlMaXN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL2FjY29yZGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRlbXBsYXRlSWREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1hY2NvcmRpb24taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY0FjY29yZGlvbkl0ZW0nLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXNpYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhbiBhY2NvcmRpb24gaXRlbSBwcm9ncmFtbWF0aWNhbGx5XG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKXtcbiAgICB0aGlzLl92aXNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuICBwcml2YXRlIF92aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zb2xlLndhcm4oJ2MtYWNjb3JkaW9uLWl0ZW0gXCJvcGVuXCIgcHJvcCBpcyBkZXByZWNhdGVkLCB1c2UgXCJ2aXNpYmxlXCIgIHByb3AgaW5zdGVhZC4nKVxuICAgIHRoaXMudmlzaWJsZSA9IHZhbHVlIHx8IHRoaXMudmlzaWJsZTtcbiAgfVxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnYWNjb3JkaW9uLWl0ZW0nOiB0cnVlLFxuICAgIH07XG4gIH1cbiAgY29udGVudElkID0gYGFjY29yZGlvbi1pdGVtLSR7bmV4dElkKyt9YDtcbiAgaXRlbUNvbnRleHQgPSB7ICRpbXBsaWNpdDogdGhpcy52aXNpYmxlIH07XG4gIHRlbXBsYXRlczogYW55ID0ge307XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZUlkRGlyZWN0aXZlLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBjb250ZW50VGVtcGxhdGVzITogUXVlcnlMaXN0PFRlbXBsYXRlSWREaXJlY3RpdmU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWNjb3JkaW9uU2VydmljZTogQWNjb3JkaW9uU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UuYWRkSXRlbSh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS5yZW1vdmVJdGVtKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlSXRlbSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UudG9nZ2xlSXRlbSh0aGlzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZXMuZm9yRWFjaCgoY2hpbGQ6IFRlbXBsYXRlSWREaXJlY3RpdmUpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzW2NoaWxkLmlkXSA9IGNoaWxkLnRlbXBsYXRlUmVmO1xuICAgIH0pO1xuICB9XG59XG5cbiIsIjxuZy1jb250YWluZXI+XG4gIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snYWNjb3JkaW9uSGVhZGVyVGVtcGxhdGUnXSB8fCBkZWZhdWx0QWNjb3JkaW9uSGVhZGVyVGVtcGxhdGU7IGNvbnRleHQ6IGl0ZW1Db250ZXh0XCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlXCIgY0NvbGxhcHNlIFt2aXNpYmxlXT1cInZpc2libGVcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cInZpc2libGVcIiBbaWRdPVwiY29udGVudElkXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snYWNjb3JkaW9uQm9keVRlbXBsYXRlJ10gfHwgZGVmYXVsdEFjY29yZGlvbkJvZHlUZW1wbGF0ZTsgY29udGV4dDogaXRlbUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0QWNjb3JkaW9uSGVhZGVyVGVtcGxhdGU+XG4gIDxidXR0b24gY0FjY29yZGlvbkJ1dHRvbiBbY29sbGFwc2VkXT1cIiF2aXNpYmxlXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJjb250ZW50SWRcIiAoY2xpY2spPVwidG9nZ2xlSXRlbSgpXCI+XG4gICAgPG5nLWNvbnRhaW5lclxuICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2FjY29yZGlvbkhlYWRlciddIHx8IGRlZmF1bHRBY2NvcmRpb25IZWFkZXJDb250ZW50VGVtcGxhdGU7IGNvbnRleHQ6IGl0ZW1Db250ZXh0XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0QWNjb3JkaW9uSGVhZGVyQ29udGVudFRlbXBsYXRlPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRBY2NvcmRpb25Cb2R5VGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydhY2NvcmRpb25Cb2R5J10gfHwgZGVmYXVsdEFjY29yZGlvbkJvZHlDb250ZW50VGVtcGxhdGU7IGNvbnRleHQ6IGl0ZW1Db250ZXh0XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0QWNjb3JkaW9uQm9keUNvbnRlbnRUZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==