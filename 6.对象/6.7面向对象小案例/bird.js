// 获取小鸟的dom对象
const birdDom = document.querySelector('.bird');
// 获取dom元素的样式
const birdStyles = getComputedStyle(birdDom);
// 拿到小鸟的宽度和高度
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top)
const birdLeft = parseFloat(birdStyles.left)
const gameDom = document.querySelector('.game');

const gameHeight = gameDom.clientHeight;





//  小鸟有自己的属性, 加速度
class Bird extends Reactangle {
  constructor() {
    super(birdWidth,birdHeight,birdLeft,birdTop,0,0,birdDom);
    // 加速度, 通过加速度来改变速度进而小鸟进行了移动, 横坐标不会动
    this.g = 1500; // 向下的加速的, 单位:像素/毫秒²
    // 最大的y坐标 游戏面板高度 - 大地高度 - 小鸟自身高度
    this.maxY = gameHeight - landHeight - this.height;

    // 小鸟翅膀的状态
    this.swingStatus = 1;  
    // 翅膀煽动的计时器
    this.timer = null; 
  }
  render() {
    super.render(); // 重用父类的渲染逻辑
    this.dom.className = `bird swing ${this.swingStatus}`;
  }
  // 开始煽动翅膀
  startSwing() {
    if(this.timer) {
      return
    }
    this.timer = setInterval(() => {
      this.swingStatus++;
      if(this.swingStatus === 4) {
        this.swingStatus = 1;
      }
      this.render();
    },300)
  }
  // 停止煽动翅膀
  stopSwing() {
    clearInterval(this.timer);
    this.timer = null;
  }

  move(duration) {
    super.move(duration); //调用父类的move方法
    // 根据加速度改变速度
    this.ySpeed += this.g * duration;
  }

  onMove() {
    // 控制鸟坐标范围
    if(this.top < 0) {
      this.top = 0;
    }else if (this.top > this.maxY) {
      this.top = this.maxY;
    }
  }

  // 向上跳 ,直接给一个向上的速度
  jump() {
    this.ySpeed = -550;
  }
}


