(function() {
  /*
   * function 使用 return 关键字返回一个值；
   */
  console.log("\n-------------------------------------------------- 01");

  /* 2 */
  console.log(
    (function(x, y) {
      return x + y;
    })(1, 1)
  );
})();

(function() {
  /*
   * 如果 return 关键字后面没有 expression，则 function 的返回值为 undefined；
   */
  console.log("\n-------------------------------------------------- 02");

  /* undefined */
  console.log(
    (function(x, y) {
      const sum = x + y;
      return;
    })(1, 1)
  );
})();

(function() {
  /*
   * 如果没有 return 语句，则 function 的返回值为 undefined；
   */
  console.log("\n-------------------------------------------------- 03");

  /* undefined */
  console.log(
    (function(x, y) {
      const sum = x + y;
    })(1, 1)
  );
})();
