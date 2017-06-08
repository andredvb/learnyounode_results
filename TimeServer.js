/*requirements*/
var net = require('net')
var moment = require('moment')

/*var declaration*/
var port = process.argv[2]
var dateFormat = 'YYYY-MM-DD hh:mm'

/*functions*/
var server = net.createServer(function (socket)
{
	var date = new Date()
	var dateFormatted = moment(date).format(dateFormat)
	socket.end(dateFormatted + '\n')
})
server.listen(port)