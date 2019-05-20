(function() {
  /*
   * 直接往 prototype 对象上添加的属性是 enumerable 的；
   */
  console.log("\n-------------------------------------------------- 01");

  Array.prototype.prop01 = "prop01";

  for (var key in []) {
    /* prop01 */
    console.log(key);
  }
})();

(function() {
  /*
   * 可以使用 Object.defineProperty() 添加 non-enumerable 的属性；
   */
  console.log("\n-------------------------------------------------- 02");

  Object.defineProperty(Object.prototype, "prop02", {
    value: "prop02",
    writable: true
  });

  for (var key in {}) {
    /* 不会打印 prop02, 因为 prop02 是 non-enumerable 的 */
    console.log(key);
  }
})();
