import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldBase } from '../domain/fields';

@Injectable({
    providedIn: 'root'
})
export class FieldControlService {
    constructor() { }

    toFormGroup(fields: FieldBase<any>[]) {
        const group = {};

        fields.forEach(field => {
            group[field.name] = field.required
                ? new FormControl(field.value || '', Validators.required)
                : new FormControl(field.value || '');
        });
        return new FormGroup(group);
    }
}
