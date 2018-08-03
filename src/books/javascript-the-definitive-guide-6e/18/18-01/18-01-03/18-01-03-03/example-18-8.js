/*
 * 简单后台服务
 */

var http = require("http");

http
  .createServer((request, response) => {
    if (request.method === "POST") {
      var requestBody = "";

      request.on("data", function(data) {
        requestBody += data;
      });

      request.on("end", function() {
        response.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/xhtml+xml"
        });
        response.end(requestBody);
      });
    }
  })
  .listen(8888);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8888");
console.log("--------------------------------------------------");
