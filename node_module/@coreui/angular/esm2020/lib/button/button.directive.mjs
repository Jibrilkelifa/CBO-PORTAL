import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class ButtonDirective {
    constructor() {
        this._active = false;
        this._disabled = false;
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
         * @type Colors
         */
        this.color = 'primary';
        /**
         * Size the component small or large.
         * @type {'sm' | 'lg'}
         */
        this.size = '';
        /**
         * Specifies the type of button. Always specify the type attribute for the `<button>` element.
         * Different browsers may use different default types for the `<button>` element.
         */
        this.type = 'button';
    }
    /**
     * Toggle the active state for the component. [docs]
     * @type boolean
     */
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = coerceBooleanProperty(value);
    }
    /**
     * Toggle the disabled state for the component.
     * @type boolean
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            btn: true,
            [`btn-${this.color}`]: !!this.color && !this.variant,
            [`btn-${this.variant}`]: !!this.variant && !this.color,
            [`btn-${this.variant}-${this.color}`]: !!this.variant && !!this.color,
            [`btn-${this.size}`]: !!this.size,
            [`${this.shape}`]: !!this.shape,
            disabled: this.disabled,
            active: this.active
        };
    }
    get ariaDisabled() {
        return this.disabled || null;
    }
    ;
    get isActive() {
        return this.active || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get tabIndex() {
        return this.disabled ? '-1' : null;
    }
}
ButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ButtonDirective, selector: "[cButton]", inputs: { active: "active", color: "color", disabled: "disabled", shape: "shape", size: "size", type: "type", variant: "variant" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses", "attr.aria-disabled": "this.ariaDisabled", "attr.aria-pressed": "this.isActive", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.tabIndex" } }, exportAs: ["cButton"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cButton]',
                    exportAs: 'cButton'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { active: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], variant: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], isActive: [{
                type: HostBinding,
                args: ['attr.aria-pressed']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRyxxQkFBcUIsRUFBa0IsTUFBTSx1QkFBdUIsQ0FBQzs7QUFRL0UsTUFBTSxPQUFPLGVBQWU7SUFFMUI7UUFHUSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFjMUI7OztXQUdHO1FBQ00sVUFBSyxHQUFZLFNBQVMsQ0FBQztRQWlCcEM7OztXQUdHO1FBQ00sU0FBSSxHQUFzQixFQUFFLENBQUM7UUFDdEM7OztXQUdHO1FBRU0sU0FBSSxHQUFlLFFBQVEsQ0FBQztJQWxEdEIsQ0FBQztJQU9oQjs7O09BR0c7SUFDSCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBT0Q7OztPQUdHO0lBQ0gsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXVCRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUk7WUFDVCxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNwRCxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0RCxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDckUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNqQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBRUYsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQzs7NEdBM0ZVLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUozQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsU0FBUztpQkFDcEI7MEVBZUssTUFBTTtzQkFEVCxLQUFLO2dCQVlHLEtBQUs7c0JBQWIsS0FBSztnQkFNRixRQUFRO3NCQURYLEtBQUs7Z0JBV0csS0FBSztzQkFBYixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFNRyxJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPO2dCQWVoQixZQUFZO3NCQURmLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU03QixRQUFRO3NCQURYLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixZQUFZO3NCQURmLFdBQVc7dUJBQUMsZUFBZTtnQkFNeEIsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgICBCb29sZWFuSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBCdXR0b25UeXBlLCBDb2xvcnMsIFNoYXBlcyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjQnV0dG9uXScsXG4gIGV4cG9ydEFzOiAnY0J1dHRvbidcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FjdGl2ZTogQm9vbGVhbklucHV0O1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgYWN0aXZlIHN0YXRlIGZvciB0aGUgY29tcG9uZW50LiBbZG9jc11cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLiBbZG9jc11cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcj86IENvbG9ycyA9ICdwcmltYXJ5JztcbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgZGlzYWJsZWQgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIHNoYXBlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIHsgJ3JvdW5kZWQnIHwgJ3JvdW5kZWQtdG9wJyB8ICdyb3VuZGVkLWVuZCcgfCAncm91bmRlZC1ib3R0b20nIHwgJ3JvdW5kZWQtc3RhcnQnIHwgJ3JvdW5kZWQtY2lyY2xlJyB8ICdyb3VuZGVkLXBpbGwnIHwgJ3JvdW5kZWQtMCcgfCAncm91bmRlZC0xJyB8ICdyb3VuZGVkLTInIHwgJ3JvdW5kZWQtMycgfCBzdHJpbmcgfVxuICAgKi9cbiAgQElucHV0KCkgc2hhcGU/OiBTaGFwZXM7XG4gIC8qKlxuICAgKiBTaXplIHRoZSBjb21wb25lbnQgc21hbGwgb3IgbGFyZ2UuXG4gICAqIEB0eXBlIHsnc20nIHwgJ2xnJ31cbiAgICovXG4gIEBJbnB1dCgpIHNpemU/OiAnc20nIHwgJ2xnJyB8ICcnID0gJyc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHR5cGUgb2YgYnV0dG9uLiBBbHdheXMgc3BlY2lmeSB0aGUgdHlwZSBhdHRyaWJ1dGUgZm9yIHRoZSBgPGJ1dHRvbj5gIGVsZW1lbnQuXG4gICAqIERpZmZlcmVudCBicm93c2VycyBtYXkgdXNlIGRpZmZlcmVudCBkZWZhdWx0IHR5cGVzIGZvciB0aGUgYDxidXR0b24+YCBlbGVtZW50LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnR5cGUnKVxuICBASW5wdXQoKSB0eXBlOiBCdXR0b25UeXBlID0gJ2J1dHRvbic7XG4gIC8qKlxuICAgKiBTZXQgdGhlIGJ1dHRvbiB2YXJpYW50IHRvIGFuIG91dGxpbmVkIGJ1dHRvbiBvciBhIGdob3N0IGJ1dHRvbi5cbiAgICogQHR5cGUgeydnaG9zdCcgfCAnb3V0bGluZSd9XG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50PzogJ2dob3N0JyB8ICdvdXRsaW5lJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ0bjogdHJ1ZSxcbiAgICAgIFtgYnRuLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yICYmICF0aGlzLnZhcmlhbnQsXG4gICAgICBbYGJ0bi0ke3RoaXMudmFyaWFudH1gXTogISF0aGlzLnZhcmlhbnQgJiYgIXRoaXMuY29sb3IsXG4gICAgICBbYGJ0bi0ke3RoaXMudmFyaWFudH0tJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMudmFyaWFudCAmJiAhIXRoaXMuY29sb3IsXG4gICAgICBbYGJ0bi0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgICBbYCR7dGhpcy5zaGFwZX1gXTogISF0aGlzLnNoYXBlLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGFyaWFEaXNhYmxlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgbnVsbDtcbiAgfTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1wcmVzc2VkJylcbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBhdHRyRGlzYWJsZWQgKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCB0YWJJbmRleCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICctMScgOiBudWxsO1xuICB9XG59XG4iXX0=