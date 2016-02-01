var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(){
  browserify('./js/main.js', {standalone: "app", debug: true})
  .bundle().on("error", function(err){
    console.log(err);
  })
  .pipe(source('app.js').on("error", function(err){
    console.log(err);
  }))
  .pipe(gulp.dest('./build/').on("error", function(err){
    console.log(err);
  }));
});



gulp.task("default", ["browserify"]);
