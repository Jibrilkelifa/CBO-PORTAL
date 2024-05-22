import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupDirective } from './list-group.directive';
import { ListGroupItemDirective } from './list-group-item.directive';
import * as i0 from "@angular/core";
export class ListGroupModule {
}
ListGroupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListGroupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, declarations: [ListGroupDirective, ListGroupItemDirective], imports: [CommonModule], exports: [ListGroupDirective,
        ListGroupItemDirective] });
ListGroupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ListGroupDirective, ListGroupItemDirective],
                    exports: [
                        ListGroupDirective,
                        ListGroupItemDirective
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1ncm91cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2xpc3QtZ3JvdXAvbGlzdC1ncm91cC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBWXJFLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBVFgsa0JBQWtCLEVBQUUsc0JBQXNCLGFBTXZELFlBQVksYUFKWixrQkFBa0I7UUFDbEIsc0JBQXNCOzZHQU1iLGVBQWUsWUFIeEIsWUFBWTsyRkFHSCxlQUFlO2tCQVYzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO29CQUMxRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IExpc3RHcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vbGlzdC1ncm91cC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGlzdEdyb3VwSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbGlzdC1ncm91cC1pdGVtLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xpc3RHcm91cERpcmVjdGl2ZSwgTGlzdEdyb3VwSXRlbURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBMaXN0R3JvdXBEaXJlY3RpdmUsXG4gICAgTGlzdEdyb3VwSXRlbURpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdEdyb3VwTW9kdWxlIHsgfVxuIl19