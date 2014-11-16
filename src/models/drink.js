define(function(require) {
  var Backbone = require('backbone-associations');

  var Drink = Backbone.AssociatedModel.extend({
    defaults: {
      id: null,
      name: ''
    }
  });

  return Drink;
});
