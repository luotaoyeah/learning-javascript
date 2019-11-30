(function() {
  /*
   * Object.prototype.valueOf()
   *     将一个 object 转换为 primitive value, 在以下情况下会自动调用该方法：
   *         a. 期望的是一个 number；
   *         b. 用于除 + 以外的算数运算符时（+ 作为字符串连接符的优先级高于作为算数运算符）；
   *         c. 用于关系运算符时；
   */
  console.log("\n-------------------------------------------------- 01");
  const obj01 = {
    toString: function() {
      return "foo";
    },
    valueOf: function() {
      return 9;
    }
  };

  /* foo */
  console.log(String(obj01));
  /* 9 */
  console.log(Number(obj01));
  /* 6 */
  console.log(obj01 - 3);
  /* true */
  console.log(obj01 > 3);
  /* false */
  console.log(obj01 > 18);
})();
