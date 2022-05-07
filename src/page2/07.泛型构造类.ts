(() => {
  // 8.3 构造函数类型的应⽤

  interface Point {
    // new(x: number, y: number): Point;  // 这要解决这个问题，我们就需要把对前⾯定义的 Point 接⼝进⾏分离，即把接⼝的属性和构造函数类型进⾏分离
    x: number;
    y: number;
  }

  interface PointConstructor {
    new(x: number, y: number): Point;  // 使用到了 newPoint 中
  }

  class Point2D implements Point {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  function newPoint(
    pointConstructor: PointConstructor,
    x: number,
    y: number
  ): Point {
    return new pointConstructor(x, y);
  }


  const point: Point = newPoint(Point2D, 1,2)



  // 8.4 使⽤泛型创建对象
  class GenericCreator<T> {
    create<T>(c: {new (): T}): T {
      return new c()
    }
  }
  // 奇怪的操作

})()
