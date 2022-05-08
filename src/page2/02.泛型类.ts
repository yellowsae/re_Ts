(() => {

  // 使用泛型约束类 
  // 项目中常见
  //  class xxx implements interfaceName<T>

  
  interface GenericInterface<U> {
    value: U
    getIdentity: () => U
  }
  // 类中使用自己的泛型T， 使用 implements 关键字  使用定义的接口GenericInterface
  //  GenericInterface 接口指定的泛型类型为 T，相当于 类 和 接口使用同一种类型
  class IdentityClass<T> implements GenericInterface<T> {
    value: T
    constructor(value: T) {
      this.value = value
    }
    getIdentity() {
      return this.value
    }
  }
  // 使用类时，需要指定类型, 也就是 泛型类 <T> 的类型 ->  <number>
  const myNumberClass = new IdentityClass<number>(68);
  console.log(myNumberClass.getIdentity())

  const myStringClass = new IdentityClass<string>("Semlinker!");
  console.log(myStringClass.getIdentity())
  
  /**
   * IdentityClass 类实现了 GenericInterface<T> ，⽽此时 T 表示 Number 类型，
   * 因此等价于该类实现了 GenericInterface<Number> 接⼝；
   * 
   * 
   */
})()
