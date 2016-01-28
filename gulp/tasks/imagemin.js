var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var changed  = require('gulp-changed');
var config = require('../config').imagemin;

gulp.task( 'imagemin', function(){
  gulp.src( config.src )
  .pipe(changed( config.dest ))
  .pipe(imagemin( config.settings ))
  .pipe(gulp.dest( config.dest ));
});