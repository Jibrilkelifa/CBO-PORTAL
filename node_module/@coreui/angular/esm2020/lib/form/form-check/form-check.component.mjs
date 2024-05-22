import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FormCheckLabelDirective } from './form-check-label.directive';
import * as i0 from "@angular/core";
export class FormCheckComponent {
    constructor() {
        this._inline = false;
        /**
         * Size the component large or extra large. Works only with `[switch]="true"` [docs]
         * @type {'lg' | 'xl' | ''}
         */
        this.sizing = '';
        this._switch = false;
        this._formCheckClass = true;
    }
    /**
     * Group checkboxes or radios on the same horizontal row.
     * @type boolean
     * @default false
     */
    set inline(value) {
        this._inline = coerceBooleanProperty(value);
    }
    get inline() {
        return this._inline;
    }
    /**
   * Render a toggle switch on for checkbox.
   * @type boolean
   * @default false
   */
    set switch(value) {
        this._switch = coerceBooleanProperty(value);
    }
    get switch() {
        return this._switch;
    }
    get hostClasses() {
        return {
            'form-check': this.formCheckClass,
            'form-switch': this.switch,
            [`form-switch-${this.sizing}`]: this.switch && !!this.sizing,
            'form-check-inline': this.inline
        };
    }
    get formCheckClass() {
        return this._formCheckClass;
    }
    ngAfterContentInit() {
        this._formCheckClass = !!this.formCheckLabel;
    }
}
FormCheckComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormCheckComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: FormCheckComponent, selector: "c-form-check", inputs: { inline: "inline", sizing: "sizing", switch: "switch" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "formCheckLabel", first: true, predicate: FormCheckLabelDirective, descendants: true }], exportAs: ["cFormCheck"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FormCheckComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-form-check',
                    template: '<ng-content></ng-content>',
                    exportAs: 'cFormCheck'
                }]
        }], propDecorators: { inline: [{
                type: Input
            }], sizing: [{
                type: Input
            }], switch: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], formCheckLabel: [{
                type: ContentChild,
                args: [FormCheckLabelDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jaGVjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1jaGVjay9mb3JtLWNoZWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBT3ZFLE1BQU0sT0FBTyxrQkFBa0I7SUFML0I7UUFVVSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBY3hCOzs7V0FHRztRQUNNLFdBQU0sR0FBc0IsRUFBRSxDQUFDO1FBY2hDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFjaEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7S0FRaEM7SUFyREM7Ozs7T0FJRztJQUNILElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFRQzs7OztLQUlDO0lBQ0gsSUFDSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUdELElBQ0ksV0FBVztRQUViLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQzFCLENBQUMsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUM1RCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUlELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9DLENBQUM7OytHQTFEVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix5TkFrRGYsdUJBQXVCLDBFQXJEM0IsMkJBQTJCOzJGQUcxQixrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs4QkFhSyxNQUFNO3NCQURULEtBQUs7Z0JBWUcsTUFBTTtzQkFBZCxLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSztnQkFVRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFXbUIsY0FBYztzQkFBcEQsWUFBWTt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IEZvcm1DaGVja0xhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLWNoZWNrLWxhYmVsLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtZm9ybS1jaGVjaycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGV4cG9ydEFzOiAnY0Zvcm1DaGVjaydcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2lubGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3dpdGNoOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBfaW5saW5lID0gZmFsc2U7XG4gIC8qKlxuICAgKiBHcm91cCBjaGVja2JveGVzIG9yIHJhZGlvcyBvbiB0aGUgc2FtZSBob3Jpem9udGFsIHJvdy5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGlubGluZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lubGluZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGlubGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5saW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBsYXJnZSBvciBleHRyYSBsYXJnZS4gV29ya3Mgb25seSB3aXRoIGBbc3dpdGNoXT1cInRydWVcImAgW2RvY3NdXG4gICAqIEB0eXBlIHsnbGcnIHwgJ3hsJyB8ICcnfVxuICAgKi9cbiAgQElucHV0KCkgc2l6aW5nPzogJ2xnJyB8ICd4bCcgfCAnJyA9ICcnO1xuXG4gICAgLyoqXG4gICAqIFJlbmRlciBhIHRvZ2dsZSBzd2l0Y2ggb24gZm9yIGNoZWNrYm94LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc3dpdGNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3dpdGNoID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgc3dpdGNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zd2l0Y2g7XG4gIH1cbiAgcHJpdmF0ZSBfc3dpdGNoID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLWNoZWNrJzogdGhpcy5mb3JtQ2hlY2tDbGFzcyxcbiAgICAgICdmb3JtLXN3aXRjaCc6IHRoaXMuc3dpdGNoLFxuICAgICAgW2Bmb3JtLXN3aXRjaC0ke3RoaXMuc2l6aW5nfWBdOiB0aGlzLnN3aXRjaCAmJiAhIXRoaXMuc2l6aW5nLFxuICAgICAgJ2Zvcm0tY2hlY2staW5saW5lJzogdGhpcy5pbmxpbmVcbiAgICB9O1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtQ2hlY2tMYWJlbERpcmVjdGl2ZSkgZm9ybUNoZWNrTGFiZWwhOiBGb3JtQ2hlY2tMYWJlbERpcmVjdGl2ZTtcbiAgcHJpdmF0ZSBfZm9ybUNoZWNrQ2xhc3MgPSB0cnVlO1xuICBnZXQgZm9ybUNoZWNrQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1DaGVja0NsYXNzO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2Zvcm1DaGVja0NsYXNzID0gISF0aGlzLmZvcm1DaGVja0xhYmVsO1xuICB9XG59XG4iXX0=