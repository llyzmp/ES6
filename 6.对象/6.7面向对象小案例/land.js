// 获取大地的dom对象
const landDom = document.querySelector('.land');
// 获取dom元素的样式
const landStyles = getComputedStyle(landDom);
// 拿到大地的宽度和高度
const landWidth = parseFloat(landStyles.width);
const landHeight = parseFloat(landStyles.height);
const landTop = parseFloat(landStyles.top)

// 大地类, 继承父类(矩形类)
class Land extends Reactangle {
  // speed和水管的要一致,到时候直接传值
  constructor(speed) {
    super(landWidth,landHeight,0,landTop,speed,0,skyDom) ;
  }

  onMove() {
    // 大地背景移动的临界值,之前天空设置的是游戏面板的二倍
    if(this.left <= -landWidth / 2) {
      this.left = 0;
    }
  }
}