const input01 = document.querySelector('#number1');
const input02 = document.querySelector('#number2');

const inputResult = document.querySelector('#reslut');

let worker;

const buttonStart = document.querySelector('#btnStart');
buttonStart.addEventListener('click', function () {
  if (window.Worker) {
    worker = new Worker('./worker.js');

    input01.addEventListener('input', function () {
      worker.postMessage([input01.value, input02.value]);
    });

    input02.addEventListener('input', function () {
      worker.postMessage([input01.value, input02.value]);
    });

    worker.addEventListener('message', function (event) {
      inputResult.value = event.data;
    });
  }
});

const buttonStop = document.querySelector('#btnStop');
buttonStop.addEventListener('click', function () {
  if (worker) {
    worker.terminate();
  }
});
