(() => {
  // & 运算符
  // & 运算符可以将现有的多种类型叠加到⼀起成为⼀种类型，它包含了所需的所有类型的特性。

  // & 并集

  type PartialPointX = { x: number }

  type Point = PartialPointX & { y: number }

  let point: Point = {
    x: 123,
    y: 456
  }


  // 5.1 同名基础类型属性的合并

  interface X {
    c: string;
    d: string;
  }
  interface Y {
    c: number;
    e: string
  }

  type XY = X & Y;   //  c 会转为 c: string & number, 此时c是nerve类型;  
  type YX = Y & X;

  let p: XY;
  let q: YX;

  // p = { c: 6, d: "d", e: "e" };  // c 的类型为 never
  // q = { c: "c", d: "d", e: "e" };

  // 总结: 两个接口使用 & 并集合并后,  具有相同的属性名,  类型会转为 never 类型
  /**
   * 为什么接⼝ X 和接⼝ Y 混⼊后，成员 c 的类型会变成 never 呢？这是因为混⼊后成员 c 的类型为
    string & number ，即成员 c 的类型既可以是 string 类型⼜可以是 number 类型。
   */


  // 5.2 同名⾮基础类型属性的合并
  interface D { d: boolean; }
  interface E { e: string; }
  interface F { f: number; } 

  interface A {x: D}
  interface B {x: E}
  interface C {x: F}

  type ABC = A & B & C; //  x : {}  合并了 DEF 接口的类型值
  const abc: ABC = {
    x: {
      d: true,
      e: 'test',
      f: 123
    }
  }

  console.log('abc:', abc);

})()
