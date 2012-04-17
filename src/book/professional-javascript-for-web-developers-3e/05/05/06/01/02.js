// primitive-wrapper-types

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Boolean.prototype.valueOf()` 方法, 返回原始类型的值

  console.assert(new Boolean(true).valueOf() === true);
  console.assert(new Boolean(false).valueOf() === false);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Boolean.prototype.toString()` 方法, 返回 "true"/"false"

  console.assert(new Boolean(true).toString() === 'true');
  console.assert(new Boolean(false).toString() === 'false');
})();
