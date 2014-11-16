
define(function(require) {
  var React = require('react');
  var DrinkStore = require('stores/drinks');
  var DrinkActions = require('actions/drinks');

  var DrinkInput = React.createClass({

    getInitialState: function() {
      return {
        value: ''
      };
    },

    render: function() {
      return (
        <div>
          <input type='text' onChange={this.handleChange} value={this.state.value} />
          <button onClick={this.addDrink}>CLICKME</button>
        </div>
      );
    },

    handleChange: function(e) {
      this.setState({
        value: e.target.value
      });
    },

    addDrink: function() {
      this.props.addDrink({
        name: this.state.value
      });
    }
  });

  var DrinkList = React.createClass({

    getInitialState: function() {
      return {
        drinks: new DrinkStore([], {
          weekNumber: this.props.weekNumber
        })
      }
    },

    componentDidMount: function() {
      this.state.drinks.on('all', this.forceUpdate.bind(this, null), this);
    },

    addDrink: function(drink) {
      DrinkActions.addDrinkToWeek(drink, this.props.weekNumber);
    },

    render: function() {
      return (
        <div>
          <DrinkInput addDrink={this.addDrink} />
          <table>
            {this.state.drinks.map(function(drink) {
              return (
                <tr key={drink.cid}>
                  <td>{drink.get('name')}</td>
                </tr>
              )
            })}
          </table>
        </div>
      );
    }

  });

  return DrinkList;
});
