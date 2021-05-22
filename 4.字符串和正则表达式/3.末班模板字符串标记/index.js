var name1 = '小王';
var name2 = '小白';

var text = myTag`第一个名字${name1},第二个名字${name2}`;

function myTag(parts) {
  const values = Array.prototype.slice.apply(arguments).slice(1);
  let str = '';
  for(let i = 0; i < values.length; i++) {
    str += `${parts[i]}${values[i]}`;
    if(i === values.length - 1) {
      str += parts[i + 1];
    }
  }
  return str;
}

console.log(text);