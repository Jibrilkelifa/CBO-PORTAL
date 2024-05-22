import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class ListGroupDirective {
    /**
     * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
     * @type boolean
     */
    set flush(value) {
        this._flush = coerceBooleanProperty(value);
    }
    ;
    get flush() {
        return this._flush;
    }
    get hostClasses() {
        const classes = {
            'list-group': true,
            'list-group-horizontal': this.horizontal === true || this.horizontal === '',
            [`list-group-horizontal-${this.horizontal}`]: !!this.horizontal && typeof this.horizontal !== 'boolean',
            'list-group-flush': this.flush,
        };
        return classes;
    }
    constructor() {
        this._flush = false;
    }
}
ListGroupDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ListGroupDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ListGroupDirective, selector: "[cListGroup]", inputs: { flush: "flush", horizontal: "horizontal" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cListGroup]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { flush: [{
                type: Input
            }], horizontal: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1ncm91cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2xpc3QtZ3JvdXAvbGlzdC1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFLNUUsTUFBTSxPQUFPLGtCQUFrQjtJQUc3Qjs7O09BR0c7SUFDSCxJQUNJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQU9ELElBQ0ksV0FBVztRQUNiLE1BQU0sT0FBTyxHQUFHO1lBQ2QsWUFBWSxFQUFFLElBQUk7WUFDbEIsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFO1lBQzNFLENBQUMseUJBQXlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTO1lBQ3ZHLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7UUFqQlEsV0FBTSxHQUFHLEtBQUssQ0FBQztJQWlCTCxDQUFDOzsrR0EvQlIsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFIOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7MEVBU0ssS0FBSztzQkFEUixLQUFLO2dCQVdHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpemVzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NMaXN0R3JvdXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0R3JvdXBEaXJlY3RpdmUge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZmx1c2g6IEJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogUmVtb3ZlIHNvbWUgYm9yZGVycyBhbmQgcm91bmRlZCBjb3JuZXJzIHRvIHJlbmRlciBsaXN0IGdyb3VwIGl0ZW1zIGVkZ2UtdG8tZWRnZSBpbiBhIHBhcmVudCBjb21wb25lbnQgKGUuZy4sIGA8Q0NhcmQ+YCkuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbHVzaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2ZsdXNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfTtcbiAgZ2V0IGZsdXNoKCkge1xuICAgIHJldHVybiB0aGlzLl9mbHVzaDtcbiAgfVxuICBwcml2YXRlIF9mbHVzaCA9IGZhbHNlO1xuICAvKipcbiAgICogU3BlY2lmeSBob3Jpem9udGFsIGxheW91dCB0eXBlLlxuICAgKi9cbiAgQElucHV0KCkgaG9yaXpvbnRhbD86IGJvb2xlYW4gfCBTaXplcztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdsaXN0LWdyb3VwJzogdHJ1ZSxcbiAgICAgICdsaXN0LWdyb3VwLWhvcml6b250YWwnOiB0aGlzLmhvcml6b250YWwgPT09IHRydWUgfHwgdGhpcy5ob3Jpem9udGFsID09PSAnJyxcbiAgICAgIFtgbGlzdC1ncm91cC1ob3Jpem9udGFsLSR7dGhpcy5ob3Jpem9udGFsfWBdOiAhIXRoaXMuaG9yaXpvbnRhbCAmJiB0eXBlb2YgdGhpcy5ob3Jpem9udGFsICE9PSAnYm9vbGVhbicsXG4gICAgICAnbGlzdC1ncm91cC1mbHVzaCc6IHRoaXMuZmx1c2gsXG4gICAgfTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCApIHsgIH1cblxufVxuXG4iXX0=