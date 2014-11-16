define(function(require) {
  var $ = require('jquery');
  var React = require('react');
  var DefaultRoute = require('react-router').DefaultRoute;
  var Routes = require('react-router').Routes;
  var Route = require('react-router').Route;

  var WeekView = require('jsx!components/week');

  React.renderComponent((
    <Routes>
      <Route path='/' handler={WeekView}>
        <DefaultRoute handler={WeekView} />
      </Route>
    </Routes>
  ), $('#entry').get(0));

});
