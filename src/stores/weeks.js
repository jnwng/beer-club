
define(function(require) {
  var Backbone = require('backbone-associations');
  var Week = require('models/week');

  var WeekCollection = Backbone.Collection.extend({
    model: Week
  });

  return WeekCollection;
});
