import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalDialogComponent {
    get hostClasses() {
        return {
            'modal-dialog': true,
            'modal-dialog-centered': this.alignment === 'center',
            'modal-fullscreen': this.fullscreen === true,
            [`modal-fullscreen-${this.fullscreen}-down`]: this.fullscreen,
            'modal-dialog-scrollable': this.scrollable,
            [`modal-${this.size}`]: this.size
        };
    }
}
ModalDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ModalDialogComponent, selector: "c-modal-dialog", inputs: { alignment: "alignment", fullscreen: "fullscreen", scrollable: "scrollable", size: "size" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-modal-dialog', template: '<ng-content></ng-content>', styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"] }]
        }], propDecorators: { alignment: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], scrollable: [{
                type: Input
            }], size: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbW9kYWwvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU85RCxNQUFNLE9BQU8sb0JBQW9CO0lBcUIvQixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUk7WUFDcEIsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRO1lBQ3BELGtCQUFrQixFQUFFLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSTtZQUM1QyxDQUFDLG9CQUFvQixJQUFJLENBQUMsVUFBVSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUM3RCx5QkFBeUIsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMxQyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbEMsQ0FBQztJQUNKLENBQUM7O2lIQS9CVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixtTkFIckIsMkJBQTJCOzJGQUcxQixvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsZ0JBQWdCLFlBQ2hCLDJCQUEyQjs4QkFRNUIsU0FBUztzQkFBakIsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQUtHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBSUcsSUFBSTtzQkFBWixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1tb2RhbC1kaWFsb2cnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2dDb21wb25lbnQge1xuICAvKipcbiAgICogQWxpZ24gdGhlIG1vZGFsIGluIHRoZSBjZW50ZXIgb3IgdG9wIG9mIHRoZSBzY3JlZW4uXG4gICAqIEB0eXBlIHsndG9wJyB8ICdjZW50ZXInfVxuICAgKi9cbiAgQElucHV0KCkgYWxpZ25tZW50PzogJ3RvcCcgfCAnY2VudGVyJztcbiAgLyoqXG4gICAqIFNldCBtb2RhbCB0byBjb3ZlcnMgdGhlIGVudGlyZSB1c2VyIHZpZXdwb3J0LlxuICAgKiBAdHlwZSB7Ym9vbGVhbiB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ31cbiAgICovXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW4/OiBib29sZWFuIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuICAvKipcbiAgICogRG9lcyB0aGUgbW9kYWwgZGlhbG9nIGl0c2VsZiBzY3JvbGwsIG9yIGRvZXMgdGhlIHdob2xlIGRpYWxvZyBzY3JvbGwgd2l0aGluIHRoZSB3aW5kb3cuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIHNjcm9sbGFibGU/OiBib29sZWFuO1xuICAvKipcbiAgICogU2l6ZSB0aGUgY29tcG9uZW50IHNtYWxsLCBsYXJnZSwgb3IgZXh0cmEgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSBzaXplPzogJ3NtJyB8ICdsZycgfCAneGwnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ21vZGFsLWRpYWxvZyc6IHRydWUsXG4gICAgICAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJzogdGhpcy5hbGlnbm1lbnQgPT09ICdjZW50ZXInLFxuICAgICAgJ21vZGFsLWZ1bGxzY3JlZW4nOiB0aGlzLmZ1bGxzY3JlZW4gPT09IHRydWUsXG4gICAgICBbYG1vZGFsLWZ1bGxzY3JlZW4tJHt0aGlzLmZ1bGxzY3JlZW59LWRvd25gXTogdGhpcy5mdWxsc2NyZWVuLFxuICAgICAgJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJzogdGhpcy5zY3JvbGxhYmxlLFxuICAgICAgW2Btb2RhbC0ke3RoaXMuc2l6ZX1gXTogdGhpcy5zaXplXG4gICAgfTtcbiAgfVxufVxuIl19