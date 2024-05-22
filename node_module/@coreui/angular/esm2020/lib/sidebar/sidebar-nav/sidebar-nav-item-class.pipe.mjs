import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./sidebar-nav.service";
export class SidebarNavItemClassPipe {
    constructor(helper) {
        this.helper = helper;
    }
    // transform(item: any, ...args: any[]): any {
    transform(item, args) {
        const itemType = this.helper.itemType(item);
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'group') {
            // itemClass = 'c-sidebar-nav-group' ;
            itemClass = '';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
}
SidebarNavItemClassPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavItemClassPipe, deps: [{ token: i1.SidebarNavHelper }], target: i0.ɵɵFactoryTarget.Pipe });
SidebarNavItemClassPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavItemClassPipe, name: "cSidebarNavItemClass" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarNavItemClassPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavItemClass'
                }]
        }], ctorParameters: function () { return [{ type: i1.SidebarNavHelper }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWl0ZW0tY2xhc3MucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBT3BELE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsWUFDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDO0lBRUosOENBQThDO0lBQzlDLFNBQVMsQ0FBQyxJQUFTLEVBQUUsSUFBWTtRQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNDLFNBQVMsR0FBRyxPQUFPLFFBQVEsRUFBRSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQy9CLHNDQUFzQztZQUN0QyxTQUFTLEdBQUcsRUFBRSxDQUFFO1NBQ2pCO2FBQU07WUFDTCxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDOztvSEFuQlEsdUJBQXVCO2tIQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFIbkMsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsc0JBQXNCO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuL3NpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjU2lkZWJhck5hdkl0ZW1DbGFzcydcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkge31cblxuICAvLyB0cmFuc2Zvcm0oaXRlbTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIGFyZ3M/OiBhbnlbXSk6IGFueSB7XG4gICAgICBjb25zdCBpdGVtVHlwZSA9IHRoaXMuaGVscGVyLml0ZW1UeXBlKGl0ZW0pO1xuICAgICAgbGV0IGl0ZW1DbGFzcztcbiAgICAgIGlmIChbJ2RpdmlkZXInLCAndGl0bGUnXS5pbmNsdWRlcyhpdGVtVHlwZSkpIHtcbiAgICAgICAgaXRlbUNsYXNzID0gYG5hdi0ke2l0ZW1UeXBlfWA7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIC8vIGl0ZW1DbGFzcyA9ICdjLXNpZGViYXItbmF2LWdyb3VwJyA7XG4gICAgICAgIGl0ZW1DbGFzcyA9ICcnIDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1DbGFzcyA9ICduYXYtaXRlbSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbS5jbGFzcyA/IGAke2l0ZW1DbGFzc30gJHtpdGVtLmNsYXNzfWAgOiBpdGVtQ2xhc3M7XG4gICAgfVxufVxuIl19