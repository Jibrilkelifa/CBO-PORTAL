import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class PlaceholderDirective {
    constructor() {
        this._visible = false;
    }
    /**
     * placeholder toggler
     * @type boolean
     * @default true
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    get ariaHidden() {
        return this.visible ? null : true;
    }
    ;
    get hostClasses() {
        return {
            'placeholder': this.visible,
            [`placeholder-${this.size}`]: !!this.size
        };
    }
}
PlaceholderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PlaceholderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PlaceholderDirective, selector: "[cPlaceholder]", inputs: { visible: ["cPlaceholder", "visible"], size: ["cPlaceholderSize", "size"] }, host: { properties: { "attr.aria-hidden": "this.ariaHidden", "class": "this.hostClasses" } }, exportAs: ["cPlaceholder"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPlaceholder]',
                    exportAs: 'cPlaceholder'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { visible: [{
                type: Input,
                args: ['cPlaceholder']
            }], size: [{
                type: Input,
                args: ['cPlaceholderSize']
            }], ariaHidden: [{
                type: HostBinding,
                args: ['attr.aria-hidden']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNNUUsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQjtRQWNRLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFkbEIsQ0FBQztJQUVqQjs7OztPQUlHO0lBQ0gsSUFDSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQVFELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUFBLENBQUM7SUFFRixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzNCLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7U0FDMUMsQ0FBQztJQUNKLENBQUM7O2lIQXBDVSxvQkFBb0I7cUdBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUpoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjswRUFhSyxPQUFPO3NCQURWLEtBQUs7dUJBQUMsY0FBYztnQkFZTSxJQUFJO3NCQUE5QixLQUFLO3VCQUFDLGtCQUFrQjtnQkFHckIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLGtCQUFrQjtnQkFNM0IsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1BsYWNlaG9sZGVyXScsXG4gIGV4cG9ydEFzOiAnY1BsYWNlaG9sZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlckRpcmVjdGl2ZSB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Zpc2libGU6IEJvb2xlYW5JbnB1dDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlciB0b2dnbGVyXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCdjUGxhY2Vob2xkZXInKVxuICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG4gIHByaXZhdGUgX3Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2l6ZSB0aGUgcGxhY2Vob2xkZXIgZXh0cmEgc21hbGwsIHNtYWxsLCBsYXJnZS5cbiAgICovXG4gIEBJbnB1dCgnY1BsYWNlaG9sZGVyU2l6ZScpIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdsZyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJylcbiAgZ2V0IGFyaWFIaWRkZW4oKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnZpc2libGUgPyBudWxsIDogdHJ1ZTtcbiAgfTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdwbGFjZWhvbGRlcic6IHRoaXMudmlzaWJsZSxcbiAgICAgIFtgcGxhY2Vob2xkZXItJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplXG4gICAgfTtcbiAgfVxufVxuIl19