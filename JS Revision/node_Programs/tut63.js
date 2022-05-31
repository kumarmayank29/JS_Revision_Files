
/*
The Node. js Read-Eval-Print-Loop (REPL) is an interactive shell that processes Node. js expressions. The shell reads JavaScript code the user enters, evaluates the result of interpreting the line of code, prints the result to the user, and loops until the user signals to quit.

In node JS Symbol '_' is treated as previous variable/value during the evaluation of an expression 

If we click Tab twice we get after entering the Node Runtime environment.We get all the Global Variables available to us at once

> a=34
34
> _
34
> c=89
89
> _
89
> c+a
123
> _
123

*/


const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //To render HTML use text/html and to render plain text use text/plain
  //res.end('This is the Day 1 of our NODE JS');
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css"/>
      <title>Best Jokes</title>
  </head>
  <body>
      <div class="container">
          <h3>😍Best Jokes to make your day 🐓🐓</h3>
          <div id="joke" class="joke">Awesome Joke is loading...</div>
          <button id="jokeBtn" class="btn">Next JOKE</button>
      </div>
      <script src="script.js"></script>
      
  </body>
  </html>
  `);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});