/*
 * 9.6.3 Standard Conversion Methods
 */

(function() {
  /*
   * Object.prototype.toString()
   *     当期望的是一个 string，而实际上是一个 object 时，
   *     JS 会自动调用该 object 的 toString() 方法；
   *
   *     例如下面几种情况：
   *         a. 使用 +（字符串连接符）连接一个 object 和一个 string；
   *         b. 将一个 object 作为 property name 使用；
   *
   *     对于自定义的对象，toString() 方法默认打印的是：[object Object]；
   */
  console.log("\n-------------------------------------------------- 01");

  /* [object Object]-foo */
  console.log({} + "-foo");

  /* { '[object Object]': 'foo' } */
  console.log({ [{}]: "foo" });
})();
