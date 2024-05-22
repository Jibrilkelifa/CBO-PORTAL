import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AlignDirective {
    get hostClasses() {
        return {
            [`align-${this.align}`]: !!this.align,
        };
    }
}
AlignDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlignDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AlignDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: AlignDirective, selector: "[cAlign]", inputs: { align: ["cAlign", "align"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlignDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAlign]'
                }]
        }], propDecorators: { align: [{
                type: Input,
                args: ['cAlign']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi91dGlsaXRpZXMvYWxpZ24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNOUQsTUFBTSxPQUFPLGNBQWM7SUFPekIsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDdEMsQ0FBQztJQUNKLENBQUM7OzJHQVpVLGNBQWM7K0ZBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs4QkFNa0IsS0FBSztzQkFBckIsS0FBSzt1QkFBQyxRQUFRO2dCQUdYLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsaWdubWVudCB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjQWxpZ25dJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGlnbkRpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBTZXQgdmVydGljYWwgYWxpZ25tZW50IG9mIGlubGluZSwgaW5saW5lLWJsb2NrLCBpbmxpbmUtdGFibGUsIGFuZCB0YWJsZSBjZWxsIGVsZW1lbnRzXG4gICAqIEB0eXBlIEFsaWdubWVudFxuICAgKi9cbiAgQElucHV0KCdjQWxpZ24nKSBhbGlnbj86IEFsaWdubWVudDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgYWxpZ24tJHt0aGlzLmFsaWdufWBdOiAhIXRoaXMuYWxpZ24sXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=