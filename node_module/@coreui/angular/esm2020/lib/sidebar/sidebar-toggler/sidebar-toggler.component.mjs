import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarTogglerComponent {
    constructor() {
        this.role = 'button';
        this.sidebarTogglerClass = true;
    }
}
SidebarTogglerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarTogglerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidebarTogglerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: SidebarTogglerComponent, selector: "c-sidebar-toggler", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.sidebar-toggler": "this.sidebarTogglerClass" } }, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarTogglerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar-toggler',
                    template: ``,
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], sidebarTogglerClass: [{
                type: HostBinding,
                args: ['class.sidebar-toggler']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci10b2dnbGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLXRvZ2dsZXIvc2lkZWJhci10b2dnbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTlELE1BQU0sT0FBTyx1QkFBdUI7SUFKcEM7UUFPVyxTQUFJLEdBQUcsUUFBUSxDQUFDO1FBRWEsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO0tBQ2xFOztvSEFOWSx1QkFBdUI7d0dBQXZCLHVCQUF1Qiw0TEFGeEIsRUFBRTsyRkFFRCx1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OEJBSVUsSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQUVnQyxtQkFBbUI7c0JBQXhELFdBQVc7dUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1zaWRlYmFyLXRvZ2dsZXInLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJUb2dnbGVyQ29tcG9uZW50IHtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIEBJbnB1dCgpIHJvbGUgPSAnYnV0dG9uJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItdG9nZ2xlcicpIHNpZGViYXJUb2dnbGVyQ2xhc3MgPSB0cnVlO1xufVxuIl19