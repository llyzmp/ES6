// 迭代器案例
// 依次得到斐波那契数列前面n位的值
// 1 1 2 3 5 8 13 ...

// 创建一个斐波那契数列的迭代器
function createFeiboIterator() {
  let prev1=1, prev2=1,n=1;   // 当前位置的前1位和前2位
  return {
    next() {
      let value;
      if(n<=2){
        value = 1;
      }else {
        value = prev1 + prev2
      }
      const result = {
        value,
        done: false    // 斐波那契数列永远不会结束
      }
      // 赋值新的值
      prev2 = prev1;
      prev1 = result.value;
      n++;
      return result
    }
  }
}