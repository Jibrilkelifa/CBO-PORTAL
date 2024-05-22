import { Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import merge from 'lodash-es/merge';
import { Chart, registerables } from 'chart.js';
import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';
import * as i0 from "@angular/core";
Chart.register(...registerables);
let nextId = 0;
export class ChartjsComponent {
    set height(value) {
        this._height = coerceNumberProperty(value);
    }
    get height() {
        return this._height;
    }
    set redraw(value) {
        this._redraw = coerceBooleanProperty(value);
    }
    get redraw() {
        return this._redraw;
    }
    set width(value) {
        this._width = coerceNumberProperty(value);
    }
    get width() {
        return this._width;
    }
    get hostClasses() {
        return {
            'chart-wrapper': this.wrapper
        };
    }
    constructor(elementRef, ngZone, renderer) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.customTooltips = true;
        this.id = `c-chartjs-${nextId++}`;
        this.plugins = [];
        this._redraw = false;
        this.type = 'bar';
        this.wrapper = true;
        this.getDatasetAtEvent = new EventEmitter();
        this.getElementAtEvent = new EventEmitter();
        this.getElementsAtEvent = new EventEmitter();
    }
    ngAfterViewInit() {
        this.chartRender();
        // this.chartUpdate();
    }
    ngOnChanges(changes) {
        if (changes['data'] && !changes['data'].firstChange) {
            this.chartUpdate();
        }
    }
    ngOnDestroy() {
        this.chartDestroy();
    }
    handleOnClick($event) {
        if (!this.chart)
            return;
        const datasetAtEvent = this.chart.getElementsAtEventForMode($event, 'dataset', { intersect: true }, false);
        this.getDatasetAtEvent.emit(datasetAtEvent);
        const elementAtEvent = this.chart.getElementsAtEventForMode($event, 'nearest', { intersect: true }, false);
        this.getElementAtEvent.emit(elementAtEvent);
        const elementsAtEvent = this.chart.getElementsAtEventForMode($event, 'index', { intersect: true }, false);
        this.getElementsAtEvent.emit(elementsAtEvent);
    }
    chartDestroy() {
        this.chart?.destroy();
    }
    chartRender() {
        if (!this.canvasElement)
            return;
        const ctx = this.canvasElement.nativeElement.getContext('2d');
        this.ngZone.runOutsideAngular(() => {
            const config = this.chartConfig();
            if (config) {
                setTimeout(() => {
                    this.chart = new Chart(ctx, config);
                    this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'block');
                });
            }
        });
    }
    chartUpdate() {
        if (!this.chart)
            return;
        if (this.redraw) {
            this.chartDestroy();
            setTimeout(() => {
                this.chartRender();
            });
            return;
        }
        const config = this.chartConfig();
        if (this.options) {
            // todo
            // @ts-ignore
            Object.assign(this.chart.options, config.options);
        }
        if (!this.chart.config.data) {
            this.chart.config.data = { ...config.data };
            this.chartUpdateOutsideAngular();
        }
        if (this.chart) {
            // todo
            // @ts-ignore
            Object.assign(this.chart.config.options, config.options);
            // todo
            // @ts-ignore
            Object.assign(this.chart.config.plugins, config.plugins);
            Object.assign(this.chart.config.data, config.data);
        }
        this.chartUpdateOutsideAngular();
    }
    chartUpdateOutsideAngular() {
        setTimeout(() => {
            this.ngZone.runOutsideAngular(() => {
                this.chart?.update();
            });
        });
    }
    chartToBase64Image() {
        return this.chart?.toBase64Image();
    }
    chartDataConfig() {
        return {
            labels: this.data?.labels ?? [],
            datasets: this.data?.datasets ?? []
        };
    }
    chartOptions() {
        return this.options;
    }
    chartConfig() {
        this.chartCustomTooltips();
        return {
            data: this.chartDataConfig(),
            options: this.chartOptions(),
            plugins: this.plugins,
            type: this.type
        };
    }
    chartCustomTooltips() {
        if (this.customTooltips) {
            const options = this.options;
            // @ts-ignore
            const plugins = this.options?.plugins;
            // @ts-ignore
            const tooltip = this.options?.plugins?.tooltip;
            this.options = merge({
                ...options,
                plugins: {
                    ...plugins,
                    tooltip: {
                        ...tooltip,
                        enabled: false,
                        mode: 'index',
                        position: 'nearest',
                        external: cuiCustomTooltips
                    }
                }
            });
        }
    }
    ;
}
ChartjsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ChartjsComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
ChartjsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: ChartjsComponent, selector: "c-chart", inputs: { customTooltips: "customTooltips", data: "data", height: "height", id: "id", options: "options", plugins: "plugins", redraw: "redraw", type: "type", width: "width", wrapper: "wrapper" }, outputs: { getDatasetAtEvent: "getDatasetAtEvent", getElementAtEvent: "getElementAtEvent", getElementsAtEvent: "getElementsAtEvent" }, host: { properties: { "style.height.px": "this.height", "style.width.px": "this.width", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "canvasElement", first: true, predicate: ["canvasElement"], descendants: true }], exportAs: ["cChart"], usesOnChanges: true, ngImport: i0, template: "<canvas\n  #canvasElement\n  (click)=\"handleOnClick($event)\"\n  [height]=\"height\"\n  [id]=\"id\"\n  [width]=\"width\"\n  role=\"img\"\n  style=\"display: none;\"\n>\n  <ng-content></ng-content>\n</canvas>\n", styles: [":host.chart-wrapper{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ChartjsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-chart', exportAs: 'cChart', template: "<canvas\n  #canvasElement\n  (click)=\"handleOnClick($event)\"\n  [height]=\"height\"\n  [id]=\"id\"\n  [width]=\"width\"\n  role=\"img\"\n  style=\"display: none;\"\n>\n  <ng-content></ng-content>\n</canvas>\n", styles: [":host.chart-wrapper{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.Renderer2 }]; }, propDecorators: { customTooltips: [{
                type: Input
            }], data: [{
                type: Input
            }], height: [{
                type: HostBinding,
                args: ['style.height.px']
            }, {
                type: Input
            }], id: [{
                type: Input
            }], options: [{
                type: Input
            }], plugins: [{
                type: Input
            }], redraw: [{
                type: Input
            }], type: [{
                type: Input
            }], width: [{
                type: HostBinding,
                args: ['style.width.px']
            }, {
                type: Input
            }], wrapper: [{
                type: Input
            }], getDatasetAtEvent: [{
                type: Output
            }], getElementAtEvent: [{
                type: Output
            }], getElementsAtEvent: [{
                type: Output
            }], canvasElement: [{
                type: ViewChild,
                args: ['canvasElement']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRqcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci1jaGFydGpzL3NyYy9saWIvY2hhcnRqcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci1jaGFydGpzL3NyYy9saWIvY2hhcnRqcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUlMLE1BQU0sRUFHTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxvQkFBb0IsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRS9HLE9BQU8sS0FBSyxNQUFNLGlCQUFpQixDQUFDO0FBRXBDLE9BQU8sRUFBRSxLQUFLLEVBQWlFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsY0FBYyxJQUFJLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXRFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztBQUVqQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFRZixNQUFNLE9BQU8sZ0JBQWdCO0lBUzNCLElBRUksTUFBTSxDQUFDLEtBQXlCO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBUUQsSUFDSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUks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QkFBaUI7c0JBQTFCLE1BQU07Z0JBQ0csaUJBQWlCO3NCQUExQixNQUFNO2dCQUNHLGtCQUFrQjtzQkFBM0IsTUFBTTtnQkFFcUIsYUFBYTtzQkFBeEMsU0FBUzt1QkFBQyxlQUFlO2dCQUt0QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHksIE51bWJlcklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC1lcy9tZXJnZSc7XG5cbmltcG9ydCB7IENoYXJ0LCBDaGFydENvbmZpZ3VyYXRpb24sIENoYXJ0T3B0aW9ucywgQ2hhcnRUeXBlLCBEZWZhdWx0RGF0YVBvaW50LCByZWdpc3RlcmFibGVzIH0gZnJvbSAnY2hhcnQuanMnO1xuaW1wb3J0IHsgY3VzdG9tVG9vbHRpcHMgYXMgY3VpQ3VzdG9tVG9vbHRpcHMgfSBmcm9tICdAY29yZXVpL2NoYXJ0anMnO1xuXG5DaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnRqcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0anMuY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjQ2hhcnQnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0anNDb21wb25lbnQ8VFR5cGUgZXh0ZW5kcyBDaGFydFR5cGUgPSBDaGFydFR5cGUsIFREYXRhID0gRGVmYXVsdERhdGFQb2ludDxUVHlwZT4sIFRMYWJlbCA9IHVua25vd24+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVkcmF3OiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgY3VzdG9tVG9vbHRpcHMgPSB0cnVlO1xuICBASW5wdXQoKSBkYXRhPzogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPlsnZGF0YSddO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgQElucHV0KClcbiAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KCkgaWQgPSBgYy1jaGFydGpzLSR7bmV4dElkKyt9YDtcbiAgQElucHV0KCkgb3B0aW9ucz86IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ29wdGlvbnMnXTtcbiAgQElucHV0KCkgcGx1Z2luczogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPlsncGx1Z2lucyddID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IHJlZHJhdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlZHJhdyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgcmVkcmF3KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZWRyYXc7XG4gIH1cblxuICBwcml2YXRlIF9yZWRyYXcgPSBmYWxzZTtcblxuICBASW5wdXQoKSB0eXBlOiBDaGFydENvbmZpZ3VyYXRpb248VFR5cGUsIFREYXRhLCBUTGFiZWw+Wyd0eXBlJ10gPSAnYmFyJyBhcyBUVHlwZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgQElucHV0KClcbiAgc2V0IHdpZHRoKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl93aWR0aCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpIHdyYXBwZXIgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBnZXREYXRhc2V0QXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZ2V0RWxlbWVudEF0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGdldEVsZW1lbnRzQXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhbnZhc0VsZW1lbnQnKSBjYW52YXNFbGVtZW50ITogRWxlbWVudFJlZjtcblxuICBjaGFydCE6IENoYXJ0PFRUeXBlLCBURGF0YSwgVExhYmVsPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnY2hhcnQtd3JhcHBlcic6IHRoaXMud3JhcHBlclxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYXJ0UmVuZGVyKCk7XG4gICAgLy8gdGhpcy5jaGFydFVwZGF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydkYXRhJ10gJiYgIWNoYW5nZXNbJ2RhdGEnXS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jaGFydFVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhcnREZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlT25DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHJldHVybjtcblxuICAgIGNvbnN0IGRhdGFzZXRBdEV2ZW50ID0gdGhpcy5jaGFydC5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKCRldmVudCwgJ2RhdGFzZXQnLCB7IGludGVyc2VjdDogdHJ1ZSB9LCBmYWxzZSk7XG4gICAgdGhpcy5nZXREYXRhc2V0QXRFdmVudC5lbWl0KGRhdGFzZXRBdEV2ZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnRBdEV2ZW50ID0gdGhpcy5jaGFydC5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKCRldmVudCwgJ25lYXJlc3QnLCB7IGludGVyc2VjdDogdHJ1ZSB9LCBmYWxzZSk7XG4gICAgdGhpcy5nZXRFbGVtZW50QXRFdmVudC5lbWl0KGVsZW1lbnRBdEV2ZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnRzQXRFdmVudCA9IHRoaXMuY2hhcnQuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZSgkZXZlbnQsICdpbmRleCcsIHsgaW50ZXJzZWN0OiB0cnVlIH0sIGZhbHNlKTtcbiAgICB0aGlzLmdldEVsZW1lbnRzQXRFdmVudC5lbWl0KGVsZW1lbnRzQXRFdmVudCk7XG4gIH1cblxuICBwdWJsaWMgY2hhcnREZXN0cm95KCkge1xuICAgIHRoaXMuY2hhcnQ/LmRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFydFJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSB0aGlzLmNhbnZhc0VsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jaGFydENvbmZpZygpO1xuICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwgY29uZmlnKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2FudmFzRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoYXJ0VXBkYXRlKCkge1xuICAgIGlmICghdGhpcy5jaGFydCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMucmVkcmF3KSB7XG4gICAgICB0aGlzLmNoYXJ0RGVzdHJveSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnRSZW5kZXIoKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY2hhcnRDb25maWcoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIC8vIHRvZG9cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jaGFydC5vcHRpb25zLCBjb25maWcub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNoYXJ0LmNvbmZpZy5kYXRhKSB7XG4gICAgICB0aGlzLmNoYXJ0LmNvbmZpZy5kYXRhID0geyAuLi5jb25maWcuZGF0YSB9O1xuICAgICAgdGhpcy5jaGFydFVwZGF0ZU91dHNpZGVBbmd1bGFyKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIC8vIHRvZG9cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jaGFydC5jb25maWcub3B0aW9ucywgY29uZmlnLm9wdGlvbnMpO1xuICAgICAgLy8gdG9kb1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNoYXJ0LmNvbmZpZy5wbHVnaW5zLCBjb25maWcucGx1Z2lucyk7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuY2hhcnQuY29uZmlnLmRhdGEsIGNvbmZpZy5kYXRhKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0VXBkYXRlT3V0c2lkZUFuZ3VsYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhcnRVcGRhdGVPdXRzaWRlQW5ndWxhcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFydD8udXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFydFRvQmFzZTY0SW1hZ2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5jaGFydD8udG9CYXNlNjRJbWFnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFydERhdGFDb25maWcoKTogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPlsnZGF0YSddIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWxzOiB0aGlzLmRhdGE/LmxhYmVscyA/PyBbXSxcbiAgICAgIGRhdGFzZXRzOiB0aGlzLmRhdGE/LmRhdGFzZXRzID8/IFtdXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhcnRPcHRpb25zKCk6IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ29wdGlvbnMnXSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgY2hhcnRDb25maWcoKTogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPiB7XG4gICAgdGhpcy5jaGFydEN1c3RvbVRvb2x0aXBzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHRoaXMuY2hhcnREYXRhQ29uZmlnKCksXG4gICAgICBvcHRpb25zOiB0aGlzLmNoYXJ0T3B0aW9ucygpLFxuICAgICAgcGx1Z2luczogdGhpcy5wbHVnaW5zLFxuICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhcnRDdXN0b21Ub29sdGlwcygpIHtcbiAgICBpZiAodGhpcy5jdXN0b21Ub29sdGlwcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHBsdWdpbnMgPSB0aGlzLm9wdGlvbnM/LnBsdWdpbnM7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5vcHRpb25zPy5wbHVnaW5zPy50b29sdGlwO1xuICAgICAgdGhpcy5vcHRpb25zID0gbWVyZ2Uoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgLi4ucGx1Z2lucyxcbiAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAuLi50b29sdGlwLFxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBtb2RlOiAnaW5kZXgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICduZWFyZXN0JyxcbiAgICAgICAgICAgIGV4dGVybmFsOiBjdWlDdXN0b21Ub29sdGlwc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIiwiPGNhbnZhc1xuICAjY2FudmFzRWxlbWVudFxuICAoY2xpY2spPVwiaGFuZGxlT25DbGljaygkZXZlbnQpXCJcbiAgW2hlaWdodF09XCJoZWlnaHRcIlxuICBbaWRdPVwiaWRcIlxuICBbd2lkdGhdPVwid2lkdGhcIlxuICByb2xlPVwiaW1nXCJcbiAgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvY2FudmFzPlxuIl19