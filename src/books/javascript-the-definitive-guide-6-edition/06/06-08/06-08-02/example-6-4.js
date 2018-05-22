/*
 * Example 6-4. A classof() function
 */
console.log("\n-------------------------------------------------- 01");

function classOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

/* Null */
console.log(classOf(null));
/* Undefined */
console.log(classOf(undefined));
/* Object */
console.log(classOf({}));
/* Array */
console.log(classOf([]));
/* String */
console.log(classOf(""));
/* Number */
console.log(classOf(0));
/* Boolean */
console.log(classOf(true));
/* Date */
console.log(classOf(new Date()));
/* RegExp */
console.log(classOf(/js/));
/* Function */
console.log(classOf(() => {}));

export { classOf };
