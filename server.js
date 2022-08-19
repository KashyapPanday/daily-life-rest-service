const http = require("http")
const port = 3000
const hostname = "127.0.0.1"

const server = http.createServer((req,res) => {
    if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
       res.write("Hello from nodejstutor")
       res.end() 
   }

    if(req.url === '/courses'){
       res.statusCode = 200;
       res.setHeader('Content-Type','text/plain');
       res.write("Welcome to courses")
       res.end()
    }
    if(req.url === '/homework'){
       res.statusCode = 200;
       res.setHeader('Content-Type','text/plain');
       res.write("We have your homework ready")
       res.end() 
    }

});


server.listen(port, hostname, () => {
  console.log(`Serving running at http://${hostname}:${port}/`)
})