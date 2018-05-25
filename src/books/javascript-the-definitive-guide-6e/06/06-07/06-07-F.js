/*
 * Object.create()：
 *     第一个参数表示对象的 prototype 对象；
 *     第二个参数可选，表示 property descriptors，类似 Object.defineProperties() 的第二个参数；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = Object.create(
  { x: 1 },
  {
    y: {
      value: 2,
      writable: true,
      enumerable: true,
      configurable: true
    },
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
