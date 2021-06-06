// 迭代器案例

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];

// 封装函数,返回数组的迭代器
function createInterator(arr) {
  let i = 0;  // 当前的数组下标
  return iterator = {
    next() {
      var result = {
        value: arr[i],
        done: i >= arr.length
      }
      i++;
      return result
    }
  }
}

// 创建两个迭代器
const iter1 = createInterator(arr1);
const iter2 = createInterator(arr2);
