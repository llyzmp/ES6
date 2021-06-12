
function sum(a,b) {
  return a+b
}

// 通用的验证
function validatorFunction(func,...types) {

  const proxy = new Proxy(func,{
    apply(target,thisArgument,argumentsList) {
      types.forEach((t,i)=>{
        const arg = argumentsList[i];
        // 判断类型是否正确
        if(typeof arg !== t) {
          throw new TypeError(`第${i+1}参数${argumentsList[i]}不满足类型${t}`)
        }
      })
      Reflect.apply(target,thisArgument,argumentsList)

    }
  })

  return proxy

}



const sumProxy = validatorFunction(sum,'number','number')

console.log(sumProxy('1','2'))


