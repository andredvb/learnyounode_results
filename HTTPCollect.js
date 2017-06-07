/*requirements*/
var http = require('http')

/*var declaration*/
var URL = process.argv[2]

/*functions*/
callback = function(response)
{
	/*var dec*/
	var nChar = 0
	var str = ''
	response.setEncoding('utf8')
	response.on('data', function(data)
	{
		str += data;
		nChar += data.length
	})
	response.on('end', function(data)
	{
		console.log(nChar)
		console.log(str)
	})
}
var request = http.get(URL, callback)