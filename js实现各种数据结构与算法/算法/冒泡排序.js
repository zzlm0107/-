/*  冒泡排序
    时间复杂度O（n*2）
    空间复杂度O（1） 
    稳定
*/

function BubbleSort(array) {

  // 两两交换，需要length-1次即可
  for (let i = 0; i < array.length - 1; i++) {
    // 标识位，表示本次冒泡是否发生了交换
    let flag = false;
    // 从后向前依次冒泡，直到到前面排好序的位置时停止
    for(let index = array.length - 1; index > i; index--){
      if (array[index] < array[index-1]) {
        //小的元素向前冒泡，交换
        let temp = array[index];
        array[index] = array[index-1];
        array[index-1] = temp;
        flag = true;
      }
    }

    if (flag === false) {       //本次冒泡没有发生交换，已经都有序了
      return array;
    }
  }
}

let arr = [1,4,6,3,5,10,7]
console.log( BubbleSort(arr) );