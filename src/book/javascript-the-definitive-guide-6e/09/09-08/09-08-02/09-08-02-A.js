(function() {
  /*
   * Object.defineProperty() 和 Object.defineProperties() 既可以用来添加新的属性,
   * 也可以用来修改已有的属性的 attributes；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {};

  /*
   * 添加属性时, 省略的 attribute 的值为 false；
   */
  Object.defineProperty(obj01, "foo", {
    value: "foo",
    configurable: true
  });

  /* { value: 'foo', writable: false, enumerable: false, configurable: true } */
  console.log(Object.getOwnPropertyDescriptor(obj01, "foo"));

  console.log("\n-------------------------------------------------- 02");
  /*
   * 修改属性时, 省略的 attribute 的值保持不变；
   */
  Object.defineProperty(obj01, "foo", {
    value: "foo",
    enumerable: true
  });

  /* { value: 'foo', writable: false, enumerable: true, configurable: true } */
  console.log(Object.getOwnPropertyDescriptor(obj01, "foo"));
})();
