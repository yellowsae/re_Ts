(() => {
  // 给泛型设置默认的参数

  // <T=Default Type>

  interface A<T = string> {
    name: T
  }
  // 没有指定 A 泛型的类型，默认就使用了 string
  const strA: A = {name: '123'};

  // 制定了 泛型 T 的类型为 number 类型
  const strB: A<number> = {name: 123};

  /**
   * 泛型参数的默认类型遵循以下规则：
      有默认类型的类型参数被认为是可选的。
      必选的类型参数不能在可选的类型参数后。
      如果类型参数有约束，类型参数的默认类型必须满⾜这个约束。
      当指定类型实参时，你只需要指定必选类型参数的类型实参。 未指定的类型参数会被解析为它们的默认类型。
      如果指定了默认类型，且类型推断⽆法选择⼀个候选类型，那么将使⽤默认类型作为推断结果。
      ⼀个被现有类或接⼝合并的类或者接⼝的声明可以为现有类型参数引⼊默认类型。
   */
})()
