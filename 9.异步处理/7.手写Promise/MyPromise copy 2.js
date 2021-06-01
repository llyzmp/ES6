/**
 * 在后续处理,链式编程基础上添加静态方法
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
  settleHandle = Symbol('settleHandle'), // 后续处理提取公共函数
  linkPromise = Symbol('linkPromise'); // 串联的promise
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
    /**
     * 创建promise
     * @returns 
     */
    [linkPromise](thenable,catchable) {
      // 辅助函数
      function exec(data,handler,resolve,reject) {
        try {
          const result = handler(data); //得到当前Promise的处理结果
          // 特殊情况,如果返回是promise
          if(result instanceof MyPromise){
            result.then(d => {
              resolve(d); // 你成功我就成功
            },err=>{
              reject(err); //你失败我就失败
            })
          }else {
            resolve(result);
          }
         }
         catch(err) {
          //  异常的话状态修改为rejected
          reject(err)
         }
      }
      // thenable和catchable这两个函数调用的话，要么执行,要么进队列
      // 这两个函数调用,改变resolve或reject状态
      return new MyPromise((resolve,reject)=>{
        // 
        this[settleHandle](data => {
          exec(data,thenable,resolve,reject)
        },RESOLVED,this[thenables]);

        this[settleHandle](err => {
          exec(err,catchable,resolve,reject)
         
        },REJECTED,this[catchables]);
      })
    }
    
    // then方法
    then(thenable,catchable) {
      // 调用完then要返回一个新的promise,如果then执行异常把状态标记为reject,执行成功的话标记为resolved,给返回的promise还可以调用
     return this[linkPromise](thenable,catchable);
    }
    // catch方法
    catch(catchable) {
      // 调用完catch要返回一个新的promise
      return this[linkPromise](undefined,catchable);
    }
    // 当所有promise全都完成
    static all(proms) {
      return new MyPromise((resolve,reject)=>{
        // 定义一个数组来标记promise是否完成
        const results = proms.map(p=>{
          const obj = {
            result: undefined,  //用来存放完成的结果
            isResolved: false // 标记是否完成,初始值为false
          }
          p.then(data => {
            obj.result = data;   // 完成后存放数据
            obj.isResolved = true // 完成后把状态改为true
            // 判断是否全部完成
            const unResolved = results.filter(r => !r.isResolved)
            if(unResolved.length === 0) {
              // 全部完成,拿到所有的结果
              resolve(results.map(r => r.result))
            }
          },reason=>{
            // 只要有一个失败就reject
            reject(reason);
          })
          return obj;
        })
      })
    }
    static race(proms) {
      return new MyPromise((resolve,reject)=>{
        proms.forEach(p => {
          p.then(data => {
            resolve(data)
          },err=>{
            reject(err);
          })
        })
      })
    }
    // 静态resolve方法
    static resolve(data) {
      // 判断data是不是promise
      if(data instanceof MyPromise) {
        //是的话直接返回
        return data;
      }else {
        return new MyPromise(resolve => {
          resolve(data);
        })
      }
    }
    // 静态reject方法
    static reject(data) {
      return new MyPromise((resolve,reject) => {
        reject(data);
      })
    }
  }
})();