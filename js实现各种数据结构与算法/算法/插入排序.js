/*  插入排序
    时间复杂度O（n*2）
    空间复杂度O（1） 
    稳定
*/

function InsertSort(array) {
  for (let i = 1; i < array.length; i++) {
    //记录当前准备插入的元素
    let current = array[i];

    // 二分查找，确定插入的位置
    let low = 0, high = i-1;
    while (low <= high) {
      let mid = parseInt( (low + high) / 2 );
      if (array[mid] > current) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    //找到后将右半子表的元素都后一一位
    for(let j = i-1; j >= low; j--){
      array[j+1] = array[j];
    }
    array[low] = current;
  }

  return array;
}


let arr = [1,4,6,3,5,10,7]
console.log( InsertSort(arr) );