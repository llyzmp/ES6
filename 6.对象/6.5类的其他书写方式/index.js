// 类
class Animal {
  constructor(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.setAge(age);
    this.sex = sex;
  }
  setAge(age) {
    if(typeof age !== 'number') {
      throw new TypeError('age property must be a number');
    }
    if(age < 0) {
      age = 0;
    }else if(age > 1000) {
      age === 1000
    }
    this._age = age;
  }
  getAge(){
    return this._age + '岁';
  }

  print() {
    console.log(`种类: ${this.type}`);
    console.log(`名字: ${this.name}`);
    console.log(`年龄: ${this.age}`);
    console.log(`性别: ${this.sex}`);
  }
}

const a = new Animal('狗','小白',5,'男')
a.print();
