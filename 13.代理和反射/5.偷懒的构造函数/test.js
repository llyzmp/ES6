
class User {
  // 每次写一堆这些代码,麻烦
  // constructor(firstName,lastName,age){
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  // }
} 


// 通用的
function ConstructorProxy(Class,...propNames) {
  // 给类创建一个代理
  return new Proxy(Class,{
    // 有一个底层construct的方法
    construct(target,argumentsList) {
      const obj = Reflect.construct(target,argumentsList)
      propNames.forEach((name,i) => {
        obj[name] = argumentsList[i];
      })
      return obj
    }
  })
}

const UserProxy = ConstructorProxy(User,'firstName','lastName','age');

const obj = new UserProxy('李','小明',20)

console.log('obj',obj)