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

gulp.task('styles', function(){
 return gulp.src('styles/index.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('styles'))
});