const http = require("http");
const handleGet = require("./methods/handleGet");
const handlePost = require("./methods/handlePost");
let data = require("./data/data.json");

const server = http.createServer((req, res) => {
  req.data = data;
  switch (req.method) {
    case "GET":
      handleGet(req, res);
      break;
    case "POST":
      handlePost(req, res);
      break;
    default:
      res.writeHead(404);
      res.end();
      break;
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Serve started on port 3000");
});
