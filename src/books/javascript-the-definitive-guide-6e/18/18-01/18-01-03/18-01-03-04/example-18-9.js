/*
 * 简单后台服务
 */

var http = require("http");

http
  .createServer((request, response) => {
    console.log(request.method);
    if (request.method === "OPTIONS") {
      response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      });
    }

    if (request.method === "POST") {
      var requestBody = "";

      request.on("data", function(data) {
        requestBody += data;
      });

      request.on("end", function() {
        response.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json"
        });
        response.end(JSON.stringify({ message: "upload success" }));
      });
    }
  })
  .listen(8888);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8888");
console.log("--------------------------------------------------");
