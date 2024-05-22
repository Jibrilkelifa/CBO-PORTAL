import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class NavLinkDirective {
    constructor() {
        this._cNavLink = true;
        this._disabled = false;
    }
    /**
     * Sets .nav-link class to the host. [docs]
     * @type boolean
     * @default true
     */
    set cNavLink(value) {
        this._cNavLink = coerceBooleanProperty(value);
    }
    ;
    get cNavLink() {
        return this._cNavLink;
    }
    /**
     * Set disabled attr for the host element. [docs]
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get ariaCurrent() {
        return this.active ? 'page' : null;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    get getCursorStyle() {
        return this.disabled ? null : 'pointer';
    }
    get hostClasses() {
        return {
            'nav-link': this.cNavLink,
            disabled: this.disabled,
            active: this.active
        };
    }
}
NavLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NavLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: NavLinkDirective, selector: "[cNavLink]", inputs: { cNavLink: "cNavLink", active: "active", disabled: "disabled" }, host: { properties: { "attr.aria-current": "this.ariaCurrent", "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex", "style.cursor": "this.getCursorStyle", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavLink]'
                }]
        }], propDecorators: { cNavLink: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], getCursorStyle: [{
                type: HostBinding,
                args: ['style.cursor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9uYXYvbmF2LWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBSzVFLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFvQlUsY0FBUyxHQUFHLElBQUksQ0FBQTtRQWtCaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztLQW1DM0I7SUFqRUM7Ozs7T0FJRztJQUNILElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQUEsQ0FBQztJQUNGLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBUUQ7OztPQUdHO0lBQ0gsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7SUFFRixJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUNJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOzs2R0FyRVUsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7OEJBWUssUUFBUTtzQkFEWCxLQUFLO2dCQWFHLE1BQU07c0JBQWQsS0FBSztnQkFNRixRQUFRO3NCQURYLEtBQUs7Z0JBVUYsV0FBVztzQkFEZCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFNNUIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsWUFBWTtzQkFEZixXQUFXO3VCQUFDLGVBQWU7Z0JBTXhCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxlQUFlO2dCQU14QixjQUFjO3NCQURqQixXQUFXO3VCQUFDLGNBQWM7Z0JBTXZCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NOYXZMaW5rXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2TGlua0RpcmVjdGl2ZSB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NOYXZMaW5rOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXRzIC5uYXYtbGluayBjbGFzcyB0byB0aGUgaG9zdC4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNOYXZMaW5rKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY05hdkxpbmsgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9O1xuICBnZXQgY05hdkxpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NOYXZMaW5rO1xuICB9XG4gIHByaXZhdGUgX2NOYXZMaW5rID0gdHJ1ZVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGFjdGl2ZSBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZWQgYXR0ciBmb3IgdGhlIGhvc3QgZWxlbWVudC4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtY3VycmVudCcpXG4gIGdldCBhcmlhQ3VycmVudCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgPyAncGFnZScgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBhdHRyRGlzYWJsZWQgKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCBnZXRUYWJpbmRleCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICctMScgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5jdXJzb3InKVxuICBnZXQgZ2V0Q3Vyc29yU3R5bGUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyBudWxsIDogJ3BvaW50ZXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnbmF2LWxpbmsnOiB0aGlzLmNOYXZMaW5rLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlXG4gICAgfTtcbiAgfVxufVxuIl19