/*  选择排序
    时间复杂度O（n*2）
    空间复杂度O（1） 
    不稳定
*/

function SelectSort(array) {

  // 两两交换，需要length-1次即可
  for (let i = 0; i < array.length-1; i++) {
    //标识待排序元素的第一个，假设为是最小元素
    let min = i;
    // 循环遍历，找到后面最小的元素，记录索引
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;  
      }
    }

    // 交换最小元素的位置到前面去
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
}


let arr = [1,4,6,3,5,10,7]
console.log( SelectSort(arr) );