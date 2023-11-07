const crypto = require("crypto");
const requestBodyparser = require("../utils/body-parser");
module.exports = function handlePost(req, res) {
  if (req.url === "api/employees") {
    requestBodyparser(req)
      .then((body) => {
        let employee = {
          id: crypto.randomBytes(16).toString("hex"),
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
        };
        req.data.push(employee);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(employee));
        res.end();
      })
      .catch((error) => {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(error));
        res.end();
      });
  }
};
