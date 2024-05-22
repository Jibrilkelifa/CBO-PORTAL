import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../modal.service";
export class ModalToggleDirective {
    constructor(modalService) {
        this.modalService = modalService;
    }
    dismiss($event) {
        $event.preventDefault();
        this.modalService.toggle({ show: 'toggle', id: this.id });
    }
}
ModalToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalToggleDirective, deps: [{ token: i1.ModalService }], target: i0.ɵɵFactoryTarget.Directive });
ModalToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ModalToggleDirective, selector: "[cModalToggle]", inputs: { id: ["cModalToggle", "id"] }, host: { listeners: { "click": "dismiss($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cModalToggle]'
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cModalToggle']
            }], dismiss: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbW9kYWwvbW9kYWwtZGlzbWlzcy9tb2RhbC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTy9ELE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsWUFDVSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNoQyxDQUFDO0lBR0wsT0FBTyxDQUFDLE1BQVc7UUFDakIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7aUhBZFUsb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjttR0FLd0IsRUFBRTtzQkFBeEIsS0FBSzt1QkFBQyxjQUFjO2dCQU9yQixPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFsLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY01vZGFsVG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxUb2dnbGVEaXJlY3RpdmUge1xuICAvKipcbiAgICogSHRtbCBpZCBhdHRyIG9mIG1vZGFsIHRvIGRpc21pc3MuXG4gICAqL1xuICBASW5wdXQoJ2NNb2RhbFRvZ2dsZScpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZVxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgZGlzbWlzcygkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnRvZ2dsZSh7c2hvdzogJ3RvZ2dsZScsIGlkOiB0aGlzLmlkfSk7XG4gIH1cbn1cbiJdfQ==