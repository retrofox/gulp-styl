'use strict';

/**
 * Module dependencies
 */

var gutil = require('gulp-util');
var through = require('through2');
var styl = require('styl');

/**
 * Export function
 */

module.exports = function () {
  // get plugins and options
  var plugins = [].slice.call(arguments);
  var options = plugins[plugins.length - 1];

  if ('object' !== typeof options) {
    options = {};
  } else {
    plugins.pop();
  }

  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      var err = new gutil.PluginError('gulp-styl', 'Streaming not supported');
      this.emit('error', err);
      return cb();
    }

    try {
      var ret = styl(file.contents.toString(), options);
      plugins.forEach(ret.use.bind(ret));
      file.contents = new Buffer(ret.toString(options));
      file.path = gutil.replaceExtension(file.path, '.css');
    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-styl', err));
    }

    this.push(file);
    cb();
  });
};
