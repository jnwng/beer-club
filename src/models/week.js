
define(function(require) {

  var Backbone = require('backbone-associations');
  var User = require('models/user');

  var Week = Backbone.AssociatedModel.extend({
    relations: [{
      type: Backbone.Many,
      key: 'hosts',
      relatedModel: User
    }]
  });

  return Week;

});
