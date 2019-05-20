var http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*"
    });
    response.write("foo");
    response.write("bar");
    response.write("baz");
    response.end("success");
  })
  .listen(8888);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8888");
console.log("--------------------------------------------------");
