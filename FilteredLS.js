var fs = require('fs');

var folder = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(folder, function(err, fileList){
	if (err) {
		console.log(err);
	}
	fileList.forEach(function(filename) {
		var file_ext = filename.split('.');
		if (file_ext.length > 1){
			var ext = file_ext.pop();
			if(ext == fileExt){
				console.log(filename);
			}
		}
	});
});