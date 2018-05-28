(function() {
  /*
   * 如果省略 reduce() 的第二个参数，则第一次调用时 accumulator 的值为 array 的第一个 element，
   * 且回调函数从 array 的第二个 element 开始遍历；
   */
  console.log("\n-------------------------------------------------- 01");
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
