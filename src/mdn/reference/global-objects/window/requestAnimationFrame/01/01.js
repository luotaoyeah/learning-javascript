/*
 * window.requestAnimationFrame()
 */

/*
 * 在 window.requestAnimationFrame() 之前，可以使用 window.setInterval() 实现动画效果
 */
window.addEventListener("load", function() {
  const divEl = document.getElementById("box");
  if (divEl) {
    let timer = null;
    let left = 10;

    const btnStart = document.getElementById("btn-start");
    if (btnStart) {
      btnStart.addEventListener("click", function() {
        timer = window.setInterval(function() {
          divEl.style.left = ++left + "px";
        }, 1000 / 60);
      });
    }

    const btnStop = document.getElementById("btn-stop");
    if (btnStop) {
      btnStop.addEventListener("click", function() {
        if (timer) {
          window.clearInterval(timer);
          timer = null;
        }
      });
    }
  }
});
