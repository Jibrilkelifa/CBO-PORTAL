import { ContentChild, Directive, HostBinding, Input } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';
import * as i0 from "@angular/core";
export class PlaceholderAnimationDirective {
    constructor() {
        this.animate = false;
    }
    get hostClasses() {
        return {
            [`placeholder-${this.animation}`]: this.animate && !!this.animation
        };
    }
    ngAfterContentInit() {
        this.animate = this.placeholder?.visible;
    }
}
PlaceholderAnimationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderAnimationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PlaceholderAnimationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PlaceholderAnimationDirective, selector: "[cPlaceholderAnimation]", inputs: { animation: ["cPlaceholderAnimation", "animation"] }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "placeholder", first: true, predicate: PlaceholderDirective, descendants: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PlaceholderAnimationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPlaceholderAnimation]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { animation: [{
                type: Input,
                args: ['cPlaceholderAnimation']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], placeholder: [{
                type: ContentChild,
                args: [PlaceholderDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXItYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXItYW5pbWF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFLL0QsTUFBTSxPQUFPLDZCQUE2QjtJQUV4QztRQWlCUSxZQUFPLEdBQVksS0FBSyxDQUFDO0lBakJqQixDQUFDO0lBU2pCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxDQUFDLGVBQWUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDcEUsQ0FBQztJQUNKLENBQUM7SUFLRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQztJQUMzQyxDQUFDOzswSEF2QlUsNkJBQTZCOzhHQUE3Qiw2QkFBNkIsOE5Ba0IxQixvQkFBb0I7MkZBbEJ2Qiw2QkFBNkI7a0JBSHpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7MEVBVWlDLFNBQVM7c0JBQXhDLEtBQUs7dUJBQUMsdUJBQXVCO2dCQUcxQixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFPZ0IsV0FBVztzQkFBOUMsWUFBWTt1QkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckRpcmVjdGl2ZSB9IGZyb20gJy4vcGxhY2Vob2xkZXIuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NQbGFjZWhvbGRlckFuaW1hdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlaG9sZGVyQW5pbWF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogQW5pbWF0aW9uIHR5cGUgZm9yIHBsYWNlaG9sZGVyXG4gICAqIEB0eXBlICdnbG93JyB8ICd3YXZlJ1xuICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICovXG4gIEBJbnB1dCgnY1BsYWNlaG9sZGVyQW5pbWF0aW9uJykgYW5pbWF0aW9uPzogJ2dsb3cnIHwgJ3dhdmUnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BwbGFjZWhvbGRlci0ke3RoaXMuYW5pbWF0aW9ufWBdOiB0aGlzLmFuaW1hdGUgJiYgISF0aGlzLmFuaW1hdGlvblxuICAgIH07XG4gIH1cblxuICBAQ29udGVudENoaWxkKFBsYWNlaG9sZGVyRGlyZWN0aXZlKSBwbGFjZWhvbGRlciE6IFBsYWNlaG9sZGVyRGlyZWN0aXZlO1xuICBwcml2YXRlIGFuaW1hdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5wbGFjZWhvbGRlcj8udmlzaWJsZTtcbiAgfVxufVxuIl19