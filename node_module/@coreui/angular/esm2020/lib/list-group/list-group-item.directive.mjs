import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class ListGroupItemDirective {
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
    get ariaCurrent() {
        return !!this.active;
    }
    get hostClasses() {
        const host = this.hostElement.nativeElement;
        return {
            'list-group-item': true,
            'list-group-item-action': host.nodeName === 'A' || host.nodeName === 'BUTTON',
            active: !!this.active,
            disabled: this.isDisabled,
            [`list-group-item-${this.color}`]: !!this.color
        };
    }
    constructor(hostElement) {
        this.hostElement = hostElement;
        this._disabled = false;
    }
}
ListGroupItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupItemDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ListGroupItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ListGroupItemDirective, selector: "[cListGroupItem], c-list-group-item", inputs: { active: "active", color: "color", disabled: "disabled" }, host: { properties: { "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex", "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses" } }, exportAs: ["cListGroupItem"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cListGroupItem], c-list-group-item',
                    exportAs: 'cListGroupItem'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { active: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1ncm91cC1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbGlzdC1ncm91cC9saXN0LWdyb3VwLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBTzVFLE1BQU0sT0FBTyxzQkFBc0I7SUFnQmpDOzs7T0FHRztJQUNILElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFHRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDO0lBRUYsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBc0MsV0FBVztRQUMvQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixNQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDekQsT0FBTztZQUNMLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRO1lBQzdFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3pCLENBQUMsbUJBQW1CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztTQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQ1UsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFsQ3pCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFtQ3RCLENBQUM7O21IQTlETSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2lHQVNVLE1BQU07c0JBQWQsS0FBSztnQkFNRyxLQUFLO3NCQUFiLEtBQUs7Z0JBT0YsUUFBUTtzQkFEWCxLQUFLO2dCQVVGLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBTTdCLFlBQVk7c0JBRGYsV0FBVzt1QkFBQyxlQUFlO2dCQU14QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsZUFBZTtnQkFLVSxXQUFXO3NCQUFoRCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFLNUIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NMaXN0R3JvdXBJdGVtXSwgYy1saXN0LWdyb3VwLWl0ZW0nLFxuICBleHBvcnRBczogJ2NMaXN0R3JvdXBJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0R3JvdXBJdGVtRGlyZWN0aXZlIHtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBhY3RpdmUgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yPzogQ29sb3JzO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZWQgYXR0ciBmb3IgdGhlIGhvc3QgZWxlbWVudC4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBhdHRyRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnJyA6IG51bGw7XG4gIH07XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IGdldFRhYmluZGV4KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJy0xJyA6IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1jdXJyZW50JykgZ2V0IGFyaWFDdXJyZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuYWN0aXZlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IGhvc3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICAnbGlzdC1ncm91cC1pdGVtJzogdHJ1ZSxcbiAgICAgICdsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uJzogaG9zdC5ub2RlTmFtZSA9PT0gJ0EnIHx8IGhvc3Qubm9kZU5hbWUgPT09ICdCVVRUT04nLFxuICAgICAgYWN0aXZlOiAhIXRoaXMuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgIFtgbGlzdC1ncm91cC1pdGVtLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7IH1cbn1cbiJdfQ==