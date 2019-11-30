/*
 * 6.7 Property Attributes
 */

/*
 * 如果将属性值和 getter 和 setter 都看作是属性的 attribute, 那么：
 *     data property 有四个 attributes：value, writable, enumerable, configurable；
 *     accessor property 有四个 attributes：get, set, enumerable, configurable；
 *
 */

/*
 * 通过 property descriptor 对象来表示一个属性的 attributes, 即：
 *     data property 的 property descriptor 对象包含四个属性：value, writable, enumerable, configurable；
 *     accessor property 的 property descriptor 对象包含四个属性：get, set, enumerable, configurable；
 */
console.log("\n-------------------------------------------------- 01");

export {};
