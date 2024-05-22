import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RowComponent } from './row.component';
import { ColComponent } from './col.component';
import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';
import { GutterDirective } from './gutter.directive';
import * as i0 from "@angular/core";
export class GridModule {
}
GridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: GridModule, declarations: [ContainerComponent,
        RowComponent,
        ColComponent,
        RowDirective,
        ColDirective,
        GutterDirective], imports: [CommonModule], exports: [ContainerComponent,
        RowComponent,
        ColComponent,
        GutterDirective,
        RowDirective,
        ColDirective] });
GridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GridModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [
                        ContainerComponent,
                        RowComponent,
                        ColComponent,
                        GutterDirective,
                        RowDirective,
                        ColDirective,
                    ],
                    declarations: [
                        ContainerComponent,
                        RowComponent,
                        ColComponent,
                        RowDirective,
                        ColDirective,
                        GutterDirective,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFzQnJELE1BQU0sT0FBTyxVQUFVOzt1R0FBVixVQUFVO3dHQUFWLFVBQVUsaUJBVG5CLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZSxhQWZQLFlBQVksYUFFcEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO3dHQVlILFVBQVUsWUFuQlgsWUFBWTsyRkFtQlgsVUFBVTtrQkFwQnRCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixZQUFZO3dCQUNaLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbENvbXBvbmVudCB9IGZyb20gJy4vY29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3Jvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEd1dHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vZ3V0dGVyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFJvd0NvbXBvbmVudCxcbiAgICBDb2xDb21wb25lbnQsXG4gICAgR3V0dGVyRGlyZWN0aXZlLFxuICAgIFJvd0RpcmVjdGl2ZSxcbiAgICBDb2xEaXJlY3RpdmUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBSb3dDb21wb25lbnQsXG4gICAgQ29sQ29tcG9uZW50LFxuICAgIFJvd0RpcmVjdGl2ZSxcbiAgICBDb2xEaXJlY3RpdmUsXG4gICAgR3V0dGVyRGlyZWN0aXZlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTW9kdWxlIHt9XG4iXX0=