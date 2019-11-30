(function() {
  /*
   * toJSON()
   *     JSON.stringify() 会调用对象的 toJSON() 方法（如果有）,
   *     并序列化 toJSON() 方法的返回值；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    name: "foo",
    toJSON: function() {
      return { name: "bar" };
    }
  };
  const obj02 = { name: "foo" };

  /* {"name":"bar"} */
  console.log(JSON.stringify(obj01));
  /* {"name":"foo"} */
  console.log(JSON.stringify(obj02));
})();

(function() {
  /*
   * JSON.stringify()
   *     只会序列化 own enumerable 的属性；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = { name: "foo" };
  const obj02 = { age: 18 };
  Object.setPrototypeOf(obj02, obj01);
  /* foo */
  console.log(obj02.name);
  /* {"age":18} */
  console.log(JSON.stringify(obj02));
})();
