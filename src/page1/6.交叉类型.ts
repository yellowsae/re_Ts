(() => {
  // 通过 & 运算符可以将现有的多种类型叠加到
  // ⼀起成为⼀种类型，它包含了所需的所有类型的特性。

  type PartialPointX = {
    x: number;
  }

  type Point = PartialPointX & { y: number; }  // 表示交叉类型

  let point: Point = {
    x: 1,
    y: 123
  }


  // 6.1 同名基础类型属性的合并
  interface X {
    c: string;  // 这里 string
    d: string;
  }

  interface Y {
    c: number;  // 这里   number
    e: string;
  }
  type XY = X & Y;  // 交叉类型
  type YX = Y & X;

  let p: XY;
  let q: YX;

  // p = { c: 6, d: "d", e: "e" };  // Error

  // q = { c: "c", d: "d", e: "e" };  // Error   c 为 never 类型

  // c 的类型变为了  string & number， 然而没有这种类型， 所以 c 的类型被转为 never 类型
  /**
   * 为什么接⼝ X 和接⼝ Y 混⼊后，成员 c 的类型会变成 never 呢？这是因为混⼊后成员 c 的类型为
   * string & number ，即成员 c 的类型既可以是 string 类型⼜可以是 number 类型。很明显这种类型
   * 是不存在的，所以混⼊后成员 c 的类型为 never 。
   */

  //  6.2 同名⾮基础类型属性的合并

  interface D { d: boolean; }
  interface E { e: string; }
  interface F { f: number; }


  interface A { x: D; }  // 合并
  interface B { x: E; }
  interface C { x: F; }

  type ABC = A & B & C;

  let abc: ABC = {
    x: {
      d: true,
      e: 'false',
      f: 123
    }
  }

  console.log('abc:', abc);

  // 在混⼊多个类型时，若存在相同的成员，且成员类型为⾮基本数据类型，那么是可以成功合并。



})()
