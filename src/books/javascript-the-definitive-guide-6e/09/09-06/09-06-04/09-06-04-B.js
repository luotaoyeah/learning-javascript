(function() {
  /*
   * 模仿 Java 的惯例，
   * 在对象上定义一个方法 equals()，专门用于比较两个对象是否相等；
   *     如果两个对象属于同一个 constructor 的实例对象，
   *     且它们对应的属性值相等，则认为它们是相等的；
   */
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    this.from = from;
    this.to = to;
  }

  /**
   * 比较两个对象是否相等
   * @param obj02 要比较的对象
   * @return {boolean} 是否相等
   */
  Range.prototype.equals = function(obj02) {
    if (this === obj02) {
      return true;
    }

    if (obj02 === null || obj02 === undefined) {
      return false;
    }

    if (obj02.constructor !== Range) {
      return false;
    }

    return this.from === obj02.from && this.to === obj02.to;
  };

  const obj01 = new Range(1, 2);

  /* false */
  console.log(obj01.equals(null));
  /* false */
  console.log(obj01.equals({ from: 1, to: 2 }));
  /* false */
  console.log(obj01.equals(new Range(1, 3)));
  /* true */
  console.log(obj01.equals(new Range(1, 2)));
})();
