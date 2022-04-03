/*
 * 6.2.3 Property Access Errors
 */

/*
 * 访问对象上不存在的属性（own property 或者 inherited property）, 返回 undefined；
 */
console.log("\n-------------------------------------------------- 01");

const obj = {};
/* undefined */
console.log(obj.x);

export {};
