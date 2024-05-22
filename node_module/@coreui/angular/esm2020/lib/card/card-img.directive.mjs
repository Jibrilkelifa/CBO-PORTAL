import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CardImgDirective {
    get hostClasses() {
        const suffix = !!this.orientation ? `-${this.orientation}` : '';
        return {
            [`card-img${suffix}`]: true
        };
    }
}
CardImgDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardImgDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CardImgDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CardImgDirective, selector: "[cCardImg]", inputs: { orientation: ["cCardImg", "orientation"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardImgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardImg]'
                }]
        }], propDecorators: { orientation: [{
                type: Input,
                args: ['cCardImg']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1pbWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJkL2NhcmQtaW1nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlELE1BQU0sT0FBTyxnQkFBZ0I7SUFPM0IsSUFDSSxXQUFXO1FBQ2IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEUsT0FBTztZQUNMLENBQUMsV0FBVyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDNUIsQ0FBQztJQUNKLENBQUM7OzZHQWJVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBSDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzhCQU1vQixXQUFXO3NCQUE3QixLQUFLO3VCQUFDLFVBQVU7Z0JBR2IsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0NhcmRJbWddJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkSW1nRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIE9wdGlvbmFsbHkgb3JpZW50YXRlIHRoZSBpbWFnZSB0byB0aGUgdG9wLCBib3R0b20sIG9yIG1ha2UgaXQgb3ZlcmxhaWQgYWNyb3NzIHRoZSBjYXJkLlxuICAgKiBAdHlwZSB7J3RvcCB8ICdib3R0b20nfVxuICAgKi9cbiAgQElucHV0KCdjQ2FyZEltZycpIG9yaWVudGF0aW9uPzogJ3RvcCcgfCAnYm90dG9tJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgY29uc3Qgc3VmZml4ID0gISF0aGlzLm9yaWVudGF0aW9uID8gYC0ke3RoaXMub3JpZW50YXRpb259YCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBbYGNhcmQtaW1nJHtzdWZmaXh9YF06IHRydWVcbiAgICB9O1xuICB9XG59XG4iXX0=