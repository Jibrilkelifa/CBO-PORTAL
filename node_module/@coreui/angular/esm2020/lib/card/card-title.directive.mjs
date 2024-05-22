import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class CardTitleDirective {
    get hostClasses() {
        return {
            'card-title': true
        };
    }
}
CardTitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CardTitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: CardTitleDirective, selector: "[cCardTitle]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CardTitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardTitle]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10aXRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2NhcmQvY2FyZC10aXRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFDSixDQUFDOzsrR0FQVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs4QkFJSyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NDYXJkVGl0bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkVGl0bGVEaXJlY3RpdmUge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NhcmQtdGl0bGUnOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19