/*
 * Promise
 *     Promises Overview
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 使用 callback 来实现异步逻辑
 *
 * 如下：getX(), getY(), getZ() 都是异步请求,
 *      getY() 必须等待 getX() 执行完成,
 *      getZ() 必须等待 getY() 执行完成
 *
 * 使用 callback 的缺点是：
 *     当嵌套层次太多时, 代码可读性很差
 */

function getX(cb) {
  setTimeout(() => {
    cb('X');
  }, 1000);
}

function getY(x, cb) {
  setTimeout(() => {
    cb(x + 'Y');
  }, 1000);
}

function getZ(y, cb) {
  setTimeout(() => {
    cb(y + 'Z');
  }, 1000);
}

console.time('TIME: ');
getX(function (x) {
  getY(x, function (y) {
    getZ(y, function (z) {
      console.log(z); // XYZ
      console.timeEnd('TIME: ');
    });
  });
});

export {};
