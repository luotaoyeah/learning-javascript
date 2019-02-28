import * as http from "http";

http
  .createServer(function(request, response) {
    let requestBody = "";

    request.on("data", function(data) {
      requestBody += data;
    });

    request.on("end", function() {
      response.writeHead(200, {
        "access-control-allow-origin": "*",
        "content-type": "application/json"
      });

      response.end(JSON.stringify({ data: requestBody }));
    });
  })
  .listen(8888);
