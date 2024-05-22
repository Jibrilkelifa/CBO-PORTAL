import { NgZone, OnInit, OnDestroy, DoCheck, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PerfectScrollbarConfigInterface } from './perfect-scrollbar.interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class PerfectScrollbarComponent implements OnInit, OnDestroy, DoCheck {
    private zone;
    private cdRef;
    private platformId;
    states: any;
    indicatorX: boolean;
    indicatorY: boolean;
    interaction: boolean;
    private scrollPositionX;
    private scrollPositionY;
    private scrollDirectionX;
    private scrollDirectionY;
    private usePropagationX;
    private usePropagationY;
    private allowPropagationX;
    private allowPropagationY;
    private stateTimeout;
    private readonly ngDestroy;
    private readonly stateUpdate;
    disabled: boolean;
    usePSClass: boolean;
    autoPropagation: boolean;
    scrollIndicators: boolean;
    config?: PerfectScrollbarConfigInterface;
    psScrollY: EventEmitter<any>;
    psScrollX: EventEmitter<any>;
    psScrollUp: EventEmitter<any>;
    psScrollDown: EventEmitter<any>;
    psScrollLeft: EventEmitter<any>;
    psScrollRight: EventEmitter<any>;
    psYReachEnd: EventEmitter<any>;
    psYReachStart: EventEmitter<any>;
    psXReachEnd: EventEmitter<any>;
    psXReachStart: EventEmitter<any>;
    directiveRef?: PerfectScrollbarDirective;
    constructor(zone: NgZone, cdRef: ChangeDetectorRef, platformId: Object);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    private checkPropagation;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PerfectScrollbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<PerfectScrollbarComponent, "perfect-scrollbar", ["ngxPerfectScrollbar"], { "disabled": "disabled"; "usePSClass": "usePSClass"; "autoPropagation": "autoPropagation"; "scrollIndicators": "scrollIndicators"; "config": "config"; }, { "psScrollY": "psScrollY"; "psScrollX": "psScrollX"; "psScrollUp": "psScrollUp"; "psScrollDown": "psScrollDown"; "psScrollLeft": "psScrollLeft"; "psScrollRight": "psScrollRight"; "psYReachEnd": "psYReachEnd"; "psYReachStart": "psYReachStart"; "psXReachEnd": "psXReachEnd"; "psXReachStart": "psXReachStart"; }, never, ["*"], false, never>;
}

//# sourceMappingURL=perfect-scrollbar.component.d.ts.map