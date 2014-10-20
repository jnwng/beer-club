define(function(require) {
  var React = require('react');
  var _ = require('underscore');

  var DrinkInput = React.createClass({
    render: function() {
      return (
        <form className='form-horizontal' role='form'>
          <div className='form-group'>
            <label for='drinkName' className='col-sm-4 control-label'>Drink Name:</label>
            <div className='col-sm-8'>
              <input type='text' className='form-control' id='drinkName'></input>
            </div>
            <label for='origin' className='col-sm-4 control-label'>Brewery/Distillery/Vineyard:</label>
            <div className='col-sm-8'>
              <input type='text' className='form-control' id='drinkOrigin'></input>
            </div>
          </div>
        </form>
      );
    }
  });

  var DrinkRow = React.createClass({
    render: function() {
      return (
        <tr className='row'>
          <td className='col-sm-4'>{this.props.drink.name}</td>
          <td className='col-sm-4'>{this.props.drink.origin}</td>
        </tr>
      );
    }
  });

  var DrinkList = React.createClass({
    getInitialState: function() {
      return {
        drinks: [{
          name: 'Sour Pumpkin',
          origin: 'Tied House',
        }]
      }
    },
    componentDidMount: function() {
      //this.props.weekNumber ajax call
    },
    render: function() {
      return (
        <div>
          <h1>Week {this.props.weekNumber}</h1>
          <DrinkInput />
          <table>
            <thead>
              <tr className='row'>
                <th className='col-sm-4'>Name</th>
                <th className='col-sm-4'>Origin</th>
              </tr>
            </thead>
            <tbody>
            {_(this.state.drinks).map(function(drink) {
              return (
                <DrinkRow drink={drink} />
              );
            })}
            </tbody>
          </table>
        </div>
      );
    }
  });

  return DrinkList;
});
