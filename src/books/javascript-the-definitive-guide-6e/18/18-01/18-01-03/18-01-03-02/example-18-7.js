/*
 * Example 18-7. Making an HTTP POST request with a JSON-encoded body
 */

/**
 *
 * @param url
 * @param data
 * @param callback
 */
function postJSON(url, data, callback) {
  const xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open("POST", url);
  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState === 4 && callback) {
      callbac(xmlHttpRequest);
    }
  };

  /*
   * POST 请求的请求体，可以是一个 JSON 字符串，
   * 此时，请求头 Content-Type 的值必须为：application/json
   */
  xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
  xmlHttpRequest.send(JSON.stringify(data));
}
