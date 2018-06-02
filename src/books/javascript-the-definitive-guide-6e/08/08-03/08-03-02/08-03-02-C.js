(function() {
  /*
   * 具有'可变长度的参数列表'的 function 一般称之为 varargs function；
   * varargs function 通常将必传参数和可选参数结合使用；
   */
  console.log("\n-------------------------------------------------- 01");

  function filterInteger(array) {
    if (!array) {
      throw new Error("array is required");
    }

    if (!Array.isArray(array)) {
      throw new Error("array must be an Array");
    }

    for (let i = 1; i < arguments.length; i++) {
      if (Number.isInteger(arguments[i])) {
        array.push(arguments[i]);
      }
    }

    return array;
  }

  /* [ 1 ] */
  console.log(filterInteger([], 1, "x", "2", 3.3));
})();
