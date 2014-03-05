'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var styl = require('../');

/**
 * Compile css
 */

gulp.task('css', function () {
  gulp.src('./*.styl')
    .pipe(styl({
      compress: true,
      whitespace: true
    }))
    .pipe(gulp.dest('./dist'));
});

// Default
gulp.task('default', ['css']);
