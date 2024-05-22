import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "./tab.service";
export class TabContentRefDirective {
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._active = false;
        this._disabled = false;
        /**
         * c-tab-pane index respectively
         * @type number
         */
        this.tabPaneIdx = -1;
    }
    /**
     * Set active state of tab content
     * @type boolean
     */
    set active(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._active !== newValue) {
            this._active = newValue;
            this.changeDetectorRef.detectChanges();
        }
    }
    get active() {
        return this._active;
    }
    /**
     * Set disabled state of tab content
     * @type boolean
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get disabled() {
        return this._disabled || this.tabPaneIdx >= this.tabContentRef?.panes?.length;
    }
    get hostClasses() {
        return {
            active: this.active,
            disabled: this.disabled
        };
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    ngOnChanges(changes) {
        if (changes['active']?.currentValue) {
            this.setActiveTabPane();
        }
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.setActiveTabPane();
    }
    setActiveTabPane() {
        setTimeout(() => {
            if (this.tabPaneIdx < this.tabContentRef.panes.length) {
                this.active = true;
                this.tabService.setActiveTabIdx({ tabContent: this.tabContentRef, activeIdx: this.tabPaneIdx });
            }
            else {
                this.active = false;
            }
        });
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
                if (tabContentState.tabContent === this.tabContentRef) {
                    this.active = (tabContentState.activeIdx === this.tabPaneIdx);
                }
            });
        }
        else {
            this.tabServiceSubscription.unsubscribe();
        }
    }
}
TabContentRefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentRefDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TabService }], target: i0.ɵɵFactoryTarget.Directive });
TabContentRefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TabContentRefDirective, selector: "[cTabContent]", inputs: { tabContentRef: ["cTabContent", "tabContentRef"], active: "active", disabled: "disabled", tabPaneIdx: "tabPaneIdx" }, host: { listeners: { "click": "toggleOpen($event)" }, properties: { "class": "this.hostClasses", "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabContentRefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTabContent]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TabService }]; }, propDecorators: { tabContentRef: [{
                type: Input,
                args: ['cTabContent']
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], tabPaneIdx: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQtcmVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdGFicy90YWItY29udGVudC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFPNUUsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUNVLGlCQUFvQyxFQUNwQyxVQUFzQjtRQUR0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUEyQnhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFhaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQjs7O1dBR0c7UUFDTSxlQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUE3Q3JCLENBQUM7SUFXTDs7O09BR0c7SUFDSCxJQUNJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUNELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsSUFDSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7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V0FBVzt1QkFBQyxlQUFlO2dCQU14QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsZUFBZTtnQkFZNUIsVUFBVTtzQkFEVCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3RhYi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NUYWJDb250ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnRSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2VcbiAgKSB7IH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgcHJpdmF0ZSB0YWJTZXJ2aWNlU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBUZW1wbGF0ZSBSZWZcbiAgICogQHR5cGUgVGVtcGxhdGVSZWZcbiAgICovXG4gIEBJbnB1dCgnY1RhYkNvbnRlbnQnKSB0YWJDb250ZW50UmVmITogYW55O1xuXG4gIC8qKlxuICAgKiBTZXQgYWN0aXZlIHN0YXRlIG9mIHRhYiBjb250ZW50XG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0IGRpc2FibGVkIHN0YXRlIG9mIHRhYiBjb250ZW50XG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8IHRoaXMudGFiUGFuZUlkeCA+PSB0aGlzLnRhYkNvbnRlbnRSZWY/LnBhbmVzPy5sZW5ndGg7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogYy10YWItcGFuZSBpbmRleCByZXNwZWN0aXZlbHlcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKSB0YWJQYW5lSWR4ID0gLTE7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKVxuICBnZXQgYXR0ckRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCBnZXRUYWJpbmRleCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICctMScgOiBudWxsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydhY3RpdmUnXT8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZVRhYlBhbmUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldEFjdGl2ZVRhYlBhbmUoKTtcbiAgfVxuXG4gIHNldEFjdGl2ZVRhYlBhbmUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50YWJQYW5lSWR4IDwgdGhpcy50YWJDb250ZW50UmVmLnBhbmVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiU2VydmljZS5zZXRBY3RpdmVUYWJJZHgoeyB0YWJDb250ZW50OiB0aGlzLnRhYkNvbnRlbnRSZWYsIGFjdGl2ZUlkeDogdGhpcy50YWJQYW5lSWR4IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlVGFiU2VydmljZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmVUYWJTZXJ2aWNlKGZhbHNlKTtcbiAgfVxuXG4gIHN1YnNjcmliZVRhYlNlcnZpY2Uoc3Vic2NyaWJlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudGFiU2VydmljZVN1YnNjcmlwdGlvbiA9IHRoaXMudGFiU2VydmljZS5hY3RpdmVUYWJQYW5lSWR4JC5zdWJzY3JpYmUoKHRhYkNvbnRlbnRTdGF0ZSkgPT4ge1xuICAgICAgICBpZiAodGFiQ29udGVudFN0YXRlLnRhYkNvbnRlbnQgPT09IHRoaXMudGFiQ29udGVudFJlZikge1xuICAgICAgICAgIHRoaXMuYWN0aXZlID0gKHRhYkNvbnRlbnRTdGF0ZS5hY3RpdmVJZHggPT09IHRoaXMudGFiUGFuZUlkeCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYlNlcnZpY2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==