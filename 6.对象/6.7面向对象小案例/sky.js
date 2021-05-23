// 获取天空的dom对象
const skyDom = document.querySelector('.sky');
// 获取dom元素的样式
const skyStyles = getComputedStyle(skyDom);
// 拿到天空的宽度和高度
const skyWidth = parseFloat(skyStyles.width);
const skyHeight = parseFloat(skyStyles.height);


// 天空类, 继承父类(矩形类)
class Sky extends Reactangle {
  constructor() {
    super(skyWidth,skyHeight,0,0,-50,0,skyDom) ;
  }

  onMove() {
    // 天空背景移动的临界值,之前天空设置的是游戏面板的二倍
    if(this.left <= -skyWidth / 2) {
      this.left = 0;
    }
  }
}