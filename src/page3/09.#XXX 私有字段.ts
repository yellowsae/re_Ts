(() => {
  // #XXX 私有字段
  class Person {
    #name: string  // 这里报错

    constructor(name: string) {
      this.#name = name; 
    }

    green() {
      console.log(`Hello, my name is ${this.#name}!`);
    }
  }

  let semlinker = new Person("Semlinker");
  // semlinker.#name;   不能访问 name 属性
  semlinker.green(); // 不能访问到 #name

  /**
   * #xxx 私有字段 与常规属性（甚⾄使⽤ private 修饰符声明的属性）不同，私有字段要牢记以下规则：
   * 私有字段以 # 字符开头，有时我们称之为私有名称；
    每个私有字段名称都唯⼀地限定于其包含的类；
    不能在私有字段上使⽤ TypeScript 可访问性修饰符（如 public 或 private）；
    私有字段不能在包含的类之外访问，甚⾄不能被检测到
   */



  // 9.1 私有字段与 private 的区别

  class PersonB {
    constructor(private name: string) { }
  }
  let person = new PersonB("Semlinker");
  // console.log(person.name);  // Error
  console.log((person as any).name)
  console.log('test')
})
