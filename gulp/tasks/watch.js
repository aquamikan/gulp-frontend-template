/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
   */

   var gulp     = require('gulp');
   var config   = require('../config');

   gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.jade.src, ['jade']);
   	gulp.watch(config.sass.src,  ['style']);
      gulp.watch(config.script.src,  ['script']);
});
