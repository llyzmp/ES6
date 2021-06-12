const obj ={
  a:1,
  b:2
}


const proxy = new Proxy(obj,{
  // 目标对象,对象中的属性,属性值,代理本身
  set(target,propertyKey,value,receiver) {
    // 给目标值设置的时候会调用
    // console.log(target,propertyKey,value,receiver);
    // 1. 给目标值赋值
    // target[propertyKey] = value;

    // 2.给目标值赋值(使用Reflect)
    Reflect.set(target,propertyKey,value)
  },
  get(target,propertyKey) {
    if(Reflect.has(target,propertyKey)) {
      return Reflect.get(target,propertyKey);
    }else {
      return undefined
    }
  }

})

// proxy.a = 10;
// console.log(proxy.a)

// 调用一个不存在的值,返回undefined(自己定义的,灵活随意定义,想返回什么都可以)
console.log(proxy.d)