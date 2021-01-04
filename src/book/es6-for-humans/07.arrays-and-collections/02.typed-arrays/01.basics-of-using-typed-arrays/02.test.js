describe('src/book/es6-for-humans/07.arrays-and-collections/02.typed-arrays/01.basics-of-using-typed-arrays/02.test.js', () => {
  /**
   * {@see Uint8Array} 和 {@see Uint8ClampedArray} 的区别是, 当值超出范围 [0, 255] 时,
   *
   *     {@see Uint8Array}:
   *         小于 0   时,  取模
   *         大于 255 时,  取模
   *         值为小数时,   向下取整
   *
   *     {@see Uint8ClampedArray}:
   *         小于 0   时,  取 0
   *         大于 255 时,  取 255
   *         值为小数时,    四舍五入
   */
  it('01', () => {
    const uint8Array = new Uint8Array(new ArrayBuffer(5));
    uint8Array[0] = -2;
    uint8Array[1] = 257;
    uint8Array[2] = 1.4;
    uint8Array[3] = 1.5;
    uint8Array[4] = 1.6;
    expect(JSON.stringify(uint8Array)).toEqual(
      JSON.stringify({
        0: 254,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
      }),
    );

    const uint8ClampedArray = new Uint8ClampedArray(new ArrayBuffer(5));
    uint8ClampedArray[0] = -2;
    uint8ClampedArray[1] = 257;
    uint8ClampedArray[2] = 1.4;
    uint8ClampedArray[3] = 1.5;
    uint8ClampedArray[4] = 1.6;
    expect(JSON.stringify(uint8ClampedArray)).toEqual(
      JSON.stringify({
        0: 0,
        1: 255,
        2: 1,
        3: 2,
        4: 2,
      }),
    );
  });
});
