import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class PageLinkDirective {
    get hostClasses() {
        return {
            'page-link': true,
        };
    }
}
PageLinkDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PageLinkDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PageLinkDirective, selector: "[cPageLink]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PageLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPageLink]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcGFnaW5hdGlvbi9wYWdlLWxpbmsvcGFnZS1saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLdkQsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztJQUNKLENBQUM7OzhHQVBVLGlCQUFpQjtrR0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBSDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzhCQUlLLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1BhZ2VMaW5rXSdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxpbmtEaXJlY3RpdmUge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3BhZ2UtbGluayc6IHRydWUsXG4gICAgfTtcbiAgfVxufVxuIl19