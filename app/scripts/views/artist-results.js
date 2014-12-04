var ArtistResultsView = Backbone.View.extend({

  el: '#artist-results',

  template: Handlebars.compile($('#artist-search-template').html()),

  loadingHTML: $('#loading-template').html(),

  initialize: function() {
    this.listenTo(this.model, 'change', this.renderLoading);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    if (this.model.get('type') === 'artist') {
      this.$el.show().html(this.template(this.model.toJSON()));
    } else {
      this.$el.hide();
    }
  },

  renderLoading: function() {
    if (this.model.get('type') === 'artist') {
      this.$el.show().html(this.loadingHTML);
    } else {
      this.$el.hide();
    }
  }


})