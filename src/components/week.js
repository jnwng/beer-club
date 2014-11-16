define(function(require) {

  var Backbone = require('backbone');
  var React = require('react');
  var moment = require('moment');

  var DrinkList = require('jsx!components/drinkList');
  var DrinkStore = require('stores/drinks');
  var WeekActions = require('actions/week');

  var WeekView = React.createClass({

    getInitialState: function() {
      return {
        weekNumber: this.props.currentWeekNumber
      };
    },

    render: function() {
      return (
        <div>
          <h1>week one</h1>
          <DrinkList weekNumber={this.state.currentWeekNumber} />
        </div>
      );
    }

  });

  return WeekView;

});
