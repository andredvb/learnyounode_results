/*requirements*/
var http = require('http')
var URL = require('url')

/*var dec*/
var port = process.argv[2]

/*functions*/
var server = http.createServer(function (request, response)
{
	if (request.method == 'GET')
	{
		response.writeHead(200, { 'Content-Type': 'application/json' })

		var reqURLPath = URL.parse(request.url).pathname
		var reqTime = URL.parse(request.url).search.split('=')
		var reqDate = new Date(reqTime[1])

		if(reqURLPath == '/api/parsetime')
		{
			var obj = 
			{
				"hour":reqDate.getHours(),
				"minute":reqDate.getMinutes(),
				"second":reqDate.getSeconds()
			}
			var resJSON = JSON.stringify(obj)
			response.end(resJSON)
		}
		else if(reqURLPath == '/api/unixtime')
		{
			var obj =
			{
				"unixtime":reqDate.getTime()
			}
			var resJSON = JSON.stringify(obj);
			response.end(resJSON)
		}
	}
})
server.listen(port)
