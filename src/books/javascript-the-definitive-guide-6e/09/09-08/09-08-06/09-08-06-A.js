/*
 * 9.8.6 Property Descriptors
 */

(function() {
  /*
   * 通过 Object.getOwnPropertyDescriptor() 获取属性的 attributes；
   */
  console.log("\n-------------------------------------------------- 01");
  /* { value: [Function: toString], writable: true, enumerable: false, configurable: true } */
  console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
})();

(function() {
  /*
   * 通过 Object.defineProperty() 设置属性的 attributes；
   */
  console.log("\n-------------------------------------------------- 02");
  Object.defineProperty(Object.prototype, "toString", {
    configurable: false
  });
  /* { value: [Function: toString], writable: true, enumerable: false, configurable: false } */
  console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
})();
