import fs from "fs";
import http from "http";

const SERVER_PORT = 3000;

http.createServer((req, res) => {
    let contentType = "text/html";
    let filePath = "./src/index.html";
    if (req.url === "/receiver/receiver.js") {
        contentType = "text/javascript";
        filePath = "./src/receiver/receiver.js";
    }

    fs.readFile(filePath, (err, data) => {
        if(err){
            if(err.code === "ENOENT"){
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404 Not Found");
            }else{
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("500 Internal Server Error");
            }
        }else{
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data, "utf-8");
        }
    });
}).listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});
