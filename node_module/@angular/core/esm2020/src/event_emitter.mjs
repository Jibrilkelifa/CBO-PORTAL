/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <reference types="rxjs" />
import { Subject, Subscription } from 'rxjs';
class EventEmitter_ extends Subject {
    constructor(isAsync = false) {
        super();
        this.__isAsync = isAsync;
    }
    emit(value) {
        super.next(value);
    }
    subscribe(observerOrNext, error, complete) {
        let nextFn = observerOrNext;
        let errorFn = error || (() => null);
        let completeFn = complete;
        if (observerOrNext && typeof observerOrNext === 'object') {
            const observer = observerOrNext;
            nextFn = observer.next?.bind(observer);
            errorFn = observer.error?.bind(observer);
            completeFn = observer.complete?.bind(observer);
        }
        if (this.__isAsync) {
            errorFn = _wrapInTimeout(errorFn);
            if (nextFn) {
                nextFn = _wrapInTimeout(nextFn);
            }
            if (completeFn) {
                completeFn = _wrapInTimeout(completeFn);
            }
        }
        const sink = super.subscribe({ next: nextFn, error: errorFn, complete: completeFn });
        if (observerOrNext instanceof Subscription) {
            observerOrNext.add(sink);
        }
        return sink;
    }
}
function _wrapInTimeout(fn) {
    return (value) => {
        setTimeout(fn, undefined, value);
    };
}
/**
 * @publicApi
 */
