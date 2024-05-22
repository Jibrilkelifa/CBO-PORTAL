// Imports
import { Component, Input, Output, ViewChild, EventEmitter, forwardRef, ContentChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CKButtonDirective } from './ckbutton.directive';
import { CKGroupDirective } from './ckgroup.directive';
import * as i0 from "@angular/core";
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
export class CKEditorComponent {
    /**
     * Constructor
     */
    constructor(zone) {
        this.zone = zone;
        this.change = new EventEmitter();
        this.editorChange = new EventEmitter();
        this.ready = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.contentDom = new EventEmitter();
        this.fileUploadRequest = new EventEmitter();
        this.fileUploadResponse = new EventEmitter();
        this.paste = new EventEmitter();
        this.drop = new EventEmitter();
        this._value = '';
        this.destroyed = false;
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    ngOnChanges(changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    }
    /**
     * On component destroy
     */
    ngOnDestroy() {
        this.destroyed = true;
        this.zone.runOutsideAngular(() => {
            if (this.instance) {
                CKEDITOR.removeAllListeners();
                this.instance.destroy();
                this.instance = null;
            }
        });
    }
    /**
     * On component view init
     */
    ngAfterViewInit() {
        if (this.destroyed) {
            return;
        }
        this.ckeditorInit(this.config || {});
    }
    /**
     * On component view checked
     */
    ngAfterViewChecked() {
        this.ckeditorInit(this.config || {});
    }
    /**
     * Value update process
     */
    updateValue(value) {
        this.zone.run(() => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }
    /**
     * CKEditor init
     */
    ckeditorInit(config) {
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', (evt) => {
                // if value has changed while instance loading
                // update instance with current component value
                if (this.instance.getData() !== this.value) {
                    this.instance.setData(this.value);
                }
                // send the evt to the EventEmitter
                this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', (evt) => {
                this.onTouched();
                const value = this.instance.getData();
                if (this.value !== value) {
                    // Debounce update
                    if (this.debounce) {
                        if (this.debounceTimeout) {
                            clearTimeout(this.debounceTimeout);
                        }
                        this.debounceTimeout = window.setTimeout(() => {
                            this.updateValue(value);
                            this.debounceTimeout = null;
                        }, parseInt(this.debounce));
                        // Live update
                    }
                    else {
                        this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', (evt) => {
                this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', (evt) => {
                this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', (evt) => {
                this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', (evt) => {
                this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', (evt) => {
                this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', (evt) => {
                this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', (evt) => {
                this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach((group) => {
                group.initialize(this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach((button) => {
                button.initialize(this);
            });
        }
    }
    /**
     * Implements ControlValueAccessor
     */
    writeValue(value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    documentContains(node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    }
}
CKEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: CKEditorComponent, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
CKEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.2", type: CKEditorComponent, selector: "ckeditor", inputs: { config: "config", readonly: "readonly", debounce: "debounce", value: "value" }, outputs: { change: "change", editorChange: "editorChange", ready: "ready", blur: "blur", focus: "focus", contentDom: "contentDom", fileUploadRequest: "fileUploadRequest", fileUploadResponse: "fileUploadResponse", paste: "paste", drop: "drop" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CKEditorComponent),
            multi: true,
        },
    ], queries: [{ propertyName: "toolbarButtons", predicate: CKButtonDirective }, { propertyName: "toolbarGroups", predicate: CKGroupDirective }], viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `<textarea #host></textarea>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: CKEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ckeditor',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CKEditorComponent),
                            multi: true,
                        },
                    ],
                    template: `<textarea #host></textarea>`,
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { config: [{
                type: Input
            }], readonly: [{
                type: Input
            }], debounce: [{
                type: Input
            }], change: [{
                type: Output
            }], editorChange: [{
                type: Output
            }], ready: [{
                type: Output
            }], blur: [{
                type: Output
            }], focus: [{
                type: Output
            }], contentDom: [{
                type: Output
            }], fileUploadRequest: [{
                type: Output
            }], fileUploadResponse: [{
                type: Output
            }], paste: [{
                type: Output
            }], drop: [{
                type: Output
            }], host: [{
                type: ViewChild,
                args: ['host', { static: false }]
            }], toolbarButtons: [{
                type: ContentChildren,
                args: [CKButtonDirective]
            }], toolbarGroups: [{
                type: ContentChildren,
                args: [CKGroupDirective]
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NrZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVO0FBQ1YsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBRVosVUFBVSxFQUdWLGVBQWUsRUFLaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXZEOzs7O0dBSUc7QUFZSCxNQUFNLE9BQU8saUJBQWlCO0lBMEI1Qjs7T0FFRztJQUNILFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBeEJ0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDaEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUN0RCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDL0MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQzlDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQUMvQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDcEQsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDM0QsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQXNCLENBQUM7UUFDNUQsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFzQixDQUFDO1FBQy9DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQU94RCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBR0osY0FBUyxHQUFHLEtBQUssQ0FBQztJQUtTLENB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bXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIE5nWm9uZSxcbiAgZm9yd2FyZFJlZixcbiAgUXVlcnlMaXN0LFxuICBBZnRlclZpZXdJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDS0J1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2tidXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IENLR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL2NrZ3JvdXAuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBDS0VkaXRvciBjb21wb25lbnRcbiAqIFVzYWdlIDpcbiAqICA8Y2tlZGl0b3IgWyhuZ01vZGVsKV09XCJkYXRhXCIgW2NvbmZpZ109XCJ7Li4ufVwiIGRlYm91bmNlPVwiNTAwXCI+PC9ja2VkaXRvcj5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2tlZGl0b3InLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENLRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHRlbXBsYXRlOiBgPHRleHRhcmVhICNob3N0PjwvdGV4dGFyZWE+YCxcbn0pXG5leHBvcnQgY2xhc3MgQ0tFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbmZpZzogQ0tFRElUT1IuY29uZmlnO1xuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVib3VuY2U6IHN0cmluZztcblxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDS0VESVRPUi5ldmVudEluZm8+KCk7XG4gIEBPdXRwdXQoKSBlZGl0b3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENLRURJVE9SLmV2ZW50SW5mbz4oKTtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxDS0VESVRPUi5ldmVudEluZm8+KCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxDS0VESVRPUi5ldmVudEluZm8+KCk7XG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Q0tFRElUT1IuZXZlbnRJbmZvPigpO1xuICBAT3V0cHV0KCkgY29udGVudERvbSA9IG5ldyBFdmVudEVtaXR0ZXI8Q0tFRElUT1IuZXZlbnRJbmZvPigpO1xuICBAT3V0cHV0KCkgZmlsZVVwbG9hZFJlcXVlc3QgPSBuZXcgRXZlbnRFbWl0dGVyPENLRURJVE9SLmV2ZW50SW5mbz4oKTtcbiAgQE91dHB1dCgpIGZpbGVVcGxvYWRSZXNwb25zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q0tFRElUT1IuZXZlbnRJbmZvPigpO1xuICBAT3V0cHV0KCkgcGFzdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENLRURJVE9SLmV2ZW50SW5mbz4oKTtcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPENLRURJVE9SLmV2ZW50SW5mbz4oKTtcblxuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihDS0J1dHRvbkRpcmVjdGl2ZSkgdG9vbGJhckJ1dHRvbnM6IFF1ZXJ5TGlzdDxDS0J1dHRvbkRpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oQ0tHcm91cERpcmVjdGl2ZSkgdG9vbGJhckdyb3VwczogUXVlcnlMaXN0PENLR3JvdXBEaXJlY3RpdmU+O1xuXG4gIF92YWx1ZSA9ICcnO1xuICBpbnN0YW5jZTogQ0tFRElUT1IuZWRpdG9yO1xuICBkZWJvdW5jZVRpbWVvdXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2OiBzdHJpbmcpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnJlYWRvbmx5ICYmIHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmVhZE9ubHkoY2hhbmdlcy5yZWFkb25seS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBjb21wb25lbnQgZGVzdHJveVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICBDS0VESVRPUi5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCB2aWV3IGluaXRcbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ja2VkaXRvckluaXQodGhpcy5jb25maWcgfHwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGNvbXBvbmVudCB2aWV3IGNoZWNrZWRcbiAgICovXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNrZWRpdG9ySW5pdCh0aGlzLmNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogVmFsdWUgdXBkYXRlIHByb2Nlc3NcbiAgICovXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDS0VkaXRvciBpbml0XG4gICAqL1xuICBja2VkaXRvckluaXQoY29uZmlnOiBDS0VESVRPUi5jb25maWcpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIENLRURJVE9SID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKCdDS0VkaXRvciA0LnggaXMgbWlzc2luZyAoaHR0cDovL2NrZWRpdG9yLmNvbS8pJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENoZWNrIHRleHRhcmVhIGV4aXN0c1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UgfHwgIXRoaXMuZG9jdW1lbnRDb250YWlucyh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yZWFkb25seSkge1xuICAgICAgICBjb25maWcucmVhZE9ubHkgPSB0aGlzLnJlYWRvbmx5O1xuICAgICAgfVxuICAgICAgLy8gQ0tFZGl0b3IgcmVwbGFjZSB0ZXh0YXJlYVxuICAgICAgdGhpcy5pbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlXG4gICAgICB0aGlzLmluc3RhbmNlLnNldERhdGEodGhpcy52YWx1ZSk7XG5cbiAgICAgIC8vIGxpc3RlbiBmb3IgaW5zdGFuY2VSZWFkeSBldmVudFxuICAgICAgdGhpcy5pbnN0YW5jZS5vbignaW5zdGFuY2VSZWFkeScsIChldnQ6IENLRURJVE9SLmV2ZW50SW5mbykgPT4ge1xuICAgICAgICAvLyBpZiB2YWx1ZSBoYXMgY2hhbmdlZCB3aGlsZSBpbnN0YW5jZSBsb2FkaW5nXG4gICAgICAgIC8vIHVwZGF0ZSBpbnN0YW5jZSB3aXRoIGN1cnJlbnQgY29tcG9uZW50IHZhbHVlXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmdldERhdGEoKSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlbmQgdGhlIGV2dCB0byB0aGUgRXZlbnRFbWl0dGVyXG4gICAgICAgIHRoaXMucmVhZHkuZW1pdChldnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENLRWRpdG9yIGNoYW5nZSBldmVudFxuICAgICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2dDogQ0tFRElUT1IuZXZlbnRJbmZvKSA9PiB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXG4gICAgICAgICAgaWYgKHRoaXMuZGVib3VuY2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9LCBwYXJzZUludCh0aGlzLmRlYm91bmNlKSk7XG5cbiAgICAgICAgICAgIC8vIExpdmUgdXBkYXRlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9yaWdpbmFsIGNrZWRpdG9yIGV2ZW50IGRpc3BhdGNoXG4gICAgICAgIHRoaXMuZWRpdG9yQ2hhbmdlLmVtaXQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDS0VkaXRvciBibHVyIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdibHVyJywgKGV2dDogQ0tFRElUT1IuZXZlbnRJbmZvKSA9PiB7XG4gICAgICAgIHRoaXMuYmx1ci5lbWl0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ0tFZGl0b3IgZm9jdXMgZXZlbnRcbiAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2dDogQ0tFRElUT1IuZXZlbnRJbmZvKSA9PiB7XG4gICAgICAgIHRoaXMuZm9jdXMuZW1pdChldnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENLRWRpdG9yIGNvbnRlbnREb20gZXZlbnRcbiAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NvbnRlbnREb20nLCAoZXZ0OiBDS0VESVRPUi5ldmVudEluZm8pID0+IHtcbiAgICAgICAgdGhpcy5jb250ZW50RG9tLmVtaXQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDS0VkaXRvciBmaWxlVXBsb2FkUmVxdWVzdCBldmVudFxuICAgICAgdGhpcy5pbnN0YW5jZS5vbignZmlsZVVwbG9hZFJlcXVlc3QnLCAoZXZ0OiBDS0VESVRPUi5ldmVudEluZm8pID0+IHtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkUmVxdWVzdC5lbWl0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ0tFZGl0b3IgZmlsZVVwbG9hZFJlc3BvbnNlIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdmaWxlVXBsb2FkUmVzcG9uc2UnLCAoZXZ0OiBDS0VESVRPUi5ldmVudEluZm8pID0+IHtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkUmVzcG9uc2UuZW1pdChldnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENLRWRpdG9yIHBhc3RlIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwYXN0ZScsIChldnQ6IENLRURJVE9SLmV2ZW50SW5mbykgPT4ge1xuICAgICAgICB0aGlzLnBhc3RlLmVtaXQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDS0VkaXRvciBkcm9wIGV2ZW50XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdkcm9wJywgKGV2dDogQ0tFRElUT1IuZXZlbnRJbmZvKSA9PiB7XG4gICAgICAgIHRoaXMuZHJvcC5lbWl0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIFRvb2xiYXIgR3JvdXBzIHRvIEVkaXRvci4gVGhpcyB3aWxsIGFsc28gYWRkIEJ1dHRvbnMgd2l0aGluIGdyb3Vwcy5cbiAgICAgIHRoaXMudG9vbGJhckdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICBncm91cC5pbml0aWFsaXplKHRoaXMpO1xuICAgICAgfSk7XG4gICAgICAvLyBBZGQgVG9vbGJhciBCdXR0b25zIHRvIEVkaXRvci5cbiAgICAgIHRoaXMudG9vbGJhckJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5pbml0aWFsaXplKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh2YWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZTogKF86IHN0cmluZykgPT4gdm9pZDtcblxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgZG9jdW1lbnRDb250YWlucyhub2RlOiBOb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNvbnRhaW5zID8gZG9jdW1lbnQuY29udGFpbnMobm9kZSkgOiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG5vZGUpO1xuICB9XG59XG4iXX0=