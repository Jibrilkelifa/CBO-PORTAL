import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class TableActiveDirective {
    /**
     * Highlight a table row or cell
     * @type boolean
     */
    set active(value) {
        this._active = coerceBooleanProperty(value);
    }
    ;
    get active() {
        return this._active;
    }
    ;
    get hostClasses() {
        return {
            'table-active': this.active,
        };
    }
    constructor() {
        this._active = false;
    }
}
TableActiveDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableActiveDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TableActiveDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TableActiveDirective, selector: "[cTableActive]", inputs: { active: ["cTableActive", "active"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableActiveDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTableActive]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { active: [{
                type: Input,
                args: ['cTableActive']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdGFibGUvdGFibGUtYWN0aXZlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUs1RSxNQUFNLE9BQU8sb0JBQW9CO0lBSS9COzs7T0FHRztJQUNILElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUEsQ0FBQztJQUNGLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQztJQUlGLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRDtRQVRRLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFTUixDQUFDOztpSEF6Qk4sb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjswRUFVSyxNQUFNO3NCQURULEtBQUs7dUJBQUMsY0FBYztnQkFXakIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1RhYmxlQWN0aXZlXSdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVBY3RpdmVEaXJlY3RpdmUge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hY3RpdmU6IEJvb2xlYW5JbnB1dDtcblxuICAvKipcbiAgICogSGlnaGxpZ2h0IGEgdGFibGUgcm93IG9yIGNlbGxcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCdjVGFibGVBY3RpdmUnKVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfTtcbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9O1xuXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3RhYmxlLWFjdGl2ZSc6IHRoaXMuYWN0aXZlLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=