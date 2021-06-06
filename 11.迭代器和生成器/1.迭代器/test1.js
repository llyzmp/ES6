// 迭代器案例

const arr1 = [1,2,3,4,5];

// 迭代数组
const iterator = {
  i:0, // 当前的数组下标
  next() {
    var result = {
      value: arr[this.i],
      done: this.i >= arr.length
    }
    this.i++;
    return result
  }
}

// 让迭代器不断的取出下一个数据,知道没有数据为止
let data = iterator.next();
while(!data.done) { // 只要没有迭代完成,则取出数据
  console.log(data.value);
  // 进行下一次迭代
  data = iterator.next();
}
console.log('迭代完成')