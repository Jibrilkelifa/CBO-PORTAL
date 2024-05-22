import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class FormControlDirective {
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly` [docs]
     */
    set plaintext(value) {
        this._plaintext = coerceBooleanProperty(value);
    }
    get plaintext() {
        return this._plaintext;
    }
    constructor(hostElement) {
        this.hostElement = hostElement;
        /**
         * Size the component small or large.
         * @type {'sm' | 'lg'}
         */
        this.sizing = '';
        /**
         * Specifies the type of input element.
         */
        this.type = 'text';
        this._plaintext = false;
    }
    get hostClasses() {
        const isRangeType = this.type === 'range';
        return {
            'form-control': !isRangeType && !this.plaintext,
            'form-control-plaintext': !isRangeType && this.plaintext,
            'form-control-color': this.type === 'color',
            'form-range': isRangeType,
            [`form-control-${this.sizing}`]: !!this.sizing && !isRangeType,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false
        };
    }
    get hostTag() {
        return this.hostElement.nativeElement.tagName;
    }
    ngOnInit() {
        const hostTag = this.hostTag.toLowerCase();
        if (hostTag !== 'input' && hostTag !== 'textarea') {
            console.warn(`CoreUI [cFormControl] works with '<input>' and '<texarea>' - not with '<${hostTag}>'`);
        }
    }
}
FormControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormControlDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FormControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormControlDirective, selector: "input[cFormControl], textarea[cFormControl]", inputs: { sizing: "sizing", valid: "valid", type: "type", plaintext: "plaintext" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[cFormControl], textarea[cFormControl]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { sizing: [{
                type: Input
            }], valid: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], plaintext: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZm9ybS9mb3JtLWNvbnRyb2wvZm9ybS1jb250cm9sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU81RSxNQUFNLE9BQU8sb0JBQW9CO0lBb0IvQjs7T0FFRztJQUNILElBQ0ksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFHRCxZQUNVLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBOUJqQzs7O1dBR0c7UUFDTSxXQUFNLEdBQStCLEVBQUUsQ0FBQztRQU9qRDs7V0FFRztRQUVNLFNBQUksR0FBMEMsTUFBTSxDQUFDO1FBWXRELGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJeEIsQ0FBQztJQUVKLElBQ0ksV0FBVztRQUViLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBRTFDLE9BQU87WUFDTCxjQUFjLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUMvQyx3QkFBd0IsRUFBRSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUztZQUN4RCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU87WUFDM0MsWUFBWSxFQUFFLFdBQVc7WUFDekIsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXO1lBQzlELFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUk7WUFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLDJFQUEyRSxPQUFPLElBQUksQ0FBQyxDQUFDO1NBQ3RHO0lBQ0gsQ0FBQzs7aUhBN0RVLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZDQUE2QztpQkFDeEQ7aUdBUVUsTUFBTTtzQkFBZCxLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFNRyxJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBTUYsU0FBUztzQkFEWixLQUFLO2dCQWNGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBJbnB1dFR5cGUgfSBmcm9tICcuLi8uLi9jb3JldWkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtjRm9ybUNvbnRyb2xdLCB0ZXh0YXJlYVtjRm9ybUNvbnRyb2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BsYWludGV4dDogQm9vbGVhbklucHV0O1xuICAvKipcbiAgICogU2l6ZSB0aGUgY29tcG9uZW50IHNtYWxsIG9yIGxhcmdlLlxuICAgKiBAdHlwZSB7J3NtJyB8ICdsZyd9XG4gICAqL1xuICBASW5wdXQoKSBzaXppbmc/OiAnJyB8ICdzbScgfCAnbGcnIHwgc3RyaW5nID0gJyc7XG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgdG8gdmFsaWQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIHZhbGlkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudHlwZScpXG4gIEBJbnB1dCgpIHR5cGU6IE9taXQ8SW5wdXRUeXBlLCAnY2hlY2tib3gnIHwgJ3JhZGlvJz4gPSAndGV4dCc7XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgY29tcG9uZW50IHN0eWxlZCBhcyBwbGFpbiB0ZXh0LiBSZW1vdmVzIHRoZSBkZWZhdWx0IGZvcm0gZmllbGQgc3R5bGluZyBhbmQgcHJlc2VydmUgdGhlIGNvcnJlY3QgbWFyZ2luIGFuZCBwYWRkaW5nLiBSZWNvbW1lbmQgdG8gdXNlIGFsb25nc2lkZSBgcmVhZG9ubHlgIFtkb2NzXVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBsYWludGV4dCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3BsYWludGV4dCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHBsYWludGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhaW50ZXh0O1xuICB9XG4gIHByaXZhdGUgX3BsYWludGV4dCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcblxuICAgIGNvbnN0IGlzUmFuZ2VUeXBlID0gdGhpcy50eXBlID09PSAncmFuZ2UnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLWNvbnRyb2wnOiAhaXNSYW5nZVR5cGUgJiYgIXRoaXMucGxhaW50ZXh0LFxuICAgICAgJ2Zvcm0tY29udHJvbC1wbGFpbnRleHQnOiAhaXNSYW5nZVR5cGUgJiYgdGhpcy5wbGFpbnRleHQsXG4gICAgICAnZm9ybS1jb250cm9sLWNvbG9yJzogdGhpcy50eXBlID09PSAnY29sb3InLFxuICAgICAgJ2Zvcm0tcmFuZ2UnOiBpc1JhbmdlVHlwZSxcbiAgICAgIFtgZm9ybS1jb250cm9sLSR7dGhpcy5zaXppbmd9YF06ICEhdGhpcy5zaXppbmcgJiYgIWlzUmFuZ2VUeXBlLFxuICAgICAgJ2lzLXZhbGlkJzogdGhpcy52YWxpZCA9PT0gdHJ1ZSxcbiAgICAgICdpcy1pbnZhbGlkJzogdGhpcy52YWxpZCA9PT0gZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGhvc3RUYWcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnRhZ05hbWU7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0VGFnID0gdGhpcy5ob3N0VGFnLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGhvc3RUYWcgIT09ICdpbnB1dCcgJiYgaG9zdFRhZyAhPT0gJ3RleHRhcmVhJykge1xuICAgICAgY29uc29sZS53YXJuKGBDb3JlVUkgW2NGb3JtQ29udHJvbF0gd29ya3Mgd2l0aCAnPGlucHV0PicgYW5kICc8dGV4YXJlYT4nIC0gbm90IHdpdGggJzwke2hvc3RUYWd9PidgKTtcbiAgICB9XG4gIH1cblxufVxuIl19