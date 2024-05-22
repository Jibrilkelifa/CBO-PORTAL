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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconSetModule, deps: [{ token: IconSetModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.1", ngImport: i0, type: IconSetModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconSetModule, providers: [IconSetService] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconSetModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [IconSetService]
                }]
        }], ctorParameters: () => [{ type: IconSetModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWljb25zLWFuZ3VsYXIvc3JjL2xpYi9pY29uLXNldC9pY29uLXNldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBS3BELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW9DLFlBQTRCO1FBQzlELElBQUksWUFBWSxFQUFFLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FDYix5RUFBeUUsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTthQUM1QjtTQUNGLENBQUM7SUFDSixDQUFDOzhHQWZVLGFBQWE7K0dBQWIsYUFBYTsrR0FBYixhQUFhLGFBRmIsQ0FBQyxjQUFjLENBQUM7OzJGQUVoQixhQUFhO2tCQUh6QixRQUFRO21CQUFDO29CQUNSLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDNUI7OzBCQUVjLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEljb25TZXRTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLXNldC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbSWNvblNldFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEljb25TZXRNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBJY29uU2V0TW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ29yZVVJIEljb25TZXRNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEljb25TZXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEljb25TZXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBJY29uU2V0U2VydmljZSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19