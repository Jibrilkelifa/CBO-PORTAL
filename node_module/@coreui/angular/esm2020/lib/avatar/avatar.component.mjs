import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AvatarComponent {
    constructor() {
        /**
         * Size the component small, large, or extra large.
         * @default 'md'
         */
        this.size = 'md';
    }
    get statusClass() {
        return {
            'avatar-status': true,
            [`bg-${this.status}`]: !!this.status
        };
    }
    get hostClasses() {
        return {
            avatar: true,
            [`avatar-${this.size}`]: !!this.size,
            [`bg-${this.color}`]: !!this.color,
            [`${this.shape}`]: !!this.shape,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
}
AvatarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AvatarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: AvatarComponent, selector: "c-avatar", inputs: { color: "color", shape: "shape", size: "size", src: "src", status: "status", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-container>\n  <ng-container *ngTemplateOutlet=\"defaultImageTemplate\"></ng-container>\n  <span *ngIf=\"!!status\" [ngClass]=\"statusClass\"></span>\n</ng-container>\n\n<ng-template #defaultImageTemplate>\n  <img *ngIf=\"!!src; else imageContent\" [src]=\"src\" class=\"avatar-img\" />\n  <ng-template #imageContent>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-avatar', template: "<ng-container>\n  <ng-container *ngTemplateOutlet=\"defaultImageTemplate\"></ng-container>\n  <span *ngIf=\"!!status\" [ngClass]=\"statusClass\"></span>\n</ng-container>\n\n<ng-template #defaultImageTemplate>\n  <img *ngIf=\"!!src; else imageContent\" [src]=\"src\" class=\"avatar-img\" />\n  <ng-template #imageContent>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], src: [{
                type: Input
            }], status: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFROUQsTUFBTSxPQUFPLGVBQWU7SUFpQzFCO1FBdEJBOzs7V0FHRztRQUNNLFNBQUksR0FBd0IsSUFBSSxDQUFDO0lBa0IxQixDQUFDO0lBRWpCLElBQUksV0FBVztRQUNiLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSTtZQUNyQixDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1NBQ3JDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJO1lBQ1osQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNwQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2xDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDL0IsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM3QyxDQUFDO0lBQ0osQ0FBQzs7NEdBbkRVLGVBQWU7Z0dBQWYsZUFBZSx1TkNSNUIscVlBV0E7MkZESGEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxVQUFVOzBFQVNYLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csSUFBSTtzQkFBWixLQUFLO2dCQUtHLEdBQUc7c0JBQVgsS0FBSztnQkFLRyxNQUFNO3NCQUFkLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSztnQkFZRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvcnMsIFNoYXBlcywgU2l6ZXMsIFRleHRDb2xvcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWF2YXRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdmF0YXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJDb21wb25lbnQge1xuICAvKipcbiAgICogU2V0cyB0aGUgYmFja2dyb3VuZCBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcj86IENvbG9ycztcbiAgLyoqXG4gICAqIFNlbGVjdCB0aGUgc2hhcGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUgU2hhcGVzXG4gICAqL1xuICBASW5wdXQoKSBzaGFwZT86IFNoYXBlcztcbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbCwgbGFyZ2UsIG9yIGV4dHJhIGxhcmdlLlxuICAgKiBAZGVmYXVsdCAnbWQnXG4gICAqL1xuICBASW5wdXQoKSBzaXplPzogT21pdDxTaXplcywgJ3h4bCc+ID0gJ21kJztcbiAgLyoqXG4gICAqIFRoZSBzcmMgYXR0cmlidXRlIGZvciB0aGUgaW1nIGVsZW1lbnQuXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgc3JjPzogc3RyaW5nO1xuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgc3RhdHVzIGluZGljYXRvciB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIHN0YXR1cz86IENvbG9ycztcbiAgLyoqXG4gICAqIFNldHMgdGhlIHRleHQgY29sb3Igb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKlxuICAgKiBAdmFsdWVzICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnZGFyaycgfCAnbGlnaHQnIHwgJ3doaXRlJyB8ICdtdXRlZCcgfCBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHRleHRDb2xvcj86IFRleHRDb2xvcnM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXQgc3RhdHVzQ2xhc3MoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2F2YXRhci1zdGF0dXMnOiB0cnVlLFxuICAgICAgW2BiZy0ke3RoaXMuc3RhdHVzfWBdOiAhIXRoaXMuc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhdGFyOiB0cnVlLFxuICAgICAgW2BhdmF0YXItJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgW2BiZy0ke3RoaXMuY29sb3J9YF06ICEhdGhpcy5jb2xvcixcbiAgICAgIFtgJHt0aGlzLnNoYXBlfWBdOiAhIXRoaXMuc2hhcGUsXG4gICAgICBbYHRleHQtJHt0aGlzLnRleHRDb2xvcn1gXTogISF0aGlzLnRleHRDb2xvclxuICAgIH07XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkZWZhdWx0SW1hZ2VUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICA8c3BhbiAqbmdJZj1cIiEhc3RhdHVzXCIgW25nQ2xhc3NdPVwic3RhdHVzQ2xhc3NcIj48L3NwYW4+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0SW1hZ2VUZW1wbGF0ZT5cbiAgPGltZyAqbmdJZj1cIiEhc3JjOyBlbHNlIGltYWdlQ29udGVudFwiIFtzcmNdPVwic3JjXCIgY2xhc3M9XCJhdmF0YXItaW1nXCIgLz5cbiAgPG5nLXRlbXBsYXRlICNpbWFnZUNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L25nLXRlbXBsYXRlPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==