console.log('\n-------------------------------------------------- 01');
{
  /*
   * view 对象有多个具体的类型, 包括：
   *     Int8Array,
   *     Uint8Array,
   *     Uint8ClampedArray,
   *     Int16Array,
   *     Uint16Array,
   *     Int32Array,
   *     Uint32Array,
   *     Float32Array,
   *     Float64Array
   */

  const arrayBuffer = new ArrayBuffer(2);
  /*
   * Uint8Array 类型, 它的一个元素占用一个字节,
   * 因此当它的底层是一个 2 个字节的 ArrayBuffer 时,
   * 它的实际长度为 2
   */
  const uint8Array = new Uint8Array(arrayBuffer);
  console.log(uint8Array.length); // 2
  /*
   * 通过 Uint8Array.BYTES_PER_ELEMENT 属性, 可以查询每个元素占用的字节数
   */
  console.log(uint8Array.BYTES_PER_ELEMENT); // 1
}

export {};
