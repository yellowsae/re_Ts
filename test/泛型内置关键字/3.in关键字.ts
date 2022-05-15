(() => {
  // 映射类型 (in)
  // 在某些情况下我们可能需要把某些旧类型变成我们需要的新类型。
  interface User {
    name: string;
    age: number;
  }
  // 如果我们想把 User 变成可以变成可选类型，重写一次显然不合适。
  // 此时可以使用 in 操作符来将 User 变成可选类型。此处可以按照 for...in 遍历 理解

  // in 表示使用 for...in 变量
  type UserReadonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  const user: UserReadonly<User> = {
    name: 'test',
    age: 123
  }

  // user.age = 213; // Error

})()
