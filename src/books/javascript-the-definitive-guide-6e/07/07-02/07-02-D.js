/*
 * 因为 array 的 index 是一种特殊的 property，当访问一个不存在的 index 时，
 * 会返回 undefined，而不是报错；
 */
console.log("\n-------------------------------------------------- 01");
/* undefined */
console.log([][9]);

export {};
