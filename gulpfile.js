
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

const { series, watch } = require('gulp');

function styles(cb) {
  var plugins = [cssImport, cssvars, nested, autoprefixer];
  gulp.src('styles/index.css')
      .pipe(plumber())
      .pipe(postcss(plugins))
      .pipe(gulp.dest('styles/rebuild'));
  cb();
}

function reloadBrowser(cb){
  browserSync.reload();
  cb();
}


exports.default = function(cb){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  watch('./styles/*.css', series(styles, reloadBrowser));
  watch('index.html',series(reloadBrowser));
  cb();
}

