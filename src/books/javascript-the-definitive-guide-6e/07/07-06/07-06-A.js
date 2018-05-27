/*
 * 7.6 Iterating Arrays
 */

(function() {
  /*
   * iterate array 最常用的方式是使用 for 循环；
   */
  console.log("\n-------------------------------------------------- 01");
  const obj01 = {
    x: "x",
    y: "y"
  };

  const keys = Object.keys(obj01);
  const values = [];
  for (let i = 0; i < keys.length; i++) {
    values[i] = obj01[keys[i]];
  }
  /* [ 'x', 'y' ] */
  console.log(values);
})();

(function() {
  /*
   * 可以将循环条件中的 keys.length 存入变量，不用每次遍历都重新获取；
   */
  console.log("\n-------------------------------------------------- 02");
  const obj01 = {
    x: "x",
    y: "y"
  };
  const keys = Object.keys(obj01);
  const values = [];
  for (let i = 0, length = keys.length; i < length; i++) {
    values[i] = obj01[keys[i]];
  }
  console.log(values);
})();

export {};
