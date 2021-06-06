

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];

// 使用生成器创建
function *createInterator(arr) {
  for(const item of arr) {
    yield item
  }
}

// 创建两个迭代器
const iter1 = createInterator(arr1);
const iter2 = createInterator(arr2);
