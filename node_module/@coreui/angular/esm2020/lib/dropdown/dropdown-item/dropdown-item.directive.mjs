import { Directive, HostBinding, HostListener, Input, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
import * as i2 from "../dropdown/dropdown.component";
export class DropdownItemDirective {
    constructor(dropdownService, dropdown) {
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        /**
         * Configure dropdown-item close dropdown behavior.
         * @type boolean
         * @default true
         */
        this.autoClose = true;
        this._tabIndex = null;
    }
    get ariaCurrent() {
        return this.active ? 'true' : null;
    }
    get hostClasses() {
        return {
            'dropdown-item': true,
            active: this.active,
            disabled: this.disabled
        };
    }
    set tabIndex(value) {
        this._tabIndex = value;
    }
    get tabIndex() {
        return this.disabled ? '-1' : this._tabIndex;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    onClick($event) {
        if (this.autoClose) {
            this.dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
        }
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            if (this.autoClose) {
                this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
            }
        }
    }
}
DropdownItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownItemDirective, deps: [{ token: i1.DropdownService }, { token: i2.DropdownComponent, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DropdownItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownItemDirective, selector: "[cDropdownItem]", inputs: { active: "active", autoClose: "autoClose", disabled: "disabled", tabIndex: "tabIndex" }, host: { listeners: { "click": "onClick($event)", "keyup": "onKeyUp($event)" }, properties: { "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses", "attr.tabindex": "this.tabIndex", "attr.aria-disabled": "this.isDisabled" } }, exportAs: ["cDropdownItem"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownItem]',
                    exportAs: 'cDropdownItem'
                }]
        }], ctorParameters: function () { return [{ type: i1.DropdownService }, { type: i2.DropdownComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { active: [{
                type: Input
            }], autoClose: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }, {
                type: Input
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLWl0ZW0vZHJvcGRvd24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRdEYsTUFBTSxPQUFPLHFCQUFxQjtJQW9CaEMsWUFDVSxlQUFnQyxFQUNyQixRQUE0QjtRQUR2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFmakQ7Ozs7V0FJRztRQUNNLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFvQzNCLGNBQVMsR0FBMkIsSUFBSSxDQUFDO0lBeEJqRCxDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUVJLFFBQVEsQ0FBQyxLQUE2QjtRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUdELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUdPLE9BQU8sQ0FBQyxNQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7SUFHTyxPQUFPLENBQUMsTUFBcUI7UUFDbkMsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUU7U0FDRjtJQUNILENBQUM7O2tIQXJFVSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUpqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7MEJBdUJJLFFBQVE7NENBaEJGLE1BQU07c0JBQWQsS0FBSztnQkFNRyxTQUFTO3NCQUFqQixLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBU0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFNNUIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBV2hCLFFBQVE7c0JBRlgsV0FBVzt1QkFBQyxlQUFlOztzQkFDM0IsS0FBSztnQkFVRixVQUFVO3NCQURiLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU16QixPQUFPO3NCQURkLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQVF6QixPQUFPO3NCQURkLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4uL2Ryb3Bkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0Ryb3Bkb3duSXRlbV0nLFxuICBleHBvcnRBczogJ2NEcm9wZG93bkl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duSXRlbURpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBTZXQgYWN0aXZlIHN0YXRlIHRvIGEgZHJvcGRvd24taXRlbS5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDb25maWd1cmUgZHJvcGRvd24taXRlbSBjbG9zZSBkcm9wZG93biBiZWhhdmlvci5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBASW5wdXQoKSBhdXRvQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogRGlzYWJsZXMgYSBkcm9wZG93bi1pdGVtLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZHJvcGRvd25TZXJ2aWNlOiBEcm9wZG93blNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGRyb3Bkb3duPzogRHJvcGRvd25Db21wb25lbnRcbiAgKSB7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1jdXJyZW50JylcbiAgZ2V0IGFyaWFDdXJyZW50KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA/ICd0cnVlJyA6IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkcm9wZG93bi1pdGVtJzogdHJ1ZSxcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBASW5wdXQoKVxuICBzZXQgdGFiSW5kZXgodmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwpIHtcbiAgICB0aGlzLl90YWJJbmRleCA9IHZhbHVlO1xuICB9XG4gIGdldCB0YWJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICctMScgOiB0aGlzLl90YWJJbmRleDtcbiAgfVxuICBwcml2YXRlIF90YWJJbmRleDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHJpdmF0ZSBvbkNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9DbG9zZSkge1xuICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UudG9nZ2xlKHsgdmlzaWJsZTogJ3RvZ2dsZScsIGRyb3Bkb3duOiB0aGlzLmRyb3Bkb3duIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgcHJpdmF0ZSBvbktleVVwKCRldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAodGhpcy5hdXRvQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UudG9nZ2xlKHsgdmlzaWJsZTogZmFsc2UsIGRyb3Bkb3duOiB0aGlzLmRyb3Bkb3duIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19