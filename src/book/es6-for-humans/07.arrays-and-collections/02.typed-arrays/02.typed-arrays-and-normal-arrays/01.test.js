describe('src/book/es6-for-humans/07.arrays-and-collections/02.typed-arrays/02.typed-arrays-and-normal-arrays', () => {
  /**
   * typed-array 是一个 {@see ArrayLike} object,
   * 它支持 {@see Array } 的大多数特性, 同时又有一些区别.
   */
  it('01', () => {
    // typed-array 元素的默认值为 0
    const int8Array = new Int8Array(new ArrayBuffer(2));
    expect(int8Array[0]).toBe(0);
    expect(int8Array[1]).toBe(0);

    // array 元素的默认值为 undefined
    const array = new Array(2);
    expect(array[0]).toBe(undefined);
    expect(array[1]).toBe(undefined);
  });

  /**
   * 用于初始化 typed-array 的 {@see ArrayBuffer} 的字节长度, 必须是元素字节长度的整数倍,
   * 比如 {@see Int16Array} 元素的字节长度为 61/8=2, 则它的 {@see ArrayBuffer} 的字节长度必须是 2 的整数倍, 否则报错.
   */
  it('02', () => {
    try {
      const int16Array = new Int16Array(new ArrayBuffer(3));
    } catch (e) {
      expect(e instanceof RangeError).toBe(true);
      expect(e.message).toEqual('byte length of Int16Array should be a multiple of 2');
    }
  });
});
