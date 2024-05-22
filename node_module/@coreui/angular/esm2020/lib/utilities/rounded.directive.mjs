import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class RoundedDirective {
    constructor() {
        /**
         * Set border radius variant and radius size
         * @type Rounded
         */
        this.rounded = true;
    }
    get hostClasses() {
        if (typeof this.rounded === 'boolean') {
            return { rounded: true };
        }
        if (typeof this.rounded === 'number' || typeof this.rounded === 'string') {
            return {
                [`rounded-${this.rounded}`]: true
            };
        }
        if (typeof this.rounded === 'object') {
            const roundedObj = {
                top: undefined,
                end: undefined,
                bottom: undefined,
                start: undefined,
                circle: undefined,
                pill: undefined,
                size: undefined,
                ...this.rounded,
            };
            // @ts-ignore
            const keys = Object.keys(roundedObj).filter(key => roundedObj[key] !== undefined);
            const classes = {};
            keys.forEach(key => {
                // @ts-ignore
                const val = roundedObj[key];
                if (typeof val === 'boolean') {
                    // @ts-ignore
                    classes[`rounded-${key}`] = val;
                }
                else {
                    // @ts-ignore
                    classes[`rounded-${val}`] = true;
                }
            });
            // console.log('rounded keys', keys, classes);
            return Object.entries(classes).length === 0 ? { rounded: false } : classes;
        }
    }
}
RoundedDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RoundedDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RoundedDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: RoundedDirective, selector: "[cRounded]", inputs: { rounded: ["cRounded", "rounded"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RoundedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cRounded]'
                }]
        }], propDecorators: { rounded: [{
                type: Input,
                args: ['cRounded']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmRlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3V0aWxpdGllcy9yb3VuZGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTlELE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFLRTs7O1dBR0c7UUFDZ0IsWUFBTyxHQUFZLElBQUksQ0FBQztLQTBDNUM7SUF4Q0MsSUFDSSxXQUFXO1FBRWIsSUFBSyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFHO1lBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRztZQUMxRSxPQUFPO2dCQUNMLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJO2FBQ2xDLENBQUM7U0FDSDtRQUNELElBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRztZQUN0QyxNQUFNLFVBQVUsR0FBRztnQkFDakIsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsU0FBUztnQkFDakIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNoQixDQUFDO1lBQ0YsYUFBYTtZQUNiLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBRSxDQUFDO1lBQ25GLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixhQUFhO2dCQUNiLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQzVCLGFBQWE7b0JBQ2IsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ2pDO3FCQUFNO29CQUNMLGFBQWE7b0JBQ2IsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCw4Q0FBOEM7WUFDOUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs2R0EvQ1UsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7OEJBT29CLE9BQU87c0JBQXpCLEtBQUs7dUJBQUMsVUFBVTtnQkFHYixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3VuZGVkLCBSb3VuZGVkU2l6ZSB9IGZyb20gJy4vcm91bmRlZC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NSb3VuZGVkXSdcbn0pXG5leHBvcnQgY2xhc3MgUm91bmRlZERpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIFNldCBib3JkZXIgcmFkaXVzIHZhcmlhbnQgYW5kIHJhZGl1cyBzaXplXG4gICAqIEB0eXBlIFJvdW5kZWRcbiAgICovXG4gIEBJbnB1dCgnY1JvdW5kZWQnKSByb3VuZGVkOiBSb3VuZGVkID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG5cbiAgICBpZiAoIHR5cGVvZiB0aGlzLnJvdW5kZWQgPT09ICdib29sZWFuJyApIHtcbiAgICAgIHJldHVybiB7IHJvdW5kZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgaWYgKCB0eXBlb2YgdGhpcy5yb3VuZGVkID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpcy5yb3VuZGVkID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgcm91bmRlZC0ke3RoaXMucm91bmRlZH1gXTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCB0eXBlb2YgdGhpcy5yb3VuZGVkID09PSAnb2JqZWN0JyApIHtcbiAgICAgIGNvbnN0IHJvdW5kZWRPYmogPSB7XG4gICAgICAgIHRvcDogdW5kZWZpbmVkLFxuICAgICAgICBlbmQ6IHVuZGVmaW5lZCxcbiAgICAgICAgYm90dG9tOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgICAgIGNpcmNsZTogdW5kZWZpbmVkLFxuICAgICAgICBwaWxsOiB1bmRlZmluZWQsXG4gICAgICAgIHNpemU6IHVuZGVmaW5lZCxcbiAgICAgICAgLi4udGhpcy5yb3VuZGVkLFxuICAgICAgfTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb3VuZGVkT2JqKS5maWx0ZXIoa2V5ID0+IHJvdW5kZWRPYmpba2V5XSAhPT0gdW5kZWZpbmVkICk7XG4gICAgICBjb25zdCBjbGFzc2VzID0ge307XG4gICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB2YWwgPSByb3VuZGVkT2JqW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2xhc3Nlc1tgcm91bmRlZC0ke2tleX1gXSA9IHZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2xhc3Nlc1tgcm91bmRlZC0ke3ZhbH1gXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3JvdW5kZWQga2V5cycsIGtleXMsIGNsYXNzZXMpO1xuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzZXMpLmxlbmd0aCA9PT0gMCA/IHtyb3VuZGVkOiBmYWxzZX0gOiBjbGFzc2VzO1xuICAgIH1cbiAgfVxufVxuIl19