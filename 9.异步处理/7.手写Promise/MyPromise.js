const MyPromise = (()=>{
  const PENDING = 'pending',
  RESOLVED = 'resolve',
  REJECTED = 'rejected',
  PromiseValue = Symbol('PromiseValue'),  // 状态数据
  PromiseStatus = Symbol('PromiseStatus'), // 当前状态
  changeStatus = Symbol('changeStatus'); //当前状态

  return class MyPromise{
    /**
     * 改变当前Promise状态
     * @param {*} newStatus 
     * @param {*} newValue 
     */
    [changeStatus](newStatus,newValue) {
      // 状态必须从pending
      if(this[PromiseStatus] !== PENDING) {
        // 状态无法变更
        return;
      }
       //修改状态
       this[PromiseStatus] = newStatus;
       // 把值传进去
       this[PromiseValue] = newValue;
    }
    /**
     * 
     * @param {*} executor 未决阶段(pending状态)下的处理函数
     */
    constructor(executor) {
      this[PromiseStatus] = PENDING;
      this[PromiseValue] = undefined;
      // resolve函数
      const resolve = (data) => {
        this[changeStatus](RESOLVED,data);
      }
      // reject函数
      const reject = (reason) => {
        this[changeStatus](RESOLVED,reason);
      }


      // pending状态下的处理函数会立即执行,首先调用一遍
      // 有两个参数,一个是resolve,一个是reject
      // 过程中可能会抛出错误,抛出错误时,把状态改为rejected,并把错误值传出
      try {
        executor(resolve,reject)
      }
      catch(err) {
        // 过程中可能会抛出错误,抛出错误时,把状态改为rejected,并把错误值传出
        reject(err);
      }
    }
  
  }
})();