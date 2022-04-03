(function() {
  /*
   * for/in loop 不能保证遍历的顺序,
   * 如果一个 array 既有 object properties, 又有 array elements,
   * 则它的 object properties 会按照创建的顺序进行遍历,
   * 而它的 array elements 通常会按照升序进行遍历；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3];

  Object.defineProperties(array01, {
    b: {
      value: "b",
      enumerable: true
    },
    c: {
      value: "c",
      enumerable: true
    },
    a: {
      value: "a",
      enumerable: true
    }
  });

  const values = [];
  for (let index in array01) {
    values.push(array01[index]);
  }

  /* [ 1, 2, 3, 'b', 'c', 'a' ] */
  console.log(values);
})();
