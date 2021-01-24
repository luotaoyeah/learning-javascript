// the-random-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Math.random()` 返回 (0,1) 之间的伪随机数

  for (var i = 0; i < 1000; i++) {
    console.assert(Math.random() > 0);
    console.assert(Math.random() < 1);
  }
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  /**
   * 返回指定范围中的整数
   * @param min 最小值
   * @param max 最大值
   * @return {number}
   */
  function fromRange(min, max) {
    if (max < min) {
      throw new Error("max can't be less than min");
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  for (var i = 0; i < 1000; i++) {
    console.assert(fromRange(3, 6) >= 3);
    console.assert(fromRange(3, 6) <= 6);
  }

  for (var i = 0; i < 1000; i++) {
    console.assert(fromRange(5, 5) === 5);
  }
})();
