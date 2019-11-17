/*
 * 在 ES2015 中, 如果参数不是对象, 会被转换为对象；
 */
console.log('\n-------------------------------------------------- 01');

/* true */
console.log(Object.getPrototypeOf('x') === String.prototype);
/* true */
console.log(Object.getPrototypeOf(0) === Number.prototype);

export {};
