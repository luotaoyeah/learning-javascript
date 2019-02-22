import "../../../node_modules/lodash/lodash.js";

function handleResize() {
  console.log(`%c${window.innerWidth}[${new Date().getTime()}]`, "color:blue");
}

window.addEventListener(
  "resize",
  window._.debounce(handleResize, 200, {
    leading: false,
    trailing: true
  })
);

export {};
