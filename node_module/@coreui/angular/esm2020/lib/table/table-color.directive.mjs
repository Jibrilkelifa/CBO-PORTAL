import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TableColorDirective {
    get hostClasses() {
        return {
            [`table-${this.color}`]: !!this.color,
        };
    }
}
TableColorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TableColorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TableColorDirective, selector: "[cTableColor]", inputs: { color: ["cTableColor", "color"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTableColor]'
                }]
        }], propDecorators: { color: [{
                type: Input,
                args: ['cTableColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90YWJsZS90YWJsZS1jb2xvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU05RCxNQUFNLE9BQU8sbUJBQW1CO0lBUTlCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ3RDLENBQUM7SUFDSixDQUFDOztnSEFiVSxtQkFBbUI7b0dBQW5CLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs4QkFPdUIsS0FBSztzQkFBMUIsS0FBSzt1QkFBQyxhQUFhO2dCQUdoQixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1RhYmxlQ29sb3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbG9yRGlyZWN0aXZlIHtcblxuICAvKipcbiAgICogVXNlIGNvbnRleHR1YWwgY29sb3IgZm9yIHRhYmxlcywgdGFibGUgcm93cyBvciBpbmRpdmlkdWFsIGNlbGxzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgnY1RhYmxlQ29sb3InKSBjb2xvcj86IENvbG9ycztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgdGFibGUtJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgfTtcbiAgfVxufVxuIl19