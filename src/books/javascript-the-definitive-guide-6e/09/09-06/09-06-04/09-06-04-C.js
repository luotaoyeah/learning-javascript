(function() {
  /*
   * 当对 objects 使用 relation operators，例如 <, <=, >, >= 时，
   * 会调用对象的 valueOf() 方法，如果方法的返回值为 primitive value，
   * 则比较方法的返回值；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    value: 9,
    valueOf: function() {
      console.log("obj01.valueOf()");
      return this.value;
    }
  };

  const obj02 = {
    score: 99,
    valueOf: function() {
      console.log("obj02.valueOf()");
      return this.score;
    }
  };

  /*
   * obj01.valueOf()
   * obj02.valueOf()
   * true
   */
  console.log(obj01 < obj02);
})();
