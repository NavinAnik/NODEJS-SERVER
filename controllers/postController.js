const fs = require("fs");

module.exports = async function postontroller(body) {
  const content = await fs.promises
    .readFile("./data/data.json", "utf8")
    .catch((err) => {
      console.log("File not found");
    });
  let obj = JSON.parse(content);

  console.log("inside write");
  body.id = Math.floor(Math.random() * 100000);
  obj.push(body);
  return fs.writeFileSync(
    "./data/data.json",
    JSON.stringify(obj),
    "utf8",
    (err) => {
      if (err) {
        console.log("Error writing file:", err);
      } else {
        console.log("Successfully wrote file");
      }
    }
  );
};
