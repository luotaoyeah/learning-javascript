/*
 * window.requestAnimationFrame()
 */

/*
 * 在 window.requestAnimationFrame() 之前，可以使用 window.setInterval() 实现动画效果，
 * window.setInterval() 的缺陷：
 *     时间间隔不精确，比如指定一秒一次，但实际上会超过一秒，
 *
 *     可能导致帧丢失（frame loss），比如屏幕的刷新频率只有30FPS，但是动画的执行频率为60FPS，
 *         因此屏幕每刷新一次，动画就会执行两次，其中有一次是无效的，是丢失的，因此称为 frame loss，
 *     H5的规范规定，其间隔时间不能小于4ms，且在后台标签页的频率为一秒一次，
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
