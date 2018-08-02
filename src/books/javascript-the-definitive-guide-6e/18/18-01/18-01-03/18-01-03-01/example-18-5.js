/*
 * Example 18-5. Making an HTTP POST request with form-encoded data
 */

import { encodeFormData } from "./example-18-4";

/**
 *
 * @param url
 * @param data
 * @param callback
 */
function postData(url, data, callback) {
  const xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.open("POST", url);
  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState === 4 && callback) {
      callbac(xmlHttpRequest);
    }
  };
  xmlHttpRequest.setRequestHeader("Content-Type", "x-www-form-urlencoded");
  xmlHttpRequest.send(encodeFormData(data));
}
