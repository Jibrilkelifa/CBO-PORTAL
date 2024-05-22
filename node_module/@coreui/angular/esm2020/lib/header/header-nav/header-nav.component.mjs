import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderNavComponent {
    constructor() {
        /**
         * Default role for header-nav. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
        this.headerNavClass = true;
    }
}
HeaderNavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
HeaderNavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: HeaderNavComponent, selector: "c-header-nav", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.header-nav": "this.headerNavClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: HeaderNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-header-nav', template: `<ng-content></ng-content>` }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], headerNavClass: [{
                type: HostBinding,
                args: ['class.header-nav']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2hlYWRlci9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU1FOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsWUFBWSxDQUFDO1FBRUksbUJBQWMsR0FBRyxJQUFJLENBQUM7S0FDeEQ7OytHQVZZLGtCQUFrQjttR0FBbEIsa0JBQWtCLDZLQUhuQiwyQkFBMkI7MkZBRzFCLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxjQUFjLFlBQ2QsMkJBQTJCOzhCQVU1QixJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBRTJCLGNBQWM7c0JBQTlDLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1oZWFkZXItbmF2JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLW5hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck5hdkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHJvbGUgZm9yIGhlYWRlci1uYXYuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ25hdmlnYXRpb24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIEBJbnB1dCgpIHJvbGUgPSAnbmF2aWdhdGlvbic7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oZWFkZXItbmF2JykgaGVhZGVyTmF2Q2xhc3MgPSB0cnVlO1xufVxuIl19