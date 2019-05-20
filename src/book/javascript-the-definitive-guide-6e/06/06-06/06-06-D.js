/*
 * Example：Generates strictly increasing serial numbers
 */

console.log("\n-------------------------------------------------- 01");

const serialnum = {
  $n: 0,
  get next() {
    return this.$n++;
  },
  set next(value) {
    if (value < this.$n) {
      throw new TypeError("serial number can only be set to a larger value");
    }

    this.$n = value;
  }
};

/* 0 */
console.log(serialnum.next);
/* 1 */
console.log(serialnum.next);
serialnum.next = 5;
/* 5 */
console.log(serialnum.next);
/* TypeError: serial number can only be set to a larger value */
serialnum.next = 5;

export {};
