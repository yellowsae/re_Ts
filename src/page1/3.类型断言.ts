(function () {
  // TS 的类型断言
  // 类型断言简单来说就是，告诉编译器自己确定的某个变量的类型


  // 1. 尖括号 <> 语法
  let someValue: any = 'this is a someValue'
  let someLength: number = (<string>someValue).length

  console.log(someLength)

  // 2. as 语法
  let someValueB: any = 'this is someValue';
  let someLengthB: number = (someValue as string).length



  // 3. ⾮空断⾔
  /**
   * 在上下⽂中当类型检查器⽆法断定类型时，⼀个新的后缀表达式操作符 ! 可以⽤于断⾔操作对象是⾮
   * null 和⾮ undefined 类型。具体⽽⾔，x! 将从 x 值域中排除 null 和 undefined 。
   */
  // 3.1 忽略 undefined 和 null 类型
  function myFunc(maybeString:string | null | undefined) {
    // const onlyString: string = maybeString // Error
    const onlyString: string = maybeString!;  // Okay        
  }


  //3.2 调⽤函数时忽略 undefined 类型
  type NumGenerator = () => number;
  function myFu(numGenerator: NumGenerator | undefined) {
    // const num1 = numGenerator(); // Error 对象可能未定义
    const num2 = numGenerator!();
  }


  // 4. 确定赋值断⾔

  let x!:number;
  initialize();
  console.log(2 * x); // Error 赋值前使用了 x , 加上  let x!:number; 解决问题
  function initialize() {
    x = 12;
  }
})()
