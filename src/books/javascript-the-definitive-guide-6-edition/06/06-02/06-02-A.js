/*
 * 6.2 Querying and Setting Properties
 */

/*
 * 可以通过 dot(.) 或者 square bracket([]) 来访问或者设置一个属性；
 * (.) 后面只能是简单的标识符；
 * ([]) 里面可以是值为字符串的表达式；
 */
console.log("\n-------------------------------------------------- 01");

const book = {
  "main title": "JavaScript",
  "sub-title": "The definitive Guide",
  for: "developers",
  author: {
    firstname: "David",
    surname: "Flanagan"
  }
};

console.log(book.author);
console.log(book["main title"]);
book.edition = 6;

export {};
