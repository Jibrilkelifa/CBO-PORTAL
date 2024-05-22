import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BgColorDirective {
    get hostClasses() {
        return {
            [`bg-${this.color}`]: !!this.color,
            'bg-gradient': this.gradient,
        };
    }
    constructor() {
        /**
         * Set the background of an element to any contextual class
         */
        this.color = '';
    }
}
BgColorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BgColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BgColorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: BgColorDirective, selector: "[cBgColor]", inputs: { color: ["cBgColor", "color"], gradient: "gradient" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BgColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cBgColor]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input,
                args: ['cBgColor']
            }], gradient: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmctY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi91dGlsaXRpZXMvYmctY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNOUQsTUFBTSxPQUFPLGdCQUFnQjtJQVkzQixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNsQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRDtRQWxCQTs7V0FFRztRQUNnQixVQUFLLEdBQXFCLEVBQUUsQ0FBQztJQWVoQyxDQUFDOzs2R0FwQk4sZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7MEVBTW9CLEtBQUs7c0JBQXZCLEtBQUs7dUJBQUMsVUFBVTtnQkFLUixRQUFRO3NCQUFoQixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhY2tncm91bmRDb2xvcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0JnQ29sb3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBCZ0NvbG9yRGlyZWN0aXZlIHtcblxuICAvKipcbiAgICogU2V0IHRoZSBiYWNrZ3JvdW5kIG9mIGFuIGVsZW1lbnQgdG8gYW55IGNvbnRleHR1YWwgY2xhc3NcbiAgICovXG4gIEBJbnB1dCgnY0JnQ29sb3InKSBjb2xvcjogQmFja2dyb3VuZENvbG9ycyA9ICcnO1xuICAvKipcbiAgICogQWRkIGxpbmVhciBncmFkaWVudCBhcyBiYWNrZ3JvdW5kIGltYWdlIHRvIHRoZSBiYWNrZ3JvdW5kcy5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgZ3JhZGllbnQ/OiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BiZy0ke3RoaXMuY29sb3J9YF06ICEhdGhpcy5jb2xvcixcbiAgICAgICdiZy1ncmFkaWVudCc6IHRoaXMuZ3JhZGllbnQsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=