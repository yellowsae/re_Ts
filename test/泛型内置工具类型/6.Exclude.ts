(() => {
  // Exclude
  // 排除一个联合类型中的某一些类型。


  /**
   * Exclude from T those types that are assignable to U
   * 从 T 中排除那些可分配给 U 的类型
   */

  type Exclude<T, U> = T extends U ? never : T

  type unionUser = 'name' | 'username'

  type UserExclude = Exclude<unionUser, 'name'>  // "username"

})
