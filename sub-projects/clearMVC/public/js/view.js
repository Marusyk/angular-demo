'use strict';
(function() {

    function Films (items) {
        this.DOMElements = {
            filmsContainer: document.querySelector("#filmsContainer"),
            inputFilmName: document.querySelector("#inputFilmName")
        };

        this.eventHolder = $({});
        this.filmReqEventName = "filmRequest";
        this.description = "<p> Some desc </p>";
        this.init();
    }

    Films.prototype = {

        init: function () {
            this.initListeners();
        },

       initListeners : function() {
           this.DOMElements.inputFilmName.addEventListener("change", () => {
               if (!this.DOMElements.inputFilmName.value) {return};
                this.eventHolder.trigger(this.filmReqEventName , [this.DOMElements.inputFilmName.value]);
            });
        },

        buildFilms : function(data) {
            console.log(data);
            this.DOMElements.inputFilmName.value = '';
            this.DOMElements.filmsContainer.innerHTML = '';
            var item;
            for (let i = 0; i < data.Search.length; i++) {
                item = data.Search[i];
                this.DOMElements.filmsContainer.innerHTML += `<div class="ImgContainer col-sm-4" >
                                                                    <div class="thumbnail">
                                                                        <img  src="${item.Poster}" height="700px" alt="${item.Title}">
                                                                        <div class="caption">
                                                                            <h4><a href="#">${item.Title}</a></h4>
                                                                            <h5>Year: ${item.Year}</h5>
                                                                            <h5>${this.description}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
            }
            
        },
    }
    
    window.app = window.app || {};
    window.app.Films = Films;
    
}());
