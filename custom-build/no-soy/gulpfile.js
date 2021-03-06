'use strict';

var gulp = require('gulp');
// gulp-babel-globals is a very useful npm module that builds es6 modules and
// all their dependencies to a single globals bundle. You can use any babel
// build you like though.
var babelGlobals = require('gulp-babel-globals');

gulp.task('build', function() {
  return gulp.src('src/*.js')
    .pipe(babelGlobals({
      babel: {
        presets: ['metal-resolve-source', 'es2015']
      },
      globalName: 'metal'
    }))
    .pipe(gulp.dest('build'));
});
