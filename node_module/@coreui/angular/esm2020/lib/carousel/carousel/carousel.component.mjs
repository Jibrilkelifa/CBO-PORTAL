import { Component, EventEmitter, HostBinding, Inject, Input, Output } from '@angular/core';
import { fromEvent, withLatestFrom, zipWith } from 'rxjs';
import { IntersectionService } from '../../services/intersection.service';
import { ListenersService } from '../../services/listeners.service';
import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import { CarouselConfig } from '../carousel.config';
import * as i0 from "@angular/core";
import * as i1 from "../carousel.service";
import * as i2 from "../carousel-state";
import * as i3 from "../../services/intersection.service";
import * as i4 from "../../services/listeners.service";
import * as i5 from "../carousel.config";
export class CarouselComponent {
    get hostClasses() {
        return {
            carousel: true,
            slide: true,
            'carousel-dark': !!this.dark,
            'carousel-fade': this.transition === 'crossfade'
        };
    }
    constructor(config, hostElement, carouselService, carouselState, intersectionService, listenersService) {
        this.config = config;
        this.hostElement = hostElement;
        this.carouselService = carouselService;
        this.carouselState = carouselState;
        this.intersectionService = intersectionService;
        this.listenersService = listenersService;
        /**
         * Index of the active item.
         * @type number
         */
        this.activeIndex = 0;
        /**
         * Carousel automatically starts cycle items.
         * @type boolean
         */
        this.animate = true;
        /**
         * Carousel direction. [docs]
         * @type {'next' | 'prev'}
         */
        this.direction = 'next';
        /**
         * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
         * @type number
         * @default 0
         */
        this.interval = 0;
        /**
         * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
         * @type {'hover' | 'focus' | 'click'}
         */
        this.pause = 'hover';
        /**
         * Support left/right swipe interactions on touchscreen devices.
         * @type boolean
         * @default true
         */
        this.touch = true;
        /**
         * Set type of the transition.
         * @type {'slide' | 'crossfade'}
         * @default 'slide'
         */
        this.transition = 'slide';
        /**
         * Set whether the carousel should cycle continuously or have hard stops.
         * @type boolean
         * @default true
         */
        this.wrap = true;
        /**
         * Event emitted on carousel item change. [docs]
         * @type number
         */
        this.itemChange = new EventEmitter();
        this.activeItemInterval = 0;
        this._visible = true;
        Object.assign(this, config);
    }
    ngOnInit() {
        this.carouselStateSubscribe();
    }
    ngOnDestroy() {
        this.clearListeners();
        this.carouselStateSubscribe(false);
        this.intersectionServiceSubscribe(false);
        this.swipeSubscribe(false);
    }
    ngAfterContentInit() {
        this.intersectionService.createIntersectionObserver(this.hostElement);
        this.intersectionServiceSubscribe();
        this.carouselState.state = { activeItemIndex: this.activeIndex, animate: this.animate };
        this.setListeners();
        this.swipeSubscribe();
    }
    setListeners() {
        const config = {
            hostElement: this.hostElement,
            trigger: this.pause || [],
            callbackOff: () => {
                this.setTimer();
            },
            callbackOn: () => {
                this.resetTimer();
            }
        };
        this.listenersService.setListeners(config);
    }
    clearListeners() {
        this.listenersService.clearListeners();
    }
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    setTimer() {
        const interval = this.activeItemInterval || 0;
        this.resetTimer();
        if (interval > 0) {
            this.timerId = setTimeout(() => {
                const nextIndex = this.carouselState.direction(this.direction);
                this.carouselState.state = { activeItemIndex: nextIndex };
            }, interval);
        }
    }
    resetTimer() {
        clearTimeout(this.timerId);
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextItem) => {
                if ('active' in nextItem) {
                    this.itemChange.emit(nextItem.active);
                }
                this.activeItemInterval = typeof nextItem.interval === 'number' && nextItem.interval > -1 ? nextItem.interval : this.interval;
                const isLastItem = ((nextItem.active === nextItem.lastItemIndex) && this.direction === 'next') || ((nextItem.active === 0) && this.direction === 'prev');
                !this.wrap && isLastItem ? this.resetTimer() : this.setTimer();
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
    intersectionServiceSubscribe(subscribe = true) {
        if (subscribe) {
            this.intersectingSubscription = this.intersectionService.intersecting$.subscribe(isIntersecting => {
                this.visible = isIntersecting;
                isIntersecting ? this.setTimer() : this.resetTimer();
            });
        }
        else {
            this.intersectingSubscription?.unsubscribe();
        }
    }
    swipeSubscribe(subscribe = true) {
        if (this.touch && subscribe) {
            const carouselElement = this.hostElement.nativeElement;
            const touchStart$ = fromEvent(carouselElement, 'touchstart');
            const touchEnd$ = fromEvent(carouselElement, 'touchend');
            const touchMove$ = fromEvent(carouselElement, 'touchmove');
            this.swipeSubscription = touchStart$.pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))))
                .subscribe(([touchstart, [touchend, touchmove]]) => {
                touchstart.stopPropagation();
                touchmove.stopPropagation();
                const distanceX = touchstart.touches[0].clientX - touchmove.touches[0].clientX;
                if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
                    const nextIndex = this.carouselState.direction(distanceX > 0 ? 'next' : 'prev');
                    this.carouselState.state = { activeItemIndex: nextIndex };
                }
            });
        }
        else {
            this.swipeSubscription?.unsubscribe();
        }
    }
}
CarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselComponent, deps: [{ token: CarouselConfig }, { token: i0.ElementRef }, { token: i1.CarouselService }, { token: i2.CarouselState }, { token: i3.IntersectionService }, { token: i4.ListenersService }], target: i0.ɵɵFactoryTarget.Component });
CarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselComponent, selector: "c-carousel", inputs: { activeIndex: "activeIndex", animate: "animate", dark: "dark", direction: "direction", interval: "interval", pause: "pause", touch: "touch", transition: "transition", wrap: "wrap" }, outputs: { itemChange: "itemChange" }, host: { properties: { "class": "this.hostClasses" } }, providers: [CarouselService, CarouselState, CarouselConfig, IntersectionService, ListenersService], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel', template: '<ng-content></ng-content>', providers: [CarouselService, CarouselState, CarouselConfig, IntersectionService, ListenersService], styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i5.CarouselConfig, decorators: [{
                    type: Inject,
                    args: [CarouselConfig]
                }] }, { type: i0.ElementRef }, { type: i1.CarouselService }, { type: i2.CarouselState }, { type: i3.IntersectionService }, { type: i4.ListenersService }]; }, propDecorators: { activeIndex: [{
                type: Input
            }], animate: [{
                type: Input
            }], dark: [{
                type: Input
            }], direction: [{
                type: Input
            }], interval: [{
                type: Input
            }], pause: [{
                type: Input
            }], touch: [{
                type: Input
            }], transition: [{
                type: Input
            }], wrap: [{
                type: Input
            }], itemChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBU3BELE1BQU0sT0FBTyxpQkFBaUI7SUF3RDVCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUM1QixlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXO1NBQ2pELENBQUM7SUFDSixDQUFDO0lBUUQsWUFDa0MsTUFBc0IsRUFDOUMsV0FBdUIsRUFDdkIsZUFBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsbUJBQXdDLEVBQ3hDLGdCQUFrQztRQUxWLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFl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QkFLRyxPQUFPO3NCQUFmLEtBQUs7Z0JBS0csSUFBSTtzQkFBWixLQUFLO2dCQUtHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBTUcsUUFBUTtzQkFBaEIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1HLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQUtJLFVBQVU7c0JBQW5CLE1BQU07Z0JBR0gsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiwgd2l0aExhdGVzdEZyb20sIHppcFdpdGggfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW50ZXJzZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVyc2VjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElMaXN0ZW5lcnNDb25maWcsIExpc3RlbmVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saXN0ZW5lcnMuc2VydmljZSc7XG5cbmltcG9ydCB7IENhcm91c2VsU3RhdGUgfSBmcm9tICcuLi9jYXJvdXNlbC1zdGF0ZSc7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcm91c2VsQ29uZmlnIH0gZnJvbSAnLi4vY2Fyb3VzZWwuY29uZmlnJztcbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi4vLi4vY29yZXVpLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0Nhcm91c2VsU2VydmljZSwgQ2Fyb3VzZWxTdGF0ZSwgQ2Fyb3VzZWxDb25maWcsIEludGVyc2VjdGlvblNlcnZpY2UsIExpc3RlbmVyc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICAvKipcbiAgICogSW5kZXggb2YgdGhlIGFjdGl2ZSBpdGVtLlxuICAgKiBAdHlwZSBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZUluZGV4ID0gMDtcbiAgLyoqXG4gICAqIENhcm91c2VsIGF1dG9tYXRpY2FsbHkgc3RhcnRzIGN5Y2xlIGl0ZW1zLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBhbmltYXRlID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEFkZCBkYXJrZXIgY29udHJvbHMsIGluZGljYXRvcnMsIGFuZCBjYXB0aW9ucy5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgZGFyaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDYXJvdXNlbCBkaXJlY3Rpb24uIFtkb2NzXVxuICAgKiBAdHlwZSB7J25leHQnIHwgJ3ByZXYnfVxuICAgKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uOiAnbmV4dCcgfCAncHJldicgPSAnbmV4dCc7XG4gIC8qKlxuICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gZGVsYXkgYmV0d2VlbiBhdXRvbWF0aWNhbGx5IGN5Y2xpbmcgYW4gaXRlbS4gSWYgZmFsc2UsIGNhcm91c2VsIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgY3ljbGUuXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBASW5wdXQoKSBpbnRlcnZhbCA9IDA7XG4gIC8qKlxuICAgKiBTZXRzIHdoaWNoIGV2ZW50IGhhbmRsZXJzIHlvdeKAmWQgbGlrZSBwcm92aWRlZCB0byB5b3VyIHBhdXNlIHByb3AuIFlvdSBjYW4gc3BlY2lmeSBvbmUgdHJpZ2dlciBvciBhbiBhcnJheSBvZiB0aGVtLlxuICAgKiBAdHlwZSB7J2hvdmVyJyB8ICdmb2N1cycgfCAnY2xpY2snfVxuICAgKi9cbiAgQElucHV0KCkgcGF1c2U6IFRyaWdnZXJzIHwgVHJpZ2dlcnNbXSB8IGZhbHNlID0gJ2hvdmVyJztcbiAgLyoqXG4gICAqIFN1cHBvcnQgbGVmdC9yaWdodCBzd2lwZSBpbnRlcmFjdGlvbnMgb24gdG91Y2hzY3JlZW4gZGV2aWNlcy5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBASW5wdXQoKSB0b3VjaDogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiBTZXQgdHlwZSBvZiB0aGUgdHJhbnNpdGlvbi5cbiAgICogQHR5cGUgeydzbGlkZScgfCAnY3Jvc3NmYWRlJ31cbiAgICogQGRlZmF1bHQgJ3NsaWRlJ1xuICAgKi9cbiAgQElucHV0KCkgdHJhbnNpdGlvbjogJ3NsaWRlJyB8ICdjcm9zc2ZhZGUnID0gJ3NsaWRlJztcbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSBjYXJvdXNlbCBzaG91bGQgY3ljbGUgY29udGludW91c2x5IG9yIGhhdmUgaGFyZCBzdG9wcy5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBASW5wdXQoKSB3cmFwID0gdHJ1ZTtcbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgb24gY2Fyb3VzZWwgaXRlbSBjaGFuZ2UuIFtkb2NzXVxuICAgKiBAdHlwZSBudW1iZXJcbiAgICovXG4gIEBPdXRwdXQoKSBpdGVtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJvdXNlbDogdHJ1ZSxcbiAgICAgIHNsaWRlOiB0cnVlLFxuICAgICAgJ2Nhcm91c2VsLWRhcmsnOiAhIXRoaXMuZGFyayxcbiAgICAgICdjYXJvdXNlbC1mYWRlJzogdGhpcy50cmFuc2l0aW9uID09PSAnY3Jvc3NmYWRlJ1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNhcm91c2VsSW5kZXhTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdGltZXJJZCE6IGFueTtcbiAgcHJpdmF0ZSBpbnRlcnNlY3RpbmdTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgYWN0aXZlSXRlbUludGVydmFsID0gMDtcbiAgcHJpdmF0ZSBzd2lwZVN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENhcm91c2VsQ29uZmlnKSBwcml2YXRlIGNvbmZpZzogQ2Fyb3VzZWxDb25maWcsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNhcm91c2VsU2VydmljZTogQ2Fyb3VzZWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Fyb3VzZWxTdGF0ZTogQ2Fyb3VzZWxTdGF0ZSxcbiAgICBwcml2YXRlIGludGVyc2VjdGlvblNlcnZpY2U6IEludGVyc2VjdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnNTZXJ2aWNlOiBMaXN0ZW5lcnNTZXJ2aWNlXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZShmYWxzZSk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlU3Vic2NyaWJlKGZhbHNlKTtcbiAgICB0aGlzLnN3aXBlU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVyc2VjdGlvblNlcnZpY2UuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5ob3N0RWxlbWVudCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlU3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jYXJvdXNlbFN0YXRlLnN0YXRlID0geyBhY3RpdmVJdGVtSW5kZXg6IHRoaXMuYWN0aXZlSW5kZXgsIGFuaW1hdGU6IHRoaXMuYW5pbWF0ZSB9O1xuICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5zd2lwZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnOiBJTGlzdGVuZXJzQ29uZmlnID0ge1xuICAgICAgaG9zdEVsZW1lbnQ6IHRoaXMuaG9zdEVsZW1lbnQsXG4gICAgICB0cmlnZ2VyOiB0aGlzLnBhdXNlIHx8IFtdLFxuICAgICAgY2FsbGJhY2tPZmY6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRUaW1lcigpO1xuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrT246ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmxpc3RlbmVyc1NlcnZpY2Uuc2V0TGlzdGVuZXJzKGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdGVuZXJzU2VydmljZS5jbGVhckxpc3RlbmVycygpO1xuICB9XG5cbiAgc2V0IHZpc2libGUodmFsdWUpIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHNldFRpbWVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5hY3RpdmVJdGVtSW50ZXJ2YWwgfHwgMDtcbiAgICB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICBpZiAoaW50ZXJ2YWwgPiAwKSB7XG4gICAgICB0aGlzLnRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5jYXJvdXNlbFN0YXRlLmRpcmVjdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZS5zdGF0ZSA9IHsgYWN0aXZlSXRlbUluZGV4OiBuZXh0SW5kZXggfTtcbiAgICAgIH0sIGludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICByZXNldFRpbWVyKCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXJvdXNlbFN0YXRlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLmNhcm91c2VsSW5kZXhTdWJzY3JpcHRpb24gPSB0aGlzLmNhcm91c2VsU2VydmljZS5jYXJvdXNlbEluZGV4JC5zdWJzY3JpYmUoKG5leHRJdGVtKSA9PiB7XG4gICAgICAgIGlmICgnYWN0aXZlJyBpbiBuZXh0SXRlbSkge1xuICAgICAgICAgIHRoaXMuaXRlbUNoYW5nZS5lbWl0KG5leHRJdGVtLmFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtSW50ZXJ2YWwgPSB0eXBlb2YgbmV4dEl0ZW0uaW50ZXJ2YWwgPT09ICdudW1iZXInICYmIG5leHRJdGVtLmludGVydmFsID4gLTEgPyBuZXh0SXRlbS5pbnRlcnZhbCA6IHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIGNvbnN0IGlzTGFzdEl0ZW0gPSAoKG5leHRJdGVtLmFjdGl2ZSA9PT0gbmV4dEl0ZW0ubGFzdEl0ZW1JbmRleCkgJiYgdGhpcy5kaXJlY3Rpb24gPT09ICduZXh0JykgfHwgKChuZXh0SXRlbS5hY3RpdmUgPT09IDApICYmIHRoaXMuZGlyZWN0aW9uID09PSAncHJldicpO1xuICAgICAgICAhdGhpcy53cmFwICYmIGlzTGFzdEl0ZW0gPyB0aGlzLnJlc2V0VGltZXIoKSA6IHRoaXMuc2V0VGltZXIoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhcm91c2VsSW5kZXhTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbnRlcnNlY3Rpb25TZXJ2aWNlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLmludGVyc2VjdGluZ1N1YnNjcmlwdGlvbiA9IHRoaXMuaW50ZXJzZWN0aW9uU2VydmljZS5pbnRlcnNlY3RpbmckLnN1YnNjcmliZShpc0ludGVyc2VjdGluZyA9PiB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGlzSW50ZXJzZWN0aW5nO1xuICAgICAgICBpc0ludGVyc2VjdGluZyA/IHRoaXMuc2V0VGltZXIoKSA6IHRoaXMucmVzZXRUaW1lcigpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJzZWN0aW5nU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3dpcGVTdWJzY3JpYmUoc3Vic2NyaWJlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvdWNoICYmIHN1YnNjcmliZSkge1xuICAgICAgY29uc3QgY2Fyb3VzZWxFbGVtZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3QgdG91Y2hTdGFydCQgPSBmcm9tRXZlbnQ8VG91Y2hFdmVudD4oY2Fyb3VzZWxFbGVtZW50LCAndG91Y2hzdGFydCcpO1xuICAgICAgY29uc3QgdG91Y2hFbmQkID0gZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KGNhcm91c2VsRWxlbWVudCwgJ3RvdWNoZW5kJyk7XG4gICAgICBjb25zdCB0b3VjaE1vdmUkID0gZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KGNhcm91c2VsRWxlbWVudCwgJ3RvdWNobW92ZScpO1xuICAgICAgdGhpcy5zd2lwZVN1YnNjcmlwdGlvbiA9IHRvdWNoU3RhcnQkLnBpcGUoemlwV2l0aCh0b3VjaEVuZCQucGlwZSh3aXRoTGF0ZXN0RnJvbSh0b3VjaE1vdmUkKSkpKVxuICAgICAgICAuc3Vic2NyaWJlKChbdG91Y2hzdGFydCwgW3RvdWNoZW5kLCB0b3VjaG1vdmVdXSkgPT4ge1xuICAgICAgICAgIHRvdWNoc3RhcnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdG91Y2htb3ZlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlWCA9IHRvdWNoc3RhcnQudG91Y2hlc1swXS5jbGllbnRYIC0gdG91Y2htb3ZlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA+IDAuMyAqIGNhcm91c2VsRWxlbWVudC5jbGllbnRXaWR0aCAmJiB0b3VjaHN0YXJ0LnRpbWVTdGFtcCA8PSB0b3VjaG1vdmUudGltZVN0YW1wKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmNhcm91c2VsU3RhdGUuZGlyZWN0aW9uKGRpc3RhbmNlWCA+IDAgPyAnbmV4dCcgOiAncHJldicpO1xuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbFN0YXRlLnN0YXRlID0geyBhY3RpdmVJdGVtSW5kZXg6IG5leHRJbmRleCB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3dpcGVTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=