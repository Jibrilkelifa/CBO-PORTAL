import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NavbarBrandDirective } from './navbar-brand/navbar-brand.directive';
import { NavbarNavComponent } from './navbar-nav/navbar-nav.component';
import { NavbarTextComponent } from './navbar-text/navbar-text.component';
import { NavbarTogglerDirective } from './navbar-toggler/navbar-toggler.directive';
import * as i0 from "@angular/core";
export class NavbarModule {
}
NavbarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NavbarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, declarations: [NavbarComponent,
        NavbarNavComponent,
        NavbarTextComponent,
        NavbarBrandDirective,
        NavbarTogglerDirective], imports: [CommonModule,
        RouterModule], exports: [NavbarComponent,
        NavbarNavComponent,
        NavbarTextComponent,
        NavbarBrandDirective,
        NavbarTogglerDirective] });
NavbarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, imports: [CommonModule,
        RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NavbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NavbarComponent,
                        NavbarNavComponent,
                        NavbarTextComponent,
                        NavbarBrandDirective,
                        NavbarTogglerDirective
                    ],
                    exports: [
                        NavbarComponent,
                        NavbarNavComponent,
                        NavbarTextComponent,
                        NavbarBrandDirective,
                        NavbarTogglerDirective
                    ],
                    imports: [
                        CommonModule,
                        RouterModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbmF2YmFyL25hdmJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFzQm5GLE1BQU0sT0FBTyxZQUFZOzt5R0FBWixZQUFZOzBHQUFaLFlBQVksaUJBbEJyQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsc0JBQXNCLGFBVXRCLFlBQVk7UUFDWixZQUFZLGFBUlosZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLHNCQUFzQjswR0FPYixZQUFZLFlBSnJCLFlBQVk7UUFDWixZQUFZOzJGQUdILFlBQVk7a0JBcEJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQnJhbmREaXJlY3RpdmUgfSBmcm9tICcuL25hdmJhci1icmFuZC9uYXZiYXItYnJhbmQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5hdmJhck5hdkNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyLW5hdi9uYXZiYXItbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXItdGV4dC9uYXZiYXItdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyVG9nZ2xlckRpcmVjdGl2ZSB9IGZyb20gJy4vbmF2YmFyLXRvZ2dsZXIvbmF2YmFyLXRvZ2dsZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIE5hdmJhck5hdkNvbXBvbmVudCxcbiAgICBOYXZiYXJUZXh0Q29tcG9uZW50LFxuICAgIE5hdmJhckJyYW5kRGlyZWN0aXZlLFxuICAgIE5hdmJhclRvZ2dsZXJEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBOYXZiYXJOYXZDb21wb25lbnQsXG4gICAgTmF2YmFyVGV4dENvbXBvbmVudCxcbiAgICBOYXZiYXJCcmFuZERpcmVjdGl2ZSxcbiAgICBOYXZiYXJUb2dnbGVyRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyTW9kdWxlIHsgfVxuIl19