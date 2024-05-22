import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BadgeComponent {
    constructor() { }
    get hostClasses() {
        const positionClasses = {
            'position-absolute': !!this.position,
            'translate-middle': !!this.position,
            'top-0': this.position?.includes('top'),
            'top-100': this.position?.includes('bottom'),
            'start-100': this.position?.includes('end'),
            'start-0': this.position?.includes('start'),
        };
        return Object.assign({
            badge: true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
            [`badge-${this.size}`]: !!this.size,
            [`${this.shape}`]: !!this.shape,
        }, !!this.position ? positionClasses : {});
    }
}
BadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: BadgeComponent, selector: "c-badge", inputs: { color: "color", position: "position", shape: "shape", size: "size", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-badge', template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], position: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFROUQsTUFBTSxPQUFPLGNBQWM7SUEwQnpCLGdCQUFlLENBQUM7SUFFaEIsSUFDSSxXQUFXO1FBQ2IsTUFBTSxlQUFlLEdBQUc7WUFDdEIsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3BDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDNUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQzVDLENBQUM7UUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakIsS0FBSyxFQUFFLElBQUk7WUFDWCxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2xDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDNUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUMxQyxDQUFDO0lBQ0osQ0FBQzs7MkdBL0NVLGNBQWM7K0ZBQWQsY0FBYyw4TUNSM0IsNkJBQ0E7MkZET2EsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxTQUFTOzBFQVNWLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxRQUFRO3NCQUFoQixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFJRyxJQUFJO3NCQUFaLEtBQUs7Z0JBS0csU0FBUztzQkFBakIsS0FBSztnQkFLRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWRnZVBvc2l0aW9ucywgQ29sb3JzLCBTaGFwZXMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFkZ2UuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VDb21wb25lbnQge1xuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnM7XG4gIC8qKlxuICAgKiBQb3NpdGlvbiBiYWRnZSBpbiBvbmUgb2YgdGhlIGNvcm5lcnMgb2YgYSBsaW5rIG9yIGJ1dHRvbi5cbiAgICogQHR5cGUgQmFkZ2VQb3NpdGlvbnNcbiAgICovXG4gIEBJbnB1dCgpIHBvc2l0aW9uPzogQmFkZ2VQb3NpdGlvbnM7XG4gIC8qKlxuICAgKiBTZWxlY3QgdGhlIHNoYXBlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIFNoYXBlc1xuICAgKi9cbiAgQElucHV0KCkgc2hhcGU/OiBTaGFwZXM7XG4gIC8qKlxuICAgKiBTaXplIHRoZSBjb21wb25lbnQgc21hbGwuXG4gICAqL1xuICBASW5wdXQoKSBzaXplPzogJ3NtJztcbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29sb3Igb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBUZXh0Q29sb3JzXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Q29sb3I/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICBjb25zdCBwb3NpdGlvbkNsYXNzZXMgPSB7XG4gICAgICAncG9zaXRpb24tYWJzb2x1dGUnOiAhIXRoaXMucG9zaXRpb24sXG4gICAgICAndHJhbnNsYXRlLW1pZGRsZSc6ICEhdGhpcy5wb3NpdGlvbixcbiAgICAgICd0b3AtMCc6IHRoaXMucG9zaXRpb24/LmluY2x1ZGVzKCd0b3AnKSxcbiAgICAgICd0b3AtMTAwJzogdGhpcy5wb3NpdGlvbj8uaW5jbHVkZXMoJ2JvdHRvbScpLFxuICAgICAgJ3N0YXJ0LTEwMCc6IHRoaXMucG9zaXRpb24/LmluY2x1ZGVzKCdlbmQnKSxcbiAgICAgICdzdGFydC0wJzogdGhpcy5wb3NpdGlvbj8uaW5jbHVkZXMoJ3N0YXJ0JyksXG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYmFkZ2U6IHRydWUsXG4gICAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yLFxuICAgICAgICBbYGJhZGdlLSR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICAgICAgW2Ake3RoaXMuc2hhcGV9YF06ICEhdGhpcy5zaGFwZSxcbiAgICAgIH0sICEhdGhpcy5wb3NpdGlvbiA/IHBvc2l0aW9uQ2xhc3NlcyA6IHt9XG4gICAgKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19