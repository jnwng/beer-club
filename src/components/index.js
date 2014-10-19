define(function(require) {
  var React = require('react');

  var WeekList = require('jsx!components/weekList');

  var Home = React.createClass({
    render: function() {
      return (
        <div>
          <h3>Upcoming Drink Clubs!</h3>
          <WeekList />
        </div>
      );
    }
  });

  return Home;
});
