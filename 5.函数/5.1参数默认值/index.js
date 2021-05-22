// "use strict"   //加上严格模式,arguments和形参脱离

// function test(a,b) {
//   console.log('arguments',arguments[0],arguments[1])
//   console.log('a:',a,"b:",b);
//   a = 3;
//   console.log('arguments',arguments[0],arguments[1])
//   console.log('a:',a,"b:",b);
// }


// test(1, 2)

function test1(a=b,b) {
  console.log(a,b);
}
test1(undefined,2);