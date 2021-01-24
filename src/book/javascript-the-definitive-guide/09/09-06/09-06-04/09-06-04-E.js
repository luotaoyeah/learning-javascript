(function() {
  /*
   * 通常应该保持 equals() 和 compareTo() 的行为一致；
   */
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    this.from = from;
    this.to = to;
  }

  /**
   * 比较对象是否相等
   * @param obj
   * @returns {boolean}
   */
  Range.prototype.equals = function(obj) {
    if (this === obj) {
      return true;
    }

    if (obj === null || obj === undefined) {
      return false;
    }

    if (!(obj instanceof Range)) {
      return false;
    }

    return this.from === obj.from && this.to === obj.to;
  };

  /**
   * 比较对象的大小
   * @param obj
   * @returns {number}
   */
  Range.prototype.compareTo = function(obj) {
    if (!(obj instanceof Range)) {
      throw new Error("incompatable type");
    }

    let diff = this.from - obj.from;
    if (diff === 0) {
      diff = this.to - obj.to;
    }

    return diff;
  };

  const obj01 = new Range(2, 4);
  const obj02 = new Range(2, 4);

  /* true */
  console.log(obj01.equals(obj02));
  /* true */
  console.log(obj02.compareTo(obj01) === 0);
})();
