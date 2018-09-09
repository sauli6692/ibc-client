import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from '../../../domain/fields';

@Component({
    selector: 'core-field',
    templateUrl: './field.component.html'
})
export class FieldComponent {
    @Input() field: FieldBase<any>;
    @Input() form: FormGroup;

    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
}
