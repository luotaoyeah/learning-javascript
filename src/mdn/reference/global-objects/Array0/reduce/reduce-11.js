/*
 * Example: 实现 Array.prototype.map();
 */
console.log("\n-------------------------------------------------- 01");

Array.prototype.map02 = function(callback, thisArg) {
  return this.reduce((accumulator, value, index, array) => {
    accumulator[index] = callback.call(thisArg, value, index, array);
    return accumulator;
  }, []);
};

/* [ 1, 4, 9 ] */
console.log([1, 2, 3].map02(item => item * item));

export {};
