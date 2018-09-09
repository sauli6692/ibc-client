import * as _ from 'lodash';

export class FieldBase<T> {
    value: T;
    name: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    extraClass: string;

    constructor(name: string, options: {
        value?: T,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        extraClass?: string
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
    decimals: number;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'number';
        this.decimals = _.isNil(options['decimals']) ? 2 : options['decimals'];
    }
}

export class IntegerField extends NumberField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'number';
        this.decimals = 0;
    }
}

export class CheckboxField extends InputField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'checkbox';
    }
}

export class RadioField extends InputField {
    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'radio';
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
        this.accept = options['accept'] || 'image/*';
    }
}

export class DateTimeField extends InputField {
    hasTime: boolean;
    hasDate: boolean;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'text';
        this.hasTime = _.isNil(options['hasTime']) || options['hasTime'];
        this.hasDate = _.isNil(options['hasDate']) || options['hasDate'];
    }
}

export class DateField extends DateTimeField {
    controlType = 'input';
    type: string;
    hasTime: boolean;
    hasDate: boolean;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'text';
        this.hasTime = false;
        this.hasDate = true;
    }
}

export class TimeField extends DateTimeField {
    controlType = 'input';
    type: string;
    hasTime: boolean;
    hasDate: boolean;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = 'text';
        this.hasTime = true;
        this.hasDate = false;
    }
}

export class TextboxField extends FieldBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.type = options['type'] || '';
    }
}

export class SelectField extends FieldBase<string> {
    controlType = 'select';
    options: { value: string, label: string }[] = [];

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.options = options['options'] || [];
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

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.controlType = 'checbox';
    }
}

export class RadioMultipleField extends SelectMultipleField {
    multiple = true;

    constructor(name: string, options: {} = {}) {
        super(name, options);
        this.controlType = 'radio';
    }
}
