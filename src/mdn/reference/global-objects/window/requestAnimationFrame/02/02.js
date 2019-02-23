/*
 * window.requestAnimationFrame()
 */

/*
 * 使用 window.requestAnimationFrame() 实现动画效果
 */
window.addEventListener("load", function() {
  const divEl = document.getElementById("box");
  if (divEl) {
    let timer = null;
    let left = 10;

    /**
     *
     */
    const move = () => {
      divEl.style.left = ++left + "px";

      /*
       * window.requestAnimationFrame() 不像 window.setInterval() 会自动循环调用回调函数，
       * 因此需要手动递归调用回调函数
       */
      timer = window.requestAnimationFrame(move);
    };

    const btnStart = document.getElementById("btn-start");
    if (btnStart) {
      btnStart.addEventListener("click", function() {
        timer = window.requestAnimationFrame(move);
      });
    }

    const btnStop = document.getElementById("btn-stop");
    if (btnStop) {
      btnStop.addEventListener("click", function() {
        if (timer) {
          /*
           * 类似 window.clearInterval() 方法，
           * 可以使用 window.cancelAnimationFrame() 方法，取消某个回调函数的执行
           */
          window.cancelAnimationFrame(timer);
          timer = null;
        }
      });
    }
  }
});
