function Animal(type, name, age, sex) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex;
}

Animal.prototype.print = function () {
  console.log(`种类:${this.type}`);
  console.log(`名字: ${this.name}`);
  console.log(`年龄:${this.age}`);
  console.log( `性别: ${this.sex}`);
}


function Dog(name, age, sex) {
  Animal.call(this,'犬类',name,age,sex);

}
// 上边的call方法指向Animal后,new Dog()创建一个对象,Animal的原型方法还不能使用
// 把Dog的隐式原型指向Animal的原型，就可以使用了,形成继承,狗继承动物的所有属性和方法

// 把Dog.prototype的隐式原型__proto__ 设置为Animal.prototype
Object.setPrototypeOf(Dog.prototype,Animal.prototype);


const d = new Dog('大黄',5,'公')

console.log(d)