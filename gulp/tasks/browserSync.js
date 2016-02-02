var gulp        = require('gulp');
var config      = require('../config').browserSync;
var browserSync = require('browser-sync');


gulp.task('browserSync', function() { // ローカルサーバー立ち上げ
  browserSync({
    server: {
      baseDir: config.root
    },
    open:        'external',
    reloadDelay: 800
  });
});

gulp.task('bsReload', function(){
  browserSync.reload();
});

gulp.task('bsStream', function(){
  browserSync.reload({stream: true});
});
