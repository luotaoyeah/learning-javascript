const input01 = document.querySelector('#number1');
const input02 = document.querySelector('#number2');

const inputResult = document.querySelector('#reslut');

if (window.Worker) {
  const worker = new Worker('./worker.js');

  input01.addEventListener('change', function () {
    worker.postMessage([input01.value, input02.value]);
  });

  input02.addEventListener('change', function () {
    worker.postMessage([input01.value, input02.value]);
  });

  worker.addEventListener('message', function (event) {
    inputResult.value = event.data;
  });
}
