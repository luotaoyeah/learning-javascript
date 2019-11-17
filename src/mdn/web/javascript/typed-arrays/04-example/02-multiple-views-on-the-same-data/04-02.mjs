/*
 * Multiple views on the same data
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 多个不同的 view 对象, 可以共用同一个 buffer 对象,
 * 这时候, 不同的 view 对象对 buffer 数据进行读写时,
 * 所拿到的数据的格式是不一样的, 但是底层的二进制数据是同一份
 */
const buffer01 = new ArrayBuffer(16);

const arr01 = new Uint32Array(buffer01);
const arr02 = new Uint16Array(buffer01);

for (let i = 0; i <= arr01.length; i++) {
  arr01[i] = i * 2;
}

/*
 * 因为 Uint32Array 中一个元素占用 4 个字节,
 * 而 Uint16Array 中一个元素只占用 2 个字节,
 */
console.assert(arr01.toString() === '0,2,4,6');
console.assert(arr02.toString() === '0,0,2,0,4,0,6,0');

console.log('\n-------------------------------------------------- 02');
/*
 * 当通过某个 view 对象, 改变了 buffer 对象中的数据时,
 * 其他的 view 对象读取到的数据, 也相应的被改变了,
 * 因为它们本来就是访问的同一份数据,
 */
arr02[0] = 8;
console.assert(arr01.toString() === '8,2,4,6');
console.assert(arr02.toString() === '8,0,2,0,4,0,6,0');
