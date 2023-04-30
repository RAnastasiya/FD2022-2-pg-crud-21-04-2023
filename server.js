const http = require('http')
const app = require('./app.js')
const server = http.createServer()

const port = 3000

server.listen(port, () => {
    console.log('server started at port: ' + port)
})