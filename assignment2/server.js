const http = require("http");
const getnames = require("./name.js");
var qs = require("querystring");

const PORT = 8081;

const server = http.createServer((req, res) => {
    let data = "";
    req.on("data", (chunk) => {
        data = chunk.toString("utf8");
    });
    req.on("end", () => {
        let POST = qs.parse(data);
        req.body = POST;
        getnames(req, res);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
