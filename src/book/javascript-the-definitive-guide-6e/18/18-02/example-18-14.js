var http = require("http");
var qs = require("querystring");

http
  .createServer((request, response) => {
    const urlQuery = qs.parse(request.url.slice(2));

    /*
     * 如果请求参数 jsonp 不为空, 则表示该请求是一个 JSONP 请求,
     * 需要使用请求参数 jsonp 的值作为函数名称,
     * 包裹需要返回的 JSON 数据；
     */
    if (urlQuery.jsonp) {
      response.writeHead(200, {
        "Content-Type": "application/json"
      });
      response.end(
        urlQuery.jsonp + "(" + JSON.stringify({ name: "foo", age: 18 }) + ")"
      );
    }
  })
  .listen(8888);

console.log("--------------------------------------------------");
console.log("server is running at http://localhost:8888");
console.log("--------------------------------------------------");
