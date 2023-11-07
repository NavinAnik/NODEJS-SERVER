module.exports = function handleGet(req, res) {
  if (req.url === "/api/employees") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.data));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ Data: "Data not found" }));
};
