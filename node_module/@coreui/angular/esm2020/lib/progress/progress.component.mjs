import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class ProgressComponent {
    constructor() {
        this._height = 0;
        this._thin = false;
        this._white = false;
    }
    /**
     * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
     * @type number
     */
    set height(value) {
        this._height = coerceNumberProperty(value);
    }
    get height() {
        return this._height;
    }
    /**
     * Displays thin progress.
     * @type boolean
     */
    set thin(value) {
        this._thin = coerceBooleanProperty(value);
    }
    get thin() {
        return this._thin;
    }
    /**
     * Change the default color to white.
     * @type boolean
     */
    get white() {
        return this._white;
    }
    set white(value) {
        this._white = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            progress: true,
            'progress-thin': this.thin,
            'progress-white': this.white
        };
    }
    get hostStyle() {
        return !!this.height ? `${this.height}px` : '';
    }
}
ProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ProgressComponent, selector: "c-progress", inputs: { height: "height", thin: "thin", white: "white" }, host: { properties: { "class": "this.hostClasses", "style.height": "this.hostStyle" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-progress',
                    template: '<ng-content></ng-content>'
                }]
        }], propDecorators: { height: [{
                type: Input
            }], thin: [{
                type: Input
            }], white: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyle: [{
                type: HostBinding,
                args: ['style.height']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsb0JBQW9CLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNL0csTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQXFCVSxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBYXBCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFhZCxXQUFNLEdBQUcsS0FBSyxDQUFDO0tBZXhCO0lBcERDOzs7T0FHRztJQUNILElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFHRDs7O09BR0c7SUFDSCxJQUNJLElBQUksQ0FBQyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUMxQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakQsQ0FBQzs7OEdBekRVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHVNQUZsQiwyQkFBMkI7MkZBRTFCLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OEJBWUssTUFBTTtzQkFEVCxLQUFLO2dCQWNGLElBQUk7c0JBRFAsS0FBSztnQkFjRixLQUFLO3NCQURSLEtBQUs7Z0JBVUYsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBVWhCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VOdW1iZXJQcm9wZXJ0eSwgTnVtYmVySW5wdXQgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90aGluOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aGl0ZTogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbXBvbmVudC4gSWYgeW91IHNldCB0aGF0IHZhbHVlIHRoZSBpbm5lciBgPENQcm9ncmVzc0Jhcj5gIHdpbGwgYXV0b21hdGljYWxseSByZXNpemUgYWNjb3JkaW5nbHkuXG4gICAqIEB0eXBlIG51bWJlclxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoaW4gcHJvZ3Jlc3MuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB0aGluKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdGhpbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHRoaW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RoaW47XG4gIH1cbiAgcHJpdmF0ZSBfdGhpbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIGRlZmF1bHQgY29sb3IgdG8gd2hpdGUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB3aGl0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fd2hpdGU7XG4gIH1cbiAgc2V0IHdoaXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd2hpdGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3doaXRlID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICAgICdwcm9ncmVzcy10aGluJzogdGhpcy50aGluLFxuICAgICAgJ3Byb2dyZXNzLXdoaXRlJzogdGhpcy53aGl0ZVxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIGdldCBob3N0U3R5bGUoKTogYW55IHtcbiAgICByZXR1cm4gISF0aGlzLmhlaWdodCA/IGAke3RoaXMuaGVpZ2h0fXB4YCA6ICcnO1xuICB9XG59XG4iXX0=