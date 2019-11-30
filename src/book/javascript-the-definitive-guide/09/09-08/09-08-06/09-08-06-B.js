import "./example-9-23";

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");
  const obj01 = Object.create(Object.prototype, {
    foo: {
      get: function() {
        return "foo";
      },
      enumerable: true,
      configurable: false
    }
  });

  /*
   * {
   *      permanent readonly accessor foo
   * }
   */
  console.log(obj01.properties().toString());
})();
