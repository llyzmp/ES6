const obj = {
  name: '123'
}

Object.defineProperty(obj,'age',{
  get() {
    return obj._age
  },
  set(val) {
    // 在此做一些判断
    if(typeof val !== 'number') {
      throw new TypeError('年龄必须是一个数字')
    }
    if(val < 0) {
      val = 0;
    }else if(val > 200) {
      val = 200;
    }
    obj._age = val
  }
})

obj.age = 250;

console.log('age',obj.age)

