import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CardComponent } from '../../card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../card/card-body.component";
export class WidgetStatBComponent extends CardComponent {
    constructor() {
        super();
        this._inverse = false;
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
    get hostClasses() {
        return {
            'card': true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
            'text-high-emphasis-inverse': !!this.color
        };
    }
}
WidgetStatBComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatBComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatBComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatBComponent, selector: "c-widget-stat-b", inputs: { color: "color", textColor: "textColor", title: "title", text: "text", value: "value", inverse: "inverse" }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cWidgetStatB"], usesInheritance: true, ngImport: i0, template: "<c-card-body>\n  <div *ngIf=\"!!value\" class=\"fs-4 fw-semibold\">{{value}}</div>\n  <div *ngIf=\"!!title\">{{title}}</div>\n  <ng-content></ng-content>\n  <small *ngIf=\"text\" [ngClass]=\"inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'\">\n    {{text}}\n  </small>\n</c-card-body>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.CardBodyComponent, selector: "c-card-body, [c-card-body]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatBComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-b', exportAs: 'cWidgetStatB', template: "<c-card-body>\n  <div *ngIf=\"!!value\" class=\"fs-4 fw-semibold\">{{value}}</div>\n  <div *ngIf=\"!!title\">{{title}}</div>\n  <ng-content></ng-content>\n  <small *ngIf=\"text\" [ngClass]=\"inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'\">\n    {{text}}\n  </small>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], title: [{
                type: Input
            }], text: [{
                type: Input
            }], value: [{
                type: Input
            }], inverse: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1iL3dpZGdldC1zdGF0LWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtYi93aWRnZXQtc3RhdC1iLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQVEzQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBYTtJQUVyRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBeUNGLGFBQVEsR0FBRyxLQUFLLENBQUM7SUF4Q3pCLENBQUM7SUE2QkQ7OztPQUdHO0lBQ0gsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUdELElBQ2EsV0FBVztRQUN0QixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUk7WUFDWixDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2xDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDNUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQzNDLENBQUE7SUFDSCxDQUFDOztpSEF0RFUsb0JBQW9CO3FHQUFwQixvQkFBb0IsdVJDWmpDLGlUQVFBOzJGRElhLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSxpQkFBaUIsWUFHakIsY0FBYzswRUFjTixLQUFLO3NCQUF0QixLQUFLO2dCQUtZLFNBQVM7c0JBQTFCLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUYsT0FBTztzQkFEVixLQUFLO2dCQVVPLFdBQVc7c0JBRHZCLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vLi4vY29yZXVpLnR5cGVzJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy13aWRnZXQtc3RhdC1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC1zdGF0LWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXQtc3RhdC1iLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY1dpZGdldFN0YXRCJ1xufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRTdGF0QkNvbXBvbmVudCBleHRlbmRzIENhcmRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaW52ZXJzZTogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBvdmVycmlkZSBjb2xvcj86IENvbG9ycztcbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQtY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgb3ZlcnJpZGUgdGV4dENvbG9yPzogQ29sb3JzIHwgJ3doaXRlJyB8ICdtdXRlZCc7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgd2lkZ2V0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEhlbHBlciB0ZXh0IGZvciB5b3VyIHdpZGdldC5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICogVmFsdWUgZm9yIHlvdXIgd2lkZ2V0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEludmVydCBjb2xvcnMgZnJvbSB0aGVpciBkZWZhdWx0IGRhcmsgc2hhZGUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBpbnZlcnNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbnZlcnNlO1xuICB9XG4gIHNldCBpbnZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW52ZXJzZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaW52ZXJzZSA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBvdmVycmlkZSBnZXQgaG9zdENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjYXJkJzogdHJ1ZSxcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgICBbYHRleHQtJHt0aGlzLnRleHRDb2xvcn1gXTogISF0aGlzLnRleHRDb2xvcixcbiAgICAgICd0ZXh0LWhpZ2gtZW1waGFzaXMtaW52ZXJzZSc6ICEhdGhpcy5jb2xvclxuICAgIH1cbiAgfVxuXG59XG4iLCI8Yy1jYXJkLWJvZHk+XG4gIDxkaXYgKm5nSWY9XCIhIXZhbHVlXCIgY2xhc3M9XCJmcy00IGZ3LXNlbWlib2xkXCI+e3t2YWx1ZX19PC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhIXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPHNtYWxsICpuZ0lmPVwidGV4dFwiIFtuZ0NsYXNzXT1cImludmVyc2UgPyAndGV4dC1tZWRpdW0tZW1waGFzaXMtaW52ZXJzZScgOiAndGV4dC1tZWRpdW0tZW1waGFzaXMnXCI+XG4gICAge3t0ZXh0fX1cbiAgPC9zbWFsbD5cbjwvYy1jYXJkLWJvZHk+XG4iXX0=