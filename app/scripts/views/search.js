var SearchView = Backbone.View.extend({

  el: '#search-container',

  events: {
    'click #search-btn' : 'seach',
    'change [name=search-type]' : 'type_change',
    'submit form' : 'seach'
  },

  initialize: function() {
    this.$query = $('#search-text', this.$el);
    this.$types = $('[name=search-type]', this.$el);
  },

  seach: function(e) {
    var base = this;
    e.preventDefault();
    this.model.set('query', this.$query.val());
    _.delay(function() { base.model.fetch(); }, 2000);

  },

  type_change: function(e) {
    var base = this;
    e.preventDefault();
    this.model.set('type', this.$types.filter(':checked').val());
    _.delay(function() { base.model.fetch(); }, 2000);
  }

});