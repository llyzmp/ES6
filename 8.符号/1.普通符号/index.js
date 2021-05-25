// 创建一个符号
// const syb1 = Symbol();
// const syb2 = Symbol('123');
// console.log(syb1,syb2);  //Symbol() Symbol(123)

// console.log(typeof syb1, typeof syb2); //symbol symbol


// 对象内部的私有属性不被外部访问到

const hero = (function(){
  const getRandom = Symbol('xxx');  //独一无二的 ,外边调用不到获取随机数的方法

  return {
    attack: 30,
    hp: 300,
    defence: 10,
    gongji() {
      // 伤害: 攻击力*对技术(0.8-1.1)
      const dmg = this.attack * this[getRandom](0.8,1.1);
      console.log(dmg);
    },
    
    [getRandom](min,max) { // 根据最小值和最大值产生一个随机数
      return Math.random()*(max-min) + min;
    }
  }
})