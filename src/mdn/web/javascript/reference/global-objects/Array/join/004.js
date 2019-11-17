/*
 * Example：Joining an array-like object
 */

console.log('\n-------------------------------------------------- 01');
const fn01 = function () {
  console.log(Array.prototype.join.call(arguments, '_'));
};

/* 1_2_3 */
fn01(1, 2, 3);

export {};
