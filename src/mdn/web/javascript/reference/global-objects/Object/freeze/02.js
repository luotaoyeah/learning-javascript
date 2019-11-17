/*
 * 返回对象参数；
 */
console.log('\n-------------------------------------------------- 01');
const obj01 = {};
/* true */
console.log(obj01 === Object.freeze(obj01));

/*
 * 对象是 non-extensible 的；
 */
console.log('\n-------------------------------------------------- 02');
const obj03 = {};
/* true */
console.log(Object.isExtensible(obj03));
Object.freeze(obj03);
/* false */
console.log(Object.isExtensible(obj03));

/*
 * 对象的 own properties 是 non-configurable 的；
 */
console.log('\n-------------------------------------------------- 03');
const obj04 = { x: 'x' };
/* true */
console.log(Object.getOwnPropertyDescriptor(obj04, 'x').configurable);
Object.freeze(obj04);
/* false */
console.log(Object.getOwnPropertyDescriptor(obj04, 'x').configurable);

export {};
