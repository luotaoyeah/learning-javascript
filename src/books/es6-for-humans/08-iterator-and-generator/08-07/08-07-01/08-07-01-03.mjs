/*
 * Iterators and Generators
 *     Completing Early
 */

console.log("\n-------------------------------------------------- 01");

/*
 * 如果将 generator function 中的代码放到 try/finally 块中，
 * 则 finally 中的代码会在两种情况下执行：
 *     iterator 正常遍历完毕
 *     iterator 提前中止遍历
 */

function* gen() {
  try {
    yield "FOO";
    yield "BAR";
  } finally {
    yield "BAZ";
  }
}

const iterator01 = gen();
console.log(iterator01.next()); // { value: 'FOO', done: false }
console.log(iterator01.next()); // { value: 'BAR', done: false }
console.log(iterator01.next()); // { value: 'BAZ', done: false }
console.log(iterator01.next()); // { value: undefined, done: true }

console.log("\n-------------------------------------------------- 02");
const iterator02 = gen();
console.log(iterator02.next()); // { value: 'FOO', done: false }
/*
 * 调用 return() 方法会提前中止遍历，因此会首先执行 finally 中的代码，
 * 而 finally 中的代码是一个 yield 语句，因此会将 yield 后面的数据返回，
 * 并暂停执行，因此 return() 方法的参数会在下一次遍历时被返回
 */
console.log(iterator02.return("DONE")); // { value: 'BAZ', done: false }
console.log(iterator02.next()); // { value: 'DONE', done: true }
console.log(iterator02.next()); // { value: undefined, done: true }

console.log("\n-------------------------------------------------- 03");

function* gen02() {
  try {
    yield "FOO";
    yield "BAR";
  } finally {
    console.log("FINALLY");
  }
}

const iterator03 = gen02();
console.log(iterator03.next()); // { value: 'FOO', done: false }

/*
 * 当调用 return() 方法时，finally 中的代码会先执行，
 * 然后才会返回 return() 的参数
 */
// FINALLY
// { value: 'DONE', done: true }
console.log(iterator03.return("DONE"));

export {};
