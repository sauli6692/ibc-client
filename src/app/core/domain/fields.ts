import * as _ from 'lodash';

export class FieldBase<T> {
    value: T;
    name: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    extraClass: string;
    disabled: boolean;
    wide: string;

    constructor(name: string, options: {
        value?: T,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        extraClass?: string,
        disabled?: boolean,
        wide?: string
    } = {}) {
        if (_.isEmpty(name)) {
            throw new TypeError('Name mandatory');
        }
        this.value = options.value;
        this.name = name;
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = _.isNil(options.order) ? 1 : options.order;
        this.extraClass = options.extraClass || '';
        this.controlType = options.controlType || '';
        this.disabled = options.disabled || false;
        this.wide = options.wide;
    }
}

export class InputField extends FieldBase<string> {
    controlType = 'input';
    type: string;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = options['type'] || '';
    }
}

export class TextField extends InputField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'text';
    }
}

export class NumberField extends InputField {
    step: number;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'number';
        this.step = _.isNil(options['step']) ? 0.01 : options['step'];
    }
}

export class IntegerField extends NumberField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'number';
        this.step = 1;
    }
}

export class PasswordField extends InputField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'password';
    }
}

export class EmailField extends InputField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'email';
    }
}

export class CheckboxField extends FieldBase<boolean> {
    controlType = 'checkbox';
    text: string;
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.value = !_.isNil(this.value) && this.value;
        this.text = options['text'];
    }
}

export class RadioField extends CheckboxField {
    controlType = 'radio';
    constructor(name: string, options: {} = {}) {
        super(name, options);
    }
}

export class DateTimeField extends InputField {
    mode: string;
    max: Date;
    min: Date;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.controlType = 'datetime';
        this.mode = 'datetime';
        if (options['max']) {
            if (_.indexOf(options['max'], 'T') === -1) {
                options['max'] = options['max'] + 'T00:00:00';
            }
            this.max = new Date(options['max']);
        }
        if (options['min']) {
            if (_.indexOf(options['min'], 'T') === -1) {
                options['min'] = options['min'] + 'T00:00:00';
            }
            this.min = new Date(options['min']);
        }
    }
}

export class DateField extends DateTimeField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.mode = 'date';
    }
}

export class TimeField extends DateTimeField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.mode = 'time';
    }
}

export class MonthField extends DateTimeField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.mode = 'month';
    }
}

export class YearField extends DateTimeField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.mode = 'year';
    }
}

export class TextareaField extends FieldBase<string> {
    controlType = 'textarea';

    constructor(name: string, options: {} = {}) {
        super(name, options);
    }
}

export class SelectField extends FieldBase<string> {
    controlType = 'select';
    options: { value: string, label: string }[] = [];
    searchable: boolean;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.options = options['options'] || [];
        this.searchable = _.isNil(options['searchable']) || options['searchable'];
    }
}

export class SelectMultipleField extends SelectField {
    multiple = true;

    constructor(name: string, options: {} = {}) {
        super(name, options);
    }
}

export class CheckboxMultipleField extends SelectMultipleField {
    multiple = true;
    grouped: boolean;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.controlType = 'checkbox';
        this.grouped = !_.isNil(options['grouped']) && options['grouped'];
    }
}

export class RadioMultipleField extends SelectMultipleField {
    multiple = true;
    grouped: boolean;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.controlType = 'radio';
        this.grouped = !_.isNil(options['grouped']) && options['grouped'];
    }
}

export class FileField extends InputField {
    accept: string;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'file';
        this.accept = options['accept'];
    }
}

export class ImageField extends FileField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'file';
        this.accept = options['accept'] || 'image/*,.jpg,.jpeg,.png,.bmp';
    }
}
