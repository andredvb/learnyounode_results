/*requirements*/
var http = require('http')

/*var declaration*/
var URLs = process.argv.slice(2)
var countCallbacks = 0
var responses = []

/*functions*/
function getMultipleAssync(index)
{
	var request = http.get(URLs[index], function(response)
	{
		/*var dec*/
		var str = ''

		response.setEncoding('utf8')
		response.on('data', function(data)
		{
			str += data
		})
		response.on('end', function(data)
		{
			responses[index] = str
			countCallbacks++
			if(countCallbacks == 3)
			{
				responses.forEach(function (item)
				{
					console.log(item)
				})
			}
		})
	})
}

for (var i = 0; i < URLs.length; i++) {
	getMultipleAssync(i)
}