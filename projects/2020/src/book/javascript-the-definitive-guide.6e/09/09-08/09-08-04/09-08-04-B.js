(function() {
  /*
   * JS 的一个特性：monkey-patch；
   */
  console.log("\n-------------------------------------------------- 01");

  const originalSortMethod = Array.prototype.sort;

  Array.prototype.sort = function() {
    console.time("sort time");
    originalSortMethod.apply(this, arguments);
    console.timeEnd("sort time");
  };

  /* sort time: 0.163ms */
  [1, 5, 2, 4, 3].sort();
})();

(function() {
  /*
   * 使用 Object.freeze()：
   *     将对象设置为 non-extensible 的；
   *     将对象的属性设置为 non-configurable 的；
   *     将对象的属性设置为 non-writable 的；
   */
  console.log("\n-------------------------------------------------- 02");

  /* true */
  console.log(
    Object.getOwnPropertyDescriptor(Array.prototype, "sort").writable
  );
  Object.freeze(Array.prototype);
  /* false */
  console.log(
    Object.getOwnPropertyDescriptor(Array.prototype, "sort").writable
  );
})();
