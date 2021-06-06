
// 依次得到斐波那契数列前面n位的值
// 1 1 2 3 5 8 13 ...

// 创建一个斐波那契数列的迭代器
function *createFeiboIterator() {
  let prev1=1, prev2=1,n=1;   // 当前位置的前1位和前2位
  while(true) {
    if(n<=2){
      yield 1;
    }else {
      const newValue = prev1 + prev2
      yield newValue;
      prev2 = prev1;
      prev1 = newValue;
    }
    i++
  }
}

const iterator = createInterator();