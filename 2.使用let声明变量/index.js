
var div = document.getElementById('divButtons');
for(var i = 1; i <= 10; i++) {
  var button = document.createElement('button');
  button.innerHTML = '按钮';
  button.onclick = function () {
    console.log('i',i); // 打印的都是11,  把上边的var改成let就OK了
  }
  div.appendChild(button);
}