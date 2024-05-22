import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IconSetService } from './icon-set.service';
import * as i0 from "@angular/core";
export class IconSetModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreUI IconSetModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: IconSetModule,
            providers: [
                { provide: IconSetService }
            ]
        };
    }
}
IconSetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconSetModule, deps: [{ token: IconSetModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
IconSetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.6", ngImport: i0, type: IconSetModule });
IconSetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconSetModule, providers: [IconSetService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconSetModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [IconSetService]
                }]
        }], ctorParameters: function () { return [{ type: IconSetModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWljb25zLWFuZ3VsYXIvc3JjL2xpYi9pY29uLXNldC9pY29uLXNldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBS3BELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW9DLFlBQTRCO1FBQzlELElBQUksWUFBWSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQ2IseUVBQXlFLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO2FBQzVCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzBHQWZVLGFBQWE7MkdBQWIsYUFBYTsyR0FBYixhQUFhLGFBRmIsQ0FBQyxjQUFjLENBQUM7MkZBRWhCLGFBQWE7a0JBSHpCLFFBQVE7bUJBQUM7b0JBQ1IsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUM1Qjs7MEJBRWMsUUFBUTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSWNvblNldFNlcnZpY2UgfSBmcm9tICcuL2ljb24tc2V0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtJY29uU2V0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSWNvblNldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IEljb25TZXRNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDb3JlVUkgSWNvblNldE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8SWNvblNldE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSWNvblNldE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEljb25TZXRTZXJ2aWNlIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=