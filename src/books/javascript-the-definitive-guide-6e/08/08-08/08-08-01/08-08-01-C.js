(function() {
  /*
   * 简单实现一个 Array.prototype.reduce()；
   */
  console.log("\n-------------------------------------------------- 01");

  Array.prototype.reduce01 = function(fn, init) {
    if (!this) {
      throw new Error("cannot invoke reduce01 on undefined or null");
    }
    const _this = this;

    let i = 0;
    let accumulator;

    /* 1. 如果有初始值，则 accumulator 为初始值 */
    if (init) {
      accumulator = init;
    } else {
      /* 2. 如果没有初始值，且数组为空，报错 */
      if (_this.length === 0) {
        throw new Error("empty array without initial value");
      }

      /* 3. 设置 accumulator 为第一个不为 non-existent 的元素 */
      while (i < _this.length) {
        if (i in _this) {
          accumulator = _this[i++];
          break;
        }
        i++;
      }

      /* 4. 如果数组不为空，但是其元素全是 non-existent 的，报错 */
      if (i === _this.length + 1) {
        throw new Error("empty array without initial value");
      }

      /* 5. 如果数组只有一个 existent 的元素，直接返回该元素 */
      if (i === _this.length) {
        return accumulator;
      }
    }

    while (i < _this.length) {
      accumulator = fn.call(null, accumulator, _this[i], i, _this);
      i++;
    }

    return accumulator;
  };

  /* 6 */
  console.log([1, 2, 3].reduce01((x, y) => x + y));
  /* 9 */
  console.log([9].reduce01((x, y) => x + y));
  /* 5 */
  console.log([].reduce01((x, y) => x + y, 5));
  /* Error: empty array without initial value */
  console.log([].reduce01((x, y) => x + y));
})();
