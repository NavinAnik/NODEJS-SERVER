const fs = require("fs");

module.exports = async function deleteController(req, res, id) {
  const employeeID = req.data.findIndex((employee) => {
    return employee.id.toString() === id.toString();
  });
  if (employeeID === -1) {
    res.writeHead(404);
    res.end("Employee not found");
  }
  req.data.splice(employeeID, 1);
  fs.writeFile("./dataModel/data.json", JSON.stringify(req.data), (err) => {
    if (err) {
      throw err;
    }
  });
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Sucessfully edited employee");
  res.end();
};
