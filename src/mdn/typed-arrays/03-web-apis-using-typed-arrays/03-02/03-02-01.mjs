window.addEventListener("load", function() {
  const inputEl = document.getElementById("input01");
  if (inputEl) {
    inputEl.addEventListener("change", function() {
      const fileReader = new FileReader();

      fileReader.addEventListener("loadend", function() {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.addEventListener("readystatechange", function() {
          if (xmlHttpRequest.readyState === 4) {
            console.log(JSON.parse(xmlHttpRequest.response));
          }
        });
        xmlHttpRequest.open("POST", "http://localhost:8888");

        /*
         * XMLHttpRequest.send() 方法，
         *     参数表示请求体，可以是一个 ArrayBuffer 对象
         */
        xmlHttpRequest.send(fileReader.result);
      });

      fileReader.readAsArrayBuffer(inputEl.files[0]);
    });
  }
});
