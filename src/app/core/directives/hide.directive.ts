import { Directive, ElementRef, Renderer, Input } from '@angular/core';

import * as _ from 'lodash';

@Directive({ selector: '[hide]' })
export class HideDirective {

    private _prevCondition: boolean = null;
    private _displayStyle: string;

    constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }
    @Input() get hide() {
        return this._prevCondition;
    }

    set hide(newCondition: boolean) {
        this.initDisplayStyle();

        if (newCondition && (_.isNil(this._prevCondition) || !this._prevCondition)) {
            this._prevCondition = true;
            this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'none');
        } else if (!newCondition && (_.isNil(this._prevCondition) || this._prevCondition)) {
            this._prevCondition = false;
            this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', this._displayStyle);
        }
    }

    private initDisplayStyle() {
        if (this._displayStyle === undefined) {
            const displayStyle = this._elementRef.nativeElement.style.display;
            if (displayStyle && displayStyle !== 'none') {
                this._displayStyle = displayStyle;
            }
        }
    }
}
