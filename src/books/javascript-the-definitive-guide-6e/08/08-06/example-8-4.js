/*
 * Example 8-4. Private property accessor methods using closures
 */
(function() {
  /*
   * 给指定对象添加一个 private property，
   * 只能通过 getPropertyName() 方法获取该 private property 的值；
   * 或者通过 setPropertyName() 方法设置该 private property 的值；
   */
  console.log("\n-------------------------------------------------- 01");

  function addPrivateProperty(obj, propertyName) {
    let value;

    obj["get" + propertyName] = function() {
      return value;
    };

    obj["set" + propertyName] = function(v) {
      value = v;
    };
  }

  const obj01 = {};
  addPrivateProperty(obj01, "Name");

  /* undefined */
  console.log(obj01.getName());
  obj01.setName("tom");
  /* tom */
  console.log(obj01.getName());
  /* { getName: [Function], setName: [Function] } */
  console.log(obj01);
})();