export const EventEmitter = EventEmitter_;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2V2ZW50X2VtaXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsOEJBQThCO0FBRTlCLE9BQU8sRUFBa0IsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQThGNUQsTUFBTSxhQUFjLFNBQVEsT0FBWTtJQUd0QyxZQUFZLFVBQW1CLEtBQUs7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQVc7UUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFUSxTQUFTLENBQUMsY0FBb0IsRUFBRSxLQUFXLEVBQUUsUUFBYztRQUNsRSxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBRTFCLElBQUksY0FBYyxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtZQUN4RCxNQUFNLFFBQVEsR0FBRyxjQUEwQyxDQUFDO1lBQzVELE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztZQUVELElBQUksVUFBVSxFQUFFO2dCQUNkLFVBQVUsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekM7U0FDRjtRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFFbkYsSUFBSSxjQUFjLFlBQVksWUFBWSxFQUFFO1lBQzFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQUVELFNBQVMsY0FBYyxDQUFDLEVBQTJCO0lBQ2pELE9BQU8sQ0FBQyxLQUFjLEVBQUUsRUFBRTtRQUN4QixVQUFVLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBR3JCLGFBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJyeGpzXCIgLz5cblxuaW1wb3J0IHtQYXJ0aWFsT2JzZXJ2ZXIsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogVXNlIGluIGNvbXBvbmVudHMgd2l0aCB0aGUgYEBPdXRwdXRgIGRpcmVjdGl2ZSB0byBlbWl0IGN1c3RvbSBldmVudHNcbiAqIHN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3VzbHksIGFuZCByZWdpc3RlciBoYW5kbGVycyBmb3IgdGhvc2UgZXZlbnRzXG4gKiBieSBzdWJzY3JpYmluZyB0byBhbiBpbnN0YW5jZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIEV4dGVuZHNcbiAqIFtSeEpTIGBTdWJqZWN0YF0oaHR0cHM6Ly9yeGpzLmRldi9hcGkvaW5kZXgvY2xhc3MvU3ViamVjdClcbiAqIGZvciBBbmd1bGFyIGJ5IGFkZGluZyB0aGUgYGVtaXQoKWAgbWV0aG9kLlxuICpcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgYSBjb21wb25lbnQgZGVmaW5lcyB0d28gb3V0cHV0IHByb3BlcnRpZXNcbiAqIHRoYXQgY3JlYXRlIGV2ZW50IGVtaXR0ZXJzLiBXaGVuIHRoZSB0aXRsZSBpcyBjbGlja2VkLCB0aGUgZW1pdHRlclxuICogZW1pdHMgYW4gb3BlbiBvciBjbG9zZSBldmVudCB0byB0b2dnbGUgdGhlIGN1cnJlbnQgdmlzaWJpbGl0eSBzdGF0ZS5cbiAqXG4gKiBgYGBodG1sXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICd6aXBweScsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxuICogICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZSgpXCI+VG9nZ2xlPC9kaXY+XG4gKiAgICAgPGRpdiBbaGlkZGVuXT1cIiF2aXNpYmxlXCI+XG4gKiAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gKiAgICAgPC9kaXY+XG4gKiAgPC9kaXY+YH0pXG4gKiBleHBvcnQgY2xhc3MgWmlwcHkge1xuICogICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAqICAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICogICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICpcbiAqICAgdG9nZ2xlKCkge1xuICogICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gKiAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xuICogICAgICAgdGhpcy5vcGVuLmVtaXQobnVsbCk7XG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAqICAgICB9XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEFjY2VzcyB0aGUgZXZlbnQgb2JqZWN0IHdpdGggdGhlIGAkZXZlbnRgIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgb3V0cHV0IGV2ZW50XG4gKiBoYW5kbGVyOlxuICpcbiAqIGBgYGh0bWxcbiAqIDx6aXBweSAob3Blbik9XCJvbk9wZW4oJGV2ZW50KVwiIChjbG9zZSk9XCJvbkNsb3NlKCRldmVudClcIj48L3ppcHB5PlxuICogYGBgXG4gKlxuICogQHNlZSBbT2JzZXJ2YWJsZXMgaW4gQW5ndWxhcl0oZ3VpZGUvb2JzZXJ2YWJsZXMtaW4tYW5ndWxhcilcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFdmVudEVtaXR0ZXI8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgX19pc0FzeW5jOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgdGhhdCBjYW5cbiAgICogZGVsaXZlciBldmVudHMgc3luY2hyb25vdXNseSBvciBhc3luY2hyb25vdXNseS5cbiAgICpcbiAgICogQHBhcmFtIFtpc0FzeW5jPWZhbHNlXSBXaGVuIHRydWUsIGRlbGl2ZXIgZXZlbnRzIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKi9cbiAgbmV3KGlzQXN5bmM/OiBib29sZWFuKTogRXZlbnRFbWl0dGVyPFQ+O1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCBjb250YWluaW5nIGEgZ2l2ZW4gdmFsdWUuXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gZW1pdC5cbiAgICovXG4gIGVtaXQodmFsdWU/OiBUKTogdm9pZDtcblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGhhbmRsZXJzIGZvciBldmVudHMgZW1pdHRlZCBieSB0aGlzIGluc3RhbmNlLlxuICAgKiBAcGFyYW0gbmV4dCBXaGVuIHN1cHBsaWVkLCBhIGN1c3RvbSBoYW5kbGVyIGZvciBlbWl0dGVkIGV2ZW50cy5cbiAgICogQHBhcmFtIGVycm9yIFdoZW4gc3VwcGxpZWQsIGEgY3VzdG9tIGhhbmRsZXIgZm9yIGFuIGVycm9yIG5vdGlmaWNhdGlvbiBmcm9tIHRoaXMgZW1pdHRlci5cbiAgICogQHBhcmFtIGNvbXBsZXRlIFdoZW4gc3VwcGxpZWQsIGEgY3VzdG9tIGhhbmRsZXIgZm9yIGEgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGlzXG4gICAqICAgICBlbWl0dGVyLlxuICAgKi9cbiAgc3Vic2NyaWJlKG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsIGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6XG4gICAgICBTdWJzY3JpcHRpb247XG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgaGFuZGxlcnMgZm9yIGV2ZW50cyBlbWl0dGVkIGJ5IHRoaXMgaW5zdGFuY2UuXG4gICAqIEBwYXJhbSBvYnNlcnZlck9yTmV4dCBXaGVuIHN1cHBsaWVkLCBhIGN1c3RvbSBoYW5kbGVyIGZvciBlbWl0dGVkIGV2ZW50cywgb3IgYW4gb2JzZXJ2ZXJcbiAgICogICAgIG9iamVjdC5cbiAgICogQHBhcmFtIGVycm9yIFdoZW4gc3VwcGxpZWQsIGEgY3VzdG9tIGhhbmRsZXIgZm9yIGFuIGVycm9yIG5vdGlmaWNhdGlvbiBmcm9tIHRoaXMgZW1pdHRlci5cbiAgICogQHBhcmFtIGNvbXBsZXRlIFdoZW4gc3VwcGxpZWQsIGEgY3VzdG9tIGhhbmRsZXIgZm9yIGEgY29tcGxldGlvbiBub3RpZmljYXRpb24gZnJvbSB0aGlzXG4gICAqICAgICBlbWl0dGVyLlxuICAgKi9cbiAgc3Vic2NyaWJlKG9ic2VydmVyT3JOZXh0PzogYW55LCBlcnJvcj86IGFueSwgY29tcGxldGU/OiBhbnkpOiBTdWJzY3JpcHRpb247XG59XG5cbmNsYXNzIEV2ZW50RW1pdHRlcl8gZXh0ZW5kcyBTdWJqZWN0PGFueT4ge1xuICBfX2lzQXN5bmM6IGJvb2xlYW47ICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgY29uc3RydWN0b3IoaXNBc3luYzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9faXNBc3luYyA9IGlzQXN5bmM7XG4gIH1cblxuICBlbWl0KHZhbHVlPzogYW55KSB7XG4gICAgc3VwZXIubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBvdmVycmlkZSBzdWJzY3JpYmUob2JzZXJ2ZXJPck5leHQ/OiBhbnksIGVycm9yPzogYW55LCBjb21wbGV0ZT86IGFueSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgbGV0IG5leHRGbiA9IG9ic2VydmVyT3JOZXh0O1xuICAgIGxldCBlcnJvckZuID0gZXJyb3IgfHwgKCgpID0+IG51bGwpO1xuICAgIGxldCBjb21wbGV0ZUZuID0gY29tcGxldGU7XG5cbiAgICBpZiAob2JzZXJ2ZXJPck5leHQgJiYgdHlwZW9mIG9ic2VydmVyT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBvYnNlcnZlck9yTmV4dCBhcyBQYXJ0aWFsT2JzZXJ2ZXI8dW5rbm93bj47XG4gICAgICBuZXh0Rm4gPSBvYnNlcnZlci5uZXh0Py5iaW5kKG9ic2VydmVyKTtcbiAgICAgIGVycm9yRm4gPSBvYnNlcnZlci5lcnJvcj8uYmluZChvYnNlcnZlcik7XG4gICAgICBjb21wbGV0ZUZuID0gb2JzZXJ2ZXIuY29tcGxldGU/LmJpbmQob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9faXNBc3luYykge1xuICAgICAgZXJyb3JGbiA9IF93cmFwSW5UaW1lb3V0KGVycm9yRm4pO1xuXG4gICAgICBpZiAobmV4dEZuKSB7XG4gICAgICAgIG5leHRGbiA9IF93cmFwSW5UaW1lb3V0KG5leHRGbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21wbGV0ZUZuKSB7XG4gICAgICAgIGNvbXBsZXRlRm4gPSBfd3JhcEluVGltZW91dChjb21wbGV0ZUZuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaW5rID0gc3VwZXIuc3Vic2NyaWJlKHtuZXh0OiBuZXh0Rm4sIGVycm9yOiBlcnJvckZuLCBjb21wbGV0ZTogY29tcGxldGVGbn0pO1xuXG4gICAgaWYgKG9ic2VydmVyT3JOZXh0IGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICBvYnNlcnZlck9yTmV4dC5hZGQoc2luayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbms7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3dyYXBJblRpbWVvdXQoZm46ICh2YWx1ZTogdW5rbm93bikgPT4gYW55KSB7XG4gIHJldHVybiAodmFsdWU6IHVua25vd24pID0+IHtcbiAgICBzZXRUaW1lb3V0KGZuLCB1bmRlZmluZWQsIHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBFdmVudEVtaXR0ZXI6IHtcbiAgbmV3IChpc0FzeW5jPzogYm9vbGVhbik6IEV2ZW50RW1pdHRlcjxhbnk+OyBuZXc8VD4oaXNBc3luYz86IGJvb2xlYW4pOiBFdmVudEVtaXR0ZXI8VD47XG4gIHJlYWRvbmx5IHByb3RvdHlwZTogRXZlbnRFbWl0dGVyPGFueT47XG59ID0gRXZlbnRFbWl0dGVyXyBhcyBhbnk7XG4iXX0=