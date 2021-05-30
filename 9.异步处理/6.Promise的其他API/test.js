const pro = new Promise((resolve,reject) => {
  resolve(1);
})

pro.then(res => console.log('then1',res * 1));
pro.then(res => console.log('then2',res * 2));
pro.catch(res => console.log('catch1',res * 1));
pro.catch(res => console.log('catch2',res * 2));
pro.finally(()=> console.log('finally1')); // 没有参数
pro.finally(()=> console.log('finally2'));