/*
 * JSON 语法是 JS 语法的子集，
 * 部分 JS 值不能被 JSON 所表示；
 */

/*
 * NaN，Infinity，-Infinity 会被序列化为 null；
 */
console.log("\n-------------------------------------------------- 01");
/* null */
console.log(JSON.stringify(NaN));
/* null */
console.log(JSON.stringify(Infinity));
/* null */
console.log(JSON.stringify(-Infinity));

/*
 * Date 对象会被序列化为 ISO 格式的日期字符串；
 * 但是日期字符串不会被反序列化为 Date 对象，而是保持字符串不变；
 */
console.log("\n-------------------------------------------------- 02");
/* "2018-05-24T21:11:13.679Z" */
console.log(JSON.stringify(new Date()));
/* 2018-05-24T21:13:50.261Z */
console.log(JSON.parse(JSON.stringify(new Date())));

/*
 * 函数会被序列化为 undefined；
 */
console.log("\n-------------------------------------------------- 03");
/* undefined */
console.log(JSON.stringify(() => {}));

/*
 * RegExp 和 Error 对象会被序列化为 {}；
 */
console.log("\n-------------------------------------------------- 04");
/* {} */
console.log(JSON.stringify(/js/));
/* {} */
console.log(JSON.stringify(new TypeError()));

export {};
