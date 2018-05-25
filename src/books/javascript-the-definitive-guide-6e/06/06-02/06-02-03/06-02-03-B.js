/*
 * 访问 null 或者 undefined 的属性，报错；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
/*
/!* TypeError: Cannot read property 'length' of undefined *!/
console.log(obj01.x.length);
*/

/*
 * 在访问属性之前，应该保证对象不为 null 或者 undefined；
 */
console.log("\n-------------------------------------------------- 02");

const obj02 = {};
if (obj02 && obj02.x) {
  console.log(obj02.x.length);
}

/*
 * 可以使用简洁的 && 的方式，保证对象不为 null 或者 undefined；
 */
console.log("\n-------------------------------------------------- 03");

const obj03 = { x: null };
/* null */
console.log(obj03 && obj03.x && obj03.x.length);

export {};
