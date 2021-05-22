const obj1 = {
  name: '小明',
  age: 18,
  love: '吃',
  address: {
    country: '中国',
    provice: '浙江',
    city: '杭州'
  }
}

// 浅克隆到obj2
const obj2 = {
  ...obj1,
  name: '小王'  // 可以覆盖上边的小明
}

console.log(obj2);

console.log(obj1.address === obj2.address); // true,浅克隆