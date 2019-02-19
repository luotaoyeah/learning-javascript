/**
 *
 * @param n
 * @return {string}
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
