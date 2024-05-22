import { ContentChild, Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { PageLinkDirective } from '../page-link/page-link.directive';
import * as i0 from "@angular/core";
export class PageItemDirective {
    get ariaCurrent() {
        return this.active ? 'page' : null;
    }
    get hostClasses() {
        return {
            'page-item': true,
            disabled: this.disabled,
            active: this.active,
        };
    }
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterContentInit() {
        this.setAttributes();
    }
    ngOnChanges(changes) {
        if (changes['disabled']) {
            this.setAttributes();
        }
    }
    setAttributes() {
        if (!this.pageLinkElementRef) {
            return;
        }
        const pageLinkElement = this.pageLinkElementRef.nativeElement;
        if (this.disabled) {
            this.renderer.setAttribute(pageLinkElement, 'aria-disabled', 'true');
            this.renderer.setAttribute(pageLinkElement, 'tabindex', '-1');
        }
        else {
            this.renderer.removeAttribute(pageLinkElement, 'aria-disabled');
            this.renderer.removeAttribute(pageLinkElement, 'tabindex');
        }
    }
}
PageItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageItemDirective, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
PageItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PageItemDirective, selector: "[cPageItem]", inputs: { active: "active", disabled: "disabled" }, host: { properties: { "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses" } }, queries: [{ propertyName: "pageLinkElementRef", first: true, predicate: PageLinkDirective, descendants: true, read: ElementRef }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPageItem]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], pageLinkElementRef: [{
                type: ContentChild,
                args: [PageLinkDirective, { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcGFnaW5hdGlvbi9wYWdlLWl0ZW0vcGFnZS1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFLckUsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QixJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsV0FBVyxFQUFFLElBQUk7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUlELFlBQ1UsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUN6QixDQUFDO0lBRUwsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFNO1NBQ1A7UUFDRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBRTlELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs4R0F4RFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsdVBBMkJkLGlCQUFpQiwyQkFBVSxVQUFVOzJGQTNCeEMsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtnR0FPVSxNQUFNO3NCQUFkLEtBQUs7Z0JBS0csUUFBUTtzQkFBaEIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsbUJBQW1CO2dCQU01QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFTbUMsa0JBQWtCO3NCQUF4RSxZQUFZO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdlTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4uL3BhZ2UtbGluay9wYWdlLWxpbmsuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NQYWdlSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBhY3RpdmUgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGRpc2FibGVkIHN0YXRlIGZvciB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtY3VycmVudCcpXG4gIGdldCBhcmlhQ3VycmVudCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgPyAncGFnZScgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAncGFnZS1pdGVtJzogdHJ1ZSxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICB9O1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChQYWdlTGlua0RpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pIHBhZ2VMaW5rRWxlbWVudFJlZiE6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydkaXNhYmxlZCddKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wYWdlTGlua0VsZW1lbnRSZWYpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBwYWdlTGlua0VsZW1lbnQgPSB0aGlzLnBhZ2VMaW5rRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHBhZ2VMaW5rRWxlbWVudCwgJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUocGFnZUxpbmtFbGVtZW50LCAndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUocGFnZUxpbmtFbGVtZW50LCAnYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUocGFnZUxpbmtFbGVtZW50LCAndGFiaW5kZXgnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==