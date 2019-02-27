console.log("\n-------------------------------------------------- 01");
{
  /*
   * JS 中的普通的 array 大小是动态变化的，并且可以存储任意类型的数据
   */

  const arr01 = [true, 0, "0", null, undefined, {}, [], () => {}];
  arr01.push(null);
  console.log(arr01.length); // 9

  arr01.pop();
  console.log(arr01.length); // 8
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * ES6 中新增的 typed array 是一种新的类型，它们不是真正的 array，而是 array-like 对象
   */

  console.log(Array.isArray(new Array())); // true
  console.log(Array.isArray(new Uint8Array())); // false
}

export {};
