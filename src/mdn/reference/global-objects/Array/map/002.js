/*
 * 如果元素为空, 即：
 *     元素没有设置值；
 *     元素被 delete 了；
 * 则不会对该元素执行回调函数, 且返回结果中对应的元素仍然是空；
 */

console.log("\n-------------------------------------------------- 01");
const array01 = [];
array01[0] = 1;
array01[2] = 3;

/* [ 1, <1 empty item>, 9 ] */
console.log(
  array01.map(value => {
    console.log("callback");
    return value * value;
  })
);

console.log("\n-------------------------------------------------- 02");
const array02 = [1, 2, 3];
delete array02[1];

/* [ 1, <1 empty item>, 9 ] */
console.log(
  array02.map(value => {
    console.log("callback");
    return value * value;
  })
);

export {};
