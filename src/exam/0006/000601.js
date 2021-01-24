/**
 * 数据劫持+发布订阅模式
 * 使用Object.defineProperty()实现数据劫持
 */

const vue = {};

/**
 *
 * @param data
 */
function observable(data) {
  if (!data || typeof data !== "object") {
    return;
  }

  Object.keys(data).forEach(key => {
    observe(data, key, data[key]);
  });
}

/**
 *
 * @param data
 * @param key
 * @param val
 * @returns {*}
 */
function observe(data, key, val) {
  observable(val);
  Object.defineProperty(data, key, {
    get() {
      return val;
    },
    set(value) {
      console.log("SET:", `${key} = ${value}`);
      val = value;
    },
    enumerable: true,
    configurable: false
  });
}

const data = { person: { name: "foo" } };
observable(data);
data.person.name = "bar";
data.person.name = "baz";
