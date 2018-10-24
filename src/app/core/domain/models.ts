import * as _ from 'lodash';

import { BaseField } from './fields';


/**
 * Abstract class that represents a BE endpoint information
 * with the name of the model and the module to which it belongs
 */
export abstract class BaseModel {
    /**
     * The module to which it belongs
     * @property {string} module
     */
    public abstract module: string;
    /**
    * Name of the model in PascalCase (based on the endpoint, commonly plural)
    * @property {string} name
    */
    public abstract name: string;

    /**
     * Return the fields of the model based on its class properties
     * @return {Array<BaseField> | BaseField} Array of BaseField instances.
     */
    get fields() {
        const properties = Object.getOwnPropertyNames(this);
        const rows = {};

        return _.reduce(properties, (prev, name) => {
            if (this[name] instanceof BaseField) {
                this[name].name = name;
                if (!_.isNil(this[name].row)) {
                    if (_.isNil(rows[this[name].row])) {
                        rows[this[name].row] = [];
                    }

                    rows[this[name].row].push(this[name]);
                }
                if (!_.isNil(rows[this[name].row]) && rows[this[name].row].length === 1) {
                    prev.push(rows[this[name].row]);
                } else if (_.isNil(rows[this[name].row])) {
                    prev.push(this[name]);
                }
            }
            return prev;
        }, []);
    }
}
