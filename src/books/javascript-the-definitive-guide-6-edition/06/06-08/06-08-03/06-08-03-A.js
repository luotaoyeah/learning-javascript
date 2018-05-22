/*
 * 6.8.3 The extensible Attribute
 *
 * 对象的 extensible 特性表示是否可以给对象添加新的属性，
 * 默认情况下，内置对象和自定义对象的 extensible 都为 true；
 */

/*
 * Object.isExtensible()：
 *     获取对象的 extensible 特性；
 */
console.log("\n-------------------------------------------------- 01");

/* true */
console.log(Object.isExtensible(Object));
/* true */
console.log(Object.isExtensible({}));

export {};
