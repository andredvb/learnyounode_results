/*requirements*/
var http = require('http')
var fs = require('fs')
var map = require('through2-map')

/*var declaration*/
var port = process.argv[2]
var filePath = process.argv[3]

/*functions*/
var server = http.createServer(function (request, response)
{
	if (request.method == 'POST')
	{
		request.pipe(map(function (chunk) {
       		return chunk.toString().toUpperCase() 
     	})).pipe(response)  
	}
})
server.listen(port)