var http = require("http");
var qs = require("querystring");

http
  .createServer((request, response) => {
    if (request.method === "POST") {
      let requestBody = "";

      request.on("data", function(data) {
        requestBody += data;
      });

      request.on("end", function() {
        const result = qs.parse(requestBody);

        response.writeHead(200, {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        });
        response.end(JSON.stringify(result));
      });
    }
  })
  .listen(8888);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8888");
console.log("--------------------------------------------------");
