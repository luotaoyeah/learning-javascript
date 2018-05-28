/*
 * 7.11 Array-Like Objects
 */

(function() {
  /*
   * array 是 object，但是具有一些特殊的特性：
   *     a. 添加删除 element 时，length 会自动更新；
   *     b. 当设置 length 为比当前 length 小时，array 中部分 elements 会被删除；
   *     c. array 继承了 Array.prototype；
   *     d. array 的 class attribute 为 "Array"；
   */
  console.log("\n-------------------------------------------------- 01");

  /* true */
  console.log(Array.isArray([]));
  /* false */
  console.log(Array.isArray({}));
})();

(function() {
  /*
   * 如果一个对象具有一个 number 类型的 length 属性，
   * 这个对象称之为 Array-Like object；
   */
  console.log("\n-------------------------------------------------- 01");

  /* obj01 是一个 Array-Like object */
  const obj01 = {
    x: 1,
    y: 2,
    length: 2
  };
})();
