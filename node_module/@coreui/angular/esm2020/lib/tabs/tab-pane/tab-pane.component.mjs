import { Component, HostBinding } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../tab.service";
export class TabPaneComponent {
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._active = false;
    }
    set active(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._active !== newValue) {
            this._active = newValue;
            this.changeDetectorRef.markForCheck();
        }
    }
    get active() {
        return this._active;
    }
    get hostClasses() {
        return {
            'tab-pane': true,
            fade: true,
            show: this.active,
            active: this.active
        };
    }
    ngOnInit() {
        this.subscribeTabService();
    }
    ngOnDestroy() {
        this.subscribeTabService(false);
    }
    subscribeTabService(subscribe = true) {
        if (subscribe) {
            this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
                if (tabContentState.tabContent === this.tabContent) {
                    this.active = (tabContentState.activeIdx === this.tabPaneIdx);
                }
            });
        }
        else {
            this.tabServiceSubscription.unsubscribe();
        }
    }
}
TabPaneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabPaneComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TabService }], target: i0.ɵɵFactoryTarget.Component });
TabPaneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: TabPaneComponent, selector: "c-tab-pane", host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cTabPane"], ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabPaneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-tab-pane', exportAs: 'cTabPane', template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TabService }]; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90YWJzL3RhYi1wYW5lL3RhYi1wYW5lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdGFicy90YWItcGFuZS90YWItcGFuZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBRSxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBSzdGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFROUQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixZQUNVLGlCQUFvQyxFQUNwQyxVQUFzQjtRQUR0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFpQnhCLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFoQjdCLENBQUM7SUFNTCxJQUFJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBR0QsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsWUFBcUIsSUFBSTtRQUMzQyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWlDLEVBQUUsRUFBRTtnQkFDOUcsSUFBSSxlQUFlLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDL0Q7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs2R0FuRFUsZ0JBQWdCO2lHQUFoQixnQkFBZ0IsaUlDYjdCLDZCQUNBOzJGRFlhLGdCQUFnQjtrQkFONUIsU0FBUzsrQkFDRSxZQUFZLFlBR1osVUFBVTtpSUEwQmhCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFiQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL3RhYi1jb250ZW50L3RhYi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGFiQ29udGVudFN0YXRlLCBUYWJTZXJ2aWNlIH0gZnJvbSAnLi4vdGFiLnNlcnZpY2UnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy10YWItcGFuZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItcGFuZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1wYW5lLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY1RhYlBhbmUnXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgcHVibGljIHRhYlBhbmVJZHghOiBudW1iZXI7XG4gIHB1YmxpYyB0YWJDb250ZW50ITogVGFiQ29udGVudENvbXBvbmVudDtcbiAgcHJpdmF0ZSB0YWJTZXJ2aWNlU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuXG4gIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0YWItcGFuZSc6IHRydWUsXG4gICAgICBmYWRlOiB0cnVlLFxuICAgICAgc2hvdzogdGhpcy5hY3RpdmUsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlVGFiU2VydmljZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVUYWJTZXJ2aWNlKGZhbHNlKTtcbiAgfVxuXG4gIHN1YnNjcmliZVRhYlNlcnZpY2Uoc3Vic2NyaWJlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudGFiU2VydmljZVN1YnNjcmlwdGlvbiA9IHRoaXMudGFiU2VydmljZS5hY3RpdmVUYWJQYW5lSWR4JC5zdWJzY3JpYmUoKHRhYkNvbnRlbnRTdGF0ZTogSVRhYkNvbnRlbnRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodGFiQ29udGVudFN0YXRlLnRhYkNvbnRlbnQgPT09IHRoaXMudGFiQ29udGVudCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gKHRhYkNvbnRlbnRTdGF0ZS5hY3RpdmVJZHggPT09IHRoaXMudGFiUGFuZUlkeCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYlNlcnZpY2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiJdfQ==