/*requirements*/
var http = require('http')

/*var declaration*/
var URL = process.argv[2]

var request = http.get(URL, function(response)
{
	response.setEncoding('utf8')
	response.on("data", function(data)
	{
		console.log(data)
	})
})