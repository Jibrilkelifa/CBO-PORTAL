import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class HeaderComponent {
    constructor() {
        /**
         * Default role for header. [docs]
         * @type string
         * @default 'header'
         */
        this.role = 'header';
    }
    get getClasses() {
        return !!this.container ? this.containerClasses : this.headerClasses;
    }
    get headerClasses() {
        return {
            header: true,
            [`header-${this.position}`]: !!this.position,
        };
    }
    get containerClasses() {
        return {
            container: this.container === true,
            [`container-${this.container}`]: typeof this.container === 'string'
        };
    }
}
HeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderComponent, selector: "c-header, [c-header]", inputs: { container: "container", position: "position", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.getClasses" } }, ngImport: i0, template: "<div [class]=\"headerClasses\" *ngIf=\"!!container; else elseBlock\">\n  <ng-content></ng-content>\n</div>\n<ng-template #elseBlock>\n  <ng-content></ng-content>\n</ng-template>\n\n\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-header, [c-header]', template: "<div [class]=\"headerClasses\" *ngIf=\"!!container; else elseBlock\">\n  <ng-content></ng-content>\n</div>\n<ng-template #elseBlock>\n  <ng-content></ng-content>\n</ng-template>\n\n\n" }]
        }], propDecorators: { container: [{
                type: Input
            }], position: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQVM1RCxNQUFNLE9BQU8sZUFBZTtJQUo1QjtRQWFFOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsUUFBUSxDQUFDO0tBb0IxQjtJQWxCQyxJQUNJLFVBQVU7UUFDWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDdkUsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSTtZQUNaLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDN0MsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSTtZQUNsQyxDQUFDLGFBQWEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVE7U0FDcEUsQ0FBQztJQUNKLENBQUM7OzRHQWxDVSxlQUFlO2dHQUFmLGVBQWUsb05DVDVCLHlMQVFBOzJGRENhLGVBQWU7a0JBSjNCLFNBQVM7K0JBQ0Usc0JBQXNCOzhCQU92QixTQUFTO3NCQUFqQixLQUFLO2dCQUlHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQUdGLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBvc2l0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmV1aS50eXBlcyc7XG50eXBlIENvbnRhaW5lciA9IGJvb2xlYW4gfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCcgfCAnZmx1aWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWhlYWRlciwgW2MtaGVhZGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZpbmVzIG9wdGlvbmFsIGNvbnRhaW5lciB3cmFwcGluZyBjaGlsZHJlbiBlbGVtZW50cy5cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lcj86IENvbnRhaW5lcjtcbiAgLyoqXG4gICAqIFBsYWNlIGhlYWRlciBpbiBub24tc3RhdGljIHBvc2l0aW9ucy5cbiAgICovXG4gIEBJbnB1dCgpIHBvc2l0aW9uPzogUG9zaXRpb25zO1xuICAvKipcbiAgICogRGVmYXVsdCByb2xlIGZvciBoZWFkZXIuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2hlYWRlcidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgQElucHV0KCkgcm9sZSA9ICdoZWFkZXInO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgZ2V0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiAhIXRoaXMuY29udGFpbmVyID8gdGhpcy5jb250YWluZXJDbGFzc2VzIDogdGhpcy5oZWFkZXJDbGFzc2VzO1xuICB9XG5cbiAgZ2V0IGhlYWRlckNsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgW2BoZWFkZXItJHt0aGlzLnBvc2l0aW9ufWBdOiAhIXRoaXMucG9zaXRpb24sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBjb250YWluZXJDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIgPT09IHRydWUsXG4gICAgICBbYGNvbnRhaW5lci0ke3RoaXMuY29udGFpbmVyfWBdOiB0eXBlb2YgdGhpcy5jb250YWluZXIgPT09ICdzdHJpbmcnXG4gICAgfTtcbiAgfVxufVxuIiwiPGRpdiBbY2xhc3NdPVwiaGVhZGVyQ2xhc3Nlc1wiICpuZ0lmPVwiISFjb250YWluZXI7IGVsc2UgZWxzZUJsb2NrXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG5cblxuIl19