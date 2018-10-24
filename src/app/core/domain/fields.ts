import * as _ from 'lodash';


/**
 * Base generic class that represents a `Field` in a form
 * `T` is the type of the value that the field accepts
 */
export class BaseField<T> {
    /**
     * Value stored in the field
     * @property {T} value
     */
    value: T;
    /**
     * Name of the field (property name of the HTML element)
     * @property {string} name
     */
    name: string;
    /**
    * Label to show to the user
    * @property {string} label
    */
    label: string;
    /**
     * Defines if the field is required
     * @property {boolean} required
     */
    required: boolean;
    /**
    * Defines the way to sort the fields
    * @property {number} order
    */
    order: number;
    /**
    * Defines the type of the control (i.e. input, textarea, etc.)
    * @property {string} controlType
    */
    controlType: string;
    /**
    * Allows to add extra css classes
    * @property {string} extraClass
    */
    extraClass: string;
    /**
    * Specifies if the field is disabled
    * @property {boolean} disabled
    */
    disabled: boolean;
    /**
    * Specifies the wide of the field in the row
    * The values could be from 'one' to 'sixteen'
    * @property {string} wide
    */
    wide: string;
    /**
    * Specifies the number of the row where the field is appended
    * If multiple fields had the same row value, they are going to be
    * rendered in the same row
    * @property {number} row
    */
    row: number;

    constructor(options: {
        name?: string,
        value?: T,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        extraClass?: string,
        disabled?: boolean,
        wide?: string,
        row?: number
    } = {}) {
        this.value = options.value;
        this.name = options.name;
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = _.isNil(options.order) ? 1 : options.order;
        this.extraClass = options.extraClass || '';
        this.controlType = options.controlType || '';
        this.disabled = options.disabled || false;
        this.wide = options.wide;
        this.row = options.row;
    }
}

/**
 * Subclass of BaseField that represents an HTML `<input>` element
 * The options must specify the type of the input
 */
export class InputField extends BaseField<string> {
    controlType = 'input';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

/**
 * Subclass of InputField that represents an HTML `<input type="text">` element
 */
export class TextField extends InputField {
    constructor(options: {} = {}) {
        super(options);
        this.type = 'text';
    }
}

/**
 * Subclass of InputField that represents an HTML `<input type="number" step="0.01">` element
 * By default it adds a step of 0.01
 */
export class NumberField extends InputField {
    step: number;

    constructor(options: {} = {}) {
        super(options);
        this.type = 'number';
        this.step = _.isNil(options['step']) ? 0.01 : options['step'];
    }
}

/**
 * Subclass of NumberField that represents an HTML `<input type="number" step="1">` element
 */
export class IntegerField extends NumberField {
    constructor(options: {} = {}) {
        super(options);
        this.type = 'number';
        this.step = 1;
    }
}

/**
 * Subclass of InputField that represents an HTML `<input type="password">` element
 */
export class PasswordField extends InputField {
    constructor(options: {} = {}) {
        super(options);
        this.type = 'password';
    }
}

/**
 * Subclass of InputField that represents an HTML <input type="email"> element
 */
export class EmailField extends InputField {
    constructor(options: {} = {}) {
        super(options);
        this.type = 'email';
    }
}

/**
 * Subclass of BaseField that represents an HTML `<input type="checkbox">` element
 */
export class CheckboxField extends BaseField<boolean> {
    controlType = 'checkbox';
    text: string;
    constructor(options: {} = {}) {
        super(options);
        this.value = !_.isNil(this.value) && this.value;
        this.text = options['text'];
    }
}

/**
 * Subclass of RadioField that represents an HTML `<input type="radio">` element
 */
export class RadioField extends CheckboxField {
    controlType = 'radio';
    constructor(options: {} = {}) {
        super(options);
    }
}

/**
 * Subclass of InputField that represents an datetime picker element
 */
export class DateTimeField extends InputField {
    mode: string;
    max: Date;
    min: Date;

    constructor(options: {} = {}) {
        super(options);
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

/**
 * Subclass of DateTimeField that only represents a date picker element
 */
export class DateField extends DateTimeField {
    constructor(options: {} = {}) {
        super(options);
        this.mode = 'date';
    }
}

/**
 * Subclass of DateTimeField that only represents a time picker element
 */
export class TimeField extends DateTimeField {
    constructor(options: {} = {}) {
        super(options);
        this.mode = 'time';
    }
}

/**
 * Subclass of DateTimeField that only represents a month picker element
 */
export class MonthField extends DateTimeField {
    constructor(options: {} = {}) {
        super(options);
        this.mode = 'month';
    }
}

/**
 * Subclass of DateTimeField that only represents a year picker element
 */
export class YearField extends DateTimeField {
    constructor(options: {} = {}) {
        super(options);
        this.mode = 'year';
    }
}

/**
 * Subclass of BaseField that represents an HTML `<textarea>` element
 */
export class TextareaField extends BaseField<string> {
    controlType = 'textarea';

    constructor(options: {} = {}) {
        super(options);
    }
}

/**
 * Subclass of BaseField that represents an HTML `<select>` element
 */
export class SelectField extends BaseField<string> {
    controlType = 'select';
    options: { value: string, label: string }[] = [];
    searchable: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.searchable = _.isNil(options['searchable']) || options['searchable'];
    }
}

/**
 * Subclass of SelectField that represents an HTML `<select multiple>` element
 */
export class SelectMultipleField extends SelectField {
    multiple = true;

    constructor(options: {} = {}) {
        super(options);
    }
}

/**
 * Subclass of SelectMultipleField that represents an HTML `<input type="checkbox">` element
 * that allows multiple options
 */
export class CheckboxMultipleField extends SelectMultipleField {
    multiple = true;
    grouped: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.controlType = 'checkbox';
        this.grouped = !_.isNil(options['grouped']) && options['grouped'];
    }
}

/**
 * Subclass of SelectMultipleField that represents an HTML `<input type="radio">` element
 * that allows multiple options
 */
export class RadioMultipleField extends SelectMultipleField {
    multiple = true;
    grouped: boolean;

    constructor(options: {} = {}) {
        super(options);
        this.controlType = 'radio';
        this.grouped = !_.isNil(options['grouped']) && options['grouped'];
    }
}

/**
 * Subclass of InputField that represents an HTML <input type="file"> element
 */
export class FileField extends InputField {
    accept: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = 'file';
        this.accept = options['accept'];
    }
}

/**
 * Subclass of FileField that represents an HTML
 * `<input type="file" accept="image/*,.jpg,.jpeg,.png,.bmp">` element
 */
export class ImageField extends FileField {
    constructor(options: {} = {}) {
        super(options);
        this.type = 'file';
        this.accept = options['accept'] || 'image/*,.jpg,.jpeg,.png,.bmp';
    }
}
