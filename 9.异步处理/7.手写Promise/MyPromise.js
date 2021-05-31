/**
 * 写到后续处理
 */
const MyPromise = (()=>{
  const PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected',
  PromiseValue = Symbol('PromiseValue'),  // 状态数据
  PromiseStatus = Symbol('PromiseStatus'), // 当前状态
  changeStatus = Symbol('changeStatus'), //当前状态
  thenables = Symbol('thenables'),  // thenable
  catchables = Symbol('catchables'), // catchable
  settleHandle = Symbol('settleHandle'); // 后续处理提取公共函数
  return class MyPromise{
    /**
     * 改变当前Promise状态
     * @param {*} newStatus 
     * @param {*} newValue 
     * @param {*} queue   // 执行的作业队列,写完后续函数后添加的参数
     */
    [changeStatus](newStatus,newValue, queue) {
      // 状态必须从pending
      if(this[PromiseStatus] !== PENDING) {
        // 状态无法变更
        return;
      }
       //修改状态
       this[PromiseStatus] = newStatus;
       // 把值传进去
       this[PromiseValue] = newValue;

       // 当状态从pending变更时,需要执行相应队列中的函数, handle是队列中的函数
      queue.forEach(handle => handle(newValue));
    }

    /**
     * 
     * @param {*} executor 未决阶段(pending状态)下的处理函数
     */
    constructor(executor) {
      this[PromiseStatus] = PENDING;
      this[PromiseValue] = undefined;
      this[thenables] = []; // 后续处理函数的数组 -> resolved
      this[catchables] = []; // 后续处理函数的数组 -> rejected

      // resolve函数
      const resolve = (data) => {
        // 状态值,数据,队列
        this[changeStatus](RESOLVED,data, this[thenables]);
      }
      // reject函数
      const reject = (reason) => {
        // 状态值,数据,队列
        this[changeStatus](REJECTED,reason,this[catchables]);
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
    // 内部方法
    /**
     * 处理,后续处理公共函数
     * @param {*} handle 后续处理函数
     * @param {*} immediatelyStatus 需要立即执行的状态
     * @param {*} queue 作业队列
     */
    [settleHandle](handle,immediatelyStatus,queue) {
      // 如果handle不是函数时,return
      if(typeof handle !== 'function') {
        return;
      }
       // 运行时判断是否为resolved或者rejected,是的话直接运行传入的函数handle
       if(this[PromiseStatus] === immediatelyStatus) {
        // 把值传进去,值为this[PromiseValue]
        // 异步处理应该放到微队列,浏览器环境不能,模拟一个异步队列(宏队列),加个定时器
        setTimeout(()=>{
          handle(this[PromiseValue]);
        },0)
      }else {
        queue.push(handle)
      }
    }
    // then方法
    then(thenable,catchable) {
     this[settleHandle](thenable,RESOLVED,this[thenables]);
     this.catch(catchable);
    }
    // catch方法
    catch(catchable) {
      this[settleHandle](catchable,REJECTED,this[catchables]);
    }

  
  }
})();