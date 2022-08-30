const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Welcome to our little history')
    }
    res.end(`<h1>Oops!</h1><p>We can't seem to find the page that you are looking for</p><a href="/">Back Home</a>`)
})

server.listen(5000)