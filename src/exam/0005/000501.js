/**
 * 依次循环字符，并对每个字符出现的次数进行统计，
 * 以字符为key，次数为value，存储到一个对象中，
 * 找出次数最多的那个字符及它的次数
 * @param str
 * @return {string}
 */
function fn0005(str) {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  let max = 0;
  let maxChar = "";
  for (let char in count) {
    if (count[char] > max) {
      max = count[char];
      maxChar = char;
    }
  }

  return [maxChar, max];
}

console.assert(fn0005("aabbccc").toString() === "c,3");
console.assert(fn0005("aabbcccdddd").toString() === "d,4");
console.assert(fn0005("abcabcabcbd").toString() === "b,4");
