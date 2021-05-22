class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  print() {
    console.log(`种类:${this.type}`);
    console.log(`名字: ${this.name}`);
    console.log(`年龄:${this.age}`);
    console.log( `性别: ${this.sex}`);
  }
}

class Dog extends Animal {
  constructor(name, age, sex) {
    // 直接当做函数调用,表示父类的构造函数
    super('犬类',name,age,sex);
    // 子类特有的属性
    this.a = 123;
    this.love = '吃骨头'
  }
  // 子类特有的方法
  jiao() {
    console.log('旺旺');
  }
  print() {
    // super当做对象使用,代表父类的原型,这里调用了父类的print方法
    super.print();
    //自己特有的代码
    console.log( `爱好:${this.love}`)
  }
}


const d = new Dog('小白',5,'公')