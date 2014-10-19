define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var moment = require('moment');
  var React = require('react');

  // var Host = React.createClass({
  //   propTypes: {
  //     id: React.PropTypes.string.isRequired,
  //     email: React.PropTypes.string.isRequired,
  //     name: React.PropTypes.string.isRequired,
  //     date: React.PropTypes.number.isRequired
  //   }
  // });

  var HostRow = React.createClass({
    render: function() {
      return (
        <div className='row' data-js='{this.props.hostId}'>
          <div className='col-md-4 col-md-offset-4'>
            {moment(this.props.date).format('MMM Do')}
          </div>
          <div className='col-md-4'>
            {this.props.name}
          </div>
        </div>
      );
    }
  });

  var hosts = [{
    id: '3df',
    email: 'j@jnwng.com',
    name: 'Jon Wong',
    date: 1413695973
  }];

  var HostList = React.createClass({
    getInitialState: function() {
      return {
        hosts: []
      };
    },
    componentDidMount: function() {
      this.setState({
        'hosts': hosts
      });
    },
    render: function() {
      return (
        <ol className='list-unstyled'>
          {_(this.state.hosts).map(function(host) {
            return (
              <li>
                <HostRow date={host.date} name={host.name} />
              </li>
            );
          })}
        </ol>
      );
    }
  });

  return HostList;
});
