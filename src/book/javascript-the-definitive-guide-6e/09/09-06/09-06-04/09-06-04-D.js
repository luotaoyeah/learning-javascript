(function() {
  /*
   * 模仿 Java 的惯例,
   * 在对象上定义一个 compareTo() 方法, 比较两个对象的大小；
   * 对于 obj01.compareTo(obj02),
   *     当 obj01 < obj02 时, 返回负数；
   *     当 obj01 = obj02 时, 返回 0；
   *     当 obj01 > obj02 时, 返回正数；
   */
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    this.from = from;
    this.to = to;
  }

  Range.prototype.compareTo = function(obj) {
    return this.from - obj.from;
  };

  const obj01 = new Range(1, 3);
  const obj02 = new Range(2, 4);

  /* true */
  console.log(obj01.compareTo(obj02) < 0);
})();
