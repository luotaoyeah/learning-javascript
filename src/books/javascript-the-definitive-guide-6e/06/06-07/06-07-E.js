/*
 * Object.defineProperties()：
 *     类似 Object.defineProperty()，但可以同时设置多个属性；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.defineProperties(
  {},
  {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 2, writable: true, enumerable: true, configurable: true },
    sum: {
      get() {
        return this.x + this.y;
      }
    }
  }
);
/* 3 */
console.log(obj01.sum);

export {};
