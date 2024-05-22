import { Component, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../carousel-state";
import * as i2 from "@angular/common";
export class CarouselControlComponent {
    constructor(changeDetector, carouselState) {
        this.changeDetector = changeDetector;
        this.carouselState = carouselState;
        /**
         * Carousel control direction. [docs]
         * @type {'next' | 'prev'}
         */
        this.direction = 'next';
        this.hasContent = true;
    }
    /**
     * Carousel control caption. [docs]
     * @type string
     */
    set caption(value) {
        this._caption = value;
    }
    get caption() {
        return !!this._caption ? this._caption : this.direction === 'prev' ? 'Previous' : 'Next';
    }
    get hostRole() {
        return 'button';
    }
    get hostClasses() {
        return `carousel-control-${this.direction}`;
    }
    get carouselControlIconClass() {
        return `carousel-control-${this.direction}-icon`;
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            this.play();
        }
        if ($event.key === 'ArrowLeft') {
            this.play('prev');
        }
        if ($event.key === 'ArrowRight') {
            this.play('next');
        }
    }
    onClick($event) {
        this.play();
    }
    ngAfterViewInit() {
        this.hasContent = this.content?.nativeElement.childNodes.length ?? false;
        this.changeDetector.detectChanges();
    }
    play(direction = this.direction) {
        const nextIndex = this.carouselState.direction(direction);
        this.carouselState.state = { activeItemIndex: nextIndex };
    }
}
CarouselControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselControlComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.CarouselState }], target: i0.ɵɵFactoryTarget.Component });
CarouselControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: CarouselControlComponent, selector: "c-carousel-control", inputs: { caption: "caption", direction: "direction" }, host: { listeners: { "keyup": "onKeyUp($event)", "click": "onClick($event)" }, properties: { "attr.role": "this.hostRole", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: "<div #content *ngIf = \"hasContent; else default\"><ng-content></ng-content></div>\n<ng-template #default>\n  <span [class]=\"carouselControlIconClass\" [attr.aria-label]=\"direction\" [attr.aria-hidden]=\"true\"></span>\n  <span class=\"visually-hidden\">{{caption}}</span>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-control', template: "<div #content *ngIf = \"hasContent; else default\"><ng-content></ng-content></div>\n<ng-template #default>\n  <span [class]=\"carouselControlIconClass\" [attr.aria-label]=\"direction\" [attr.aria-hidden]=\"true\"></span>\n  <span class=\"visually-hidden\">{{caption}}</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.CarouselState }]; }, propDecorators: { caption: [{
                type: Input
            }], direction: [{
                type: Input
            }], hostRole: [{
                type: HostBinding,
                args: ['attr.role']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], content: [{
                type: ViewChild,
                args: ['content']
            }], onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWNvbnRyb2wvY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWNvbnRyb2wvY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7OztBQVN2QixNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLFlBQ1UsY0FBaUMsRUFDakMsYUFBNEI7UUFENUIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBZXRDOzs7V0FHRztRQUNNLGNBQVMsR0FBb0IsTUFBTSxDQUFDO1FBa0I3QyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBcENmLENBQUM7SUFHSjs7O09BR0c7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMzRixDQUFDO0lBT0QsSUFDSSxRQUFRO1FBQ1YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU8sb0JBQW9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSSx3QkFBd0I7UUFDMUIsT0FBTyxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFPRCxPQUFPLENBQUMsTUFBcUI7UUFDM0IsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxZQUFZLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFHTSxPQUFPLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVPLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDNUQsQ0FBQzs7cUhBckVVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLGtYQ2xCckMsc1NBS0E7MkZEYWEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLG9CQUFvQjtvSUFpQjFCLE9BQU87c0JBRFYsS0FBSztnQkFXRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdGLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxXQUFXO2dCQU1wQixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFTRSxPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVM7Z0JBS3BCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBYzFCLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbFN0YXRlIH0gZnJvbSAnLi4vY2Fyb3VzZWwtc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWNhcm91c2VsLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFN0YXRlOiBDYXJvdXNlbFN0YXRlLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBfY2FwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIENhcm91c2VsIGNvbnRyb2wgY2FwdGlvbi4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNhcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9jYXB0aW9uID0gdmFsdWU7XG4gIH1cbiAgZ2V0IGNhcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gISF0aGlzLl9jYXB0aW9uID8gdGhpcy5fY2FwdGlvbiA6IHRoaXMuZGlyZWN0aW9uID09PSAncHJldicgPyAnUHJldmlvdXMnIDogJ05leHQnO1xuICB9XG4gIC8qKlxuICAgKiBDYXJvdXNlbCBjb250cm9sIGRpcmVjdGlvbi4gW2RvY3NdXG4gICAqIEB0eXBlIHsnbmV4dCcgfCAncHJldid9XG4gICAqL1xuICBASW5wdXQoKSBkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JyA9ICduZXh0JztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIGdldCBob3N0Um9sZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYnV0dG9uJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGNhcm91c2VsLWNvbnRyb2wtJHt0aGlzLmRpcmVjdGlvbn1gO1xuICB9XG5cbiAgZ2V0IGNhcm91c2VsQ29udHJvbEljb25DbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgY2Fyb3VzZWwtY29udHJvbC0ke3RoaXMuZGlyZWN0aW9ufS1pY29uYDtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50PzogRWxlbWVudFJlZjtcblxuICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIG9uS2V5VXAoJGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCRldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIHRoaXMucGxheSgncHJldicpO1xuICAgIH1cbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICB0aGlzLnBsYXkoJ25leHQnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMucGxheSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQgIHtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSB0aGlzLmNvbnRlbnQ/Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPz8gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHBsYXkoZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24pOiB2b2lkICB7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5jYXJvdXNlbFN0YXRlLmRpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZS5zdGF0ZSA9IHsgYWN0aXZlSXRlbUluZGV4OiBuZXh0SW5kZXggfTtcbiAgfVxufVxuIiwiPGRpdiAjY29udGVudCAqbmdJZiA9IFwiaGFzQ29udGVudDsgZWxzZSBkZWZhdWx0XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuPG5nLXRlbXBsYXRlICNkZWZhdWx0PlxuICA8c3BhbiBbY2xhc3NdPVwiY2Fyb3VzZWxDb250cm9sSWNvbkNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJkaXJlY3Rpb25cIiBbYXR0ci5hcmlhLWhpZGRlbl09XCJ0cnVlXCI+PC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPnt7Y2FwdGlvbn19PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==