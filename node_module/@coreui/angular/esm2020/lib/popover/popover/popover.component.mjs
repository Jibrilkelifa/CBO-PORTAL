import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class PopoverComponent {
    constructor(renderer) {
        this.renderer = renderer;
        /**
         * Content of popover
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Toggle the visibility of popover component.
         * @type boolean
         */
        this.visible = false;
        this.role = 'tooltip';
    }
    get hostClasses() {
        return {
            popover: true,
            fade: true,
            show: this.visible,
            'bs-popover-auto': true
        };
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateView(this.content);
        });
    }
    ngOnChanges(changes) {
        if (changes['content']) {
            setTimeout(() => {
                this.updateView(this.content);
            });
        }
    }
    ngOnDestroy() {
        this.clear();
    }
    clear() {
        this.viewContainerRef?.clear();
        if (!!this.textNode) {
            this.renderer.removeChild(this.textNode.parentNode, this.textNode);
        }
    }
    updateView(content) {
        this.clear();
        if (!content) {
            return;
        }
        if (content instanceof TemplateRef) {
            this.viewContainerRef.createEmbeddedView(content);
        }
        else {
            this.textNode = this.renderer.createText(content);
            const popoverBody = this.renderer.createElement('div');
            this.renderer.addClass(popoverBody, 'popover-body');
            this.renderer.appendChild(popoverBody, this.textNode);
            const element = this.viewContainerRef.element.nativeElement;
            this.renderer.appendChild(element.parentNode, popoverBody);
        }
    }
}
PopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
PopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: PopoverComponent, selector: "c-popover", inputs: { content: "content", visible: "visible", id: "id", role: "role" }, host: { properties: { "attr.id": "this.id", "attr.role": "this.role", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "viewContainerRef", first: true, predicate: ["popoverTemplate"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: "<ng-container>\n  <div [ngClass]=\"{'popover-arrow': !!content}\" data-popper-arrow></div>\n  <ng-container #popoverTemplate></ng-container>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-popover', template: "<ng-container>\n  <div [ngClass]=\"{'popover-arrow': !!content}\" data-popper-arrow></div>\n  <ng-container #popoverTemplate></ng-container>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { content: [{
                type: Input
            }], visible: [{
                type: Input
            }], id: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.id']
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], viewContainerRef: [{
                type: ViewChild,
                args: ['popoverTemplate', { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDOzs7QUFNdkIsTUFBTSxPQUFPLGdCQUFnQjtJQWtCM0IsWUFDVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBakI3Qjs7O1dBR0c7UUFDTSxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUNqRDs7O1dBR0c7UUFDTSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRVUsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQU9oRCxDQUFDO0lBRUwsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLEtBQUs7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBRU8sVUFBVSxDQUFDLE9BQWtDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs2R0EzRVUsZ0JBQWdCO2lHQUFoQixnQkFBZ0Isb1VBZVcsZ0JBQWdCLGtEQ2pDeEQsaUtBSUE7MkZEY2EsZ0JBQWdCO2tCQUo1QixTQUFTOytCQUNFLFdBQVc7Z0dBU1osT0FBTztzQkFBZixLQUFLO2dCQUtHLE9BQU87c0JBQWYsS0FBSztnQkFDMkIsRUFBRTtzQkFBbEMsS0FBSzs7c0JBQUksV0FBVzt1QkFBQyxTQUFTO2dCQUNJLElBQUk7c0JBQXRDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsV0FBVztnQkFFeUIsZ0JBQWdCO3NCQUF6RSxTQUFTO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO2dCQVFwRCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXBvcG92ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIENvbnRlbnQgb2YgcG9wb3ZlclxuICAgKiBAdHlwZSB7c3RyaW5nIHwgVGVtcGxhdGVSZWZ9XG4gICAqL1xuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJyc7XG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgcG9wb3ZlciBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIHZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJykgaWQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICd0b29sdGlwJztcblxuICBAVmlld0NoaWxkKCdwb3BvdmVyVGVtcGxhdGUnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmlld0NvbnRhaW5lclJlZiE6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgdGV4dE5vZGUhOiBUZXh0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogeyBba2xhc3M6IHN0cmluZ106IGFueTsgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvcG92ZXI6IHRydWUsXG4gICAgICBmYWRlOiB0cnVlLFxuICAgICAgc2hvdzogdGhpcy52aXNpYmxlLFxuICAgICAgJ2JzLXBvcG92ZXItYXV0byc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuY29udGVudCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2NvbnRlbnQnXSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbnRlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWY/LmNsZWFyKCk7XG4gICAgaWYgKCEhdGhpcy50ZXh0Tm9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnRleHROb2RlLnBhcmVudE5vZGUsIHRoaXMudGV4dE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0Tm9kZSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChjb250ZW50KTtcbiAgICAgIGNvbnN0IHBvcG92ZXJCb2R5ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocG9wb3ZlckJvZHksICdwb3BvdmVyLWJvZHknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocG9wb3ZlckJvZHksIHRoaXMudGV4dE5vZGUpO1xuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5wYXJlbnROb2RlLCBwb3BvdmVyQm9keSk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGFpbmVyPlxuICA8ZGl2IFtuZ0NsYXNzXT1cInsncG9wb3Zlci1hcnJvdyc6ICEhY29udGVudH1cIiBkYXRhLXBvcHBlci1hcnJvdz48L2Rpdj5cbiAgPG5nLWNvbnRhaW5lciAjcG9wb3ZlclRlbXBsYXRlPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=