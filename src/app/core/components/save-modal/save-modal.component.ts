import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    SuiModal
} from 'ng2-semantic-ui';

import { SaveModalContext } from '../../interfaces';
import { BaseModel } from '../../domain/models';
import { BaseField } from '../../domain/fields';

@Component({
    selector: 'core-save-modal',
    templateUrl: './save-modal.component.html',
    styleUrls: ['./save-modal.component.scss']
})
export class SaveModalComponent implements OnInit {
    model: BaseModel;
    fields: Array<BaseField<any>>;

    constructor(public modal: SuiModal<SaveModalContext, void, void>) {
        this.model = new this.modal.context.model();
    }

    ngOnInit() {
        this.fields = this.model.fields;
    }
}
