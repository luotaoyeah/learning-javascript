/*
 * 7.9.4 Array.prototype.every()
 */

(function() {
  /*
   * Array.prototype.every() 是一个 array predicate，
   * 如果每一个 element 对于 function 都返回 true，
   * 则 every() 返回 true；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3, 4, 5];
  /* true */
  console.log(array01.every(item => item > 0));
  /* false */
  console.log(array01.every(item => item % 2 === 0));
})();

(function() {
  /*
   * 在能够得出最终结果的时候，就会终止遍历；
   * 类似 && 的短路；
   */
  console.log("\n-------------------------------------------------- 02");
  const array01 = [1, 2, 3, 4, 5];
  /* false */
  console.log(
    array01.every((item, index) => {
      console.log(index);
      return item < 3;
    })
  );
})();

(function() {
  /*
   * 对于 empty array，始终返回 true；
   */
  console.log("\n-------------------------------------------------- 03");
  /* true */
  console.log([].every(item => typeof item === "string"));
})();
