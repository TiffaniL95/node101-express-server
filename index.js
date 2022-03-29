// write your code here

//require dependency
const http = require('http');

const server = http.createServer((req, res) => {

    //log request path
    console.log (`Received ${req.method} request for: ${req.url}`);

    // if (req.url == '/') {

    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.end('Hello World');

    // } else {

    //     res.end('Invalid request');
    // }

    //send headers

    res.writeHead(200, {'Content-Type': 'text/plain'});

    //send body response
    res.end('Hello World');

});

// http.get('/', function(req, res){
//      res.status(200).send('Hello World')
// })

//add listener(port, reference url, null, function to pass once server is live)
server.listen(8080, 'localhost', null, () => {

    //log where server's listening and port number
    console.log('Server is listening on localhost:8080');

});