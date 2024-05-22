import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { useAnimation } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { collapseAnimation, collapseHorizontalAnimation, expandAnimation, expandHorizontalAnimation } from './collapse.animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
// todo
// tslint:disable-next-line:no-conflicting-lifecycle
export class CollapseDirective {
    /**
     * @ignore
     */
    set animate(value) {
        this._animate = value;
    }
    get animate() {
        return this._animate;
    }
    /**
     * Set horizontal collapsing to transition the width instead of height.
     */
    set horizontal(value) {
        this._horizontal = coerceBooleanProperty(value);
    }
    get horizontal() {
        return this._horizontal;
    }
    /**
     * Toggle the visibility of collapsible element.
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    /**
     * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
     */
    set navbar(value) {
        this._navbar = coerceBooleanProperty(value);
    }
    ;
    get navbar() {
        return this._navbar;
    }
    constructor(hostElement, renderer, animationBuilder) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.animationBuilder = animationBuilder;
        this._animate = true;
        this._horizontal = false;
        this._visible = false;
        this._navbar = false;
        /**
         * @ignore
         */
        this.duration = '350ms';
        /**
         * @ignore
         */
        this.transition = 'ease';
        /**
         * Event emitted on visibility change. [docs]
         * @type string
         */
        this.collapseChange = new EventEmitter();
        this.collapsing = false;
        this.host = this.hostElement.nativeElement;
        this.renderer.setStyle(this.host, 'display', 'none');
    }
    get hostClasses() {
        return {
            'navbar-collapse': this.navbar,
            'collapse-horizontal': this.horizontal
        };
    }
    ngAfterViewInit() {
        if (this.visible) {
            this.toggle();
        }
    }
    ngOnDestroy() {
        this.destroyPlayer();
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            if (!changes['visible'].firstChange || !changes['visible'].currentValue) {
                this.toggle(changes['visible'].currentValue);
            }
        }
    }
    ngDoCheck() {
        if (this._visible !== this.visible) {
            this.toggle();
        }
    }
    toggle(visible = this.visible) {
        this.createPlayer(visible);
        this.player?.play();
    }
    destroyPlayer() {
        this.player?.destroy();
    }
    createPlayer(visible = this.visible) {
        if (this.player?.hasStarted()) {
            this.destroyPlayer();
        }
        if (visible) {
            this.renderer.removeStyle(this.host, 'display');
        }
        const duration = this.animate ? this.duration : '0ms';
        const expand = this.horizontal ? expandHorizontalAnimation : expandAnimation;
        const collapse = this.horizontal ? collapseHorizontalAnimation : collapseAnimation;
        const dimension = this.horizontal ? 'width' : 'height';
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        const animationFactory = this.animationBuilder.build(useAnimation(visible ? expand : collapse, { params: { time: duration, easing: this.transition } }));
        this.player = animationFactory.create(this.host);
        this.renderer.setStyle(this.host, dimension, visible ? 0 : `${this.host.getBoundingClientRect()[dimension]}px`);
        !visible && this.host.offsetHeight;
        this.player.onStart(() => {
            this.setMaxSize();
            this.renderer.removeClass(this.host, 'collapse');
            this.renderer.addClass(this.host, 'collapsing');
            this.renderer.removeClass(this.host, 'show');
            this.collapsing = true;
            if (visible) {
                // @ts-ignore
                this.renderer.setStyle(this.host, dimension, `${this.host[scrollSize]}px`);
            }
            else {
                this.renderer.setStyle(this.host, dimension, '');
            }
            this.collapseChange.emit(visible ? 'opening' : 'collapsing');
        });
        this.player.onDone(() => {
            this.visible = visible;
            this.collapsing = false;
            this.renderer.removeClass(this.host, 'collapsing');
            this.renderer.addClass(this.host, 'collapse');
            if (visible) {
                this.renderer.addClass(this.host, 'show');
                this.renderer.setStyle(this.host, dimension, '');
            }
            else {
                this.renderer.removeClass(this.host, 'show');
            }
            this.collapseChange.emit(visible ? 'open' : 'collapsed');
        });
    }
    setMaxSize() {
        // setTimeout(() => {
        if (this.horizontal) {
            this.scrollWidth = this.host.scrollWidth;
            this.scrollWidth > 0 && this.renderer.setStyle(this.host, 'maxWidth', `${this.scrollWidth}px`);
            // } else {
            // this.scrollHeight = this.host.scrollHeight;
            // this.scrollHeight > 0 && this.renderer.setStyle(this.host, 'maxHeight', `${this.scrollHeight}px`);
        }
        // });
    }
}
CollapseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CollapseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.AnimationBuilder }], target: i0.ɵɵFactoryTarget.Directive });
CollapseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CollapseDirective, selector: "[cCollapse]", inputs: { animate: "animate", horizontal: "horizontal", visible: "visible", navbar: "navbar", duration: "duration", transition: "transition" }, outputs: { collapseChange: "collapseChange" }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cCollapse"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CollapseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCollapse]',
                    exportAs: 'cCollapse'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.AnimationBuilder }]; }, propDecorators: { animate: [{
                type: Input
            }], horizontal: [{
                type: Input
            }], visible: [{
                type: Input
            }], navbar: [{
                type: Input
            }], duration: [{
                type: Input
            }], transition: [{
                type: Input
            }], collapseChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jb2xsYXBzZS9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFHVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFxQyxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RixPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQiwyQkFBMkIsRUFDM0IsZUFBZSxFQUNmLHlCQUF5QixFQUMxQixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0IsT0FBTztBQUNQLG9EQUFvRDtBQUtwRCxNQUFNLE9BQU8saUJBQWlCO0lBTTVCOztPQUVHO0lBQ0gsSUFDSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFJRDs7T0FFRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFJRDs7T0FFRztJQUNILElBQ0ksT0FBTyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUks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QkFEVixLQUFLO2dCQWVGLE1BQU07c0JBRFQsS0FBSztnQkFjRyxRQUFRO3NCQUFoQixLQUFLO2dCQUlHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBS0ksY0FBYztzQkFBdkIsTUFBTTtnQkFrQkgsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBBbmltYXRpb25QbGF5ZXIsIHVzZUFuaW1hdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7XG4gIGNvbGxhcHNlQW5pbWF0aW9uLFxuICBjb2xsYXBzZUhvcml6b250YWxBbmltYXRpb24sXG4gIGV4cGFuZEFuaW1hdGlvbixcbiAgZXhwYW5kSG9yaXpvbnRhbEFuaW1hdGlvblxufSBmcm9tICcuL2NvbGxhcHNlLmFuaW1hdGlvbnMnO1xuXG4vLyB0b2RvXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uZmxpY3RpbmctbGlmZWN5Y2xlXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0NvbGxhcHNlXScsXG4gIGV4cG9ydEFzOiAnY0NvbGxhcHNlJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0IHtcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaG9yaXpvbnRhbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbmF2YmFyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXNpYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhbmltYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGU7XG4gIH1cblxuICBwcml2YXRlIF9hbmltYXRlID0gdHJ1ZTtcblxuICAvKipcbiAgICogU2V0IGhvcml6b250YWwgY29sbGFwc2luZyB0byB0cmFuc2l0aW9uIHRoZSB3aWR0aCBpbnN0ZWFkIG9mIGhlaWdodC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBob3Jpem9udGFsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faG9yaXpvbnRhbCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgaG9yaXpvbnRhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faG9yaXpvbnRhbDtcbiAgfVxuXG4gIHByaXZhdGUgX2hvcml6b250YWw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIGNvbGxhcHNpYmxlIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdmlzaWJsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3Zpc2libGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwcml2YXRlIF92aXNpYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFkZCBgbmF2YmFyYCBwcm9wIGZvciBncm91cGluZyBhbmQgaGlkaW5nIG5hdmJhciBjb250ZW50cyBieSBhIHBhcmVudCBicmVha3BvaW50LlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG5hdmJhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX25hdmJhciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG5cbiAgZ2V0IG5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2YmFyO1xuICB9XG5cbiAgcHJpdmF0ZSBfbmF2YmFyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBJbnB1dCgpIGR1cmF0aW9uID0gJzM1MG1zJztcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBJbnB1dCgpIHRyYW5zaXRpb24gPSAnZWFzZSc7XG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIG9uIHZpc2liaWxpdHkgY2hhbmdlLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBAT3V0cHV0KCkgY29sbGFwc2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwcml2YXRlIHBsYXllciE6IEFuaW1hdGlvblBsYXllcjtcbiAgcHJpdmF0ZSByZWFkb25seSBob3N0OiBIVE1MRWxlbWVudDtcbiAgLy8gcHJpdmF0ZSBzY3JvbGxIZWlnaHQhOiBudW1iZXI7XG4gIHByaXZhdGUgc2Nyb2xsV2lkdGghOiBudW1iZXI7XG4gIHByaXZhdGUgY29sbGFwc2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgYW5pbWF0aW9uQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlclxuICApIHtcbiAgICB0aGlzLmhvc3QgPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3QsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25hdmJhci1jb2xsYXBzZSc6IHRoaXMubmF2YmFyLFxuICAgICAgJ2NvbGxhcHNlLWhvcml6b250YWwnOiB0aGlzLmhvcml6b250YWxcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ3Zpc2libGUnXSkge1xuICAgICAgaWYgKCFjaGFuZ2VzWyd2aXNpYmxlJ10uZmlyc3RDaGFuZ2UgfHwgIWNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoY2hhbmdlc1sndmlzaWJsZSddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl92aXNpYmxlICE9PSB0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKHZpc2libGUgPSB0aGlzLnZpc2libGUpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVBsYXllcih2aXNpYmxlKTtcbiAgICB0aGlzLnBsYXllcj8ucGxheSgpO1xuICB9XG5cbiAgZGVzdHJveVBsYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcj8uZGVzdHJveSgpO1xuICB9XG5cbiAgY3JlYXRlUGxheWVyKHZpc2libGU6IGJvb2xlYW4gPSB0aGlzLnZpc2libGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGF5ZXI/Lmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5ob3N0LCAnZGlzcGxheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5hbmltYXRlID8gdGhpcy5kdXJhdGlvbiA6ICcwbXMnO1xuXG4gICAgY29uc3QgZXhwYW5kID0gdGhpcy5ob3Jpem9udGFsID8gZXhwYW5kSG9yaXpvbnRhbEFuaW1hdGlvbiA6IGV4cGFuZEFuaW1hdGlvbjtcbiAgICBjb25zdCBjb2xsYXBzZSA9IHRoaXMuaG9yaXpvbnRhbCA/IGNvbGxhcHNlSG9yaXpvbnRhbEFuaW1hdGlvbiA6IGNvbGxhcHNlQW5pbWF0aW9uO1xuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5ob3Jpem9udGFsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSk7XG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWA7XG5cbiAgICBjb25zdCBhbmltYXRpb25GYWN0b3J5ID0gdGhpcy5hbmltYXRpb25CdWlsZGVyLmJ1aWxkKFxuICAgICAgdXNlQW5pbWF0aW9uKHZpc2libGUgPyBleHBhbmQgOiBjb2xsYXBzZSwgeyBwYXJhbXM6IHsgdGltZTogZHVyYXRpb24sIGVhc2luZzogdGhpcy50cmFuc2l0aW9uIH0gfSlcbiAgICApO1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBhbmltYXRpb25GYWN0b3J5LmNyZWF0ZSh0aGlzLmhvc3QpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3QsIGRpbWVuc2lvbiwgdmlzaWJsZSA/IDAgOiBgJHt0aGlzLmhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGApO1xuXG4gICAgIXZpc2libGUgJiYgdGhpcy5ob3N0Lm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMucGxheWVyLm9uU3RhcnQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRNYXhTaXplKCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdCwgJ2NvbGxhcHNlJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdCwgJ2NvbGxhcHNpbmcnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0LCAnc2hvdycpO1xuICAgICAgdGhpcy5jb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3QsIGRpbWVuc2lvbiwgYCR7dGhpcy5ob3N0W3Njcm9sbFNpemVdfXB4YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdCwgZGltZW5zaW9uLCAnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbGxhcHNlQ2hhbmdlLmVtaXQodmlzaWJsZSA/ICdvcGVuaW5nJyA6ICdjb2xsYXBzaW5nJyk7XG4gICAgfSk7XG4gICAgdGhpcy5wbGF5ZXIub25Eb25lKCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLmNvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0LCAnY29sbGFwc2luZycpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsICdjb2xsYXBzZScpO1xuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsICdzaG93Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0LCBkaW1lbnNpb24sICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0LCAnc2hvdycpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2xsYXBzZUNoYW5nZS5lbWl0KHZpc2libGUgPyAnb3BlbicgOiAnY29sbGFwc2VkJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXhTaXplKCkge1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICh0aGlzLmhvcml6b250YWwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsV2lkdGggPSB0aGlzLmhvc3Quc2Nyb2xsV2lkdGg7XG4gICAgICB0aGlzLnNjcm9sbFdpZHRoID4gMCAmJiB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdCwgJ21heFdpZHRoJywgYCR7dGhpcy5zY3JvbGxXaWR0aH1weGApO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gdGhpcy5ob3N0LnNjcm9sbEhlaWdodDtcbiAgICAgIC8vIHRoaXMuc2Nyb2xsSGVpZ2h0ID4gMCAmJiB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdCwgJ21heEhlaWdodCcsIGAke3RoaXMuc2Nyb2xsSGVpZ2h0fXB4YCk7XG4gICAgfVxuICAgIC8vIH0pO1xuICB9XG59XG4iXX0=