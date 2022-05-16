(() => {
  // Required 
  // 返回一个新的全部属性必选的类型。 

  /**
  * Make all properties in T required
  * 使 T 中的所有属性成为必需
  */

  type Required<T> = {
    [P in keyof T]-? : T[P]   // T[P] 表示属性值
  }

  // -? 表示移除可选属性。

  interface User {
    name?: string;
    age?: number;
  }

  type RequiredUser = Required<User> // { name: string, age: number }
})()
