/**
 * 将输入的数字转换为字符串，
 * 每三个数字一组，放入一个新的数组，
 * 将新的数组中的元素使用逗号连接起来
 * @param n
 * @return {string}
 */
function fn0001(n) {
  /*
   * 输入非法数字时，直接原样返回该输入
   */
  const num = Number.parseInt(n);
  if (Number.isNaN(num)) {
    return n;
  }

  const str = String(num);
  const arr = [];

  /**
   *
   * @param str 待处理的字符串
   */
  const f = str => {
    if (str.length > 3) {
      arr[arr.length] = str.slice(-3);
      f(str.slice(0, -3));
    } else {
      arr[arr.length] = str;
    }
  };

  f(str);

  return arr.reverse().join(",");
}

console.log(fn0001(null));
console.log(fn0001(undefined));
console.log(fn0001(true));
console.log(fn0001(false));
console.log(fn0001("foo"));
console.log(fn0001({}));

console.log(fn0001(10));
console.log(fn0001(100));
console.log(fn0001(1000));
console.log(fn0001(10000));
console.log(fn0001(100000));
console.log(fn0001(1000000));
console.log(fn0001(10000000));
