import _ from 'lodash';

/*
 * Example：Using map to reformat objects in an array
 */

console.log('\n-------------------------------------------------- 01');
const array = [{ tom: 18 }, { cat: 19 }];
/* [ { name: 'tom', age: 18 }, { name: 'cat', age: 19 } ] */
console.log(
  array.map((item) => {
    const key = _.get(_.keys(item), '[0]');
    if (!_.isUndefined(key)) {
      return {
        name: key,
        age: item[key],
      };
    }

    return item;
  }),
);

export {};
