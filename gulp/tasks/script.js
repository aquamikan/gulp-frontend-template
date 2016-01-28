var gulp = require('gulp');
var browserSync  = require('browser-sync');
var config = require('../config').script;
var jshint = require('gulp-jshint');

gulp.task('script', function () {
  gulp.src(config.src)
  .pipe(jshint(config.settings))
  .pipe( jshint.reporter() )
  .pipe(gulp.dest(config.dest));
  gulp.src('./src/lib')
  .pipe(gulp.dest('./public/lib'))
  .pipe(browserSync.reload({stream:true}));
});
