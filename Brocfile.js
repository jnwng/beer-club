var path = require('path');

var pickFiles = require('broccoli-static-compiler');
var jadeFilter = require('broccoli-jade');
var stylusFilter = require('broccoli-stylus');
var reactFilter = require('broccoli-react');
var mergeTrees = require('broccoli-merge-trees');

var files = pickFiles(path.join(__dirname, 'src'), {
  srcDir: '/',
  files: ['**/*.jade', '**/*.styl', '**/*.js', 'bower_components/normalize.css/normalize.css', '**/*.map'],
  destDir: '/'
});

files = jadeFilter(files);
files = stylusFilter(files);
files = reactFilter(files);

module.exports = files;
