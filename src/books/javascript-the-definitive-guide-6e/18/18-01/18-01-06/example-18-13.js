var http = require("http");

http
  .createServer((request, response) => {
    if (request.url.startsWith("/json")) {
      response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      });
      response.end(
        JSON.stringify({
          name: "foo",
          age: 18
        })
      );
    } else if (request.url.startsWith("/xml")) {
      response.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/xhtml+xml"
      });
      response.end(
        "<html><head><title>foo</title></head><body>bar</body></html>"
      );
    }
  })
  .listen(8888);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8888");
console.log("--------------------------------------------------");
