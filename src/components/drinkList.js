define(function(require) {
  var React = require('react');

  var DrinkRow = React.createClass({
    render: function() {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.brewery}</td>
          <td>{this.props.abv}</td>
        </tr>
      );
    }
  });

  var DrinkList = React.createClass({
    render: function() {
      return (
        <table>
          <thead>
            <th>Name</th>
            <th>Brewery</th>
            <th>ABV</th>
          </thead>
          {_(this.state.drinks).map(function(drink) {
            return (
              <DrinkRow drink={drink} />
            );
          })}
        </table>
      );
    }
  });

  return DrinkList;
});
