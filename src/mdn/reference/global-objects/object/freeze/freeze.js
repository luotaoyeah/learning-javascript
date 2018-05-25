/*
 * Object.freeze()：
 *    冻结一个对象;
 *    不能添加属性, 不能删除属性, 不能改变属性修饰符（value, configurable, enumerable, writable）, 不能修改原型;
 * --------------------------------------------------
 */

/*
 * 不能修改原型;
 * 报错;
 * --------------------------------------------------
 */
/*
  /!* Uncaught TypeError: #<Object> is not extensible *!/
    Object.setPrototypeOf(obj, {});
*/
/*
  /!* Uncaught TypeError: #<Object> is not extensible *!/
  obj.__proto__ = {};
*/

/*
 * 如果属性是一个对象, 则该属性对象的属性依然可以修改;
 * --------------------------------------------------
 */
const obj03 = { x: { y: "tom" } };
Object.freeze(obj03);
obj03.x.y = "cat";
/* cat */
console.log(obj03.x.y);

/*
 * 数组也是对象, 也可以被冻结;
 * 冻结之后不能添加, 修改, 移除元素;
 * --------------------------------------------------
 */
const array = [1, 2, 3];
Object.freeze(array);
array[0] = "tom";
delete array[1];
array[4] = "cat";
/* [1, 2, 3] */
console.log(array);

/*
 *
 * --------------------------------------------------
 */
/* true */
console.log(Object.isFrozen(array));

/*
 * 严格模式下, 修改被冻结对象的属性, 会报错;
 * --------------------------------------------------
 */
(function() {
  "use strict";

  const obj04 = { name: "tom" };
  Object.freeze(obj04);
  /* Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>' */
  /*
    obj04.name = "cat";
  */
})();

/*
 * 使用 Object.defineProperty 定义属性会报错;
 * --------------------------------------------------
 */
const obj05 = { name: "tom" };
Object.freeze(obj05);
/* Uncaught TypeError: Cannot define property x, object is not extensible */
/*
  Object.defineProperty(obj05, "x", {
    value: 18
  });
*/
console.log(obj05);

/*
 * 深度冻结;递归冻结对象的属性;
 * --------------------------------------------------
 */

/**
 *
 * @param obj
 * @returns
 */
function deepFreeze(obj) {
  const propertyNames = Object.getOwnPropertyNames(obj);

  propertyNames.forEach(function(name) {
    const property = obj[name];
    if (typeof property === "object" && property !== null) {
      deepFreeze(property);
    }
  });

  return Object.freeze(obj);
}

const obj06 = { x: { y: "tom" } };
deepFreeze(obj06);
obj06.x.y = "cat";
/* tom */
console.log(obj06.x.y);
