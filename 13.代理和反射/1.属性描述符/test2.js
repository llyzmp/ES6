const obj= {
  b: 2
}


Object.defineProperty(obj, 'a',{
  // 获取obj.a时调用get
  get() {
    console.log('运行了属性a的get函数')
  },
  // 给a赋值时,赋的值作为为set的参数
  set(val) {
    console.log('运行了属性a的set函数',val);
  }
})