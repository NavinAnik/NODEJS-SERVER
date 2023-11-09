const getController = require("../controllers/getController");
const errorHandler = require("../utils/errorHandler");

module.exports = async function handleGet(req, res) {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log(baseUrl);
  const id = req.url.split("/")[3];
  console.log(id);
  if (req.url === "/api/employees") {
    await getController(req, res, "none");
  } else if (baseUrl === "/api/employees/" && id !== undefined) {
    await getController(req, res, id);
  } else {
    errorHandler(req, res);
  }
};
