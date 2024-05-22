import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IconSetService {
    constructor() {
        this._iconNames = {};
        this._icons = {};
    }
    get iconNames() {
        return this._iconNames;
    }
    get icons() {
        return this._icons;
    }
    set icons(iconSet) {
        for (const iconsKey in iconSet) {
            this._iconNames[iconsKey] = iconsKey;
        }
        this._icons = iconSet;
    }
    getIcon(name) {
        const icon = this.icons[name];
        if (!icon) {
            console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
        }
        return this.icons[name];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconSetService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconSetService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.1", ngImport: i0, type: IconSetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1pY29ucy1hbmd1bGFyL3NyYy9saWIvaWNvbi1zZXQvaWNvbi1zZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVMzQyxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQU1RLGVBQVUsR0FBOEIsRUFBRSxDQUFDO1FBVzNDLFdBQU0sR0FBYSxFQUFFLENBQUM7SUFqQmYsQ0FBQztJQUVoQixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFJRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLE9BQU87UUFDZixLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBR00sT0FBTyxDQUFDLElBQVk7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLG1DQUFtQyxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzhHQTNCVSxjQUFjO2tIQUFkLGNBQWMsY0FGYixNQUFNOzsyRkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJSWNvblNldCB7XG4gIFtpY29uTmFtZTogc3RyaW5nXTogc3RyaW5nW107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEljb25TZXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGdldCBpY29uTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25OYW1lcztcbiAgfVxuXG4gIHByaXZhdGUgX2ljb25OYW1lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIGdldCBpY29ucygpOiBJSWNvblNldCB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb25zO1xuICB9XG4gIHNldCBpY29ucyhpY29uU2V0KSB7XG4gICAgZm9yIChjb25zdCBpY29uc0tleSBpbiBpY29uU2V0KSB7XG4gICAgICB0aGlzLl9pY29uTmFtZXNbaWNvbnNLZXldID0gaWNvbnNLZXk7XG4gICAgfVxuICAgIHRoaXMuX2ljb25zID0gaWNvblNldDtcbiAgfVxuICBwcml2YXRlIF9pY29uczogSUljb25TZXQgPSB7fTtcblxuICBwdWJsaWMgZ2V0SWNvbihuYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuaWNvbnNbbmFtZV07XG4gICAgaWYgKCFpY29uKSB7XG4gICAgICBjb25zb2xlLndhcm4oYENvcmVVSSBXQVJOOiBJY29uICR7bmFtZX0gaXMgbm90IHJlZ2lzdGVyZWQgaW4gSWNvblNlcnZpY2VgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaWNvbnNbbmFtZV07XG4gIH1cbn1cbiJdfQ==