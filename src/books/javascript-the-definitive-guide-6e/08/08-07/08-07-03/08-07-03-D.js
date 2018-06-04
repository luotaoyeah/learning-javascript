(function() {
  /*
   * 如果一个 function 可以接收个参数，
   * 则可以使用 apply() 将一个任意长度的 array 的 element 作为参数传入；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3];
  /* 3 */
  console.log(Math.max.apply(Math, array01));
  const array02 = [1, 2, 3, 4, 5, 6];
  /* 6 */
  console.log(Math.max.apply(Math, array02));
})();

(function() {
  /*
   * apply() 的第二个参数可以是一个 Array-Like 的对象，比如 arguments 对象；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = {
    x: 1,
    y: 1,
    add: function(z) {
      console.log(this.x + this.y + z);
    }
  };

  (function trace(obj, method) {
    const m = obj[method];

    obj[method] = function() {
      console.log("~before~");
      const result = m.apply(obj, arguments);
      console.log("~after~");
      return result;
    };
  })(obj01, "add");

  /*
    ~before~
    3
    ~after~
   */
  obj01.add(1);
})();
