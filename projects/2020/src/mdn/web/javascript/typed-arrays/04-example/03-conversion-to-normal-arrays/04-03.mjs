/*
 * Conversion to normal arrays
 */

console.log('\n-------------------------------------------------- 01');
{
  /*
   * 因为 typed array 是 array-like 对象,
   * 可以通过下面的方式, 将它们转换为真正的 array 对象,
   */

  const buffer01 = new ArrayBuffer(4);
  const arr01 = new Uint8Array(buffer01);

  const arr02 = Array.from(arr01);
  console.assert(Array.isArray(arr02) === true);
  console.assert(arr02.toString() === '0,0,0,0');

  const arr03 = Array.prototype.slice.apply(arr01);
  console.assert(Array.isArray(arr03) === true);
  console.assert(arr03.toString() === '0,0,0,0');
}
