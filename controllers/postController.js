const fs = require("fs");

module.exports = async function postController(req, body) {
  try {
    body.id = Math.floor(Math.random() * 1000000).toString();
    req.data.push(body);
    fs.writeFile("./dataModel/data.json", JSON.stringify(req.data), (err) => {
      if (err) {
        throw err;
      }
      console.log("File written successfully");
    });
  } catch (err) {
    console.log(err, "File not found");
  }
};
