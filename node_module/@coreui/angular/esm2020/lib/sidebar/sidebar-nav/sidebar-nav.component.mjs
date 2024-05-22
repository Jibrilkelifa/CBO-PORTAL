import { Component, ElementRef, HostBinding, Input, Optional, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarNavHelper } from './sidebar-nav.service';
import * as i0 from "@angular/core";
import * as i1 from "../sidebar/sidebar.component";
import * as i2 from "./sidebar-nav.service";
import * as i3 from "@angular/router";
import * as i4 from "../sidebar.service";
import * as i5 from "@angular/common";
import * as i6 from "../../shared/html-attr.directive";
import * as i7 from "./sidebar-nav-divider.component";
import * as i8 from "./sidebar-nav-label.component";
import * as i9 from "./sidebar-nav-link.component";
import * as i10 from "./sidebar-nav-title.component";
import * as i11 from "./sidebar-nav-item-class.pipe";
import * as i12 from "./sidebar-nav-group.service";
import * as i13 from "@coreui/icons-angular";
import * as i14 from "./sidebar-nav-badge.pipe";
import * as i15 from "./sidebar-nav-icon.pipe";
export class SidebarNavComponent {
    constructor(sidebar, helper, router, renderer, hostElement, sidebarService) {
        this.sidebar = sidebar;
        this.helper = helper;
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.sidebarService = sidebarService;
        this.navItems = [];
        this.dropdownMode = 'path';
        this.role = 'nav';
        this.navItemsArray = [];
    }
    get hostClasses() {
        return {
            'sidebar-nav': !this.groupItems,
            compact: !this.groupItems && !!this.compact
        };
    }
    get sidebarNavGroupItemsClass() {
        return !!this.groupItems;
    }
    ngOnChanges(changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    }
    hideMobile() {
        // todo: proper scrollIntoView() after NavigationEnd
        if (this.sidebar && this.sidebar.sidebarState.mobile) {
            this.sidebarService.toggle({ toggle: 'visible', sidebar: this.sidebar });
        }
    }
}
SidebarNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavComponent, deps: [{ token: i1.SidebarComponent, optional: true }, { token: i2.SidebarNavHelper }, { token: i3.Router }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i4.SidebarService }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavComponent, selector: "c-sidebar-nav", inputs: { navItems: "navItems", dropdownMode: "dropdownMode", groupItems: "groupItems", compact: "compact" }, host: { properties: { "class": "this.hostClasses", "class.nav-group-items": "this.sidebarNavGroupItemsClass", "attr.role": "this.role" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngFor=\"let item of navItemsArray\">\n  <ng-container [ngSwitch]=\"helper.itemType(item)\">\n    <c-sidebar-nav-group\n      #rla=\"routerLinkActive\"\n      *ngSwitchCase=\"'group'\"\n      [dropdownMode]=\"dropdownMode\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n      routerLinkActive=\"show\"\n    >\n    </c-sidebar-nav-group>\n    <c-sidebar-nav-divider\n      *ngSwitchCase=\"'divider'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-divider>\n    <c-sidebar-nav-title\n      *ngSwitchCase=\"'title'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-title>\n    <c-sidebar-nav-label\n      *ngSwitchCase=\"'label'\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-label>\n    <ng-container\n      *ngSwitchCase=\"'empty'\">\n    </ng-container>\n    <c-sidebar-nav-link\n      (linkClick)=\"hideMobile()\"\n      *ngSwitchDefault\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n    >\n    </c-sidebar-nav-link>\n  </ng-container>\n</ng-container>\n<ng-content></ng-content>\n", styles: [""], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i5.NgClass; }), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(function () { return i5.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(function () { return i5.NgSwitch; }), selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i0.forwardRef(function () { return i5.NgSwitchCase; }), selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i0.forwardRef(function () { return i5.NgSwitchDefault; }), selector: "[ngSwitchDefault]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.RouterLinkActive; }), selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "directive", type: i0.forwardRef(function () { return i6.HtmlAttributesDirective; }), selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "component", type: i0.forwardRef(function () { return i7.SidebarNavDividerComponent; }), selector: "c-sidebar-nav-divider", inputs: ["item"] }, { kind: "component", type: i0.forwardRef(function () { return SidebarNavGroupComponent; }), selector: "c-sidebar-nav-group", inputs: ["item", "dropdownMode", "show"] }, { kind: "component", type: i0.forwardRef(function () { return i8.SidebarNavLabelComponent; }), selector: "c-sidebar-nav-label", inputs: ["item"] }, { kind: "component", type: i0.forwardRef(function () { return i9.SidebarNavLinkComponent; }), selector: "c-sidebar-nav-link", inputs: ["item"], outputs: ["linkClick"] }, { kind: "component", type: i0.forwardRef(function () { return i10.SidebarNavTitleComponent; }), selector: "c-sidebar-nav-title", inputs: ["item"] }, { kind: "pipe", type: i0.forwardRef(function () { return i11.SidebarNavItemClassPipe; }), name: "cSidebarNavItemClass" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav', template: "<ng-container *ngFor=\"let item of navItemsArray\">\n  <ng-container [ngSwitch]=\"helper.itemType(item)\">\n    <c-sidebar-nav-group\n      #rla=\"routerLinkActive\"\n      *ngSwitchCase=\"'group'\"\n      [dropdownMode]=\"dropdownMode\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n      routerLinkActive=\"show\"\n    >\n    </c-sidebar-nav-group>\n    <c-sidebar-nav-divider\n      *ngSwitchCase=\"'divider'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-divider>\n    <c-sidebar-nav-title\n      *ngSwitchCase=\"'title'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-title>\n    <c-sidebar-nav-label\n      *ngSwitchCase=\"'label'\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-label>\n    <ng-container\n      *ngSwitchCase=\"'empty'\">\n    </ng-container>\n    <c-sidebar-nav-link\n      (linkClick)=\"hideMobile()\"\n      *ngSwitchDefault\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n    >\n    </c-sidebar-nav-link>\n  </ng-container>\n</ng-container>\n<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return [{ type: i1.SidebarComponent, decorators: [{
                    type: Optional
                }] }, { type: i2.SidebarNavHelper }, { type: i3.Router }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i4.SidebarService }]; }, propDecorators: { navItems: [{
                type: Input
            }], dropdownMode: [{
                type: Input
            }], groupItems: [{
                type: Input
            }], compact: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], sidebarNavGroupItemsClass: [{
                type: HostBinding,
                args: ['class.nav-group-items']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }] } });
