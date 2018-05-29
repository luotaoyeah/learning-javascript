(function() {
  /*
   * Array-Like object 跟 array 在某些行为上是一样的；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = { "0": 1, "1": 2, "2": 3, length: 3 };
  const array01 = [1, 2, 3];

  /* false */
  console.log(Array.isArray(obj01));
  /* true */
  console.log(Array.isArray(array01));

  /* 6 */
  console.log(
    Array.prototype.reduce.call(
      obj01,
      (accumulator, value) => accumulator + value
    )
  );
  /* 6 */
  console.log(
    Array.prototype.reduce.call(
      array01,
      (accumulator, value) => accumulator + value
    )
  );
})();
