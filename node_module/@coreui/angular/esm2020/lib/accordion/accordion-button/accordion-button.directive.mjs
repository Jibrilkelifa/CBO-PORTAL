import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AccordionButtonDirective {
    constructor() {
        /**
        * Default type for cAccordionButton. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
    }
    get hostClasses() {
        return {
            'accordion-button': true,
            collapsed: this.collapsed
        };
    }
    get ariaExpanded() {
        return !this.collapsed;
    }
}
AccordionButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AccordionButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: AccordionButtonDirective, selector: "[cAccordionButton]", inputs: { collapsed: "collapsed", type: "type" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses", "attr.aria-expanded": "this.ariaExpanded" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAccordionButton]'
                }]
        }], propDecorators: { collapsed: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaExpanded: [{
                type: HostBinding,
                args: ['attr.aria-expanded']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24tYnV0dG9uL2FjY29yZGlvbi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLOUQsTUFBTSxPQUFPLHdCQUF3QjtJQUhyQztRQVdFOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsUUFBUSxDQUFDO0tBYTFCO0lBWEMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUMsWUFBWTtRQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QixDQUFDOztxSEExQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs4QkFPVSxTQUFTO3NCQUFqQixLQUFLO2dCQVFHLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFRbUIsWUFBWTtzQkFBbEQsV0FBVzt1QkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0FjY29yZGlvbkJ1dHRvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkJ1dHRvbkRpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gYWNjb3JkaW9uIGJ1dHRvbiBjb2xsYXBzZWQgc3RhdGUuIFVzZSBpbiBhY2NvcmRpb25IZWFkZXJUZW1wbGF0ZS4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGNvbGxhcHNlZCE6IGJvb2xlYW47XG5cbiAgLyoqXG4gICogRGVmYXVsdCB0eXBlIGZvciBjQWNjb3JkaW9uQnV0dG9uLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdidXR0b24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudHlwZScpXG4gIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdhY2NvcmRpb24tYnV0dG9uJzogdHJ1ZSxcbiAgICAgIGNvbGxhcHNlZDogdGhpcy5jb2xsYXBzZWRcbiAgICB9O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKSBnZXQgYXJpYUV4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5jb2xsYXBzZWQ7XG4gIH1cbn1cbiJdfQ==