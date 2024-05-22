import { Component, ContentChildren, HostBinding, Input, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { ToasterHostDirective } from './toaster-host.directive';
import { ToastComponent } from '../toast/toast.component';
import * as i0 from "@angular/core";
import * as i1 from "./toaster.service";
import * as i2 from "./toaster-host.directive";
export var ToasterPlacement;
(function (ToasterPlacement) {
    ToasterPlacement["Static"] = "static";
    ToasterPlacement["TopStart"] = "top-start";
    ToasterPlacement["TopCenter"] = "top-center";
    ToasterPlacement["TopEnd"] = "top-end";
    ToasterPlacement["MiddleStart"] = "middle-start";
    ToasterPlacement["MiddleCenter"] = "middle-center";
    ToasterPlacement["MiddleEnd"] = "middle-end";
    ToasterPlacement["BottomStart"] = "bottom-start";
    ToasterPlacement["BottomCenter"] = "bottom-center";
    ToasterPlacement["BottomEnd"] = "bottom-end";
})(ToasterPlacement || (ToasterPlacement = {}));
export class ToasterComponent {
    constructor(componentFactoryResolver, hostElement, renderer, toasterService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.toasterService = toasterService;
        this.placements = Object.values(ToasterPlacement);
        this.toastsDynamic = [];
        /**
         * Toaster placement
         * @type TToasterPlacement
         */
        this.placement = ToasterPlacement.TopEnd;
        /**
         * Toaster position
         * @type (string | 'absolute' | 'fixed' | 'static')
         */
        this.position = 'absolute';
    }
    get hostClasses() {
        return {
            toaster: true,
            'toast-container': true,
            [`position-${this.position}`]: !!this.position,
            'top-0': this.placement.includes('top'),
            'top-50': this.placement.includes('middle'),
            'bottom-0': this.placement.includes('bottom'),
            'start-0': this.placement.includes('start'),
            'start-50': this.placement.includes('center'),
            'end-0': this.placement.includes('end'),
            'translate-middle-x': this.placement.includes('center') && !this.placement.includes('middle'),
            'translate-middle-y': this.placement.includes('middle') && !this.placement.includes('center'),
            'translate-middle': this.placement.includes('middle') && this.placement.includes('center'),
        };
    }
    ngOnInit() {
        this.stateToasterSubscribe(true);
    }
    ngOnDestroy() {
        this.stateToasterSubscribe(false);
    }
    ngAfterContentChecked() {
        this.toasts = this.contentToasts;
    }
    addToast(toast, props, options) {
        let componentRef;
        if (parseInt(VERSION.major) < 13) {
            const factory = this.componentFactoryResolver.resolveComponentFactory(toast);
            componentRef = this.toasterHost.viewContainerRef.createComponent(factory, options?.index, options?.injector, options?.projectableNodes, options?.ngModuleRef);
        }
        else {
            // @ts-ignore
            componentRef = this.toasterHost.viewContainerRef.createComponent(toast, options);
        }
        this.toastsDynamic.push(componentRef);
        const index = this.toastsDynamic.indexOf(componentRef);
        for (const [key, value] of Object.entries(props)) {
            componentRef.instance[key] = value;
        }
        componentRef.instance['placement'] = this.placement;
        componentRef.instance['dynamic'] = true;
        componentRef.instance['index'] = index;
        componentRef.instance['visible'] = true;
        componentRef.instance['visibleChange'].emit(true);
        componentRef.changeDetectorRef?.detectChanges();
        return componentRef;
    }
    removeToast(state) {
        this.toastsDynamic?.forEach(item => {
            if (state.toast?.dynamic && (item.instance === state.toast)) {
                item.instance.visible = false;
                item.instance['visibleChange'].emit(false);
                setTimeout(() => {
                    item.destroy();
                }, 300);
            }
        });
        this.toasts?.forEach(item => {
            if (item.element.nativeElement === state.toast?.hostElement.nativeElement) {
                if (!state.toast?.dynamic) {
                    // @ts-ignore
                    state.toast.visible = false;
                }
            }
        });
    }
    stateToasterSubscribe(subscribe = true) {
        if (subscribe) {
            this.stateToasterSubscription = this.toasterService.toasterState$.subscribe((state) => {
                if (state.show === false) {
                    this.removeToast(state);
                }
                if (state.show === true && state.toast?.dynamic === undefined) {
                }
            });
        }
        else {
            this.stateToasterSubscription.unsubscribe();
        }
    }
}
ToasterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Component });
ToasterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ToasterComponent, selector: "c-toaster", inputs: { placement: "placement", position: "position" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentToasts", predicate: ToastComponent, read: ViewContainerRef }], viewQueries: [{ propertyName: "toasterHost", first: true, predicate: ToasterHostDirective, descendants: true, static: true }], exportAs: ["cToaster"], ngImport: i0, template: "<ng-template cToasterHost></ng-template>\n<ng-content cToasterHost></ng-content>\n", dependencies: [{ kind: "directive", type: i2.ToasterHostDirective, selector: "[cToasterHost]", exportAs: ["cToasterHost"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToasterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toaster', exportAs: 'cToaster', template: "<ng-template cToasterHost></ng-template>\n<ng-content cToasterHost></ng-content>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ToasterService }]; }, propDecorators: { placement: [{
                type: Input
            }], position: [{
                type: Input
            }], toasterHost: [{
                type: ViewChild,
                args: [ToasterHostDirective, { static: true }]
            }], contentToasts: [{
                type: ContentChildren,
                args: [ToastComponent, { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0ZXIvdG9hc3Rlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0ZXIvdG9hc3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULGVBQWUsRUFFZixXQUFXLEVBRVgsS0FBSyxFQU1MLE9BQU8sRUFDUCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUUxRCxNQUFNLENBQU4sSUFBWSxnQkFXWDtBQVhELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLDBDQUFzQixDQUFBO0lBQ3RCLDRDQUF3QixDQUFBO0lBQ3hCLHNDQUFrQixDQUFBO0lBQ2xCLGdEQUE0QixDQUFBO0lBQzVCLGtEQUE4QixDQUFBO0lBQzlCLDRDQUF3QixDQUFBO0lBQ3hCLGdEQUE0QixDQUFBO0lBQzVCLGtEQUE4QixDQUFBO0lBQzlCLDRDQUF3QixDQUFBO0FBQzFCLENBQUMsRUFYVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBVzNCO0FBb0JELE1BQU0sT0FBTyxnQkFBZ0I7SUFzQjNCLFlBQ1Usd0JBQWtELEVBQ2xELFdBQXVCLEVBQ3ZCLFFBQW1CLEVBQ25CLGNBQThCO1FBSDlCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixt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QUF2RSxlQUFlO3VCQUFDLGNBQWMsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQztnQkFVckQsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlUmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFZFUlNJT04sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJVG9hc3RlckFjdGlvbiwgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdGVySG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vdG9hc3Rlci1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBlbnVtIFRvYXN0ZXJQbGFjZW1lbnQge1xuICBTdGF0aWMgPSAnc3RhdGljJyxcbiAgVG9wU3RhcnQgPSAndG9wLXN0YXJ0JyxcbiAgVG9wQ2VudGVyID0gJ3RvcC1jZW50ZXInLFxuICBUb3BFbmQgPSAndG9wLWVuZCcsXG4gIE1pZGRsZVN0YXJ0ID0gJ21pZGRsZS1zdGFydCcsXG4gIE1pZGRsZUNlbnRlciA9ICdtaWRkbGUtY2VudGVyJyxcbiAgTWlkZGxlRW5kID0gJ21pZGRsZS1lbmQnLFxuICBCb3R0b21TdGFydCA9ICdib3R0b20tc3RhcnQnLFxuICBCb3R0b21DZW50ZXIgPSAnYm90dG9tLWNlbnRlcicsXG4gIEJvdHRvbUVuZCA9ICdib3R0b20tZW5kJyxcbn1cblxuZXhwb3J0IHR5cGUgVFRvYXN0ZXJQbGFjZW1lbnQgPVxuICB8IFRvYXN0ZXJQbGFjZW1lbnQuU3RhdGljXG4gIHwgVG9hc3RlclBsYWNlbWVudC5Ub3BTdGFydFxuICB8IFRvYXN0ZXJQbGFjZW1lbnQuVG9wQ2VudGVyXG4gIHwgVG9hc3RlclBsYWNlbWVudC5Ub3BFbmRcbiAgfCBUb2FzdGVyUGxhY2VtZW50Lk1pZGRsZVN0YXJ0XG4gIHwgVG9hc3RlclBsYWNlbWVudC5NaWRkbGVDZW50ZXJcbiAgfCBUb2FzdGVyUGxhY2VtZW50Lk1pZGRsZUVuZFxuICB8IFRvYXN0ZXJQbGFjZW1lbnQuQm90dG9tU3RhcnRcbiAgfCBUb2FzdGVyUGxhY2VtZW50LkJvdHRvbUNlbnRlclxuICB8IFRvYXN0ZXJQbGFjZW1lbnQuQm90dG9tRW5kXG4gIHwgc3RyaW5nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXRvYXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnY1RvYXN0ZXInXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cbiAgc3RhdGVUb2FzdGVyU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwbGFjZW1lbnRzID0gT2JqZWN0LnZhbHVlcyhUb2FzdGVyUGxhY2VtZW50KTtcbiAgdG9hc3RzITogUXVlcnlMaXN0PFZpZXdDb250YWluZXJSZWY+O1xuICB0b2FzdHNEeW5hbWljOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUb2FzdGVyIHBsYWNlbWVudFxuICAgKiBAdHlwZSBUVG9hc3RlclBsYWNlbWVudFxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBUVG9hc3RlclBsYWNlbWVudCA9IFRvYXN0ZXJQbGFjZW1lbnQuVG9wRW5kO1xuXG4gIC8qKlxuICAgKiBUb2FzdGVyIHBvc2l0aW9uXG4gICAqIEB0eXBlIChzdHJpbmcgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGF0aWMnKVxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb246IChzdHJpbmcgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGF0aWMnKSA9ICdhYnNvbHV0ZSc7XG5cbiAgQFZpZXdDaGlsZChUb2FzdGVySG9zdERpcmVjdGl2ZSwge3N0YXRpYzogdHJ1ZX0pIHRvYXN0ZXJIb3N0ITogVG9hc3Rlckhvc3REaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGRyZW4oVG9hc3RDb21wb25lbnQsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29udGVudFRvYXN0cyE6IFF1ZXJ5TGlzdDxWaWV3Q29udGFpbmVyUmVmPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0b2FzdGVyOiB0cnVlLFxuICAgICAgJ3RvYXN0LWNvbnRhaW5lcic6IHRydWUsXG4gICAgICBbYHBvc2l0aW9uLSR7dGhpcy5wb3NpdGlvbn1gXTogISF0aGlzLnBvc2l0aW9uLFxuICAgICAgJ3RvcC0wJzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ3RvcCcpLFxuICAgICAgJ3RvcC01MCc6IHRoaXMucGxhY2VtZW50LmluY2x1ZGVzKCdtaWRkbGUnKSxcbiAgICAgICdib3R0b20tMCc6IHRoaXMucGxhY2VtZW50LmluY2x1ZGVzKCdib3R0b20nKSxcbiAgICAgICdzdGFydC0wJzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ3N0YXJ0JyksXG4gICAgICAnc3RhcnQtNTAnOiB0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnY2VudGVyJyksXG4gICAgICAnZW5kLTAnOiB0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnZW5kJyksXG4gICAgICAndHJhbnNsYXRlLW1pZGRsZS14JzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ2NlbnRlcicpICYmICF0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnbWlkZGxlJyksXG4gICAgICAndHJhbnNsYXRlLW1pZGRsZS15JzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ21pZGRsZScpICYmICF0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnY2VudGVyJyksXG4gICAgICAndHJhbnNsYXRlLW1pZGRsZSc6IHRoaXMucGxhY2VtZW50LmluY2x1ZGVzKCdtaWRkbGUnKSAmJiB0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnY2VudGVyJyksXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGVUb2FzdGVyU3Vic2NyaWJlKHRydWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZVRvYXN0ZXJTdWJzY3JpYmUoZmFsc2UpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMudG9hc3RzID0gdGhpcy5jb250ZW50VG9hc3RzO1xuICB9XG5cbiAgYWRkVG9hc3QodG9hc3Q6IGFueSwgcHJvcHM6IGFueSwgb3B0aW9ucz86IHsgaW5kZXg/OiBudW1iZXI7IGluamVjdG9yPzogSW5qZWN0b3I7IG5nTW9kdWxlUmVmPzogTmdNb2R1bGVSZWY8dW5rbm93bj47IHByb2plY3RhYmxlTm9kZXM/OiBOb2RlW11bXTsgfSk6IENvbXBvbmVudFJlZjxhbnk+IHtcbiAgICBsZXQgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgICBpZiAocGFyc2VJbnQoVkVSU0lPTi5tYWpvcikgPCAxMykge1xuICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRvYXN0KTtcbiAgICAgIGNvbXBvbmVudFJlZiA9IHRoaXMudG9hc3Rlckhvc3Qudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSwgb3B0aW9ucz8uaW5kZXgsIG9wdGlvbnM/LmluamVjdG9yLCBvcHRpb25zPy5wcm9qZWN0YWJsZU5vZGVzLCBvcHRpb25zPy5uZ01vZHVsZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbXBvbmVudFJlZiA9IHRoaXMudG9hc3Rlckhvc3Qudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodG9hc3QsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0c0R5bmFtaWMucHVzaChjb21wb25lbnRSZWYpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2FzdHNEeW5hbWljLmluZGV4T2YoY29tcG9uZW50UmVmKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsncGxhY2VtZW50J10gPSB0aGlzLnBsYWNlbWVudDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2R5bmFtaWMnXSA9IHRydWU7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydpbmRleCddID0gaW5kZXg7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlWyd2aXNpYmxlJ10gPSB0cnVlO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsndmlzaWJsZUNoYW5nZSddLmVtaXQodHJ1ZSk7XG4gICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmPy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcbiAgfVxuXG4gIHJlbW92ZVRvYXN0KHN0YXRlOiBJVG9hc3RlckFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMudG9hc3RzRHluYW1pYz8uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChzdGF0ZS50b2FzdD8uZHluYW1pYyAmJiAoaXRlbS5pbnN0YW5jZSA9PT0gc3RhdGUudG9hc3QpKSB7XG4gICAgICAgIGl0ZW0uaW5zdGFuY2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpdGVtLmluc3RhbmNlWyd2aXNpYmxlQ2hhbmdlJ10uZW1pdChmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50b2FzdHM/LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgPT09IHN0YXRlLnRvYXN0Py5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIGlmICghc3RhdGUudG9hc3Q/LmR5bmFtaWMpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgc3RhdGUudG9hc3QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRlVG9hc3RlclN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5zdGF0ZVRvYXN0ZXJTdWJzY3JpcHRpb24gPSB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnRvYXN0ZXJTdGF0ZSQuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUuc2hvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZVRvYXN0KHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc2hvdyA9PT0gdHJ1ZSAmJiBzdGF0ZS50b2FzdD8uZHluYW1pYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlVG9hc3RlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlIGNUb2FzdGVySG9zdD48L25nLXRlbXBsYXRlPlxuPG5nLWNvbnRlbnQgY1RvYXN0ZXJIb3N0PjwvbmctY29udGVudD5cbiJdfQ==