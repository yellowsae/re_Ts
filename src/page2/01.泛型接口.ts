(() => {

  // 泛型接口， 在项目中比较常用
  // 就是定义接口使用 使用 泛型约束 属性类型
  interface Identities<V, M> {
    value: V
    message: M
  }


  function identity<T, U>(value: T, message: U): Identities<T, U> {  // 返回值：  Identities<T,U>
    console.log(value + ": " + typeof (value))
    console.log(message + ": " + typeof (message))

    let identity: Identities<T, U> = {
      value,
      message
    }
    return identity
  }

  console.log(identity(123, "test"))
})()
