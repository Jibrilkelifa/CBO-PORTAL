import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../card/card-body.component";
import * as i3 from "../../card/card-header.component";
import * as i4 from "../../grid/col.component";
import * as i5 from "../../grid/row.directive";
export class WidgetStatDComponent {
    constructor() {
    }
    get hostClasses() {
        return {
            'card': true
        };
    }
    get headerClasses() {
        return {
            'position-relative': true,
            'd-flex': true,
            'justify-content-center': true,
            'align-items-center': true,
            [`bg-${this.color}`]: this.color,
        };
    }
}
WidgetStatDComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatDComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatDComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatDComponent, selector: "c-widget-stat-d", inputs: { color: "color", values: "values" }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cWidgetStatD"], ngImport: i0, template: "<c-card-header [ngClass]=\"headerClasses\">\n  <ng-content></ng-content>\n</c-card-header>\n<c-card-body cRow class=\"text-center\">\n  <ng-template [ngForOf]=\"values\" let-i=\"index\" let-item ngFor>\n    <div *ngIf=\"i % 2 !== 0\" class=\"vr\"></div>\n    <c-col>\n      <div class=\"fs-5 fw-semibold\">{{item.value}}</div>\n      <div class=\"text-uppercase text-medium-emphasis small\">{{item.title}}</div>\n    </c-col>\n  </ng-template>\n</c-card-body>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "component", type: i3.CardHeaderComponent, selector: "c-card-header, [c-card-header]" }, { kind: "component", type: i4.ColComponent, selector: "c-col" }, { kind: "directive", type: i5.RowDirective, selector: "[cRow]", inputs: ["xs", "sm", "md", "lg", "xl", "xxl"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatDComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-d', exportAs: 'cWidgetStatD', template: "<c-card-header [ngClass]=\"headerClasses\">\n  <ng-content></ng-content>\n</c-card-header>\n<c-card-body cRow class=\"text-center\">\n  <ng-template [ngForOf]=\"values\" let-i=\"index\" let-item ngFor>\n    <div *ngIf=\"i % 2 !== 0\" class=\"vr\"></div>\n    <c-col>\n      <div class=\"fs-5 fw-semibold\">{{item.value}}</div>\n      <div class=\"text-uppercase text-medium-emphasis small\">{{item.title}}</div>\n    </c-col>\n  </ng-template>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], values: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1kL3dpZGdldC1zdGF0LWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtZC93aWRnZXQtc3RhdC1kLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQWN0RSxNQUFNLE9BQU8sb0JBQW9CO0lBWS9CO0lBQ0EsQ0FBQztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTztZQUNMLG1CQUFtQixFQUFFLElBQUk7WUFDekIsUUFBUSxFQUFFLElBQUk7WUFDZCx3QkFBd0IsRUFBRSxJQUFJO1lBQzlCLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2pDLENBQUE7SUFDSCxDQUFDOztpSEE5QlUsb0JBQW9CO3FHQUFwQixvQkFBb0Isd0xDZGpDLCtjQVlBOzJGREVhLG9CQUFvQjtrQkFOaEMsU0FBUzsrQkFDRSxpQkFBaUIsWUFHakIsY0FBYzswRUFPZixLQUFLO3NCQUFiLEtBQUs7Z0JBS0csTUFBTTtzQkFBZCxLQUFLO2dCQU1GLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vLi4vY29yZXVpLnR5cGVzJztcblxuZXhwb3J0IHR5cGUgV2lkZ2V0U3RhdERWYWx1ZSA9IHtcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXdpZGdldC1zdGF0LWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lkZ2V0LXN0YXQtZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldC1zdGF0LWQuY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjV2lkZ2V0U3RhdEQnXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldFN0YXREQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yPzogQ29sb3JzO1xuICAvKipcbiAgICogVmFsdWVzIGFuZCBzdWJ0aXRsZXMgZm9yIHlvdXIgY29tcG9uZW50LlxuICAgKiBAdHlwZSBXaWRnZXRTdGF0RFZhbHVlXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZXM/OiBXaWRnZXRTdGF0RFZhbHVlW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnY2FyZCc6IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXQgaGVhZGVyQ2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3Bvc2l0aW9uLXJlbGF0aXZlJzogdHJ1ZSxcbiAgICAgICdkLWZsZXgnOiB0cnVlLFxuICAgICAgJ2p1c3RpZnktY29udGVudC1jZW50ZXInOiB0cnVlLFxuICAgICAgJ2FsaWduLWl0ZW1zLWNlbnRlcic6IHRydWUsXG4gICAgICBbYGJnLSR7dGhpcy5jb2xvcn1gXTogdGhpcy5jb2xvcixcbiAgICB9XG4gIH1cblxufVxuIiwiPGMtY2FyZC1oZWFkZXIgW25nQ2xhc3NdPVwiaGVhZGVyQ2xhc3Nlc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2MtY2FyZC1oZWFkZXI+XG48Yy1jYXJkLWJvZHkgY1JvdyBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gIDxuZy10ZW1wbGF0ZSBbbmdGb3JPZl09XCJ2YWx1ZXNcIiBsZXQtaT1cImluZGV4XCIgbGV0LWl0ZW0gbmdGb3I+XG4gICAgPGRpdiAqbmdJZj1cImkgJSAyICE9PSAwXCIgY2xhc3M9XCJ2clwiPjwvZGl2PlxuICAgIDxjLWNvbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmcy01IGZ3LXNlbWlib2xkXCI+e3tpdGVtLnZhbHVlfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LW1lZGl1bS1lbXBoYXNpcyBzbWFsbFwiPnt7aXRlbS50aXRsZX19PC9kaXY+XG4gICAgPC9jLWNvbD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvYy1jYXJkLWJvZHk+XG4iXX0=