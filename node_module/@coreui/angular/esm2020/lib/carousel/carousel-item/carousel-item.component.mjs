import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../carousel.service";
import * as i2 from "@angular/common";
export class CarouselItemComponent {
    /**
     * @ignore
     */
    set active(value) {
        this._active = coerceBooleanProperty(value);
        this.changeDetectorRef.markForCheck();
    }
    get active() {
        return this._active;
    }
    get hostClasses() {
        return {
            'carousel-item': true,
            active: this.active
        };
    }
    constructor(carouselService, changeDetectorRef) {
        this.carouselService = carouselService;
        this.changeDetectorRef = changeDetectorRef;
        this._active = false;
        /**
         * Time delay before cycling to next item. If -1, uses carousel interval value.
         * @type number
         * @default -1
         */
        this.interval = -1;
    }
    ngOnDestroy() {
        this.carouselStateSubscribe(false);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.carouselStateSubscribe();
        });
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
                if ('active' in nextIndex) {
                    this.active = nextIndex.active === this.index;
                }
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
}
CarouselItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselItemComponent, deps: [{ token: i1.CarouselService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
CarouselItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselItemComponent, selector: "c-carousel-item", inputs: { active: "active", interval: "interval" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content *ngIf=\"active\"></ng-content>\n", styles: [":host{display:block}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-item', template: "<ng-content *ngIf=\"active\"></ng-content>\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.CarouselService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { active: [{
                type: Input
            }], interval: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9DLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSzNHLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU81RSxNQUFNLE9BQU8scUJBQXFCO0lBT2hDOztPQUVHO0lBQ0gsSUFDSSxNQUFNLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQVVELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSTtZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUNVLGVBQWdDLEVBQ2hDLGlCQUFvQztRQURwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQW5CdEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV4Qjs7OztXQUlHO1FBQ00sYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBYTVCLENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFlBQXFCLElBQUk7UUFDdEQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzNGLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQy9DO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7a0hBNURVLHFCQUFxQjtzR0FBckIscUJBQXFCLGtLQ1psQyw4Q0FDQTsyRkRXYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsaUJBQWlCO3NJQWV2QixNQUFNO3NCQURULEtBQUs7Z0JBZUcsUUFBUTtzQkFBaEIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jYXJvdXNlbC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYWN0aXZlOiBCb29sZWFuSW5wdXQ7XG5cbiAgaW5kZXg/OiBudW1iZXI7XG4gIHByaXZhdGUgY2Fyb3VzZWxJbmRleFN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGFjdGl2ZSh2YWx1ZSkge1xuICAgIHRoaXMuX2FjdGl2ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRpbWUgZGVsYXkgYmVmb3JlIGN5Y2xpbmcgdG8gbmV4dCBpdGVtLiBJZiAtMSwgdXNlcyBjYXJvdXNlbCBpbnRlcnZhbCB2YWx1ZS5cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZWZhdWx0IC0xXG4gICAqL1xuICBASW5wdXQoKSBpbnRlcnZhbDogbnVtYmVyID0gLTE7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnY2Fyb3VzZWwtaXRlbSc6IHRydWUsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2Fyb3VzZWxTZXJ2aWNlOiBDYXJvdXNlbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZShmYWxzZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNhcm91c2VsU3RhdGVTdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5jYXJvdXNlbEluZGV4U3Vic2NyaXB0aW9uID0gdGhpcy5jYXJvdXNlbFNlcnZpY2UuY2Fyb3VzZWxJbmRleCQuc3Vic2NyaWJlKChuZXh0SW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCdhY3RpdmUnIGluIG5leHRJbmRleCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gbmV4dEluZGV4LmFjdGl2ZSA9PT0gdGhpcy5pbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxJbmRleFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50ICpuZ0lmPVwiYWN0aXZlXCI+PC9uZy1jb250ZW50PlxuIl19