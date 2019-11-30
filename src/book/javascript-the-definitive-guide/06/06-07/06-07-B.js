/*
 * Object.getOwnPropertyDescriptor()：
 *     获取属性的 property descriptor 对象；
 */
console.log("\n-------------------------------------------------- 01");

/* { value: 1, writable: true, enumerable: true, configurable: true } */
console.log(Object.getOwnPropertyDescriptor({ x: 1 }, "x"));
/* { get: [Function: get x], set: undefined, enumerable: true, configurable: true } */
console.log(
  Object.getOwnPropertyDescriptor(
    {
      get x() {
        return 1;
      }
    },
    "x"
  )
);

/*
 * Object.getOwnPropertyDescriptor()：
 *     属性不存在, 返回 undefined；
 *     属性是 inherited property, 返回 undefined；
 */
console.log("\n-------------------------------------------------- 01");

/* undefined */
console.log(Object.getOwnPropertyDescriptor({}, "x"));
/* undefined */
console.log(Object.getOwnPropertyDescriptor({}, "toString"));

export {};
