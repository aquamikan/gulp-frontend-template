var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var config       = require('../config').sass;

var sass         = require('gulp-sass');
var frontnote = require("gulp-frontnote");
var csscomb = require('gulp-csscomb');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

gulp.task('style', function () {
	return gulp.src(config.src)
	.pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>") //<-
  }))
  .pipe(frontnote({
            css: './public/css/style.css',
            out: './docs/css'
        }))
	.pipe(sass(config.settings))
	.pipe(autoprefixer({ browsers: ['last 2 version'] }))
  .pipe(csscomb())
	.pipe(gulp.dest(config.dest))
	.pipe(browserSync.reload({stream:true}));
});
