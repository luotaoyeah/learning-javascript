(function() {
  /*
   * 简单实现一个 Array.prototype.map()；
   */
  console.log("\n-------------------------------------------------- 01");

  Array.prototype.map01 = function(fn) {
    const _this = this;
    const result = [];

    for (let i = 0; i < _this.length; i++) {
      /* 对于 non-existent element, 不作处理 */
      if (i in _this) {
        result[i] = fn.call(null, _this[i], i, _this);
      }
    }

    return result;
  };

  const array01 = [1, 2, , 3];
  /* [ 1, 4, <1 empty item>, 9 ] */
  console.log(array01.map(item => item * item));
  /* [ 1, 4, <1 empty item>, 9 ] */
  console.log(array01.map01(item => item * item));
})();
