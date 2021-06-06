function *task() {
  const d = yield 1;
  console.log(d);
  // d:1
  const res = yield fetch('http://www.baidu.com/')
  const result = yield res.json();
  console.log(result)
}

run(task)


// 实现run函数

function run(generatorFunc) {
  const generator = generatorFunc();
  let result = generator.next(); // 启动任务(开始迭代)
  handleResult();
  // 对result进行处理
  function handleResult() { 
    if(result.done) {
      return;  //迭代完成,不处理
    }
    // 迭代没有完成,分为两种情况
    // 1.迭代的数据是一个Promise
    // 2. 迭代的数据是其他数据
    if(typeof result.value.then === 'function') {
      // 1.迭代的数据是一个Promise
      // 等待Promise完成后,在进行下一次迭代
      result.value.then(data => {
        result = generator.next(data)
        handleResult()
      },err => {
        result = generator.throw(err)
        handleResult();
      })
    }else {
      // 2. 迭代的数据是其他数据,直接进行下一次迭代
      result = generator.next(result.value);
      handleResult()
    }
   }

}