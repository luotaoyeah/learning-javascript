/**
 * 确定一个基数（一般是第一个元素），将数组元素放入两个子数组中，
 * 其中一个数组中的元素比基数小，另一个数组中的元素比基数大，
 * 对两个数组递归排序
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const current = arr.splice(0, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] <= current) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(current, quickSort(right));
}

console.assert(
  quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]).toString() === "1,2,3,4,5,6,7,8,9"
);

export {};
