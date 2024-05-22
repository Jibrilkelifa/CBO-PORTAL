import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconModule } from '@coreui/icons-angular';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
import { SidebarToggleDirective } from './sidebar-toggle/sidebar-toggle.directive';
import { SidebarTogglerComponent } from './sidebar-toggler/sidebar-toggler.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarNavGroupService } from './sidebar-nav/sidebar-nav-group.service';
import { SharedModule } from '../shared';
import { SidebarNavBadgePipe, SidebarNavComponent, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavHelper, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent } from './sidebar-nav';
import * as i0 from "@angular/core";
export class SidebarModule {
}
SidebarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SidebarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, declarations: [SidebarComponent,
        SidebarTogglerComponent,
        SidebarToggleDirective,
        SidebarBrandComponent,
        SidebarNavBadgePipe,
        SidebarNavComponent,
        SidebarNavDividerComponent,
        SidebarNavGroupComponent,
        // SidebarNavGroupToggleDirective,
        SidebarNavIconPipe,
        SidebarNavItemClassPipe,
        SidebarNavLabelComponent,
        SidebarNavLinkComponent,
        SidebarNavLinkContentComponent,
        SidebarNavLinkPipe,
        SidebarNavTitleComponent,
        SidebarHeaderComponent,
        SidebarFooterComponent], imports: [CommonModule,
        RouterModule,
        SharedModule,
        IconModule], exports: [SidebarComponent,
        SidebarToggleDirective,
        SidebarTogglerComponent,
        SidebarBrandComponent,
        SidebarNavComponent,
        SidebarHeaderComponent,
        SidebarFooterComponent] });
SidebarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, providers: [
        SidebarService,
        SidebarNavHelper,
        SidebarNavGroupService
    ], imports: [CommonModule,
        RouterModule,
        SharedModule,
        IconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SidebarComponent,
                        SidebarTogglerComponent,
                        SidebarToggleDirective,
                        SidebarBrandComponent,
                        SidebarNavBadgePipe,
                        SidebarNavComponent,
                        SidebarNavDividerComponent,
                        SidebarNavGroupComponent,
                        // SidebarNavGroupToggleDirective,
                        SidebarNavIconPipe,
                        SidebarNavItemClassPipe,
                        SidebarNavLabelComponent,
                        SidebarNavLinkComponent,
                        SidebarNavLinkContentComponent,
                        SidebarNavLinkPipe,
                        SidebarNavTitleComponent,
                        SidebarHeaderComponent,
                        SidebarFooterComponent,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule,
                        SharedModule,
                        IconModule
                    ],
                    exports: [
                        SidebarComponent,
                        SidebarToggleDirective,
                        SidebarTogglerComponent,
                        SidebarBrandComponent,
                        SidebarNavComponent,
                        SidebarHeaderComponent,
                        SidebarFooterComponent,
                    ],
                    providers: [
                        SidebarService,
                        SidebarNavHelper,
                        SidebarNavGroupService
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NpZGViYXIvc2lkZWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV6QyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQiwwQkFBMEIsRUFDMUIsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsOEJBQThCLEVBQzlCLGtCQUFrQixFQUNsQix3QkFBd0IsRUFDekIsTUFBTSxlQUFlLENBQUM7O0FBOEN2QixNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQXhDdEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QixrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixzQkFBc0IsYUFHdEIsWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osVUFBVSxhQUdWLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHNCQUFzQjsyR0FRYixhQUFhLGFBTmI7UUFDVCxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtLQUN2QixZQWxCQyxZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixVQUFVOzJGQWlCRCxhQUFhO2tCQTFDekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLGtDQUFrQzt3QkFDbEMsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2Qiw4QkFBOEI7d0JBQzlCLGtCQUFrQjt3QkFDbEIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnQGNvcmV1aS9pY29ucy1hbmd1bGFyJztcblxuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJCcmFuZENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1icmFuZC9zaWRlYmFyLWJyYW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9zaWRlYmFyLXRvZ2dsZS9zaWRlYmFyLXRvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2lkZWJhclRvZ2dsZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItdG9nZ2xlci9zaWRlYmFyLXRvZ2dsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLWZvb3Rlci9zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkdyb3VwU2VydmljZSB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtZ3JvdXAuc2VydmljZSc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7XG4gIFNpZGViYXJOYXZCYWRnZVBpcGUsXG4gIFNpZGViYXJOYXZDb21wb25lbnQsXG4gIFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICBTaWRlYmFyTmF2R3JvdXBDb21wb25lbnQsXG4gIFNpZGViYXJOYXZIZWxwZXIsXG4gIFNpZGViYXJOYXZJY29uUGlwZSxcbiAgU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGUsXG4gIFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCxcbiAgU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gIFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCxcbiAgU2lkZWJhck5hdkxpbmtQaXBlLFxuICBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnRcbn0gZnJvbSAnLi9zaWRlYmFyLW5hdic7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaWRlYmFyQ29tcG9uZW50LFxuICAgIFNpZGViYXJUb2dnbGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXG4gICAgU2lkZWJhckJyYW5kQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZCYWRnZVBpcGUsXG4gICAgU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2R3JvdXBDb21wb25lbnQsXG4gICAgLy8gU2lkZWJhck5hdkdyb3VwVG9nZ2xlRGlyZWN0aXZlLFxuICAgIFNpZGViYXJOYXZJY29uUGlwZSxcbiAgICBTaWRlYmFyTmF2SXRlbUNsYXNzUGlwZSxcbiAgICBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkxpbmtDb250ZW50Q29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZMaW5rUGlwZSxcbiAgICBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgSWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2lkZWJhckNvbXBvbmVudCxcbiAgICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICAgIFNpZGViYXJUb2dnbGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJCcmFuZENvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2lkZWJhclNlcnZpY2UsXG4gICAgU2lkZWJhck5hdkhlbHBlcixcbiAgICBTaWRlYmFyTmF2R3JvdXBTZXJ2aWNlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJNb2R1bGUgeyB9XG4iXX0=