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

  var HostList = React.createClass({
    render: function() {
      return (
        <ol className='list-unstyled'>
          {_(this.props.hosts).map(function(host) {
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

  var hosts = [{
    id: '3df',
    email: 'j@jnwng.com',
    name: 'Jon Wong',
    date: 1413695973
  }]

  React.renderComponent(
    <HostList hosts={hosts} />,
    $('#entry').get(0)
  );
});
