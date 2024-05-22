import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class FormFloatingDirective {
    /**
     * Enable floating labels
     * @type boolean
     */
    get floating() {
        return this._floating;
    }
    set floating(value) {
        this._floating = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            'form-floating': this.floating,
        };
    }
    constructor() {
        this._floating = true;
    }
}
FormFloatingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormFloatingDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormFloatingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormFloatingDirective, selector: "[cFormFloating]", inputs: { floating: ["cFormFloating", "floating"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormFloatingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cFormFloating]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { floating: [{
                type: Input,
                args: ['cFormFloating']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mbG9hdGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1mbG9hdGluZy9mb3JtLWZsb2F0aW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUs1RSxNQUFNLE9BQU8scUJBQXFCO0lBSWhDOzs7T0FHRztJQUNILElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFHRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBRUQ7UUFUUSxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBU1QsQ0FBQzs7a0hBeEJOLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7MEVBVUssUUFBUTtzQkFEWCxLQUFLO3VCQUFDLGVBQWU7Z0JBVWxCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NGb3JtRmxvYXRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmxvYXRpbmdEaXJlY3RpdmUge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mbG9hdGluZzogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBFbmFibGUgZmxvYXRpbmcgbGFiZWxzXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgnY0Zvcm1GbG9hdGluZycpXG4gIGdldCBmbG9hdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmc7XG4gIH1cbiAgc2V0IGZsb2F0aW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxvYXRpbmcgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Zsb2F0aW5nID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLWZsb2F0aW5nJzogdGhpcy5mbG9hdGluZyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19