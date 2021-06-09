class MyMap {
  constructor(iterable = []){
    // 1.验证是否是可迭代的对象
    if(typeof iterable[Symbol.iterator] !== "function") {
      throw new TypeError(`你提供的${iterable}不是一个可迭代的对象`)
    }
    // 6.保存数据
    this._datas = [];
    // 2.子级也要判断是否为一个可迭代对象
    for(const item of iterable) {
      // item也得到的是一个可迭代的对象
      if(typeof item[Symbol.iterator] !== 'function') {
        throw new TypeError(`你提供的${item}不是一个可迭代的对象`);
      }
      // 3.如果是一个可迭代的对象,调用这个函数得到一个迭代器
      const iterator = item[Symbol.iterator]();
      const key = iterator.next().value; // 取出迭代器的第一个值作为键
      const value = iterator.next().value; // 取出迭代器的第二个值作为值
      // 4.调用自身的set方法, 设置一个键值对,键和值可以是任何类型
      this.set(key,value)

    }


   
  }

  // 5.往集合中添加一项
  set(key,value) {
    // //7.如果数组中有这一项,就进行修改,转化为自身的has方法
    // if(this.has(key)){
    //   // 11.修改,通过key值从数组中查找到对应的对象,写个公用的辅助函数
    //   
      
    // }
    // 
    // 14.使用公共函数
    const obj = this._getObj(key);
    // 有值的话修改
    if(obj) {
      obj.value = value;
    }
    else {
      // 数组中没有这一项
       //6.添加一项
       this._datas.push({
        key,
        value
      })
    }
   
  }

  // 15. get方法
  get(key) {
    // 判断传入的键是否有该值
    const item = this._getObj(key);
    if(item){
      // 有的话返回值
      return item.value
    }
    return undefined
  }
  // 16.size获取当前map中键的数量
  size() {
    return this._datas.length;
  }
  // 17.传入键,删除
  delete(key) {
    for(let i=0; i < this._datas.length;i++) {
      const ele = this._datas[i];
      // 判断传入的key是否在数组中
      if(this.isEqual(key,ele.key)){
        // 在的话,删除
        this._datas.splice(i,1);
        return true
      }
    }
    return false
  }
  // 18.清空
  clear() {
    this._datas.length = 0;
  }
  /**
   * 12.辅助方法
   * @param {*} key 
   */
  _getObj(key) {
    for(const item of this._datas){
      if(this.isEqual(key,item.key)){
        return item;
      }
    }
    return undefined
  }


  // 8.判断数组中是否有这个键
  has(key) {
    // 13.替换用公共函数
    const item = this._getObj(key);
    return item !== undefined


    // for(const item of this._datas){
    //   // 9.判断两个数据是否相等,写个辅助函数
    //   if(this.isEqual(key,item.key)){
    //     // 找到了就返回true
    //     return true;
    //   }
    // }
    // // 否则返回false
    // return false
  }
  /**
   * 10.判断两个值是否相等
   * @param {*} data1 
   * @param {*} data2 
   * @returns 
   */
  isEqual(data1,data2) {
    // 和set一样,内部使用Object.is判断,但是Object.is判断+0和-0不相等
    // 所以单独写
    if(data1 === 0 && data2 === 0) {
      return true;
    }
    // 判断两个值是否相等
    return Object.is(data1,data2)
  }
  
    // 19.自身是可迭代的,返回一个迭代器,使用生成器来创建
    *[Symbol.iterator]() {
      for(const item of this._datas) {
        // 每次迭代返回数组的每一项
        yield [item.key,item.value]
      }
    }

    // 自身的forEach方法
    forEach(callback) {
      for(const item of this._datas){
        // 调用回调函数,第一项为值,第二项为键,第三项map本身
        callback(item.value,item.key,this);
      }
    }
}




// 测试
const mp1 = new MyMap([
  ['a',4],
  ['b',5],
  ['c',6],
]);
const obj = {};
mp1.set(obj,12312)
mp1.set('a',1)
mp1.set(obj,1231)

console.log(mp1)