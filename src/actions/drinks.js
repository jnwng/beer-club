
define(function(require) {
  var AppDispatcher = require('dispatchers/appDispatcher');
  var DrinkConstants = require('constants/drinks');

  var DrinkActions = {
    addDrinkToWeek: function(drink, weekNumber) {
      AppDispatcher.handleViewAction({
        type: DrinkConstants.ADD_DRINK,
        drink: drink,
        weekNumber: weekNumber
      });
    }
  };

  return DrinkActions;

});
