(function() {
  /*
   * 如果 array 为 empty array，且没有 initial value，报错；
   */
  console.log("\n-------------------------------------------------- 01");
  /*
    /!* TypeError: Reduce of empty array with no initial value *!/
    [].reduce((accumulator, value) => value);
  */
})();

(function() {
  /*
   * 如果 array 为 empty array，且有 initial value，
   * 或者 array 只有一个 element，但是没有 initial value，
   * 则直接返回 initial value 或者这个 element，不会调用回调函数；
   */
  console.log("\n-------------------------------------------------- 02");
  /* 1 */
  console.log(
    [1].reduce(() => {
      console.log("reduction function called");
    })
  );

  /* 1 */
  console.log(
    [].reduce((accumulator, value) => {
      console.log("reduction function called");
      return value;
    }, 1)
  );
})();
