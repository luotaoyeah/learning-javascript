/*
 * !== 和 in 都可以用来判断某个属性是否存在；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: 1 };

/* true */
console.log("x" in obj01);
/* true */
console.log(obj01.x !== undefined);

/* false */
console.log("y" in obj01);
/* false */
console.log(obj01.y !== undefined);

/*
 * in 可以用来区分某个属性存在，但是其属性值为 undefined 的情况；
 */
console.log("\n-------------------------------------------------- 01");

const obj02 = { x: undefined };
/* true */
console.log("x" in obj02);
/* false */
console.log(obj02.x !== undefined);

export {};
