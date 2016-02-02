var gulp   = require('gulp');
var config = require('../config').js;
var $      = require('gulp-load-plugins')();

gulp.task('js', function() {
  gulp.src(config.src)
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')})) // エラー時にgulpを止めず、通知を行う
    .pipe(gulp.dest(config.dist)) // 出力
});
