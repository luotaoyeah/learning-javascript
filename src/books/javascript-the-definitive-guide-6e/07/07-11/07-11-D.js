(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   *
   * @param obj
   */
  function isArrayLike(obj) {
    return (
      obj &&
      typeof obj === "object" &&
      obj.length >= 0 &&
      obj.length < 2 * 32 &&
      /* 判断 obj.length 是一个 integer */
      obj.length === Math.floor(obj.length)
    );
  }

  (function(name) {
    /* true */
    console.log(isArrayLike(arguments));
  })("tom");
})();
