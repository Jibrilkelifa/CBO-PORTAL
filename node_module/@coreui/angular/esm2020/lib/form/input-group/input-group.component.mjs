import { Component, HostBinding, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class InputGroupComponent {
    get hostClasses() {
        return {
            'input-group': true,
            [`input-group-${this.sizing}`]: !!this.sizing,
        };
    }
    constructor() {
        /**
         * Size the component small or large.
         */
        this.sizing = '';
    }
}
InputGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: InputGroupComponent, selector: "c-input-group", inputs: { sizing: "sizing" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: InputGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-input-group',
                    template: `<ng-content></ng-content>`,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { sizing: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL2lucHV0LWdyb3VwL2lucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7O0FBTXZCLE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJO1lBQ25CLENBQUMsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07U0FDOUMsQ0FBQztJQUNKLENBQUM7SUFFRDtRQWJBOztXQUVHO1FBQ00sV0FBTSxHQUE4QixFQUFFLENBQUM7SUFVakMsQ0FBQzs7Z0hBZEwsbUJBQW1CO29HQUFuQixtQkFBbUIsMElBRnBCLDJCQUEyQjsyRkFFMUIsbUJBQW1CO2tCQUovQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0QzswRUFLVSxNQUFNO3NCQUFkLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtaW5wdXQtZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbCBvciBsYXJnZS5cbiAgICovXG4gIEBJbnB1dCgpIHNpemluZzogc3RyaW5nIHwgJ3NtJyB8ICdsZycgfCAnJyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2lucHV0LWdyb3VwJzogdHJ1ZSxcbiAgICAgIFtgaW5wdXQtZ3JvdXAtJHt0aGlzLnNpemluZ31gXTogISF0aGlzLnNpemluZyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG59XG4iXX0=