/*
 * New Syntax in ES6
 *     Arrow Functions
 *         Using Arrow Functions to Create IIFEs
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 function 实现IIFE
   */
  const fn = (function(num) {
    return {
      getNumber() {
        return num;
      }
    };
  })(9);
  console.log(fn.getNumber()); // 9
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 arrow function 实现IIFE
   */
  const fn = (num => ({ getNumber: () => num }))(9);
  console.log(fn.getNumber()); // 9
}
