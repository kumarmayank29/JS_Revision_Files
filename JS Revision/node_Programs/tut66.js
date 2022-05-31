
const http=require('http')
const fs=require('fs') //fs is file Server
const fileContent=fs.readFileSync('tut61.html')

//Creating a Server
const server=http.createServer((req,res)=>{
    //Since We need to Render HTML so we use text/html
    res.writeHead(200,{'Content-type':'text/html'});

    //Now serve the response
    res.end(fileContent) 
})

//Now Listen to the Server
server.listen(8000,'127.0.0.1',()=>{
    console.log("Hello Dude I am Listening on Port 80")
})

//To Run use http://127.0.0.1:8000/ in browser



