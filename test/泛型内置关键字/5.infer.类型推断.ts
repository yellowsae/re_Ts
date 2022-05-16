(() => {

  // 推断类型 (infer)

  /**
   * 有条件类型中允许出现 infer 推断类型。它会引入一个待推断的变量，这个推断类型可以在有条件类型中的
   *  true 分支中被引用，允许出现多个同类型变量的 infer。
   */

  //  假设我们要获取一个函数的参数类型。可以这样做

  type ParamType<T> = T extends (arg: infer P) => void ? P : never;
  type FunctionType = ParamType<(arg: string) => void>; // string

  type ReturnType<T> = T extends (...arg: any[]) => infer R ? R : any;

  type FunctionTypeB = ReturnType<([1,2,3])>

})()
