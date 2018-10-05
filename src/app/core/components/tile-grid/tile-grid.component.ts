import {
    Component,
    Input
} from '@angular/core';

import { CoreTile } from '../../interfaces';

@Component({
    selector: 'core-tile-grid',
    templateUrl: './tile-grid.component.html',
    styleUrls: ['./tile-grid.component.scss']
})
export class TileGridComponent {
    @Input() tiles: Array<CoreTile>;
}
