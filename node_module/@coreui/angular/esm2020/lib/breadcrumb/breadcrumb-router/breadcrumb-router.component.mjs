import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./breadcrumb-router.service";
import * as i2 from "@angular/common";
import * as i3 from "../breadcrumb-item/breadcrumb-item.component";
import * as i4 from "../breadcrumb/breadcrumb.component";
export class BreadcrumbRouterComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.breadcrumbs = this.service.breadcrumbs$;
    }
    ngOnChanges(changes) {
        if (changes['items']) {
            this.setup();
        }
    }
    setup() {
        if (this.items && this.items.length > 0) {
            this.breadcrumbs = new Observable((observer) => {
                if (this.items) {
                    observer.next(this.items);
                }
            });
        }
    }
    ngOnDestroy() {
        this.breadcrumbs = undefined;
    }
}
BreadcrumbRouterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterComponent, deps: [{ token: i1.BreadcrumbRouterService }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbRouterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: BreadcrumbRouterComponent, selector: "c-breadcrumb-router, [cBreadcrumbRouter]", inputs: { items: "items" }, usesOnChanges: true, ngImport: i0, template: "<c-breadcrumb class=\"m-0\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last=\"last\">\n    <ng-container *ngIf=\"breadcrumb?.label && (breadcrumb?.url?.slice(-1) === '/' || last)\">\n      <c-breadcrumb-item\n        [active]=\"last\"\n        [url]=\"breadcrumb?.url\"\n        [attributes]=\"breadcrumb?.attributes\"\n        [linkProps]=\"breadcrumb?.linkProps\"\n      >\n        {{ breadcrumb?.label }}\n      </c-breadcrumb-item>\n    </ng-container>\n  </ng-template>\n</c-breadcrumb>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.BreadcrumbItemComponent, selector: "c-breadcrumb-item", inputs: ["active", "url", "attributes", "linkProps"] }, { kind: "component", type: i4.BreadcrumbComponent, selector: "c-breadcrumb", inputs: ["ariaLabel", "role"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-breadcrumb-router, [cBreadcrumbRouter]', template: "<c-breadcrumb class=\"m-0\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last=\"last\">\n    <ng-container *ngIf=\"breadcrumb?.label && (breadcrumb?.url?.slice(-1) === '/' || last)\">\n      <c-breadcrumb-item\n        [active]=\"last\"\n        [url]=\"breadcrumb?.url\"\n        [attributes]=\"breadcrumb?.attributes\"\n        [linkProps]=\"breadcrumb?.linkProps\"\n      >\n        {{ breadcrumb?.label }}\n      </c-breadcrumb-item>\n    </ng-container>\n  </ng-template>\n</c-breadcrumb>\n" }]
        }], ctorParameters: function () { return [{ type: i1.BreadcrumbRouterService }]; }, propDecorators: { items: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1yb3V0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9icmVhZGNydW1iL2JyZWFkY3J1bWItcm91dGVyL2JyZWFkY3J1bWItcm91dGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLXJvdXRlci9icmVhZGNydW1iLXJvdXRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFHOUYsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBUTFDLE1BQU0sT0FBTyx5QkFBeUI7SUFTcEMsWUFDUyxPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtJQUNyQyxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDL0MsQ0FBQztJQUVNLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxDQUFvQixDQUFDLFFBQXFDLEVBQUUsRUFBRTtnQkFDN0YsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7O3NIQW5DVSx5QkFBeUI7MEdBQXpCLHlCQUF5QixpSUNYdEMsZ2hCQWNBOzJGREhhLHlCQUF5QjtrQkFMckMsU0FBUzsrQkFDRSwwQ0FBMEM7OEdBUzNDLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtJQnJlYWRjcnVtYkl0ZW19IGZyb20gJy4uL2JyZWFkY3J1bWItaXRlbS9icmVhZGNydW1iLWl0ZW0nO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCcmVhZGNydW1iUm91dGVyU2VydmljZSB9IGZyb20gJy4vYnJlYWRjcnVtYi1yb3V0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYnJlYWRjcnVtYi1yb3V0ZXIsIFtjQnJlYWRjcnVtYlJvdXRlcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi1yb3V0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLXJvdXRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJSb3V0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsIGFycmF5IG9mIElCcmVhZGNydW1iSXRlbSB0byBvdmVycmlkZSBkZWZhdWx0IEJyZWFkY3J1bWJSb3V0ZXIgYmVoYXZpb3IuIFtkb2NzXVxuICAgKiBAdHlwZSBJQnJlYWRjcnVtYkl0ZW1bXVxuICAgKi9cbiAgQElucHV0KCkgaXRlbXM/OiBJQnJlYWRjcnVtYkl0ZW1bXTtcblxuICBwdWJsaWMgYnJlYWRjcnVtYnM6IE9ic2VydmFibGU8SUJyZWFkY3J1bWJJdGVtW10+IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBCcmVhZGNydW1iUm91dGVyU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5zZXJ2aWNlLmJyZWFkY3J1bWJzJDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2l0ZW1zJ10pIHtcbiAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICB9XG4gIH1cblxuICBzZXR1cCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBuZXcgT2JzZXJ2YWJsZTxJQnJlYWRjcnVtYkl0ZW1bXT4oKG9ic2VydmVyOiBPYnNlcnZlcjxJQnJlYWRjcnVtYkl0ZW1bXT4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMuaXRlbXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCI8Yy1icmVhZGNydW1iIGNsYXNzPVwibS0wXCI+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtYnJlYWRjcnVtYiBbbmdGb3JPZl09XCJicmVhZGNydW1icyB8IGFzeW5jXCIgbGV0LWxhc3Q9XCJsYXN0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJyZWFkY3J1bWI/LmxhYmVsICYmIChicmVhZGNydW1iPy51cmw/LnNsaWNlKC0xKSA9PT0gJy8nIHx8IGxhc3QpXCI+XG4gICAgICA8Yy1icmVhZGNydW1iLWl0ZW1cbiAgICAgICAgW2FjdGl2ZV09XCJsYXN0XCJcbiAgICAgICAgW3VybF09XCJicmVhZGNydW1iPy51cmxcIlxuICAgICAgICBbYXR0cmlidXRlc109XCJicmVhZGNydW1iPy5hdHRyaWJ1dGVzXCJcbiAgICAgICAgW2xpbmtQcm9wc109XCJicmVhZGNydW1iPy5saW5rUHJvcHNcIlxuICAgICAgPlxuICAgICAgICB7eyBicmVhZGNydW1iPy5sYWJlbCB9fVxuICAgICAgPC9jLWJyZWFkY3J1bWItaXRlbT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvYy1icmVhZGNydW1iPlxuIl19