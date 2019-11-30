(function() {
  /*
   * 查找 array 中所有的值为指定值的 element 所在的 index；
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   *
   * @param array
   * @param value
   */
  function getAllIndex(array, value) {
    const indexes = [];
    let position = 0;
    const length = array.length;

    while (position < length) {
      position = array.indexOf(value, position);
      if (position === -1) {
        break;
      }
      indexes.push(position);
      position++;
    }

    return indexes;
  }

  /* [ 0, 4 ] */
  console.log(getAllIndex([1, 2, 3, 2, 1], 1));
  /* [ 0, 2, 4 ] */
  console.log(getAllIndex([1, 2, 1, 2, 1], 1));
})();
