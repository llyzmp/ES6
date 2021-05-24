// 数组结构
const number = ['a','b','c','d',[1,2,3,4]];

// // 根据下标结构
// const { 0: n1, 1: n2 } = number;
// console.log(n1,n2)

// 按照数组顺序,依次赋值给n1,n2
// let n1, n2;
// ([n1,n2] = number);
// console.log(n1,n2);

// 另一种方式
const [n1,,,n4,[,,n],n6=123] = number;
console.log(n1,n4,n,n6);  // a d 3 123