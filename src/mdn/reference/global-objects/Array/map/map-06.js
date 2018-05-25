/*
 * Example：Using map generically
 */

console.log("\n-------------------------------------------------- 01");
/* H_E_L_L_O_ _W_O_R_L_D */
console.log(
  Array.prototype.map.call("Hello world", item => item.toUpperCase()).join("_")
);

export {};
