/**
 * 从第一个元素开始, 依次将该元素跟后面的所有元素比较并交换, 保证当前元素较小,
 * 第一轮比较之后, 第一个元素是最小的元素,
 * 第二轮比较之后, 第二个元素是第二小的元素,
 * 依次类推
 */
function selectSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    /* 观察排序过程 */
    console.log(arr);
  }
  return arr;
}

console.assert(
  selectSort([9, 8, 7, 6, 5, 4, 3, 2, 1]).toString() === "1,2,3,4,5,6,7,8,9"
);

export {};
