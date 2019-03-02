/*
 * Array.prototype.flatMap()
 */

console.log("\n-------------------------------------------------- 01");
const arr01 = ["today is", "", "monday"];

/*
 * flatMap() 跟 map() 的另外一个区别：
 *     map() 返回的结果数组的元素个数，跟输入数组的元素个数，肯定一样，
 *     flatMap() 返回的结果数组的元素个数，跟输入数组的元素个数，有可能不一样，
 *         因为 flatMap() 方法多了一步 flat() 的操作
 */
console.log(arr01.map(i => i.split(" "))); // [ [ 'today', 'is' ], [ '' ], [ 'monday' ] ]
console.log(arr01.flatMap(i => i.split(" "))); // [ 'today', 'is', '', 'monday' ]

export {};
