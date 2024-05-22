import { Directive, HostBinding, HostListener, Input, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
import * as i2 from "../dropdown/dropdown.component";
export class DropdownCloseDirective {
    constructor(dropdownService, dropdown) {
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        this._tabIndex = null;
    }
    ngAfterViewInit() {
        if (this.dropdownComponent) {
            this.dropdown = this.dropdownComponent;
            this.dropdownService = this.dropdownComponent?.dropdownService;
        }
    }
    get hostClasses() {
        return {
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
        !this.disabled && this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            !this.disabled && this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
        }
    }
}
DropdownCloseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownCloseDirective, deps: [{ token: i1.DropdownService }, { token: i2.DropdownComponent, optional: true }], target: i0.ɵɵFactoryTarget.Directive });
DropdownCloseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: DropdownCloseDirective, selector: "[cDropdownClose]", inputs: { disabled: "disabled", dropdownComponent: "dropdownComponent", tabIndex: "tabIndex" }, host: { listeners: { "click": "onClick($event)", "keyup": "onKeyUp($event)" }, properties: { "class": "this.hostClasses", "attr.tabindex": "this.tabIndex", "attr.aria-disabled": "this.isDisabled" } }, exportAs: ["cDropdownClose"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownClose]',
                    exportAs: 'cDropdownClose'
                }]
        }], ctorParameters: function () { return [{ type: i1.DropdownService }, { type: i2.DropdownComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { disabled: [{
                type: Input
            }], dropdownComponent: [{
                type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9kcm9wZG93bi9kcm9wZG93bi1jbG9zZS9kcm9wZG93bi1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUXJHLE1BQU0sT0FBTyxzQkFBc0I7SUFFakMsWUFDVSxlQUFnQyxFQUNyQixRQUE0QjtRQUR2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFrQ3pDLGNBQVMsR0FBMkIsSUFBSSxDQUFDO0lBakM3QyxDQUFDO0lBV0wsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFFSSxRQUFRLENBQUMsS0FBNkI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFHRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFHTyxPQUFPLENBQUMsTUFBa0I7UUFDaEMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUdPLE9BQU8sQ0FBQyxNQUFxQjtRQUNuQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQzFCLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQzs7bUhBdkRVLHNCQUFzQjt1R0FBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBSmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OzBCQUtJLFFBQVE7NENBUUYsUUFBUTtzQkFBaEIsS0FBSztnQkFFRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBVUYsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBU2hCLFFBQVE7c0JBRlgsV0FBVzt1QkFBQyxlQUFlOztzQkFDM0IsS0FBSztnQkFVRixVQUFVO3NCQURiLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU16QixPQUFPO3NCQURkLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU16QixPQUFPO3NCQURkLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSB9IGZyb20gJy4uL2Ryb3Bkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0Ryb3Bkb3duQ2xvc2VdJyxcbiAgZXhwb3J0QXM6ICdjRHJvcGRvd25DbG9zZSdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25DbG9zZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZHJvcGRvd25TZXJ2aWNlOiBEcm9wZG93blNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGRyb3Bkb3duPzogRHJvcGRvd25Db21wb25lbnRcbiAgKSB7IH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgYSBkcm9wZG93bi1jbG9zZSBkaXJlY3RpdmUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgQElucHV0KCkgZHJvcGRvd25Db21wb25lbnQ/OiBEcm9wZG93bkNvbXBvbmVudDtcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd25Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duQ29tcG9uZW50O1xuICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UgPSB0aGlzLmRyb3Bkb3duQ29tcG9uZW50Py5kcm9wZG93blNlcnZpY2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBASW5wdXQoKVxuICBzZXQgdGFiSW5kZXgodmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwpIHtcbiAgICB0aGlzLl90YWJJbmRleCA9IHZhbHVlO1xuICB9XG4gIGdldCB0YWJJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICctMScgOiB0aGlzLl90YWJJbmRleDtcbiAgfVxuICBwcml2YXRlIF90YWJJbmRleDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHJpdmF0ZSBvbkNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICF0aGlzLmRpc2FibGVkICYmIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnRvZ2dsZSh7IHZpc2libGU6IGZhbHNlLCBkcm9wZG93bjogdGhpcy5kcm9wZG93biB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgcHJpdmF0ZSBvbktleVVwKCRldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmRyb3Bkb3duU2VydmljZS50b2dnbGUoeyB2aXNpYmxlOiBmYWxzZSwgZHJvcGRvd246IHRoaXMuZHJvcGRvd24gfSk7XG4gICAgfVxuICB9XG59XG4iXX0=