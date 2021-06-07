// 两个数组的并集,交集,差集(不能出现重复项),得到的结果是新数组

const arr1 = [1,2,3,4,3,2,4,5,6,7,8,55,11,66]
const arr2 = [11,8,4,3,22,33,22,55,66,77,55,88];

// 并集
const result = [...new Set(arr1.concat(arr2))];
console.log('并集',result);


// 交集

console.log('交集',[...new Set(arr1)].filter(item=>arr2.indexOf(item)>=0))

// 差集
console.log('差集',[...new Set(arr1.concat(arr2))].filter(item=>arr1.indexOf(item)>=0 && arr2.indexOf(item)<0))


