/*
 * 6.9 Serializing Objects
 */

/*
 * 对象序列化是将对象转换为字符串的过程, 且可以从该字符串重新恢复成对象；
 */

/*
 * JSON.stringify()：
 *     将对象序列化为 JSON 格式的字符串；
 *
 * JSON.parse()：
 *     将 JSON 格式的字符串反序列化为对象；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = { x: "x", y: [{ z: "z" }] };
/* { x: 'x', y: [ { z: 'z' } ] } */
console.log(obj01);
/* {"x":"x","y":[{"z":"z"}]} */
console.log(JSON.stringify(obj01));
/* { x: 'x', y: [ { z: 'z' } ] } */
console.log(JSON.parse(JSON.stringify(obj01)));

export {};
