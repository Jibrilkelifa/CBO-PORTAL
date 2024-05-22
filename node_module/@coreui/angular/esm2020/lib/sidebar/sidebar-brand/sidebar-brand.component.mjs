import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "../../shared/html-attr.directive";
export class SidebarBrandComponent {
    constructor() {
        this.sidebarBrandClass = true;
        this.brandImg = false;
    }
    ngOnInit() {
        this.brandImg = Boolean(this.brandFull || this.brandNarrow);
    }
}
SidebarBrandComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBrandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarBrandComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarBrandComponent, selector: "c-sidebar-brand", inputs: { brandFull: "brandFull", brandNarrow: "brandNarrow", routerLink: "routerLink" }, host: { properties: { "class.sidebar-brand": "this.sidebarBrandClass" } }, ngImport: i0, template: "<ng-template [ngIf]=\"brandImg\">\n  <a [routerLink]=\"routerLink\">\n    <img *ngIf=\"brandFull\"\n         [cHtmlAttr]=\"brandFull\"\n         [ngClass]=\"'sidebar-brand-full'\">\n    <img *ngIf=\"brandNarrow\"\n         [cHtmlAttr]=\"brandNarrow\"\n         [ngClass]=\"'sidebar-brand-narrow'\">\n  </a>\n</ng-template>\n<ng-template [ngIf]=\"!brandImg\">\n  <ng-content></ng-content>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBrandComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-brand', template: "<ng-template [ngIf]=\"brandImg\">\n  <a [routerLink]=\"routerLink\">\n    <img *ngIf=\"brandFull\"\n         [cHtmlAttr]=\"brandFull\"\n         [ngClass]=\"'sidebar-brand-full'\">\n    <img *ngIf=\"brandNarrow\"\n         [cHtmlAttr]=\"brandNarrow\"\n         [ngClass]=\"'sidebar-brand-narrow'\">\n  </a>\n</ng-template>\n<ng-template [ngIf]=\"!brandImg\">\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], propDecorators: { brandFull: [{
                type: Input
            }], brandNarrow: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], sidebarBrandClass: [{
                type: HostBinding,
                args: ['class.sidebar-brand']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1icmFuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NpZGViYXIvc2lkZWJhci1icmFuZC9zaWRlYmFyLWJyYW5kLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLWJyYW5kL3NpZGViYXItYnJhbmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztBQU10RSxNQUFNLE9BQU8scUJBQXFCO0lBSmxDO1FBVXNDLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUU3RCxhQUFRLEdBQUcsS0FBSyxDQUFDO0tBS2xCO0lBSEMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7O2tIQVpVLHFCQUFxQjtzR0FBckIscUJBQXFCLDROQ05sQyx1WkFhQTsyRkRQYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsaUJBQWlCOzhCQUtsQixTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFOEIsaUJBQWlCO3NCQUFwRCxXQUFXO3VCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1zaWRlYmFyLWJyYW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItYnJhbmQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJCcmFuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYnJhbmRGdWxsPzogYW55O1xuICBASW5wdXQoKSBicmFuZE5hcnJvdz86IGFueTtcbiAgQElucHV0KCkgcm91dGVyTGluaz86IGFueVtdIHwgc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhci1icmFuZCcpIHNpZGViYXJCcmFuZENsYXNzID0gdHJ1ZTtcblxuICBicmFuZEltZyA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnJhbmRJbWcgPSBCb29sZWFuKHRoaXMuYnJhbmRGdWxsIHx8IHRoaXMuYnJhbmROYXJyb3cpO1xuICB9XG59XG4iLCI8bmctdGVtcGxhdGUgW25nSWZdPVwiYnJhbmRJbWdcIj5cbiAgPGEgW3JvdXRlckxpbmtdPVwicm91dGVyTGlua1wiPlxuICAgIDxpbWcgKm5nSWY9XCJicmFuZEZ1bGxcIlxuICAgICAgICAgW2NIdG1sQXR0cl09XCJicmFuZEZ1bGxcIlxuICAgICAgICAgW25nQ2xhc3NdPVwiJ3NpZGViYXItYnJhbmQtZnVsbCdcIj5cbiAgICA8aW1nICpuZ0lmPVwiYnJhbmROYXJyb3dcIlxuICAgICAgICAgW2NIdG1sQXR0cl09XCJicmFuZE5hcnJvd1wiXG4gICAgICAgICBbbmdDbGFzc109XCInc2lkZWJhci1icmFuZC1uYXJyb3cnXCI+XG4gIDwvYT5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgW25nSWZdPVwiIWJyYW5kSW1nXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=