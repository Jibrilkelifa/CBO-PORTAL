import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./sidebar-nav.service";
import * as i2 from "@angular/common";
import * as i3 from "../../shared/html-attr.directive";
import * as i4 from "./sidebar-nav-badge.pipe";
export class SidebarNavLabelComponent {
    constructor(helper) {
        this.helper = helper;
        this.classes = {
            'c-nav-label': true,
            'c-active': true
        };
        this.iconClasses = {};
    }
    ngOnInit() {
        this.iconClasses = this.helper.getIconClass(this.item);
    }
    getItemClass() {
        const itemClass = this.item.class;
        // @ts-ignore
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    }
    getLabelIconClass() {
        const variant = `text-${this.item.label.variant}`;
        // @ts-ignore
        this.iconClasses[variant] = !!this.item.label.variant;
        const labelClass = this.item.label.class;
        // @ts-ignore
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    }
}
SidebarNavLabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLabelComponent, deps: [{ token: i1.SidebarNavHelper }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavLabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavLabelComponent, selector: "c-sidebar-nav-label", inputs: { item: "item" }, ngImport: i0, template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "pipe", type: i4.SidebarNavBadgePipe, name: "cSidebarNavBadge" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav-label', template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [cHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n" }]
        }], ctorParameters: function () { return [{ type: i1.SidebarNavHelper }]; }, propDecorators: { item: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBT3ZELE1BQU0sT0FBTyx3QkFBd0I7SUFTbkMsWUFDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVB6QixZQUFPLEdBQUc7WUFDaEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNNLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBSXJCLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQyxhQUFhO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsTUFBTSxPQUFPLEdBQUcsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3RELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QyxhQUFhO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztxSEEvQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0IscUZDUHJDLGdWQU9BOzJGREFhLHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSxxQkFBcUI7dUdBSXRCLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1zaWRlYmFyLW5hdi1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLW5hdi1sYWJlbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIHByaXZhdGUgY2xhc3NlcyA9IHtcbiAgICAnYy1uYXYtbGFiZWwnOiB0cnVlLFxuICAgICdjLWFjdGl2ZSc6IHRydWVcbiAgfTtcbiAgcHJpdmF0ZSBpY29uQ2xhc3NlcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmljb25DbGFzc2VzID0gdGhpcy5oZWxwZXIuZ2V0SWNvbkNsYXNzKHRoaXMuaXRlbSk7XG4gIH1cblxuICBnZXRJdGVtQ2xhc3MoKSB7XG4gICAgY29uc3QgaXRlbUNsYXNzID0gdGhpcy5pdGVtLmNsYXNzO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmNsYXNzZXNbaXRlbUNsYXNzXSA9ICEhaXRlbUNsYXNzO1xuICAgIHJldHVybiB0aGlzLmNsYXNzZXM7XG4gIH1cbiAgZ2V0TGFiZWxJY29uQ2xhc3MoKSB7XG4gICAgY29uc3QgdmFyaWFudCA9IGB0ZXh0LSR7dGhpcy5pdGVtLmxhYmVsLnZhcmlhbnR9YDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5pY29uQ2xhc3Nlc1t2YXJpYW50XSA9ICEhdGhpcy5pdGVtLmxhYmVsLnZhcmlhbnQ7XG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHRoaXMuaXRlbS5sYWJlbC5jbGFzcztcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5pY29uQ2xhc3Nlc1tsYWJlbENsYXNzXSA9ICEhbGFiZWxDbGFzcztcbiAgICByZXR1cm4gdGhpcy5pY29uQ2xhc3NlcztcbiAgfVxufVxuIiwiPGEgW25nQ2xhc3NdPVwiZ2V0SXRlbUNsYXNzKClcIlxuICAgaHJlZj1cInt7aXRlbS51cmx9fVwiXG4gICBbY0h0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxuICA8aSAqbmdJZj1cImhlbHBlci5oYXNJY29uKGl0ZW0pXCIgW25nQ2xhc3NdPVwiZ2V0TGFiZWxJY29uQ2xhc3MoKVwiPjwvaT5cbiAgPG5nLWNvbnRhaW5lcj57eyBpdGVtLm5hbWUgfX08L25nLWNvbnRhaW5lcj5cbiAgPHNwYW4gKm5nSWY9XCJoZWxwZXIuaGFzQmFkZ2UoaXRlbSlcIiBbbmdDbGFzc109XCJpdGVtIHwgY1NpZGViYXJOYXZCYWRnZVwiPnt7IGl0ZW0uYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbjwvYT5cbiJdfQ==