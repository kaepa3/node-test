const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url ==='/about/')
    res.end('about page')
  else if (req.url ==='/contact/')
    res.end('contact page')
  else if (req.url ==='/')
    res.end('home page')
  else{
    console.log(req.url)
    res.end('hello nodejs')
  }
})

server.listen(3000)
