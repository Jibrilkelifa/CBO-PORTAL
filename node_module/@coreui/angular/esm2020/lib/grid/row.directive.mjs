import { Directive, HostBinding, Input } from '@angular/core';
import { BreakpointInfix } from '../coreui.types';
import * as i0 from "@angular/core";
export class RowDirective {
    get hostClasses() {
        const cols = this.xs;
        const classes = {
            row: true,
            [`row-cols-${cols}`]: !!cols,
        };
        Object.keys(BreakpointInfix).forEach(breakpoint => {
            // @ts-ignore
            const value = this[breakpoint];
            if ((typeof value === 'number') || (typeof value === 'string')) {
                const infix = breakpoint === 'xs' ? '' : breakpoint;
                classes[`row-cols-${infix}-${value}`] = !!value;
            }
        });
        return classes;
    }
}
RowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: RowDirective, selector: "[cRow]", inputs: { xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: RowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cRow]'
                }]
        }], propDecorators: { xs: [{
                type: Input
            }], sm: [{
                type: Input
            }], md: [{
                type: Input
            }], lg: [{
                type: Input
            }], xl: [{
                type: Input
            }], xxl: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBTWxELE1BQU0sT0FBTyxZQUFZO0lBZ0N2QixJQUNJLFdBQVc7UUFFYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFRO1lBQ25CLEdBQUcsRUFBRSxJQUFJO1lBQ1QsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUk7U0FDN0IsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2hELGFBQWE7WUFDYixNQUFNLEtBQUssR0FBUSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUU7Z0JBQzlELE1BQU0sS0FBSyxHQUFXLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUM1RCxPQUFPLENBQUMsWUFBWSxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzt5R0FwRFUsWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBSHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzhCQU1VLEVBQUU7c0JBQVYsS0FBSztnQkFLRyxFQUFFO3NCQUFWLEtBQUs7Z0JBS0csRUFBRTtzQkFBVixLQUFLO2dCQUtHLEVBQUU7c0JBQVYsS0FBSztnQkFLRyxFQUFFO3NCQUFWLEtBQUs7Z0JBS0csR0FBRztzQkFBWCxLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnJlYWtwb2ludEluZml4IH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcbmltcG9ydCB7IElSb3csIE51bWJlck9mQ29sdW1ucyB9IGZyb20gJy4vcm93LnR5cGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1Jvd10nXG59KVxuZXhwb3J0IGNsYXNzIFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIElSb3cge1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBleHRyYSBzbWFsbCBkZXZpY2VzICg8NTc2cHgpLlxuICAgKiBAdHlwZSB7eyBjb2xzOiAnYXV0bycgfCBudW1iZXIgfVxuICAgKi9cbiAgQElucHV0KCkgeHM/OiBOdW1iZXJPZkNvbHVtbnM7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIHNtYWxsIGRldmljZXMgKDw3NjhweCkuXG4gICAqIEB0eXBlIHt7IGNvbHM6ICdhdXRvJyB8IG51bWJlciB9XG4gICAqL1xuICBASW5wdXQoKSBzbT86IE51bWJlck9mQ29sdW1ucztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucy9vZmZzZXQvb3JkZXIgb24gbWVkaXVtIGRldmljZXMgKDw5OTJweCkuXG4gICAqIEB0eXBlIHt7IGNvbHM6ICdhdXRvJyB8IG51bWJlciB9XG4gICAqL1xuICBASW5wdXQoKSBtZD86IE51bWJlck9mQ29sdW1ucztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucy9vZmZzZXQvb3JkZXIgb24gbGFyZ2UgZGV2aWNlcyAoPDEyMDBweCkuXG4gICAqIEB0eXBlIHt7IGNvbHM6ICdhdXRvJyB8IG51bWJlciB9XG4gICAqL1xuICBASW5wdXQoKSBsZz86IE51bWJlck9mQ29sdW1ucztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucy9vZmZzZXQvb3JkZXIgb24gWC1MYXJnZSBkZXZpY2VzICg8MTQwMHB4KS5cbiAgICogQHR5cGUge3sgY29sczogJ2F1dG8nIHwgbnVtYmVyIH1cbiAgICovXG4gIEBJbnB1dCgpIHhsPzogTnVtYmVyT2ZDb2x1bW5zO1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBYWC1MYXJnZSBkZXZpY2VzICjiiaUxNDAwcHgpLlxuICAgKiBAdHlwZSB7eyBjb2xzOiAnYXV0bycgfCBudW1iZXIgfVxuICAgKi9cbiAgQElucHV0KCkgeHhsPzogTnVtYmVyT2ZDb2x1bW5zO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcblxuICAgIGNvbnN0IGNvbHMgPSB0aGlzLnhzO1xuXG4gICAgY29uc3QgY2xhc3NlczogYW55ID0ge1xuICAgICAgcm93OiB0cnVlLFxuICAgICAgW2Byb3ctY29scy0ke2NvbHN9YF06ICEhY29scyxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoQnJlYWtwb2ludEluZml4KS5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHRoaXNbYnJlYWtwb2ludF07XG4gICAgICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBjb25zdCBpbmZpeDogc3RyaW5nID0gYnJlYWtwb2ludCA9PT0gJ3hzJyA/ICcnIDogYnJlYWtwb2ludDtcbiAgICAgICAgY2xhc3Nlc1tgcm93LWNvbHMtJHtpbmZpeH0tJHt2YWx1ZX1gXSA9ICEhdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19