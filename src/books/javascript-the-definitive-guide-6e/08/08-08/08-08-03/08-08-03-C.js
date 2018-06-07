import { partialLeft } from "./08-08-03-B";

(function() {
  /*
   * 使用 partial application 从现有的 function 创建新的 function；
   */
  console.log("\n-------------------------------------------------- 01");

  String.prototype.first = partialLeft(String.prototype.charAt, 0);
  /* a */
  console.log("abc".first());

  String.prototype.last = partialLeft(String.prototype.substr, -1, 1);
  /* c */
  console.log("abc".last());
})();
