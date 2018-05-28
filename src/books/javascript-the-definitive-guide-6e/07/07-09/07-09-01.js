/*
 * 7.9 ECMAScript 5 Array Methods
 *
 * ECMAScript 5 定义了 9 个新的 methods，这些 methods 都不会修改原来的 array；
 */

/*
 * 7.9.1 Array.prototype.forEach()
 */

(function() {
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3];

  let sum = 0;
  array01.forEach(item => (sum += item));
  /* 6 */
  console.log(sum);
})();

(function() {
  /*
   * forEach() 不能提前终止遍历，不像 for loop 可以使用 break 提前终止遍历；
   * 要提前终止，只能通过 throw 一个 exception 来实现；
   */
  console.log("\n-------------------------------------------------- 02");
  const array01 = [1, 2, 3];

  let sum = 0;
  try {
    array01.forEach(item => {
      if (item > 2) {
        throw new Error("element > 2");
      }

      sum += item;
    });
  } catch (e) {
    /* 3 */
    console.log(sum);
  }
})();
