const postController = require("../controllers/postController");
const bodyParser = require("../utils/bodyParser");
module.exports = async function postRoutes(req, res) {
  if (req.url === "/api/employees/create") {
    console.log("inside post");
    res.setHeader("Content-Type", "text/html");
    const body = await bodyParser(req);
    if (
      body.name !== "" &&
      body.username !== "" &&
      body.email !== "" &&
      body.name !== undefined &&
      body.username !== undefined &&
      body.email !== undefined
    ) {
      try {
        console.log("inside try");
        await postController(req, body);
        res.statusCode = 201;
        res.write("Employee created successfully");
        res.end();
      } catch (err) {
        res.writeHead(404);
        res.end("Failed to create employee");
      }
    }
  } else {
    res.writeHead(404);
    res.end("Something went wrong");
  }
};
