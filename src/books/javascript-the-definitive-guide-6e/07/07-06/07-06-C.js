(function() {
  /*
   * for/in loop 和 in operator 会包含 inherited properties；
   */
  console.log("\n-------------------------------------------------- 01");

  Object.defineProperty(Array.prototype, "x", {
    value: "x",
    enumerable: true
  });

  const array01 = [1, 2, 3];
  const values = [];
  for (let index in array01) {
    values.push(array01[index]);
  }

  /* [ 1, 2, 3, 'x' ] */
  console.log(values);
})();

(function() {
  /*
   * 可以使用 Object.prototype.hasOwnProperty() 来过滤掉 inherited properties;
   */
  console.log("\n-------------------------------------------------- 02");

  Object.defineProperty(Array.prototype, "x", {
    value: "x",
    enumerable: true
  });

  const array01 = [1, 2, 3];
  const values = [];
  for (let index in array01) {
    if (array01.hasOwnProperty(index)) {
      values.push(array01[index]);
    }
  }

  /* [ 1, 2, 3 ] */
  console.log(values);
})();
