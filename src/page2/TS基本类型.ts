(() => {
  // 2.1 Boolean 类型
  let isDone: boolean = false;

  // 2.2 Number 类型
  let count: number = 10;

  // 2.3 String 类型
  let name: string = 'Yellowsea';

  // 2.4 Symbol 类型
  // const sym = Symbol();
  // let obj = {
  //   [sym]: "Yellowsea"
  // }
  // console.log(obj[sym]);

  // 2.5 Array 类型
  let list: number[] = [1, 2, 3];

  let listB: Array<number> = [1, 2, 3]; // Array<number>泛型语法

  // 2.6 Enum 类型
  // 使⽤枚举我们可以定义⼀些带名字的常量。 使⽤枚举可以清晰地表达意图或创建⼀组有区别的⽤例。
  // TypeScript ⽀持数字的和基于字符串的枚举。

  // 数字枚举
  enum Direction {
    NORTH = 3,  // 如果设置为3，之后的值就是按照3之后排列下去
    SOUTH,
    EAST,
    WEST,
  }
  let dir: Direction = Direction.EAST;
  console.log(dir); // 3 按照下标

  // 字符串枚举
  enum DirectionB {
    NORTH = "NORTH",
    SOUTH = "SOUTH",
    EAST = "EAST",
    WEST = "WEST",
  }
  let dirB: DirectionB = DirectionB.EAST
  console.log(dirB);

  // 常量枚举
  const enum DirectionC {
    NORTH,
    SOUTH,
    EAST,
    WEST,
  }
  let dirC: DirectionC = DirectionC.EAST
  console.log(dirC)



  // 2.7 Any 类型
  // 在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型
  let notSure: any = 666;
  notSure = 'string'
  notSure = false
  /**
   * any 类型本质上是类型系统的⼀个逃逸舱。作为开发者，这给了我们很⼤的⾃由：TypeScript 允许我们
对 any 类型的值执⾏任何操作，⽽⽆需事先执⾏任何形式的检查
   */
  // let value: any;
  // value.foo.bar; // 
  // value.trim(); // 
  // value();
  // new value();
  // value[0][1];

  /**
   * any 的缺陷： 
   * 使⽤ any 类型，可以很容易地编写类型正确但在运⾏时有问题的代码。
   * 如果我们使⽤ any 类型，就⽆法使⽤ TypeScript 提供的⼤量的保护机制。
   */


  // 2.8 Unknown 类型
  // 就像所有类型都可以赋值给 any ，所有类型也都可以赋值给 unknown
  let valueB: unknown;
  valueB = "valueB"
  valueB = true
  // 设置 unknown 所有赋值都是正确的
  // 但是 unknown 赋值给其他类型时

  let value1: unknown = valueB; // Okay
  let value2: any = valueB  // Okay
  // let value3: string  = valueB  // Error
  // let value4: number = valueB; // Error

  /**
   * unknown 类型只能被赋值给 any 类型和 unknown 类型本身
   * 直观地说，这是有道理的：只有能够保
    存任意类型值的容器才能保存 unknown 类型的值。毕竟我们不知道变量 value 中存储了什么类型的
    值。
   */

  // 2.9 元组
  /**
   * 众所周知，数组⼀般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我
    们就可以使⽤元组。在 JavaScript 中是没有元组的，元组是 TypeScript 中特有的类型，其⼯作⽅式类似
    于数组。
   */
  // 确定变量， 确定长度的数组
  let tupleType: [string, number]
  tupleType = ['test', 123]

  // 通过下标来访问
  console.log(tupleType[0])
  console.log(tupleType[1])


  // 2.10 Void 类型
  // void 类型像是与 any 类型相反，它表示没有任何类型。当⼀个函数没有返回值时，你
  // 通常会⻅到其返回值类型是 void
  function warnUser(): void {
    console.log('This is my warning message')
  }

  // 需要注意：声明⼀个 void 类型的变量没有什么作⽤，因为在严格模式下，它的值只能为 undefined
  let unusable: void = undefined;


  // 2.11 Null 和 Undefined 类型
  // undefined 和 null 两者有各⾃的类型分别为 undefined 和 null 。
  let u: undefined = undefined;
  let n: null = null;


  // 2.12 object, Object 和 {} 类型

  // object 类型
  // object 类型是：TypeScript 2.2 引⼊的新类型，它⽤于表示⾮原始类型。
  interface ObjectConstructor {
    create(o: object | null): any
  }
  const proto = {}
  Object.create(proto);
  Object.create(null); // Okay
  // Object.create(undefined); // Error


  // Object 类型
  // Object 类型：它是所有 Object 类的实例的类型，它由以下两个接⼝来定义：
  //Object 接⼝定义了 Object.prototype 原型对象上的属性；
  interface Object {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    // ...
  }


  // 接⼝定义了 Object 类的属性。
  interface ObjectConstructor {
    new(value?: any): Object
    (value?: any): any;
    readonly prototype: Object
    getPropertypeOf(o: any): any
  }

  // declare var Object: ObjectConstructor;

  //{} 类型
  // {} 类型描述了⼀个没有成员的对象。当你试图访问这样⼀个对象的任意属性时，TypeScript 会产⽣⼀个
  // 编译时错误。
  const obj = {};
  // obj.prop = 'test'; // Error

  // 但是，你仍然可以使⽤在 Object 类型上定义的所有属性和⽅法，这些属性和⽅法可通过 JavaScript 的原
  // 型链隐式地使⽤：
  obj.toString(); //"[object Object]"


  // 2.13 Never 类型
  // never 类型表示的是那些永不存在的值的类型。
  // never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

  function error(message: string):never {
    throw new Error(message);
  }

  function infiniteLoop():never {
    while(true){} // 死循环
  }

  

})()
