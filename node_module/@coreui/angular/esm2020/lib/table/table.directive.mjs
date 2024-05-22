import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class TableDirective {
    /**
     * Add borders on all sides of the table and cells.
     * @type boolean
     */
    set bordered(value) {
        this._bordered = coerceBooleanProperty(value);
    }
    ;
    get bordered() {
        return this._bordered;
    }
    /**
     * Remove borders on all sides of the table and cells.
     * @type boolean
     */
    set borderless(value) {
        this._borderless = coerceBooleanProperty(value);
    }
    ;
    get borderless() {
        return this._borderless;
    }
    /**
     * Enable a hover state on table rows within table body.
     * @type boolean
     */
    set hover(value) {
        this._hover = coerceBooleanProperty(value);
    }
    ;
    get hover() {
        return this._hover;
    }
    /**
     * Make table more compact by cutting all cell `padding` in half.
     * @type boolean
     */
    set small(value) {
        this._small = coerceBooleanProperty(value);
    }
    ;
    get small() {
        return this._small;
    }
    /**
     * Add zebra-striping to any table row within the table body.
     * @type boolean
     */
    set striped(value) {
        this._striped = coerceBooleanProperty(value);
    }
    ;
    get striped() {
        return this._striped;
    }
    /**
     * Add zebra-striping to any table column.
     * @type boolean
     * @since 4.2.4
     */
    set stripedColumns(value) {
        this._stripedColumns = coerceBooleanProperty(value);
    }
    ;
    get stripedColumns() {
        return this._stripedColumns;
    }
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this._bordered = false;
        this._borderless = false;
        this._hover = false;
        this._small = false;
        this._striped = false;
        this._stripedColumns = false;
    }
    get hostClasses() {
        return {
            table: true,
            [`align-${this.align}`]: !!this.align,
            [`caption-${this.caption}`]: !!this.caption,
            [`border-${this.borderColor}`]: !!this.borderColor,
            'table-bordered': this.bordered,
            'table-borderless': this.borderless,
            [`table-${this.color}`]: !!this.color,
            'table-hover': this.hover,
            'table-sm': this.small,
            'table-striped': this.striped,
            'table-striped-columns': this.stripedColumns
        };
    }
    ngOnInit() {
        this.setResponsiveWrapper();
    }
    // todo
    setResponsiveWrapper() {
        if (!!this.responsive) {
            const nativeElement = this.hostElement.nativeElement;
            const wrapper = this.renderer.createElement('div');
            const className = this.responsive === true ? 'table-responsive' : `table-responsive-${this.responsive}`;
            this.renderer.addClass(wrapper, className);
            const parentNode = this.renderer.parentNode(nativeElement);
            this.renderer.appendChild(parentNode, wrapper);
            this.renderer.insertBefore(parentNode, wrapper, nativeElement);
            this.renderer.appendChild(wrapper, nativeElement);
        }
    }
}
TableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
TableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.2", type: TableDirective, selector: "[cTable]", inputs: { align: "align", borderColor: "borderColor", bordered: "bordered", borderless: "borderless", caption: "caption", color: "color", hover: "hover", responsive: "responsive", small: "small", striped: "striped", stripedColumns: "stripedColumns" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: TableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTable]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { align: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], bordered: [{
                type: Input
            }], borderless: [{
                type: Input
            }], caption: [{
                type: Input
            }], color: [{
                type: Input
            }], hover: [{
                type: Input
            }], responsive: [{
                type: Input
            }], small: [{
                type: Input
            }], striped: [{
                type: Input
            }], stripedColumns: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90YWJsZS90YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBSzVFLE1BQU0sT0FBTyxjQUFjO0lBcUJ6Qjs7O09BR0c7SUFDSCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUlEOzs7T0FHRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBZ0JEOzs7T0FHRztJQUNILElBQ0ksS0FBSyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBVUQ7OztPQUdHO0lBQ0gsSUFDSSxLQUFLLENBQUMsS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7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QUM7WUFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7MkdBeEtVLGNBQWM7K0ZBQWQsY0FBYzsyRkFBZCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjt5SEFjVSxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSztnQkFPRixRQUFRO3NCQURYLEtBQUs7Z0JBZ0JGLFVBQVU7c0JBRGIsS0FBSztnQkFlRyxPQUFPO3NCQUFmLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU9GLEtBQUs7c0JBRFIsS0FBSztnQkFlRyxVQUFVO3NCQUFsQixLQUFLO2dCQU9GLEtBQUs7c0JBRFIsS0FBSztnQkFnQkYsT0FBTztzQkFEVixLQUFLO2dCQWlCRixjQUFjO3NCQURqQixLQUFLO2dCQWlCRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMsIENvbG9ycyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjVGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVybGVzczogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaG92ZXI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NtYWxsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdHJpcGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdHJpcGVkQ29sdW1uczogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZlcnRpY2FsIGFsaWdubWVudC5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEB2YWx1ZXMgJ2JvdHRvbScgfCAnbWlkZGxlJyB8ICd0b3AnXG4gICAqL1xuICBASW5wdXQoKSBhbGlnbj86ICdib3R0b20nIHwgJ21pZGRsZScgfCAndG9wJztcblxuICAvKipcbiAgICogU2V0cyB0aGUgYm9yZGVyIGNvbG9yIG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBib3JkZXJDb2xvcj86IENvbG9ycztcblxuICAvKipcbiAgICogQWRkIGJvcmRlcnMgb24gYWxsIHNpZGVzIG9mIHRoZSB0YWJsZSBhbmQgY2VsbHMuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBib3JkZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JvcmRlcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfTtcblxuICBnZXQgYm9yZGVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJvcmRlcnMgb24gYWxsIHNpZGVzIG9mIHRoZSB0YWJsZSBhbmQgY2VsbHMuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBib3JkZXJsZXNzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYm9yZGVybGVzcyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG5cbiAgZ2V0IGJvcmRlcmxlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmxlc3M7XG4gIH1cblxuICBwcml2YXRlIF9ib3JkZXJsZXNzID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFB1dCB0aGUgYDxjYXB0aW9uPmAgb24gdGhlIHRvcCBvZiB0aGUgdGFibGUuXG4gICAqIEB2YWx1ZXMgJ3RvcCdcbiAgICovXG4gIEBJbnB1dCgpIGNhcHRpb24/OiAndG9wJztcblxuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnM7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhIGhvdmVyIHN0YXRlIG9uIHRhYmxlIHJvd3Mgd2l0aGluIHRhYmxlIGJvZHkuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBob3Zlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hvdmVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfTtcblxuICBnZXQgaG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfaG92ZXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogTWFrZSB0YWJsZSByZXNwb25zaXZlIGFjcm9zcyBhbGwgdmlld3BvcnRzIG9yIHBpY2sgYSBtYXhpbXVtIGJyZWFrcG9pbnQgd2l0aCB3aGljaCB0byBoYXZlIGEgcmVzcG9uc2l2ZSB0YWJsZSB1cCB0by5cbiAgICogQHR5cGU6IHtib29sZWFuIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnfVxuICAgKi9cbiAgQElucHV0KCkgcmVzcG9uc2l2ZT86IGJvb2xlYW4gfCBPbWl0PEJyZWFrcG9pbnRzLCAneHMnPjtcblxuICAvKipcbiAgICogTWFrZSB0YWJsZSBtb3JlIGNvbXBhY3QgYnkgY3V0dGluZyBhbGwgY2VsbCBgcGFkZGluZ2AgaW4gaGFsZi5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHNtYWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc21hbGwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9O1xuXG4gIGdldCBzbWFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc21hbGw7XG4gIH1cblxuICBwcml2YXRlIF9zbWFsbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBZGQgemVicmEtc3RyaXBpbmcgdG8gYW55IHRhYmxlIHJvdyB3aXRoaW4gdGhlIHRhYmxlIGJvZHkuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHJpcGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyaXBlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH07XG5cbiAgZ2V0IHN0cmlwZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cmlwZWQ7XG4gIH1cblxuICBwcml2YXRlIF9zdHJpcGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEFkZCB6ZWJyYS1zdHJpcGluZyB0byBhbnkgdGFibGUgY29sdW1uLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBzaW5jZSA0LjIuNFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHN0cmlwZWRDb2x1bW5zKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyaXBlZENvbHVtbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9O1xuXG4gIGdldCBzdHJpcGVkQ29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyaXBlZENvbHVtbnM7XG4gIH1cblxuICBwcml2YXRlIF9zdHJpcGVkQ29sdW1ucyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWJsZTogdHJ1ZSxcbiAgICAgIFtgYWxpZ24tJHt0aGlzLmFsaWdufWBdOiAhIXRoaXMuYWxpZ24sXG4gICAgICBbYGNhcHRpb24tJHt0aGlzLmNhcHRpb259YF06ICEhdGhpcy5jYXB0aW9uLFxuICAgICAgW2Bib3JkZXItJHt0aGlzLmJvcmRlckNvbG9yfWBdOiAhIXRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAndGFibGUtYm9yZGVyZWQnOiB0aGlzLmJvcmRlcmVkLFxuICAgICAgJ3RhYmxlLWJvcmRlcmxlc3MnOiB0aGlzLmJvcmRlcmxlc3MsXG4gICAgICBbYHRhYmxlLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yLFxuICAgICAgJ3RhYmxlLWhvdmVyJzogdGhpcy5ob3ZlcixcbiAgICAgICd0YWJsZS1zbSc6IHRoaXMuc21hbGwsXG4gICAgICAndGFibGUtc3RyaXBlZCc6IHRoaXMuc3RyaXBlZCxcbiAgICAgICd0YWJsZS1zdHJpcGVkLWNvbHVtbnMnOiB0aGlzLnN0cmlwZWRDb2x1bW5zXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0UmVzcG9uc2l2ZVdyYXBwZXIoKTtcbiAgfVxuXG4gIC8vIHRvZG9cbiAgc2V0UmVzcG9uc2l2ZVdyYXBwZXIoKTogdm9pZCB7XG4gICAgaWYgKCEhdGhpcy5yZXNwb25zaXZlKSB7XG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5yZXNwb25zaXZlID09PSB0cnVlID8gJ3RhYmxlLXJlc3BvbnNpdmUnIDogYHRhYmxlLXJlc3BvbnNpdmUtJHt0aGlzLnJlc3BvbnNpdmV9YDtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mod3JhcHBlciwgY2xhc3NOYW1lKTtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUobmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudE5vZGUsIHdyYXBwZXIpO1xuICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUocGFyZW50Tm9kZSwgd3JhcHBlciwgbmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHdyYXBwZXIsIG5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIl19