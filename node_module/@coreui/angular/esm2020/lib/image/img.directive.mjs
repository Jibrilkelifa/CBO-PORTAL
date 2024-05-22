import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class ImgDirective {
    /**
     * Make image responsive.
     * @type boolean
     */
    set fluid(value) {
        this._fluid = coerceBooleanProperty(value);
    }
    ;
    get fluid() {
        return this._fluid;
    }
    /**
     * Make image rounded.
     * @type boolean
     */
    set rounded(value) {
        this._rounded = coerceBooleanProperty(value);
    }
    ;
    get rounded() {
        return this._rounded;
    }
    /**
     * Give an image a rounded 1px border appearance.
     * @type boolean
     */
    set thumbnail(value) {
        this._thumbnail = coerceBooleanProperty(value);
    }
    ;
    get thumbnail() {
        return this._thumbnail;
    }
    get getStyles() {
        return { backgroundColor: this.placeholderColor };
    }
    get hostClasses() {
        const align = this.align;
        return {
            [`float-${align}`]: align === 'start' || align === 'end',
            'd-block': align === 'center',
            'mx-auto': align === 'center',
            'img-fluid': this.fluid,
            'rounded': this.rounded,
            'img-thumbnail': this.thumbnail,
        };
    }
    constructor() {
        /**
         * Set the horizontal aligment.
         * @type {'' | 'start' | 'end' | 'center'}
         */
        this.align = '';
        this._fluid = false;
        this._rounded = false;
        this._thumbnail = false;
        /**
         * Color for image placeholder.
         */
        this.placeholderColor = 'transparent';
    }
}
ImgDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ImgDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ImgDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ImgDirective, selector: "[cImg]", inputs: { align: "align", fluid: "fluid", rounded: "rounded", thumbnail: "thumbnail", placeholderColor: "placeholderColor" }, host: { properties: { "style": "this.getStyles", "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ImgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cImg]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { align: [{
                type: Input
            }], fluid: [{
                type: Input
            }], rounded: [{
                type: Input
            }], thumbnail: [{
                type: Input
            }], placeholderColor: [{
                type: Input
            }], getStyles: [{
                type: HostBinding,
                args: ['style']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvaW1hZ2UvaW1nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUs1RSxNQUFNLE9BQU8sWUFBWTtJQVd2Qjs7O09BR0c7SUFDSCxJQUNJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUdEOzs7T0FHRztJQUNILElBQ0ksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQUEsQ0FBQztJQUNGLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFBQSxDQUFDO0lBQ0YsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFRRCxJQUNJLFNBQVM7UUFDWCxPQUFPLEVBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE9BQU87WUFDTCxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxLQUFLO1lBQ3hELFNBQVMsRUFBRSxLQUFLLEtBQUssUUFBUTtZQUM3QixTQUFTLEVBQUUsS0FBSyxLQUFLLFFBQVE7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRDtRQXBFQTs7O1dBR0c7UUFDTSxVQUFLLEdBQW9DLEVBQUUsQ0FBQztRQWE3QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBYWYsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWFqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTNCOztXQUVHO1FBQ00scUJBQWdCLEdBQUcsYUFBYSxDQUFDO0lBb0IzQixDQUFDOzt5R0F6RUwsWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBSHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzBFQVVVLEtBQUs7c0JBQWIsS0FBSztnQkFPRixLQUFLO3NCQURSLEtBQUs7Z0JBY0YsT0FBTztzQkFEVixLQUFLO2dCQWNGLFNBQVM7c0JBRFosS0FBSztnQkFZRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBR0YsU0FBUztzQkFEWixXQUFXO3VCQUFDLE9BQU87Z0JBTWhCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NJbWddJ1xufSlcbmV4cG9ydCBjbGFzcyBJbWdEaXJlY3RpdmUge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZmx1aWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JvdW5kZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RodW1ibmFpbDogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGhvcml6b250YWwgYWxpZ21lbnQuXG4gICAqIEB0eXBlIHsnJyB8ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInfVxuICAgKi9cbiAgQElucHV0KCkgYWxpZ246ICcnIHwgJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgPSAnJztcblxuICAvKipcbiAgICogTWFrZSBpbWFnZSByZXNwb25zaXZlLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZmx1aWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mbHVpZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG4gIGdldCBmbHVpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmx1aWQ7XG4gIH1cbiAgcHJpdmF0ZSBfZmx1aWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogTWFrZSBpbWFnZSByb3VuZGVkLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcm91bmRlZCh2YWx1ZTogYm9vbGVhbil7XG4gICAgdGhpcy5fcm91bmRlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG4gIGdldCByb3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3VuZGVkO1xuICB9XG4gIHByaXZhdGUgX3JvdW5kZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogR2l2ZSBhbiBpbWFnZSBhIHJvdW5kZWQgMXB4IGJvcmRlciBhcHBlYXJhbmNlLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGh1bWJuYWlsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdGh1bWJuYWlsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfTtcbiAgZ2V0IHRodW1ibmFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGh1bWJuYWlsO1xuICB9XG4gIHByaXZhdGUgX3RodW1ibmFpbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb2xvciBmb3IgaW1hZ2UgcGxhY2Vob2xkZXIuXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcbiAgZ2V0IGdldFN0eWxlcygpOiBhbnkge1xuICAgIHJldHVybiB7YmFja2dyb3VuZENvbG9yOiB0aGlzLnBsYWNlaG9sZGVyQ29sb3J9O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IGFsaWduID0gdGhpcy5hbGlnbjtcbiAgICByZXR1cm4ge1xuICAgICAgW2BmbG9hdC0ke2FsaWdufWBdOiBhbGlnbiA9PT0gJ3N0YXJ0JyB8fCBhbGlnbiA9PT0gJ2VuZCcsXG4gICAgICAnZC1ibG9jayc6IGFsaWduID09PSAnY2VudGVyJyxcbiAgICAgICdteC1hdXRvJzogYWxpZ24gPT09ICdjZW50ZXInLFxuICAgICAgJ2ltZy1mbHVpZCc6IHRoaXMuZmx1aWQsXG4gICAgICAncm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICdpbWctdGh1bWJuYWlsJzogdGhpcy50aHVtYm5haWwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==