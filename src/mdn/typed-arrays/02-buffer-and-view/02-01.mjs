console.log("\n-------------------------------------------------- 01");
{
  /*
   * typed array 的实现包含两个部分：buffer 和 view,
   * 其中, 下层的 buffer 对象用来存储实际的数据（二进制数据）, 我们不能直接读写 buffer 中的数据,
   * 必须通过上层的 view 对象来对 buffer 对象中的数据进行读写,
   */

  // buffer 对象的具体类型为 ArrayBuffer, 用来存储二进制数据,
  // 它的长度是固定的, 因此必须在实例化对象时指定它的长度（单位：字节）,
  // 如果不指定, 默认长度为 0,
  // 如下, 创建了一个长度为 2 个字节的 ArrayBuffer 对象,
  const arrayBuffer = new ArrayBuffer(2);
  console.log(arrayBuffer); // ArrayBuffer { byteLength: 2 }
}

export {};
