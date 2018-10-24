import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UtilitiesService } from '../../services';
import { BaseField } from '../../domain/fields';
import { FieldControlService } from '../../services';

@Component({
    selector: 'core-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    @Input() fields: BaseField<any>[] = [];
    @Input() label: string;
    @Input() cancelButton = false;
    @Input() errorHeader = '¡Error!';
    @Input() errorMessage = 'Campos inválidos';
    @Output() cancel = new EventEmitter<any>();
    @Output() submit = new EventEmitter<any>();
    form: FormGroup;
    clicked = false;
    submitLabel = 'Guardar';
    cancelLabel = 'Cancelar';

    constructor(
        private fcs: FieldControlService,
        private utils: UtilitiesService
    ) { }

    ngOnInit() {
        this.form = this.fcs.toFormGroup(this.fields);
    }

    onSubmit() {
        this.clicked = true;
        if (this.form.valid) {
            this.submit.emit(this.form.value);
        }
    }

    onCancel() {
        this.cancel.emit();
    }

    hasError(field) {
        return this.clicked && this.form.get(field.name).invalid;
    }
}
