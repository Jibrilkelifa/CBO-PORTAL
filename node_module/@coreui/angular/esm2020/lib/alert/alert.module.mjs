import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertHeadingDirective } from './alert-heading.directive';
import { AlertLinkDirective } from './alert-link.directive';
import { ButtonModule } from '../button';
import * as i0 from "@angular/core";
export class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, declarations: [AlertComponent,
        AlertHeadingDirective,
        AlertLinkDirective], imports: [CommonModule,
        ButtonModule], exports: [AlertComponent,
        AlertHeadingDirective,
        AlertLinkDirective] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, imports: [CommonModule,
        ButtonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        ButtonModule
                    ],
                    exports: [
                        AlertComponent,
                        AlertHeadingDirective,
                        AlertLinkDirective
                    ],
                    declarations: [
                        AlertComponent,
                        AlertHeadingDirective,
                        AlertLinkDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9hbGVydC9hbGVydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBa0J6QyxNQUFNLE9BQU8sV0FBVzs7d0dBQVgsV0FBVzt5R0FBWCxXQUFXLGlCQUxwQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGtCQUFrQixhQVhsQixZQUFZO1FBQ1osWUFBWSxhQUdaLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsa0JBQWtCO3lHQVFULFdBQVcsWUFkcEIsWUFBWTtRQUNaLFlBQVk7MkZBYUgsV0FBVztrQkFoQnZCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixrQkFBa0I7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxlcnRIZWFkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9hbGVydC1oZWFkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBbGVydExpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2FsZXJ0LWxpbmsuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBbGVydENvbXBvbmVudCxcbiAgICBBbGVydEhlYWRpbmdEaXJlY3RpdmUsXG4gICAgQWxlcnRMaW5rRGlyZWN0aXZlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFsZXJ0Q29tcG9uZW50LFxuICAgIEFsZXJ0SGVhZGluZ0RpcmVjdGl2ZSxcbiAgICBBbGVydExpbmtEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7fVxuIl19