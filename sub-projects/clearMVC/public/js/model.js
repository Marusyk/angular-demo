'use strict';
(function(){
    
    var model = function() {

        let eventHolder = $({});
        let filmRespEventName = "filmResponse";
        let filmUrl = "http://www.omdbapi.com/?page=1&s=";
        
        function getFilms(filmName) {
            $.get(filmUrl + filmName, function(films) {
                if(!films) {
                    return;
                }
                eventHolder.trigger(filmRespEventName, [films]);
            });
        }
        
        return {
            getFilms : getFilms,
            eventHolder: eventHolder,
            filmRespEventName: filmRespEventName
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();    
}())
