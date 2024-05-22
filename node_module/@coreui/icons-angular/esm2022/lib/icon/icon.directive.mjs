import { afterNextRender, AfterRenderPhase, Directive, HostBinding, Input } from '@angular/core';
import { toCamelCase } from './icon.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../icon-set";
export class IconDirective {
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
    // @HostBinding('innerHtml')
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
        afterNextRender(() => {
            this.elementRef.nativeElement.innerHTML = this.innerHtml;
        }, { phase: AfterRenderPhase.Write });
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
        if (this.name && !this.iconSet?.icons[this.name]) {
            console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. ` +
                `To use icon by 'name' prop you need to add it to IconSet service. \n`, this.name);
        }
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
        return !this.customClasses ? classes : this.customClasses;
    }
    toCamelCase(str) {
        return toCamelCase(str);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.DomSanitizer }, { token: i2.IconSetService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "17.2.1", type: IconDirective, isStandalone: true, selector: "svg[cIcon]", inputs: { content: ["cIcon", "content"], size: "size", title: "title", customClasses: "customClasses", width: "width", height: "height", name: ["name", "name", (value) => value && value.includes('-') ? toCamelCase(value) : value], viewBox: "viewBox", xmlns: "xmlns", pointerEvents: ["pointer-events", "pointerEvents"], role: "role" }, host: { properties: { "attr.viewBox": "this.viewBox", "attr.xmlns": "this.xmlns", "attr.pointer-events": "this.pointerEvents", "attr.role": "this.role", "class": "this.hostClasses" } }, exportAs: ["cIcon"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'svg[cIcon]',
                    exportAs: 'cIcon',
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: i2.IconSetService }], propDecorators: { content: [{
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
                type: Input,
                args: [{ transform: (value) => value && value.includes('-') ? toCamelCase(value) : value }]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktaWNvbnMtYW5ndWxhci9zcmMvbGliL2ljb24vaWNvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQWMsV0FBVyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUt4SCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBTzNDLE1BQU0sT0FBTyxhQUFhO0lBV3hCLElBRUksT0FBTyxDQUFDLE9BQWU7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFhRCxJQUNJLFdBQVc7UUFDYixNQUFNLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxJQUFJO1lBQ1YsQ0FBQyxRQUFRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtTQUNuRCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLElBQUksU0FBUztRQUNYLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZGLHVCQUF1QjtRQUN2Qix5RUFBeUU7UUFDekUsT0FB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aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEljb25TZXRTZXJ2aWNlIH0gZnJvbSAnLi4vaWNvbi1zZXQnO1xuaW1wb3J0IHsgSWNvblNpemUsIElJY29uIH0gZnJvbSAnLi9pY29uLmludGVyZmFjZSc7XG5pbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gJy4vaWNvbi51dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3N2Z1tjSWNvbl0nLFxuICBleHBvcnRBczogJ2NJY29uJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgSUljb24ge1xuXG4gIEBJbnB1dCgnY0ljb24nKSBjb250ZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBhbnlbXTtcbiAgQElucHV0KCkgc2l6ZTogSWNvblNpemUgPSAnJztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9O1xuICBASW5wdXQoKSB3aWR0aD86IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHZhbHVlOiBzdHJpbmcpID0+IHZhbHVlICYmIHZhbHVlLmluY2x1ZGVzKCctJykgPyB0b0NhbWVsQ2FzZSh2YWx1ZSkgOiB2YWx1ZSB9KSBuYW1lITogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci52aWV3Qm94JylcbiAgQElucHV0KClcbiAgc2V0IHZpZXdCb3godmlld0JveDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld0JveCA9IHZpZXdCb3g7XG4gIH1cblxuICBnZXQgdmlld0JveCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92aWV3Qm94ID8/IHRoaXMuc2NhbGU7XG4gIH1cblxuICBwcml2YXRlIF92aWV3Qm94ITogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci54bWxucycpXG4gIEBJbnB1dCgpIHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucG9pbnRlci1ldmVudHMnKVxuICBASW5wdXQoJ3BvaW50ZXItZXZlbnRzJykgcG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIEBJbnB1dCgpIHJvbGUgPSAnaW1nJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBpY29uOiB0cnVlLFxuICAgICAgW2BpY29uLSR7dGhpcy5jb21wdXRlZFNpemV9YF06ICEhdGhpcy5jb21wdXRlZFNpemVcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUNsYXNzZXMgPz8gY2xhc3NlcztcbiAgfVxuXG4gIC8vIEBIb3N0QmluZGluZygnaW5uZXJIdG1sJylcbiAgZ2V0IGlubmVySHRtbCgpIHtcbiAgICBjb25zdCBjb2RlID0gQXJyYXkuaXNBcnJheSh0aGlzLmNvZGUpID8gdGhpcy5jb2RlWzFdIHx8IHRoaXMuY29kZVswXSA6IHRoaXMuY29kZSA/PyAnJztcbiAgICAvLyB0b2RvIHByb3BlciBzYW5pdGl6ZVxuICAgIC8vIGNvbnN0IHNhbml0aXplZCA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBjb2RlKTtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoKHRoaXMudGl0bGVDb2RlICsgY29kZSkgPz8gJycpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgaWNvblNldDogSWNvblNldFNlcnZpY2VcbiAgKSB7XG4gICAgYWZ0ZXJOZXh0UmVuZGVyKCgpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIdG1sO1xuICAgIH0sIHsgcGhhc2U6IEFmdGVyUmVuZGVyUGhhc2UuV3JpdGUgfSk7XG4gIH1cblxuICBnZXQgdGl0bGVDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPyBgPHRpdGxlPiR7dGhpcy50aXRsZX08L3RpdGxlPmAgOiAnJztcbiAgfVxuXG4gIGdldCBjb2RlKCk6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5pY29uU2V0ICYmIHRoaXMubmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblNldC5nZXRJY29uKHRoaXMubmFtZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgJiYgIXRoaXMuaWNvblNldD8uaWNvbnNbdGhpcy5uYW1lXSkge1xuICAgICAgY29uc29sZS53YXJuKGBjLWljb24gY29tcG9uZW50OiBpY29uIG5hbWUgJyR7dGhpcy5uYW1lfScgZG9lcyBub3QgZXhpc3QgZm9yIEljb25TZXQgc2VydmljZS4gYCArXG4gICAgICAgIGBUbyB1c2UgaWNvbiBieSAnbmFtZScgcHJvcCB5b3UgbmVlZCB0byBhZGQgaXQgdG8gSWNvblNldCBzZXJ2aWNlLiBcXG5gLFxuICAgICAgICB0aGlzLm5hbWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgc2NhbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLmNvZGUpICYmIHRoaXMuY29kZS5sZW5ndGggPiAxID8gYDAgMCAke3RoaXMuY29kZVswXX1gIDogJzAgMCA2NCA2NCc7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRTaXplKCk6IEV4Y2x1ZGU8SWNvblNpemUsICdjdXN0b20nPiB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgYWRkQ3VzdG9tID0gIXRoaXMuc2l6ZSAmJiAodGhpcy53aWR0aCB8fCB0aGlzLmhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2N1c3RvbScgfHwgYWRkQ3VzdG9tID8gJ2N1c3RvbS1zaXplJyA6IHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldCBjb21wdXRlZENsYXNzZXMoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIGljb246IHRydWUsXG4gICAgICBbYGljb24tJHt0aGlzLmNvbXB1dGVkU2l6ZX1gXTogISF0aGlzLmNvbXB1dGVkU2l6ZVxuICAgIH07XG4gICAgcmV0dXJuICF0aGlzLmN1c3RvbUNsYXNzZXMgPyBjbGFzc2VzIDogdGhpcy5jdXN0b21DbGFzc2VzO1xuICB9XG5cbiAgdG9DYW1lbENhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0b0NhbWVsQ2FzZShzdHIpO1xuICB9XG59XG4iXX0=