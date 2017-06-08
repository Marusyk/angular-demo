import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'film-search',
    templateUrl: './film-search.component.html',
    styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {

    filmName: string;

    @Output()
    ev: EventEmitter<string> = new EventEmitter();

    getFilms(): void {
        this.ev.emit(this.filmName);
    }
}