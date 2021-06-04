"use strict"   //加上严格模式,arguments和形参脱离

function test(a,b) {
  console.log('arguments',arguments[0],arguments[1]); // arguments 1 2
  console.log('a:',a,"b:",b);  // a: 1 b: 2
  a = 3;
  console.log('arguments',arguments[0],arguments[1]) // arguments 3 2  // 严格模式下输出 1 2
  console.log('a:',a,"b:",b); // a: 3 b: 2    /
}
test(1, 2)

// function test1(a=b,b) {
//   console.log(a,b);
// }
// test1(undefined,2);