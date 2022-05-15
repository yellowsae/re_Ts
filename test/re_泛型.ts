(() => {
  // re_泛型


  // 1. 认识泛型
  function identity<T>(value: T): T {
    return value
  }
  identity<number>(123)
  // <T> 我们可以把他当做一个占位符，其中 T 代表的是类型变量，当调用函数的时候再传入对应的类型。

  /**
   * 为什么是 T ? 难道不能是其他的字母或者单词吗？
   * 当然可以 可以使任意单词或者字母，只要语义化清晰即可。建议首字母大写。当然 T 并不是毫无道理。
   * 
   *  T ： 代表 Type 在定义泛型时通常用作第一个类型变量名称.
   *  K ： 表示对象中的 key 类型。
   *  V ： 表示对象中的 value 类型。
   *  E ： 表示 Element 元素类型。
   */

  //  当然也可以定义多个泛型参数。
  function identityB<T, U>(value: T, message: U): T {
    console.log(message);
    return value
  }

  identityB<number, string>(1, 'message');  // 这里number 对应T,  string对应message



  // 2. 泛型默认类型
  // 当使用泛型时可以给其指定默认类型，这样当调用时没有指定类型就会使用默认类型。
  function identityC<T = string, U = number>(value: T, message: U): T {
    console.log(message);
    return value
  }
  identityC('123', 123) // 函数调用没有指定泛型
  identityC<number, string>(123, '123')  // 指定泛型



  // 3 泛型类型别名
  // 经过上面对泛型的了解，下面就研究一下泛型相关的语法以及特性。
  type identityType<T, U> = (value: T, message: U) => T;

  type identityType1<T, U> = {
    (value: T, message: U): T
  }

  // 使用泛型
  // 
  let identityA: identityType<string, number> = function (value, message) {
    console.log(message)
    return value
  }

  let identityTypeB: identityType1<string, number> = function (value, message) {
    console.log(message)
    return value
  }

  // 对象泛型的声明方式
  type userType<T> = { name: T, age: number }
  let user: userType<string> = {
    name: 'Yelllowsea',
    age: 123
  }


  // 4. 泛型接口
  // 个人理解：泛型接口包含两类，一种是接口使用泛型，一级一级的向下传递类型；第二种则是单独给某个属性定义泛型。只有调用该属性时才去指定类型。
  interface IUser<T, U> {
    name: T;
    eat(food: U): U
  }
  const userA: IUser<string, string> = {
    name: "Yelllowsea",
    eat(value: string): string {
      return value;
    }
  }
  console.log(userA.eat('xxx'));


  // 第二种方式 注意：在内部使用泛型 仅限于方法。
  interface IPerson {
    name: string;
    // 对象属性， 为一个箭头函数， 并且使用了泛型
    eat: <T>(food: T) => T
  }

  const personA: IPerson = {
    name: "Yelllowsea",
    eat(value) {
      // 此时会碰到问题，value失去了类型提示。但是又不能指定类型
      return value
    }
  }
  // 调用
  console.log(personA.eat<number>(123))



  // 上面用泛型接口演示了如何描述对象。下面来看下怎样描述函数。

  // 泛型函数
  interface IPersonB {
    // 方法
    <T>(name: T): T
  }

  // 方式一
  const personB: IPersonB = function (value) {
    // 此时会碰到问题，value失去了类型提示。但是又不能指定类型
    return value
  }
  personB<string>('Yellowsea');

  // 方式二
  interface IUserB<T> {
    (name: T): T
  }
  const userB: IUserB<string> = function (value) {
    return value
  }
  userB('Yellowsea')

  
})()
