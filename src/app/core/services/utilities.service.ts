import { Injectable } from '@angular/core';

import { MoveHandler, UpHandler } from '../domain/event-handlers';

@Injectable({
    providedIn: 'root'
})
export class UtilitiesService {
    drag(event: MouseEvent, { move: move, up: up}: {move: MoveHandler, up?: UpHandler}) {
        const startX = event.pageX;
        const startY = event.pageY;
        let x = startX;
        let y = startY;
        let moved = false;

        function mouseMoveHandler(evt: MouseEvent) {
            const dx = evt.pageX - x;
            const dy = evt.pageY  - y;
            x = evt.pageX;
            y = evt.pageY;
            if (dx || dy) { moved = true; }

            move(evt, dx, dy, x, y);

            evt.preventDefault(); // to avoid text selection
        }

        function mouseUpHandler(evt: MouseEvent) {
            x = evt.pageX;
            y = evt.pageY;

            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);

            if (up) {
                up(evt, x, y, moved);
            }
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
}
