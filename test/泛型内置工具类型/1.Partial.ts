(() => {
  // Partial
  // 返回一个新的全部属性可选的类型。


  
  /**
   * Make all properties in T optional
   * 将 T 中的所有属性设为可选
   */

  type Partial<T> = {
    [P in keyof T]?: T[P];  // 类型为 T[P]
  }
  // 通过 keyof T 获取 T 的字面量联合类型； xxx |  xxx | xxx
  // 通过 in 遍历这个类型让 P 变成 T 的 key；  in  遍历 xxx |  xxx | xxx  -> 赋值为 P
  // 通过 T[P] 取出原来 T 中的 value；    T[P]  取出 T[xxx] 的 value
  // ?: 表示可选属性;   将 T所有属性转为 可选的


  interface User {
    name: string;
    age: number;
  }

  type PartialUser  = Partial<User>; //     name?: string | undefined;   age?: number | undefined;
  


})()
