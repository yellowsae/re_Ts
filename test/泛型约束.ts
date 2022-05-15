(() => {
  // 泛型约束
  // 有时候我们需要操作泛型参数，但事实上参数的类型只有在调用的时候才会传入。这也就造成了我们在传入之前操作会出现一些错误

  // function getLength<T>(value: T): number {
  //   return value.length;  //  Error 类型“T”上不存在属性“length”
  // }
  // 此时的解决方案可以是类型断言，结合现在的主题来尝试使用一下泛型约束。

  interface ILength {
    length: number;
  }
  // <T extends ILength>   extends 表示 T 必须符合 ILength 这个接口
  function getLength<T extends ILength>(value: T): number {
    return value.length;  //  解决了 必要的 length 属性
  }

  
})()
