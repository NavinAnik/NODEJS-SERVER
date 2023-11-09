const http = require("http");
const handleGet = require("./routes/getRoutes");
const handlePost = require("./routes/postRoutes");
let data = require("./dataModel/data.json");

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
});

server.listen(3000, () => {
  console.log("Serve started on port 3000");
});
