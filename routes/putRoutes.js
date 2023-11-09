const putController = require("../controllers/putController");
const errorHandler = require("../utils/errorHandler");

module.exports = async function postRoutes(req, res) {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  console.log(baseUrl);
  const id = req.url.split("/")[4];
  console.log(id);
  if (baseUrl === "/api/employees/edit/" && id) {
    console.log("inside");
    const content = await putController(req, res, id);
  } else {
    errorHandler(req, res);
  }
};
