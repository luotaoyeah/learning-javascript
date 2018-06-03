(function() {
  /*
   * closure 可以跟 getter/setter 结合使用；
   */
  console.log("\n-------------------------------------------------- 01");

  function counter(n) {
    return {
      get count() {
        return n++;
      },
      set count(value) {
        if (value > n) {
          n = value;
        } else {
          throw new Error("count can only be set to a larger value");
        }
      }
    };
  }

  const counter01 = counter(10);

  /* 10 */
  console.log(counter01.count);
  /* 11 */
  console.log(counter01.count);

  counter01.count = 20;
  /* 20 */
  console.log(counter01.count);
})();
