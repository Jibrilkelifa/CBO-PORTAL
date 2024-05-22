import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class IntersectionService {
    constructor() {
        this.intersecting = new BehaviorSubject(false);
        this.intersecting$ = this.intersecting.asObservable();
        this.defaultObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };
    }
    createIntersectionObserver(hostElement, observerOptions = this.defaultObserverOptions) {
        const options = { ...this.defaultObserverOptions, ...observerOptions };
        this.hostElement = hostElement;
        const handleIntersect = (entries, observer) => {
            entries.forEach((entry) => {
                this.intersecting.next(entry.isIntersecting);
            });
        };
        this.intersectionObserver = new IntersectionObserver(handleIntersect, options);
        this.intersectionObserver.observe(hostElement.nativeElement);
    }
    ngOnDestroy() {
        this.intersectionObserver?.unobserve(this.hostElement?.nativeElement);
    }
}
IntersectionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: IntersectionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
IntersectionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: IntersectionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: IntersectionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NlcnZpY2VzL2ludGVyc2VjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTdkMsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QjtRQUVRLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDM0Qsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBS3pDLDJCQUFzQixHQUE4QjtZQUMxRCxJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxHQUFHO1NBQ2YsQ0FBQztJQVpjLENBQUM7SUFjakIsMEJBQTBCLENBQUMsV0FBd0MsRUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLHNCQUFzQjtRQUVoSCxNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsZUFBZSxFQUFFLENBQUE7UUFFdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFjLEVBQUUsUUFBYSxFQUFFLEVBQUU7WUFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Z0hBbENVLG1CQUFtQjtvSEFBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgSUludGVyc2VjdGlvbk9ic2VydmVySW5pdCB7XG4gIHJvb3Q/OiBFbGVtZW50IHwgbnVsbDtcbiAgcm9vdE1hcmdpbj86IHN0cmluZztcbiAgdGhyZXNob2xkPzogbnVtYmVyIHwgbnVtYmVyW107XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHByaXZhdGUgaW50ZXJzZWN0aW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGludGVyc2VjdGluZyQgPSB0aGlzLmludGVyc2VjdGluZy5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGludGVyc2VjdGlvbk9ic2VydmVyITogSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgaG9zdEVsZW1lbnQhOiB7IG5hdGl2ZUVsZW1lbnQ6IEVsZW1lbnQ7IH07XG5cbiAgcHJpdmF0ZSBkZWZhdWx0T2JzZXJ2ZXJPcHRpb25zOiBJSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0ge1xuICAgIHJvb3Q6IG51bGwsXG4gICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgdGhyZXNob2xkOiAwLjJcbiAgfTtcblxuICBjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcihob3N0RWxlbWVudDogeyBuYXRpdmVFbGVtZW50OiBFbGVtZW50OyB9LCBvYnNlcnZlck9wdGlvbnMgPSB0aGlzLmRlZmF1bHRPYnNlcnZlck9wdGlvbnMpIHtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdE9ic2VydmVyT3B0aW9ucywgLi4ub2JzZXJ2ZXJPcHRpb25zIH1cblxuICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBob3N0RWxlbWVudDtcblxuICAgIGNvbnN0IGhhbmRsZUludGVyc2VjdCA9IChlbnRyaWVzOiBhbnlbXSwgb2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaW50ZXJzZWN0aW5nLm5leHQoZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlSW50ZXJzZWN0LCBvcHRpb25zKTtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUoaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUodGhpcy5ob3N0RWxlbWVudD8ubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==