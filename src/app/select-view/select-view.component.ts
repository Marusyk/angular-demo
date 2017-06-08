import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'select-view',
    templateUrl: './select-view.component.html',
    styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent {

    viewCards: number;

    @Output()
    changeViewEvent: EventEmitter<number> = new EventEmitter();

    changeView(): void {
        this.changeViewEvent.emit(this.viewCards);
    }
}