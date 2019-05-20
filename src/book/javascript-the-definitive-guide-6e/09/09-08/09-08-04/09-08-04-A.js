/*
 * 9.8.4 Preventing Class Extensions
 */

(function() {
  /*
   * Object.preventExtensions() 设置对象为 non-extensible 的,
   * 即不能给对象添加新的属性；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {};
  Object.preventExtensions(obj01);

  /*
    // TypeError: Cannot define property foo, object is not extensible
    Object.defineProperty(obj01, "foo", { value: "foo" });
  */
})();

(function() {
  /*
   * Object.seal() 将对象设置为 non-extensible 的,
   * 同时将对象的属性设置为 non-configurable 的；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = { foo: "foo" };
  /* true */
  console.log(Object.getOwnPropertyDescriptor(obj01, "foo").configurable);
  Object.seal(obj01);
  /* false */
  console.log(Object.getOwnPropertyDescriptor(obj01, "foo").configurable);
})();
