/*
 * Iterators and Generators
 *     Completing Early
 *         Iterator.throw()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 除了可以使用 Iterator.return() 方法提前中止遍历，
 * 还可以使用 Iterator.throw() 方法
 */

function* gen() {
  yield "FOO";
  yield "BAR";
  yield "BAZ";
}

const iterator01 = gen();
console.log(iterator01.next());

/*
 * 可以通过 try/catch 捕获 throw() 方法抛出的错误
 */
try {
  iterator01.throw(new Error("ERR01"));
} catch (e) {
  console.log(e.message);
}

console.log("\n-------------------------------------------------- 02");
const iterator02 = gen();
for (const i of gen()) {
  if (i === "BAR") {
    iterator02.throw(new Error("ERR02"));
  } else {
    console.log(i);
  }
}

export {};
