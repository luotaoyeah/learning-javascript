/*
 * Example 18-4. Encoding an object for an HTTP request
 */

/**
 * 将 JS 对象编码为 form 表单数据；
 * @param obj
 * @returns {string}
 */
function encodeFormData(obj) {
  if (!obj) {
    return "";
  }

  var pairs = [];
  for (var name in obj) {
    if (!obj.hasOwnProperty(name)) {
      continue;
    }

    if (typeof obj[name] === "function") {
      continue;
    }

    var value = window.encodeURIComponent(
      obj[name].toString().replace(" ", "+")
    );
    name = window.encodeURIComponent(name.replace(" ", "+"));
    pairs.push(name + "=" + value);
  }
  return pairs.join("&");
}

/* name=foo&age=18 */
console.log(
  encodeFormData({
    name: "foo",
    age: 18
  })
);

export { encodeFormData };
