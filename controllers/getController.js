const fs = require("fs");

module.exports = async function getController(id) {
  const content = await fs.promises
    .readFile("./dataModel/data.json", "utf8")
    .catch((err) => {
      console.log("File not found");
    });
  if (id === "none") {
    return content;
  } else {
    const data = JSON.parse(content);
    const employee = data.filter((employee) => {
      return employee.id.toString() === id.toString();
    });
    console.log(employee);
    return JSON.stringify(employee);
  }
};
