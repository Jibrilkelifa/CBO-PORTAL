import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../carousel.service";
import * as i2 from "../carousel-state";
import * as i3 from "@angular/common";
export class CarouselIndicatorsComponent {
    constructor(carouselService, carouselState) {
        this.carouselService = carouselService;
        this.carouselState = carouselState;
        this.items = [];
        this.active = 0;
    }
    ngOnInit() {
        this.carouselStateSubscribe();
    }
    ngOnDestroy() {
        this.carouselStateSubscribe(false);
    }
    onClick(index) {
        if (index !== this.active) {
            const direction = index < this.active ? 'prev' : 'next';
            this.carouselState.state = { direction, activeItemIndex: index };
        }
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
                this.items = this.carouselState?.state?.items?.map(item => item.index) ?? [];
                if ('active' in nextIndex) {
                    this.active = nextIndex.active ?? 0;
                }
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
}
CarouselIndicatorsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselIndicatorsComponent, deps: [{ token: i1.CarouselService }, { token: i2.CarouselState }], target: i0.ɵɵFactoryTarget.Component });
CarouselIndicatorsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselIndicatorsComponent, selector: "c-carousel-indicators", ngImport: i0, template: "<div class=\"carousel-indicators\">\n  <ng-container *ngFor=\"let item of items; let i=index\">\n    <button [attr.data-coreui-target]=\"i\" type=\"button\" (click)=\"onClick(i)\" [class]=\"{active: active === i}\" [attr.aria-current]=\"active === i\"></button>\n  </ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselIndicatorsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-indicators', template: "<div class=\"carousel-indicators\">\n  <ng-container *ngFor=\"let item of items; let i=index\">\n    <button [attr.data-coreui-target]=\"i\" type=\"button\" (click)=\"onClick(i)\" [class]=\"{active: active === i}\" [attr.aria-current]=\"active === i\"></button>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CarouselService }, { type: i2.CarouselState }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5kaWNhdG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWluZGljYXRvcnMvY2Fyb3VzZWwtaW5kaWNhdG9ycy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWluZGljYXRvcnMvY2Fyb3VzZWwtaW5kaWNhdG9ycy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFVN0QsTUFBTSxPQUFPLDJCQUEyQjtJQU10QyxZQUNVLGVBQWdDLEVBQ2hDLGFBQTRCO1FBRDVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVB0QyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQUNuQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBT1IsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLFNBQVMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxTQUFTLEVBQUcsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFlBQXFCLElBQUk7UUFDdEQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzdFLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztpQkFDckM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLENBQUM7U0FDL0M7SUFDSCxDQUFDOzt3SEFyQ1UsMkJBQTJCOzRHQUEzQiwyQkFBMkIsNkRDVnhDLG9TQUtBOzJGREthLDJCQUEyQjtrQkFMdkMsU0FBUzsrQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcm91c2VsU3RhdGUgfSBmcm9tICcuLi9jYXJvdXNlbC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuLi9jYXJvdXNlbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jYXJvdXNlbC1pbmRpY2F0b3JzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLWluZGljYXRvcnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC1pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW5kaWNhdG9yc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXRlbXM6IChudW1iZXIgfCB1bmRlZmluZWQpW10gPSBbXTtcbiAgYWN0aXZlID0gMDtcblxuICBwcml2YXRlIGNhcm91c2VsSW5kZXhTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IENhcm91c2VsU2VydmljZSxcbiAgICBwcml2YXRlIGNhcm91c2VsU3RhdGU6IENhcm91c2VsU3RhdGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbFN0YXRlU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIG9uQ2xpY2soaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCAhPT0gdGhpcy5hY3RpdmUpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGluZGV4IDwgdGhpcy5hY3RpdmUgPyAncHJldicgOiAnbmV4dCc7XG4gICAgICB0aGlzLmNhcm91c2VsU3RhdGUuc3RhdGUgPSB7IGRpcmVjdGlvbiwgIGFjdGl2ZUl0ZW1JbmRleDogaW5kZXggfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhcm91c2VsU3RhdGVTdWJzY3JpYmUoc3Vic2NyaWJlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxJbmRleFN1YnNjcmlwdGlvbiA9IHRoaXMuY2Fyb3VzZWxTZXJ2aWNlLmNhcm91c2VsSW5kZXgkLnN1YnNjcmliZSgobmV4dEluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNhcm91c2VsU3RhdGU/LnN0YXRlPy5pdGVtcz8ubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkgPz8gW107XG4gICAgICAgIGlmICgnYWN0aXZlJyBpbiBuZXh0SW5kZXgpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IG5leHRJbmRleC5hY3RpdmUgPz8gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxJbmRleFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpPWluZGV4XCI+XG4gICAgPGJ1dHRvbiBbYXR0ci5kYXRhLWNvcmV1aS10YXJnZXRdPVwiaVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DbGljayhpKVwiIFtjbGFzc109XCJ7YWN0aXZlOiBhY3RpdmUgPT09IGl9XCIgW2F0dHIuYXJpYS1jdXJyZW50XT1cImFjdGl2ZSA9PT0gaVwiPjwvYnV0dG9uPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19