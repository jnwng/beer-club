
define(function(require) {
  var AppDispatcher = require('dispatchers/appDispatcher');
  var WeekConstants = require('constants/week');

  var WeekActions = {
    claim: function(host) {
      AppDispatcher.handleViewAction({
        type: WeekConstants.WEEK_CLAIM
      });
    },

    addDrink: function(weekNumber) {
      AppDispatcher.handleViewAction({
        type: WeekConstants.WEEK_ADD_DRINK,
        weekNumber: weekNumber
      });
    }
  };

  return WeekActions;

});
