define(function(require) {
  var _ = require('underscore');
  var Backbone = require('backbone-associations');
  var Drink = require('models/drink');
  var AppDispatcher = require('dispatchers/appDispatcher');
  var DrinkConstants = require('constants/drinks');

  var DrinkStore = Backbone.Collection.extend({
    model: Drink,

    url: function() {
      // This should be a firebase URL
      return '/';
    },

    initialize: function() {
      this.registerActions();
    },

    registerActions: function() {
      AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch (action.type) {
          case DrinkConstants.ADD_DRINK:
            // Actually, probably ought to check the weeknumber here first
            this.add(action.drink);
        }
      }.bind(this));
    }

  });

  return DrinkStore;
});
