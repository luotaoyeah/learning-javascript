/*
 * 8.7.2 The prototype Property
 */

(function() {
  /*
   * 每一个 function 都有 prototype 属性，当 function 作为 constructor 使用时，
   * 新创建的 object 会从该 prototype 对象继承属性；
   */
  console.log("\n-------------------------------------------------- 01");

  function Fn01() {}

  Fn01.prototype.hello = function() {
    console.log("hello");
  };

  /* hello */
  new Fn01().hello();
})();
