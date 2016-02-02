var gulp        = require('gulp');
var config      = require('../config');
var env         = require('../env');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  if(env.isProduction){
    runSequence(
      'jade',
      'stylus',
      'javascript',
      callback
    );
  } else {
    runSequence(
      'watch',
      'browserSync',
      callback
    );
  } 
});
