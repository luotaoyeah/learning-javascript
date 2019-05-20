/*
 * getter 和 setter 定义规则：
 *     方法名称表示属性名称, 方法前面分别加上 get 和 set 关键字；
 */
console.log("\n-------------------------------------------------- 01");

const person = {
  firstName: "tom",
  lastName: "cat",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    const names = value.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
};

/* tom cat */
console.log(person.fullName);
person.fullName = "foo bar";
/* foo bar */
console.log(person.firstName, person.lastName);

export {};
