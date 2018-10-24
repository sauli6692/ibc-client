import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash';

import { BaseField } from '../domain/fields';

@Injectable({
    providedIn: 'root'
})
export class FieldControlService {
    toFormGroup(fields: Array<BaseField<any> | BaseField<any>[]>) {
        const group = {};

        _.forEach(fields, field => {
            if (_.isArray(field)) {
                _.forEach(field, _field => {
                    group[_field.name] = _field.required
                        ? new FormControl(_field.value || '', Validators.required)
                        : new FormControl(_field.value || '');
                });
            } else {
                group[field.name] = field.required
                    ? new FormControl(field.value || '', Validators.required)
                    : new FormControl(field.value || '');
            }
        });
        return new FormGroup(group);
    }
}
