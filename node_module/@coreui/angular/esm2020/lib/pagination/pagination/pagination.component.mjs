import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PaginationComponent {
    constructor() {
        /**
         * Set the alignment of pagination components.
         * @values 'start', 'center', 'end'
         */
        this.align = '';
        /**
         * Default role for pagination. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
    }
    get paginationClass() {
        return {
            pagination: true,
            [`pagination-${this.size}`]: !!this.size,
            [`justify-content-${this.align}`]: !!this.align
        };
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: PaginationComponent, selector: "c-pagination", inputs: { align: "align", size: "size", role: "role" }, host: { properties: { "attr.role": "this.role" } }, ngImport: i0, template: "<ul [ngClass]=\"paginationClass\">\n  <ng-content></ng-content>\n</ul>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-pagination', template: "<ul [ngClass]=\"paginationClass\">\n  <ng-content></ng-content>\n</ul>\n" }]
        }], propDecorators: { align: [{
                type: Input
            }], size: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcGFnaW5hdGlvbi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPOUQsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9FOzs7V0FHRztRQUNNLFVBQUssR0FBb0MsRUFBRSxDQUFDO1FBTXJEOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsWUFBWSxDQUFDO0tBVTlCO0lBUkMsSUFBSSxlQUFlO1FBQ2pCLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSTtZQUNoQixDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3hDLENBQUMsbUJBQW1CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztTQUNoRCxDQUFDO0lBQ0osQ0FBQzs7Z0hBMUJVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLGdLQ1BoQywwRUFHQTsyRkRJYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsY0FBYzs4QkFVZixLQUFLO3NCQUFiLEtBQUs7Z0JBS0csSUFBSTtzQkFBWixLQUFLO2dCQU9HLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGFsaWdubWVudCBvZiBwYWdpbmF0aW9uIGNvbXBvbmVudHMuXG4gICAqIEB2YWx1ZXMgJ3N0YXJ0JywgJ2NlbnRlcicsICdlbmQnXG4gICAqL1xuICBASW5wdXQoKSBhbGlnbjogJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnJyA9ICcnO1xuICAvKipcbiAgICogU2l6ZSB0aGUgY29tcG9uZW50IHNtYWxsIG9yIGxhcmdlLlxuICAgKiBAdmFsdWVzICdzbScsICdsZydcbiAgICovXG4gIEBJbnB1dCgpIHNpemU/OiAnc20nIHwgJ2xnJztcbiAgLyoqXG4gICAqIERlZmF1bHQgcm9sZSBmb3IgcGFnaW5hdGlvbi4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnbmF2aWdhdGlvbidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgQElucHV0KCkgcm9sZSA9ICduYXZpZ2F0aW9uJztcblxuICBnZXQgcGFnaW5hdGlvbkNsYXNzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICBbYHBhZ2luYXRpb24tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgW2BqdXN0aWZ5LWNvbnRlbnQtJHt0aGlzLmFsaWdufWBdOiAhIXRoaXMuYWxpZ25cbiAgICB9O1xuICB9XG5cbn1cbiIsIjx1bCBbbmdDbGFzc109XCJwYWdpbmF0aW9uQ2xhc3NcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC91bD5cbiJdfQ==