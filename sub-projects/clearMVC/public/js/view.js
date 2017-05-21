'use strict';
(function () {

    function Films(items) {
        this.DOMElements = {
            filmsContainer: document.querySelector("#filmsContainer"),
            inputFilmName: document.querySelector("#inputFilmName")
        };

        this.eventHolder = $({});
        this.filmReqEventName = "filmRequest";
        this.init();
    }

    Films.prototype = {

        init: function () {
            this.initListeners();
        },

        initListeners: function () {
            this.DOMElements.inputFilmName.addEventListener("change", () => {
                if (!this.DOMElements.inputFilmName.value) { return };
                this.eventHolder.trigger(this.filmReqEventName, [this.DOMElements.inputFilmName.value]);
            });
        },

        clearContainer: function () {
            this.DOMElements.inputFilmName.value = '';
            this.DOMElements.filmsContainer.innerHTML = '';
        },

        buildFilms: function(data) {
            console.log(data);
            this.clearContainer();
            data.Search.forEach((element, key) =>
                this.DOMElements.filmsContainer.innerHTML += `<div class="ImgContainer col-sm-4" >
                                                                    <div class="thumbnail">
                                                                        <img  src="${element.Poster}" height="700px" alt="${element.Title}">
                                                                        <div class="caption">
                                                                            <h4><a href="http://www.imdb.com/title/${element.imdbID}">${element.Title}</a></h4>
                                                                            <h5>Year: ${element.Year}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>`
            );
        }
    }

    window.app = window.app || {};
    window.app.Films = Films;

}());
