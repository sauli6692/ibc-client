import { Component, OnInit } from '@angular/core';
import { SuiModalService } from 'ng2-semantic-ui';

import {
    BaseField,
    TextField,
    SelectField,
    IntegerField,
    NumberField,
    PasswordField,
    EmailField,
    CheckboxField,
    RadioField,
    DateTimeField,
    TimeField,
    DateField,
    MonthField,
    YearField,
    TextareaField,
    SelectMultipleField,
    CheckboxMultipleField,
    RadioMultipleField,
    FileField,
    ImageField
} from '../../../../core/domain/fields';
import { BaseModel } from '../../../../core/domain/models';

@Component({
    selector: 'core-form-use-example',
    templateUrl: './use-example.component.html',
    styleUrls: ['./use-example.component.scss']
})
export class FormUseExampleComponent implements OnInit {
    fields: Array<BaseField<any> | BaseField<any>[]>;

    constructor(
        private modalService: SuiModalService
    ) { }

    ngOnInit() {
        /** IMPORTANT: Never call directly instance.field in template */
        const instance = new TestModel();
        this.fields = instance.fields;
    }
}

class TestModel extends BaseModel {
    name = 'Hola';
    module = 'adm';
    textField = new TextField({
        name: 'text_input',
        label: 'Text field',
        required: true,
        disabled: true
    });

    selectField = new SelectField({
        name: 'select_input',
        label: 'Select',
        options: [{
            value: 'val',
            label: 'Value'
        }],
        disabled: true,
        row: 0
    });

    selectMultipleField = new SelectMultipleField({
        name: 'select_input',
        label: 'Select',
        options: [{
            value: 'val',
            label: 'Value'
        }, {
            value: 'val2',
            label: 'Value 2'
        }],
        row: 0
    });

    integerField = new IntegerField({
        name: 'integer_input',
        label: 'Integer',
        disabled: true,
        row: 1
    });

    numberField = new NumberField({
        name: 'integer_input',
        label: 'Number',
        row: 1
    });

    passwordField = new PasswordField({
        name: 'pass',
        label: 'Password',
        disabled: true,
        row: 1
    });

    emailField = new EmailField({
        name: 'email',
        label: 'Email'
    });

    checkboxField = new CheckboxField({
        name: 'checkbox',
        label: 'Checbox',
        text: 'First Option',
        disabled: true
    });

    radioField = new RadioField({
        name: 'radio',
        label: 'Radio',
        text: 'First Option'
    });

    dateTimeField = new DateTimeField({
        name: 'datetime',
        label: 'DateTime',
        min: '2018-09-01',
        row: 2
    });

    timeField = new TimeField({
        name: 'time', // Min and Max doesn't work
        label: 'Time',
        row: 2
    });

    dateField = new DateField({
        name: 'date',
        label: 'Date',
        min: '2018-09-01',
        max: '2018-09-29',
        row: 2
    });

    monthField = new MonthField({
        name: 'month',
        label: 'Month',
        min: '2018-09-01',
        disabled: true,
        row: 2
    });

    yearField = new YearField({
        name: 'year',
        label: 'Year',
        min: '2010',
        row: 2
    });

    fileField = new FileField({
        name: 'file',
        label: 'File',
        accept: '.txt'
    });

    imageField = new ImageField({
        name: 'file',
        label: 'Image'
    });

    textareaField = new TextareaField({
        name: 'textarea',
        label: 'Textarea',
        disabled: true
    });

    checkboxMultipleField = new CheckboxMultipleField({
        name: 'checkboxgroup',
        label: 'Checkbox Group',
        options: [{
            name: 'check1',
            text: '1 Option',
            disabled: true
        }, {
            name: 'check2',
            text: '2 Option',
        }, {
            name: 'check3',
            text: '3 Option',
            disabled: true
        }, {
            name: 'check4',
            text: '4 Option',
        }]
    });

    radioMultipleField = new RadioMultipleField({
        name: 'radiogroup',
        label: 'Radio Group',
        options: [{
            name: 'radio1',
            text: '1 Option',
            disabled: true
        }, {
            name: 'radio2',
            text: '2 Option',
        }, {
            name: 'radio3',
            text: '3 Option',
            disabled: true
        }, {
            name: 'radio4',
            text: '4 Option',
        }]
    });
}
