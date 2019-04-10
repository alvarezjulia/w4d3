var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000)

//CREATING SERVER
// const http = require('http')

// const server = http.createServer((request, response) => {
//     if (request.url === '/') {
//         response.write('Hello world')
//         response.end()
//     } else if (request.url === '/ironhack') {
//         response.write('Welcome Ironhacker')
//         response.end()
//     } else {
//         response.statusCode = 404
//         response.write('Page not found')
//         response.end()
//     }
// })

// server.listen(3000)
