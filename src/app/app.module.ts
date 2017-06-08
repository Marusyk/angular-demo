import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { SelectViewComponent } from './select-view/select-view.component';

import { FilmService } from './film-service';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    FilmSearchComponent,
    SelectViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
