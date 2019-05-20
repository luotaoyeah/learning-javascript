(function() {
  /*
   * 可以通过第二个参数指定 compare function；
   *     compare function 接收 2 个参数, 表示 array 中的两个 element,
   *         如果 function 返回值 < 0, 则第一个 element 排在前面；
   *         如果 function 返回值 > 0, 则第二个 element 排在前面；
   *         如果 function 返回值 = 0, 则两个 element 的顺序保持不变；
   */
  console.log("\n-------------------------------------------------- 01");
  /* [ 111, 22, 3 ] */
  console.log([111, 22, 3].sort());
  /* [ 3, 22, 111 ] */
  console.log([111, 22, 3].sort((x, y) => x - y));
  /* [ 111, 22, 3 ] */
  console.log([111, 22, 3].sort((x, y) => y - x));

  /* [ 'a', 'b', 'c', 1, 3, 2, 4 ] */
  console.log(
    ["a", "c", "b", 1, 3, 2, 4].sort((x, y) => {
      if (typeof x === "number" && typeof y === "number") {
        return 0;
      } else if (typeof x === "number" && typeof y === "string") {
        return 1;
      } else if (typeof x === "string" && typeof y === "number") {
        return -1;
      } else {
        return x > y;
      }
    })
  );
})();
