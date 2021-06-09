
//

const mp1 = new Map([["a",3],["b",4],["c",5]])

console.log('mp1',mp1)  //{ 'a' => 3, 'b' => 4, 'c' => 5 }


mp1.set({},1234);
mp1.set('a','abc');
mp1.set({},111);

console.log('总数',mp1.size); // 5


