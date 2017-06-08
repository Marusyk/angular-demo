import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film-service';

@Component({
    selector: 'film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

    filmList: Object[] = [];
    filmName: string;

    constructor(private filmService: FilmService) { }

    ngOnInit() {
        this.filmName = "Harry Potter";
        this.getFilms(this.filmName);
    }

    private getFilms(filmName: string) {
        if (!filmName) { return; }
        this.filmService
            .getFilms(filmName)
            .subscribe(data => {
                this.filmList = data;
            })
    }
}