import("./books/es6-for-humans/05-modules/05-04/05-04-01/05-04-01-04").then(
  ({ default: fn, name, age }) => {
    fn(); // DEFAULT
    console.log(name); // FOO
    console.log(age); // 18
  }
);
