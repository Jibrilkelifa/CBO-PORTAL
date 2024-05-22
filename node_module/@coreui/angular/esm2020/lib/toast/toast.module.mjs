import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button';
import { ToastComponent } from './toast/toast.component';
import { ToastHeaderComponent } from './toast-header/toast-header.component';
import { ToastBodyComponent } from './toast-body/toast-body.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterService } from './toaster/toaster.service';
import { ToasterHostDirective } from './toaster/toaster-host.directive';
import { ToastCloseDirective } from './toast-close.directive';
import * as i0 from "@angular/core";
export class ToastModule {
}
ToastModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToastModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, declarations: [ToastComponent,
        ToastHeaderComponent,
        ToastBodyComponent,
        ToasterComponent,
        ToasterHostDirective,
        ToastCloseDirective], imports: [CommonModule, ButtonModule], exports: [ToastComponent,
        ToastHeaderComponent,
        ToastBodyComponent,
        ToasterComponent,
        ToasterHostDirective,
        ToastCloseDirective] });
ToastModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, providers: [ToasterService], imports: [CommonModule, ButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ToastComponent,
                        ToastHeaderComponent,
                        ToastBodyComponent,
                        ToasterComponent,
                        ToasterHostDirective,
                        ToastCloseDirective
                    ],
                    imports: [CommonModule, ButtonModule],
                    providers: [ToasterService],
                    exports: [
                        ToastComponent,
                        ToastHeaderComponent,
                        ToastBodyComponent,
                        ToasterComponent,
                        ToasterHostDirective,
                        ToastCloseDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90b2FzdC90b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQXNCOUQsTUFBTSxPQUFPLFdBQVc7O3dHQUFYLFdBQVc7eUdBQVgsV0FBVyxpQkFsQnBCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsbUJBQW1CLGFBRVgsWUFBWSxFQUFFLFlBQVksYUFHbEMsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixtQkFBbUI7eUdBR1YsV0FBVyxhQVZYLENBQUMsY0FBYyxDQUFDLFlBRGpCLFlBQVksRUFBRSxZQUFZOzJGQVd6QixXQUFXO2tCQXBCdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztvQkFDckMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9hc3RIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LWhlYWRlci90b2FzdC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0Qm9keUNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QtYm9keS90b2FzdC1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdGVyL3RvYXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdGVyL3RvYXN0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUb2FzdGVySG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vdG9hc3Rlci90b2FzdGVyLWhvc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvYXN0Q2xvc2VEaXJlY3RpdmUgfSBmcm9tICcuL3RvYXN0LWNsb3NlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvYXN0Q29tcG9uZW50LFxuICAgIFRvYXN0SGVhZGVyQ29tcG9uZW50LFxuICAgIFRvYXN0Qm9keUNvbXBvbmVudCxcbiAgICBUb2FzdGVyQ29tcG9uZW50LFxuICAgIFRvYXN0ZXJIb3N0RGlyZWN0aXZlLFxuICAgIFRvYXN0Q2xvc2VEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQnV0dG9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbVG9hc3RlclNlcnZpY2VdLFxuICBleHBvcnRzOiBbXG4gICAgVG9hc3RDb21wb25lbnQsXG4gICAgVG9hc3RIZWFkZXJDb21wb25lbnQsXG4gICAgVG9hc3RCb2R5Q29tcG9uZW50LFxuICAgIFRvYXN0ZXJDb21wb25lbnQsXG4gICAgVG9hc3Rlckhvc3REaXJlY3RpdmUsXG4gICAgVG9hc3RDbG9zZURpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0TW9kdWxlIHtcbn1cbiJdfQ==