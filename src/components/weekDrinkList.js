
define(function(require) {
  var React = require('react');

  var WeekDrinkList = React.createClass({
    getInitialState: function() {
      return {
        drinks: []
      }
    },
    render: function() {
      return (
        <div>
          <h1>Week {this.props.params.weekNumber}</h1>
          <DrinkList drinks={this.state.drinks}/>
        </div>
      );
    }
  });

  return WeekDrinkList;
});
