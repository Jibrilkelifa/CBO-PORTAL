import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarNavLinkPipe {
    transform(item) {
        const disabled = item?.attributes?.disabled;
        const classes = {
            'nav-link': true,
            disabled,
            'btn-link': disabled,
            [`nav-link-${item.variant}`]: !!item.variant
        };
        return classes;
    }
}
SidebarNavLinkPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavLinkPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkPipe, name: "cSidebarNavLink" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavLinkPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavLink'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGluay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWxpbmsucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixTQUFTLENBQUMsSUFBUztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztRQUU1QyxNQUFNLE9BQU8sR0FBRztZQUNkLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVE7WUFDUixVQUFVLEVBQUUsUUFBUTtZQUNwQixDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1NBQzdDLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzsrR0FiVSxrQkFBa0I7NkdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7aUJBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjU2lkZWJhck5hdkxpbmsnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShpdGVtOiBhbnkpOiBhbnkge1xuXG4gICAgY29uc3QgZGlzYWJsZWQgPSBpdGVtPy5hdHRyaWJ1dGVzPy5kaXNhYmxlZDtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnbmF2LWxpbmsnOiB0cnVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAnYnRuLWxpbmsnOiBkaXNhYmxlZCxcbiAgICAgIFtgbmF2LWxpbmstJHtpdGVtLnZhcmlhbnR9YF06ICEhaXRlbS52YXJpYW50XG4gICAgfTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19