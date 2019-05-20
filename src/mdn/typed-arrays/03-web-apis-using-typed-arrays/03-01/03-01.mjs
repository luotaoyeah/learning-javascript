window.addEventListener("load", function() {
  const inputEl = document.getElementById("input01");
  if (inputEl) {
    inputEl.addEventListener("change", function() {
      const fileReader = new FileReader();

      /*
       * 读取过程是异步的, 因此需要监听 loadend 事件,
       * 然后读取 FileReader.result 属性, 从而获取到二进制数据,
       */
      fileReader.addEventListener("loadend", function() {
        const uint8Array = new Uint8Array(fileReader.result);
        console.log(new TextDecoder("utf-8").decode(uint8Array));
      });

      /*
       * FileReader.readAsArrayBuffer() 方法,
       *     读取一个 File/Blob 对象的文件内容, 并存储为 ArrayBuffer 类型的二进制数据,
       *     存放在 FileReader.result 属性中,
       */
      fileReader.readAsArrayBuffer(inputEl.files[0]);
    });
  }
});
