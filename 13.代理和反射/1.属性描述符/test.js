const obj = {
  a:1,
  b:2
}
// const desc = Object.getOwnPropertyDescriptor(obj,'a');
// console.log(desc);  //{ value: 1, writable: true, enumerable: true, configurable: true }

// 使用Object.defineProperty对obj进行设置
Object.defineProperty(obj,'a',{
  value: 3,
  configurable: false,  //不能修改属性描述符
  enumerable: false,   // 不能枚举,遍历对象得不到a,并且还会影响Object.keys(obj)拿不到a属性,影响到Object.values(obj)拿不到属性值
  writable: false   // 属性不能被赋值
})


const desc = Object.getOwnPropertyDescriptor(obj,'a');
console.log(desc);  



// // 多个设置的写法

// Object.defineProperties(obj,{
//   a:{
//     value: 3,
//     configurable: false,
//     enumerable: false,
//     writable: false
//   },
//   b: {

//   }
// })