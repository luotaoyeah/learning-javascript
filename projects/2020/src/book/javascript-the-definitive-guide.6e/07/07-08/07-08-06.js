/*
 * 7.8.6 Array.prototype.splice()
 *
 * 往 array 中插入一截, 或者删除 array 中的某一截, 或者在删除一截的同时插入一截,
 * 无论是删除还是插入, array 中 element 的 index 都会根据需要做相应的调整, 即原数组会被改变,
 * 返回剪切下来的那截子数组
 */

(function() {
  /*
   * 第一个参数指定开始位置, 第二个参数指定要剪切的元素的个数；
   * 原来的 array 会被修改, 返回剪切下来的子数组；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3, 4, 5];
  /* [ 2 ] */
  console.log(array01.splice(1, 1));
  /* [ 1, 3, 4, 5 ] */
  console.log(array01);
})();

(function() {
  /*
   * 如果未指定第二个参数, 则从开始位置起所有的 element 都会被删除；
   */
  console.log("\n-------------------------------------------------- 02");

  const array01 = [1, 2, 3, 4, 5];
  /* [ 2, 3, 4, 5 ] */
  console.log(array01.splice(1));
  /* [ 1 ] */
  console.log(array01);
})();

(function() {
  /*
   * 从第三个参数开始的所有参数, 会从开始位置起, 插入到 array 中；
   */
  console.log("\n-------------------------------------------------- 03");

  const array01 = [1, 2, 3, 4, 5];
  /* [ 2, 3 ] */
  console.log(array01.splice(1, 2, "a", "b", "c"));
  /* [ 1, 'a', 'b', 'c', 4, 5 ] */
  console.log(array01);
})();
