import { Directive, HostBinding, Input } from '@angular/core';
import { BreakpointInfix } from '../coreui.types';
import * as i0 from "@angular/core";
export class GutterDirective {
    constructor() {
        /**
         * Define padding between columns to space and align content responsively in the Bootstrap grid system.
         */
        this.gutter = {};
    }
    get hostClasses() {
        let gutterClass;
        if (typeof this.gutter === 'number') {
            gutterClass = GutterDirective.getGutterClasses({ g: this.gutter });
            return gutterClass;
        }
        {
            // @ts-ignore
            const { g, gx, gy } = { ...this.gutter };
            gutterClass = GutterDirective.getGutterClasses({ g, gx, gy });
        }
        Object.keys(BreakpointInfix).forEach(key => {
            // @ts-ignore
            const gutter = this.gutter[key] ? { ...this.gutter[key] } : undefined;
            if (gutter) {
                const classes = GutterDirective.getGutterClasses(gutter, key);
                gutterClass = { ...gutterClass, ...classes };
            }
        });
        return gutterClass;
    }
    static getGutterClasses(gutter, breakpoint) {
        const { g, gx, gy } = { ...gutter };
        const infix = breakpoint ? `-${breakpoint}` : '';
        return {
            [`g${infix}-${g}`]: typeof g === 'number',
            [`gx${infix}-${gx}`]: typeof gx === 'number',
            [`gy${infix}-${gy}`]: typeof gy === 'number'
        };
    }
}
GutterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GutterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GutterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: GutterDirective, selector: "[gutter]", inputs: { gutter: "gutter" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: GutterDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[gutter]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { gutter: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3V0dGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9ndXR0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBT2xELE1BQU0sT0FBTyxlQUFlO0lBTTFCO1FBTEE7O1dBRUc7UUFDTSxXQUFNLEdBQWtELEVBQUUsQ0FBQztJQUVwRCxDQUFDO0lBRWpCLElBQ0ksV0FBVztRQUViLElBQUksV0FBZ0IsQ0FBQztRQUVyQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDbkMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNuRSxPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVEO1lBQ0UsYUFBYTtZQUNiLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMvRDtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLGFBQWE7WUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDdEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxHQUFHLEVBQUUsR0FBRyxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFxQixFQUFFLFVBQW1CO1FBQ3hFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRCxPQUFPO1lBQ0wsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDekMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLFFBQVE7WUFDNUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLFFBQVE7U0FDN0MsQ0FBQztJQUNKLENBQUM7OzRHQTNDVSxlQUFlO2dHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxVQUFVO2lCQUNyQjswRUFLVSxNQUFNO3NCQUFkLEtBQUs7Z0JBS0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCcmVha3BvaW50SW5maXggfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgR3V0dGVyQnJlYWtwb2ludHMsIEd1dHRlcnMsIElHdXR0ZXIsIElHdXR0ZXJPYmplY3QgfSBmcm9tICcuL2d1dHRlci50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2d1dHRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIEd1dHRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIElHdXR0ZXIge1xuICAvKipcbiAgICogRGVmaW5lIHBhZGRpbmcgYmV0d2VlbiBjb2x1bW5zIHRvIHNwYWNlIGFuZCBhbGlnbiBjb250ZW50IHJlc3BvbnNpdmVseSBpbiB0aGUgQm9vdHN0cmFwIGdyaWQgc3lzdGVtLlxuICAgKi9cbiAgQElucHV0KCkgZ3V0dGVyOiAoSUd1dHRlck9iamVjdCB8IEd1dHRlckJyZWFrcG9pbnRzIHwgR3V0dGVycykgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcblxuICAgIGxldCBndXR0ZXJDbGFzczogYW55O1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmd1dHRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgIGd1dHRlckNsYXNzID0gR3V0dGVyRGlyZWN0aXZlLmdldEd1dHRlckNsYXNzZXMoeyBnOiB0aGlzLmd1dHRlciB9KTtcbiAgICAgIHJldHVybiBndXR0ZXJDbGFzcztcbiAgICB9XG5cbiAgICB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCB7IGcsIGd4LCBneSB9ID0geyAuLi50aGlzLmd1dHRlciB9O1xuICAgICAgZ3V0dGVyQ2xhc3MgPSBHdXR0ZXJEaXJlY3RpdmUuZ2V0R3V0dGVyQ2xhc3Nlcyh7IGcsIGd4LCBneSB9KTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhCcmVha3BvaW50SW5maXgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGd1dHRlciA9IHRoaXMuZ3V0dGVyW2tleV0gPyB7IC4uLnRoaXMuZ3V0dGVyW2tleV0gfSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChndXR0ZXIpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IEd1dHRlckRpcmVjdGl2ZS5nZXRHdXR0ZXJDbGFzc2VzKGd1dHRlciwga2V5KTtcbiAgICAgICAgZ3V0dGVyQ2xhc3MgPSB7IC4uLmd1dHRlckNsYXNzLCAuLi5jbGFzc2VzIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGd1dHRlckNsYXNzO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0R3V0dGVyQ2xhc3NlcyhndXR0ZXI6IElHdXR0ZXJPYmplY3QsIGJyZWFrcG9pbnQ/OiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IHsgZywgZ3gsIGd5IH0gPSB7IC4uLmd1dHRlciB9O1xuICAgIGNvbnN0IGluZml4ID0gYnJlYWtwb2ludCA/IGAtJHticmVha3BvaW50fWAgOiAnJztcbiAgICByZXR1cm4ge1xuICAgICAgW2BnJHtpbmZpeH0tJHtnfWBdOiB0eXBlb2YgZyA9PT0gJ251bWJlcicsXG4gICAgICBbYGd4JHtpbmZpeH0tJHtneH1gXTogdHlwZW9mIGd4ID09PSAnbnVtYmVyJyxcbiAgICAgIFtgZ3kke2luZml4fS0ke2d5fWBdOiB0eXBlb2YgZ3kgPT09ICdudW1iZXInXG4gICAgfTtcbiAgfVxufVxuIl19