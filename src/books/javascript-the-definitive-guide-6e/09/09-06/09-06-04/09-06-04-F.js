(function() {
  /*
   * 对象的 compareTo() 方法可以用来对数组进行排序；
   */
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    this.from = from;
    this.to = to;
  }

  Range.prototype.toJSON = function() {
    return "(" + this.from + ", " + this.to + ")";
  };

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

  Range.compareFn = function(a, b) {
    return a.compareTo(b);
  };

  const array = [new Range(2, 3), new Range(1, 4), new Range(1, 3)];
  /* ["(1, 3)","(1, 4)","(2, 3)"] */
  console.log(JSON.stringify(array.sort(Range.compareFn)));
})();
