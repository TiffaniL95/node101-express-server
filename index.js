// write your code here

//require dependency
const http = require('http');

const server = http.createServer((req, res) => {

    //log request path
    console.log (`Received ${req.method} request for: ${req.url}`);

    //send headers

    res.writeHead(200, {'Content-Type': 'text/plain'});

    //send body response
    res.end('Hello World');

});


//add listener(port, reference url, null, function to pass once server is live)
server.listen(8080, 'localhost', null, () => {

    //log where server's listening and port number
    console.log('Server is listening on localhost:8080');

});