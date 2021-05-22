// 求和
function sum(...args) {
  let sum = 0;
  for(let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
/**
 * 获取一个指定长度的随机数组成的数组
 * @param {*} length 
 */
function getRandomNumbers(length) {
  let ele = [];
  for(let i = 0; i < length; i++) {
    ele.push(Math.random());
  }
  return ele;
}

const numbers = getRandomNumbers(10);

console.log(numbers)

// 求和numbers
// sum(numbers)    这种传整个数组是不行的

// 将数组的每一项展开,依次作为参数传进去,而不是把整个数组作为一个参数传递
console.log(sum(...numbers)) // 相当于传了10个参数

