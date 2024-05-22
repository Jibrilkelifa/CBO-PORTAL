import { Component, ContentChildren, HostBinding, } from '@angular/core';
import { slideAnimation, fadeAnimation } from '../carousel.animation';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import * as i0 from "@angular/core";
import * as i1 from "../carousel-state";
export class CarouselInnerComponent {
    constructor(carouselState) {
        this.carouselState = carouselState;
        this.carouselInnerClass = true;
        this.slide = { left: true };
        this.transition = 'slide';
    }
    ngAfterContentInit() {
        this.setItems();
    }
    ngAfterContentChecked() {
        this.setItems();
        const state = this.carouselState?.state;
        const nextIndex = state?.activeItemIndex;
        const nextDirection = state?.direction;
        if (this.activeIndex !== nextIndex) {
            this.animate = state?.animate;
            this.slide = { left: nextDirection === 'next' };
            this.activeIndex = state?.activeItemIndex;
            this.transition = state?.transition ?? 'slide';
        }
    }
    setItems() {
        if (this.prevContentItems !== this.contentItems) {
            this.prevContentItems = this.contentItems;
            this.carouselState.setItems(this.contentItems);
        }
    }
}
CarouselInnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselInnerComponent, deps: [{ token: i1.CarouselState }], target: i0.ɵɵFactoryTarget.Component });
CarouselInnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselInnerComponent, selector: "c-carousel-inner", host: { properties: { "class.carousel-inner": "this.carouselInnerClass" } }, queries: [{ propertyName: "contentItems", predicate: CarouselItemComponent }], ngImport: i0, template: "<div [@slideAnimation]=\"slide\" [@.disabled]=\"!animate\">\n  <ng-content></ng-content>\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]=\"slide\" [@.disabled]=\"!animate\" >-->\n<!--  <ng-content></ng-content>-->\n<!--</div>-->\n", styles: [":host{display:block}\n"], animations: [slideAnimation, fadeAnimation] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselInnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-inner', animations: [slideAnimation, fadeAnimation], template: "<div [@slideAnimation]=\"slide\" [@.disabled]=\"!animate\">\n  <ng-content></ng-content>\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]=\"slide\" [@.disabled]=\"!animate\" >-->\n<!--  <ng-content></ng-content>-->\n<!--</div>-->\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.CarouselState }]; }, propDecorators: { carouselInnerClass: [{
                type: HostBinding,
                args: ['class.carousel-inner']
            }], contentItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC1pbm5lci9jYXJvdXNlbC1pbm5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWlubmVyL2Nhcm91c2VsLWlubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFdBQVcsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7QUFTakYsTUFBTSxPQUFPLHNCQUFzQjtJQVVqQyxZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVRYLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQU0vRCxVQUFLLEdBQUcsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDckIsZUFBVSxHQUFHLE9BQU8sQ0FBQztJQUU4QixDQUFDO0lBRXBELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDeEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUFFLGVBQWUsQ0FBQztRQUN6QyxNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQUUsU0FBUyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxJQUFJLEVBQUUsYUFBYSxLQUFLLE1BQU0sRUFBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUFFLGVBQWUsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxVQUFVLElBQUksT0FBTyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7O21IQWxDVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixrS0FHaEIscUJBQXFCLDZCQ3ZCeEMsd09BT0Esa0REV2MsQ0FBRSxjQUFjLEVBQUUsYUFBYSxDQUFFOzJGQUVsQyxzQkFBc0I7a0JBTmxDLFNBQVM7K0JBQ0Usa0JBQWtCLGNBR2hCLENBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBRTtvR0FHUixrQkFBa0I7c0JBQXRELFdBQVc7dUJBQUMsc0JBQXNCO2dCQUVhLFlBQVk7c0JBQTNELGVBQWU7dUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHNsaWRlQW5pbWF0aW9uLCBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vY2Fyb3VzZWwuYW5pbWF0aW9uJztcbmltcG9ydCB7IENhcm91c2VsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTdGF0ZSB9IGZyb20gJy4uL2Nhcm91c2VsLXN0YXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jYXJvdXNlbC1pbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1pbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLWlubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFsgc2xpZGVBbmltYXRpb24sIGZhZGVBbmltYXRpb24gXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbElubmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaW5uZXInKSBjYXJvdXNlbElubmVyQ2xhc3MgPSB0cnVlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KSBwcml2YXRlIGNvbnRlbnRJdGVtcyE6IFF1ZXJ5TGlzdDxDYXJvdXNlbEl0ZW1Db21wb25lbnQ+O1xuICBwcml2YXRlIHByZXZDb250ZW50SXRlbXMhOiBRdWVyeUxpc3Q8Q2Fyb3VzZWxJdGVtQ29tcG9uZW50PjtcbiAgYWN0aXZlSW5kZXg/OiBudW1iZXI7XG4gIGFuaW1hdGU/OiBib29sZWFuO1xuICBzbGlkZSA9IHtsZWZ0OiB0cnVlfTtcbiAgdHJhbnNpdGlvbiA9ICdzbGlkZSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJvdXNlbFN0YXRlOiBDYXJvdXNlbFN0YXRlKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEl0ZW1zKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jYXJvdXNlbFN0YXRlPy5zdGF0ZTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBzdGF0ZT8uYWN0aXZlSXRlbUluZGV4O1xuICAgIGNvbnN0IG5leHREaXJlY3Rpb24gPSBzdGF0ZT8uZGlyZWN0aW9uO1xuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9PSBuZXh0SW5kZXgpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZSA9IHN0YXRlPy5hbmltYXRlO1xuICAgICAgdGhpcy5zbGlkZSA9IHtsZWZ0OiBuZXh0RGlyZWN0aW9uID09PSAnbmV4dCd9O1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHN0YXRlPy5hY3RpdmVJdGVtSW5kZXg7XG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSBzdGF0ZT8udHJhbnNpdGlvbiA/PyAnc2xpZGUnO1xuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZDb250ZW50SXRlbXMgIT09IHRoaXMuY29udGVudEl0ZW1zKSB7XG4gICAgICB0aGlzLnByZXZDb250ZW50SXRlbXMgPSB0aGlzLmNvbnRlbnRJdGVtcztcbiAgICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZS5zZXRJdGVtcyh0aGlzLmNvbnRlbnRJdGVtcyk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IFtAc2xpZGVBbmltYXRpb25dPVwic2xpZGVcIiBbQC5kaXNhYmxlZF09XCIhYW5pbWF0ZVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjwhLS10b2RvLS0+XG48IS0tPGRpdiBbQGZhZGVBbmltYXRpb25dPVwic2xpZGVcIiBbQC5kaXNhYmxlZF09XCIhYW5pbWF0ZVwiID4tLT5cbjwhLS0gIDxuZy1jb250ZW50PjwvbmctY29udGVudD4tLT5cbjwhLS08L2Rpdj4tLT5cbiJdfQ==