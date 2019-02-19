/**
 * 将两个数字分别存放到两个数组，每一个元素表示一位数字，
 * 对两个数组的元素依次进行加法运算，并保证正确的进位，
 * 最终得到一个相加后的结果数组
 * @param x
 * @param y
 */
function fn0003(x, y) {
  let x01 = String(x);
  let y01 = String(y);

  const maxLength = Math.max(x01.length, y01.length);

  /*
   * 首位补零，保证位数一致
   */
  x01 = x01.padStart(maxLength, "0");
  y01 = y01.padStart(maxLength, "0");

  const arr01 = x01.split("").reverse();
  const arr02 = y01.split("").reverse();

  const result = Array(maxLength).fill(0);

  for (let i = 0; i < maxLength; i++) {
    const sum = Number.parseInt(arr01[i]) + Number.parseInt(arr02[i]);
    if (sum > 9) {
      /* 逢十进一 */
      result[i] += sum % 10;
      result[i + 1] = 1;
    } else {
      result[i] += sum;
    }
  }

  return result.reverse().join("");
}

console.assert(fn0003(123456789, 98765) === "123555554");
