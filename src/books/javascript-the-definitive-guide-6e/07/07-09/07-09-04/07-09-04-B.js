/*
 * 7.9.4 Array.prototype.some()
 */

(function() {
  /*
   * Array.prototype.some() 是一个 array predicate，
   * 只要有一个 element 对于 function 返回 true，
   * 则 some() 返回 true；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3, 4, 5];
  /* true */
  console.log(array01.some(item => item % 2 === 0));
  /* false */
  console.log(array01.every(item => item % 2 === 0));
})();

(function() {
  /*
   * 在能够得出最终结果时，就会终止遍历；
   * 类似于 || 的短路；
   */
  console.log("\n-------------------------------------------------- 02");
  const array01 = [1, 2, 3, 4, 5];
  /* true */
  console.log(
    array01.some((item, index) => {
      console.log(index);
      return item % 2 === 0;
    })
  );
})();

(function() {
  /*
   * 对于 empty array，some() 始终返回 false；
   */
  console.log("\n-------------------------------------------------- 03");
  /* false */
  console.log([].some(() => true));
})();
