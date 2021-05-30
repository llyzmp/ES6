//1. 
// // const pro1 = new Promise((resolve,reject)=>{
// //   resolve(1);
// // })
// // 等效于:
// const pro2 = Promise.resolve(1);
// console.log(pro2)


// 2.
// const pro3 = new Promise((resolve,reject)=>{
// //   reject(1);
// // })
// // 等效于:
// const pro4 = Promise.reject(1);

// 3. 
const p = new Promise((resolve,reject)=>{
  resolve(3);
})
// const pro1 = new Promise((resolve,reject)=>{
//   resolve(p);
// })

const pro2 = Promise.resolve(p);
console.log(pro2 === p)
