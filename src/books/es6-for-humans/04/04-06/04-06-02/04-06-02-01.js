/*
 * Classes in ES6
 *     Using Constructor Environments
 *         Using WeakMaps
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * WeakMap 是 ES6 新添加的类型，
   * 跟 Map 的区别在于：key 必须是一个 object
   */

  const obj = { name: "foo" };
  const weakMap = new WeakMap();
  weakMap.set(obj, "foo");
  console.log(weakMap.get(obj)); // foo
}
