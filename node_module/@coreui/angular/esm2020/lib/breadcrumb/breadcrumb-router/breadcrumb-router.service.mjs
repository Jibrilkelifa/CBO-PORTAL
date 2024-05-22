import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class BreadcrumbRouterService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.outlet = 'primary';
        this.breadcrumbsBehaviorSubject = new BehaviorSubject(new Array());
        this.breadcrumbs$ = this.breadcrumbsBehaviorSubject.asObservable();
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
            const breadcrumbs = [];
            let currentRoute = this.route.root;
            let url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach((childRoute) => {
                    // console.log('breadcrumb event', event, 'route', route);
                    if (childRoute.outlet === this.outlet) {
                        const routeSnapshot = childRoute.snapshot;
                        url +=
                            '/' +
                                routeSnapshot.url.map((segment) => segment.path).join('/');
                        breadcrumbs.push({
                            label: childRoute.snapshot.data['title'] || '',
                            url,
                            queryParams: routeSnapshot.queryParams,
                        });
                        currentRoute = childRoute;
                    }
                });
            } while (currentRoute);
            this.breadcrumbsBehaviorSubject.next(Object.assign([], breadcrumbs));
            // console.log('breadcrumbs', breadcrumbs);
            return breadcrumbs;
        });
    }
}
BreadcrumbRouterService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterService, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Injectable });
BreadcrumbRouterService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BreadcrumbRouterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1yb3V0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLXJvdXRlci9icmVhZGNydW1iLXJvdXRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUEwQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTXhDLE1BQU0sT0FBTyx1QkFBdUI7SUFNbEMsWUFBb0IsTUFBYyxFQUFVLEtBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUwxRCxXQUFNLEdBQUcsU0FBUyxDQUFDO1FBTXhCLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLGVBQWUsQ0FDbkQsSUFBSSxLQUFLLEVBQW1CLENBQzdCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLENBQUM7YUFDdkQsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsTUFBTSxXQUFXLEdBQVUsRUFBRSxDQUFDO1lBQzlCLElBQUksWUFBWSxHQUEwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMxRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixHQUFHO2dCQUNELE1BQU0sY0FBYyxHQUFxQixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUMvRCxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7b0JBQ3BDLDBEQUEwRDtvQkFDMUQsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ3JDLE1BQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQzFDLEdBQUc7NEJBQ0QsR0FBRztnQ0FDSCxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDN0QsV0FBVyxDQUFDLElBQUksQ0FBQzs0QkFDZixLQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTs0QkFDOUMsR0FBRzs0QkFDSCxXQUFXLEVBQUUsYUFBYSxDQUFDLFdBQVc7eUJBQ3ZDLENBQUMsQ0FBQzt3QkFDSCxZQUFZLEdBQUcsVUFBVSxDQUFDO3FCQUMzQjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKLFFBQVEsWUFBWSxFQUFFO1lBRXZCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUVyRSwyQ0FBMkM7WUFDM0MsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztvSEE1Q1UsdUJBQXVCO3dIQUF2Qix1QkFBdUIsY0FGdEIsTUFBTTsyRkFFUCx1QkFBdUI7a0JBSG5DLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElCcmVhZGNydW1iSXRlbSB9IGZyb20gJy4uL2JyZWFkY3J1bWItaXRlbS9icmVhZGNydW1iLWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYlJvdXRlclNlcnZpY2Uge1xuICBwdWJsaWMgb3V0bGV0ID0gJ3ByaW1hcnknO1xuXG4gIGJyZWFkY3J1bWJzJDogT2JzZXJ2YWJsZTxJQnJlYWRjcnVtYkl0ZW1bXT47XG4gIHByaXZhdGUgYnJlYWRjcnVtYnNCZWhhdmlvclN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxJQnJlYWRjcnVtYkl0ZW1bXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB0aGlzLmJyZWFkY3J1bWJzQmVoYXZpb3JTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnlbXT4oXG4gICAgICBuZXcgQXJyYXk8SUJyZWFkY3J1bWJJdGVtPigpXG4gICAgKTtcblxuICAgIHRoaXMuYnJlYWRjcnVtYnMkID0gdGhpcy5icmVhZGNydW1ic0JlaGF2aW9yU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGJyZWFkY3J1bWJzOiBhbnlbXSA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSB8IG51bGwgPSB0aGlzLnJvdXRlLnJvb3Q7XG4gICAgICAgIGxldCB1cmwgPSAnJztcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkcmVuUm91dGVzOiBBY3RpdmF0ZWRSb3V0ZVtdID0gY3VycmVudFJvdXRlLmNoaWxkcmVuO1xuICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IG51bGw7XG4gICAgICAgICAgY2hpbGRyZW5Sb3V0ZXMuZm9yRWFjaCgoY2hpbGRSb3V0ZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2JyZWFkY3J1bWIgZXZlbnQnLCBldmVudCwgJ3JvdXRlJywgcm91dGUpO1xuICAgICAgICAgICAgaWYgKGNoaWxkUm91dGUub3V0bGV0ID09PSB0aGlzLm91dGxldCkge1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZVNuYXBzaG90ID0gY2hpbGRSb3V0ZS5zbmFwc2hvdDtcbiAgICAgICAgICAgICAgdXJsICs9XG4gICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICByb3V0ZVNuYXBzaG90LnVybC5tYXAoKHNlZ21lbnQpID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogY2hpbGRSb3V0ZS5zbmFwc2hvdC5kYXRhWyd0aXRsZSddIHx8ICcnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogcm91dGVTbmFwc2hvdC5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IGNoaWxkUm91dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gd2hpbGUgKGN1cnJlbnRSb3V0ZSk7XG5cbiAgICAgICAgdGhpcy5icmVhZGNydW1ic0JlaGF2aW9yU3ViamVjdC5uZXh0KE9iamVjdC5hc3NpZ24oW10sIGJyZWFkY3J1bWJzKSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2JyZWFkY3J1bWJzJywgYnJlYWRjcnVtYnMpO1xuICAgICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gICAgICB9KTtcbiAgfVxufVxuIl19