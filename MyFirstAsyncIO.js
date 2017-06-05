var pathToFile = process.argv[2];
var fs = require('fs');
fs.readFile(pathToFile, function(err, fileContents) {
	if (err) {
		return console.log(err);
	}
	var contents = fileContents.toString();
	console.log(contents.split('\n').length - 1);
});