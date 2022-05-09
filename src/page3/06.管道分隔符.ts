(() => {
  // 在 TypeScript 中联合类型（Union Types）表示取值可以为多种类型中的⼀种，联合类型使⽤ | 分隔每个类型
  const sayHello = (name: string | undefined) => { };  //  联合类型
  sayHello('yellowsea')
  sayHello(undefined)

  let num: 1 | 2 = 1;
  type EventNames = "yellowsea" | 'hidie' | 'pass'


  // 6.1 类型保护

  // 6.1.1  // in 关键字
  // in 可以解析出 接口 中的属性 -> 返回字符串
  interface Admin {
    name: string;
    privileges: string[];
  }

  interface Employee {
    name: string;
    startDate: Date;
  }

  type UnknownEmployee = Admin | Employee

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ("privileges" in emp) {  // in 可以解析出emp里的 属性名
      console.log('privileges' + emp.privileges)
    }
    if ("startDate" in emp) {
      console.log("Start Date: " + emp.startDate);
    }
  }
  printEmployeeInformation({ name: 'Employee', privileges: ['123', '123'] })


  // 6.1.2 typeof 关键字

  function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  // 6.1.3 instanceof 关键字
  interface Padder {
    getPaddingString(): string;
  }
  class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
    }
  }
  class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
      return this.value;
    }
  }
  // 
  // instanceof 原本是在JS中判断XXX是XXX的原型, 在TS中用来确定类型是否相同
  let padder: Padder = new SpaceRepeatingPadder(6);
  if (padder instanceof SpaceRepeatingPadder) {
    // padder的类型收窄为 'SpaceRepeatingPadder'
  }
})()
