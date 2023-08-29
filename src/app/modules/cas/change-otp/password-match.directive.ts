import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true }]
})
export class PasswordMatchDirective implements Validator {
  @Input('appPasswordMatch') controlNameToCompare!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.parent?.get(this.controlNameToCompare);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
}
