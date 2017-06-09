/*requirements*/
var http = require('http')
var fs = require('fs')

/*var declaration*/
var port = process.argv[2]
var filePath = process.argv[3]

/*functions*/
var server = http.createServer(function (request, response)
{
	var readStream = fs.createReadStream(filePath);
	readStream.pipe(response)
})
server.listen(port)