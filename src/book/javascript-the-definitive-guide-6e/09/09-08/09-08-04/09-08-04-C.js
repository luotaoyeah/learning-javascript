(function() {
  "use strict";

  /*
   * 如果对象继承了一个只读的属性, 在覆写该属性的时候,
   * 不能直接通过赋值的方式, 必须使用 Object.defineProperty(), Object.defineProperties()
   * 或者 Object.create() 来覆写该属性, 否则会报错；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {};
  Object.defineProperty(obj01, "foo", {
    value: "foo",
    writable: false
  });

  const obj02 = {};
  Object.setPrototypeOf(obj02, obj01);

  /*
    // TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
    obj02.foo = "bar";
  */

  Object.defineProperty(obj02, "foo", {
    value: "bar"
  });
  console.log(obj02.foo);
})();
