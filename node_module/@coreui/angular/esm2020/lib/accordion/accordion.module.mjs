import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionButtonDirective } from './accordion-button/accordion-button.directive';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionService } from './accordion.service';
import { CollapseModule } from '../collapse';
import { SharedModule } from '../shared';
import * as i0 from "@angular/core";
export class AccordionModule {
}
AccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, declarations: [AccordionComponent,
        AccordionButtonDirective,
        AccordionItemComponent], imports: [CommonModule,
        CollapseModule,
        SharedModule], exports: [AccordionComponent,
        AccordionButtonDirective,
        AccordionItemComponent] });
AccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, providers: [
        AccordionService
    ], imports: [CommonModule,
        CollapseModule,
        SharedModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AccordionComponent,
                        AccordionButtonDirective,
                        AccordionItemComponent,
                    ],
                    imports: [
                        CommonModule,
                        CollapseModule,
                        SharedModule
                    ],
                    exports: [
                        AccordionComponent,
                        AccordionButtonDirective,
                        AccordionItemComponent,
                    ],
                    providers: [
                        AccordionService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQXNCekMsTUFBTSxPQUFPLGVBQWU7OzRHQUFmLGVBQWU7NkdBQWYsZUFBZSxpQkFsQnhCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsc0JBQXNCLGFBR3RCLFlBQVk7UUFDWixjQUFjO1FBQ2QsWUFBWSxhQUdaLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsc0JBQXNCOzZHQU1iLGVBQWUsYUFKZjtRQUNULGdCQUFnQjtLQUNqQixZQVhDLFlBQVk7UUFDWixjQUFjO1FBQ2QsWUFBWTsyRkFXSCxlQUFlO2tCQXBCM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQix3QkFBd0I7d0JBQ3hCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY2NvcmRpb25CdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2FjY29yZGlvbi1idXR0b24vYWNjb3JkaW9uLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuL2FjY29yZGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnLi4vY29sbGFwc2UnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIEFjY29yZGlvbkJ1dHRvbkRpcmVjdGl2ZSxcbiAgICBBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbGxhcHNlTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgIEFjY29yZGlvbkJ1dHRvbkRpcmVjdGl2ZSxcbiAgICBBY2NvcmRpb25JdGVtQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBY2NvcmRpb25TZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uTW9kdWxlIHtcbn1cbiJdfQ==