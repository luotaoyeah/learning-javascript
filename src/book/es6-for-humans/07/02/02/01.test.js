describe('src/book/es6-for-humans/07/02/02/01.js', () => {
  // typed-array 是一个 array-like object, 它支持 array 的大多数特性,
  // 同时又跟 array 有一些区别
  it('should work', () => {
    // typed-array 元素的默认值为 0
    const int8Array = new Int8Array(new ArrayBuffer(2));
    expect(int8Array[0]).toEqual(0);
    expect(int8Array[1]).toEqual(0);

    // array 元素的默认值为 undefined
    const array = new Array(2);
    expect(array[0]).toEqual(undefined);
    expect(array[1]).toEqual(undefined);
  });

  // 用于初始化 typed-array 的 ArrayBuffer 的字节长度, 必须是元素字节长度的整数倍,
  // 比如 Int16Array 元素的字节长度为 2, 则它的 ArrayBuffer 的字节长度必须是 2 的整数倍, 否则报错
  it('should work 02', () => {
    try {
      const int16Array = new Int16Array(new ArrayBuffer(3));
    } catch (e) {
      expect(e instanceof RangeError).toBe(true);
      expect(e.message).toEqual('byte length of Int16Array should be a multiple of 2');
    }
  });
});
