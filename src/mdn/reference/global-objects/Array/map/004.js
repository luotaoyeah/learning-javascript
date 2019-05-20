/*
 * 在回调函数第一次执行之前, 要被遍历的元素集合就已经确定了；
 */

/*
 * 遍历过程中, 新增的元素会被忽略；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = [1, 2, 3];
/* [ 1, 4, 9 ] */
console.log(
  array01.map((item, index, array) => {
    if (index === 0) {
      array.push(4);
    }
    return item * item;
  })
);
/* [ 1, 2, 3, 4 ] */
console.log(array01);

/*
 * 遍历过程中, 修改元素的值：
 *     如果元素尚未被遍历, 则会受影响；
 *     如果元素已经被遍历, 则不会受影响；
 */
console.log("\n-------------------------------------------------- 02");
const array02 = [1, 2, 3];
/* [ 1, 4, 16 ] */
console.log(
  array02.map((item, index, array) => {
    if (index === 1) {
      /* array[0] 已经被遍历, 结果不会受影响 */
      array[0] = 4;
      /* array[2] 尚未被遍历, 结果会受影响 */
      array[2] = 4;
    }

    return item * item;
  })
);
/* [ 4, 2, 4 ] */
console.log(array02);

/*
 * 遍历过程中, 删除元素：
 *     如果元素尚未被遍历, 则会受影响；
 *     如果元素已经被遍历, 则不会受影响；
 */
console.log("\n-------------------------------------------------- 03");
const array03 = [1, 2, 3];
/* [ 1, 4, <1 empty item> ] */
console.log(
  array03.map((item, index, array) => {
    if (index === 1) {
      /* array[0] 已经被遍历, 结果不会受影响 */
      delete array[0];
      /* array[2] 尚未被遍历, 结果会受影响 */
      delete array[2];
    }

    return item * item;
  })
);
/* [ <1 empty item>, 2, <1 empty item> ] */
console.log(array03);

export {};
