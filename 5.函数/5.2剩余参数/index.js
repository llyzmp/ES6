// 1. 原始写法
// function sum() {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sum(1));
// console.log(sum(1,2));
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5));


// 2. 剩余参数
function sum(...args) {
  // args收集所有的参数,形成的一个数组
  console.log('args:', args);
  let sum = 0;
  for(let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));