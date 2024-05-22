import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';
import { TabService } from './tab.service';
import { TabContentRefDirective } from './tab-content-ref.directive';
import * as i0 from "@angular/core";
export class TabsModule {
}
TabsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, declarations: [TabContentComponent,
        TabPaneComponent,
        TabContentRefDirective], imports: [CommonModule], exports: [TabContentComponent,
        TabPaneComponent,
        TabContentRefDirective] });
TabsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, providers: [
        TabService
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TabContentComponent,
                        TabPaneComponent,
                        TabContentRefDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TabContentComponent,
                        TabPaneComponent,
                        TabContentRefDirective
                    ],
                    providers: [
                        TabService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RhYnMvdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFvQnJFLE1BQU0sT0FBTyxVQUFVOzt1R0FBVixVQUFVO3dHQUFWLFVBQVUsaUJBaEJuQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLHNCQUFzQixhQUd0QixZQUFZLGFBR1osbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixzQkFBc0I7d0dBTWIsVUFBVSxhQUpWO1FBQ1QsVUFBVTtLQUNYLFlBVEMsWUFBWTsyRkFXSCxVQUFVO2tCQWxCdEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxVQUFVO3FCQUNYO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUYWJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi90YWItY29udGVudC90YWItY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiUGFuZUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLXBhbmUvdGFiLXBhbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3RhYi5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYkNvbnRlbnRSZWZEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi1jb250ZW50LXJlZi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJDb250ZW50Q29tcG9uZW50LFxuICAgIFRhYlBhbmVDb21wb25lbnQsXG4gICAgVGFiQ29udGVudFJlZkRpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJDb250ZW50Q29tcG9uZW50LFxuICAgIFRhYlBhbmVDb21wb25lbnQsXG4gICAgVGFiQ29udGVudFJlZkRpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBUYWJTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7IH1cbiJdfQ==