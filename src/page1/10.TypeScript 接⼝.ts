(() => {
  /**
   * 在⾯向对象语⾔中，接⼝是⼀个很重要的概念，它是对⾏为的抽象，⽽具体如何⾏动需要由类去实现。
    TypeScript 中的接⼝是⼀个⾮常灵活的概念，除了可⽤于对类的⼀部分⾏为进⾏抽象以外，也常⽤于对
    「对象的形状（Shape）」进⾏描述。
   */

  // 10.1 对象的形状
  interface Person {
    name: string;
    age: number;
  }

  let semlinker: Person = {
    name: 'Yellowsea',
    age: 123
  }

  // 10.2 可选 | 只读属性

  interface PersonB {
    readonly name: string;  // 可读
    age?: number;  // 可选
  }

  let NewTest: PersonB = {
    name: 'test'
  }

  // NewTest.name = 'test1'  // Error  -> readonly
  /**
   * 只读属性⽤于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了
    ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变⽅法去掉了，因此可以确保数组创
    建后再也不能被修改。
   */

  let a: number[] = [1, 2, 3];
  let ro: ReadonlyArray<number> = a;   // 自读数组  ro

  // ro[0]  = 123;   // Error
  // a = ro;  // Error   不可逆

  // 10.3 任意属性
  /**
   * 有时候我们希望⼀个接⼝中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使
    ⽤ 索引签名 的形式来满⾜上述要求
   */
  interface PersonC {
    name: string;
    age?: number;
    [propName: string]: any;   // 允许有其他的任意属性
  }
  const p1: PersonC = { name: "semlinker" };
  const p2: PersonC = { name: "lolo", age: 5 };
  const p3: PersonC = { name: "kakuqo", sex: 1 }



  // 10.4 接⼝与类型别名的区别

  // 接⼝和类型别名都可以⽤来描述对象的形状或函数签名：
  // 接口
  interface Point {
    x: number;  // Object
    y: number
  }

  interface SetPoint { // Function 
    (x: number, y: number): void
  }

  // 类型别名
  type PointB = {
    x: number;
    y: number;
  }
  type SetPointB = (x: number, y: number) => void

  // 区别：  接口可以合并， type 不能合并，但是可以使用 & 交叉使用


  // 与接⼝类型不⼀样，类型别名可以⽤于⼀些其他类型，⽐如原始类型、联合类型和元组：
  type Name = string;

  type PartialPointX = { x: number }
  type PartialPointY = { y: number }

  // 交叉
  type PartialPoint = PartialPointX & PartialPointY

  type Data = [number, string]; // 声明的元组


  // extends 关键字
  /**
   * 接⼝和类型别名都能够被扩展，但语法有所不同。此外，接⼝和类型别名不是互斥的。接⼝可以扩展类
      型别名，⽽反过来是不⾏的。
   */

  interface PartialPointXA { x: number }
  interface Point extends PartialPointXA { y: number }  // 就是 接口的 联合声明

  type PartialPointXB = { x: number; };
  type PointC = PartialPointXB & { y: number }  // 这就是type 的联合声明 

  // extends  和 &   可以使用 type 和 interface 联合使用
  type PartialPointT = { x: number; };
  interface PointT extends PartialPointT { y: number }


  // 4. Implements 
  // 类可以以相同的⽅式实现接⼝或类型别名，但类不能实现使⽤类型别名定义的联合类型： 
  // implements 使用在类中， 限制类的属性方法声明

  interface PointClass {
    x: number
    y: number
  }
  class SomePoint implements PointClass {
    x: number;
    y: number
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

  }

  //  
  type Point2 = {
    x: number;
    y: number;
  };
  class SomePoint2 implements Point2 {
    x = 1;
    y = 2;
  }

  // type PartialPointB = { x: number } | { y: number };
  // class SomePartialPointC implements PartialPointB { // Error, 但类不能实现使⽤类型别名定义的联合类型：  type 的 | 和 & 这些联合声明 
  //   x = 1;
  //   y = 2;
  // }


  // 与类型别名不同，接⼝可以定义多次，会被⾃动合并为单个接⼝。

  interface A {
    x: number;
  }
  interface A {
    y: number;
  }

  const testA: A = { x: 1, y: 123 }
})()
