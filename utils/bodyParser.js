module.exports = function bodyParser(req) {
  return new Promise(function (resolve, reject) {
    let body = "";
    req.on("data", function (chunk) {
      body += chunk.toString();
    });
    req.on("end", function () {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", function (error) {
      reject(error);
    });
  });
};
