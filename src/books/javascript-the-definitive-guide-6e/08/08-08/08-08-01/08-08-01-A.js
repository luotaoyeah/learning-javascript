/*
 * 8.8.1 Processing Arrays with Functions
 */

(function() {
  /*
   * 数组元素求和：使用 non-functional style；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < array01.length; i++) {
    sum += array01[i];
  }
  /* 15 */
  console.log(sum);
})();

(function() {
  /*
   * 数组元素求和：使用 functional style；
   */
  console.log("\n-------------------------------------------------- 02");

  /* 15 */
  console.log(
    [1, 2, 3, 4, 5].reduce(function(accumulator, value) {
      return accumulator + value;
    })
  );
})();

(function() {
  /*
   * 数组元素求和：使用 functional style + arrow function；
   */
  console.log("\n-------------------------------------------------- 03");

  /* 15 */
  console.log(
    [1, 2, 3, 4, 5].reduce((accumulator, value) => accumulator + value)
  );
})();
