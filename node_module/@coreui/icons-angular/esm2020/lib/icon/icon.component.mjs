import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../icon-set";
export class IconComponent {
    set name(name) {
        this._name = name.includes('-') ? this.toCamelCase(name) : name;
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
        this.attributes = { role: 'img' };
        this.size = '';
        this.use = '';
        this.customClasses = '';
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.classList.forEach((item) => {
            this.renderer.addClass(this.svgElementRef.nativeElement, item);
        });
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        const svgElement = this.svgElementRef.nativeElement;
        this.renderer.insertBefore(parentElement, svgElement, this.elementRef.nativeElement);
        this.renderer.removeChild(parentElement, this.elementRef.nativeElement);
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
        return !!this.customClasses ? this.customClasses : classes;
    }
    toCamelCase(str) {
        return str.replace(/([-_][a-z0-9])/ig, ($1) => {
            return $1.toUpperCase().replace('-', '');
        });
    }
}
IconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.DomSanitizer }, { token: i2.IconSetService }], target: i0.ɵɵFactoryTarget.Component });
IconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.6", type: IconComponent, isStandalone: true, selector: "c-icon", inputs: { attributes: "attributes", content: "content", size: "size", title: "title", use: "use", customClasses: "customClasses", width: "width", height: "height", name: "name", viewBox: "viewBox" }, viewQueries: [{ propertyName: "svgElementRef", first: true, predicate: ["svgElement"], descendants: true, read: ElementRef }], ngImport: i0, template: "<svg *ngIf=\"(!use) && (!!code)\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [attr.viewBox]=\"viewBox\"\n     [innerHtml]=\"innerHtml\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf=\"use\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n>\n  <use [attr.href]=\"use\"></use>\n</svg>\n", styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.6", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-icon', standalone: true, imports: [NgClass, NgIf, HtmlAttributesDirective], template: "<svg *ngIf=\"(!use) && (!!code)\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [attr.viewBox]=\"viewBox\"\n     [innerHtml]=\"innerHtml\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf=\"use\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n>\n  <use [attr.href]=\"use\"></use>\n</svg>\n", styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: i2.IconSetService }]; }, propDecorators: { attributes: [{
                type: Input
            }], content: [{
                type: Input
            }], size: [{
                type: Input
            }], title: [{
                type: Input
            }], use: [{
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
                type: Input
            }], svgElementRef: [{
                type: ViewChild,
                args: ['svgElement', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktaWNvbnMtYW5ndWxhci9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktaWNvbnMtYW5ndWxhci9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFXeEUsTUFBTSxPQUFPLGFBQWE7SUFXeEIsSUFDSSxJQUFJLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCxJQUNJLE9BQU8sQ0FBQyxPQUFlO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBTUQsSUFBSSxTQUFTO1FBQ1gsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElB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SXhDLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFHRixJQUFJO3NCQURQLEtBQUs7Z0JBWUYsT0FBTztzQkFEVixLQUFLO2dCQVd5QyxhQUFhO3NCQUEzRCxTQUFTO3VCQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEh0bWxBdHRyaWJ1dGVzRGlyZWN0aXZlIH0gZnJvbSAnLi4vc2hhcmVkL2h0bWwtYXR0ci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSWNvblNldFNlcnZpY2UgfSBmcm9tICcuLi9pY29uLXNldCc7XG5pbXBvcnQgeyBJY29uU2l6ZSwgSUljb24gfSBmcm9tICcuL2ljb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50LnN2ZycsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE5nSWYsIEh0bWxBdHRyaWJ1dGVzRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgSUljb24sIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIGF0dHJpYnV0ZXM6IGFueSA9IHsgcm9sZTogJ2ltZycgfTtcbiAgQElucHV0KCkgY29udGVudD86IHN0cmluZyB8IHN0cmluZ1tdIHwgYW55W107XG4gIEBJbnB1dCgpIHNpemU6IEljb25TaXplID0gJyc7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSB1c2UgPSAnJztcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3Nlcz86IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gPSAnJztcbiAgQElucHV0KCkgd2lkdGg/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodD86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZS5pbmNsdWRlcygnLScpID8gdGhpcy50b0NhbWVsQ2FzZShuYW1lKSA6IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBfbmFtZSE6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgdmlld0JveCh2aWV3Qm94OiBzdHJpbmcpIHtcbiAgICB0aGlzLl92aWV3Qm94ID0gdmlld0JveDtcbiAgfVxuXG4gIGdldCB2aWV3Qm94KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdCb3ggPz8gdGhpcy5zY2FsZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZpZXdCb3ghOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnc3ZnRWxlbWVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzdmdFbGVtZW50UmVmITogRWxlbWVudFJlZjtcblxuICBnZXQgaW5uZXJIdG1sKCk6IFNhZmVIdG1sIHtcbiAgICBjb25zdCBjb2RlID0gQXJyYXkuaXNBcnJheSh0aGlzLmNvZGUpID8gdGhpcy5jb2RlWzFdIHx8IHRoaXMuY29kZVswXSA6IHRoaXMuY29kZSA/PyAnJztcbiAgICAvLyB0b2RvIHByb3BlciBzYW5pdGl6ZVxuICAgIC8vIGNvbnN0IHNhbml0aXplZCA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBjb2RlKTtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoKHRoaXMudGl0bGVDb2RlICsgY29kZSkgPz8gJycpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgaWNvblNldDogSWNvblNldFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zdmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGl0ZW0pO1xuICAgIH0pO1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSB0aGlzLnN2Z0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShwYXJlbnRFbGVtZW50LCBzdmdFbGVtZW50LCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChwYXJlbnRFbGVtZW50LCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBnZXQgdGl0bGVDb2RlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPyBgPHRpdGxlPiR7dGhpcy50aXRsZX08L3RpdGxlPmAgOiAnJztcbiAgfVxuXG4gIGdldCBjb2RlKCk6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5pY29uU2V0ICYmIHRoaXMubmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWNvblNldC5nZXRJY29uKHRoaXMubmFtZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgJiYgIXRoaXMuaWNvblNldD8uaWNvbnNbdGhpcy5uYW1lXSkge1xuICAgICAgY29uc29sZS53YXJuKGBjLWljb24gY29tcG9uZW50OiBpY29uIG5hbWUgJyR7dGhpcy5uYW1lfScgZG9lcyBub3QgZXhpc3QgZm9yIEljb25TZXQgc2VydmljZS4gYCArXG4gICAgICAgIGBUbyB1c2UgaWNvbiBieSAnbmFtZScgcHJvcCB5b3UgbmVlZCB0byBhZGQgaXQgdG8gSWNvblNldCBzZXJ2aWNlLiBcXG5gLFxuICAgICAgICB0aGlzLm5hbWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXQgc2NhbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLmNvZGUpICYmIHRoaXMuY29kZS5sZW5ndGggPiAxID8gYDAgMCAke3RoaXMuY29kZVswXX1gIDogJzAgMCA2NCA2NCc7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRTaXplKCk6IEV4Y2x1ZGU8SWNvblNpemUsICdjdXN0b20nPiB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgYWRkQ3VzdG9tID0gIXRoaXMuc2l6ZSAmJiAodGhpcy53aWR0aCB8fCB0aGlzLmhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ2N1c3RvbScgfHwgYWRkQ3VzdG9tID8gJ2N1c3RvbS1zaXplJyA6IHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldCBjb21wdXRlZENsYXNzZXMoKTogYW55IHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgaWNvbjogdHJ1ZSxcbiAgICAgIFtgaWNvbi0ke3RoaXMuY29tcHV0ZWRTaXplfWBdOiAhIXRoaXMuY29tcHV0ZWRTaXplXG4gICAgfTtcbiAgICByZXR1cm4gISF0aGlzLmN1c3RvbUNsYXNzZXMgPyB0aGlzLmN1c3RvbUNsYXNzZXMgOiBjbGFzc2VzO1xuICB9XG5cbiAgdG9DYW1lbENhc2Uoc3RyOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFstX11bYS16MC05XSkvaWcsICgkMTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gJDEudG9VcHBlckNhc2UoKS5yZXBsYWNlKCctJywgJycpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8c3ZnICpuZ0lmPVwiKCF1c2UpICYmICghIWNvZGUpXCJcbiAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgIFthdHRyLndpZHRoXT1cIndpZHRoXCJcbiAgICAgW2F0dHIuaGVpZ2h0XT1cImhlaWdodCB8fCB3aWR0aFwiXG4gICAgIFthdHRyLnZpZXdCb3hdPVwidmlld0JveFwiXG4gICAgIFtpbm5lckh0bWxdPVwiaW5uZXJIdG1sXCJcbiAgICAgW25nQ2xhc3NdPVwiY29tcHV0ZWRDbGFzc2VzXCJcbiAgICAgW2NIdG1sQXR0cl09XCJhdHRyaWJ1dGVzXCJcbiAgICAgcm9sZT1cImltZ1wiXG4gICAgIHBvaW50ZXItZXZlbnRzPVwibm9uZVwiXG4gICAgICNzdmdFbGVtZW50XG4+XG48L3N2Zz5cblxuPHN2ZyAqbmdJZj1cInVzZVwiXG4gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICBbYXR0ci53aWR0aF09XCJ3aWR0aFwiXG4gICAgIFthdHRyLmhlaWdodF09XCJoZWlnaHQgfHwgd2lkdGhcIlxuICAgICBbbmdDbGFzc109XCJjb21wdXRlZENsYXNzZXNcIlxuICAgICBbY0h0bWxBdHRyXT1cImF0dHJpYnV0ZXNcIlxuICAgICByb2xlPVwiaW1nXCJcbiAgICAgcG9pbnRlci1ldmVudHM9XCJub25lXCJcbj5cbiAgPHVzZSBbYXR0ci5ocmVmXT1cInVzZVwiPjwvdXNlPlxuPC9zdmc+XG4iXX0=