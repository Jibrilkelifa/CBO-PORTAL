import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ListenersService {
    constructor(renderer) {
        this.renderer = renderer;
        this.listeners = new Map();
    }
    setListeners({ hostElement, trigger, callbackOn, callbackOff, callbackToggle }) {
        const host = hostElement.nativeElement;
        const triggers = Array.isArray(trigger)
            ? trigger
            : trigger?.split(' ') ?? [];
        if (triggers?.includes('click')) {
            typeof callbackToggle === 'function' && this.listeners.set('click', this.renderer.listen(host, 'click', callbackToggle));
        }
        if (triggers?.includes('focus')) {
            typeof callbackOn === 'function' && this.listeners.set('focus', this.renderer.listen(host, 'focus', callbackOn));
        }
        if (triggers?.includes('click') || triggers?.includes('focus')) {
            typeof callbackOff === 'function' && this.listeners.set('blur', this.renderer.listen(host, 'blur', callbackOff));
        }
        if (triggers?.includes('hover')) {
            typeof callbackOn === 'function' && this.listeners.set('mouseenter', this.renderer.listen(host, 'mouseenter', callbackOn));
            typeof callbackOff === 'function' && this.listeners.set('mouseleave', this.renderer.listen(host, 'mouseleave', callbackOff));
        }
    }
    clearListeners() {
        this.listeners.forEach((unListen, key) => {
            unListen();
        });
        this.listeners.forEach((unListen, key) => {
            // @ts-ignore
            this.listeners.set(key, null);
        });
        this.listeners.clear();
    }
}
ListenersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListenersService, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Injectable });
ListenersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListenersService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ListenersService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NlcnZpY2VzL2xpc3RlbmVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBWWxFLE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0IsWUFDVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSHJCLGNBQVMsR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUlwRCxDQUFDO0lBRUosWUFBWSxDQUFDLEVBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBbUI7UUFDNUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNyQyxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5QixJQUFJLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxjQUFjLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUN4RCxPQUFPLEVBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FDcEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDcEQsT0FBTyxFQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQ2hELENBQUM7U0FDSDtRQUNELElBQUksUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlELE9BQU8sV0FBVyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDckQsTUFBTSxFQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQ2hELENBQUM7U0FDSDtRQUNELElBQUksUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMvQixPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ3BELFlBQVksRUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUNyRCxDQUFDO1lBQ0YsT0FBTyxXQUFXLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUNyRCxZQUFZLEVBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FDdEQsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN0QyxRQUFRLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdkMsYUFBYTtZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7NkdBckRVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyaWdnZXJzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGlzdGVuZXJzQ29uZmlnIHtcbiAgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gIHRyaWdnZXI/OiBUcmlnZ2VycyB8IFRyaWdnZXJzW10sXG4gIGNhbGxiYWNrT24/OiAoKSA9PiB2b2lkLFxuICBjYWxsYmFja09mZj86ICgpID0+IHZvaWQsXG4gIGNhbGxiYWNrVG9nZ2xlPzogKCkgPT4gdm9pZCxcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RlbmVyc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCAoKSA9PiB2b2lkPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIHNldExpc3RlbmVycyh7aG9zdEVsZW1lbnQsIHRyaWdnZXIsIGNhbGxiYWNrT24sIGNhbGxiYWNrT2ZmLCBjYWxsYmFja1RvZ2dsZX06IElMaXN0ZW5lcnNDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBob3N0ID0gaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB0cmlnZ2VycyA9IEFycmF5LmlzQXJyYXkodHJpZ2dlcilcbiAgICAgID8gdHJpZ2dlclxuICAgICAgOiB0cmlnZ2VyPy5zcGxpdCgnICcpID8/IFtdO1xuXG4gICAgaWYgKHRyaWdnZXJzPy5pbmNsdWRlcygnY2xpY2snKSkge1xuICAgICAgdHlwZW9mIGNhbGxiYWNrVG9nZ2xlID09PSAnZnVuY3Rpb24nICYmIHRoaXMubGlzdGVuZXJzLnNldChcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oaG9zdCwgJ2NsaWNrJywgY2FsbGJhY2tUb2dnbGUpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlcnM/LmluY2x1ZGVzKCdmb2N1cycpKSB7XG4gICAgICB0eXBlb2YgY2FsbGJhY2tPbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmxpc3RlbmVycy5zZXQoXG4gICAgICAgICdmb2N1cycsXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGhvc3QsICdmb2N1cycsIGNhbGxiYWNrT24pXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlcnM/LmluY2x1ZGVzKCdjbGljaycpIHx8IHRyaWdnZXJzPy5pbmNsdWRlcygnZm9jdXMnKSkge1xuICAgICAgdHlwZW9mIGNhbGxiYWNrT2ZmID09PSAnZnVuY3Rpb24nICYmIHRoaXMubGlzdGVuZXJzLnNldChcbiAgICAgICAgJ2JsdXInLFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbihob3N0LCAnYmx1cicsIGNhbGxiYWNrT2ZmKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRyaWdnZXJzPy5pbmNsdWRlcygnaG92ZXInKSkge1xuICAgICAgdHlwZW9mIGNhbGxiYWNrT24gPT09ICdmdW5jdGlvbicgJiYgdGhpcy5saXN0ZW5lcnMuc2V0KFxuICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGhvc3QsICdtb3VzZWVudGVyJywgY2FsbGJhY2tPbiksXG4gICAgICApO1xuICAgICAgdHlwZW9mIGNhbGxiYWNrT2ZmID09PSAnZnVuY3Rpb24nICYmIHRoaXMubGlzdGVuZXJzLnNldChcbiAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbihob3N0LCAnbW91c2VsZWF2ZScsIGNhbGxiYWNrT2ZmKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKCh1bkxpc3Rlbiwga2V5KSA9PiB7XG4gICAgICAgdW5MaXN0ZW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKCh1bkxpc3Rlbiwga2V5KSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQoa2V5LCBudWxsKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICB9XG59XG4iXX0=