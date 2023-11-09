const fs = require("fs");
const bodyParser = require("../utils/bodyParser");

module.exports = async function putController(req, res, id) {
  const body = await bodyParser(req);
  if (
    body.name === "" ||
    body.username === "" ||
    body.email === "" ||
    body.name === undefined ||
    body.username === undefined ||
    body.email === undefined
  ) {
    res.writeHead(404);
    res.end("Please enter all the details");
  }
  console.log(body);
  const employeeID = req.data.findIndex((employee) => {
    return employee.id.toString() === id.toString();
  });
  if (employeeID === -1) {
    res.writeHead(404);
    res.end("Employee not found");
  }
  console.log(employeeID);
  console.log(req.data[employeeID]);
  req.data[employeeID].name = body.name;
  req.data[employeeID].username = body.username;
  req.data[employeeID].email = body.email;
  console.log("req.data", req.data);
  fs.writeFile("./dataModel/data.json", JSON.stringify(req.data), (err) => {
    if (err) {
      throw err;
    }
  });
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Sucessfully edited employee");
  res.end();
};
