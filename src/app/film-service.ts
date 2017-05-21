import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmService {
    private baseUrl: string = "http://www.omdbapi.com/?page=1&s=";
    private filmUrl: string = "http://www.omdbapi.com/?i=";
    private apiKey: string = "&apikey=520bbe17";

    constructor(private http: Http) { }

    private extractList(res: Response) {
        let body = res.json();
        return body.Search || {};
    }

    private extractItemData(res: Response) {
        let body = res.json();
        return body || {};
    }

    getFilms(filmName: string) {
        return this.http
            .get(this.baseUrl + filmName + this.apiKey)
            .map(this.extractList);
    }

    getFilmById (filmId: string) {
        return this.http
            .get(this.filmUrl + filmId + this.apiKey)
            .map(this.extractItemData);
    }
}
