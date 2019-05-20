/**
 *
 * @param n
 * @return {string}
 */
function fn0001(n) {
  /*
   * 输入非法数字时, 直接原样返回该输入
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
     * 如果逗号刚好位于首位, 则不插入该逗号
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

console.assert(fn0001(null) === null);
console.assert(fn0001(undefined) === undefined);
console.assert(fn0001(true) === true);
console.assert(fn0001(false) === false);
console.assert(fn0001("foo") === "foo");

console.assert(fn0001(10) === "10");
console.assert(fn0001(100) === "100");
console.assert(fn0001(1000) === "1,000");
console.assert(fn0001(10000) === "10,000");
console.assert(fn0001(100000) === "100,000");
console.assert(fn0001(1000000) === "1,000,000");
console.assert(fn0001(10000000) === "10,000,000");
