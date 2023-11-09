module.exports = function errorHandle(req, res) {
  res.writeHead(404);
  res.end("Something went wrong");
};
