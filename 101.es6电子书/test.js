// let obj = {
//   p: [ 'Hello', {y: 'World'} ]
// }

// let { p,p: [x, { y }]} = obj;
// console.log('aaa',p,x,y);



// var node = {
//   loc: { start: { line: 1, column: 5 } }
// }
// var { loc, loc: { start }, loc: { start: { line }}} = node;
// console.log('我是loc:', loc);
// console.log('我是start:', start);
// console.log('我是line:', line);

// let obj = {};
// let arr = [];

// ({ foo: obj.prop, bar: arr[0]} = { foo: 123, bar: true})

// console.log('我是obj', obj);
// console.log('我是arr', arr);

// var { x: y = 40 } = { x: 50 };

// console.log('yyy',y)


// let { foo } = { baz: 'baz'};

// console.log('foo',foo);


let  {foo:  {bar}}  =  {baz : ' baz' } ;

console.log('foo',foo)