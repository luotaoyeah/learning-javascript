describe('src/book/es6-for-humans/07/02/01/01.js', () => {
  // 普通的 array 可以存放任意类型的数据, 无法很好的进行性能优化
  it('should work', () => {
    const arr01 = [0, '0', true];

    expect(arr01).toEqual([0, '0', true]);
  });

  // typed-array 只能存放固定类型的数据, 性能更好,
  // typed-array 中涉及到两种类型的对象: ArrayBuffer 和 DataView,
  // ArrayBuffer 存放具体的数据, 不同的 DataView 表示对数据进行不同格式的解析,
  // 具体的 DataView 的类型包括:
  //    Int8Array
  //    Uint8Array
  //    Uint8ClampedArray
  //    Int16Array
  //    Uint16Array
  //    Int32Array
  //    Uint32Array
  //    Float32Array
  //    Float64Array
  it('should work 02', () => {
    const arrayBuffer = new ArrayBuffer(16);
    const int32Array = new Int32Array(arrayBuffer);

    expect(int32Array.length).toEqual(4);

    for (let i = 0; i < int32Array.length; ++i) {
      int32Array[i] = i * i;
    }

    expect(int32Array instanceof Int32Array).toEqual(true);
    // typed-array 是一个 array-like 对象
    expect(int32Array instanceof Array).toEqual(false);
    expect(JSON.stringify(int32Array)).toEqual(
      JSON.stringify({
        0: 0,
        1: 1,
        2: 4,
        3: 9,
      }),
    );
  });
});
