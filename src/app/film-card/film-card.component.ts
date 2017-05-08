import { Component, OnInit } from '@angular/core';
import { FilmCardService } from './film-card.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  private filmList: Object[] = [];
  private filmName: string = "Harry Potter";

  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.getFilms();
  }

  private getFilms() {
    if(!this.filmName) { return; }
    this.filmCardService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
    });
  }

}
