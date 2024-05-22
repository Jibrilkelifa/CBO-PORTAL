import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../sidebar.service";
export class SidebarBackdropService {
    constructor(document, 
    // private rendererFactory: RendererFactory2,
    sidebarService) {
        this.document = document;
        this.sidebarService = sidebarService;
        this.clickListener = () => { };
        // this.renderer = rendererFactory.createRenderer(null, null);
    }
    setBackdrop(sidebar) {
        const backdrop = this.document.getElementsByClassName('sidebar-backdrop');
        // console.log(`sidebar-${this.id}`, ' setBackdrop', backdrop);
        if (backdrop.length === 0) {
            this.backdrop = this.renderer.createElement('div');
            this.renderer.addClass(this.backdrop, 'sidebar-backdrop');
            this.renderer.appendChild(this.document.body, this.backdrop);
            this.clickListener = this.renderer.listen(this.backdrop, 'click', (e) => {
                // console.log(`sidebar-${this.id}`, ' backdrop click', e);
                this.sidebarService.toggle({ toggle: 'visible', sidebar });
            });
        }
        // console.log(this.backdrop, sidebar.sidebarState.mobile, sidebar.sidebarState.show);
        if (this.backdrop && sidebar.sidebarState.mobile && sidebar.sidebarState.visible) {
            this.renderer.addClass(this.backdrop, 'fade');
            this.renderer.addClass(this.backdrop, 'show');
            // this.renderer.removeClass(this.backdrop, 'd-none');
        }
        else {
            this.renderer.removeClass(this.backdrop, 'show');
            this.renderer.removeClass(this.backdrop, 'fade');
            // this.renderer.addClass(this.backdrop, 'd-none');
        }
    }
    clearBackdrop() {
        if (this.backdrop) {
            // clear backdrop click Listener
            this.clickListener();
            // this.renderer.listen(this.backdrop, 'click', (e): void => {} );
            this.renderer.removeChild(this.document.body, this.backdrop);
            // @ts-ignore
            this.backdrop = undefined;
        }
    }
}
SidebarBackdropService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBackdropService, deps: [{ token: DOCUMENT }, { token: i1.SidebarService }], target: i0.ɵɵFactoryTarget.Injectable });
SidebarBackdropService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBackdropService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: SidebarBackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.SidebarService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItYmFja2Ryb3Avc2lkZWJhci1iYWNrZHJvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTzNDLE1BQU0sT0FBTyxzQkFBc0I7SUFNakMsWUFDNEIsUUFBYTtJQUN2Qyw2Q0FBNkM7SUFDckMsY0FBOEI7UUFGWixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRS9CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxoQyxrQkFBYSxHQUFHLEdBQVMsRUFBRSxHQUFFLENBQUMsQ0FBQztRQU9yQyw4REFBOEQ7SUFDaEUsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF5QjtRQUNuQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUUsK0RBQStEO1FBQy9ELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDdEUsMkRBQTJEO2dCQUMzRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0Qsc0ZBQXNGO1FBQ3RGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsc0RBQXNEO1NBQ3ZEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakQsbURBQW1EO1NBQ3BEO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixrRUFBa0U7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELGFBQWE7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUMzQjtJQUNILENBQUM7O21IQS9DVSxzQkFBc0Isa0JBT3ZCLFFBQVE7dUhBUFAsc0JBQXNCLGNBRnJCLE1BQU07MkZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBUUksTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdCwgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckJhY2tkcm9wU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBiYWNrZHJvcCE6IEhUTUxFbGVtZW50O1xuICByZW5kZXJlciE6IFJlbmRlcmVyMjtcbiAgcHJpdmF0ZSBjbGlja0xpc3RlbmVyID0gKCk6IHZvaWQgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIC8vIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IFNpZGViYXJTZXJ2aWNlLFxuICApIHtcbiAgICAvLyB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgc2V0QmFja2Ryb3Aoc2lkZWJhcjogU2lkZWJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJhY2tkcm9wID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyLWJhY2tkcm9wJyk7XG4gICAgLy8gY29uc29sZS5sb2coYHNpZGViYXItJHt0aGlzLmlkfWAsICcgc2V0QmFja2Ryb3AnLCBiYWNrZHJvcCk7XG4gICAgaWYgKGJhY2tkcm9wLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5iYWNrZHJvcCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYmFja2Ryb3AsICdzaWRlYmFyLWJhY2tkcm9wJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5iYWNrZHJvcCk7XG4gICAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmJhY2tkcm9wLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2lkZWJhci0ke3RoaXMuaWR9YCwgJyBiYWNrZHJvcCBjbGljaycsIGUpO1xuICAgICAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7dG9nZ2xlOiAndmlzaWJsZScsIHNpZGViYXJ9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJhY2tkcm9wLCBzaWRlYmFyLnNpZGViYXJTdGF0ZS5tb2JpbGUsIHNpZGViYXIuc2lkZWJhclN0YXRlLnNob3cpO1xuICAgIGlmICh0aGlzLmJhY2tkcm9wICYmIHNpZGViYXIuc2lkZWJhclN0YXRlLm1vYmlsZSAmJiBzaWRlYmFyLnNpZGViYXJTdGF0ZS52aXNpYmxlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYmFja2Ryb3AsICdmYWRlJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYmFja2Ryb3AsICdzaG93Jyk7XG4gICAgICAvLyB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuYmFja2Ryb3AsICdkLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmJhY2tkcm9wLCAnc2hvdycpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmJhY2tkcm9wLCAnZmFkZScpO1xuICAgICAgLy8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJhY2tkcm9wLCAnZC1ub25lJyk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5iYWNrZHJvcCkge1xuICAgICAgLy8gY2xlYXIgYmFja2Ryb3AgY2xpY2sgTGlzdGVuZXJcbiAgICAgIHRoaXMuY2xpY2tMaXN0ZW5lcigpO1xuICAgICAgLy8gdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5iYWNrZHJvcCwgJ2NsaWNrJywgKGUpOiB2b2lkID0+IHt9ICk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5iYWNrZHJvcCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLmJhY2tkcm9wID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=