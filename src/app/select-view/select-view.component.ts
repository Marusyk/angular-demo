import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'select-view',
    templateUrl: './select-view.component.html',
    styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent {

    viewType: number;

    @Output()
    changeViewEvent: EventEmitter<string> = new EventEmitter();

    changeView(): void {
        let view: string = ViewType[this.viewType];
        this.changeViewEvent.emit(view);
    }
}

enum ViewType {
    Vertical = <number> 1,
    Horizontal = <number> 2
}