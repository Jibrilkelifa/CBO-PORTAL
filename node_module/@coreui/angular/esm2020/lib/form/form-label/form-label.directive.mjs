import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FormLabelDirective {
    get hostClasses() {
        return {
            'form-label': true,
            'col-form-label': this.col === 'col',
            [`col-form-label-${this.sizing}`]: !!this.sizing && this.col === 'col',
        };
    }
    constructor() {
        /**
         * For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls.
         * @type 'col'
         */
        this.col = '';
        /**
         * Size the label small or large.
         */
        this.sizing = '';
    }
}
FormLabelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormLabelDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
FormLabelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: FormLabelDirective, selector: "[cLabel]", inputs: { col: ["cLabel", "col"], sizing: "sizing" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cLabel]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { col: [{
                type: Input,
                args: ['cLabel']
            }], sizing: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1sYWJlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1sYWJlbC9mb3JtLWxhYmVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlELE1BQU0sT0FBTyxrQkFBa0I7SUFZN0IsSUFDSSxXQUFXO1FBRWIsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSztZQUNwQyxDQUFDLGtCQUFrQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUs7U0FDdkUsQ0FBQztJQUNKLENBQUM7SUFFRDtRQXBCQTs7O1dBR0c7UUFDYyxRQUFHLEdBQWUsRUFBRSxDQUFDO1FBQ3RDOztXQUVHO1FBQ00sV0FBTSxHQUE4QixFQUFFLENBQUM7SUFZakMsQ0FBQzs7K0dBdEJMLGtCQUFrQjttR0FBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzBFQU9rQixHQUFHO3NCQUFuQixLQUFLO3VCQUFDLFFBQVE7Z0JBSU4sTUFBTTtzQkFBZCxLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NMYWJlbF0nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1MYWJlbERpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIEZvciBob3Jpem9udGFsIGZvcm1zIHNldCBsYWJlbHMgdG8gJ2NvbCcgYW5kIG1ha2UgdGhlbSB2ZXJ0aWNhbGx5IGNlbnRlcmVkIHdpdGggdGhlaXIgYXNzb2NpYXRlZCBmb3JtIGNvbnRyb2xzLlxuICAgKiBAdHlwZSAnY29sJ1xuICAgKi9cbiAgQElucHV0KCdjTGFiZWwnKSBjb2w6ICdjb2wnIHwgJycgPSAnJztcbiAgLyoqXG4gICAqIFNpemUgdGhlIGxhYmVsIHNtYWxsIG9yIGxhcmdlLlxuICAgKi9cbiAgQElucHV0KCkgc2l6aW5nOiAnJyB8ICdzbScgfCAnbGcnIHwgc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLWxhYmVsJzogdHJ1ZSxcbiAgICAgICdjb2wtZm9ybS1sYWJlbCc6IHRoaXMuY29sID09PSAnY29sJyxcbiAgICAgIFtgY29sLWZvcm0tbGFiZWwtJHt0aGlzLnNpemluZ31gXTogISF0aGlzLnNpemluZyAmJiB0aGlzLmNvbCA9PT0gJ2NvbCcsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxufVxuIl19