import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UtilitiesService } from '../../services';
import { FieldBase } from '../../domain/fields';
import { FieldControlService } from '../../services';

@Component({
    selector: 'core-form',
    templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    @Input() fields: FieldBase<any>[] = [];
    @Input() label: string;
    form: FormGroup;
    payLoad = '';

    constructor(
        private fcs: FieldControlService,
        private utils: UtilitiesService
    ) { }

    ngOnInit() {
        this.form = this.fcs.toFormGroup(this.fields);
    }

    onSubmit() {
        if (this.form.valid) {
            this.payLoad = JSON.stringify(this.form.value);
        }
    }
}
