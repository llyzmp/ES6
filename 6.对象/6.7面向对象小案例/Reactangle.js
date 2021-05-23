/**
 * 矩形类,可以移动
 * 属性: 宽度,高度,横坐标,纵坐标,横向速度,纵向速度,对应的DOM对象
 * xSpeed: 横向速度, 单位(像素/秒) 正数向右,负数向左
 * ySpeed: 纵向速度, 单位(像素/秒) 正数向下,负数向上
 */
class Reactangle {
  constructor(width, height, left, top, xSpeed, ySpeed, dom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.dom = dom;
  }
  // 各个矩形的形状
  render() {
    this.dom.style.width = this.width + 'px';
    this.dom.style.height = this.height + 'px';
    this.dom.style.left = this.left + 'px';
    this.dom.style.top = this.top +  'px';
  }
  /**
   * 按照矩形的速度,和指定的时间,移动矩形
   * @param {*} duration 单位: 秒
   */
  move(duration) {
    const xDis = this.xSpeed * duration; //横向距离
    const yDis = this.ySpeed * duration; //纵向距离
    const newLeft = this.left + xDis;
    const newTop = this.top + yDis;
    // 新的距离赋值
    this.left = newLeft;
    this.top = newTop;

    // 可能会发生一些事
    // 判断子类中是否有onMove这个方法
    if(this.onMove) { 
      // 存在的话调用一下, 每次移动后,渲染前,均会调用该方法
      this.onMove();
    }

    // 重新渲染
    this.render();
  }
}

