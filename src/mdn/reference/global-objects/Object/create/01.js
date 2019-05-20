/*
 * Object.create()：
 *     创建一个对象, 并指定对象的 prototpye 对象；
 */
console.log("\n-------------------------------------------------- 01");

const person = {
  isHuman: false,
  hello() {
    console.log(`My name is ${this.name}. Am i a human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = "Tom";
me.isHuman = true;
me.hello();

export {};
