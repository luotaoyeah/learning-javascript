/*
 * 对于 non-ASCII 字符，应该使用 String.localeCompare() 方法进行比较；
 */
console.log("\n-------------------------------------------------- 01");
const items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
console.log(
  items.sort((a, b) => {
    return a.localeCompare(b);
  })
);

export {};
