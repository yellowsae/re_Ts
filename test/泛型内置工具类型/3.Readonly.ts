(() => {
  // Readonly

  // 返回一个新的全部属性只读的类型。

  type Readonly<T> = {
    readonly [P in keyof T]: T[P]  //   T[P] 
  }

  interface User {
    name: string
    age: number
  }

  type ReadonlyUser = Readonly<User> // {    readonly name: string;readonly age: number;}


  // Readonly 是一个工具类型，也可以使用断言来代替它的工作 as const 表示该变量为一个只读变量。
  const user = { name: 'zhangsan', age: 24 } as const; // 只读对象
  // { readonly name: "zhangsan"; readonly age: 24}

  const users = ["zhangsan", 'lisi'] as const; // readonly ["zhangsan", "lisi"]

  const name = "Yellowsea" as const;  // 对于值类型而言这个变量的类型就是这个值。

  // const n = null as const; //  Error 

  //  断言只能用于引用枚举成员、字符串、数字、布尔值、数组或对象文本
  
  // 使用类型断言  as const;  将 xxx 数据变为 只读的


})()
