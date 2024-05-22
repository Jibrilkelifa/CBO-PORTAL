import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { createPopper } from '@popperjs/core';
import { PopoverComponent } from './popover/popover.component';
import { ListenersService } from '../services/listeners.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/listeners.service";
export class PopoverDirective {
    /**
     * Optional popper Options object, takes precedence over cPopoverPlacement prop
     * @type Partial<Options>
     */
    set popperOptions(value) {
        this._popperOptions = { ...this._popperOptions, placement: this.placement, ...value };
    }
    ;
    get popperOptions() {
        return { placement: this.placement, ...this._popperOptions };
    }
    /**
     * Toggle the visibility of popover component.
     */
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    get ariaDescribedBy() {
        return this.popoverId ? this.popoverId : null;
    }
    constructor(document, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.viewContainerRef = viewContainerRef;
        this.listenersService = listenersService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Content of popover
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
         */
        this.placement = 'top';
        /**
         * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
         * @type {'hover' | 'focus' | 'click'}
         */
        this.trigger = 'hover';
        this._visible = false;
        this._popperOptions = {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8]
                    }
                }
            ]
        };
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            changes['visible'].currentValue ? this.addPopoverElement() : this.removePopoverElement();
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.destroyPopoverElement();
    }
    ngOnInit() {
        this.setListeners();
    }
    setListeners() {
        const config = {
            hostElement: this.hostElement,
            trigger: this.trigger,
            callbackToggle: () => {
                this.visible = !this.visible;
                this.visible ? this.addPopoverElement() : this.removePopoverElement();
            },
            callbackOff: () => {
                this.visible = false;
                this.removePopoverElement();
            },
            callbackOn: () => {
                this.visible = true;
                this.addPopoverElement();
            }
        };
        this.listenersService.setListeners(config);
    }
    clearListeners() {
        this.listenersService.clearListeners();
    }
    getUID(prefix) {
        let uid = prefix ?? 'random-id';
        do {
            uid = `${prefix}-${Math.floor(Math.random() * 1000000).toString(10)}`;
        } while (this.document.getElementById(uid));
        return uid;
    }
    createPopoverElement() {
        if (!this.popoverRef) {
            this.popoverRef = this.viewContainerRef.createComponent(PopoverComponent);
            // this.viewContainerRef.detach();
        }
    }
    destroyPopoverElement() {
        this.popover?.remove();
        this.popoverRef?.destroy();
        // @ts-ignore
        this.popoverRef = undefined;
        this.popperInstance?.destroy();
        this.viewContainerRef?.detach();
        this.viewContainerRef?.clear();
    }
    addPopoverElement() {
        if (!this.popoverRef) {
            this.createPopoverElement();
        }
        this.popoverRef.instance.content = this.content;
        this.popover = this.popoverRef.location.nativeElement;
        this.renderer.addClass(this.popover, 'd-none');
        this.renderer.addClass(this.popover, 'fade');
        this.popperInstance?.destroy();
        setTimeout(() => {
            this.popperInstance = createPopper(this.hostElement.nativeElement, this.popover, { ...this.popperOptions });
            this.viewContainerRef.insert(this.popoverRef.hostView);
            this.renderer.appendChild(this.document.body, this.popover);
            if (!this.visible) {
                this.removePopoverElement();
                return;
            }
            setTimeout(() => {
                this.popoverId = this.getUID('popover');
                this.popoverRef.instance.id = this.popoverId;
                if (!this.visible) {
                    this.removePopoverElement();
                    return;
                }
                this.renderer.removeClass(this.popover, 'd-none');
                this.popoverRef.instance.visible = this.visible;
                this.popperInstance.forceUpdate();
                this.changeDetectorRef.markForCheck();
            }, 100);
        });
    }
    removePopoverElement() {
        this.popoverId = '';
        if (!this.popoverRef) {
            return;
        }
        this.popoverRef.instance.visible = false;
        this.popoverRef.instance.id = undefined;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.viewContainerRef.detach();
        }, 300);
    }
}
PopoverDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverDirective, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i1.ListenersService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
PopoverDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: PopoverDirective, selector: "[cPopover]", inputs: { content: ["cPopover", "content"], popperOptions: ["cPopoverOptions", "popperOptions"], placement: ["cPopoverPlacement", "placement"], trigger: ["cPopoverTrigger", "trigger"], visible: ["cPopoverVisible", "visible"] }, host: { properties: { "attr.aria-describedby": "this.ariaDescribedBy" } }, providers: [ListenersService], exportAs: ["cPopover"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPopover]',
                    exportAs: 'cPopover',
                    providers: [ListenersService]
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i1.ListenersService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cPopover']
            }], popperOptions: [{
                type: Input,
                args: ['cPopoverOptions']
            }], placement: [{
                type: Input,
                args: ['cPopoverPlacement']
            }], trigger: [{
                type: Input,
                args: ['cPopoverTrigger']
            }], visible: [{
                type: Input,
                args: ['cPopoverVisible']
            }], ariaDescribedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFRTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBcUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQU9uRixNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCOzs7T0FHRztJQUNILElBQ0ksYUFBYSxDQUFDLEtBQXVCO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUN4RixDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksYUFBYTtRQUNmLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBWUQ7O09BRUc7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUlELElBQTBDLGVBQWU7UUFDdkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENB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Q0FBQztJQUNMLENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OzZHQTVMVSxnQkFBZ0Isa0JBa0VqQixRQUFRO2lHQWxFUCxnQkFBZ0Isb1ZBRmhCLENBQUMsZ0JBQWdCLENBQUM7MkZBRWxCLGdCQUFnQjtrQkFMNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM5Qjs7MEJBbUVJLE1BQU07MkJBQUMsUUFBUTsyTEE1REMsT0FBTztzQkFBekIsS0FBSzt1QkFBQyxVQUFVO2dCQU9iLGFBQWE7c0JBRGhCLEtBQUs7dUJBQUMsaUJBQWlCO2dCQVlJLFNBQVM7c0JBQXBDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUtBLE9BQU87c0JBQWhDLEtBQUs7dUJBQUMsaUJBQWlCO2dCQU1wQixPQUFPO3NCQURWLEtBQUs7dUJBQUMsaUJBQWlCO2dCQVdrQixlQUFlO3NCQUF4RCxXQUFXO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIsIEluc3RhbmNlLCBPcHRpb25zIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElMaXN0ZW5lcnNDb25maWcsIExpc3RlbmVyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0ZW5lcnMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjUG9wb3Zlcl0nLFxuICBleHBvcnRBczogJ2NQb3BvdmVyJyxcbiAgcHJvdmlkZXJzOiBbTGlzdGVuZXJzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuXG4gIC8qKlxuICAgKiBDb250ZW50IG9mIHBvcG92ZXJcbiAgICogQHR5cGUge3N0cmluZyB8IFRlbXBsYXRlUmVmfVxuICAgKi9cbiAgQElucHV0KCdjUG9wb3ZlcicpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSAnJztcblxuICAvKipcbiAgICogT3B0aW9uYWwgcG9wcGVyIE9wdGlvbnMgb2JqZWN0LCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgY1BvcG92ZXJQbGFjZW1lbnQgcHJvcFxuICAgKiBAdHlwZSBQYXJ0aWFsPE9wdGlvbnM+XG4gICAqL1xuICBASW5wdXQoJ2NQb3BvdmVyT3B0aW9ucycpXG4gIHNldCBwb3BwZXJPcHRpb25zKHZhbHVlOiBQYXJ0aWFsPE9wdGlvbnM+KSB7XG4gICAgdGhpcy5fcG9wcGVyT3B0aW9ucyA9IHsgLi4udGhpcy5fcG9wcGVyT3B0aW9ucywgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCwgLi4udmFsdWUgfTtcbiAgfTtcblxuICBnZXQgcG9wcGVyT3B0aW9ucygpOiBQYXJ0aWFsPE9wdGlvbnM+IHtcbiAgICByZXR1cm4geyBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LCAuLi50aGlzLl9wb3BwZXJPcHRpb25zIH07XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmVzIHRoZSBwbGFjZW1lbnQgb2YgeW91ciBjb21wb25lbnQgYWZ0ZXIgUG9wcGVyLmpzIGhhcyBhcHBsaWVkIGFsbCB0aGUgbW9kaWZpZXJzIHRoYXQgbWF5IGhhdmUgZmxpcHBlZCBvciBhbHRlcmVkIHRoZSBvcmlnaW5hbGx5IHByb3ZpZGVkIHBsYWNlbWVudCBwcm9wZXJ0eS5cbiAgICovXG4gIEBJbnB1dCgnY1BvcG92ZXJQbGFjZW1lbnQnKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ3RvcCc7XG4gIC8qKlxuICAgKiBTZXRzIHdoaWNoIGV2ZW50IGhhbmRsZXJzIHlvdeKAmWQgbGlrZSBwcm92aWRlZCB0byB5b3VyIHRvZ2dsZSBwcm9wLiBZb3UgY2FuIHNwZWNpZnkgb25lIHRyaWdnZXIgb3IgYW4gYXJyYXkgb2YgdGhlbS5cbiAgICogQHR5cGUgeydob3ZlcicgfCAnZm9jdXMnIHwgJ2NsaWNrJ31cbiAgICovXG4gIEBJbnB1dCgnY1BvcG92ZXJUcmlnZ2VyJykgdHJpZ2dlcj86IFRyaWdnZXJzIHwgVHJpZ2dlcnNbXSA9ICdob3Zlcic7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBwb3BvdmVyIGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgnY1BvcG92ZXJWaXNpYmxlJylcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2libGUgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGdldCBhcmlhRGVzY3JpYmVkQnkoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucG9wb3ZlcklkID8gdGhpcy5wb3BvdmVySWQgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3BvdmVyITogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgcG9wb3ZlcklkITogc3RyaW5nO1xuICBwcml2YXRlIHBvcG92ZXJSZWYhOiBDb21wb25lbnRSZWY8UG9wb3ZlckNvbXBvbmVudD47XG4gIHByaXZhdGUgcG9wcGVySW5zdGFuY2UhOiBJbnN0YW5jZTtcblxuICBwcml2YXRlIF9wb3BwZXJPcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+ID0ge1xuICAgIG1vZGlmaWVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogWzAsIDhdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgbGlzdGVuZXJzU2VydmljZTogTGlzdGVuZXJzU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgIGNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUgPyB0aGlzLmFkZFBvcG92ZXJFbGVtZW50KCkgOiB0aGlzLnJlbW92ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIHRoaXMuZGVzdHJveVBvcG92ZXJFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnOiBJTGlzdGVuZXJzQ29uZmlnID0ge1xuICAgICAgaG9zdEVsZW1lbnQ6IHRoaXMuaG9zdEVsZW1lbnQsXG4gICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICBjYWxsYmFja1RvZ2dsZTogKCkgPT4ge1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgICAgICB0aGlzLnZpc2libGUgPyB0aGlzLmFkZFBvcG92ZXJFbGVtZW50KCkgOiB0aGlzLnJlbW92ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tPZmY6ICgpID0+IHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9wb3ZlckVsZW1lbnQoKTtcbiAgICAgIH0sXG4gICAgICBjYWxsYmFja09uOiAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkUG9wb3ZlckVsZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubGlzdGVuZXJzU2VydmljZS5zZXRMaXN0ZW5lcnMoY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnNTZXJ2aWNlLmNsZWFyTGlzdGVuZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFVJRChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHVpZCA9IHByZWZpeCA/PyAncmFuZG9tLWlkJztcbiAgICBkbyB7XG4gICAgICB1aWQgPSBgJHtwcmVmaXh9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkudG9TdHJpbmcoMTApfWA7XG4gICAgfSB3aGlsZSAodGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aWQpKTtcblxuICAgIHJldHVybiB1aWQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyUmVmKSB7XG4gICAgICB0aGlzLnBvcG92ZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PFBvcG92ZXJDb21wb25lbnQ+KFBvcG92ZXJDb21wb25lbnQpO1xuICAgICAgLy8gdGhpcy52aWV3Q29udGFpbmVyUmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMucG9wb3Zlcj8ucmVtb3ZlKCk7XG4gICAgdGhpcy5wb3BvdmVyUmVmPy5kZXN0cm95KCk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMucG9wb3ZlclJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvcHBlckluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmPy5kZXRhY2goKTtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWY/LmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyUmVmKSB7XG4gICAgICB0aGlzLmNyZWF0ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMucG9wb3ZlclJlZi5pbnN0YW5jZS5jb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIHRoaXMucG9wb3ZlciA9IHRoaXMucG9wb3ZlclJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3BvdmVyLCAnZC1ub25lJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBvcG92ZXIsICdmYWRlJyk7XG5cbiAgICB0aGlzLnBvcHBlckluc3RhbmNlPy5kZXN0cm95KCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXIoXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5wb3BvdmVyLFxuICAgICAgICB7IC4uLnRoaXMucG9wcGVyT3B0aW9ucyB9XG4gICAgICApO1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmluc2VydCh0aGlzLnBvcG92ZXJSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMucG9wb3Zlcik7XG4gICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLnJlbW92ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBvcG92ZXJJZCA9IHRoaXMuZ2V0VUlEKCdwb3BvdmVyJyk7XG4gICAgICAgIHRoaXMucG9wb3ZlclJlZi5pbnN0YW5jZS5pZCA9IHRoaXMucG9wb3ZlcklkO1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlUG9wb3ZlckVsZW1lbnQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnBvcG92ZXIsICdkLW5vbmUnKTtcbiAgICAgICAgdGhpcy5wb3BvdmVyUmVmLmluc3RhbmNlLnZpc2libGUgPSB0aGlzLnZpc2libGU7XG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMucG9wb3ZlcklkID0gJyc7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXJSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wb3BvdmVyUmVmLmluc3RhbmNlLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnBvcG92ZXJSZWYuaW5zdGFuY2UuaWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5kZXRhY2goKTtcbiAgICB9LCAzMDApO1xuICB9XG59XG4iXX0=