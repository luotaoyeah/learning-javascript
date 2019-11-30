/*
 * Example 18-6. Making a GET request with form-encoded data
 */

import { encodeFormData } from "./example-18-4";

/**
 * 在 POST 请求中, form 表单数据的请求体（编码后的字符串）,
 * 跟 GET 请求中, URL 中的查询参数部分, 形式是一样的,
 * 因此, 编码后的 form 表单数据可以用在 GET 请求的 URL 的查询参数中；
 *
 * @param url
 * @param data
 * @param callback
 */
function getData(url, data, callback) {
  const xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open("POST", url + "?" + encodeFormData(data));
  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState === 4 && callback) {
      callbac(xmlHttpRequest);
    }
  };
  xmlHttpRequest.send();
}
