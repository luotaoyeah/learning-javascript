var http = require("http");

http
  .createServer((request, response) => {
    setTimeout(function() {
      response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      });
      response.end(JSON.stringify({ message: "success" }));
    }, 5000);
  })
  .listen(8888);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8888");
console.log("--------------------------------------------------");