export class SidebarNavGroupComponent {
    constructor(router, renderer, hostElement, helper, sidebarNavGroupService) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.helper = helper;
        this.sidebarNavGroupService = sidebarNavGroupService;
        this.dropdownMode = 'path';
        this.navItems = [];
        this.display = { display: 'block' };
        this.navigationEndObservable = router.events.pipe(filter((event) => event instanceof NavigationEnd));
    }
    get hostClasses() {
        return {
            'nav-group': true,
            show: this.open
        };
    }
    ngOnInit() {
        this.navItems = [...this.item.children];
        this.navSubscription = this.navigationEndObservable.subscribe((event) => {
            if (this.dropdownMode !== 'none') {
                const samePath = this.samePath(event.url);
                this.openGroup(samePath);
            }
        });
        if (this.samePath(this.router.routerState.snapshot.url)) {
            this.openGroup(true);
        }
        this.navGroupSubscription = this.sidebarNavGroupService.sidebarNavGroupState$.subscribe(next => {
            if (this.dropdownMode === 'close' && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
                if (next.sidebarNavGroup.item.url.startsWith(this.item.url)) {
                    return;
                }
                if (this.samePath(this.router.routerState.snapshot.url)) {
                    this.openGroup(true);
                    return;
                }
                this.openGroup(false);
            }
        });
    }
    samePath(url) {
        // console.log('item:', this.item.name, this.item.url, 'url:', url);
        const itemArray = this.item.url?.split('/');
        const urlArray = url.split('/');
        return itemArray?.every((value, index) => {
            // console.log(value === urlArray[index], 'value:', value, 'index:', index, urlArray[index], url);
            return value === urlArray[index];
        });
    }
    openGroup(open) {
        this.open = open;
    }
    toggleGroup($event) {
        $event.preventDefault();
        this.openGroup(!this.open);
        if (this.open) {
            this.sidebarNavGroupService.toggle({ open: this.open, sidebarNavGroup: this });
        }
    }
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
    onAnimationStart($event) {
        this.display = { display: 'block' };
        if ($event.toState === 'open') {
            const host = this.sidebarNav.nativeElement;
            this.renderer.setStyle(host, 'height', `${host['scrollHeight']}px`);
        }
    }
    onAnimationDone($event) {
        if ($event.toState === 'open') {
            const host = this.sidebarNav.nativeElement;
            this.renderer.setStyle(host, 'height', 'auto');
        }
        if ($event.toState === 'closed') {
            setTimeout(() => {
                this.display = null;
            });
        }
    }
}
SidebarNavGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavGroupComponent, deps: [{ token: i3.Router }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i2.SidebarNavHelper }, { token: i12.SidebarNavGroupService }], target: i0.ɵɵFactoryTarget.Component });
SidebarNavGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarNavGroupComponent, selector: "c-sidebar-nav-group", inputs: { item: "item", dropdownMode: "dropdownMode", show: "show" }, host: { properties: { "class": "this.hostClasses" } }, providers: [SidebarNavHelper], viewQueries: [{ propertyName: "sidebarNav", first: true, predicate: SidebarNavComponent, descendants: true, read: ElementRef }], ngImport: i0, template: "<a (click)=\"toggleGroup($event)\"\n   [cHtmlAttr]=\"item.attributes\"\n   class=\"nav-link nav-group-toggle\"\n   href>\n  <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\"></ng-container>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n<c-sidebar-nav\n  (@openClose.done)=\"onAnimationDone($event)\"\n  (@openClose.start)=\"onAnimationStart($event)\"\n  [@openClose]=\"open ? 'open' : 'closed'\"\n  [dropdownMode]=\"dropdownMode\"\n  [groupItems]=\"true\"\n  [navItems]=\"navItems\"\n  [ngStyle]=\"display\"\n>\n</c-sidebar-nav>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n      [name]=\"item.iconComponent?.name\"\n    ></svg>\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n", styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"], dependencies: [{ kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i5.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i6.HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "directive", type: i13.IconDirective, selector: "svg[cIcon]", inputs: ["cIcon", "size", "title", "customClasses", "width", "height", "name", "viewBox", "xmlns", "pointer-events", "role"], exportAs: ["cIcon"] }, { kind: "component", type: SidebarNavComponent, selector: "c-sidebar-nav", inputs: ["navItems", "dropdownMode", "groupItems", "compact"] }, { kind: "pipe", type: i14.SidebarNavBadgePipe, name: "cSidebarNavBadge" }, { kind: "pipe", type: i15.SidebarNavIconPipe, name: "cSidebarNavIcon" }], animations: [
        trigger('openClose', [
            state('open', style({
                height: '*'
            })),
            state('closed', style({
                height: '0px'
            })),
            transition('open <=> closed', [
                animate('.15s ease')
            ])
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav-group', providers: [SidebarNavHelper], animations: [
                        trigger('openClose', [
                            state('open', style({
                                height: '*'
                            })),
                            state('closed', style({
                                height: '0px'
                            })),
                            transition('open <=> closed', [
                                animate('.15s ease')
                            ])
                        ])
                    ], template: "<a (click)=\"toggleGroup($event)\"\n   [cHtmlAttr]=\"item.attributes\"\n   class=\"nav-link nav-group-toggle\"\n   href>\n  <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\"></ng-container>\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n<c-sidebar-nav\n  (@openClose.done)=\"onAnimationDone($event)\"\n  (@openClose.start)=\"onAnimationStart($event)\"\n  [@openClose]=\"open ? 'open' : 'closed'\"\n  [dropdownMode]=\"dropdownMode\"\n  [groupItems]=\"true\"\n  [navItems]=\"navItems\"\n  [ngStyle]=\"display\"\n>\n</c-sidebar-nav>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n      [name]=\"item.iconComponent?.name\"\n    ></svg>\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n", styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.Router }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.SidebarNavHelper }, { type: i12.SidebarNavGroupService }]; }, propDecorators: { item: [{
                type: Input
            }], dropdownMode: [{
                type: Input
            }], show: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], sidebarNav: [{
                type: ViewChild,
                args: [SidebarNavComponent, { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUlMLFFBQVEsRUFHUixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBa0IsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekQsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixZQUNxQixPQUF5QixFQUNyQyxNQUF3QixFQUN4QixNQUFjLEVBQ2IsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsY0FBOEI7UUFMbkIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtR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QUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNwQixNQUFNLEVBQUUsS0FBSzs2QkFDZCxDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDOzZCQUNyQixDQUFDO3lCQUNILENBQUM7cUJBQ0g7bU5BZ0JRLElBQUk7c0JBQVosS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFRa0MsVUFBVTtzQkFBL0QsU0FBUzt1QkFBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4uL3NpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJTmF2RGF0YSB9IGZyb20gJy4vc2lkZWJhci1uYXYnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkhlbHBlciB9IGZyb20gJy4vc2lkZWJhci1uYXYuc2VydmljZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2R3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi1ncm91cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1zaWRlYmFyLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXItbmF2LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNpZGViYXI6IFNpZGViYXJDb21wb25lbnQsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlcixcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBASW5wdXQoKSBuYXZJdGVtcz86IElOYXZEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgZHJvcGRvd25Nb2RlOiAncGF0aCcgfCAnbm9uZScgfCAnY2xvc2UnID0gJ3BhdGgnO1xuICBASW5wdXQoKSBncm91cEl0ZW1zPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY29tcGFjdD86IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnc2lkZWJhci1uYXYnOiAhdGhpcy5ncm91cEl0ZW1zLFxuICAgICAgY29tcGFjdDogIXRoaXMuZ3JvdXBJdGVtcyAmJiAhIXRoaXMuY29tcGFjdFxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5hdi1ncm91cC1pdGVtcycpXG4gIGdldCBzaWRlYmFyTmF2R3JvdXBJdGVtc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ3JvdXBJdGVtcztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICduYXYnO1xuXG4gIHB1YmxpYyBuYXZJdGVtc0FycmF5OiBJTmF2RGF0YVtdID0gW107XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm5hdkl0ZW1zQXJyYXkgPSBBcnJheS5pc0FycmF5KHRoaXMubmF2SXRlbXMpID8gdGhpcy5uYXZJdGVtcy5zbGljZSgpIDogW107XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpOiB2b2lkIHtcbiAgICAvLyB0b2RvOiBwcm9wZXIgc2Nyb2xsSW50b1ZpZXcoKSBhZnRlciBOYXZpZ2F0aW9uRW5kXG4gICAgaWYgKHRoaXMuc2lkZWJhciAmJiB0aGlzLnNpZGViYXIuc2lkZWJhclN0YXRlLm1vYmlsZSkge1xuICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyB0b2dnbGU6ICd2aXNpYmxlJywgc2lkZWJhcjogdGhpcy5zaWRlYmFyIH0pO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXNpZGViYXItbmF2LWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItbmF2LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci1uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbU2lkZWJhck5hdkhlbHBlcl0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnKidcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJzBweCdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPD0+IGNsb3NlZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnLjE1cyBlYXNlJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyLFxuICAgIHByaXZhdGUgc2lkZWJhck5hdkdyb3VwU2VydmljZTogU2lkZWJhck5hdkdyb3VwU2VydmljZVxuICApIHtcbiAgICB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlID0gcm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKSBhcyBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+O1xuICB9XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBkcm9wZG93bk1vZGU6ICdwYXRoJyB8ICdub25lJyB8ICdjbG9zZScgPSAncGF0aCc7XG4gIEBJbnB1dCgpIHNob3c/OiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25hdi1ncm91cCc6IHRydWUsXG4gICAgICBzaG93OiB0aGlzLm9wZW5cbiAgICB9O1xuICB9XG5cbiAgQFZpZXdDaGlsZChTaWRlYmFyTmF2Q29tcG9uZW50LCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2lkZWJhck5hdiE6IEVsZW1lbnRSZWY7XG5cbiAgbmF2aWdhdGlvbkVuZE9ic2VydmFibGU6IE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XG4gIG5hdlN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgbmF2R3JvdXBTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIG9wZW4hOiBib29sZWFuO1xuICBwdWJsaWMgbmF2SXRlbXM6IElOYXZEYXRhW10gPSBbXTtcbiAgcHVibGljIGRpc3BsYXk6IGFueSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5uYXZJdGVtcyA9IFsuLi50aGlzLml0ZW0uY2hpbGRyZW5dO1xuXG4gICAgdGhpcy5uYXZTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duTW9kZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGNvbnN0IHNhbWVQYXRoID0gdGhpcy5zYW1lUGF0aChldmVudC51cmwpO1xuICAgICAgICB0aGlzLm9wZW5Hcm91cChzYW1lUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zYW1lUGF0aCh0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwpKSB7XG4gICAgICB0aGlzLm9wZW5Hcm91cCh0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hdkdyb3VwU3Vic2NyaXB0aW9uID0gdGhpcy5zaWRlYmFyTmF2R3JvdXBTZXJ2aWNlLnNpZGViYXJOYXZHcm91cFN0YXRlJC5zdWJzY3JpYmUobmV4dCA9PiB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bk1vZGUgPT09ICdjbG9zZScgJiYgbmV4dC5zaWRlYmFyTmF2R3JvdXAgJiYgbmV4dC5zaWRlYmFyTmF2R3JvdXAgIT09IHRoaXMpIHtcbiAgICAgICAgaWYgKG5leHQuc2lkZWJhck5hdkdyb3VwLml0ZW0udXJsLnN0YXJ0c1dpdGgodGhpcy5pdGVtLnVybCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FtZVBhdGgodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsKSkge1xuICAgICAgICAgIHRoaXMub3Blbkdyb3VwKHRydWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5Hcm91cChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzYW1lUGF0aCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpdGVtOicsIHRoaXMuaXRlbS5uYW1lLCB0aGlzLml0ZW0udXJsLCAndXJsOicsIHVybCk7XG4gICAgY29uc3QgaXRlbUFycmF5ID0gdGhpcy5pdGVtLnVybD8uc3BsaXQoJy8nKTtcbiAgICBjb25zdCB1cmxBcnJheSA9IHVybC5zcGxpdCgnLycpO1xuICAgIHJldHVybiBpdGVtQXJyYXk/LmV2ZXJ5KCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSA9PT0gdXJsQXJyYXlbaW5kZXhdLCAndmFsdWU6JywgdmFsdWUsICdpbmRleDonLCBpbmRleCwgdXJsQXJyYXlbaW5kZXhdLCB1cmwpO1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB1cmxBcnJheVtpbmRleF07XG4gICAgfSk7XG4gIH1cblxuICBvcGVuR3JvdXAob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gIH1cblxuICB0b2dnbGVHcm91cCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub3Blbkdyb3VwKCF0aGlzLm9wZW4pO1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuc2lkZWJhck5hdkdyb3VwU2VydmljZS50b2dnbGUoeyBvcGVuOiB0aGlzLm9wZW4sIHNpZGViYXJOYXZHcm91cDogdGhpcyB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydCgkZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgdGhpcy5kaXNwbGF5ID0geyBkaXNwbGF5OiAnYmxvY2snIH07XG4gICAgaWYgKCRldmVudC50b1N0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLnNpZGViYXJOYXYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaG9zdCwgJ2hlaWdodCcsIGAke2hvc3RbJ3Njcm9sbEhlaWdodCddfXB4YCk7XG4gICAgfVxuICB9XG5cbiAgb25BbmltYXRpb25Eb25lKCRldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcbiAgICBpZiAoJGV2ZW50LnRvU3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgY29uc3QgaG9zdCA9IHRoaXMuc2lkZWJhck5hdi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShob3N0LCAnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICB9XG4gICAgaWYgKCRldmVudC50b1N0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbmF2SXRlbXNBcnJheVwiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJoZWxwZXIuaXRlbVR5cGUoaXRlbSlcIj5cbiAgICA8Yy1zaWRlYmFyLW5hdi1ncm91cFxuICAgICAgI3JsYT1cInJvdXRlckxpbmtBY3RpdmVcIlxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIlxuICAgICAgW2Ryb3Bkb3duTW9kZV09XCJkcm9wZG93bk1vZGVcIlxuICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICBbbmdDbGFzc109XCJpdGVtIHwgY1NpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgICAgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDogdHJ1ZX1cIlxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cInNob3dcIlxuICAgID5cbiAgICA8L2Mtc2lkZWJhci1uYXYtZ3JvdXA+XG4gICAgPGMtc2lkZWJhci1uYXYtZGl2aWRlclxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkaXZpZGVyJ1wiXG4gICAgICBbY0h0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlcyA/PyB7fVwiXG4gICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBjU2lkZWJhck5hdkl0ZW1DbGFzc1wiPlxuICAgIDwvYy1zaWRlYmFyLW5hdi1kaXZpZGVyPlxuICAgIDxjLXNpZGViYXItbmF2LXRpdGxlXG4gICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3RpdGxlJ1wiXG4gICAgICBbY0h0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlcyA/PyB7fVwiXG4gICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBjU2lkZWJhck5hdkl0ZW1DbGFzc1wiPlxuICAgIDwvYy1zaWRlYmFyLW5hdi10aXRsZT5cbiAgICA8Yy1zaWRlYmFyLW5hdi1sYWJlbFxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIidsYWJlbCdcIlxuICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICBbbmdDbGFzc109XCJpdGVtIHwgY1NpZGViYXJOYXZJdGVtQ2xhc3NcIj5cbiAgICA8L2Mtc2lkZWJhci1uYXYtbGFiZWw+XG4gICAgPG5nLWNvbnRhaW5lclxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIidlbXB0eSdcIj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8Yy1zaWRlYmFyLW5hdi1saW5rXG4gICAgICAobGlua0NsaWNrKT1cImhpZGVNb2JpbGUoKVwiXG4gICAgICAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBjU2lkZWJhck5hdkl0ZW1DbGFzc1wiXG4gICAgPlxuICAgIDwvYy1zaWRlYmFyLW5hdi1saW5rPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIiwiPGEgKGNsaWNrKT1cInRvZ2dsZUdyb3VwKCRldmVudClcIlxuICAgW2NIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIlxuICAgY2xhc3M9XCJuYXYtbGluayBuYXYtZ3JvdXAtdG9nZ2xlXCJcbiAgIGhyZWY+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpY29uVGVtcGxhdGUgOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtfVwiPjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyPnt7IGl0ZW0ubmFtZSB9fTwvbmctY29udGFpbmVyPlxuICA8c3BhbiAqbmdJZj1cImhlbHBlci5oYXNCYWRnZShpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBjU2lkZWJhck5hdkJhZGdlXCI+e3sgaXRlbS5iYWRnZS50ZXh0IH19PC9zcGFuPlxuPC9hPlxuPGMtc2lkZWJhci1uYXZcbiAgKEBvcGVuQ2xvc2UuZG9uZSk9XCJvbkFuaW1hdGlvbkRvbmUoJGV2ZW50KVwiXG4gIChAb3BlbkNsb3NlLnN0YXJ0KT1cIm9uQW5pbWF0aW9uU3RhcnQoJGV2ZW50KVwiXG4gIFtAb3BlbkNsb3NlXT1cIm9wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ1wiXG4gIFtkcm9wZG93bk1vZGVdPVwiZHJvcGRvd25Nb2RlXCJcbiAgW2dyb3VwSXRlbXNdPVwidHJ1ZVwiXG4gIFtuYXZJdGVtc109XCJuYXZJdGVtc1wiXG4gIFtuZ1N0eWxlXT1cImRpc3BsYXlcIlxuPlxuPC9jLXNpZGViYXItbmF2PlxuXG48bmctdGVtcGxhdGUgI2ljb25UZW1wbGF0ZSBsZXQtaXRlbT5cbiAgPGkgKm5nSWY9XCJpdGVtPy5pY29uXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGNTaWRlYmFyTmF2SWNvblwiPjwvaT5cbiAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIml0ZW0/Lmljb25Db21wb25lbnRcIj5cbiAgICA8c3ZnXG4gICAgICBbY0ljb25dPVwiaXRlbS5pY29uQ29tcG9uZW50Py5jb250ZW50XCJcbiAgICAgIFtjdXN0b21DbGFzc2VzXT1cIml0ZW0gfCBjU2lkZWJhck5hdkljb25cIlxuICAgICAgW25hbWVdPVwiaXRlbS5pY29uQ29tcG9uZW50Py5uYW1lXCJcbiAgICA+PC9zdmc+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxzcGFuICpuZ0lmPVwiIWl0ZW0/Lmljb24gJiYgIWl0ZW0/Lmljb25Db21wb25lbnRcIiBbbmdDbGFzc109XCJpdGVtIHwgY1NpZGViYXJOYXZJY29uXCI+PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==