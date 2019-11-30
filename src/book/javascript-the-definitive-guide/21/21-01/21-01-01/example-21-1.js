function rollover() {
  for (var i = 0; i < document.images.length; i++) {
    const imgEl = document.images[i];
    const rolloverUrl = imgEl.getAttribute("data-rollover");
    if (!rolloverUrl) {
      continue;
    }

    new Image().src = rolloverUrl;
    imgEl.setAttribute("data-rollout", imgEl.src);

    imgEl.onmouseenter = function() {
      this.src = imgEl.getAttribute("data-rollover");
    };
    imgEl.onmouseleave = function() {
      this.src = imgEl.getAttribute("data-rollout");
    };
  }
}
