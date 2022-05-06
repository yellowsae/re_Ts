(() => {
  // 14.1 构造函数的类属性推断
  // 当 noImplicitAny 配置属性被启⽤之后 TypeScript 4.0 就可以使⽤控制流分析来确认类中的属性类型：

  class Person {
    fullName;  // noImplicitAny 开启，  自动分析类型
    firstName;
    lastName;
    constructor(fullName: string) {
      this.fullName = fullName;
      this.firstName = fullName.split(' ')[0];
      this.lastName = fullName.split(' ')[1]
    }
  }


  // 14.2 标记的元组元素
  function addPerson(...args: [string, number]): void {
    console.log(`Person info: name: ${args[0]}, age: ${args[1]}`)
  }
  addPerson("lolo", 12)
})()
