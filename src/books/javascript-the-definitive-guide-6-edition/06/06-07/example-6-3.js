/*
 * Example 6-3. Copying property attributes
 */
console.log("\n-------------------------------------------------- 01");

Object.defineProperty(Object.prototype, "extend", {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function(srcObj) {
    const names = Object.getOwnPropertyNames(srcObj);

    for (let i = 0; i < names.length; i++) {
      if (names[i] in this) {
        continue;
      }

      const descriptor = Object.getOwnPropertyDescriptor(srcObj, names[i]);
      Object.defineProperty(this, names[i], descriptor);
    }
  }
});

const obj01 = Object.create(
  {},
  {
    x: {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: false
    }
  }
);

const obj02 = { y: 2 };

obj02.extend(obj01);
/* { value: 1, writable: false, enumerable: false, configurable: false } */
console.log(Object.getOwnPropertyDescriptor(obj02, "x"));

export {};
