var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var fs = require("fs");

gulp.task('browserify', ["config"], function(){
  browserify('./js/main.js', {standalone: "app", debug: true})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/'));
});

gulp.task("config", function() {
  fs.access(__dirname + "/config/cfg.js", function(err) {
    exists = !err;
    if(!exists) {
      fs.readFile(__dirname + "/cfg.default.js", function(err, data){
        if(err) throw err;
        fs.writeFile(__dirname + "/config/cfg.js", data, function(err){
          if(err) throw err;
        })
      })
    }
  })
})



gulp.task("default", ["browserify"]);
