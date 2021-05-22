function getValues() {
  const newArr = [];
  const inps = document.querySelectorAll('input');
  inps.forEach(ele => {
    newArr.push(+ele.value);
  })
  return newArr;
}

console.log('number',getValues())

const btn = document.querySelector('button');

btn.onclick = function() {
  const numbers = getValues(); // 获取文本框中的数字形成的数组
  spanmax.innerHTML = Math.max(...numbers);
  spanmin.innerHTML = Math.min(...numbers);
}