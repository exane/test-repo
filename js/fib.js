
var fs = require("fs");

var importantConfigFile = JSON.parse(fs.readFileSync("./config/cfg.js", 'utf-8'));

var secretTextFile = fs.readFileSync("./SECRET_TEXT.txt", 'utf-8');


var fib = function(n) {
	if(importantConfigFile.key != "abc123") {
		console.error("WRONG KEY FROM CONFIG FILE");
		return;
	}
	if(!secretTextFile) {
		console.error("NO SECRET TEXT FILE");
		return;
	}
	if(n <= 1) 
		return 1;
	return fib(n-1) + fib(n-2);
}

module.exports = fib;
