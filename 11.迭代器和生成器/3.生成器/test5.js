function *test() {
  let info = yield 1;    //调用test().next(6)   传递的6会作为参数给info
  console.log(info);
  info = yield 2 + info;  // 调用test().next(), 不传参时, info为undefined
  console.log(info);
}