import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class FormDirective {
    /**
     * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
     * @type boolean
     * @default false
     */
    set validated(value) {
        this._validated = coerceBooleanProperty(value);
    }
    get validated() {
        return this._validated;
    }
    get hostClasses() {
        return {
            'was-validated': this.validated,
        };
    }
    constructor() {
        this._validated = false;
    }
}
FormDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormDirective, selector: "form[cForm]", inputs: { validated: "validated" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'form[cForm]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { validated: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUs1RSxNQUFNLE9BQU8sYUFBYTtJQUt4Qjs7OztPQUlHO0lBQ0gsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRDtRQXRCUSxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBc0JYLENBQUM7OzBHQXpCTixhQUFhOzhGQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFIekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7MEVBWUssU0FBUztzQkFEWixLQUFLO2dCQVNGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZm9ybVtjRm9ybV0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1EaXJlY3RpdmUge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92YWxpZGF0ZWQ6IEJvb2xlYW5JbnB1dDtcbiAgcHJpdmF0ZSBfdmFsaWRhdGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE1hcmsgYSBmb3JtIGFzIHZhbGlkYXRlZC4gSWYgeW91IHNldCBpdCBgdHJ1ZWAsIGFsbCB2YWxpZGF0aW9uIHN0eWxlcyB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGZvcm0uIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsaWRhdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgdmFsaWRhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd3YXMtdmFsaWRhdGVkJzogdGhpcy52YWxpZGF0ZWQsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=