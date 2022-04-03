/**
 *
 * @constructor
 */
function Observer() {
  /* 用来存储所有观察者的回调函数 */
  this.funcs = [];
}

Observer.prototype = {
  constructor: Observer,
  /**
   * 订阅
   * @param fn
   */
  sub(fn) {
    if (typeof fn === "function" && !this.funcs.includes(fn)) {
      this.funcs.push(fn);
    }
  },
  /**
   * 退订
   * @param fn
   */
  unsub(fn) {
    this.funcs = this.funcs.filter(i => i !== fn);
  },
  /**
   * 通知
   * @param msg
   */
  notify(msg) {
    this.funcs.forEach(fn => {
      fn.call(this, msg);
    });
  }
};

const observer = new Observer();

const fn01 = msg => {
  console.log(`fn01 ${msg}`);
};
const fn02 = msg => {
  console.log(`fn02 ${msg}`);
};

observer.sub(fn01);
observer.sub(fn02);
observer.notify("foo");

observer.unsub(fn01);
observer.notify("bar");
