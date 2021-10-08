const http = require('http');

const server = http.createServer((req,res)=>{
	res.write('Welcom to de tutorial')
	res.end()
})

server.listen(5000)