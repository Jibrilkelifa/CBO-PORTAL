import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// CoreUI Breadcrumb Component
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbRouterComponent } from './breadcrumb-router/breadcrumb-router.component';
import { BreadcrumbRouterService } from './breadcrumb-router/breadcrumb-router.service';
import { SharedModule } from '../shared';
import * as i0 from "@angular/core";
export class BreadcrumbModule {
}
BreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, declarations: [BreadcrumbRouterComponent,
        BreadcrumbItemComponent,
        BreadcrumbComponent], imports: [CommonModule, RouterModule, SharedModule], exports: [BreadcrumbComponent,
        BreadcrumbItemComponent,
        BreadcrumbRouterComponent] });
BreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, providers: [BreadcrumbRouterService], imports: [CommonModule, RouterModule, SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, SharedModule],
                    exports: [
                        BreadcrumbComponent,
                        BreadcrumbItemComponent,
                        BreadcrumbRouterComponent,
                    ],
                    declarations: [
                        BreadcrumbRouterComponent,
                        BreadcrumbItemComponent,
                        BreadcrumbComponent,
                    ],
                    providers: [BreadcrumbRouterService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLDhCQUE4QjtBQUM5QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQWdCekMsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQU56Qix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG1CQUFtQixhQVRYLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxhQUVoRCxtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHlCQUF5Qjs4R0FTaEIsZ0JBQWdCLGFBRmhCLENBQUMsdUJBQXVCLENBQUMsWUFYMUIsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZOzJGQWF2QyxnQkFBZ0I7a0JBZDVCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ25ELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3FCQUMxQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3dCQUN6Qix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBDb3JlVUkgQnJlYWRjcnVtYiBDb21wb25lbnRcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWItaXRlbS9icmVhZGNydW1iLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJSb3V0ZXJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWItcm91dGVyL2JyZWFkY3J1bWItcm91dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iUm91dGVyU2VydmljZSB9IGZyb20gJy4vYnJlYWRjcnVtYi1yb3V0ZXIvYnJlYWRjcnVtYi1yb3V0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIFNoYXJlZE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJSb3V0ZXJDb21wb25lbnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJyZWFkY3J1bWJSb3V0ZXJDb21wb25lbnQsXG4gICAgQnJlYWRjcnVtYkl0ZW1Db21wb25lbnQsXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbQnJlYWRjcnVtYlJvdXRlclNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iTW9kdWxlIHsgfVxuIl19