/**
 * 依次将待排序的元素, 插入到已经排好序的子数组中, 保证插入之后仍然是有序的,
 * 直到所有元素都插入完毕
 */
function insertSort(arr) {
  console.log(arr);

  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = i; j >= 1; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
    console.log(arr);
  }

  return arr;
}

console.assert(
  insertSort([9, 8, 7, 6, 5, 4, 3, 2, 1]).toString() === "1,2,3,4,5,6,7,8,9"
);

export {};
