/*
 * Classes in ES6
 *     Using Constructor Environments
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在 constructor 中使用 closure，捕获 constructor 的参数，
   * 使得外部不能访问类的属性；
   */

  class AirPlane {
    constructor(color) {
      this.getColor = function() {
        return color;
      };
    }
  }

  const airPlane = new AirPlane("red");
  console.log(airPlane.getColor()); // red
  console.log(airPlane.color); // undefined
}
