/*
 * 9.9.2 Function Scope as a Private Namespace
 */

(function() {
  /*
   * 通常我们在一个 module 中会定义很多的 methods 和 variables，
   * 其中有些是需要暴露给外部访问的，有些是不希望暴露给外部的；
   * 通常我们可以使用 function scope 来实现这样的效果；
   */
  console.log("\n-------------------------------------------------- 01");

  /*
   * fn01() 和 fn02() 不会暴露给外部；
   */
  var Obj = (function() {
    function fn01() {
      return "fn01()";
    }

    function fn02() {
      return "fn02()";
    }

    function Obj() {}

    Obj.prototype.fn03 = function() {
      console.log(fn01() + ", " + fn02());
    };

    return Obj;
  })();

  /* fn01(), fn02() */
  new Obj().fn03();
})();
