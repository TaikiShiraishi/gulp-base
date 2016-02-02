var gulp   = require('gulp');
var config = require('../config').jade;
var $      = require('gulp-load-plugins')();

gulp.task('jade', function() {
  gulp.src([config.src, config.ignore])
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')})) // エラー時にgulpを止めず、通知を行う
    .pipe($.jade({
      'pretty': true // 改行+インデント付きで出力する
    }))
    .pipe(gulp.dest(config.dist)); // 出力
});
