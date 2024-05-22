import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./toaster/toaster.service";
export class ToastCloseDirective {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.toasterService.setState({ show: false, toast: this.toast });
    }
}
ToastCloseDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastCloseDirective, deps: [{ token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Directive });
ToastCloseDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ToastCloseDirective, selector: "[cToastClose]", inputs: { toast: ["cToastClose", "toast"] }, host: { listeners: { "click": "toggleOpen($event)" } }, exportAs: ["cToastClose"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cToastClose]',
                    exportAs: 'cToastClose'
                }]
        }], ctorParameters: function () { return [{ type: i1.ToasterService }]; }, propDecorators: { toast: [{
                type: Input,
                args: ['cToastClose']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90b2FzdC90b2FzdC1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPL0QsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBR3ZELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dIQVZVLG1CQUFtQjtvR0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtxR0FHdUIsS0FBSztzQkFBMUIsS0FBSzt1QkFBQyxhQUFhO2dCQUtwQixVQUFVO3NCQURULFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJy4vdG9hc3Rlci90b2FzdGVyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1RvYXN0Q2xvc2VdJyxcbiAgZXhwb3J0QXM6ICdjVG9hc3RDbG9zZSdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDbG9zZURpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCdjVG9hc3RDbG9zZScpIHRvYXN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudG9hc3RlclNlcnZpY2Uuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSwgdG9hc3Q6IHRoaXMudG9hc3QgfSk7XG4gIH1cblxufVxuIl19