import { Component, OnInit } from '@angular/core';
import { SuiModalService } from 'ng2-semantic-ui';

import * as _ from 'lodash';

import { CoreTile } from '../../../core/interfaces';
import {
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
} from '../../../core/domain/fields';
import { BaseModel } from '../../../core/domain/models';
import { SaveModal } from '../../../core/domain/modals';
import { RouteInformation } from '../../../core/services';

@Component({
    selector: 'main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    tiles: CoreTile[];

    constructor(
        private routeInfo: RouteInformation,
        private modalService: SuiModalService
    ) { }

    ngOnInit() {
        this.tiles = _.reduce(this.routeInfo.currentMenu, (prev, item) => {
            prev.push({
                title: item.label,
                description: item.label,
                routerLink: [item.slug]
            });
            return prev;
        }, []);
    }

    onClick() {
        this.modalService
            .open(new SaveModal('Form Model', TestModel))
            .onApprove(() => console.log('User has accepted.'))
            .onDeny(() => console.log('User has denied.'));
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

    emailField = new EmailField({
        name: 'email',
        label: 'Email'
    });

    dateTimeField = new DateTimeField({
        name: 'datetime',
        label: 'DateTime',
        min: '2018-09-01',
        row: 2
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
}
