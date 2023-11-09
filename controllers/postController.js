const fs = require("fs");
const errorHandler = require("../utils/errorHandler");
const bodyParser = require("../utils/bodyParser");

module.exports = async function postController(req, res) {
  const body = await bodyParser(req);
  if (
    body.name !== "" ||
    body.username !== "" ||
    body.email !== "" ||
    body.name !== undefined ||
    body.username !== undefined ||
    body.email !== undefined
  )
    try {
      body.id = Math.floor(Math.random() * 1000000).toString();
      req.data.push(body);
      fs.writeFile("./dataModel/data.json", JSON.stringify(req.data), (err) => {
        if (err) {
          errorHandler(req, res);
        }
        res.statusCode = 201;
        res.write("Employee created successfully");
        res.end();
      });
    } catch (err) {
      errorHandler(req, res);
    }
};
