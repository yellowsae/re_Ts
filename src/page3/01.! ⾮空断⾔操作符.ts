(() => {
  // ! ⾮空断⾔操作符

  /**
   * 在上下⽂中当类型检查器⽆法断定类型时，⼀个新的后缀表达式操作符 ! 可以⽤于断⾔操作对象是⾮
   * null 和⾮ undefined 类型。具体⽽⾔，x! 将从 x 值域中排除 null 和 undefined 。
   */

  //  1.1 忽略 undefined 和 null 类型
  function myFunc(maybeString: string | undefined | null) {
    // const onlyString: string = maybeString  // Error， 因为 maybeString 可能时null | undefined 类型
    const ignoreUndefinedAndNull = maybeString!;  // Okay
  }


  // 1.2 调⽤函数时忽略 undefined 类型
  type NumGenerator = () => number;

  function myFuncB(numGenerator: NumGenerator | undefined) {
    // const num1 = numGenerator();  // Error  numGenerator() 对象可能未定义
    const num2 = numGenerator!();   // Ok 
  }

  //   因为 ! ⾮空断⾔操作符会从编译⽣成的 JavaScript 代码中移除，所以在实际使⽤的过程中，要特别注意
  // 比如
  const a: number | undefined = undefined;
  const b: number = a!;  // 能够赋值
  console.log(b);  // undefined



  // 1.3 确定赋值断⾔
  // 在 TypeScript 2.7 版本中引⼊了确定赋值断⾔，即允许在实例属性和变量声明后⾯放置⼀个 ! 号，从⽽
  // 告诉 TypeScript 该属性会被明确地赋值。


  let x!: number;  // 确定赋值断⾔
  initialize();
  console.log(2 * x);  // 在没有给 x加! 时， Error;     let x!: number; 后， 确定x是必须赋值的 
  function initialize(){
    x = 10
  }


  
})()
