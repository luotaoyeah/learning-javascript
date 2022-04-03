setInterval(function () {
  console.log(new Date().getSeconds());
}, 1000);

this.addEventListener('message', function (event) {
  const number01 = Number(event.data[0]);
  const number02 = Number(event.data[1]);

  if (Number.isNaN(number01) || Number.isNaN(number02)) {
    this.postMessage('必须输入数字');
    return;
  }

  this.postMessage(number01 + number02);
});
