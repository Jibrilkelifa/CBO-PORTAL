import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCaptionComponent } from './carousel-caption/carousel-caption.component';
import { CarouselControlComponent } from './carousel-control/carousel-control.component';
import { CarouselIndicatorsComponent } from './carousel-indicators/carousel-indicators.component';
import { CarouselInnerComponent } from './carousel-inner/carousel-inner.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselService } from './carousel.service';
import { CarouselState } from './carousel-state';
import { CarouselConfig } from './carousel.config';
import * as i0 from "@angular/core";
export class CarouselModule {
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, declarations: [CarouselComponent,
        CarouselCaptionComponent,
        CarouselControlComponent,
        CarouselIndicatorsComponent,
        CarouselInnerComponent,
        CarouselItemComponent], imports: [CommonModule], exports: [CarouselComponent,
        CarouselCaptionComponent,
        CarouselControlComponent,
        CarouselIndicatorsComponent,
        CarouselInnerComponent,
        CarouselItemComponent] });
CarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, providers: [CarouselService, CarouselState, CarouselConfig], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: CarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CarouselComponent,
                        CarouselCaptionComponent,
                        CarouselControlComponent,
                        CarouselIndicatorsComponent,
                        CarouselInnerComponent,
                        CarouselItemComponent,
                    ],
                    imports: [CommonModule],
                    providers: [CarouselService, CarouselState, CarouselConfig],
                    exports: [
                        CarouselComponent,
                        CarouselCaptionComponent,
                        CarouselControlComponent,
                        CarouselIndicatorsComponent,
                        CarouselInnerComponent,
                        CarouselItemComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQXNCbkQsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDckQsQ0FBQzs7MkdBSFUsY0FBYzs0R0FBZCxjQUFjLGlCQWxCdkIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixxQkFBcUIsYUFFYixZQUFZLGFBR3BCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIscUJBQXFCOzRHQUdaLGNBQWMsYUFWZCxDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFDLFlBRGpELFlBQVk7MkZBV1gsY0FBYztrQkFwQjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLDJCQUEyQjt3QkFDM0Isc0JBQXNCO3dCQUN0QixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7b0JBQzNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QiwyQkFBMkI7d0JBQzNCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3FCQUN0QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsQ2FwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtY2FwdGlvbi9jYXJvdXNlbC1jYXB0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWNvbnRyb2wvY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxJbmRpY2F0b3JzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1pbmRpY2F0b3JzL2Nhcm91c2VsLWluZGljYXRvcnMuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsSW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWlubmVyL2Nhcm91c2VsLWlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi9jYXJvdXNlbC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcm91c2VsU3RhdGUgfSBmcm9tICcuL2Nhcm91c2VsLXN0YXRlJztcbmltcG9ydCB7IENhcm91c2VsQ29uZmlnIH0gZnJvbSAnLi9jYXJvdXNlbC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXJvdXNlbENvbXBvbmVudCxcbiAgICBDYXJvdXNlbENhcHRpb25Db21wb25lbnQsXG4gICAgQ2Fyb3VzZWxDb250cm9sQ29tcG9uZW50LFxuICAgIENhcm91c2VsSW5kaWNhdG9yc0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbElubmVyQ29tcG9uZW50LFxuICAgIENhcm91c2VsSXRlbUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0Nhcm91c2VsU2VydmljZSwgQ2Fyb3VzZWxTdGF0ZSwgQ2Fyb3VzZWxDb25maWddLFxuICBleHBvcnRzOiBbXG4gICAgQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxDYXB0aW9uQ29tcG9uZW50LFxuICAgIENhcm91c2VsQ29udHJvbENvbXBvbmVudCxcbiAgICBDYXJvdXNlbEluZGljYXRvcnNDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxJbm5lckNvbXBvbmVudCxcbiAgICBDYXJvdXNlbEl0ZW1Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJvdXNlbE1vZHVsZT4ge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBDYXJvdXNlbE1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXX0=