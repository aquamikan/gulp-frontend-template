var dest = "./public";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },

  jade: {
    src: src + '/view/*.jade',
    dest: dest,
    settings: {
      pretty: true
    }
  },
  sass: {
    src: src + "/scss/*.scss",
    dest: dest + '/css',
    settings: {
     outputStyle: 'expanded'
   }
 },
 script:{
  src: src + '/js/*.js',
  dest: dest + '/js',
  settings: {}
 },
 imagemin: {
  src: src + '/images/*.+(jpg|jpeg|png|gif|svg)',
  dest: dest + '/images/',
  settings:{
    optimizationLevel: 7
  }
},
};
