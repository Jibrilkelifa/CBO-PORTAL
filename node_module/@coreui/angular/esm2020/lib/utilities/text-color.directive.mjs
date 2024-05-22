import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TextColorDirective {
    get hostClasses() {
        const color = this.color;
        return {
            [`text-${color}`]: !!color
        };
    }
    constructor() {
        /**
         * Set text-color of element
         * @type TextColors
         */
        this.color = '';
    }
}
TextColorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TextColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
TextColorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TextColorDirective, selector: "[cTextColor]", inputs: { color: ["cTextColor", "color"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TextColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTextColor]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input,
                args: ['cTextColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2xvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3V0aWxpdGllcy90ZXh0LWNvbG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTlELE1BQU0sT0FBTyxrQkFBa0I7SUFRN0IsSUFDSSxXQUFXO1FBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixPQUFPO1lBQ0wsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs7U0FDM0IsQ0FBQztJQUNKLENBQUM7SUFFRDtRQWRBOzs7V0FHRztRQUNrQixVQUFLLEdBQWUsRUFBRSxDQUFDO0lBVTdCLENBQUM7OytHQWhCTCxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6QjswRUFPc0IsS0FBSztzQkFBekIsS0FBSzt1QkFBQyxZQUFZO2dCQUdmLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHRDb2xvcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1RleHRDb2xvcl0nXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb2xvckRpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIFNldCB0ZXh0LWNvbG9yIG9mIGVsZW1lbnRcbiAgICogQHR5cGUgVGV4dENvbG9yc1xuICAgKi9cbiAgQElucHV0KCdjVGV4dENvbG9yJykgY29sb3I6IFRleHRDb2xvcnMgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIHJldHVybiB7XG4gICAgICBbYHRleHQtJHtjb2xvcn1gXTogISFjb2xvclxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=