(() => {

  // 有条件类型

  // T extends U ? X : Y 从语法的格式来看，能不能按照三元表达式来理解呢？答案是肯定可以的。

  type typeName<T> = T extends string ? 'string' : T extends number ? 'number' : never

  type T0 = typeName<string>;  // string
  type T1 = typeName<number>; // number
  type T2 = typeName<boolean>; // never

  // 分布式条件类型
  type T3 = typeName<string | number>; // 'string' | 'number' 内部类似于迭代了这个联合类型逐个解析最终变成联合类


})()
