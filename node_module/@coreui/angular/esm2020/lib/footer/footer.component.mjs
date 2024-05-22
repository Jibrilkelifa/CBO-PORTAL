import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FooterComponent {
    constructor() {
        /**
         * Default role for footer. [docs]
         * @type string
         * @default 'footer'
         */
        this.role = 'footer';
    }
    get getClasses() {
        return {
            footer: true,
            [`footer-${this.position}`]: !!this.position,
        };
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: FooterComponent, selector: "c-footer, [cFooter]", inputs: { position: "position", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.getClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-footer, [cFooter]',
                    template: `<ng-content></ng-content>`,
                }]
        }], propDecorators: { position: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE5RCxNQUFNLE9BQU8sZUFBZTtJQUo1QjtRQVVFOzs7O1dBSUc7UUFFdUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztLQVMzQztJQVBDLElBQ0ksVUFBVTtRQUNaLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSTtZQUNaLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDN0MsQ0FBQztJQUNKLENBQUM7OzRHQXBCVSxlQUFlO2dHQUFmLGVBQWUsMkxBRmhCLDJCQUEyQjsyRkFFMUIsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs4QkFNVSxRQUFRO3NCQUFoQixLQUFLO2dCQU9vQixJQUFJO3NCQUQ3QixLQUFLOztzQkFDTCxXQUFXO3VCQUFDLFdBQVc7Z0JBR3BCLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUG9zaXRpb25zIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1mb290ZXIsIFtjRm9vdGVyXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBQbGFjZSBmb290ZXIgaW4gbm9uLXN0YXRpYyBwb3NpdGlvbnMuIFtkb2NzXVxuICAgKiBAdHlwZSBQb3NpdGlvbnNcbiAgICovXG4gIEBJbnB1dCgpIHBvc2l0aW9uPzogUG9zaXRpb25zO1xuICAvKipcbiAgICogRGVmYXVsdCByb2xlIGZvciBmb290ZXIuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2Zvb3RlcidcbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdmb290ZXInO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgZ2V0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmb290ZXI6IHRydWUsXG4gICAgICBbYGZvb3Rlci0ke3RoaXMucG9zaXRpb259YF06ICEhdGhpcy5wb3NpdGlvbixcbiAgICB9O1xuICB9XG59XG4iXX0=