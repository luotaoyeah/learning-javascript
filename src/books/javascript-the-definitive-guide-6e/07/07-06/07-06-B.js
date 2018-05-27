(function() {
  /*
   * 过滤掉值为 null，undefined 的 element，以及 non-existent element；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [, 0, false, "", null, undefined, "x"];
  const values = [];
  for (let i = 0; i < array01.length; i++) {
    const value = array01[i];
    if (value === undefined || value === null) {
      continue;
    }

    values.push(value);
  }

  /* [ 0, false, '', 'x' ] */
  console.log(values);
})();

(function() {
  /*
   * 过滤掉值为 undefined 的 element，以及 non-existent element；
   */
  console.log("\n-------------------------------------------------- 02");

  const array01 = [, 0, false, "", null, undefined, "x"];
  const values = [];
  for (let i = 0; i < array01.length; i++) {
    const value = array01[i];
    if (value === undefined) {
      continue;
    }

    values.push(value);
  }

  /* [ 0, false, '', null, 'x' ] */
  console.log(values);
})();

(function() {
  /*
   * 过滤掉 non-existent element，保留值为 undefined 的 element；
   */
  console.log("\n-------------------------------------------------- 03");

  const array01 = [, 0, false, "", null, undefined, "x"];
  const values = [];
  for (let i = 0; i < array01.length; i++) {
    if (!(i in array01)) {
      continue;
    }

    values.push(array01[i]);
  }

  /* [ 0, false, '', null, undefined, 'x' ] */
  console.log(values);
})();

(function() {
  /*
   * 可以使用 for/in 遍历 sparse array，non-existent element 不会被遍历到；
   */
  console.log("\n-------------------------------------------------- 04");

  const array01 = [, 1, , 2, 3, ,];
  const values = [];
  for (let index in array01) {
    values.push(array01[index]);
  }

  /* [ 1, 2, 3 ] */
  console.log(values);
})();
