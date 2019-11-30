/*
 *
 */
console.log("\n-------------------------------------------------- 01");

/**
 * 将 Array-Like 对象转换为 Array；
 * @param obj 对象
 * @param n 从哪个索引开始截取
 * @return
 */
function toArray(obj, n) {
  return Array.prototype.slice.call(obj, n || 0);
}

function partialLeft(fn) {
  const args = arguments;
  return function() {
    return fn.apply(this, toArray(args, 1).concat(toArray(arguments)));
  };
}

function partialRight(fn) {
  const args = arguments;
  return function() {
    return fn.apply(this, toArray(arguments).concat(toArray(args, 1)));
  };
}

function partial(fn) {
  const args = arguments;
  return function() {
    let j = 0;
    for (let i = 0; i < args.length; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[j++];
      }
    }

    return fn.apply(this, toArray(args, 1).concat(toArray(arguments, j)));
  };
}

function fn01(x, y, z) {
  return `${x}-${y}-${z}`;
}

/* 1-2-3 */
console.log(partialLeft(fn01, 1)(2, 3));
/* 2-3-1 */
console.log(partialRight(fn01, 1)(2, 3));
/* 2-1-3 */
console.log(partial(fn01, undefined, 1)(2, 3));

export { partialLeft, partialRight };
