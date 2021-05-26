// function A() {
// }
// const  obj = new A();
// console.log(obj instanceof A); // true
// // 相当于
// console.log(A[Symbol.hasInstance](obj));  // true


// 这样就可以自定义操作了
// 想改为false

function A() {

}
// 可以手动改写
Object.defineProperty(A, Symbol.hasInstance, {
  value: function(obj) {
    return false
  }
})
const obj = new A();
console.log(obj instanceof A); // false
console.log(A[Symbol.hasInstance](obj));//false