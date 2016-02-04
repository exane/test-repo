var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(){
  browserify('./js/main.js', {standalone: "app", debug: true})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/'));
});



gulp.task("default", ["browserify"]);
