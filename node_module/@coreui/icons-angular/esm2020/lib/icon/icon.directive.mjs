import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../icon-set";
export class IconDirective {
    set name(name) {
        this._name = name?.includes('-') ? this.toCamelCase(name) : name;
    }
    get name() {
        return this._name;
    }
    set viewBox(viewBox) {
        this._viewBox = viewBox;
    }
    get viewBox() {
        return this._viewBox ?? this.scale;
    }
    get hostClasses() {
        const classes = {
            icon: true,
            [`icon-${this.computedSize}`]: !!this.computedSize
        };
        return this.customClasses ?? classes;
    }
    get innerHtml() {
        const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code ?? '';
        // todo proper sanitize
        // const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, code);
        return this.sanitizer.bypassSecurityTrustHtml((this.titleCode + code) ?? '');
    }
    constructor(renderer, elementRef, sanitizer, iconSet) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.iconSet = iconSet;
        this.size = '';
        this.xmlns = 'http://www.w3.org/2000/svg';
        this.pointerEvents = 'none';
        this.role = 'img';
    }
    get titleCode() {
        return this.title ? `<title>${this.title}</title>` : '';
    }
    get code() {
        if (this.content) {
            return this.content;
        }
        if (this.iconSet && this.name) {
            return this.iconSet.getIcon(this.name);
        }
        if (this.name && !this.iconSet?.icons[this.name])
            console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. ` +
                `To use icon by 'name' prop you need to add it to IconSet service. \n`, this.name);
        return undefined;
    }
    get scale() {
        return Array.isArray(this.code) && this.code.length > 1 ? `0 0 ${this.code[0]}` : '0 0 64 64';
    }
    get computedSize() {
        const addCustom = !this.size && (this.width || this.height);
        return this.size === 'custom' || addCustom ? 'custom-size' : this.size;
    }
    get computedClasses() {
        const classes = {
            icon: true,
            [`icon-${this.computedSize}`]: !!this.computedSize
        };
        return !!this.customClasses ? this.customClasses : classes;
    }
    toCamelCase(str) {
        return str.replace(/([-_][a-z0-9])/ig, ($1) => {
            return $1.toUpperCase().replace('-', '');
        });
    }
}
IconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.DomSanitizer }, { token: i2.IconSetService }], target: i0.ɵɵFactoryTarget.Directive });
IconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.6", type: IconDirective, isStandalone: true, selector: "svg[cIcon]", inputs: { content: ["cIcon", "content"], size: "size", title: "title", customClasses: "customClasses", width: "width", height: "height", name: "name", viewBox: "viewBox", xmlns: "xmlns", pointerEvents: ["pointer-events", "pointerEvents"], role: "role" }, host: { properties: { "attr.viewBox": "this.viewBox", "attr.xmlns": "this.xmlns", "attr.pointer-events": "this.pointerEvents", "attr.role": "this.role", "class": "this.hostClasses", "innerHtml": "this.innerHtml" } }, exportAs: ["cIcon"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'svg[cIcon]',
                    exportAs: 'cIcon',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: i2.IconSetService }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cIcon']
            }], size: [{
                type: Input
            }], title: [{
                type: Input
            }], customClasses: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], name: [{
                type: Input
            }], viewBox: [{
                type: HostBinding,
                args: ['attr.viewBox']
            }, {
                type: Input
            }], xmlns: [{
                type: HostBinding,
                args: ['attr.xmlns']
            }, {
                type: Input
            }], pointerEvents: [{
                type: HostBinding,
                args: ['attr.pointer-events']
            }, {
                type: Input,
                args: ['pointer-events']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], innerHtml: [{
                type: HostBinding,
                args: ['innerHtml']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktaWNvbnMtYW5ndWxhci9zcmMvbGliL2ljb24vaWNvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7O0FBV3JGLE1BQU0sT0FBTyxhQUFhO0lBU3hCLElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkUsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBR0QsSUFFSSxPQUFPLENBQUMsT0FBZTtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQVlELElBQ0ksV0FBVztRQUNiLE1BQU0sT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLElBQUk7WUFDVixDQUFDLFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ25ELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUNJLFNBQVM7UUFDWCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFB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LE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzswR0FyR1UsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7aUxBR2lCLE9BQU87c0JBQXRCLEtBQUs7dUJBQUMsT0FBTztnQkFDTCxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFHRixJQUFJO3NCQURQLEtBQUs7Z0JBV0YsT0FBTztzQkFGVixXQUFXO3VCQUFDLGNBQWM7O3NCQUMxQixLQUFLO2dCQVVHLEtBQUs7c0JBRGIsV0FBVzt1QkFBQyxZQUFZOztzQkFDeEIsS0FBSztnQkFHbUIsYUFBYTtzQkFEckMsV0FBVzt1QkFBQyxxQkFBcUI7O3NCQUNqQyxLQUFLO3VCQUFDLGdCQUFnQjtnQkFHZCxJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBVWhCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBJY29uU2V0U2VydmljZSB9IGZyb20gJy4uL2ljb24tc2V0JztcblxuaW1wb3J0IHsgSWNvblNpemUsIElJY29uIH0gZnJvbSAnLi9pY29uLmludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3N2Z1tjSWNvbl0nLFxuICBleHBvcnRBczogJ2NJY29uJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgSUljb24ge1xuXG4gIEBJbnB1dCgnY0ljb24nKSBjb250ZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBhbnlbXTtcbiAgQElucHV0KCkgc2l6ZTogSWNvblNpemUgPSAnJztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9O1xuICBASW5wdXQoKSB3aWR0aD86IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lPy5pbmNsdWRlcygnLScpID8gdGhpcy50b0NhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIH1cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBwcml2YXRlIF9uYW1lITogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci52aWV3Qm94JylcbiAgQElucHV0KClcbiAgc2V0IHZpZXdCb3godmlld0JveDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld0JveCA9IHZpZXdCb3g7XG4gIH1cbiAgZ2V0IHZpZXdCb3goKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld0JveCA/PyB0aGlzLnNjYWxlO1xuICB9XG4gIHByaXZhdGUgX3ZpZXdCb3ghOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnhtbG5zJylcbiAgQElucHV0KCkgeG1sbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5wb2ludGVyLWV2ZW50cycpXG4gIEBJbnB1dCgncG9pbnRlci1ldmVudHMnKSBwb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgQElucHV0KCkgcm9sZSA9ICdpbWcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIGljb246IHRydWUsXG4gICAgICBbYGljb24tJHt0aGlzLmNvbXB1dGVkU2l6ZX1gXTogISF0aGlzLmNvbXB1dGVkU2l6ZVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tQ2xhc3NlcyA/PyBjbGFzc2VzO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdpbm5lckh0bWwnKVxuICBnZXQgaW5uZXJIdG1sKCkge1xuICAgIGNvbnN0IGNvZGUgPSBBcnJheS5pc0FycmF5KHRoaXMuY29kZSkgPyB0aGlzLmNvZGVbMV0gfHwgdGhpcy5jb2RlWzBdIDogdGhpcy5jb2RlID8/ICcnO1xuICAgIC8vIHRvZG8gcHJvcGVyIHNhbml0aXplXG4gICAgLy8gY29uc3Qgc2FuaXRpemVkID0gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGNvZGUpO1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCgodGhpcy50aXRsZUNvZGUgKyBjb2RlKSA/PyAnJyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBpY29uU2V0OiBJY29uU2V0U2VydmljZVxuICApIHsgfVxuXG4gIGdldCB0aXRsZUNvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSA/IGA8dGl0bGU+JHt0aGlzLnRpdGxlfTwvdGl0bGU+YCA6ICcnO1xuICB9XG5cbiAgZ2V0IGNvZGUoKTogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmljb25TZXQgJiYgdGhpcy5uYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5pY29uU2V0LmdldEljb24odGhpcy5uYW1lKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubmFtZSAmJiAhdGhpcy5pY29uU2V0Py5pY29uc1t0aGlzLm5hbWVdKVxuICAgICAgY29uc29sZS53YXJuKGBjLWljb24gY29tcG9uZW50OiBpY29uIG5hbWUgJyR7dGhpcy5uYW1lfScgZG9lcyBub3QgZXhpc3QgZm9yIEljb25TZXQgc2VydmljZS4gYCArXG4gICAgICAgIGBUbyB1c2UgaWNvbiBieSAnbmFtZScgcHJvcCB5b3UgbmVlZCB0byBhZGQgaXQgdG8gSWNvblNldCBzZXJ2aWNlLiBcXG5gLFxuICAgICAgICB0aGlzLm5hbWVcbiAgICAgICk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBzY2FsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuY29kZSkgJiYgdGhpcy5jb2RlLmxlbmd0aCA+IDEgPyBgMCAwICR7dGhpcy5jb2RlWzBdfWAgOiAnMCAwIDY0IDY0JztcbiAgfVxuXG4gIGdldCBjb21wdXRlZFNpemUoKTogRXhjbHVkZTxJY29uU2l6ZSwgJ2N1c3RvbSc+IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBhZGRDdXN0b20gPSAhdGhpcy5zaXplICYmICh0aGlzLndpZHRoIHx8IHRoaXMuaGVpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy5zaXplID09PSAnY3VzdG9tJyB8fCBhZGRDdXN0b20gPyAnY3VzdG9tLXNpemUnIDogdGhpcy5zaXplO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkQ2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBpY29uOiB0cnVlLFxuICAgICAgW2BpY29uLSR7dGhpcy5jb21wdXRlZFNpemV9YF06ICEhdGhpcy5jb21wdXRlZFNpemVcbiAgICB9O1xuICAgIHJldHVybiAhIXRoaXMuY3VzdG9tQ2xhc3NlcyA/IHRoaXMuY3VzdG9tQ2xhc3NlcyA6IGNsYXNzZXM7XG4gIH1cblxuICB0b0NhbWVsQ2FzZShzdHI6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy1fXVthLXowLTldKS9pZywgKCQxOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiAkMS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJy0nLCAnJyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==