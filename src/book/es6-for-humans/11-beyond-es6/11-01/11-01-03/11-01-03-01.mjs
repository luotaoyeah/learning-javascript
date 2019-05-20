/*
 * Beyond ES6
 *     Asynchronous Functions
 */

console.log("\n-------------------------------------------------- 01");

/*
 * async/await 关键字是 promise 的语法糖
 * 用来简化异步代码的编写
 */

function getFoo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("FOO");
    }, 1000);
  });
}

function getBar() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("BAR");
    }, 1000);
  });
}

/*
 * 使用 promise 的方式编写异步代码
 */
function fn01() {
  return new Promise(resolve => {
    let result = "";
    getFoo()
      .then(foo => {
        result += foo;
        return getBar();
      })
      .then(bar => {
        result += bar;
        resolve(result);
      });
  });
}

fn01().then(v => {
  console.log(v); // FOOBAR
});

function fn02() {
  return new Promise(resolve => {
    getFoo().then(foo => {
      getBar().then(bar => {
        resolve(foo + bar);
      });
    });
  });
}

fn02().then(v => {
  console.log(v); // FOOBAR
});

console.log("\n-------------------------------------------------- 02");

/*
 * 使用 async/await 来编写异步代码
 */

async function fn03() {
  const foo = await getFoo();
  const bar = await getBar();
  return foo + bar;
}

fn03().then(v => {
  console.log(v); // FOOBAR
});

export {};
