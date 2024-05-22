var _SidebarComponent_narrow, _SidebarComponent_overlaid, _SidebarComponent_unfoldable, _SidebarComponent_visible, _SidebarComponent_onMobile, _SidebarComponent_layoutChangeSubscription, _SidebarComponent_stateToggleSubscription, _SidebarComponent_stateInitial;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Component, EventEmitter, HostBinding, Inject, Input, Output, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "../sidebar.service";
import * as i3 from "../sidebar-backdrop/sidebar-backdrop.service";
export class SidebarComponent {
    /**
     * Make sidebar narrow. [docs]
     * @type boolean
     */
    set narrow(value) {
        __classPrivateFieldSet(this, _SidebarComponent_narrow, coerceBooleanProperty(value), "f");
    }
    get narrow() {
        return __classPrivateFieldGet(this, _SidebarComponent_narrow, "f");
    }
    /**
     * Set sidebar to overlaid variant.
     * @type boolean
     */
    set overlaid(value) {
        __classPrivateFieldSet(this, _SidebarComponent_overlaid, coerceBooleanProperty(value), "f");
    }
    get overlaid() {
        return __classPrivateFieldGet(this, _SidebarComponent_overlaid, "f");
    }
    /**
     * Expand narrowed sidebar on hover. [docs]
     */
    set unfoldable(value) {
        __classPrivateFieldSet(this, _SidebarComponent_unfoldable, coerceBooleanProperty(value), "f");
    }
    get unfoldable() {
        return __classPrivateFieldGet(this, _SidebarComponent_unfoldable, "f");
    }
    /**
     * Toggle the visibility of sidebar component. [docs]
     */
    set visible(value) {
        const visible = coerceBooleanProperty(value);
        if (__classPrivateFieldGet(this, _SidebarComponent_visible, "f") !== visible) {
            __classPrivateFieldSet(this, _SidebarComponent_visible, visible, "f");
            this.visibleChange.emit(__classPrivateFieldGet(this, _SidebarComponent_visible, "f"));
        }
    }
    get visible() {
        return __classPrivateFieldGet(this, _SidebarComponent_visible, "f");
    }
    set sidebarState(value) {
        const newState = value;
        if ('toggle' in newState) {
            if (newState.toggle === 'visible') {
                newState.visible = !this.state.visible;
                this.visible = newState.visible;
            }
            else if (newState.toggle === 'unfoldable') {
                newState.unfoldable = !this.state.unfoldable;
                this.unfoldable = newState.unfoldable;
            }
        }
        else {
            this.visible = (newState.visible ?? this.visible) && !this.overlaid;
        }
        this.state = {
            ...this.state,
            ...newState,
        };
        this.state.mobile && this.state.visible
            ? this.backdropService.setBackdrop(this)
            : this.backdropService.clearBackdrop();
    }
    get sidebarState() {
        return this.state;
    }
    get getMobileBreakpoint() {
        const element = this.document.documentElement;
        const mobileBreakpoint = getComputedStyle(element).getPropertyValue('--cui-mobile-breakpoint') ||
            'md';
        const breakpointValue = getComputedStyle(element).getPropertyValue(`--cui-breakpoint-${mobileBreakpoint.trim()}`) || '768px';
        return `${parseFloat(breakpointValue.trim()) - 0.02}px` || '767.98px';
    }
    constructor(document, renderer, breakpointObserver, sidebarService, backdropService) {
        this.document = document;
        this.renderer = renderer;
        this.breakpointObserver = breakpointObserver;
        this.sidebarService = sidebarService;
        this.backdropService = backdropService;
        _SidebarComponent_narrow.set(this, false);
        _SidebarComponent_overlaid.set(this, false);
        _SidebarComponent_unfoldable.set(this, false);
        _SidebarComponent_visible.set(this, false);
        _SidebarComponent_onMobile.set(this, false);
        _SidebarComponent_layoutChangeSubscription.set(this, void 0);
        _SidebarComponent_stateToggleSubscription.set(this, void 0);
        this.state = {
            sidebar: this,
        };
        _SidebarComponent_stateInitial.set(this, {
            narrow: false,
            visible: false,
            unfoldable: false,
        });
        /**
         * Place sidebar in non-static positions. [docs]
         * @default 'fixed'
         */
        this.position = 'fixed';
        /**
         * Event emitted on visibility change. [docs]
         * @type boolean
         */
        this.visibleChange = new EventEmitter();
        this.backdropService.renderer = renderer;
    }
    get getClasses() {
        const { mobile, visible } = this.sidebarState;
        return {
            sidebar: true,
            'sidebar-fixed': this.position === 'fixed' && !mobile,
            'sidebar-narrow': this.narrow && !this.unfoldable,
            'sidebar-narrow-unfoldable': this.unfoldable,
            'sidebar-overlaid': this.overlaid,
            [`sidebar-${this.size}`]: !!this.size,
            show: visible && __classPrivateFieldGet(this, _SidebarComponent_onMobile, "f"),
            hide: !visible,
        };
    }
    ngOnInit() {
        this.setInitialState();
        this.layoutChangeSubscribe();
        this.stateToggleSubscribe();
    }
    ngOnDestroy() {
        this.stateToggleSubscribe(false);
        this.layoutChangeSubscribe(false);
    }
    ngOnChanges(changes) {
        const oldStateMap = new Map(Object.entries(this.state));
        const newStateMap = new Map();
        newStateMap.set('sidebar', this);
        const propList = ['visible', 'unfoldable', 'narrow'];
        for (const propName in changes) {
            if (propList.includes(propName)) {
                if (changes[propName] && !changes[propName].firstChange) {
                    const value = coerceBooleanProperty(changes[propName].currentValue);
                    if (oldStateMap.get(propName) !== value) {
                        newStateMap.set(propName, value);
                    }
                }
            }
        }
        if (newStateMap.size > 1) {
            const state = Object.fromEntries(newStateMap.entries());
            this.sidebarService.toggle(state);
        }
    }
    setInitialState() {
        __classPrivateFieldSet(this, _SidebarComponent_stateInitial, {
            narrow: this.narrow,
            visible: this.visible,
            unfoldable: this.unfoldable,
        }, "f");
        this.sidebarService.toggle({
            ...__classPrivateFieldGet(this, _SidebarComponent_stateInitial, "f"),
            sidebar: this,
        });
    }
    stateToggleSubscribe(subscribe = true) {
        if (subscribe) {
            __classPrivateFieldSet(this, _SidebarComponent_stateToggleSubscription, this.sidebarService.sidebarState$.subscribe((state) => {
                if (this === state.sidebar || this.id === state.id) {
                    this.sidebarState = state;
                }
            }), "f");
        }
        else {
            __classPrivateFieldGet(this, _SidebarComponent_stateToggleSubscription, "f").unsubscribe();
        }
    }
    layoutChangeSubscribe(subscribe = true) {
        const onMobile = `(max-width: ${this.getMobileBreakpoint})`;
        if (subscribe) {
            const layoutChanges = this.breakpointObserver.observe([onMobile]);
            __classPrivateFieldSet(this, _SidebarComponent_layoutChangeSubscription, layoutChanges.subscribe((result) => {
                const isOnMobile = result.breakpoints[onMobile];
                const isUnfoldable = isOnMobile ? false : this.unfoldable;
                if (__classPrivateFieldGet(this, _SidebarComponent_onMobile, "f") !== isOnMobile) {
                    __classPrivateFieldSet(this, _SidebarComponent_onMobile, isOnMobile, "f");
                    this.sidebarService.toggle({
                        mobile: isOnMobile,
                        unfoldable: isUnfoldable,
                        visible: isOnMobile ? !isOnMobile : __classPrivateFieldGet(this, _SidebarComponent_stateInitial, "f").visible,
                        sidebar: this,
                    });
                }
            }), "f");
        }
        else {
            __classPrivateFieldGet(this, _SidebarComponent_layoutChangeSubscription, "f").unsubscribe();
        }
    }
}
_SidebarComponent_narrow = new WeakMap(), _SidebarComponent_overlaid = new WeakMap(), _SidebarComponent_unfoldable = new WeakMap(), _SidebarComponent_visible = new WeakMap(), _SidebarComponent_onMobile = new WeakMap(), _SidebarComponent_layoutChangeSubscription = new WeakMap(), _SidebarComponent_stateToggleSubscription = new WeakMap(), _SidebarComponent_stateInitial = new WeakMap();
SidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarComponent, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i1.BreakpointObserver }, { token: i2.SidebarService }, { token: i3.SidebarBackdropService }], target: i0.ɵɵFactoryTarget.Component });
SidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarComponent, selector: "c-sidebar", inputs: { colorScheme: "colorScheme", id: "id", narrow: "narrow", overlaid: "overlaid", placement: "placement", position: "position", size: "size", unfoldable: "unfoldable", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { properties: { "class": "this.getClasses" } }, exportAs: ["cSidebar"], usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar',
                    exportAs: 'cSidebar',
                    template: '<ng-content></ng-content>',
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i1.BreakpointObserver }, { type: i2.SidebarService }, { type: i3.SidebarBackdropService }]; }, propDecorators: { colorScheme: [{
                type: Input
            }], id: [{
                type: Input
            }], narrow: [{
                type: Input
            }], overlaid: [{
                type: Input
            }], placement: [{
                type: Input
            }], position: [{
                type: Input
            }], size: [{
                type: Input
            }], unfoldable: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NpZGViYXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sR0FHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQVk1RSxNQUFNLE9BQU8sZ0JBQWdCO0lBc0MzQjs7O09BR0c7SUFDSCxJQUNJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLHVCQUFBLElBQUksNEJBQVcscUJBQXFCLENBQUMsS0FBSyxDQUFDLE1BQUEsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyx1QkFBQSxJQUFJLGdDQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsdUJBQUEsSUFBSSw4QkFBYSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsTUFBQSxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLHVCQUFBLElBQUksa0NBQVUsQ0FBQztJQUN4QixDQUFDO0lBbUJEOztPQUVHO0lBQ0gsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQix1QkFBQSxJQUFJLGdDQUFlLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxNQUFBLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sdUJBQUEsSUFBSSxvQ0FBWSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQ0ksT0FB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dCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludFN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSVNpZGViYXJBY3Rpb24sIFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuLi9zaWRlYmFyLWJhY2tkcm9wL3NpZGViYXItYmFja2Ryb3Auc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Mtc2lkZWJhcicsXG4gIGV4cG9ydEFzOiAnY1NpZGViYXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uYXJyb3c6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX292ZXJsYWlkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV91bmZvbGRhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXNpYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgI25hcnJvdyA9IGZhbHNlO1xuICAjb3ZlcmxhaWQgPSBmYWxzZTtcbiAgI3VuZm9sZGFibGUgPSBmYWxzZTtcbiAgI3Zpc2libGUgPSBmYWxzZTtcbiAgI29uTW9iaWxlID0gZmFsc2U7XG4gICNsYXlvdXRDaGFuZ2VTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG4gICNzdGF0ZVRvZ2dsZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcblxuICBzdGF0ZTogSVNpZGViYXJBY3Rpb24gPSB7XG4gICAgc2lkZWJhcjogdGhpcyxcbiAgfTtcblxuICAjc3RhdGVJbml0aWFsID0ge1xuICAgIG5hcnJvdzogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgdW5mb2xkYWJsZTogZmFsc2UsXG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgaWYgdGhlIGNvbG9yIG9mIHRleHQgc2hvdWxkIGJlIGNvbG9yZWQgZm9yIGEgbGlnaHQgb3IgZGFyayBiYWNrZ3JvdW5kLiBbZG9jc11cbiAgICpcbiAgICogQHR5cGUgJ2RhcmsnIHwgJ2xpZ2h0J1xuICAgKi9cbiAgQElucHV0KCkgY29sb3JTY2hlbWU/OiAnZGFyaycgfCAnbGlnaHQnO1xuXG4gIC8qKlxuICAgKiBTZXRzIGh0bWwgYXR0cmlidXRlIGlkLiBbZG9jc11cbiAgICpcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBpZD86IHN0cmluZztcblxuICAvKipcbiAgICogTWFrZSBzaWRlYmFyIG5hcnJvdy4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuYXJyb3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLiNuYXJyb3cgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgZ2V0IG5hcnJvdygpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFycm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzaWRlYmFyIHRvIG92ZXJsYWlkIHZhcmlhbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBvdmVybGFpZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuI292ZXJsYWlkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBvdmVybGFpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jb3ZlcmxhaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ29tcG9uZW50cyBwbGFjZW1lbnQsIHRoZXJl4oCZcyBubyBkZWZhdWx0IHBsYWNlbWVudC4gW2RvY3NdXG4gICAqIEB0eXBlICdzdGFydCcgfCAnZW5kJ1xuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50PzogJ3N0YXJ0JyB8ICdlbmQnO1xuXG4gIC8qKlxuICAgKiBQbGFjZSBzaWRlYmFyIGluIG5vbi1zdGF0aWMgcG9zaXRpb25zLiBbZG9jc11cbiAgICogQGRlZmF1bHQgJ2ZpeGVkJ1xuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb246ICdmaXhlZCcgfCAnc3RpY2t5JyA9ICdmaXhlZCc7XG5cbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbCwgbGFyZ2UsIG9yIGV4dHJhIGxhcmdlLiBbZG9jc11cbiAgICovXG4gIEBJbnB1dCgpIHNpemU/OiAnc20nIHwgJ2xnJyB8ICd4bCc7XG5cbiAgLyoqXG4gICAqIEV4cGFuZCBuYXJyb3dlZCBzaWRlYmFyIG9uIGhvdmVyLiBbZG9jc11cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB1bmZvbGRhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy4jdW5mb2xkYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgdW5mb2xkYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdW5mb2xkYWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2Ygc2lkZWJhciBjb21wb25lbnQuIFtkb2NzXVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAodGhpcy4jdmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy4jdmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLiN2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlzaWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIG9uIHZpc2liaWxpdHkgY2hhbmdlLiBbZG9jc11cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgc2V0IHNpZGViYXJTdGF0ZSh2YWx1ZTogSVNpZGViYXJBY3Rpb24pIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHZhbHVlO1xuICAgIGlmICgndG9nZ2xlJyBpbiBuZXdTdGF0ZSkge1xuICAgICAgaWYgKG5ld1N0YXRlLnRvZ2dsZSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgIG5ld1N0YXRlLnZpc2libGUgPSAhdGhpcy5zdGF0ZS52aXNpYmxlO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBuZXdTdGF0ZS52aXNpYmxlO1xuICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZS50b2dnbGUgPT09ICd1bmZvbGRhYmxlJykge1xuICAgICAgICBuZXdTdGF0ZS51bmZvbGRhYmxlID0gIXRoaXMuc3RhdGUudW5mb2xkYWJsZTtcbiAgICAgICAgdGhpcy51bmZvbGRhYmxlID0gbmV3U3RhdGUudW5mb2xkYWJsZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmxlID0gKG5ld1N0YXRlLnZpc2libGUgPz8gdGhpcy52aXNpYmxlKSAmJiAhdGhpcy5vdmVybGFpZDtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAuLi5uZXdTdGF0ZSxcbiAgICB9O1xuICAgIHRoaXMuc3RhdGUubW9iaWxlICYmIHRoaXMuc3RhdGUudmlzaWJsZVxuICAgICAgPyB0aGlzLmJhY2tkcm9wU2VydmljZS5zZXRCYWNrZHJvcCh0aGlzKVxuICAgICAgOiB0aGlzLmJhY2tkcm9wU2VydmljZS5jbGVhckJhY2tkcm9wKCk7XG4gIH1cblxuICBnZXQgc2lkZWJhclN0YXRlKCk6IElTaWRlYmFyQWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGdldCBnZXRNb2JpbGVCcmVha3BvaW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IG1vYmlsZUJyZWFrcG9pbnQgPVxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWN1aS1tb2JpbGUtYnJlYWtwb2ludCcpIHx8XG4gICAgICAnbWQnO1xuICAgIGNvbnN0IGJyZWFrcG9pbnRWYWx1ZSA9XG4gICAgICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXG4gICAgICAgIGAtLWN1aS1icmVha3BvaW50LSR7bW9iaWxlQnJlYWtwb2ludC50cmltKCl9YFxuICAgICAgKSB8fCAnNzY4cHgnO1xuICAgIHJldHVybiBgJHtwYXJzZUZsb2F0KGJyZWFrcG9pbnRWYWx1ZS50cmltKCkpIC0gMC4wMn1weGAgfHwgJzc2Ny45OHB4JztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyLFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IFNpZGViYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYmFja2Ryb3BTZXJ2aWNlOiBTaWRlYmFyQmFja2Ryb3BTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYmFja2Ryb3BTZXJ2aWNlLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGdldENsYXNzZXMoKTogYW55IHtcbiAgICBjb25zdCB7IG1vYmlsZSwgdmlzaWJsZSB9ID0gdGhpcy5zaWRlYmFyU3RhdGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpZGViYXI6IHRydWUsXG4gICAgICAnc2lkZWJhci1maXhlZCc6IHRoaXMucG9zaXRpb24gPT09ICdmaXhlZCcgJiYgIW1vYmlsZSxcbiAgICAgICdzaWRlYmFyLW5hcnJvdyc6IHRoaXMubmFycm93ICYmICF0aGlzLnVuZm9sZGFibGUsXG4gICAgICAnc2lkZWJhci1uYXJyb3ctdW5mb2xkYWJsZSc6IHRoaXMudW5mb2xkYWJsZSxcbiAgICAgICdzaWRlYmFyLW92ZXJsYWlkJzogdGhpcy5vdmVybGFpZCxcbiAgICAgIFtgc2lkZWJhci0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgICBzaG93OiB2aXNpYmxlICYmIHRoaXMuI29uTW9iaWxlLFxuICAgICAgaGlkZTogIXZpc2libGUsXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgdGhpcy5sYXlvdXRDaGFuZ2VTdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlVG9nZ2xlU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB0aGlzLmxheW91dENoYW5nZVN1YnNjcmliZShmYWxzZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3Qgb2xkU3RhdGVNYXAgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUpKTtcbiAgICBjb25zdCBuZXdTdGF0ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICBuZXdTdGF0ZU1hcC5zZXQoJ3NpZGViYXInLCB0aGlzKTtcblxuICAgIGNvbnN0IHByb3BMaXN0ID0gWyd2aXNpYmxlJywgJ3VuZm9sZGFibGUnLCAnbmFycm93J107XG5cbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChwcm9wTGlzdC5pbmNsdWRlcyhwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbcHJvcE5hbWVdICYmICFjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgaWYgKG9sZFN0YXRlTWFwLmdldChwcm9wTmFtZSkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZU1hcC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3U3RhdGVNYXAuc2l6ZSA+IDEpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ld1N0YXRlTWFwLmVudHJpZXMoKSk7XG4gICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZShzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuI3N0YXRlSW5pdGlhbCA9IHtcbiAgICAgIG5hcnJvdzogdGhpcy5uYXJyb3csXG4gICAgICB2aXNpYmxlOiB0aGlzLnZpc2libGUsXG4gICAgICB1bmZvbGRhYmxlOiB0aGlzLnVuZm9sZGFibGUsXG4gICAgfTtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7XG4gICAgICAuLi50aGlzLiNzdGF0ZUluaXRpYWwsXG4gICAgICBzaWRlYmFyOiB0aGlzLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0ZVRvZ2dsZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy4jc3RhdGVUb2dnbGVTdWJzY3JpcHRpb24gPVxuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnNpZGViYXJTdGF0ZSQuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzID09PSBzdGF0ZS5zaWRlYmFyIHx8IHRoaXMuaWQgPT09IHN0YXRlLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXJTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI3N0YXRlVG9nZ2xlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbGF5b3V0Q2hhbmdlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBjb25zdCBvbk1vYmlsZSA9IGAobWF4LXdpZHRoOiAke3RoaXMuZ2V0TW9iaWxlQnJlYWtwb2ludH0pYDtcblxuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIGNvbnN0IGxheW91dENoYW5nZXMgPSB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtvbk1vYmlsZV0pO1xuXG4gICAgICB0aGlzLiNsYXlvdXRDaGFuZ2VTdWJzY3JpcHRpb24gPSBsYXlvdXRDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNPbk1vYmlsZSA9IHJlc3VsdC5icmVha3BvaW50c1tvbk1vYmlsZV07XG4gICAgICAgICAgY29uc3QgaXNVbmZvbGRhYmxlID0gaXNPbk1vYmlsZSA/IGZhbHNlIDogdGhpcy51bmZvbGRhYmxlO1xuICAgICAgICAgIGlmICh0aGlzLiNvbk1vYmlsZSAhPT0gaXNPbk1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy4jb25Nb2JpbGUgPSBpc09uTW9iaWxlO1xuICAgICAgICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoe1xuICAgICAgICAgICAgICBtb2JpbGU6IGlzT25Nb2JpbGUsXG4gICAgICAgICAgICAgIHVuZm9sZGFibGU6IGlzVW5mb2xkYWJsZSxcbiAgICAgICAgICAgICAgdmlzaWJsZTogaXNPbk1vYmlsZSA/ICFpc09uTW9iaWxlIDogdGhpcy4jc3RhdGVJbml0aWFsLnZpc2libGUsXG4gICAgICAgICAgICAgIHNpZGViYXI6IHRoaXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2xheW91dENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19