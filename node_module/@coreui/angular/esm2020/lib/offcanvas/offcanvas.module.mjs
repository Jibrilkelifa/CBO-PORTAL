import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { OffcanvasBodyComponent } from './offcanvas-body/offcanvas-body.component';
import { OffcanvasHeaderComponent } from './offcanvas-header/offcanvas-header.component';
import { OffcanvasTitleDirective } from './offcanvas-title/offcanvas-title.directive';
import { OffcanvasToggleDirective } from './offcanvas-toggle/offcanvas-toggle.directive';
import { OffcanvasService } from './offcanvas.service';
import { BackdropService } from '../backdrop/backdrop.service';
import * as i0 from "@angular/core";
export class OffcanvasModule {
}
OffcanvasModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OffcanvasModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, declarations: [OffcanvasComponent,
        OffcanvasBodyComponent,
        OffcanvasHeaderComponent,
        OffcanvasTitleDirective,
        OffcanvasToggleDirective], imports: [CommonModule,
        A11yModule], exports: [OffcanvasComponent,
        OffcanvasBodyComponent,
        OffcanvasHeaderComponent,
        OffcanvasTitleDirective,
        OffcanvasToggleDirective] });
OffcanvasModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, providers: [
        OffcanvasService,
        BackdropService
    ], imports: [CommonModule,
        A11yModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: OffcanvasModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OffcanvasComponent,
                        OffcanvasBodyComponent,
                        OffcanvasHeaderComponent,
                        OffcanvasTitleDirective,
                        OffcanvasToggleDirective
                    ],
                    exports: [
                        OffcanvasComponent,
                        OffcanvasBodyComponent,
                        OffcanvasHeaderComponent,
                        OffcanvasTitleDirective,
                        OffcanvasToggleDirective
                    ],
                    imports: [
                        CommonModule,
                        A11yModule
                    ],
                    providers: [
                        OffcanvasService,
                        BackdropService
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvb2ZmY2FudmFzL29mZmNhbnZhcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUEwQi9ELE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBdEJ4QixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsd0JBQXdCLGFBVXhCLFlBQVk7UUFDWixVQUFVLGFBUlYsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHdCQUF3Qjs2R0FXZixlQUFlLGFBTGY7UUFDVCxnQkFBZ0I7UUFDaEIsZUFBZTtLQUNoQixZQU5DLFlBQVk7UUFDWixVQUFVOzJGQU9ELGVBQWU7a0JBeEIzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3FCQUNYO29CQUNELFNBQVMsRUFBRTt3QkFDVCxnQkFBZ0I7d0JBQ2hCLGVBQWU7cUJBQ2hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5pbXBvcnQgeyBPZmZjYW52YXNDb21wb25lbnQgfSBmcm9tICcuL29mZmNhbnZhcy9vZmZjYW52YXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9mZmNhbnZhc0JvZHlDb21wb25lbnQgfSBmcm9tICcuL29mZmNhbnZhcy1ib2R5L29mZmNhbnZhcy1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPZmZjYW52YXNIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL29mZmNhbnZhcy1oZWFkZXIvb2ZmY2FudmFzLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2ZmY2FudmFzVGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuL29mZmNhbnZhcy10aXRsZS9vZmZjYW52YXMtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE9mZmNhbnZhc1RvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vb2ZmY2FudmFzLXRvZ2dsZS9vZmZjYW52YXMtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPZmZjYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi9vZmZjYW52YXMuc2VydmljZSc7XG5pbXBvcnQgeyBCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuLi9iYWNrZHJvcC9iYWNrZHJvcC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgT2ZmY2FudmFzQ29tcG9uZW50LFxuICAgIE9mZmNhbnZhc0JvZHlDb21wb25lbnQsXG4gICAgT2ZmY2FudmFzSGVhZGVyQ29tcG9uZW50LFxuICAgIE9mZmNhbnZhc1RpdGxlRGlyZWN0aXZlLFxuICAgIE9mZmNhbnZhc1RvZ2dsZURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgT2ZmY2FudmFzQ29tcG9uZW50LFxuICAgIE9mZmNhbnZhc0JvZHlDb21wb25lbnQsXG4gICAgT2ZmY2FudmFzSGVhZGVyQ29tcG9uZW50LFxuICAgIE9mZmNhbnZhc1RpdGxlRGlyZWN0aXZlLFxuICAgIE9mZmNhbnZhc1RvZ2dsZURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEExMXlNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgT2ZmY2FudmFzU2VydmljZSxcbiAgICBCYWNrZHJvcFNlcnZpY2VcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgT2ZmY2FudmFzTW9kdWxlIHsgfVxuIl19