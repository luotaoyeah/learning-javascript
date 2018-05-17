/*
 * 6.1.1 Object Literals
 */

console.log("\n-------------------------------------------------- 01");
/* 空对象, 没有任何属性 */
var empty = {};
var point = {
  x: 0,
  y: 0
};
/* 属性值是表达式 */
var point02 = {
  x: point.x + 1,
  y: point.y + 1
};
var book = {
  /* 属性名包含空格, 使用引号包裹起来 */
  "main title": "JavaScript",
  /* 属性名包含连接符号, 使用引号包裹起来 */
  "sub-title": "The definitive Guide",
  /* 属性名是保留字 */
  for: "developers",
  /* 属性值是一个对象 */
  author: {
    firstname: "David",
    surname: "Flanagan"
  }
};

console.log(JSON.stringify(book, null, 4));
