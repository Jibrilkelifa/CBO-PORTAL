import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarNavIconPipe {
    transform(item, args) {
        const icon = item.icon;
        const classes = {
            'nav-icon': true,
            [`${icon}`]: !!icon
        };
        return classes;
    }
}
SidebarNavIconPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavIconPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavIconPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavIconPipe, name: "cSidebarNavIcon" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavIconPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavIcon'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtaWNvbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWljb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixTQUFTLENBQUMsSUFBUyxFQUFFLElBQVU7UUFDN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixNQUFNLE9BQU8sR0FBRztZQUNkLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJO1NBQ3BCLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzsrR0FUVSxrQkFBa0I7NkdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjU2lkZWJhck5hdkljb24nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZJY29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGljb24gPSBpdGVtLmljb247XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICduYXYtaWNvbic6IHRydWUsXG4gICAgICBbYCR7aWNvbn1gXTogISFpY29uXG4gICAgfTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19