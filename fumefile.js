var fume = require("fume-deploy");

fume.keep("./config");
fume.keep("./SECRET_TEXT.txt");

fume.options.tempfolder = ".fume.tmp";
fume.options.backupfolder = ".fume";

fume.task(function() {

  fume
  .deploy("https://github.com/exane/test-repo")
  .execute("npm install")
  .execute("npm run gulp");
  
}).start();
