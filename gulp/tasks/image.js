var gulp   = require('gulp');
var config = require('../config').image;
var rimraf = require('rimraf');

gulp.task('imageCopy', ['clean'], function() {
  return gulp.src(
    [config.src, config.ignore],
    {base: 'src'}
  )
  .pipe( gulp.dest(config.dist));
});

gulp.task('clean', function (cb) {
  rimraf(config.dist + 'img', cb);
});
