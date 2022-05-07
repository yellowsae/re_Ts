(() => {
  // 类型保护是可执⾏运⾏时检查的⼀种表达式，⽤于确保该类型在⼀定的范围内。

  //4.1in 关键字
  interface Admin {
    name: string;
    privileges: string[];
  }

  interface Employee {
    name: string;
    startDate: Date;
  }

  type UnknownEmployee = Admin | Employee;

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name" + emp.name);
    if ("privileges" in emp) {  // 使用 in 关键字
      console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
      console.log("startDate : " + emp.startDate)
    }
  }

  //4.2 typeof 关键字

  function padLeft(value: string, padding: string|number) {
    if (typeof padding === 'number') {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === 'string') {
      return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  // 4.3 instanceof 关键字

  interface Padder {
    getPaddingString(): string  //  函数 和返回值
  }

  class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
      return Array(this.numSpaces + 1).join(' ')
    }
  }

  class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString() {
      return this.value
    }
  }

  let padding: Padder = new SpaceRepeatingPadder(2);
  if (padding instanceof SpaceRepeatingPadder) {
    console.log(padding instanceof SpaceRepeatingPadder)  // true
  }


  // 4.4 ⾃定义类型保护的类型谓词
  function isNumber(x:any): x is number {
    return typeof x === 'number'
  }
  function isString(x: any): x is string {
    return typeof x === 'string'
  }

  
})()
