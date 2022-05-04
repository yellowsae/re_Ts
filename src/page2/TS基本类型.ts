(() => {
  // 2.1 Boolean 类型
  let isDone: boolean = false;

  // 2.2 Number 类型
  let count: number = 10;

  // 2.3 String 类型
  let name: string = 'Yellowsea';

  // 2.4 Symbol 类型
  const sym = Symbol();
  let obj = {
    [sym]: "Yellowsea"
  }
  console.log(obj[sym]);

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
  let value: any;
  value.foo.bar; // 
  value.trim(); // 
  value();
  new value();
  value[0][1];

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
})()
