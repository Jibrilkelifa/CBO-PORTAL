import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class BackdropService {
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.backdropClick = new Subject();
        this.backdropClick$ = this.backdropClick.asObservable();
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    setBackdrop(type = 'modal') {
        const backdropElement = this.renderer.createElement('div');
        this.renderer.addClass(backdropElement, `${type}-backdrop`);
        this.renderer.addClass(backdropElement, 'fade');
        this.renderer.appendChild(this.document.body, backdropElement);
        this.unListen = this.renderer.listen(backdropElement, 'click', (e) => {
            this.onClickHandler();
        });
        setTimeout(() => {
            this.renderer.addClass(backdropElement, 'show');
        });
        return backdropElement;
    }
    clearBackdrop(backdrop) {
        if (backdrop) {
            this.unListen();
            this.renderer.removeClass(backdrop, 'show');
            setTimeout(() => {
                this.renderer.removeChild(this.document.body, backdrop);
                backdrop = undefined;
            }, 300);
        }
        return backdrop;
    }
    onClickHandler() {
        this.backdropClick.next(true);
    }
}
BackdropService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BackdropService, deps: [{ token: DOCUMENT }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable });
BackdropService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BackdropService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.RendererFactory2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYmFja2Ryb3AvYmFja2Ryb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQzRCLFFBQWEsRUFDL0IsZUFBaUM7UUFEZixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQVJuQyxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDL0MsbUJBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBU2pELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFlLE9BQU87UUFDaEMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFRLEVBQUU7WUFDekUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxhQUFhLENBQUMsUUFBYTtRQUN6QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEQsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7NEdBM0NVLGVBQWUsa0JBU2hCLFFBQVE7Z0hBVFAsZUFBZSxjQUZkLE1BQU07MkZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQVVJLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tkcm9wU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBiYWNrZHJvcENsaWNrID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgYmFja2Ryb3BDbGljayQgPSB0aGlzLmJhY2tkcm9wQ2xpY2suYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIHVuTGlzdGVuITogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHNldEJhY2tkcm9wKHR5cGU6IHN0cmluZyA9ICdtb2RhbCcpOiBhbnkge1xuICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhiYWNrZHJvcEVsZW1lbnQsIGAke3R5cGV9LWJhY2tkcm9wYCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhiYWNrZHJvcEVsZW1lbnQsICdmYWRlJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIGJhY2tkcm9wRWxlbWVudCk7XG4gICAgdGhpcy51bkxpc3RlbiA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGJhY2tkcm9wRWxlbWVudCwgJ2NsaWNrJywgKGUpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMub25DbGlja0hhbmRsZXIoKTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYmFja2Ryb3BFbGVtZW50LCAnc2hvdycpO1xuICAgIH0pO1xuICAgIHJldHVybiBiYWNrZHJvcEVsZW1lbnQ7XG4gIH1cblxuICBjbGVhckJhY2tkcm9wKGJhY2tkcm9wOiBhbnkpOiBhbnkge1xuICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgdGhpcy51bkxpc3RlbigpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhiYWNrZHJvcCwgJ3Nob3cnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgYmFja2Ryb3ApO1xuICAgICAgICBiYWNrZHJvcCA9IHVuZGVmaW5lZDtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICAgIHJldHVybiBiYWNrZHJvcDtcbiAgfVxuXG4gIG9uQ2xpY2tIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYmFja2Ryb3BDbGljay5uZXh0KHRydWUpO1xuICB9XG59XG4iXX0=