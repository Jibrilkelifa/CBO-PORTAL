import { Component, ContentChildren, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CardComponent } from '../../card';
import { TemplateIdDirective } from '../../shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../card/card-body.component";
export class WidgetStatCComponent extends CardComponent {
    constructor() {
        super();
        this._inverse = false;
        this.templates = {};
    }
    /**
     * Invert colors from their default dark shade.
     * @type boolean
     */
    get inverse() {
        return this._inverse;
    }
    set inverse(value) {
        this._inverse = coerceBooleanProperty(value);
    }
    get hostExtendedClass() {
        return {
            'high-emphasis-inverse': this.inverse
        };
    }
    get iconClasses() {
        return {
            'mb-4': !this.textColor,
            'text-end': true,
            'text-medium-emphasis': !this.inverse,
            'text-medium-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    get titleClasses() {
        return {
            'text-medium-emphasis': !this.inverse,
            'text-medium-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    get valueClasses() {
        return {
            'fs-4': !this.textColor,
            'fw-semibold': true,
            'text-high-emphasis': !this.inverse,
            'text-high-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor,
        };
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
}
WidgetStatCComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatCComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatCComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatCComponent, selector: "c-widget-stat-c", inputs: { icon: "icon", title: "title", value: "value", inverse: "inverse" }, host: { properties: { "class": "this.hostExtendedClass" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cWidgetStatC"], usesInheritance: true, ngImport: i0, template: "<c-card-body>\n  <div *ngIf=\"icon || templates?.widgetIconTemplate\" [ngClass]=\"iconClasses\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n  </div>\n  <div *ngIf=\"!!value\" [ngClass]=\"valueClasses\">\n    {{value}}\n  </div>\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">\n    {{title}}\n  </div>\n  <ng-container *ngIf=\"templates?.widgetProgressTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetProgressTemplate || defaultWidgetProgressTemplate\"></ng-container>\n  </ng-container>\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{icon}}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.CardBodyComponent, selector: "c-card-body, [c-card-body]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatCComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-c', exportAs: 'cWidgetStatC', template: "<c-card-body>\n  <div *ngIf=\"icon || templates?.widgetIconTemplate\" [ngClass]=\"iconClasses\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n  </div>\n  <div *ngIf=\"!!value\" [ngClass]=\"valueClasses\">\n    {{value}}\n  </div>\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">\n    {{title}}\n  </div>\n  <ng-container *ngIf=\"templates?.widgetProgressTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetProgressTemplate || defaultWidgetProgressTemplate\"></ng-container>\n  </ng-container>\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{icon}}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { icon: [{
                type: Input
            }], title: [{
                type: Input
            }], value: [{
                type: Input
            }], inverse: [{
                type: Input
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], hostExtendedClass: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1jL3dpZGdldC1zdGF0LWMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtYy93aWRnZXQtc3RhdC1jLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVFuRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBYTtJQUVyRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBK0JGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFekIsY0FBUyxHQUFRLEVBQUUsQ0FBQztJQWhDcEIsQ0FBQztJQW1CRDs7O09BR0c7SUFDSCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBTUQsSUFDSSxpQkFBaUI7UUFDbkIsT0FBTztZQUNMLHVCQUF1QixFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RDLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTztZQUNMLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLHNCQUFzQixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDckMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDNUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM3QyxDQUFBO0lBQ0gsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3JDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzVDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDN0MsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPO1lBQ0wsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdkIsYUFBYSxFQUFFLElBQUk7WUFDbkIsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNuQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMxQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1NBQzdDLENBQUE7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUEwQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2lIQTlFVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixtT0FxQ2QsbUJBQW1CLG1HQ2pEdEMsa3dCQXNCQTsyRkRWYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBR2pCLGNBQWM7MEVBY2YsSUFBSTtzQkFBWixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUYsT0FBTztzQkFEVixLQUFLO2dCQVVxRCxnQkFBZ0I7c0JBQTFFLGVBQWU7dUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDO2dCQUdyRCxpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBIb3N0QmluZGluZywgSW5wdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2FyZCc7XG5pbXBvcnQgeyBUZW1wbGF0ZUlkRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy13aWRnZXQtc3RhdC1jJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC1zdGF0LWMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXQtc3RhdC1jLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY1dpZGdldFN0YXRDJ1xufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRTdGF0Q0NvbXBvbmVudCBleHRlbmRzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ludmVyc2U6IEJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogSWNvbiBmb3IgeW91ciBjb21wb25lbnQuXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgaWNvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSB3aWRnZXQgdG8gZGlzcGxheVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogVmFsdWUgZm9yIHlvdXIgd2lkZ2V0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIEludmVydCBjb2xvcnMgZnJvbSB0aGVpciBkZWZhdWx0IGRhcmsgc2hhZGUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpbnZlcnNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbnZlcnNlO1xuICB9XG4gIHNldCBpbnZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW52ZXJzZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaW52ZXJzZSA9IGZhbHNlO1xuXG4gIHRlbXBsYXRlczogYW55ID0ge307XG4gIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVJZERpcmVjdGl2ZSwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgY29udGVudFRlbXBsYXRlcyE6IFF1ZXJ5TGlzdDxUZW1wbGF0ZUlkRGlyZWN0aXZlPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RFeHRlbmRlZENsYXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnaGlnaC1lbXBoYXNpcy1pbnZlcnNlJzogdGhpcy5pbnZlcnNlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGljb25DbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnbWItNCc6ICF0aGlzLnRleHRDb2xvcixcbiAgICAgICd0ZXh0LWVuZCc6IHRydWUsXG4gICAgICAndGV4dC1tZWRpdW0tZW1waGFzaXMnOiAhdGhpcy5pbnZlcnNlLFxuICAgICAgJ3RleHQtbWVkaXVtLWVtcGhhc2lzLWludmVyc2UnOiB0aGlzLmludmVyc2UsXG4gICAgICBbYHRleHQtJHt0aGlzLnRleHRDb2xvcn1gXTogISF0aGlzLnRleHRDb2xvcixcbiAgICB9XG4gIH1cblxuICBnZXQgdGl0bGVDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAndGV4dC1tZWRpdW0tZW1waGFzaXMnOiAhdGhpcy5pbnZlcnNlLFxuICAgICAgJ3RleHQtbWVkaXVtLWVtcGhhc2lzLWludmVyc2UnOiB0aGlzLmludmVyc2UsXG4gICAgICBbYHRleHQtJHt0aGlzLnRleHRDb2xvcn1gXTogISF0aGlzLnRleHRDb2xvcixcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWVDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnZnMtNCc6ICF0aGlzLnRleHRDb2xvcixcbiAgICAgICdmdy1zZW1pYm9sZCc6IHRydWUsXG4gICAgICAndGV4dC1oaWdoLWVtcGhhc2lzJzogIXRoaXMuaW52ZXJzZSxcbiAgICAgICd0ZXh0LWhpZ2gtZW1waGFzaXMtaW52ZXJzZSc6IHRoaXMuaW52ZXJzZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yLFxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZXMuZm9yRWFjaCgoY2hpbGQ6IFRlbXBsYXRlSWREaXJlY3RpdmUpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzW2NoaWxkLmlkXSA9IGNoaWxkLnRlbXBsYXRlUmVmO1xuICAgIH0pO1xuICB9XG59XG4iLCI8Yy1jYXJkLWJvZHk+XG4gIDxkaXYgKm5nSWY9XCJpY29uIHx8IHRlbXBsYXRlcz8ud2lkZ2V0SWNvblRlbXBsYXRlXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzZXNcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzPy53aWRnZXRJY29uVGVtcGxhdGUgfHwgZGVmYXVsdFdpZGdldEljb25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiEhdmFsdWVcIiBbbmdDbGFzc109XCJ2YWx1ZUNsYXNzZXNcIj5cbiAgICB7e3ZhbHVlfX1cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhIXRpdGxlXCIgW25nQ2xhc3NdPVwidGl0bGVDbGFzc2VzXCI+XG4gICAge3t0aXRsZX19XG4gIDwvZGl2PlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVzPy53aWRnZXRQcm9ncmVzc1RlbXBsYXRlXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlcz8ud2lkZ2V0UHJvZ3Jlc3NUZW1wbGF0ZSB8fCBkZWZhdWx0V2lkZ2V0UHJvZ3Jlc3NUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvYy1jYXJkLWJvZHk+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFdpZGdldEljb25UZW1wbGF0ZT5cbiAge3tpY29ufX1cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFdpZGdldFByb2dyZXNzVGVtcGxhdGU+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=