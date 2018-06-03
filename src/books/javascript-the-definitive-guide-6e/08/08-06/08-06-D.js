(function() {
  /*
   * 如果在一个 outer function 中定义了多个 inner function，
   * 则这些 inner function 会共享同一个 private variable；
   *
   * 需要注意的是，有时候不希望多个 inner function 共享同一个 private variable；
   *
   */
  console.log("\n-------------------------------------------------- 01");

  const funcs = (function getFuncs() {
    const funcs = [];
    for (var i = 0; i < 10; i++) {
      funcs[i] = function() {
        return i;
      };
    }
    return funcs;
  })();

  /* 10 */
  console.log(funcs[5]());
})();

(function() {
  /*
   * 正确使用 closure；
   */
  console.log("\n-------------------------------------------------- 02");

  function getFunc(i) {
    return function() {
      return i;
    };
  }

  const funcs = [];
  for (var i = 0; i < 10; i++) {
    funcs[i] = getFunc(i);
  }

  /* 5 */
  console.log(funcs[5]());
})();
