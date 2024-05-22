import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarNavBadgePipe {
    transform(item, args) {
        const badge = item.badge;
        return {
            badge: true,
            'ms-auto': true,
            'badge-sm': !badge.size,
            [`badge-${badge.size}`]: !!badge.size,
            [`bg-${badge.color}`]: !!badge.color,
            [`${badge.class}`]: !!badge.class
        };
    }
}
SidebarNavBadgePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavBadgePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavBadgePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavBadgePipe, name: "cSidebarNavBadge" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavBadgePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavBadge'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtYmFkZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1iYWRnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFNBQVMsQ0FBQyxJQUFTLEVBQUUsSUFBVTtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSTtZQUNYLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDdkIsQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNyQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3BDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUs7U0FDbEMsQ0FBQztJQUNKLENBQUM7O2dIQVpVLG1CQUFtQjs4R0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBSC9CLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGtCQUFrQjtpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2NTaWRlYmFyTmF2QmFkZ2UnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZCYWRnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaXRlbTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBjb25zdCBiYWRnZSA9IGl0ZW0uYmFkZ2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhZGdlOiB0cnVlLFxuICAgICAgJ21zLWF1dG8nOiB0cnVlLFxuICAgICAgJ2JhZGdlLXNtJzogIWJhZGdlLnNpemUsXG4gICAgICBbYGJhZGdlLSR7YmFkZ2Uuc2l6ZX1gXTogISFiYWRnZS5zaXplLFxuICAgICAgW2BiZy0ke2JhZGdlLmNvbG9yfWBdOiAhIWJhZGdlLmNvbG9yLFxuICAgICAgW2Ake2JhZGdlLmNsYXNzfWBdOiAhIWJhZGdlLmNsYXNzXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=