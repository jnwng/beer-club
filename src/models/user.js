define(function(require) {
  var Backbone = require('backbone-associations');

  var User = Backbone.AssociatedModel.extend({
    defaults: {
      id: null,
      name: ''
    }
  })
  return User;
});
