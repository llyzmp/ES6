// 存在问题
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = `${firstName}${lastName}`
// }

// const p1 = new Person('小', '李');
// console.log(p1); // Person { firstName: '小', lastName: '李', fullName: '小李' }

// const p2 = Person('小','李');
// console.log(p2);  //undefined



function Person(firstName, lastName) {
  // 判断是否使用new的方式来调用的函数
  // // 过去的方式
  // if(!(this instanceof Person)) {
  //   throw new Error('该函数没有使用new来调用')
  // }

  console.log(new.target);
  if(new.target === undefined) {
    throw new Error('该函数没有使用new来调用')
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${firstName}${lastName}`
}

const p1 = new Person('小', '李');
console.log(p1); //

const p2 = Person('小','李');
console.log(p2);  //
