define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var moment = require('moment');
  var React = require('react');

  require('css!components/weekList.css');

  var WeekRow = React.createClass({
    getInitialState: function() {
      return {
        claimed: false
      };
    },
    render: function() {
      var rowClass = 'row ' + (this.props.beingClaimed ? 'active' : '');
      var buttonClass = 'btn btn-primary ' + (this.state.claimed ? 'hide' : '');
      return (
        <tr className={rowClass} data-js={this.props.id}>
          <td className='col-sm-4'>
            <button className={buttonClass} onClick={this.onBeingClaimed}>Claim</button>
          </td>
          <td className='col-sm-4'>
            {this.props.date.format('MMM Do')}
          </td>
          <td className='col-sm-4'>
            {this.props.name}
          </td>
        </tr>
      );
    },
    onBeingClaimed: function() {
      this.props.onBeingClaimed(this.props.date.week());
    }
  });

  var WeekList = React.createClass({
    getInitialState: function() {
      return {
        hosts: [],
        weekBeingClaimed: null
      };
    },
    componentDidMount: function() {
      //make ajax request here
      // this.setState({
      //   'hosts': hosts
      // });
    },
    render: function() {
      var currentWeek = moment().week();
      var dates = [];
      for (var week = currentWeek - 3; week < currentWeek + 6; week++) {
        dates.push(moment().day('Monday').week(week));
      }
      var tableClass = 'table ' + (this.state.weekBeingClaimed > 0 ? 'weekBeingClaimed' : '');
      return (
        <table className={tableClass}>
        {_(dates).map(function(date) {
          return <WeekRow
            date={date}
            name='Jon'
            beingClaimed={date.week() === this.state.weekBeingClaimed}
            onBeingClaimed={this.onBeingClaimed}/>;
        }.bind(this))}
        </table>
      );
    },
    onBeingClaimed: function(weekNumber) {
      var weekBeingClaimed;
      if (weekNumber === this.state.weekBeingClaimed) {
        weekBeingClaimed = -1;
      } else {
        weekBeingClaimed = weekNumber;
      }
      this.setState({
        weekBeingClaimed: weekBeingClaimed
      });
    }
  });

  return WeekList;
});
