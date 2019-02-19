/**
 *
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

  const chars = String(num)
    .split("")
    .reverse();

  let resultStr = "";
  for (let i = 0; i < chars.length; i++) {
    resultStr += chars[i];
    /*
     * 每隔三位数字插一个逗号
     * 如果逗号刚好位于首位，则不插入该逗号
     */
    if (i % 3 === 2 && i < chars.length - 1) {
      resultStr += ",";
    }
  }

  return resultStr
    .split("")
    .reverse()
    .join("");
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
