/*
 * 对于 non-ASCII 字符，应该使用 String.localeCompare() 方法进行比较；
 */
console.log("\n-------------------------------------------------- 01");
const array = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
console.log(
  array.sort((a, b) => {
    return a.localeCompare(b);
  })
);

export {};
