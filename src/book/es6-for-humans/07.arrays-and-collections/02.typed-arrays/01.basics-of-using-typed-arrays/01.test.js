describe('src/book/es6-for-humans/07.arrays-and-collections/02.typed-arrays/01.basics-of-using-typed-arrays/01.test.js', () => {
  // 普通的 array 可以存放任意类型的数据, 无法很好的进行性能优化
  it('01', () => {
    const arr01 = [0, '0', true];

    expect(arr01).toEqual([0, '0', true]);
  });

  /**
   * typed-array 只能存放固定类型的数据, 性能更好,
   * typed-array 中涉及到两种类型的对象: {@see ArrayBuffer} 和 {@see DataView},
   * ArrayBuffer 存放具体的二进制数据, 不同的 {@see DataView} 表示对 {@see ArrayBuffer} 进行不同格式的解析,
   * 具体的 DataView 的类型包括:
   *   {@see Int8Array}
   *   {@see Uint8Array}
   *   {@see Uint8ClampedArray}
   *   {@see Int16Array}
   *   {@see Uint16Array}
   *   {@see Int32Array}
   *   {@see Uint32Array}
   *   {@see Float32Array}
   *   {@see Float64Array}
   */
  it('02', () => {
    const arrayBuffer = new ArrayBuffer(16);
    const int32Array = new Int32Array(arrayBuffer);

    expect(int32Array.length).toEqual(4);

    for (let i = 0; i < int32Array.length; ++i) {
      int32Array[i] = i * i;
    }

    expect(int32Array instanceof Int32Array).toEqual(true);
    /**
     * {@see Int32Array} 等是一个 {@see ArrayLike} 对象
     */
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
