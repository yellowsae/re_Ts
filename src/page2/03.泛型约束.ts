(() => {
  // 4.1 确保属性存在

  // 例子： 

  // 添加 Length 接口
  interface Length {
    length: number;
  }

  function identity<T extends Length>(arg: T): T {
    console.log(arg.length);  // Error  T上不存在属性 length 
    return arg;
  }
  // 编译器将不会知道 T 确实含有 length 属性
  // 我们需要做的就是让类型变量 extends ⼀个含有我们所需属性的接⼝
  // 在 T 使用 T extends Length ， 继承接口， 这样就可以保证 属性确实存在


  // identity(68);  // Error，  number 类型没有 length 属性
  identity("test");


  // 如果我们显式地将变量设置为数组类型，也可以解决该问题，

  function identityB<T>(arg: T[]): T[] { // 使用数组泛型
    console.log(arg.length);  // 因为数组必有 length 属性
    return arg
  }
  console.log(identityB([12, 3, 5123]))

  // or
  function identityC<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // 因为数组必有 length 属性
    return arg
  }



  // 4.2 检查对象上的键是否存在

  //   keyof 操作符是在 TypeScript 2.1 版本引⼊的，该操作符可以⽤于获取某种类型的所有键，其返回类型是联合类型。
  interface Person {
    name: string
    age: number
    location: string
  }
  type K1 = keyof Person;// "name" | "age" | "location"
  type K2 = keyof Person[]; // number | "length" | "push" | "concat" | ...
  type K3 = keyof { [x: string]: Person }; // string | number

  // 通过 keyof 操作符，我们就可以获取指定类型的所有键
  // 之后我们就可以结合前⾯介绍的 extends 约束，即限制输⼊的属性名包含在 keyof 返回的联合类型中

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
})()
