var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var config       = require('../config').jade;
var jade = require('gulp-jade');

gulp.task('jade', function() {
  gulp.src(config.src)
  .pipe(jade(config.settings))
  .pipe(gulp.dest(config.dest))
  .pipe(browserSync.reload({stream:true}));
});
