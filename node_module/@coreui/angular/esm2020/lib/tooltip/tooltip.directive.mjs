import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { createPopper } from '@popperjs/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListenersService } from '../services/listeners.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/listeners.service";
export class TooltipDirective {
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
     * Toggle the visibility of tooltip component.
     */
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    get ariaDescribedBy() {
        return this.tooltipId ? this.tooltipId : null;
    }
    constructor(document, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.viewContainerRef = viewContainerRef;
        this.listenersService = listenersService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Content of tooltip
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
                        offset: [0, 0]
                    }
                }
            ]
        };
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            changes['visible'].currentValue ? this.addTooltipElement() : this.removeTooltipElement();
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.destroyTooltipElement();
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
                this.visible ? this.addTooltipElement() : this.removeTooltipElement();
            },
            callbackOff: () => {
                this.visible = false;
                this.removeTooltipElement();
            },
            callbackOn: () => {
                this.visible = true;
                this.addTooltipElement();
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
    createTooltipElement() {
        if (!this.tooltipRef) {
            this.tooltipRef = this.viewContainerRef.createComponent(TooltipComponent);
            // this.viewContainerRef.detach();
        }
    }
    destroyTooltipElement() {
        this.tooltip?.remove();
        this.tooltipRef?.destroy();
        // @ts-ignore
        this.tooltipRef = undefined;
        this.popperInstance?.destroy();
        this.viewContainerRef?.detach();
        this.viewContainerRef?.clear();
    }
    addTooltipElement() {
        if (!this.tooltipRef) {
            this.createTooltipElement();
        }
        this.tooltipId = this.getUID('tooltip');
        this.tooltipRef.instance.id = this.tooltipId;
        this.tooltipRef.instance.content = this.content;
        this.tooltip = this.tooltipRef.location.nativeElement;
        this.renderer.addClass(this.tooltip, 'd-none');
        this.renderer.addClass(this.tooltip, 'fade');
        this.popperInstance?.destroy();
        this.viewContainerRef.insert(this.tooltipRef.hostView);
        this.renderer.appendChild(this.document.body, this.tooltip);
        this.popperInstance = createPopper(this.hostElement.nativeElement, this.tooltip, { ...this.popperOptions });
        if (!this.visible) {
            this.removeTooltipElement();
            return;
        }
        this.renderer.removeClass(this.tooltip, 'd-none');
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.tooltipRef.instance.visible = this.visible;
            this.popperInstance.forceUpdate();
            this.changeDetectorRef.markForCheck();
        }, 100);
    }
    removeTooltipElement() {
        this.tooltipId = '';
        if (!this.tooltipRef) {
            return;
        }
        this.tooltipRef.instance.visible = false;
        this.tooltipRef.instance.id = undefined;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.viewContainerRef?.detach();
        }, 300);
    }
}
TooltipDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipDirective, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i1.ListenersService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
TooltipDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TooltipDirective, selector: "[cTooltip]", inputs: { content: ["cTooltip", "content"], popperOptions: ["cTooltipOptions", "popperOptions"], placement: ["cTooltipPlacement", "placement"], trigger: ["cTooltipTrigger", "trigger"], visible: ["cTooltipVisible", "visible"] }, host: { properties: { "attr.aria-describedby": "this.ariaDescribedBy" } }, providers: [ListenersService], exportAs: ["cTooltip"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTooltip]',
                    exportAs: 'cTooltip',
                    providers: [ListenersService]
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i1.ListenersService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cTooltip']
            }], popperOptions: [{
                type: Input,
                args: ['cTooltipOptions']
            }], placement: [{
                type: Input,
                args: ['cTooltipPlacement']
            }], trigger: [{
                type: Input,
                args: ['cTooltipTrigger']
            }], visible: [{
                type: Input,
                args: ['cTooltipVisible']
            }], ariaDescribedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFRTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBcUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQU9uRixNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCOzs7T0FHRztJQUNILElBQ0ksYUFBYSxDQUFDLEtBQXVCO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUN4RixDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksYUFBYTtRQUNmLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBWUQ7O09BRUc7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUlELElBQTBDLGVBQWU7UUFDdkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENB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O1lBQ3BCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOzs2R0E1TFUsZ0JBQWdCLGtCQWtFakIsUUFBUTtpR0FsRVAsZ0JBQWdCLG9WQUZoQixDQUFDLGdCQUFnQixDQUFDOzJGQUVsQixnQkFBZ0I7a0JBTDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUI7OzBCQW1FSSxNQUFNOzJCQUFDLFFBQVE7MkxBNURDLE9BQU87c0JBQXpCLEtBQUs7dUJBQUMsVUFBVTtnQkFPYixhQUFhO3NCQURoQixLQUFLO3VCQUFDLGlCQUFpQjtnQkFZSSxTQUFTO3NCQUFwQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFLQSxPQUFPO3NCQUFoQyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFNcEIsT0FBTztzQkFEVixLQUFLO3VCQUFDLGlCQUFpQjtnQkFXa0IsZUFBZTtzQkFBeEQsV0FBVzt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyLCBJbnN0YW5jZSwgT3B0aW9ucyB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxuaW1wb3J0IHsgVHJpZ2dlcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJTGlzdGVuZXJzQ29uZmlnLCBMaXN0ZW5lcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdGVuZXJzLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1Rvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdjVG9vbHRpcCcsXG4gIHByb3ZpZGVyczogW0xpc3RlbmVyc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcblxuICAvKipcbiAgICogQ29udGVudCBvZiB0b29sdGlwXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBUZW1wbGF0ZVJlZn1cbiAgICovXG4gIEBJbnB1dCgnY1Rvb2x0aXAnKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJyc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBvcHBlciBPcHRpb25zIG9iamVjdCwgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGNQb3BvdmVyUGxhY2VtZW50IHByb3BcbiAgICogQHR5cGUgUGFydGlhbDxPcHRpb25zPlxuICAgKi9cbiAgQElucHV0KCdjVG9vbHRpcE9wdGlvbnMnKVxuICBzZXQgcG9wcGVyT3B0aW9ucyh2YWx1ZTogUGFydGlhbDxPcHRpb25zPikge1xuICAgIHRoaXMuX3BvcHBlck9wdGlvbnMgPSB7IC4uLnRoaXMuX3BvcHBlck9wdGlvbnMsIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsIC4uLnZhbHVlIH07XG4gIH07XG5cbiAgZ2V0IHBvcHBlck9wdGlvbnMoKTogUGFydGlhbDxPcHRpb25zPiB7XG4gICAgcmV0dXJuIHsgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCwgLi4udGhpcy5fcG9wcGVyT3B0aW9ucyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyB0aGUgcGxhY2VtZW50IG9mIHlvdXIgY29tcG9uZW50IGFmdGVyIFBvcHBlci5qcyBoYXMgYXBwbGllZCBhbGwgdGhlIG1vZGlmaWVycyB0aGF0IG1heSBoYXZlIGZsaXBwZWQgb3IgYWx0ZXJlZCB0aGUgb3JpZ2luYWxseSBwcm92aWRlZCBwbGFjZW1lbnQgcHJvcGVydHkuXG4gICAqL1xuICBASW5wdXQoJ2NUb29sdGlwUGxhY2VtZW50JykgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICd0b3AnO1xuICAvKipcbiAgICogU2V0cyB3aGljaCBldmVudCBoYW5kbGVycyB5b3XigJlkIGxpa2UgcHJvdmlkZWQgdG8geW91ciB0b2dnbGUgcHJvcC4gWW91IGNhbiBzcGVjaWZ5IG9uZSB0cmlnZ2VyIG9yIGFuIGFycmF5IG9mIHRoZW0uXG4gICAqIEB0eXBlIHsnaG92ZXInIHwgJ2ZvY3VzJyB8ICdjbGljayd9XG4gICAqL1xuICBASW5wdXQoJ2NUb29sdGlwVHJpZ2dlcicpIHRyaWdnZXI6IFRyaWdnZXJzIHwgVHJpZ2dlcnNbXSA9ICdob3Zlcic7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0b29sdGlwIGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgnY1Rvb2x0aXBWaXNpYmxlJylcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2libGUgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGdldCBhcmlhRGVzY3JpYmVkQnkoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudG9vbHRpcElkID8gdGhpcy50b29sdGlwSWQgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB0b29sdGlwITogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgdG9vbHRpcElkITogc3RyaW5nO1xuICBwcml2YXRlIHRvb2x0aXBSZWYhOiBDb21wb25lbnRSZWY8VG9vbHRpcENvbXBvbmVudD47XG4gIHByaXZhdGUgcG9wcGVySW5zdGFuY2UhOiBJbnN0YW5jZTtcblxuICBwcml2YXRlIF9wb3BwZXJPcHRpb25zOiBQYXJ0aWFsPE9wdGlvbnM+ID0ge1xuICAgIG1vZGlmaWVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogWzAsIDBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgbGlzdGVuZXJzU2VydmljZTogTGlzdGVuZXJzU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgIGNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUgPyB0aGlzLmFkZFRvb2x0aXBFbGVtZW50KCkgOiB0aGlzLnJlbW92ZVRvb2x0aXBFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIHRoaXMuZGVzdHJveVRvb2x0aXBFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnOiBJTGlzdGVuZXJzQ29uZmlnID0ge1xuICAgICAgaG9zdEVsZW1lbnQ6IHRoaXMuaG9zdEVsZW1lbnQsXG4gICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICBjYWxsYmFja1RvZ2dsZTogKCkgPT4ge1xuICAgICAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xuICAgICAgICB0aGlzLnZpc2libGUgPyB0aGlzLmFkZFRvb2x0aXBFbGVtZW50KCkgOiB0aGlzLnJlbW92ZVRvb2x0aXBFbGVtZW50KCk7XG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tPZmY6ICgpID0+IHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcEVsZW1lbnQoKTtcbiAgICAgIH0sXG4gICAgICBjYWxsYmFja09uOiAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkVG9vbHRpcEVsZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMubGlzdGVuZXJzU2VydmljZS5zZXRMaXN0ZW5lcnMoY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnNTZXJ2aWNlLmNsZWFyTGlzdGVuZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFVJRChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHVpZCA9IHByZWZpeCA/PyAncmFuZG9tLWlkJztcbiAgICBkbyB7XG4gICAgICB1aWQgPSBgJHtwcmVmaXh9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkudG9TdHJpbmcoMTApfWA7XG4gICAgfSB3aGlsZSAodGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aWQpKTtcblxuICAgIHJldHVybiB1aWQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PFRvb2x0aXBDb21wb25lbnQ+KFRvb2x0aXBDb21wb25lbnQpO1xuICAgICAgLy8gdGhpcy52aWV3Q29udGFpbmVyUmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcD8ucmVtb3ZlKCk7XG4gICAgdGhpcy50b29sdGlwUmVmPy5kZXN0cm95KCk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMudG9vbHRpcFJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvcHBlckluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmPy5kZXRhY2goKTtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWY/LmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLmNyZWF0ZVRvb2x0aXBFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgdGhpcy50b29sdGlwSWQgPSB0aGlzLmdldFVJRCgndG9vbHRpcCcpO1xuICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5pZCA9IHRoaXMudG9vbHRpcElkO1xuICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jb250ZW50ID0gdGhpcy5jb250ZW50O1xuXG4gICAgdGhpcy50b29sdGlwID0gdGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRvb2x0aXAsICdkLW5vbmUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudG9vbHRpcCwgJ2ZhZGUnKTtcblxuICAgIHRoaXMucG9wcGVySW5zdGFuY2U/LmRlc3Ryb3koKTtcblxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5pbnNlcnQodGhpcy50b29sdGlwUmVmLmhvc3RWaWV3KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy50b29sdGlwKTtcblxuICAgIHRoaXMucG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXIoXG4gICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnRvb2x0aXAsXG4gICAgICB7IC4uLnRoaXMucG9wcGVyT3B0aW9ucyB9XG4gICAgKTtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwRWxlbWVudCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudG9vbHRpcCwgJ2Qtbm9uZScpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS52aXNpYmxlID0gdGhpcy52aXNpYmxlO1xuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAxMDApO1xuXG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcElkID0gJyc7XG4gICAgaWYgKCF0aGlzLnRvb2x0aXBSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuaWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZj8uZGV0YWNoKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxufVxuIl19