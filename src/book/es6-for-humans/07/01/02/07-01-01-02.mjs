/*
 * Arrays and Collections
 *     Arrays and New Methods
 *         Array.of()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 使用 Array() 构造方法, 也可以将多个元素组装为一个 array
 */

console.log(new Array('a', 'b', 'c')); // [ 'a', 'b', 'c' ]

console.log('\n-------------------------------------------------- 02');
/*
 * 但是, 当 Array() 构造函数只被传递一个 number 类型的参数时,
 * 这个参数会作为返回的 array 的 length 属性,
 * 而不会作为 array 的一个元素
 */

const array01 = new Array(9);
console.log(array01.length); // 9
console.log(array01); // [ <9 empty items> ]

const array02 = Array.of(9);
console.log(array02.length); // 1
console.log(array02); // [ 9 ]

export {};
