import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { CoreTile } from '../../../core/interfaces';
import {
    FieldBase,
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
import { RouteInformation } from '../../../core/services';

@Component({
    selector: 'main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    tiles: CoreTile[];
    fields: Array<FieldBase<any> | FieldBase<any>[]> = [
        [new TextField('text_input', {
            label: 'Text field',
            required: true,
            disabled: true
        })],
        [new SelectField('select_input', {
            label: 'Select',
            options: [{
                value: 'val',
                label: 'Value'
            }],
            disabled: true
        }),
        new SelectMultipleField('select_input', {
            label: 'Select',
            options: [{
                value: 'val',
                label: 'Value'
            }, {
                value: 'val2',
                label: 'Value 2'
            }]
        })],
        [new IntegerField('integer_input', {
            label: 'Integer',
            disabled: true
        }),
        new NumberField('integer_input', {
            label: 'Number'
        }),
        new PasswordField('pass', {
            label: 'Password',
            disabled: true
        })],
        new EmailField('email', {
            label: 'Email'
        }),
        new CheckboxField('checkbox', {
            label: 'Checbox',
            text: 'First Option',
            disabled: true
        }),
        new RadioField('radio', {
            label: 'Radio',
            text: 'First Option'
        }),
        [new DateTimeField('datetime', {
            label: 'DateTime',
            min: '2018-09-01'
        }),
        new TimeField('time', { // Min and Max doesn't work
            label: 'Time'
        }),
        new DateField('date', {
            label: 'Date',
            min: '2018-09-01',
            max: '2018-09-29'
        }),
        new MonthField('month', {
            label: 'Month',
            min: '2018-09-01',
            disabled: true
        }),
        new YearField('year', {
            label: 'Year',
            min: '2010'
        })],
        new FileField('file', {
            label: 'File',
            accept: '.txt'
        }),
        new ImageField('file', {
            label: 'Image'
        }),
        new TextareaField('textarea', {
            label: 'Textarea',
            disabled: true
        }),
        new CheckboxMultipleField('checkboxgroup', {
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
        }),
        new RadioMultipleField('radiogroup', {
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
        }),
    ];

    constructor(
        private routeInfo: RouteInformation
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
}
