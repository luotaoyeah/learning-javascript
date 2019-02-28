/*
 * Using views with buffers
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ArrayBuffer 默认将所有字节数据初始化为0
   */
  const buffer01 = new ArrayBuffer(16);

  const arr01 = new Int32Array(buffer01);
  console.assert(arr01.toString() === "0,0,0,0");

  for (let i = 0; i <= arr01.length - 1; i++) {
    arr01[i] = i * 2;
  }
  console.assert(arr01.toString() === "0,2,4,6");
}
