/**
 * 依次比较并交换相邻的两个元素，将较大的元素逐步往后移动，
 * 经过第一轮比较之后，将会找出最大的一个元素，并放置再最后一个位置，
 * 经过第二轮比较之后，将会找出第二大的元素，并放置在倒数第二的位置，
 * 以此类推
 *
 * @param arr 待排序的数组
 * @return {*}
 */
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    /* 观察排序过程 */
    console.log(arr);
  }

  return arr;
}

console.assert(
  bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]).toString() === "1,2,3,4,5,6,7,8,9"
);

export {};
