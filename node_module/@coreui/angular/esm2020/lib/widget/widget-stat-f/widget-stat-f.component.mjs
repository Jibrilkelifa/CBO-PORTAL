import { Component, ContentChildren, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplateIdDirective } from '../../shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../card/card-body.component";
import * as i3 from "../../card/card-footer.component";
export class WidgetStatFComponent {
    constructor() {
        this._padding = false;
        this.templates = {};
    }
    /**
     * Set padding of your component.
     * @type boolean
     */
    get padding() {
        return this._padding;
    }
    set padding(value) {
        this._padding = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            card: true
        };
    }
    get cardBodyClasses() {
        return {
            'd-flex': true,
            'align-items-center': true,
            'p-0': !this.padding,
        };
    }
    get iconClasses() {
        return {
            'me-3': !this.textColor,
            'text-white': true,
            [`bg-${this.color}`]: !!this.color,
            'p-3': this.padding,
            'p-4': !this.padding,
        };
    }
    get titleClasses() {
        return {
            'text-medium-emphasis': !this.textColor,
            'small': true,
            'text-uppercase': true,
            'fw-semibold': true,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    get valueClasses() {
        return {
            'fs-6': !this.textColor,
            'fw-semibold': true,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
}
WidgetStatFComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatFComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatFComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatFComponent, selector: "c-widget-stat-f", inputs: { color: "color", textColor: "textColor", footer: "footer", icon: "icon", padding: "padding", title: "title", value: "value" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cWidgetStatB"], ngImport: i0, template: "<ng-container>\n  <c-card-body [ngClass]=\"cardBodyClasses\">\n    <div [ngClass]=\"iconClasses\">\n      <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n    </div>\n    <div>\n      <div [ngClass]=\"valueClasses\">{{value}}</div>\n      <div [ngClass]=\"titleClasses\">{{title}}</div>\n    </div>\n  </c-card-body>\n  <c-card-footer *ngIf=\"footer || templates?.widgetFooterTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetFooterTemplate || defaultFooterIconTemplate\"></ng-container>\n  </c-card-footer>\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{icon}}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{footer}}</span>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "component", type: i3.CardFooterComponent, selector: "c-card-footer, [c-card-footer]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatFComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-f', exportAs: 'cWidgetStatB', template: "<ng-container>\n  <c-card-body [ngClass]=\"cardBodyClasses\">\n    <div [ngClass]=\"iconClasses\">\n      <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n    </div>\n    <div>\n      <div [ngClass]=\"valueClasses\">{{value}}</div>\n      <div [ngClass]=\"titleClasses\">{{title}}</div>\n    </div>\n  </c-card-body>\n  <c-card-footer *ngIf=\"footer || templates?.widgetFooterTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetFooterTemplate || defaultFooterIconTemplate\"></ng-container>\n  </c-card-footer>\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{icon}}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{footer}}</span>\n</ng-template>\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], footer: [{
                type: Input
            }], icon: [{
                type: Input
            }], padding: [{
                type: Input
            }], title: [{
                type: Input
            }], value: [{
                type: Input
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1mL3dpZGdldC1zdGF0LWYuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtZi93aWRnZXQtc3RhdC1mLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBU25ELE1BQU0sT0FBTyxvQkFBb0I7SUFOakM7UUF5Q1UsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWF6QixjQUFTLEdBQVEsRUFBRSxDQUFDO0tBbURyQjtJQTNFQzs7O09BR0c7SUFDSCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBaUJELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPO1lBQ0wsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDckIsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPO1lBQ0wsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN2QyxPQUFPLEVBQUUsSUFBSTtZQUNiLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM3QyxDQUFBO0lBQ0gsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU87WUFDTCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN2QixhQUFhLEVBQUUsSUFBSTtZQUNuQixDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1NBQzdDLENBQUE7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUEwQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2lIQWxHVSxvQkFBb0I7cUdBQXBCLG9CQUFvQix1UkFpRGQsbUJBQW1CLDRFQzdEdEMsNndCQXNCQTsyRkRWYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBR2pCLGNBQWM7OEJBU2YsS0FBSztzQkFBYixLQUFLO2dCQUtHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBS0csTUFBTTtzQkFBZCxLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFPRixPQUFPO3NCQURWLEtBQUs7Z0JBYUcsS0FBSztzQkFBYixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFHcUQsZ0JBQWdCO3NCQUExRSxlQUFlO3VCQUFDLG1CQUFtQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQztnQkFHckQsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSG9zdEJpbmRpbmcsIElucHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgVGVtcGxhdGVJZERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi8uLi9jb3JldWkudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXdpZGdldC1zdGF0LWYnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lkZ2V0LXN0YXQtZi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldC1zdGF0LWYuY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjV2lkZ2V0U3RhdEInXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldFN0YXRGQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BhZGRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yPzogQ29sb3JzO1xuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dC1jb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Q29sb3I/OiBDb2xvcnMgfCAnd2hpdGUnIHwgJ211dGVkJztcbiAgLyoqXG4gICAqIEZvb3RlciBmb3IgeW91ciB3aWRnZXRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBmb290ZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJY29uIGZvciB5b3VyIHdpZGdldFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBwYWRkaW5nIG9mIHlvdXIgY29tcG9uZW50LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgcGFkZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFkZGluZztcbiAgfVxuICBzZXQgcGFkZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3BhZGRpbmcgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3BhZGRpbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIHdpZGdldCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWYWx1ZSBmb3IgeW91ciB3aWRnZXQgdG8gZGlzcGxheVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIHRlbXBsYXRlczogYW55ID0ge307XG4gIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVJZERpcmVjdGl2ZSwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgY29udGVudFRlbXBsYXRlcyE6IFF1ZXJ5TGlzdDxUZW1wbGF0ZUlkRGlyZWN0aXZlPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJkOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNhcmRCb2R5Q2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2QtZmxleCc6IHRydWUsXG4gICAgICAnYWxpZ24taXRlbXMtY2VudGVyJzogdHJ1ZSxcbiAgICAgICdwLTAnOiAhdGhpcy5wYWRkaW5nLFxuICAgIH1cbiAgfVxuXG4gIGdldCBpY29uQ2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ21lLTMnOiAhdGhpcy50ZXh0Q29sb3IsXG4gICAgICAndGV4dC13aGl0ZSc6IHRydWUsXG4gICAgICBbYGJnLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yLFxuICAgICAgJ3AtMyc6IHRoaXMucGFkZGluZyxcbiAgICAgICdwLTQnOiAhdGhpcy5wYWRkaW5nLFxuICAgIH1cbiAgfVxuXG4gIGdldCB0aXRsZUNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0ZXh0LW1lZGl1bS1lbXBoYXNpcyc6ICF0aGlzLnRleHRDb2xvcixcbiAgICAgICdzbWFsbCc6IHRydWUsXG4gICAgICAndGV4dC11cHBlcmNhc2UnOiB0cnVlLFxuICAgICAgJ2Z3LXNlbWlib2xkJzogdHJ1ZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yLFxuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZUNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmcy02JzogIXRoaXMudGV4dENvbG9yLFxuICAgICAgJ2Z3LXNlbWlib2xkJzogdHJ1ZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yLFxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZXMuZm9yRWFjaCgoY2hpbGQ6IFRlbXBsYXRlSWREaXJlY3RpdmUpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzW2NoaWxkLmlkXSA9IGNoaWxkLnRlbXBsYXRlUmVmO1xuICAgIH0pO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyPlxuICA8Yy1jYXJkLWJvZHkgW25nQ2xhc3NdPVwiY2FyZEJvZHlDbGFzc2VzXCI+XG4gICAgPGRpdiBbbmdDbGFzc109XCJpY29uQ2xhc3Nlc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlcz8ud2lkZ2V0SWNvblRlbXBsYXRlIHx8IGRlZmF1bHRXaWRnZXRJY29uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBbbmdDbGFzc109XCJ2YWx1ZUNsYXNzZXNcIj57e3ZhbHVlfX08L2Rpdj5cbiAgICAgIDxkaXYgW25nQ2xhc3NdPVwidGl0bGVDbGFzc2VzXCI+e3t0aXRsZX19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYy1jYXJkLWJvZHk+XG4gIDxjLWNhcmQtZm9vdGVyICpuZ0lmPVwiZm9vdGVyIHx8IHRlbXBsYXRlcz8ud2lkZ2V0Rm9vdGVyVGVtcGxhdGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzPy53aWRnZXRGb290ZXJUZW1wbGF0ZSB8fCBkZWZhdWx0Rm9vdGVySWNvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gIDwvYy1jYXJkLWZvb3Rlcj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRXaWRnZXRJY29uVGVtcGxhdGU+XG4gIDxzcGFuPnt7aWNvbn19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0Rm9vdGVySWNvblRlbXBsYXRlPlxuICA8c3Bhbj57e2Zvb3Rlcn19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==