import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { OutClickService } from './out-click.service';
// import { OutClickDirective } from './out-click.directive';
import { HtmlAttributesDirective } from './html-attr.directive';
import { TemplateIdDirective } from './template-id.directive';
import * as i0 from "@angular/core";
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            // providers: [
            //   {provide: OutClickService}
            // ]
        };
    }
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, declarations: [
        // OutClickDirective,
        HtmlAttributesDirective,
        TemplateIdDirective], imports: [CommonModule], exports: [
        // OutClickDirective,
        HtmlAttributesDirective,
        TemplateIdDirective] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        // OutClickDirective,
                        HtmlAttributesDirective,
                        TemplateIdDirective
                    ],
                    exports: [
                        // OutClickDirective,
                        HtmlAttributesDirective,
                        TemplateIdDirective
                    ],
                    providers: []
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLHlEQUF5RDtBQUN6RCw2REFBNkQ7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBa0I5RCxNQUFNLE9BQU8sWUFBWTtJQUV2QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixlQUFlO1lBQ2YsK0JBQStCO1lBQy9CLElBQUk7U0FDTCxDQUFDO0lBQ0osQ0FBQzs7eUdBVFUsWUFBWTswR0FBWixZQUFZO1FBWHJCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CLGFBTG5CLFlBQVk7UUFRWixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjswR0FJVixZQUFZLFlBZHJCLFlBQVk7MkZBY0gsWUFBWTtrQkFoQnhCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7d0JBQ3JCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBpbXBvcnQgeyBPdXRDbGlja1NlcnZpY2UgfSBmcm9tICcuL291dC1jbGljay5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IE91dENsaWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9vdXQtY2xpY2suZGlyZWN0aXZlJztcbmltcG9ydCB7IEh0bWxBdHRyaWJ1dGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9odG1sLWF0dHIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRlbXBsYXRlSWREaXJlY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLWlkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLy8gT3V0Q2xpY2tEaXJlY3RpdmUsXG4gICAgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUsXG4gICAgVGVtcGxhdGVJZERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLy8gT3V0Q2xpY2tEaXJlY3RpdmUsXG4gICAgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUsXG4gICAgVGVtcGxhdGVJZERpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTaGFyZWRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIC8vIHByb3ZpZGVyczogW1xuICAgICAgLy8gICB7cHJvdmlkZTogT3V0Q2xpY2tTZXJ2aWNlfVxuICAgICAgLy8gXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==