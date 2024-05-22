import { Directive, EventEmitter, Output, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
export class CKButtonDirective {
    constructor() {
        this.click = new EventEmitter();
    }
    initialize(editor) {
        editor.instance.addCommand(this.command, {
            exec: (edit) => {
                this.click.emit(edit);
                return true;
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    }
    ngOnInit() {
        if (!this.name) {
            throw new Error('Attribute "name" is required on <ckbutton>');
        }
        if (!this.command) {
            throw new Error('Attribute "command" is required on <ckbutton>');
        }
    }
}
CKButtonDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: CKButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CKButtonDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.1.2", type: CKButtonDirective, selector: "ckbutton", inputs: { label: "label", command: "command", toolbar: "toolbar", name: "name", icon: "icon" }, outputs: { click: "click" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: CKButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ckbutton',
                }]
        }], propDecorators: { click: [{
                type: Output
            }], label: [{
                type: Input
            }], command: [{
                type: Input
            }], toolbar: [{
                type: Input
            }], name: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tidXR0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NrYnV0dG9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcvRTs7Ozs7Ozs7R0FRRztBQUlILE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJWSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7S0ErQnZEO0lBeEJRLFVBQVUsQ0FBQyxNQUF5QjtRQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksRUFBRSxDQUFDLElBQXFCLEVBQVcsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3RDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7OEdBL0JVLGlCQUFpQjtrR0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBSDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzhCQUVXLEtBQUs7c0JBQWQsTUFBTTtnQkFDRSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ0tFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NrZWRpdG9yLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQ0tHcm91cCBjb21wb25lbnRcbiAqIFVzYWdlIDpcbiAqICA8Y2tlZGl0b3IgWyhuZ01vZGVsKV09XCJkYXRhXCIgW2NvbmZpZ109XCJ7Li4ufVwiIGRlYm91bmNlPVwiNTAwXCI+XG4gKiAgICAgIDxja2J1dHRvbiBbbmFtZV09XCInU2F2ZUJ1dHRvbidcIiBbY29tbWFuZF09XCInc2F2ZUNvbW1hbmQnXCIgKGNsaWNrKT1cInNhdmUoJGV2ZW50KVwiXG4gKiAgICAgICAgICAgICAgICBbaWNvbl09XCInL3NhdmUucG5nJ1wiIFt0b29sYmFyXT1cIidjdXN0b21Hcm91cCwxJ1wiIFtsYWJlbF09XCInU2F2ZSdcIj5cbiAqICAgICAgPC9ja2J1dHRvbj5cbiAqICAgPC9ja2VkaXRvcj5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY2tidXR0b24nLFxufSlcbmV4cG9ydCBjbGFzcyBDS0J1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q0tFRElUT1IuZWRpdG9yPigpO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBjb21tYW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2xiYXI6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgcHVibGljIGluaXRpYWxpemUoZWRpdG9yOiBDS0VkaXRvckNvbXBvbmVudCk6IHZvaWQge1xuICAgIGVkaXRvci5pbnN0YW5jZS5hZGRDb21tYW5kKHRoaXMuY29tbWFuZCwge1xuICAgICAgZXhlYzogKGVkaXQ6IENLRURJVE9SLmVkaXRvcik6IGJvb2xlYW4gPT4ge1xuICAgICAgICB0aGlzLmNsaWNrLmVtaXQoZWRpdCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGVkaXRvci5pbnN0YW5jZS51aS5hZGRCdXR0b24odGhpcy5uYW1lLCB7XG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGNvbW1hbmQ6IHRoaXMuY29tbWFuZCxcbiAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcixcbiAgICAgIGljb246IHRoaXMuaWNvbixcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSBcIm5hbWVcIiBpcyByZXF1aXJlZCBvbiA8Y2tidXR0b24+Jyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb21tYW5kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSBcImNvbW1hbmRcIiBpcyByZXF1aXJlZCBvbiA8Y2tidXR0b24+Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=