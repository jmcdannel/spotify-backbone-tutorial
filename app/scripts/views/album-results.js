var AlbumResultsView = Backbone.View.extend({

  el: '#album-results',

  template: Handlebars.compile($('#album-search-template').html()),

  loadingHTML: $('#loading-template').html(),

  initialize: function() {
    this.listenTo(this.model, 'change', this.renderLoading);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    if (this.model.get('type') === 'album') {
      this.$el.show().html(this.template(this.model.toJSON()));
    } else {
      this.$el.hide();
    }
  },

  renderLoading: function() {
    if (this.model.get('type') === 'album') {
      this.$el.show().html(this.loadingHTML);
    } else {
      this.$el.hide();
    }
  }


})