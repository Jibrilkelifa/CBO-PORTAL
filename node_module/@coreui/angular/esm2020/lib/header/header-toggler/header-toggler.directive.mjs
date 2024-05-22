import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderTogglerDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.headerToggler = true;
        /**
         * Default role for header-toggler. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
        /**
         * Default aria-label attr for header-toggler. [docs]
         * @type string
         * @default 'Toggle navigation'
         */
        this.ariaLabel = 'Toggle navigation';
    }
    addDefaultIcon() {
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'header-toggler-icon');
        this.renderer.appendChild(this.hostElement.nativeElement, span);
    }
    ngAfterContentInit() {
        this.hasContent = this.hostElement.nativeElement.childNodes.length > 0;
        if (!this.hasContent) {
            this.addDefaultIcon();
        }
    }
}
HeaderTogglerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTogglerDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
HeaderTogglerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: HeaderTogglerDirective, selector: "[cHeaderToggler]", inputs: { type: "type", ariaLabel: "ariaLabel" }, host: { properties: { "class.header-toggler": "this.headerToggler", "attr.type": "this.type", "attr.aria-label": "this.ariaLabel" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTogglerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cHeaderToggler]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { headerToggler: [{
                type: HostBinding,
                args: ['class.header-toggler']
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], ariaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }, {
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRvZ2dsZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvaGVhZGVyLXRvZ2dsZXIvaGVhZGVyLXRvZ2dsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBS3ZHLE1BQU0sT0FBTyxzQkFBc0I7SUFvQmpDLFlBQ1UsUUFBbUIsRUFDbkIsV0FBdUI7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXBCSSxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUMxRDs7OztXQUlHO1FBRU0sU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUN6Qjs7OztXQUlHO1FBRU0sY0FBUyxHQUFHLG1CQUFtQixDQUFDO0lBT3JDLENBQUM7SUFFTCxjQUFjO1FBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7O21IQXBDVSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCO3lIQUdzQyxhQUFhO3NCQUFqRCxXQUFXO3VCQUFDLHNCQUFzQjtnQkFPMUIsSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQU9HLFNBQVM7c0JBRGpCLFdBQVc7dUJBQUMsaUJBQWlCOztzQkFDN0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NIZWFkZXJUb2dnbGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyVG9nZ2xlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGVhZGVyLXRvZ2dsZXInKSBoZWFkZXJUb2dnbGVyID0gdHJ1ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgcm9sZSBmb3IgaGVhZGVyLXRvZ2dsZXIuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2J1dHRvbidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci50eXBlJylcbiAgQElucHV0KCkgdHlwZSA9ICdidXR0b24nO1xuICAvKipcbiAgICogRGVmYXVsdCBhcmlhLWxhYmVsIGF0dHIgZm9yIGhlYWRlci10b2dnbGVyLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdUb2dnbGUgbmF2aWdhdGlvbidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgQElucHV0KCkgYXJpYUxhYmVsID0gJ1RvZ2dsZSBuYXZpZ2F0aW9uJztcblxuICBwcml2YXRlIGhhc0NvbnRlbnQhOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgYWRkRGVmYXVsdEljb24oKTogdm9pZCB7XG4gICAgY29uc3Qgc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3BhbiwgJ2hlYWRlci10b2dnbGVyLWljb24nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgc3Bhbik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNDb250ZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMDtcbiAgICBpZiAoIXRoaXMuaGFzQ29udGVudCkge1xuICAgICAgdGhpcy5hZGREZWZhdWx0SWNvbigpO1xuICAgIH1cbiAgfVxufVxuIl19