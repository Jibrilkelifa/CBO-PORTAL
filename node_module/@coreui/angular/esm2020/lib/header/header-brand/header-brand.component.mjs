import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderBrandComponent {
    constructor() {
        /**
         * Default role for header-brand. [docs]
         * @type string
         * @default 'button'
         */
        this.role = 'button';
        this.headerBrandClass = true;
    }
}
HeaderBrandComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderBrandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderBrandComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderBrandComponent, selector: "c-header-brand", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.header-brand": "this.headerBrandClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderBrandComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-header-brand',
                    template: `<ng-content></ng-content>`
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], headerBrandClass: [{
                type: HostBinding,
                args: ['class.header-brand']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJyYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvaGVhZGVyL2hlYWRlci1icmFuZC9oZWFkZXItYnJhbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNOUQsTUFBTSxPQUFPLG9CQUFvQjtJQUpqQztRQUtFOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsUUFBUSxDQUFDO1FBRVUscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0tBQzVEOztpSEFWWSxvQkFBb0I7cUdBQXBCLG9CQUFvQixtTEFGckIsMkJBQTJCOzJGQUUxQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OEJBUVUsSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQUU2QixnQkFBZ0I7c0JBQWxELFdBQVc7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1oZWFkZXItYnJhbmQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckJyYW5kQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgcm9sZSBmb3IgaGVhZGVyLWJyYW5kLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdidXR0b24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIEBJbnB1dCgpIHJvbGUgPSAnYnV0dG9uJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhlYWRlci1icmFuZCcpIGhlYWRlckJyYW5kQ2xhc3MgPSB0cnVlO1xufVxuIl19