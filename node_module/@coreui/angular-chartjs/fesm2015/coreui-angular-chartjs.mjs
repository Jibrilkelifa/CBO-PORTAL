import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, HostBinding, Output, ViewChild, NgModule } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import merge from 'lodash-es/merge';
import { Chart, registerables } from 'chart.js';
import { customTooltips } from '@coreui/chartjs';

Chart.register(...registerables);
let nextId = 0;
class ChartjsComponent {
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
        var _a;
        (_a = this.chart) === null || _a === void 0 ? void 0 : _a.destroy();
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
            this.chart.config.data = Object.assign({}, config.data);
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
                var _a;
                (_a = this.chart) === null || _a === void 0 ? void 0 : _a.update();
            });
        });
    }
    chartToBase64Image() {
        var _a;
        return (_a = this.chart) === null || _a === void 0 ? void 0 : _a.toBase64Image();
    }
    chartDataConfig() {
        var _a, _b, _c, _d;
        return {
            labels: (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.labels) !== null && _b !== void 0 ? _b : [],
            datasets: (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.datasets) !== null && _d !== void 0 ? _d : []
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
        var _a, _b, _c;
        if (this.customTooltips) {
            const options = this.options;
            // @ts-ignore
            const plugins = (_a = this.options) === null || _a === void 0 ? void 0 : _a.plugins;
            // @ts-ignore
            const tooltip = (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.plugins) === null || _c === void 0 ? void 0 : _c.tooltip;
            this.options = merge(Object.assign(Object.assign({}, options), { plugins: Object.assign(Object.assign({}, plugins), { tooltip: Object.assign(Object.assign({}, tooltip), { enabled: false, mode: 'index', position: 'nearest', external: customTooltips }) }) }));
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

class ChartjsModule {
}
ChartjsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ChartjsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartjsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ChartjsModule, declarations: [ChartjsComponent], exports: [ChartjsComponent] });
ChartjsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ChartjsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ChartjsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ChartjsComponent
                    ],
                    exports: [
                        ChartjsComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of coreui-angular-chartjs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartjsComponent, ChartjsModule };
//# sourceMappingURL=coreui-angular-chartjs.mjs.map
