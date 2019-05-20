(function() {
  /*
   * Array.prototype.reduceRight() 类似 Array.prototype.reduce(),
   * 区别在于从右往左遍历；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3];

  /* 1-2-3 */
  console.log(
    array01.reduce((accumulator, value) => {
      return `${accumulator}-${value}`;
    })
  );

  /* 3-2-1 */
  console.log(
    array01.reduceRight((accumulator, value) => {
      return `${accumulator}-${value}`;
    })
  );
})();
