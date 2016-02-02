var baseConfig = {
  sourceDir: './src/',
  distDir: './dist/'
};
module.exports = {
  stylus: {
    src:          baseConfig.sourceDir + 'stylus/**/*.styl',
    ignore:       '!' + baseConfig.sourceDir + 'stylus/**/_*.styl',
    dist:         baseConfig.distDir + 'css/',
    autoprefixer: true,
  },
  jade: {
    src:    baseConfig.sourceDir + 'jade/**/*.jade',
    ignore: '!' + baseConfig.sourceDir + 'jade/**/_*.jade',
    dist:   baseConfig.distDir
  },
  js: {
    src:  baseConfig.sourceDir + 'js/**/*.js',
    dist: baseConfig.distDir + 'js/'
  },
  image: {
    src:    baseConfig.sourceDir + 'img/**/*',
    ignore: '!' + baseConfig.sourceDir + 'img/**/svg/*.svg',
    dist:   baseConfig.distDir
  },
  browserSync: {
    root: baseConfig.distDir
  }
};
