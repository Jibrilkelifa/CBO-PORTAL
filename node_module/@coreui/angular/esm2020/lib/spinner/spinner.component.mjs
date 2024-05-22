import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class SpinnerComponent {
    constructor() {
        /**
         * Label for accessibility.
         * @type string
         * @default 'Loading...'
         */
        this.label = "Loading...";
        /**
         * Set the button variant to an outlined button or a ghost button.
         * @values 'border' | 'grow'
         * @default 'border'
         */
        this.variant = 'border';
        this.role = 'status';
    }
    get hostClasses() {
        return {
            [`spinner-${this.variant}`]: true,
            [`text-${this.color}`]: !!this.color,
            [`spinner-${this.variant}-${this.size}`]: !!this.size
        };
    }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SpinnerComponent, selector: "c-spinner", inputs: { color: "color", label: "label", size: "size", variant: "variant", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: "<span class=\"visually-hidden\">{{label}}</span>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-spinner', template: "<span class=\"visually-hidden\">{{label}}</span>\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], label: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTlELE1BQU0sT0FBTyxnQkFBZ0I7SUFKN0I7UUFXRTs7OztXQUlHO1FBQ00sVUFBSyxHQUFXLFlBQVksQ0FBQztRQVN0Qzs7OztXQUlHO1FBQ00sWUFBTyxHQUF1QixRQUFRLENBQUM7UUFHdEIsU0FBSSxHQUFHLFFBQVEsQ0FBQztLQVUzQztJQVJDLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSTtZQUNqQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3BDLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtTQUN0RCxDQUFDO0lBQ0osQ0FBQzs7NkdBdENVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLDhOQ1I3QixvREFDQTsyRkRPYSxnQkFBZ0I7a0JBSjVCLFNBQVM7K0JBQ0UsV0FBVzs4QkFRWixLQUFLO3NCQUFiLEtBQUs7Z0JBT0csS0FBSztzQkFBYixLQUFLO2dCQU9HLElBQUk7c0JBQVosS0FBSztnQkFPRyxPQUFPO3NCQUFmLEtBQUs7Z0JBR29CLElBQUk7c0JBRDdCLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsV0FBVztnQkFHcEIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQge1xuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnM7XG5cbiAgLyoqXG4gICAqIExhYmVsIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ0xvYWRpbmcuLi4nXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gXCJMb2FkaW5nLi4uXCI7XG5cbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbC5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEB2YWx1ZXMgJ3NtJ1xuICAgKi9cbiAgQElucHV0KCkgc2l6ZT86ICdzbSc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYnV0dG9uIHZhcmlhbnQgdG8gYW4gb3V0bGluZWQgYnV0dG9uIG9yIGEgZ2hvc3QgYnV0dG9uLlxuICAgKiBAdmFsdWVzICdib3JkZXInIHwgJ2dyb3cnXG4gICAqIEBkZWZhdWx0ICdib3JkZXInXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50PzogJ2JvcmRlcicgfCAnZ3JvdycgPSAnYm9yZGVyJztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnc3RhdHVzJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgc3Bpbm5lci0ke3RoaXMudmFyaWFudH1gXTogdHJ1ZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMuY29sb3J9YF06ICEhdGhpcy5jb2xvcixcbiAgICAgIFtgc3Bpbm5lci0ke3RoaXMudmFyaWFudH0tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplXG4gICAgfTtcbiAgfVxufVxuIiwiPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57e2xhYmVsfX08L3NwYW4+XG4iXX0=