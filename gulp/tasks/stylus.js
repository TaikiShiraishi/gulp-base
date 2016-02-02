var gulp   = require('gulp');
var config = require('../config').stylus;
var env    = require('../env');
var $      = require('gulp-load-plugins')();
var nib    = require('nib');

gulp.task('stylus', function() {
  gulp.src([config.src, config.ignore])
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')})) //エラーがあってもgulpを止めず、通知を行う
    .pipe($.if(env.isProduction, $.sourcemaps.init())) // 読み込み
    .pipe($.stylus({use: [nib()]})) //ここでコンパイル
    .pipe($.if(env.isProduction, $.sourcemaps.write())) // source mappingの書き出し
    .pipe($.autoprefixer({ // vender-prefixをつける
      browsers: ['last 2 versions']
    })) 
    .pipe($.csscomb()) // プロパティの並び替え
    .pipe(gulp.dest(config.dist)); // 出力する
});
