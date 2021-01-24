/**
 * 一次循环字符串中的每一个字符, 并使用一个子串来存储当前不重复的字符子串,
 * 当遇到重复的字符时, 从子串中该字符后面开始, 重新存储不重复的子串,
 * 在这个过程中, 每循环一个字符, 就记录一次最大子串的长度, 最后得到的就是最大的那个子串的长度
 * @param n
 * @returns {string}
 */
function fn0002(n) {
  if (typeof n !== "string") {
    return 0;
  }

  /* 不重复的字符子串 */
  let nonRepeatStr = "";
  let result = 1;

  for (let i = 0; i < n.length; i++) {
    const char = n[i];
    if (nonRepeatStr.includes(char)) {
      nonRepeatStr = nonRepeatStr.slice(nonRepeatStr.indexOf(char) + 1) + char;
    } else {
      nonRepeatStr += char;
    }
    result = Math.max(result, nonRepeatStr.length);
  }

  return result;
}

console.assert(fn0002("abbcccdefg") === 5);
console.assert(fn0002("abbbcbd") === 3);
console.assert(fn0002("abcdefg") === 7);
