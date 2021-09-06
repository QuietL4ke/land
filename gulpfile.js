// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask;
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

const { series, watch } = require('gulp');

function styles(cb) {
  var plugins = [cssImport, cssvars, nested, autoprefixer];
  gulp.src('styles/index.css')
      .pipe(postcss(plugins))
      .pipe(gulp.dest('styles/rebuild'));
  cb();
}

function reloadBrowser(cb){
  browserSync.reload();
  cb();
}


exports.default = function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  watch('./styles/index.css', series(styles, reloadBrowser));
  watch('index.html',series(reloadBrowser));
}

exports.styles = styles;
