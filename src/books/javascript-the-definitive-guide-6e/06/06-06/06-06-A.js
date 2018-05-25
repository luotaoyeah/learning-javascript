/*
 * 6.6 Property Getters and Setters
 */

/*
 * 对象的属性值可以定义为 getter 和 setter，
 * 这种属性称为 accessor property，而普通的属性称为 data property；
 */

/*
 * 当使用'属性访问表达式'读取属性值时，getter 方法会被调用，返回值即为属性值；
 * 当给属性赋值时，setter 方法会被调用，所赋的值会作为参数传入 setter 方法；
 * accessor property 没有 writable 特性；
 */

/*
 * 如果只有 getter 方法，则是只读的；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {
  get x() {
    return 1;
  }
};

console.log(obj01.x);
/*
/!* TypeError: Cannot set property x of #<Object> which has only a getter *!/
obj01.x = 2;
*/

/*
 * 如果只有 setter 方法，则是只写的；
 * 读取属性值时，会始终返回 undefined；
 */
console.log("\n-------------------------------------------------- 02");

const obj02 = {
  set x(value) {
    /*  */
  }
};

/* undefined */
console.log(obj02.x);
obj02.x = 1;

/*
 * 如果有 getter 方法和 setter 方法，则是可读可写的；
 */
console.log("\n-------------------------------------------------- 03");

const obj03 = {
  _x: 1,
  get x() {
    return this._x;
  },
  set x(value) {
    this._x = value;
  }
};

/* 1 */
console.log(obj03.x);
obj03.x = 2;
/* 2 */
console.log(obj03.x);

export {};
