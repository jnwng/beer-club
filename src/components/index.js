define(function(require) {
  var $ = require('jquery');
  var React = require('react');

  React.renderComponent(
    <h1>Hello World!</h1>,
    $('#entry').get(0)
  );
});
