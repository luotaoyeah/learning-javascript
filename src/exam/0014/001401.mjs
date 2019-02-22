/**
 * debounce 是一个 higher order function，返回的是一个新的函数
 * @param fn 原始函数
 * @param wait 延时（毫秒）
 * @param leading 是否在 leading edge 执行，否则在 trailing edge 执行
 * @return {*}
 */
function myDebounce(fn, wait, leading) {
  /* 延时器计时器ID */
  let timer = null;

  return function() {
    const ctx = this;
    const args = arguments;

    /**
     * 延迟执行
     */
    const later = () => {
      timer = null;

      if (!leading) {
        fn.apply(ctx, args);
      }
    };

    const invokeNow = leading && !timer;

    /*
     * 每次触发函数执行时，都要重新开始延迟计时器
     */
    window.clearTimeout(timer);
    timer = window.setTimeout(later, wait);

    if (invokeNow) {
      fn.apply(ctx, args);
    }
  };
}

function handleResize() {
  console.log(`%c${window.innerWidth}[${new Date().getTime()}]`, "color:red");
}

window.addEventListener("resize", myDebounce(handleResize, 200, false));

export {};
