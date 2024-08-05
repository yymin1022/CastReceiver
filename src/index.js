import fs from 'fs';
import http from 'http';

const SERVER_PORT = 3000

http.createServer((req, res) => {
    fs.readFile("./src/index.html", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("500 Internal Server Error");
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
}).listen(SERVER_PORT, () => {
    console.log(`Server is Listening at Port ${SERVER_PORT}`);
});