define(function(require) {
  var $ = require('jquery');
  var React = require('react');
  var DefaultRoute = require('react-router').DefaultRoute;
  var Routes = require('react-router').Routes;
  var Route = require('react-router').Route;

  var DrinkList = require('jsx!components/drinkList');
  var Home = require('jsx!components/index');
  var HostList = require('jsx!components/hostList');

  React.renderComponent((
    // Put header here
    <Routes location='history'>
      <Route path='/' handler={Home}>
        <DefaultRoute handler={Home} />
      </Route>
      <Route path='/drinks' handler={DrinkList}></Route>
      <Route path='/hosts' handler={HostList}></Route>
    </Routes>
  ), $('#entry').get(0));

});
