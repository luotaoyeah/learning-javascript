(function() {
  /*
   * 在使用 function scope 实现 module 的 namespace 时，
   * 如果需要暴露多个方法给外部，可以将它们包装到一个对象，
   * 然后在 function 中返回这一个对象；
   */
  console.log("\n-------------------------------------------------- 01");

  var sets = (function() {
    function Set() {
      /*  */
    }
    function StringSet() {
      /*  */
    }
    function SingletonSet() {
      /*  */
    }

    return {
      Set: Set,
      StringSet: StringSet,
      SingletonSet: SingletonSet
    };
  })();

  /* { Set: [Function: Set], StringSet: [Function: StringSet], SingletonSet: [Function: SingletonSet] } */
  console.log(sets);
})();
