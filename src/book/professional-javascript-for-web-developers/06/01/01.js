// data-properties

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 对象的属性都有一个描述符(property descriptor), 里面包含了属性的特性,
  // 这些特性称之为 property 的 attributes

  var obj = { x: 1 };

  var xPropertyDescriptor = Object.getOwnPropertyDescriptor(obj, 'x');

  console.assert(
    JSON.stringify(xPropertyDescriptor) ===
      JSON.stringify({
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true,
      }),
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `PropertyDescriptor.value` 表示属性的值

  var obj = { x: 1 };
  console.assert(Object.getOwnPropertyDescriptor(obj, 'x').value === 1);

  obj.x = 2;
  console.assert(Object.getOwnPropertyDescriptor(obj, 'x').value === 2);

  Object.defineProperty(obj, 'x', { value: 3 });
  console.assert(obj.x === 3);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `PropertyDescriptor.writable` 表示属性是否只读,

  var obj = { x: 1 };

  Object.defineProperty(obj, 'x', {
    writable: false,
  });

  try {
    // 如果为 false 则属性不能被重新赋值, 否则报错
    obj.x = 2;
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.assert(e.message === "Cannot assign to read only property 'x' of object '#<Object>'");
  }

  // 但是依然可以使用 `Object.defineProperty()` 修改属性的值
  console.assert(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'x')) ===
      JSON.stringify({
        value: 1,
        writable: false,
        enumerable: true,
        configurable: true,
      }),
  );

  Object.defineProperty(obj, 'x', { value: 2 });

  console.assert(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'x')) ===
      JSON.stringify({
        value: 2,
        writable: false,
        enumerable: true,
        configurable: true,
      }),
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `PropertyDescriptor.configurable` 表示属性特性是否可以修改,
  // 如果为 `false` 则:
  //   1. 不能被 delete
  //   2. `enumerable`/`configurable` 不能被修改
  //   3. `value`/`writable`          可以被修改

  var obj = { x: 1 };

  console.assert(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'x')) ===
      JSON.stringify({
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true,
      }),
  );

  Object.defineProperty(obj, 'x', {
    configurable: false,
  });
  console.assert(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'x')) ===
      JSON.stringify({
        value: 1,
        writable: true,
        enumerable: true,
        configurable: false,
      }),
  );

  // 不能被 delete
  try {
    delete obj.x;
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.assert(e.message === "Cannot delete property 'x' of #<Object>");
  }

  // 不能改 `configurable`
  try {
    Object.defineProperty(obj, 'x', {
      configurable: true,
    });
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.assert(e.message === 'Cannot redefine property: x');
  }

  // 不能改 `enumerable`
  try {
    Object.defineProperty(obj, 'x', {
      enumerable: false,
    });
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.assert(e.message === 'Cannot redefine property: x');
  }

  console.assert(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'x')) ===
      JSON.stringify({
        value: 1,
        writable: true,
        enumerable: true,
        configurable: false,
      }),
  );

  // 可以改 `writable` / `value`
  Object.defineProperty(obj, 'x', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 2,
  });
  console.assert(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'x')) ===
      JSON.stringify({
        value: 2,
        writable: false,
        enumerable: true,
        configurable: false,
      }),
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `PropertyDescriptor.enumerable` 表示属性是否能够被 for/in 遍历

  var obj = {
    x: 1,
    y: 2,
  };

  console.assert(obj.propertyIsEnumerable('x') === true);
  Object.defineProperty(obj, 'x', {
    enumerable: false,
  });
  console.assert(obj.propertyIsEnumerable('x') === false);
})();
