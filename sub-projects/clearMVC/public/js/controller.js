'use strict';
(function () {

    let model = window.app.model;
    let Films = window.app.Films;
    let films = null;
    let defaultFilm = "Harry Potter";

    function getFilms(filmName) {
        model.getFilms(filmName);
    }

    function bindViewFilmReqest() {
        films.eventHolder.on(films.filmReqEventName, (event, filmName) =>
            getFilms(filmName)
        );
    }

    function bindModelFilmResponse() {
        model.eventHolder.on(model.filmRespEventName, (event, filmName) =>
            films.buildFilms(filmName)
        );
    }

    function bindEvents() {
        bindViewFilmReqest();
        bindModelFilmResponse();
    }

    function initFilms() {
        films = new Films();
    }

    function init() {
        initFilms();
        bindEvents();
        getFilms(defaultFilm);
    }

    init();

}());
