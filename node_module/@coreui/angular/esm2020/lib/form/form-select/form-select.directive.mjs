import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FormSelectDirective {
    get hostClasses() {
        return {
            'form-select': true,
            [`form-select-${this.sizing}`]: !!this.sizing,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false,
        };
    }
    constructor() {
        /**
         * Size the component small or large.
         */
        this.sizing = '';
    }
}
FormSelectDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormSelectDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormSelectDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormSelectDirective, selector: "select[cSelect]", inputs: { sizing: "sizing", valid: "valid" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'select[cSelect]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { sizing: [{
                type: Input
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL2Zvcm0tc2VsZWN0L2Zvcm0tc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBS3pFLE1BQU0sT0FBTyxtQkFBbUI7SUFZOUIsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJO1lBQ25CLENBQUMsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSTtZQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7UUFyQkE7O1dBRUc7UUFDTSxXQUFNLEdBQStCLEVBQUUsQ0FBQztJQWtCbEMsQ0FBQzs7Z0hBdEJMLG1CQUFtQjtvR0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBSC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7MEVBS1UsTUFBTTtzQkFBZCxLQUFLO2dCQU1HLEtBQUs7c0JBQWIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0W2NTZWxlY3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtU2VsZWN0RGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbCBvciBsYXJnZS5cbiAgICovXG4gIEBJbnB1dCgpIHNpemluZz86ICcnIHwgJ3NtJyB8ICdsZycgfCBzdHJpbmcgPSAnJztcblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB2YWxpZGF0aW9uIHN0YXRlIHRvIHZhbGlkLlxuICAgKiBAdHlwZSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH1cbiAgICovXG4gIEBJbnB1dCgpIHZhbGlkPzogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLXNlbGVjdCc6IHRydWUsXG4gICAgICBbYGZvcm0tc2VsZWN0LSR7dGhpcy5zaXppbmd9YF06ICEhdGhpcy5zaXppbmcsXG4gICAgICAnaXMtdmFsaWQnOiB0aGlzLnZhbGlkID09PSB0cnVlLFxuICAgICAgJ2lzLWludmFsaWQnOiB0aGlzLnZhbGlkID09PSBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG59XG4iXX0=