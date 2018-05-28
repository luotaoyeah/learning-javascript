/*
 * 7.9.5 Array.prototype.reduce()
 *
 * 合并 array 的 elements 为一个值；
 */

(function() {
  /*
   * reduce() 接收 4 个参数：accumulator, value, index, array；
   * 其中 accumulator 的值为：
   *     第一次调用时，accumulator 为 reduce() 的第二个参数，即初始值；
   *     后面每次调用时，accumulator 为上一次返回的值；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3];
  /* 求所有 element 的和 */
  console.log(array01.reduce((accumulator, value) => accumulator + value, 0));
  /* 求所有 elements 的积 */
  console.log(array01.reduce((accumulator, value) => accumulator * value, 1));
  /* 查找最大值 */
  console.log(
    array01.reduce(
      (accumulator, value) => (accumulator > value ? accumulator : value),
      0
    )
  );
})();

(function() {
  /*
   * 如果省略 reduce() 的第二个参数，则第一次调用时 accumulator 的值为 array 的第一个 element，
   * 且回调函数从 array 的第二个 element 开始遍历；
   */
  console.log("\n-------------------------------------------------- 02");
  const array01 = [1, 2, 3];
  console.log(
    array01.reduce((accumulator, value, index) => {
      /*
       * index 从 1 开始，即从第二个 element 开始遍历；
       */
      console.log(`index: ${index}`);
      return accumulator > value ? accumulator : value;
    })
  );
})();
