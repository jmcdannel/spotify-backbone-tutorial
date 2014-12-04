/*global SpotifyBackboneTutorial, $*/


window.SpotifyBackboneTutorial = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');

        _.bindAll(this, 'search_success');

        this.Models.searchModel = new SearchModel();
        this.Models.searchModel.fetch({success: this.search_success});

    },
    search_success: function() {
        console.log('search_success', arguments, this.Models.searchModel.toJSON());
        this.Views.searchView = new SearchView({model: this.Models.searchModel});
        this.Views.albumResults = new AlbumResultsView({model: this.Models.searchModel});
        this.Views.artistResults = new ArtistResultsView({model: this.Models.searchModel});
    }
};

$(document).ready(function () {
    'use strict';
    SpotifyBackboneTutorial.init();
});
