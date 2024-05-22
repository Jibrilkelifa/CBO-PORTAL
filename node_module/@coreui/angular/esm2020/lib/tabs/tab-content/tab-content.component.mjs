import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { TabPaneComponent } from '../tab-pane/tab-pane.component';
import * as i0 from "@angular/core";
import * as i1 from "../tab.service";
export class TabContentComponent {
    /**
     * Set active tabPane index
     * @type number
     */
    set activeTabPaneIdx(value) {
        const newValue = coerceNumberProperty(value);
        if (this._activeTabPaneIdx != newValue) {
            this._activeTabPaneIdx = newValue;
            this.activeTabPaneIdxChange.emit(newValue);
            this.changeDetectorRef.markForCheck();
            this.changeDetectorRef.detectChanges();
        }
    }
    ;
    get activeTabPaneIdx() {
        return this._activeTabPaneIdx;
    }
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._activeTabPaneIdx = -1;
        /**
         * Event emited on the active tab pane index change.
         */
        this.activeTabPaneIdxChange = new EventEmitter();
    }
    get hostClasses() {
        return {
            'tab-content': true
        };
    }
    ngAfterContentInit() {
        this.subscribeTabService();
    }
    ngAfterContentChecked() {
        this.panes?.forEach((tabPane, index) => {
            tabPane.tabContent = this;
            tabPane.tabPaneIdx = index;
        });
        this.refreshTabPaneActive(this.activeTabPaneIdx);
        this.tabService.setActiveTabIdx({ tabContent: this, activeIdx: this.activeTabPaneIdx });
    }
    ngOnChanges(changes) {
        if (changes['activeTabPaneIdx']?.currentValue) {
            this.tabService.setActiveTabIdx({ tabContent: this, activeIdx: changes['activeTabPaneIdx'].currentValue });
        }
    }
    ngOnDestroy() {
        this.subscribeTabService(false);
    }
    subscribeTabService(subscribe = true) {
        if (subscribe) {
            this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
                if (this === tabContentState.tabContent) {
                    this.activeTabPaneIdx = tabContentState.activeIdx;
                }
            });
        }
        else {
            this.tabServiceSubscription.unsubscribe();
        }
    }
    refreshTabPaneActive(idx) {
        // hack for active state pane refresh todo?
        this.panes?.forEach((tabPane, index) => {
            tabPane.active = idx === index;
        });
    }
}
TabContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TabService }], target: i0.ɵɵFactoryTarget.Component });
TabContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: TabContentComponent, selector: "c-tab-content", inputs: { activeTabPaneIdx: "activeTabPaneIdx" }, outputs: { activeTabPaneIdxChange: "activeTabPaneIdxChange" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "panes", predicate: TabPaneComponent }], exportAs: ["cTabContent"], usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-tab-content', changeDetection: ChangeDetectionStrategy.OnPush, exportAs: 'cTabContent', template: "<ng-content></ng-content>\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TabService }]; }, propDecorators: { activeTabPaneIdx: [{
                type: Input
            }], activeTabPaneIdxChange: [{
                type: Output
            }], panes: [{
                type: ContentChildren,
                args: [TabPaneComponent]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90YWJzL3RhYi1jb250ZW50L3RhYi1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdGFicy90YWItY29udGVudC90YWItY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBR0wsTUFBTSxFQUdQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFVbEUsTUFBTSxPQUFPLG1CQUFtQjtJQUU5Qjs7O09BR0c7SUFDSCxJQUNJLGdCQUFnQixDQUFDLEtBQWE7UUFDaEMsTUFBTSxRQUFRLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksUUFBUSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7WUFDbEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBV0QsWUFDVSxpQkFBb0MsRUFDcEMsVUFBc0I7UUFEdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWnhCLHNCQUFpQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRS9COztXQUVHO1FBQ08sMkJBQXNCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFRaEYsQ0FBQztJQUVMLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsWUFBWSxFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUM1RztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxZQUFxQixJQUFJO1FBQzNDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUU7Z0JBQzVGLElBQUksSUFBSSxLQUFLLGVBQWUsQ0FBQyxVQUFVLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDO2lCQUNuRDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxHQUFXO1FBQzlCLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnSEFqRlUsbUJBQW1CO29HQUFuQixtQkFBbUIsbVBBMEJiLGdCQUFnQiw2RUN2RG5DLDZCQUNBOzJGRDRCYSxtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsZUFBZSxtQkFHUix1QkFBdUIsQ0FBQyxNQUFNLFlBQ3JDLGFBQWE7aUlBU25CLGdCQUFnQjtzQkFEbkIsS0FBSztnQkFrQkksc0JBQXNCO3NCQUEvQixNQUFNO2dCQUVtQyxLQUFLO3NCQUE5QyxlQUFlO3VCQUFDLGdCQUFnQjtnQkFTN0IsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhYlBhbmVDb21wb25lbnQgfSBmcm9tICcuLi90YWItcGFuZS90YWItcGFuZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gJy4uL3RhYi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy10YWItY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBleHBvcnRBczogJ2NUYWJDb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIC8qKlxuICAgKiBTZXQgYWN0aXZlIHRhYlBhbmUgaW5kZXhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWN0aXZlVGFiUGFuZUlkeCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhYlBhbmVJZHggIT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhYlBhbmVJZHggPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuYWN0aXZlVGFiUGFuZUlkeENoYW5nZS5lbWl0KG5ld1ZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH07XG4gIGdldCBhY3RpdmVUYWJQYW5lSWR4KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUYWJQYW5lSWR4O1xuICB9XG4gIHByaXZhdGUgX2FjdGl2ZVRhYlBhbmVJZHggPSAtMTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdGVkIG9uIHRoZSBhY3RpdmUgdGFiIHBhbmUgaW5kZXggY2hhbmdlLlxuICAgKi9cbiAgQE91dHB1dCgpIGFjdGl2ZVRhYlBhbmVJZHhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUYWJQYW5lQ29tcG9uZW50KSBwdWJsaWMgcGFuZXMhOiBRdWVyeUxpc3Q8VGFiUGFuZUNvbXBvbmVudD47XG4gIHByaXZhdGUgdGFiU2VydmljZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2VcbiAgKSB7IH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAndGFiLWNvbnRlbnQnOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmliZVRhYlNlcnZpY2UoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVzPy5mb3JFYWNoKCh0YWJQYW5lLCBpbmRleCkgPT4ge1xuICAgICAgdGFiUGFuZS50YWJDb250ZW50ID0gdGhpcztcbiAgICAgICAgdGFiUGFuZS50YWJQYW5lSWR4ID0gaW5kZXg7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoVGFiUGFuZUFjdGl2ZSh0aGlzLmFjdGl2ZVRhYlBhbmVJZHgpO1xuICAgIHRoaXMudGFiU2VydmljZS5zZXRBY3RpdmVUYWJJZHgoeyB0YWJDb250ZW50OiB0aGlzLCBhY3RpdmVJZHg6IHRoaXMuYWN0aXZlVGFiUGFuZUlkeCB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snYWN0aXZlVGFiUGFuZUlkeCddPy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMudGFiU2VydmljZS5zZXRBY3RpdmVUYWJJZHgoeyB0YWJDb250ZW50OiB0aGlzLCBhY3RpdmVJZHg6IGNoYW5nZXNbJ2FjdGl2ZVRhYlBhbmVJZHgnXS5jdXJyZW50VmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVUYWJTZXJ2aWNlKGZhbHNlKTtcbiAgfVxuXG4gIHN1YnNjcmliZVRhYlNlcnZpY2Uoc3Vic2NyaWJlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudGFiU2VydmljZVN1YnNjcmlwdGlvbiA9IHRoaXMudGFiU2VydmljZS5hY3RpdmVUYWJQYW5lSWR4JC5zdWJzY3JpYmUoKHRhYkNvbnRlbnRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodGhpcyA9PT0gdGFiQ29udGVudFN0YXRlLnRhYkNvbnRlbnQpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVRhYlBhbmVJZHggPSB0YWJDb250ZW50U3RhdGUuYWN0aXZlSWR4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJTZXJ2aWNlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFRhYlBhbmVBY3RpdmUoaWR4OiBudW1iZXIpIHtcbiAgICAvLyBoYWNrIGZvciBhY3RpdmUgc3RhdGUgcGFuZSByZWZyZXNoIHRvZG8/XG4gICAgdGhpcy5wYW5lcz8uZm9yRWFjaCgodGFiUGFuZSwgaW5kZXgpID0+IHtcbiAgICAgIHRhYlBhbmUuYWN0aXZlID0gaWR4ID09PSBpbmRleDtcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuIl19