import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class FormCheckInputDirective {
    /**
     * Set component indeterminate state.
     * @type boolean
     */
    set indeterminate(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._indeterminate !== newValue) {
            this._indeterminate = newValue;
            this.renderer.setProperty(this.hostElement.nativeElement, 'indeterminate', newValue);
        }
    }
    ;
    get indeterminate() {
        return this._indeterminate;
    }
    get hostClasses() {
        return {
            'form-check-input': true,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false
        };
    }
    get checked() {
        return this.hostElement?.nativeElement?.checked;
    }
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        /**
         * Specifies the type of component.
         * @type {'checkbox' | 'radio'}
         * @default 'checkbox'
         */
        this.type = 'checkbox';
        this._indeterminate = false;
    }
}
FormCheckInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckInputDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FormCheckInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormCheckInputDirective, selector: "input[cFormCheckInput]", inputs: { type: "type", indeterminate: "indeterminate", valid: "valid" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[cFormCheckInput]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], indeterminate: [{
                type: Input
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jaGVjay1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1jaGVjay9mb3JtLWNoZWNrLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUs1RSxNQUFNLE9BQU8sdUJBQXVCO0lBWWxDOzs7T0FHRztJQUNILElBQ0ksYUFBYSxDQUFDLEtBQWM7UUFDOUIsTUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsRUFBRTtZQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdEY7SUFDSCxDQUFDO0lBQUEsQ0FBQztJQUNGLElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBU0QsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSTtZQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQ1UsUUFBbUIsRUFDbkIsV0FBdUI7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQTlDakM7Ozs7V0FJRztRQUVNLFNBQUksR0FBMkIsVUFBVSxDQUFDO1FBaUIzQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQXdCM0IsQ0FBQzs7b0hBbkRNLHVCQUF1Qjt3R0FBdkIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBSG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7eUhBV1UsSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQU9GLGFBQWE7c0JBRGhCLEtBQUs7Z0JBaUJHLEtBQUs7c0JBQWIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbY0Zvcm1DaGVja0lucHV0XSdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNoZWNrSW5wdXREaXJlY3RpdmUge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbmRldGVybWluYXRlOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAqIEB0eXBlIHsnY2hlY2tib3gnIHwgJ3JhZGlvJ31cbiAgICogQGRlZmF1bHQgJ2NoZWNrYm94J1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnR5cGUnKVxuICBASW5wdXQoKSB0eXBlOiAoJ2NoZWNrYm94JyB8ICdyYWRpbycpID0gJ2NoZWNrYm94JztcblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCBpbmRldGVybWluYXRlIHN0YXRlLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgaW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5faW5kZXRlcm1pbmF0ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnaW5kZXRlcm1pbmF0ZScsIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH07XG4gIGdldCBpbmRldGVybWluYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmRldGVybWluYXRlO1xuICB9XG4gIHByaXZhdGUgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB2YWxpZGF0aW9uIHN0YXRlIHRvIHZhbGlkLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSB2YWxpZD86IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9ybS1jaGVjay1pbnB1dCc6IHRydWUsXG4gICAgICAnaXMtdmFsaWQnOiB0aGlzLnZhbGlkID09PSB0cnVlLFxuICAgICAgJ2lzLWludmFsaWQnOiB0aGlzLnZhbGlkID09PSBmYWxzZVxuICAgIH07XG4gIH1cblxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0RWxlbWVudD8ubmF0aXZlRWxlbWVudD8uY2hlY2tlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbn1cbiJdfQ==