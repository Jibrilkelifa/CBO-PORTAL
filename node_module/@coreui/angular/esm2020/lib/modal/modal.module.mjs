import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalToggleDirective } from './modal-dismiss/modal-toggle.directive';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalTitleDirective } from './modal-title/modal-title.directive';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import * as i0 from "@angular/core";
export class ModalModule {
}
ModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, declarations: [ModalBodyComponent,
        ModalContentComponent,
        ModalDialogComponent,
        ModalToggleDirective,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        ModalComponent], imports: [CommonModule,
        A11yModule], exports: [ModalBodyComponent,
        ModalContentComponent,
        ModalDialogComponent,
        ModalToggleDirective,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        ModalComponent] });
ModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, providers: [
        ModalService
    ], imports: [CommonModule,
        A11yModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ModalBodyComponent,
                        ModalContentComponent,
                        ModalDialogComponent,
                        ModalToggleDirective,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalTitleDirective,
                        ModalComponent,
                    ],
                    exports: [
                        ModalBodyComponent,
                        ModalContentComponent,
                        ModalDialogComponent,
                        ModalToggleDirective,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalTitleDirective,
                        ModalComponent,
                    ],
                    imports: [
                        CommonModule,
                        A11yModule
                    ],
                    providers: [
                        ModalService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBK0IvQyxNQUFNLE9BQU8sV0FBVzs7d0dBQVgsV0FBVzt5R0FBWCxXQUFXLGlCQTNCcEIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGNBQWMsYUFhZCxZQUFZO1FBQ1osVUFBVSxhQVhWLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixjQUFjO3lHQVVMLFdBQVcsYUFKWDtRQUNULFlBQVk7S0FDYixZQUxDLFlBQVk7UUFDWixVQUFVOzJGQU1ELFdBQVc7a0JBN0J2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3FCQUNYO29CQUNELFNBQVMsRUFBRTt3QkFDVCxZQUFZO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5pbXBvcnQgeyBNb2RhbEJvZHlDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJvZHkvbW9kYWwtYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250ZW50L21vZGFsLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwtZGlzbWlzcy9tb2RhbC10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1vZGFsRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1mb290ZXIvbW9kYWwtZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vbW9kYWwtdGl0bGUvbW9kYWwtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTW9kYWxCb2R5Q29tcG9uZW50LFxuICAgIE1vZGFsQ29udGVudENvbXBvbmVudCxcbiAgICBNb2RhbERpYWxvZ0NvbXBvbmVudCxcbiAgICBNb2RhbFRvZ2dsZURpcmVjdGl2ZSxcbiAgICBNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICBNb2RhbEhlYWRlckNvbXBvbmVudCxcbiAgICBNb2RhbFRpdGxlRGlyZWN0aXZlLFxuICAgIE1vZGFsQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTW9kYWxCb2R5Q29tcG9uZW50LFxuICAgIE1vZGFsQ29udGVudENvbXBvbmVudCxcbiAgICBNb2RhbERpYWxvZ0NvbXBvbmVudCxcbiAgICBNb2RhbFRvZ2dsZURpcmVjdGl2ZSxcbiAgICBNb2RhbEZvb3RlckNvbXBvbmVudCxcbiAgICBNb2RhbEhlYWRlckNvbXBvbmVudCxcbiAgICBNb2RhbFRpdGxlRGlyZWN0aXZlLFxuICAgIE1vZGFsQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEExMXlNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTW9kYWxTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUgeyB9XG4iXX0=