/*
 * Example: Sorting with map;
 *
 * 如果数组元素很多, 且 compareFunction 逻辑比较复杂,
 * 可以使用 Array.prototype.map() 创建一个临时数组,
 * 然后对临时数组进行排序, 最后再从临时数组得到排好序的数组;
 *
 */
console.log('\n-------------------------------------------------- 01');
console.log(
  ['D', 'a', 'C', 'b'].sort((a, b) => {
    const _a = a.toUpperCase();
    const _b = b.toUpperCase();
    if (_a < _b) {
      return -1;
    }
    if (_a > _b) {
      return 1;
    }
    return 0;
  }),
);

console.log('\n-------------------------------------------------- 02');
const array02 = ['D', 'a', 'C', 'b'];
const array03 = array02.map((value, index) => ({
  index,
  value: value.toUpperCase(),
}));
array03.sort((a, b) => {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
});
const array04 = array03.map((item) => array02[item.index]);
console.log(array04);

export {};
