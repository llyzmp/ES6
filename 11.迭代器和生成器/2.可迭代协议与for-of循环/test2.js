const arr = [1,2,3,4,5,6];  // 数组的隐式原型有一个Symbol.iterator符号属性

const iterator = arr[Symbol.iterator]();
console.log('iterator',iterator);
let result = iterator.next();
while(!result.done) {
  const item = result.value;  // 取出数据
  console.log(item);
  result = iterator.next();
}

// 相当于下边for-of代码
for(const item of arr) {
  console.log(item);
}