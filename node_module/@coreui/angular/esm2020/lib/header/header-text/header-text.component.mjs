import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderTextComponent {
    constructor() {
        this.headerTextClass = true;
    }
}
HeaderTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderTextComponent, selector: "c-header-text, [cHeaderText]", host: { properties: { "class.header-text": "this.headerTextClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-header-text, [cHeaderText]',
                    template: `<ng-content></ng-content>`,
                }]
        }], propDecorators: { headerTextClass: [{
                type: HostBinding,
                args: ['class.header-text']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU12RCxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBS29DLG9CQUFlLEdBQUcsSUFBSSxDQUFDO0tBQzFEOztnSEFGWSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwySUFGcEIsMkJBQTJCOzJGQUUxQixtQkFBbUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7OEJBRW1DLGVBQWU7c0JBQWhELFdBQVc7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWhlYWRlci10ZXh0LCBbY0hlYWRlclRleHRdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyVGV4dENvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGVhZGVyLXRleHQnKSBoZWFkZXJUZXh0Q2xhc3MgPSB0cnVlO1xufVxuIl19