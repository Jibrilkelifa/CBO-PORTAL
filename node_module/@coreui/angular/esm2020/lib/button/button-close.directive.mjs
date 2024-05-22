import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ButtonDirective } from './button.directive';
import * as i0 from "@angular/core";
export class ButtonCloseDirective extends ButtonDirective {
    constructor() {
        super(...arguments);
        this._white = false;
    }
    /**
     * Change the default color to white.
     * @type boolean
     */
    get white() {
        return this._white;
    }
    set white(value) {
        this._white = coerceBooleanProperty(value);
    }
    get hostClasses() {
        return {
            btn: true,
            'btn-close': true,
            'btn-close-white': this.white,
            [`btn-${this.size}`]: !!this.size,
            disabled: this.disabled,
            active: this.active,
        };
    }
}
ButtonCloseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonCloseDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
ButtonCloseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ButtonCloseDirective, selector: "[cButtonClose]", inputs: { white: "white" }, host: { properties: { "class": "this.hostClasses" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ButtonCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cButtonClose]'
                }]
        }], propDecorators: { white: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnV0dG9uL2J1dHRvbi1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBS3JELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxlQUFlO0lBSHpEOztRQU1VLFdBQU0sR0FBRyxLQUFLLENBQUM7S0F3QnhCO0lBdkJDOzs7T0FHRztJQUNILElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUNhLFdBQVc7UUFDdEIsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJO1lBQ1QsV0FBVyxFQUFFLElBQUk7WUFDakIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDN0IsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNqQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOztpSEExQlUsb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs4QkFVSyxLQUFLO3NCQURSLEtBQUs7Z0JBU08sV0FBVztzQkFEdkIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjQnV0dG9uQ2xvc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25DbG9zZURpcmVjdGl2ZSBleHRlbmRzIEJ1dHRvbkRpcmVjdGl2ZSB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3doaXRlOiBCb29sZWFuSW5wdXQ7XG4gIHByaXZhdGUgX3doaXRlID0gZmFsc2U7XG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIGRlZmF1bHQgY29sb3IgdG8gd2hpdGUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB3aGl0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fd2hpdGU7XG4gIH1cbiAgc2V0IHdoaXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd2hpdGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIG92ZXJyaWRlIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBidG46IHRydWUsXG4gICAgICAnYnRuLWNsb3NlJzogdHJ1ZSxcbiAgICAgICdidG4tY2xvc2Utd2hpdGUnOiB0aGlzLndoaXRlLFxuICAgICAgW2BidG4tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==