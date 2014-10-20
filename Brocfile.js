var path = require('path');
var nib = require('nib');

var pickFiles = require('broccoli-static-compiler');
var jadeFilter = require('broccoli-jade');
var stylusFilter = require('broccoli-stylus');
var reactFilter = require('broccoli-react');
var mergeTrees = require('broccoli-merge-trees');

var files = pickFiles(path.join(__dirname, 'src'), {
  srcDir: '/',
  files: [
    '**/*.jade',
    '**/*.styl',
    '**/*.js',
    'bower_components/normalize.css/normalize.css',
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/font-awesome/fonts/*',
    '**/*.map'],
  destDir: '/'
});

files = jadeFilter(files);
files = stylusFilter(files, {
  use: [nib]
});
files = reactFilter(files);

module.exports = files;
