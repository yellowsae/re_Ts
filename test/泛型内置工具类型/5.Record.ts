(() => {
  // Record
  // 构造一个 key 为 string | number | symbol 类型，value 为任意类型的对象。

  /**
   * Construct a type with a set of properties K of type T
   * 构造一个具有一组 T 类型的属性 K 的类型
   */

  type Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // keyof any 这里比较容易引起误解，它的返回类型实际是 string | number | symbol 的联合类型。所以 P 是这三种类型之一。

  interface User {
    name: string
    age: number
  }

  // 传递第一个参数为 'name' | 'age' 的字面量联合类型
  type UserRecord = Record<keyof User, User>; // { name: User, age: User }


  
})()
