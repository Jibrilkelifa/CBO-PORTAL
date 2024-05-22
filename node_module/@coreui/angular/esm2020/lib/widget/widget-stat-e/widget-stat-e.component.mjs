import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../card/card-body.component";
export class WidgetStatEComponent extends CardComponent {
    constructor() {
        super();
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
}
WidgetStatEComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatEComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WidgetStatEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: WidgetStatEComponent, selector: "c-widget-stat-e", inputs: { title: "title", value: "value" }, exportAs: ["cWidgetStatE"], usesInheritance: true, ngImport: i0, template: "<c-card-body class=\"text-center\">\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">{{title}}</div>\n  <div *ngIf=\"!!value\" class=\"fs-6 fw-semibold py-3\">{{value}}</div>\n  <ng-content></ng-content>\n</c-card-body>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.CardBodyComponent, selector: "c-card-body, [c-card-body]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: WidgetStatEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-e', exportAs: 'cWidgetStatE', template: "<c-card-body class=\"text-center\">\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">{{title}}</div>\n  <div *ngIf=\"!!value\" class=\"fs-6 fw-semibold py-3\">{{value}}</div>\n  <ng-content></ng-content>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1lL3dpZGdldC1zdGF0LWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtZS93aWRnZXQtc3RhdC1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFRM0MsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFFckQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFZRCxJQUFJLFlBQVk7UUFDZCxPQUFPO1lBQ0wsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN2QyxPQUFPLEVBQUUsSUFBSTtZQUNiLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM3QyxDQUFBO0lBQ0gsQ0FBQzs7aUhBeEJVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLHNKQ1RqQyxtT0FLQTsyRkRJYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBR2pCLGNBQWM7MEVBV2YsS0FBSztzQkFBYixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy13aWRnZXQtc3RhdC1lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC1zdGF0LWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXQtc3RhdC1lLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY1dpZGdldFN0YXRFJ1xufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRTdGF0RUNvbXBvbmVudCBleHRlbmRzIENhcmRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSB3aWRnZXQgdG8gZGlzcGxheVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogVmFsdWUgZm9yIHlvdXIgd2lkZ2V0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nIHwgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcblxuICBnZXQgdGl0bGVDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAndGV4dC1tZWRpdW0tZW1waGFzaXMnOiAhdGhpcy50ZXh0Q29sb3IsXG4gICAgICAnc21hbGwnOiB0cnVlLFxuICAgICAgJ3RleHQtdXBwZXJjYXNlJzogdHJ1ZSxcbiAgICAgICdmdy1zZW1pYm9sZCc6IHRydWUsXG4gICAgICBbYHRleHQtJHt0aGlzLnRleHRDb2xvcn1gXTogISF0aGlzLnRleHRDb2xvcixcbiAgICB9XG4gIH1cblxufVxuIiwiPGMtY2FyZC1ib2R5IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgPGRpdiAqbmdJZj1cIiEhdGl0bGVcIiBbbmdDbGFzc109XCJ0aXRsZUNsYXNzZXNcIj57e3RpdGxlfX08L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiEhdmFsdWVcIiBjbGFzcz1cImZzLTYgZnctc2VtaWJvbGQgcHktM1wiPnt7dmFsdWV9fTwvZGl2PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2MtY2FyZC1ib2R5PlxuIl19