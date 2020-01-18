describe('src/book/es6-for-humans/07/02/01/02.js', () => {
  // Uint8Array 和 Uint8ClampedArray 的区别是, 当值超出范围 [0, 255] 时,
  //
  //     Uint8Array:
  //         < 0   时,  取模
  //         > 255 时,  取模
  //         值为小数时, 向下取整
  //
  //     Uint8ClampedArray:
  //         < 0   时,  取 0
  //         > 255 时,  取 255
  //         值为小数时, 四舍五入

  it('should work', () => {
    const uint8Array = new Uint8Array(new ArrayBuffer(3));
    uint8Array[0] = -2;
    uint8Array[1] = 257;
    uint8Array[2] = 1.5;
    expect(JSON.stringify(uint8Array)).toEqual(
      JSON.stringify({
        0: 254,
        1: 1,
        2: 1,
      }),
    );

    const uint8ClampedArray = new Uint8ClampedArray(new ArrayBuffer(3));
    uint8ClampedArray[0] = -2;
    uint8ClampedArray[1] = 257;
    uint8ClampedArray[2] = 1.5;
    expect(JSON.stringify(uint8ClampedArray)).toEqual(
      JSON.stringify({
        0: 0,
        1: 255,
        2: 2,
      }),
    );
  });
});
