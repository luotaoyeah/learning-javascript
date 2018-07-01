/*
 * Example 13-5. onLoad(): invoke a function when the document loads
 */

function onLoad(fn) {
  if (onLoad.loaded) {
    window.setTimeout(fn, 0);
  } else if (window.addEventListener) {
    window.addEventListener("load", fn, false);
  } else if (window.attachEvent) {
    window.attachEvent("load", fn);
  }
}

onLoad.loaded = false;
onLoad(function() {
  onLoad.loaded = true;
});
