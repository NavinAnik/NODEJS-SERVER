const fs = require("fs");

module.exports = async function getController(req, res, id) {
  const content = await fs.promises
    .readFile("./dataModel/data.json", "utf8")
    .catch((err) => {
      console.log("File not found");
    });
  if (id === "none") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(content);
    console.log("content", content);
    res.end();
  } else {
    const data = JSON.parse(content);
    const employee = data.filter((employee) => {
      return employee.id.toString() === id.toString();
    });
    if (employee.length === 0) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end(JSON.stringify({ message: "Employee not found" }));
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(employee));
    console.log("content", content);
    res.end();
  }
};
