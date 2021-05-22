// // 1. 允许重复的变量声明: 导致数据被覆盖

var a = 1;

function print() {
  console.log(a);
}

// 假设有一千行代码

// 可能忘记上边声明的变量名字

var a = 2;

print(); // a=2




// // 2. 变量提升, 怪异的数据访问
// 不小于0.5时,打印两个undefuned,小于0.5时,打印两个aaa,  变量会提升
if(Math.random() < 0.5) {
  var a = 'aaa';
  console.timeLog(a);
}else {
  console.log(a);
}
console.log(a);

// 2.变量提升, 闭包问题

var div = document.getElementById('divButtons');
for(var i = 1; i <= 10; i++) {
  var btn = document.createElement('button');
  btn.innerHTML = '按钮' + i;
  div.appendChild(btn);
  btn.onclick = function() {
    console.log(i);
  }
}
// 循环结束后, i:11
