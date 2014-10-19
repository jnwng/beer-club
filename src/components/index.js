define(function(require) {
  var React = require('react');

  var HostList = require('jsx!components/hostList');

  var Home = React.createClass({
    render: function() {
      return (
        <div>
          <h3>Upcoming Drink Clubs!</h3>
          <HostList />
        </div>
      );
    }
  });

  return Home;
});
