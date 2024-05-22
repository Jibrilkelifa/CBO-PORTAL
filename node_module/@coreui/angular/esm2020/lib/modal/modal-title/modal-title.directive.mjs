import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalTitleDirective {
    get hostClasses() {
        return {
            'modal-title': true,
        };
    }
}
ModalTitleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalTitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ModalTitleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ModalTitleDirective, selector: "[cModalTitle]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalTitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cModalTitle]'
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdGl0bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9tb2RhbC9tb2RhbC10aXRsZS9tb2RhbC10aXRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7SUFDSixDQUFDOztnSEFQVSxtQkFBbUI7b0dBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs4QkFJSyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NNb2RhbFRpdGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxUaXRsZURpcmVjdGl2ZSB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnbW9kYWwtdGl0bGUnOiB0cnVlLFxuICAgIH07XG4gIH1cblxufVxuIl19