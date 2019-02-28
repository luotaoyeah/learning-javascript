const arrayBuffer = new ArrayBuffer(16);
const arr01 = new Uint32Array(arrayBuffer);

/*
 * 以 Uint32Array 类型为例，介绍它的一些常用属性
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * Uint32Array.BYTES_PER_ELEMENT
   *     每个元素占用的字节长度
   */
  console.assert(arr01.BYTES_PER_ELEMENT === 4);
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * Uint32Array.length
   *     元素个数（数组长度）
   */
  console.assert(arr01.length === 4);

  /*
   * length 属性可以由下面的公式计算出来
   */
  console.assert(arr01.length === arr01.byteLength / arr01.BYTES_PER_ELEMENT);
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * Uint32Array.buffer
   *     对下层的 ArrayBuffer 对象的引用
   */
  console.assert(arr01.buffer === arrayBuffer);
}

console.log("\n-------------------------------------------------- 04");
{
  /*
   * Uint32Array.byteLength
   *     字节长度，通常情况下，等于下层的 ArrayBuffer 对象的字节长度
   */
  console.assert(arr01.byteLength === arr01.buffer.byteLength);

  /*
   * 如果在构建 typed array 实例对象的时候，指定了在 ArrayBuffer 对象上的偏移，
   * 表示上层的 view 对象在使用下层的 buffer 对象的时候，
   * 并没有全部使用该 buffer 对象，而是只使用了某一部分，
   * 此时，该 view 对象只能访问该 buffer 对象的这一部分数据，
   * 从而，同一个 buffer 对象可以同时被多个 view 对象使用，
   * 这些 view 对象使用了该 buffer 对象的不同部分，
   */
  const buffer02 = new ArrayBuffer(32);

  /*
   * byteOffset 参数的值必须是 BYTES_PER_ELEMENT 的整数倍
   */
  const arr02 = new Uint32Array(buffer02, 4, 2);
  console.assert(
    arr02.byteLength === buffer02.byteLength,
    `arr02.byteLength = ${arr02.byteLength}, buffer02.byteLength = ${
      buffer02.byteLength
    }`
  );

  const arr03 = new Uint8Array(buffer02, 15, 2);
  console.assert(arr03.byteOffset === 15);
}

console.log("\n-------------------------------------------------- 05");
{
  /*
   * Uint32Array.byteOffset
   *     获取在 ArrayBuffer 对象上的偏移，默认为0
   */
  console.assert(arr01.byteOffset === 0);
}

export {};
