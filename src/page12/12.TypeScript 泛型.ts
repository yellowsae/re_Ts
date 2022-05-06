(() => {
  // TypeScript 泛型

  // 泛型（Generics）是允许同⼀个函数接受不同类型参数的⼀种模板。相⽐于使⽤ any 类型，使⽤泛型来
  // 创建可复⽤的组件要更好，因为泛型会保留参数类型。


  //12.1 泛型语法

  function identity<T>(value: T): T {
    return value
  }

  function identityB<T, U>(value: T, message: U): T {
    console.log(message)
    return value
  }

  console.log(identityB<Number, string>(68, "Semlinker"));

  // 除了为类型变量显式设定值之外，⼀种更常⻅的做法是使编译器⾃动选择这些类型，从⽽使代码更简
  // 洁。我们可以完全省略尖括号，⽐如：
  console.log(identityB(68, "Semlinker"));  // 泛型自动解析参数类型



  // 12.2 泛型接⼝
  interface GenericIdentityFn<T> {
    (arg: T): T  // 函数， T
  }

  let fn: GenericIdentityFn<number> = function (arg: number): number {
    return arg;
  }
  console.log(fn(123))



  // 12.3 泛型类

  class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  console.log(myGenericNumber.zeroValue = 0)
  myGenericNumber.add = function (x, y) {
    return x + y
  }



  // 12.4 泛型⼯具类型
  //1.typeof
  interface Person {
    name: string
    age: number
  }

  const sem: Person = { name: 'yellowsea', age: 123 }

  type Sem = typeof sem; // -> Person

  function toArray(x: number): Array<number> {
    return [x];
  }

  type Func = typeof toArray; // -> (x: number) => number[]

  // 2. keyof 该操作符可以⽤于获取某种类型的所有键，其返回类型是联合类型。
  type K1 = keyof Person;    // // "name" | "age"
  type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
  type K3 = keyof { [x: string]: Person }; // string | number


  // 3. in  ⽤来遍历枚举类型
  type Keys = "a" | "b" | "c"
  type obj = {
    [p in Keys]: any
  }  // -> { a: any, b: any, c: any }


  // 4. infer
  // infer在条件类型语句中，可以⽤ infer 声明⼀个类型变量并且对它进⾏使⽤。
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;


  // 5. extends 继承某些定义
  // 有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。
  interface LengthWise {
    length: number
  }

  function loggingIdentity<T extends LengthWise>(arg: T): T {
    // 泛型T 继承了  LengthWise，接口
    console.log(arg.length)
    return arg
  }
  // loggingIdentity(3) // Error  ， 3 number 类型， 没有 length属性

  loggingIdentity('testtesttest')

  

})()
