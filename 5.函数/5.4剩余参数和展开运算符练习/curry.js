

function cal(a,b,c,d) {
  return a + b*c -d;
}
// curry: 柯理化,用户固定某个函数的前面的参数,得到一个新的函数,新的韩束调用时,接收剩余参数
function curry(func,...args) {
  return function (...subargs) {
    const allArgs = [...args,...subargs];
    // 参数够了
    if(allArgs.length >= func.length) {
      return func(...allArgs);
    }else {
      // 参数不够,继续固定
      return curry(func,...allArgs);
    }
  }
}
const newCal = curry(cal,1,2)
console.log(newCal(3,4)) // 1+2*3-4  curry(cal,1,2)(3,4)
console.log(newCal(4,5)) // 1+2*4-5
console.log(newCal(5,6)) // 1+2*5-6
console.log(newCal(7,8)) // 1+2*7-8

const newCal2 = newCal(9);

console.log(newCal2(10)); //1+2*9-10 curry(cal,1,2)(9)(10)
