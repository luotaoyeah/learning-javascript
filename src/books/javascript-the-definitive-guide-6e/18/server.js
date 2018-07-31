/*
 * 简单后台服务
 */

var http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    response.end("{message: 'hello word'}");
  })
  .listen(8888);

console.log("\n--------------------------------------------------");
console.log("server is running at http://localhost:8888");
