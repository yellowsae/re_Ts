(() => {
  /**
   * 13.1 装饰器是什么
    它是⼀个表达式
    该表达式被执⾏后，返回⼀个函数
    函数的⼊参分别为 target、name 和 descriptor
    执⾏该函数后，可能返回 descriptor 对象，⽤于配置 target 对象
   */


  // tsconfig.json：

  /**
   * {
      "compilerOptions": {
      "target": "ES5",
      "experimentalDecorators": true   // 开启装饰器
      }
    }
   */

  // declare type ClassDescriptor = <TFunction extends Function>(
  //   target: TFunction,
  // ) => TFunction | void


  function Greeter(target: Function): void {
    target.prototype.greeter = function (): void {
      console.log("Hello World")
    }
  }
  @Greeter
  class Greeting {
    constructor() {
      
    }
  }
})()
