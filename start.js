const https = require('https');
const http = require('http');
const fs = require('fs');

const PORT = 8080;

// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };

//https.createServer(options, function (req, res) {
http.createServer(function (req, res) {
    fs.readFile(__dirname + '/public' + req.url, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        var re = /(?:\.([^.]+))?$/;
        let mimeType = "";
        const extension = re.exec(req.url)[1];
        if (extension == "html") {
            mimeType = "text/html";
        } else if (extension == "js") {
            mimeType = "text/javascript";
        }
        res.writeHead(200, { "Content-Type": mimeType });
        res.end(data);
    });
}).listen(PORT, function () {
    console.clear();
    console.log(`Modiface SDK nodeJs server running on port - ${PORT}`);
});