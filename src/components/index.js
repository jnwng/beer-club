define(function(require) {
  var React = require('react');

  var DrinkList = require('jsx!components/drinkList');
  var WeekList = require('jsx!components/weekList');

  var Home = React.createClass({
    getInitialState: function() {
      return {
        weekNumber: -1
      }
    },
    render: function() {
      return (
        <div>
          <h3>Upcoming Drink Clubs!</h3>
          <WeekList showDrinksForWeek={this.showDrinksForWeek}/>
          <DrinkList weekNumber={this.state.weekNumber}/>
        </div>
      );
    },
    showDrinksForWeek: function(weekNumber) {
      this.setState({
        weekNumber: weekNumber
      });
    }
  });

  return Home;
});
