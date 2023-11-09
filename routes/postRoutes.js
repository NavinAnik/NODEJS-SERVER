const postController = require("../controllers/postController");
const errorHandler = require("../utils/errorHandler");
module.exports = async function postRoutes(req, res) {
  if (req.url === "/api/employees/create") {
    {
      await postController(req, res);
    }
  } else {
    errorHandler(req, res);
  }
};
