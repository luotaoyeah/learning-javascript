/*
 * 可以指定第二个参数, 表示 property descriptors, 类似 Object.defineProperties() 的第二个参数；
 */
console.log('\n-------------------------------------------------- 01');

const obj01 = Object.create(
  { x: 1 },
  {
    y: {
      value: 2,
    },
    sum: {
      get() {
        return this.x + this.y;
      },
    },
  },
);
/* 3 */
console.log(obj01.sum);

export {};
