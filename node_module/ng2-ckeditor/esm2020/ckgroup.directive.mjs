import { Directive, Input, ContentChildren } from '@angular/core';
import { CKButtonDirective } from './ckbutton.directive';
import * as i0 from "@angular/core";
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
export class CKGroupDirective {
    ngAfterContentInit() {
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach((button) => (button.toolbar = this.name));
    }
    initialize(editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach((button) => {
            button.initialize(editor);
        });
    }
}
CKGroupDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: CKGroupDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CKGroupDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.1.2", type: CKGroupDirective, selector: "ckgroup", inputs: { name: "name", previous: "previous", subgroupOf: "subgroupOf" }, queries: [{ propertyName: "toolbarButtons", predicate: CKButtonDirective }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: CKGroupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ckgroup',
                }]
        }], propDecorators: { name: [{
                type: Input
            }], previous: [{
                type: Input
            }], subgroupOf: [{
                type: Input
            }], toolbarButtons: [{
                type: ContentChildren,
                args: [CKButtonDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tncm91cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2tncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9CLGVBQWUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFekQ7Ozs7Ozs7OztHQVNHO0FBSUgsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixrQkFBa0I7UUFDaEIsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLFVBQVUsQ0FBQyxNQUF5QjtRQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5RSx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NkdBakJVLGdCQUFnQjtpR0FBaEIsZ0JBQWdCLHdKQUlWLGlCQUFpQjsyRkFKdkIsZ0JBQWdCO2tCQUg1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUM4QixjQUFjO3NCQUFqRCxlQUFlO3VCQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDS0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2tlZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IENLQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ja2J1dHRvbi5kaXJlY3RpdmUnO1xuXG4vKipcbiAqIENLR3JvdXAgY29tcG9uZW50XG4gKiBVc2FnZSA6XG4gKiAgPGNrZWRpdG9yIFsobmdNb2RlbCldPVwiZGF0YVwiIFtjb25maWddPVwiey4uLn1cIiBkZWJvdW5jZT1cIjUwMFwiPlxuICogICAgICA8Y2tncm91cCBbbmFtZV09XCInZXhhbXBsZUdyb3VwMidcIiBbcHJldmlvdXNdPVwiJzEnXCIgW3N1Ymdyb3VwT2ZdPVwiJ2V4YW1wbGVHcm91cDEnXCI+XG4gKiAgICAgICAgICAuXG4gKiAgICAgICAgICAuXG4gKiAgICAgIDwvY2tncm91cD5cbiAqICAgPC9ja2VkaXRvcj5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2tncm91cCcsXG59KVxuZXhwb3J0IGNsYXNzIENLR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcmV2aW91czogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzdWJncm91cE9mOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGRyZW4oQ0tCdXR0b25EaXJlY3RpdmUpIHRvb2xiYXJCdXR0b25zOiBRdWVyeUxpc3Q8Q0tCdXR0b25EaXJlY3RpdmU+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBSZWNvbmZpZ3VyZSBlYWNoIGJ1dHRvbidzIHRvb2xiYXIgcHJvcGVydHkgd2l0aGluIGNrZ3JvdXAgdG8gaG9sZCBpdHMgcGFyZW50J3MgbmFtZVxuICAgIHRoaXMudG9vbGJhckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiAoYnV0dG9uLnRvb2xiYXIgPSB0aGlzLm5hbWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplKGVkaXRvcjogQ0tFZGl0b3JDb21wb25lbnQpOiB2b2lkIHtcbiAgICBlZGl0b3IuaW5zdGFuY2UudWkuYWRkVG9vbGJhckdyb3VwKHRoaXMubmFtZSwgdGhpcy5wcmV2aW91cywgdGhpcy5zdWJncm91cE9mKTtcbiAgICAvLyBJbml0aWFsaXplIGVhY2ggYnV0dG9uIHdpdGhpbiBja2dyb3VwXG4gICAgdGhpcy50b29sYmFyQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5pbml0aWFsaXplKGVkaXRvcik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==