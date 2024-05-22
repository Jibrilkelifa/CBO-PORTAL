import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { BreakpointInfix } from '../coreui.types';
import * as i0 from "@angular/core";
export class ColDirective {
    constructor() {
        this._xs = false;
        this._sm = false;
        this._md = false;
        this._lg = false;
        this._xl = false;
        this._xxl = false;
    }
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     * @type { 'auto' | number |  boolean }
     */
    set cCol(value) {
        this.xs = this.xs || this.coerceInput(value);
    }
    set xs(value) {
        this._xs = this.coerceInput(value);
    }
    get xs() {
        return this._xs;
    }
    /**
     * The number of columns/offset/order on small devices (<768px).
     * @type { 'auto' | number |  boolean }
     */
    set sm(value) {
        this._sm = this.coerceInput(value);
    }
    get sm() {
        return this._sm;
    }
    /**
     * The number of columns/offset/order on medium devices (<992px).
     * @type { 'auto' | number |  boolean }
     */
    set md(value) {
        this._md = this.coerceInput(value);
    }
    get md() {
        return this._md;
    }
    /**
     * The number of columns/offset/order on large devices (<1200px).
     * @type { 'auto' | number |  boolean }
     */
    set lg(value) {
        this._lg = this.coerceInput(value);
    }
    get lg() {
        return this._lg;
    }
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xl(value) {
        this._xl = this.coerceInput(value);
    }
    get xl() {
        return this._xl;
    }
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xxl(value) {
        this._xxl = this.coerceInput(value);
    }
    get xxl() {
        return this._xxl;
    }
    get hostClasses() {
        const classes = {
            col: true
        };
        Object.keys(BreakpointInfix).forEach((breakpoint) => {
            // @ts-ignore
            const value = this[breakpoint];
            const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
            classes[`col${infix}`] = value === true;
            classes[`col${infix}-${value}`] = (typeof value === 'number') || (typeof value === 'string');
        });
        if (typeof this.offset === 'object') {
            const offset = { ...this.offset };
            Object.entries(offset).forEach((entry) => {
                const [breakpoint, value] = [...entry];
                const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
                classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
            });
        }
        else {
            classes[`offset-${this.offset}`] = (typeof this.offset === 'number') && this.offset > 0 && this.offset <= 11;
        }
        if (typeof this.order === 'object') {
            const order = { ...this.order };
            Object.entries(order).forEach((entry) => {
                const [breakpoint, value] = [...entry];
                const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
                classes[`order${infix}-${value}`] = value;
            });
        }
        else {
            classes[`order-${this.order}`] = !!this.order;
        }
        // if there is no 'col' class, add one
        classes.col = (!Object.entries(classes).filter(i => i[0].startsWith('col-') && i[1]).length) || this.xs === true;
        return classes;
    }
    coerceInput(value) {
        if (value === 'auto') {
            return value;
        }
        if (value === '' || value === undefined || value === null) {
            return coerceBooleanProperty(value);
        }
        if (typeof value === 'boolean') {
            return value;
        }
        return coerceNumberProperty(value);
    }
}
ColDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ColDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: ColDirective, selector: "[cCol]", inputs: { cCol: "cCol", xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl", offset: "offset", order: "order" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCol]'
                }]
        }], propDecorators: { cCol: [{
                type: Input
            }], xs: [{
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
            }], offset: [{
                type: Input
            }], order: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9jb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLG9CQUFvQixFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFHL0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUtsRCxNQUFNLE9BQU8sWUFBWTtJQUh6QjtRQTRCVSxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxTQUFJLEdBQWlDLEtBQUssQ0FBQztLQTJEcEQ7SUEzSUM7OztPQUdHO0lBQ0gsSUFDSSxJQUFJLENBQUMsS0FBbUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQ0ksRUFBRSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsSUFDSSxFQUFFLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJ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SyxFQUFFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzt5R0FwSlUsWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBSHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzhCQWdCSyxJQUFJO3NCQURQLEtBQUs7Z0JBS0YsRUFBRTtzQkFETCxLQUFLO2dCQWNGLEVBQUU7c0JBREwsS0FBSztnQkFjRixFQUFFO3NCQURMLEtBQUs7Z0JBY0YsRUFBRTtzQkFETCxLQUFLO2dCQWNGLEVBQUU7c0JBREwsS0FBSztnQkFjRixHQUFHO3NCQUROLEtBQUs7Z0JBU0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHksIE51bWJlcklucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgQ29sT3JkZXIsIElDb2wgfSBmcm9tICcuL2NvbC50eXBlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRJbmZpeCB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjQ29sXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29sRGlyZWN0aXZlIGltcGxlbWVudHMgSUNvbCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NDb2w6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCk7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV94czogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NtOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbWQ6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCk7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sZzogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3hsOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfeHhsOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIGV4dHJhIHNtYWxsIGRldmljZXMgKDw1NzZweCkuXG4gICAqIEB0eXBlIHsgJ2F1dG8nIHwgbnVtYmVyIHwgIGJvb2xlYW4gfVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNDb2wodmFsdWU6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkpIHtcbiAgICB0aGlzLnhzID0gdGhpcy54cyB8fCB0aGlzLmNvZXJjZUlucHV0KHZhbHVlKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgeHModmFsdWUpIHtcbiAgICB0aGlzLl94cyA9IHRoaXMuY29lcmNlSW5wdXQodmFsdWUpO1xuICB9XG4gIGdldCB4cygpOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5feHM7XG4gIH1cbiAgcHJpdmF0ZSBfeHM6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBzbWFsbCBkZXZpY2VzICg8NzY4cHgpLlxuICAgKiBAdHlwZSB7ICdhdXRvJyB8IG51bWJlciB8ICBib29sZWFuIH1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzbSh2YWx1ZSkge1xuICAgIHRoaXMuX3NtID0gdGhpcy5jb2VyY2VJbnB1dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHNtKCk6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkge1xuICAgIHJldHVybiB0aGlzLl9zbTtcbiAgfVxuICBwcml2YXRlIF9zbTogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIG1lZGl1bSBkZXZpY2VzICg8OTkycHgpLlxuICAgKiBAdHlwZSB7ICdhdXRvJyB8IG51bWJlciB8ICBib29sZWFuIH1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBtZCh2YWx1ZSkge1xuICAgIHRoaXMuX21kID0gdGhpcy5jb2VyY2VJbnB1dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IG1kKCk6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkge1xuICAgIHJldHVybiB0aGlzLl9tZDtcbiAgfVxuICBwcml2YXRlIF9tZDogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIGxhcmdlIGRldmljZXMgKDwxMjAwcHgpLlxuICAgKiBAdHlwZSB7ICdhdXRvJyB8IG51bWJlciB8ICBib29sZWFuIH1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBsZyh2YWx1ZSkge1xuICAgIHRoaXMuX2xnID0gdGhpcy5jb2VyY2VJbnB1dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IGxnKCk6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkge1xuICAgIHJldHVybiB0aGlzLl9sZztcbiAgfVxuICBwcml2YXRlIF9sZzogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIFgtTGFyZ2UgZGV2aWNlcyAoPDE0MDBweCkuXG4gICAqIEB0eXBlIHsgJ2F1dG8nIHwgbnVtYmVyIHwgIGJvb2xlYW4gfVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHhsKHZhbHVlKSB7XG4gICAgdGhpcy5feGwgPSB0aGlzLmNvZXJjZUlucHV0KHZhbHVlKTtcbiAgfVxuICBnZXQgeGwoKTogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3hsO1xuICB9XG4gIHByaXZhdGUgX3hsOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucy9vZmZzZXQvb3JkZXIgb24gWFgtTGFyZ2UgZGV2aWNlcyAo4omlMTQwMHB4KS5cbiAgICogQHR5cGUgeyAnYXV0bycgfCBudW1iZXIgfCAgYm9vbGVhbiB9XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgeHhsKHZhbHVlKSB7XG4gICAgdGhpcy5feHhsID0gdGhpcy5jb2VyY2VJbnB1dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHh4bCgpOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5feHhsO1xuICB9XG4gIHByaXZhdGUgX3h4bDogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG9mZnNldD86IChudW1iZXIgfCB7ICd4cyc/OiBudW1iZXIsIHNtPzogbnVtYmVyLCBtZD86IG51bWJlciwgbGc/OiBudW1iZXIsIHhsPzogbnVtYmVyLCB4eGw/OiBudW1iZXIgfSk7XG4gIEBJbnB1dCgpIG9yZGVyPzogKENvbE9yZGVyIHwgeyB4cz86IENvbE9yZGVyLCBzbT86IENvbE9yZGVyLCBtZD86IENvbE9yZGVyLCBsZz86IENvbE9yZGVyLCB4bD86IENvbE9yZGVyLCB4eGw/OiBDb2xPcmRlciB9KTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG5cbiAgICBjb25zdCBjbGFzc2VzOiBhbnkgPSB7XG4gICAgICBjb2w6IHRydWVcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoQnJlYWtwb2ludEluZml4KS5mb3JFYWNoKChicmVha3BvaW50KSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiA9IHRoaXNbYnJlYWtwb2ludF07XG4gICAgICBjb25zdCBpbmZpeCA9IGJyZWFrcG9pbnQgPT09ICd4cycgPyAnJyA6IGAtJHticmVha3BvaW50fWA7XG4gICAgICBjbGFzc2VzW2Bjb2wke2luZml4fWBdID0gdmFsdWUgPT09IHRydWU7XG4gICAgICBjbGFzc2VzW2Bjb2wke2luZml4fS0ke3ZhbHVlfWBdID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKTtcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vZmZzZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSB7IC4uLnRoaXMub2Zmc2V0IH07XG4gICAgICBPYmplY3QuZW50cmllcyhvZmZzZXQpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IFticmVha3BvaW50LCB2YWx1ZV0gPSBbLi4uZW50cnldO1xuICAgICAgICBjb25zdCBpbmZpeCA9IGJyZWFrcG9pbnQgPT09ICd4cycgPyAnJyA6IGAtJHticmVha3BvaW50fWA7XG4gICAgICAgIGNsYXNzZXNbYG9mZnNldCR7aW5maXh9LSR7dmFsdWV9YF0gPSB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IDExO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzZXNbYG9mZnNldC0ke3RoaXMub2Zmc2V0fWBdID0gKHR5cGVvZiB0aGlzLm9mZnNldCA9PT0gJ251bWJlcicpICYmIHRoaXMub2Zmc2V0ID4gMCAmJiB0aGlzLm9mZnNldCA8PSAxMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3JkZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBvcmRlciA9IHsgLi4udGhpcy5vcmRlciB9O1xuICAgICAgT2JqZWN0LmVudHJpZXMob3JkZXIpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IFticmVha3BvaW50LCB2YWx1ZV0gPSBbLi4uZW50cnldO1xuICAgICAgICBjb25zdCBpbmZpeCA9IGJyZWFrcG9pbnQgPT09ICd4cycgPyAnJyA6IGAtJHticmVha3BvaW50fWA7XG4gICAgICAgIGNsYXNzZXNbYG9yZGVyJHtpbmZpeH0tJHt2YWx1ZX1gXSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzZXNbYG9yZGVyLSR7dGhpcy5vcmRlcn1gXSA9ICEhdGhpcy5vcmRlcjtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyAnY29sJyBjbGFzcywgYWRkIG9uZVxuICAgIGNsYXNzZXMuY29sID0gKCFPYmplY3QuZW50cmllcyhjbGFzc2VzKS5maWx0ZXIoaSA9PiBpWzBdLnN0YXJ0c1dpdGgoJ2NvbC0nKSAmJiBpWzFdKS5sZW5ndGgpIHx8IHRoaXMueHMgPT09IHRydWU7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb2VyY2VJbnB1dCh2YWx1ZTogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xuICB9XG59XG4iXX0=