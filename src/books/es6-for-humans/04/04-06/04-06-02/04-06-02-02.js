/*
 * Classes in ES6
 *     Using Constructor Environments
 *         Using WeakMaps
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * WeakMap 还有一个特性：当 key 不再被其他地方引用时（即只被该 WeakMap 引用），
   * 该 key 及其对应的值会被销毁；
   */
  const weakMap = new WeakMap();
  {
    const obj = {};
    weakMap.set(obj, "foo");
    console.log(weakMap.has(obj)); // true
  }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 WeakMap 存储对象属性，实现 private 属性；
   */
  const map = new WeakMap();

  class AirPlane {
    constructor(capacity) {
      map.set(this, {
        capacity
      });
    }

    get capacity() {
      return map.get(this).capacity;
    }

    set capacity(value) {
      map.get(this).capacity = value;
    }
  }

  const airPlane = new AirPlane(99);
  console.log(airPlane.capacity); // 99
}
