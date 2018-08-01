/*
 * 简单后台服务
 */

var http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    response.end(JSON.stringify({ name: "foo" }));
  })
  .listen(8888);

console.log("\n--------------------------------------------------");
console.log("server is running at http://localhost:8888");
