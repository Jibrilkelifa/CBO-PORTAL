import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BorderDirective {
    constructor() {
        /**
         * Add or remove an element’s borders
         * @type Border
         */
        this.border = true;
    }
    get hostClasses() {
        if (typeof this.border === 'boolean') {
            return { border: true };
        }
        if (typeof this.border === 'number' || typeof this.border === 'string') {
            return {
                border: true,
                [`border-${this.border}`]: true
            };
        }
        if (typeof this.border === 'object') {
            const borderObj = { top: undefined, end: undefined, bottom: undefined, start: undefined, color: undefined, ...this.border };
            // @ts-ignore
            const keys = Object.keys(borderObj).filter(key => borderObj[key] !== undefined);
            const classes = {};
            keys.forEach(key => {
                // @ts-ignore
                const val = borderObj[key];
                if (typeof val === 'boolean') {
                    // @ts-ignore
                    classes[`border-${key}`] = true;
                }
                else if (typeof val === 'number' || typeof val === 'string') {
                    // @ts-ignore
                    classes[`border-${key}-${val}`] = true;
                }
                else if (typeof val === 'object') {
                    if ('color' in val) {
                        // @ts-ignore
                        classes[`border-${key}-${val.color}`] = true;
                    }
                    if ('width' in val) {
                        // @ts-ignore
                        classes[`border-${key}-${val.width}`] = true;
                    }
                }
            });
            return Object.entries(classes).length === 0 ? { border: false } : classes;
        }
    }
}
BorderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BorderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BorderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: BorderDirective, selector: "[cBorder]", inputs: { border: ["cBorder", "border"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: BorderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cBorder]'
                }]
        }], propDecorators: { border: [{
                type: Input,
                args: ['cBorder']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdXRpbGl0aWVzL2JvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU05RCxNQUFNLE9BQU8sZUFBZTtJQUg1QjtRQUlFOzs7V0FHRztRQUNlLFdBQU0sR0FBVyxJQUFJLENBQUM7S0EwQ3pDO0lBeENDLElBQ0ksV0FBVztRQUViLElBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRztZQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUc7WUFDeEUsT0FBTztnQkFDTCxNQUFNLEVBQUUsSUFBSTtnQkFDWixDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTthQUNoQyxDQUFDO1NBQ0g7UUFDRCxJQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUc7WUFDckMsTUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUgsYUFBYTtZQUNiLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixhQUFhO2dCQUNiLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSyxPQUFPLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQzdCLGFBQWE7b0JBQ2IsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ2pDO3FCQUFNLElBQUssT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRztvQkFDL0QsYUFBYTtvQkFDYixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ3hDO3FCQUFNLElBQUssT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFHO29CQUNwQyxJQUFJLE9BQU8sSUFBSSxHQUFHLEVBQUU7d0JBQ2xCLGFBQWE7d0JBQ2IsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztxQkFDOUM7b0JBQ0QsSUFBSSxPQUFPLElBQUksR0FBRyxFQUFFO3dCQUNsQixhQUFhO3dCQUNiLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7cUJBQzlDO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN6RTtJQUNILENBQUM7OzRHQTlDVSxlQUFlO2dHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFIM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7OEJBTW1CLE1BQU07c0JBQXZCLEtBQUs7dUJBQUMsU0FBUztnQkFHWixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb3JkZXIsIEJvcmRlckNvbG9yLCBJQm9yZGVyRWxlbWVudCwgQm9yZGVyV2lkdGggfSBmcm9tICcuL2JvcmRlci50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NCb3JkZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBCb3JkZXJEaXJlY3RpdmUge1xuICAvKipcbiAgICogQWRkIG9yIHJlbW92ZSBhbiBlbGVtZW504oCZcyBib3JkZXJzXG4gICAqIEB0eXBlIEJvcmRlclxuICAgKi9cbiAgQElucHV0KCdjQm9yZGVyJykgYm9yZGVyOiBCb3JkZXIgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcblxuICAgIGlmICggdHlwZW9mIHRoaXMuYm9yZGVyID09PSAnYm9vbGVhbicgKSB7XG4gICAgICByZXR1cm4geyBib3JkZXI6IHRydWUgfTtcbiAgICB9XG4gICAgaWYgKCB0eXBlb2YgdGhpcy5ib3JkZXIgPT09ICdudW1iZXInIHx8IHR5cGVvZiB0aGlzLmJvcmRlciA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBib3JkZXI6IHRydWUsXG4gICAgICAgIFtgYm9yZGVyLSR7dGhpcy5ib3JkZXJ9YF06IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICggdHlwZW9mIHRoaXMuYm9yZGVyID09PSAnb2JqZWN0JyApIHtcbiAgICAgIGNvbnN0IGJvcmRlck9iaiA9IHsgdG9wOiB1bmRlZmluZWQsIGVuZDogdW5kZWZpbmVkLCBib3R0b206IHVuZGVmaW5lZCwgc3RhcnQ6IHVuZGVmaW5lZCwgY29sb3I6IHVuZGVmaW5lZCwgLi4udGhpcy5ib3JkZXIgfTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhib3JkZXJPYmopLmZpbHRlcihrZXkgPT4gYm9yZGVyT2JqW2tleV0gIT09IHVuZGVmaW5lZCk7XG4gICAgICBjb25zdCBjbGFzc2VzID0ge307XG4gICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB2YWwgPSBib3JkZXJPYmpba2V5XTtcbiAgICAgICAgaWYgKCB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2xhc3Nlc1tgYm9yZGVyLSR7a2V5fWBdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNsYXNzZXNbYGJvcmRlci0ke2tleX0tJHt2YWx9YF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICBpZiAoJ2NvbG9yJyBpbiB2YWwpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzZXNbYGJvcmRlci0ke2tleX0tJHt2YWwuY29sb3J9YF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJ3dpZHRoJyBpbiB2YWwpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzZXNbYGJvcmRlci0ke2tleX0tJHt2YWwud2lkdGh9YF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NlcykubGVuZ3RoID09PSAwID8ge2JvcmRlcjogZmFsc2V9IDogY2xhc3NlcztcbiAgICB9XG4gIH1cbn1cbiJdfQ==