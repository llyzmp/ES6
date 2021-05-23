//  水管类 和水管对
// 水管是成对出现的
const gameWidth = gameDom.clientWidth;

class Pipe extends Reactangle {
  // speed和大地速度一致,到时候直接传值
  constructor(height, top,speed,dom) {
    super(52,height,gameWidth,top,speed,0,dom);
  }


  //  水管移动到左边时要移除dom
  onMove() {
    if(this.left < -this.width) {
      // 移除dom
      this.dom.remove();
    }
  }
}

// 辅助函数随机数
function getRandom(min,max) {
  return Math.floor(Math.random()*(max-min)+min);
}

//  水管对
class PipePare {
  constructor(speed) {
    // 空隙位置的高度固定的150
    this.spaceHeight = 150; 
    this.minHeight = 80; // 水管最小高度
    // 最大高度 = 大地高度 - 最小高度 - 空隙高f度
    this.maxHeight = landTop - this.minHeight - this.spaceHeight;
    const upHeight = getRandom(this.minHeight,this.maxHeight);

    const upDom = document.createElement('div');
    upDom.className = 'pipe up';

    this.upPipe = new Pipe(upHeight,0,speed,upDom); // 上水管
    // 确定上高度,下高度就计算出来了
    const downHeight = landTop - upHeight - this.spaceHeight;
    const downTop = landTop - downHeight;

    const downDom = document.createElement('div');
    upDom.className = 'pipe down';
    this.downPipe = new Pipe(downHeight,downTop,speed,downDom);// 下水管

    gameDom.appendChild(upDom);
    gameDom.appendChild(downDom);
  }
  // 该柱子对是否已经移出了视野
  get useLess() {
    return this.upPipe.left < -this.upPipe.width;
  }
  // 柱子移动方法
  move(duration) {
    this.upPipe.move(duration)
    this.downPipe.move(duration)
  }
}
/**
 * 用于不断产生柱子对
 */
class PipePareProducer {
  constructor(speed) {
    this.speed = speed;
    this.pairs = [];
    this.timer = null;
    this.tick = 500;
  }
  // 开始产生
  startProduce() {
    if(this.timer) {
      return;
    }
    this.timer = setInterval(()=> {
      this.pairs.push(new PipePare(this.speed));
      // 移除掉用不到的
      for(let i = 0; i < this.pairs.length; i++) {
        var pair = this.pairs[i];
        if(pair.useLess) {
          // 没用的柱子
          this.pairs.splice(i,1);
          i--;
        }
      }
    },this.tick)
  }
  stopProduce() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
