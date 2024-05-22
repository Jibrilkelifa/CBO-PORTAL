import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { Chart, ChartConfiguration, ChartType, DefaultDataPoint } from 'chart.js';
import * as i0 from "@angular/core";
export declare class ChartjsComponent<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> implements AfterViewInit, OnDestroy, OnChanges {
    private elementRef;
    private ngZone;
    private renderer;
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_width: NumberInput;
    static ngAcceptInputType_redraw: BooleanInput;
    customTooltips: boolean;
    data?: ChartConfiguration<TType, TData, TLabel>['data'];
    set height(value: number | undefined);
    get height(): number | undefined;
    private _height;
    id: string;
    options?: ChartConfiguration<TType, TData, TLabel>['options'];
    plugins: ChartConfiguration<TType, TData, TLabel>['plugins'];
    set redraw(value: boolean);
    get redraw(): boolean;
    private _redraw;
    type: ChartConfiguration<TType, TData, TLabel>['type'];
    set width(value: number | undefined);
    get width(): number | undefined;
    private _width;
    wrapper: boolean;
    getDatasetAtEvent: EventEmitter<any>;
    getElementAtEvent: EventEmitter<any>;
    getElementsAtEvent: EventEmitter<any>;
    canvasElement: ElementRef;
    chart: Chart<TType, TData, TLabel>;
    get hostClasses(): {
        'chart-wrapper': boolean;
    };
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    handleOnClick($event: MouseEvent): void;
    chartDestroy(): void;
    chartRender(): void;
    chartUpdate(): void;
    private chartUpdateOutsideAngular;
    chartToBase64Image(): string | undefined;
    private chartDataConfig;
    private chartOptions;
    private chartConfig;
    private chartCustomTooltips;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartjsComponent<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartjsComponent<any, any, any>, "c-chart", ["cChart"], { "customTooltips": "customTooltips"; "data": "data"; "height": "height"; "id": "id"; "options": "options"; "plugins": "plugins"; "redraw": "redraw"; "type": "type"; "width": "width"; "wrapper": "wrapper"; }, { "getDatasetAtEvent": "getDatasetAtEvent"; "getElementAtEvent": "getElementAtEvent"; "getElementsAtEvent": "getElementsAtEvent"; }, never, ["*"], false, never>;
}
