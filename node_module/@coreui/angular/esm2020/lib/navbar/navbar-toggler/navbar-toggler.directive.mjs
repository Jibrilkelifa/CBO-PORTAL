import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NavbarTogglerDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navbarToggler = true;
        /**
         * Default type for navbar-toggler. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
        /**
         * Default aria-label attr for navbar-toggler. [docs]
         * @type string
         * @default 'Toggle navigation'
         */
        this.ariaLabel = 'Toggle navigation';
    }
    handleClick() {
        this.collapseRef?.toggle(!this.collapseRef?.visible);
    }
    addDefaultIcon() {
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'navbar-toggler-icon');
        this.renderer.appendChild(this.hostElement.nativeElement, span);
    }
    ngAfterContentInit() {
        this.hasContent = this.hostElement.nativeElement.childNodes.length;
        if (!this.hasContent) {
            this.addDefaultIcon();
        }
    }
}
NavbarTogglerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarTogglerDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NavbarTogglerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: NavbarTogglerDirective, selector: "[cNavbarToggler]", inputs: { collapseRef: ["cNavbarToggler", "collapseRef"], type: "type", ariaLabel: "ariaLabel" }, host: { listeners: { "click": "handleClick($event)" }, properties: { "class.navbar-toggler": "this.navbarToggler", "attr.type": "this.type", "attr.aria-label": "this.ariaLabel" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarTogglerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavbarToggler]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { collapseRef: [{
                type: Input,
                args: ['cNavbarToggler']
            }], navbarToggler: [{
                type: HostBinding,
                args: ['class.navbar-toggler']
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
            }], handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLXRvZ2dsZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9uYXZiYXIvbmF2YmFyLXRvZ2dsZXIvbmF2YmFyLXRvZ2dsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQU1ySCxNQUFNLE9BQU8sc0JBQXNCO0lBeUJqQyxZQUNVLFFBQW1CLEVBQ25CLFdBQXVCO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFwQkksa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUQ7Ozs7V0FJRztRQUVNLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDekI7Ozs7V0FJRztRQUVNLGNBQVMsR0FBRyxtQkFBbUIsQ0FBQztJQU9yQyxDQUFDO0lBR0wsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBaUIsQ0FBQztRQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzttSEE5Q1Usc0JBQXNCO3VHQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjt5SEFPMEIsV0FBVztzQkFBbkMsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBQ2MsYUFBYTtzQkFBakQsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTzFCLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFPRyxTQUFTO3NCQURqQixXQUFXO3VCQUFDLGlCQUFpQjs7c0JBQzdCLEtBQUs7Z0JBVU4sV0FBVztzQkFEVixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb2xsYXBzZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjTmF2YmFyVG9nZ2xlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhclRvZ2dsZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byBuYXZiYXIgY29sbGFwc2UgZWxlbWVudCAodmlhICMgdGVtcGxhdGUgdmFyaWFibGUpIC4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnYnV0dG9uJ1xuICAgKi9cbiAgQElucHV0KCdjTmF2YmFyVG9nZ2xlcicpIGNvbGxhcHNlUmVmPzogQ29sbGFwc2VEaXJlY3RpdmU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubmF2YmFyLXRvZ2dsZXInKSBuYXZiYXJUb2dnbGVyID0gdHJ1ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgdHlwZSBmb3IgbmF2YmFyLXRvZ2dsZXIuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2J1dHRvbidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci50eXBlJylcbiAgQElucHV0KCkgdHlwZSA9ICdidXR0b24nO1xuICAvKipcbiAgICogRGVmYXVsdCBhcmlhLWxhYmVsIGF0dHIgZm9yIG5hdmJhci10b2dnbGVyLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdUb2dnbGUgbmF2aWdhdGlvbidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsJylcbiAgQElucHV0KCkgYXJpYUxhYmVsID0gJ1RvZ2dsZSBuYXZpZ2F0aW9uJztcblxuICBwcml2YXRlIGhhc0NvbnRlbnQhOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmNvbGxhcHNlUmVmPy50b2dnbGUoIXRoaXMuY29sbGFwc2VSZWY/LnZpc2libGUpO1xuICB9XG5cbiAgYWRkRGVmYXVsdEljb24oKTogdm9pZCB7XG4gICAgY29uc3Qgc3BhbiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3BhbiwgJ25hdmJhci10b2dnbGVyLWljb24nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgc3Bhbik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNDb250ZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoIGFzIGJvb2xlYW47XG4gICAgaWYgKCF0aGlzLmhhc0NvbnRlbnQpIHtcbiAgICAgIHRoaXMuYWRkRGVmYXVsdEljb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==