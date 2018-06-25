(function() {
  /*
   * HTMLElement.prototype.style
   */
  console.log("\n-------------------------------------------------- 01");
  const element = document.getElementById("timestamp");

  if (element) {
    element.innerText = new Date().toISOString();
    element.style.border = "1px solid red";
    element.style.borderRadius = "3px";
  }
})();

(function() {
  /*
   * HTMLElement.prototype.className
   */
  console.log("\n-------------------------------------------------- 02");
  const element = document.getElementById("timestamp");

  if (element) {
    element.className = "timestamp";
  }
})();
