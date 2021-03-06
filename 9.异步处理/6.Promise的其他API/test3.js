// 随机函数
function getRandom(min,max) {
  return Math.floor(Math.random()*(max - min) + min);
}

const proms = [];
for(let i = 0; i < 10; i++) {
  proms.push(new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log(i,'完成')
      resolve(i);
    },getRandom(1000,5000))
  }))
}

// 等到所有的promise变成resolve状态后输出: 全部完成
const pro = Promise.all(proms);
pro.then(datas => {
  console.log('全部完成',datas);
})
console.log(proms);