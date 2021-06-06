
function *test() {
  console.log('第一次运行');
  yield 1;
  console.log('第二次运行');
  yield 2;
  console.log('第三次运行');
}


const generator = test();

// 只有调用generator.next()的时候才会运行,调用一次运行一次,值为yield后边的数据
