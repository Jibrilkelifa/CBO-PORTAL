import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PageItemComponent } from './page-item/page-item.component';
import { PageItemDirective } from './page-item/page-item.directive';
import { PageLinkDirective } from './page-link/page-link.directive';
import * as i0 from "@angular/core";
export class PaginationModule {
}
PaginationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PaginationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, declarations: [PaginationComponent,
        PageItemComponent,
        PageItemDirective,
        PageLinkDirective], imports: [CommonModule], exports: [PaginationComponent,
        PageItemComponent,
        PageItemDirective,
        PageLinkDirective] });
PaginationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: PaginationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PaginationComponent,
                        PageItemComponent,
                        PageItemDirective,
                        PageLinkDirective
                    ],
                    exports: [
                        PaginationComponent,
                        PageItemComponent,
                        PageItemDirective,
                        PageLinkDirective
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBbUJwRSxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBZnpCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGlCQUFpQixhQVNqQixZQUFZLGFBTlosbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsaUJBQWlCOzhHQU1SLGdCQUFnQixZQUh6QixZQUFZOzJGQUdILGdCQUFnQjtrQkFqQjVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BhZ2UtaXRlbS9wYWdlLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9wYWdlLWl0ZW0vcGFnZS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQYWdlTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vcGFnZS1saW5rL3BhZ2UtbGluay5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIFBhZ2VJdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VJdGVtRGlyZWN0aXZlLFxuICAgIFBhZ2VMaW5rRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIFBhZ2VJdGVtQ29tcG9uZW50LFxuICAgIFBhZ2VJdGVtRGlyZWN0aXZlLFxuICAgIFBhZ2VMaW5rRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTW9kdWxlIHt9XG4iXX0=