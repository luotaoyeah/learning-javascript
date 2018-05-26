/*
 * 可以使用 delete 删除一个 element；
 * element 被 delete 之后，array 变成 sparse array，array 的 length 不会改变；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = [1, 2, 3];
delete array01[1];
/* false */
console.log(1 in array01);
/* 3 */
console.log(array01.length);

/*
 * 使用 pop() 移除最后一个 element，并返回该 element，
 * array 的 length 减一；
 */
console.log("\n-------------------------------------------------- 02");
const array02 = [1, 2, 3];
/* 3 */
console.log(array02.pop());
/* 2 */
console.log(array02.length);

/*
 * 使用 shift() 移除第一个 element，并返回该 element，
 * array 的 length 减一；
 */
console.log("\n-------------------------------------------------- 03");
const array03 = [1, 2, 3];
/* 1 */
console.log(array03.shift());
/* 2 */
console.log(array03.length);

export {};
