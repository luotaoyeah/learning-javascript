/*
 * 6.2.1 Objects As Associative Arrays
 */

/*
 * 使用 [] 访问对象属性的方式, 类似访问数组元素的方式,
 * 不同之处在于数组的索引是 number 类型, 而对象的属性名是 string 类型；
 * 因此对象也可以称为 associative array / hash / map / dictionary；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {
  p01: "foo",
  p02: "bar"
};

for (let i = 0; i < 2; i++) {
  console.log(obj01["p0" + (i + 1)]);
}

export {};
