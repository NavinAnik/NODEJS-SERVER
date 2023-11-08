const getController = require("../controllers/getController");

module.exports = async function handleGet(req, res) {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log(baseUrl);
  const id = req.url.split("/")[3];
  console.log(id);
  if (req.url === "/api/employees") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    try {
      const content = await getController("none");
      res.write(content);
      res.end();
    } catch (err) {
      res.writeHead(404);
      res.end();
    }
  } else if (baseUrl === "/api/employees/" && id) {
    console.log("inside");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const content = await getController(id);
    if (content === "[]") {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Employee not found" }));
    } else {
      res.write(content);
      res.end();
    }
  } else {
    res.writeHead(404);
    res.end();
  }
};
