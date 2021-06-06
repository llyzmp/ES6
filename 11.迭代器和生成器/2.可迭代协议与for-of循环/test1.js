// 可迭代对象
let obj = {
  a:1,
  b:2,
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let i = 0;
    return {
      next: () =>{
        const propName = keys[i];
        const propValue = this[propName];
        const result = {
          value: {
            propName,
            propValue
          },
          done: i>=keys.length
        }
        i++;
        return result;
      }
    }
  }
}


for(const item of obj) {
  console.log(item);
}