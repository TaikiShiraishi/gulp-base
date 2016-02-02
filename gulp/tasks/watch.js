var gulp   = require('gulp');
var config = require('../config');
var $      = require('gulp-load-plugins')();

gulp.task('watch', function(){
  $.watch(config.js.src, function(){ // js監視
    gulp.start('js');
  });
  $.watch(config.stylus.src, function(){ // stylus監視
    gulp.start('stylus');
  });
  $.watch(config.jade.src, function(){ // jade監視
    gulp.start('jade');
  });
  $.watch(config.image.src, function(){ // 画像監視
    gulp.start('imageCopy');
  });
  $.watch(config.browserSync.root + '**/*', function(){ // distを監視
    gulp.start('bsReload');
  });
});
