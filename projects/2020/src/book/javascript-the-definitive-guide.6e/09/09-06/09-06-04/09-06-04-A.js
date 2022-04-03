/*
 * 9.6.4 Comparison Methods
 */

(function() {
  /*
   * 使用 == 比较两个 object 时, 比较的是它们的地址, 而不是它们的属性；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = { name: "foo" };
  const obj02 = { name: "foo" };
  const obj03 = obj02;

  /* false */
  console.log(obj01 == obj02);
  /* true */
  console.log(obj03 == obj02);
})();
