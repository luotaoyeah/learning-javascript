/**
 * 根据 ? 切割出参数部分（queryString）,
 * 再根据 & 切割出每一对参数,
 * 再根据 = 切割出参数名称和值,
 * 多个同名的参数, 值放入一个数组中
 * @param url
 */
function fn0004(url) {
  const result = {};

  const parts = url.split("?");
  if (parts.length === 1) {
    return result;
  }

  const params = parts[1].split("&");
  for (let i = 0; i < params.length; i++) {
    const values = params[i].split("=");
    const key = values[0];
    const value = values[1];

    if (key) {
      if (key in result) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      } else {
        result[key] = value;
      }
    }
  }

  return result;
}

console.assert(
  JSON.stringify(fn0004("google.com?x=1&y=2")) === '{"x":"1","y":"2"}'
);
console.assert(
  JSON.stringify(fn0004("google.com?x=1&y=2&y=3")) === '{"x":"1","y":["2","3"]}'
);
console.assert(
  JSON.stringify(fn0004("google.com?x=1&y=2&y=")) === '{"x":"1","y":["2",""]}'
);
