import { Directive, HostBinding, Input, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
export class DropdownMenuDirective {
    constructor(elementRef, dropdownService) {
        this.elementRef = elementRef;
        this.dropdownService = dropdownService;
        /**
         * Toggle the visibility of dropdown menu component.
         */
        this.visible = false;
        this._dark = false;
    }
    /**
     * Sets a darker color scheme to match a dark navbar.
     */
    get dark() {
        return this._dark;
    }
    set dark(value) {
        this._dark = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            'dropdown-menu': true,
            'dropdown-menu-dark': this.dark,
            [`dropdown-menu-${this.alignment}`]: !!this.alignment,
            show: this.visible,
        };
    }
    get hostStyles() {
        // workaround for popper position calculate (see also: dropdown.component)
        return {
            visibility: this.visible ? null : '',
            display: this.visible ? null : '',
        };
    }
    ngOnInit() {
        this.dropdownStateSubscribe();
    }
    ngOnDestroy() {
        this.dropdownStateSubscribe(false);
    }
    dropdownStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.dropdownStateSubscription =
                this.dropdownService.dropdownState$.subscribe((state) => {
                    if ('visible' in state) {
                        this.visible =
                            state.visible === 'toggle' ? !this.visible : state.visible;
                    }
                });
        }
        else {
            this.dropdownStateSubscription.unsubscribe();
        }
    }
}
DropdownMenuDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownMenuDirective, deps: [{ token: i0.ElementRef }, { token: i1.DropdownService }], target: i0.ɵɵFactoryTarget.Directive });
DropdownMenuDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownMenuDirective, selector: "[cDropdownMenu]", inputs: { alignment: "alignment", visible: "visible", dark: "dark" }, host: { properties: { "class": "this.hostClasses", "style": "this.hostStyles" } }, exportAs: ["cDropdownMenu"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownMenuDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownMenu]',
                    exportAs: 'cDropdownMenu',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DropdownService }]; }, propDecorators: { alignment: [{
                type: Input
            }], visible: [{
                type: Input
            }], dark: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyles: [{
                type: HostBinding,
                args: ['style']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsS0FBSyxHQUFzQixNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQU81RSxNQUFNLE9BQU8scUJBQXFCO0lBR2hDLFlBQ1MsVUFBc0IsRUFDckIsZUFBZ0M7UUFEakMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFTMUM7O1dBRUc7UUFDTSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBWWpCLFVBQUssR0FBRyxLQUFLLENBQUM7SUF2Qm5CLENBQUM7SUFhSjs7T0FFRztJQUNILElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFLRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUk7WUFDckIsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDL0IsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3JELElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztTQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQ0ksVUFBVTtRQUNaLDBFQUEwRTtRQUMxRSxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxZQUFxQixJQUFJO1FBQ3RELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLHlCQUF5QjtnQkFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3RELElBQUksU0FBUyxJQUFJLEtBQUssRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE9BQU87NEJBQ1YsS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztxQkFDOUQ7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0wsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7a0hBeEVVLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOytIQWFVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQU1GLElBQUk7c0JBRFAsS0FBSztnQkFZRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFXaEIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4uL2Ryb3Bkb3duLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0Ryb3Bkb3duTWVudV0nLFxuICBleHBvcnRBczogJ2NEcm9wZG93bk1lbnUnLFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kYXJrOiBCb29sZWFuSW5wdXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkcm9wZG93blNlcnZpY2U6IERyb3Bkb3duU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNldCBhbGlnbm1lbnQgb2YgZHJvcGRvd24gbWVudS5cbiAgICogQHR5cGUgeydzdGFydCcgfCAnZW5kJyB9XG4gICAqL1xuICBASW5wdXQoKSBhbGlnbm1lbnQ/OiAnc3RhcnQnIHwgJ2VuZCcgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBkcm9wZG93biBtZW51IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgpIHZpc2libGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0cyBhIGRhcmtlciBjb2xvciBzY2hlbWUgdG8gbWF0Y2ggYSBkYXJrIG5hdmJhci5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkYXJrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kYXJrO1xuICB9XG4gIHNldCBkYXJrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGFyayA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGFyayA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZHJvcGRvd25TdGF0ZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkcm9wZG93bi1tZW51JzogdHJ1ZSxcbiAgICAgICdkcm9wZG93bi1tZW51LWRhcmsnOiB0aGlzLmRhcmssXG4gICAgICBbYGRyb3Bkb3duLW1lbnUtJHt0aGlzLmFsaWdubWVudH1gXTogISF0aGlzLmFsaWdubWVudCxcbiAgICAgIHNob3c6IHRoaXMudmlzaWJsZSxcbiAgICB9O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZScpXG4gIGdldCBob3N0U3R5bGVzKCkge1xuICAgIC8vIHdvcmthcm91bmQgZm9yIHBvcHBlciBwb3NpdGlvbiBjYWxjdWxhdGUgKHNlZSBhbHNvOiBkcm9wZG93bi5jb21wb25lbnQpXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2liaWxpdHk6IHRoaXMudmlzaWJsZSA/IG51bGwgOiAnJyxcbiAgICAgIGRpc3BsYXk6IHRoaXMudmlzaWJsZSA/IG51bGwgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wZG93blN0YXRlU3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpYmUoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93blN0YXRlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpcHRpb24gPVxuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5kcm9wZG93blN0YXRlJC5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKCd2aXNpYmxlJyBpbiBzdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID1cbiAgICAgICAgICAgICAgc3RhdGUudmlzaWJsZSA9PT0gJ3RvZ2dsZScgPyAhdGhpcy52aXNpYmxlIDogc3RhdGUudmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==