import _ from "lodash";

/*
 * 例子: 平化数组;
 */
console.log("\n-------------------------------------------------- 01");

const flattern = array => {
  return array.reduce((accumulator, value) => {
    let item = value;

    if (_.isArray(value)) {
      item = flattern(value);
    }

    return accumulator.concat(item);
  }, []);
};
console.log(flattern([1, [2, [3, [4, [5]]]]]));

export {};
