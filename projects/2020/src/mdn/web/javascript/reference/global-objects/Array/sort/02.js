/*
 * 接收 1 个参数: 'compareFunction（optional）', 定义排序规则;
 */
console.log('\n-------------------------------------------------- 01');
/* [ 1, 2, 3 ] */
console.log([1, 3, 2].sort());
/* [ 3, 2, 1 ] */
console.log([1, 3, 2].sort((a, b) => b - a));

export {};
