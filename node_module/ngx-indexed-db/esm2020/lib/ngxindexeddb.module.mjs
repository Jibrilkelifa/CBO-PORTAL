import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBService } from './ngx-indexed-db.service';
import { CONFIG_TOKEN } from './ngx-indexed-db.meta';
import * as i0 from "@angular/core";
export class NgxIndexedDBModule {
    static forRoot(...dbConfigs) {
        const value = {};
        for (const dbConfig of dbConfigs) {
            Object.assign(value, { [dbConfig.name]: dbConfig });
        }
        return {
            ngModule: NgxIndexedDBModule,
            providers: [NgxIndexedDBService, { provide: CONFIG_TOKEN, useValue: value }]
        };
    }
}
NgxIndexedDBModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxIndexedDBModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, imports: [CommonModule] });
NgxIndexedDBModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxIndexedDBModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4aW5kZXhlZGRiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbmRleGVkLWRiL3NyYy9saWIvbmd4aW5kZXhlZGRiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFZLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU0vRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFxQjtRQUNyQyxNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDakIsS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUM3RSxDQUFDO0lBQ0osQ0FBQzs7Z0hBVlUsa0JBQWtCO2lIQUFsQixrQkFBa0IsWUFGbkIsWUFBWTtpSEFFWCxrQkFBa0IsWUFGbkIsWUFBWTs0RkFFWCxrQkFBa0I7a0JBSjlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtaW5kZXhlZC1kYi5zZXJ2aWNlJztcbmltcG9ydCB7IERCQ29uZmlnLCBDT05GSUdfVE9LRU4gfSBmcm9tICcuL25neC1pbmRleGVkLWRiLm1ldGEnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJbmRleGVkREJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCguLi5kYkNvbmZpZ3M6IERCQ29uZmlnW10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neEluZGV4ZWREQk1vZHVsZT4ge1xuICAgIGNvbnN0IHZhbHVlID0ge307XG4gICAgZm9yIChjb25zdCBkYkNvbmZpZyBvZiBkYkNvbmZpZ3MpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odmFsdWUsIHtbZGJDb25maWcubmFtZV06IGRiQ29uZmlnfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4SW5kZXhlZERCTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbTmd4SW5kZXhlZERCU2VydmljZSwgeyBwcm92aWRlOiBDT05GSUdfVE9LRU4sIHVzZVZhbHVlOiB2YWx1ZSB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==