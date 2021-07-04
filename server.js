const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((Request, Response)  =>{
    Response.statusCode = 200;
    if (Request.url === '/') {
        Response.setHeader('Content-Type', 'text/html');
                fs.readFile('./pages/index.html', (err,data)=>{
                Response.end(data);
                })
                
    }    
    else if (Request.url === '/index') {
            Response.setHeader('Content-Type', 'text/html');
            fs.readFile('./pages/index.html', (err,data)=>{
            Response.end(data);
            })
        }
    else if (Request.url === '/contact') {
            Response.setHeader('Content-Type', 'text/html');
            fs.readFile('./pages/contact.html', (err,data)=>{
            Response.end(data);
            })
        }
    else if (Request.url === '/about' || Request.url === '/about-us') {
            Response.setHeader('Content-Type', 'text/html');
            fs.readFile('./pages/about.html', (err,data)=>{
                Response.end(data);
            })
        }
    else {
            Response.setHeader('Content-Type', 'text/html');
            fs.readFile('./pages/error.html', (err,data)=>{
            Response.end(data);
            })
        }
    console.log(Request.url);
}).listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
    
});