var importantConfigFile = require("./config/cfg.js");


var fib = function(n) {
	if(importantConfigFile.key != "abc123") 
		throw Error();
	if(n <= 1) 
		return 1;
	return fib(n-1) + fib(n-2);
}

module.exports = fib;