var gulp = require('gulp');
var fs = require("fs");


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



gulp.task("default", ["config"]);
