var minimist = require('minimist');
var $        = require('gulp-load-plugins')();

var minimistOption = {
  string: 'env',
  'default': {
    env: process.env.NODE_ENV || 'development' 
  }
}

var options = minimist(process.argv.slice(2), minimistOption);

var isProduction = false;
if(options.env == 'production'){
  isProduction = true;
}

$.util.log('[env]', $.util.colors.yellow(options.env), '[isProduction]', $.util.colors.yellow(isProduction));

module.exports = {
  isProduction: isProduction
};
