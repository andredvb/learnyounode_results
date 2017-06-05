var pathToFile = process.argv[2];
var fs = require('fs');
var contents = fs.readFileSync(pathToFile).toString();
console.log(contents.split('\n').length - 1);