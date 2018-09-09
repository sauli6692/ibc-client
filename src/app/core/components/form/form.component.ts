import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from '../../domain/fields';
import { FieldControlService } from '../../services';

@Component({
    selector: 'core-form',
    templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    @Input() fields: FieldBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: FieldControlService) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.fields);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
