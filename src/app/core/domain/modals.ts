import { ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';

import { SaveModalComponent } from '../components/save-modal/save-modal.component';
import { SaveModalContext } from '../interfaces';


export class SaveModal extends ComponentModalConfig<SaveModalContext, void, void> {
    constructor(title: string, model: any, size = ModalSize.Normal) {
        super(SaveModalComponent, { title, model });

        this.size = size;
    }
}
