import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, DropdownToggleDirective } from './dropdown/dropdown.component';
import { DropdownDividerDirective } from './dropdown-divider/dropdown-divider.directive';
import { DropdownHeaderDirective } from './dropdown-header/dropdown-header.directive';
import { DropdownItemDirective } from './dropdown-item/dropdown-item.directive';
import { DropdownItemPlainDirective } from './dropdown-item/dropdown-item-plain.directive';
import { DropdownMenuDirective } from './dropdown-menu/dropdown-menu.directive';
import { DropdownService } from './dropdown.service';
import { DropdownCloseDirective } from './dropdown-close/dropdown-close.directive';
import * as i0 from "@angular/core";
export class DropdownModule {
}
DropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, declarations: [DropdownComponent,
        DropdownDividerDirective,
        DropdownHeaderDirective,
        DropdownItemDirective,
        DropdownItemPlainDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownCloseDirective], imports: [CommonModule], exports: [DropdownComponent,
        DropdownDividerDirective,
        DropdownHeaderDirective,
        DropdownItemDirective,
        DropdownItemPlainDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownCloseDirective] });
DropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, providers: [
        DropdownService,
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: DropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DropdownComponent,
                        DropdownDividerDirective,
                        DropdownHeaderDirective,
                        DropdownItemDirective,
                        DropdownItemPlainDirective,
                        DropdownToggleDirective,
                        DropdownMenuDirective,
                        DropdownCloseDirective
                    ],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        DropdownComponent,
                        DropdownDividerDirective,
                        DropdownHeaderDirective,
                        DropdownItemDirective,
                        DropdownItemPlainDirective,
                        DropdownToggleDirective,
                        DropdownMenuDirective,
                        DropdownCloseDirective
                    ],
                    providers: [
                        DropdownService,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQThCbkYsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkExQnZCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixzQkFBc0IsYUFHdEIsWUFBWSxhQUdaLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixzQkFBc0I7NEdBTWIsY0FBYyxhQUpkO1FBQ1QsZUFBZTtLQUNoQixZQWRDLFlBQVk7MkZBZ0JILGNBQWM7a0JBNUIxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsMEJBQTBCO3dCQUMxQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50LCBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duRGl2aWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tZGl2aWRlci9kcm9wZG93bi1kaXZpZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93bkhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24taGVhZGVyL2Ryb3Bkb3duLWhlYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcGRvd25JdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bkb3duSXRlbVBsYWluRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1pdGVtL2Ryb3Bkb3duLWl0ZW0tcGxhaW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL2Ryb3Bkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcGRvd25DbG9zZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tY2xvc2UvZHJvcGRvd24tY2xvc2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgRHJvcGRvd25EaXZpZGVyRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duSGVhZGVyRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duSXRlbURpcmVjdGl2ZSxcbiAgICBEcm9wZG93bkl0ZW1QbGFpbkRpcmVjdGl2ZSxcbiAgICBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gICAgRHJvcGRvd25DbG9zZURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgRHJvcGRvd25EaXZpZGVyRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duSGVhZGVyRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duSXRlbURpcmVjdGl2ZSxcbiAgICBEcm9wZG93bkl0ZW1QbGFpbkRpcmVjdGl2ZSxcbiAgICBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBEcm9wZG93bk1lbnVEaXJlY3RpdmUsXG4gICAgRHJvcGRvd25DbG9zZURpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEcm9wZG93blNlcnZpY2UsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Nb2R1bGUge1xufVxuIl19