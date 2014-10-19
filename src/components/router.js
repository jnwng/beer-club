define(function(require) {
  var $ = require('jquery');
  var React = require('react');

  var HostList = require('jsx!components/index');
  var DefaultRoute = require('react-router').DefaultRoute;
  var Routes = require('react-router').Routes;
  var Route = require('react-router').Route;

  React.renderComponent((
    <Routes location='history'>
      <Route path='/' handler={HostList}>
        <DefaultRoute handler={HostList} />
      </Route>
    </Routes>
  ), $('#entry').get(0));

});
