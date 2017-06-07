var fs = require('fs')

module.exports = function (folder, fileExt, cb) {

  	var result = []

  	fs.readdir(folder, function(err, fileList){
		if (err) {
			return cb(err)
		}
		fileList.forEach(function(filename) {
			var file_ext = filename.split('.')
			if (file_ext.length > 1){
				var ext = file_ext.pop()
				if(ext == fileExt){
					result.push(filename)
				}
			}
		})
		cb(null, result)
	})
}

