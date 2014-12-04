var SearchModel = Backbone.Model.extend({

  url: function() {
    return 'https://api.spotify.com/v1/search?q=' + this.get('query') + '&type=' + this.get('type');
  },

  initialize: function() {
    this.set('type', 'artist');
    this.set('query', 'Basic Channel');
  }

});