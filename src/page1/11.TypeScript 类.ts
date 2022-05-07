(() => {

  // 11.1   类的属性与方法
  // 在⾯向对象语⾔中，类是⼀种⾯向对象计算机编程语⾔的构造，是创建对象的蓝图，描述了所创建的对
  // 象共同的属性和⽅法。

  // TS 定义类
  class Greeter {
    // 静态属性
    static cname: string = 'Greeter'

    // 成员属性
    greeting: string;

    // 构造函数 
    constructor(message: string) {
      this.greeting = message;
    }

    // 静态方法
    static getClassName() {
      return "Class name is Greeter";
    }

    // 成员方法
    greet() {
      return "Hello, " + this.greeting;
    }
  }

  // 实例化
  let greeter = new Greeter("world");
  // console.log(greeter.getClassName());  // Error， 访问不了静态方法
  console.log(greeter.greet());
  // console.log(greeter.cname);  // 访问不了静态属性
  console.log(greeter.greeting)




  // 11.2 ECMAScript 私有字段
  class Person {
    // 私有属性的定义， 在前面加上 # 
    #name: string;  // 私有字段不能使用 访问修饰符  例如： public private 等关键字
    constructor(name: string) {
      this.#name = name
    }

    // 私有属性自能在当前类中能够访问到， 实例或子类都不能访问
    greet() {
      console.log(`Hello, my name is ${this.#name}!`);
    }

  }
  let semlinker = new Person("Semlinker");
  // semlinker.#name   // 不能访问
  semlinker.greet()  // 内部方法能够访问到私有属性
  /**
   * 与常规属性（甚⾄使⽤ private 修饰符声明的属性）不同，私有字段要牢记以下规则：
    私有字段以 # 字符开头，有时我们称之为私有名称；
    每个私有字段名称都唯⼀地限定于其包含的类；
    不能在私有字段上使⽤ TypeScript 可访问性修饰符（如 public 或 private）；
    私有字段不能在包含的类之外访问，甚⾄不能被检测到。
   */


  // 11.3 访问器
  // 在 TypeScript 中，我们可以通过 getter 和 setter ⽅法来实现数据的封装和有效性校验，防⽌出现数据异常
  let passcode = "Hello TypeScript";

  class Employee {
    private _fullName: string;
    constructor(_fullName: string) {
      this._fullName = _fullName
    }

    // 访问器 getter 和 setter 
    get fullName(): string {
      return this._fullName;
    }

    set fullName(newName: string) {
      if (passcode && passcode == 'Hello TypeScript') {
        this._fullName = newName
      } else {
        console.log("Error: Unauthorized update of employee!");
      }
    }
  }

  let employee = new Employee(passcode)
  console.log(employee.fullName)  // 读取
  employee.fullName = 'NewIndex'  // 修改 
  console.log(employee)


  // 11.4 类的继承
  /**
   * 继承（Inheritance）是⼀种联结类与类的层次模型。指的是⼀个类（称为⼦类、⼦接⼝）继承另外的⼀
    个类（称为⽗类、⽗接⼝）的功能，并可以增加它⾃⼰的新功能的能⼒，继承是类与类或者接⼝与接⼝
    之间最常⻅的关系。
   */

  //在 TS中  使用 extends 关键字来实现继承
  class Animal {
    name: string;

    constructor(theName: string) {
      this.name = theName
    }

    // 方法
    move(distanceInMeters: number = 0) {  // 设置默认参数
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  // Snake 继承了 Animal 类
  class Snake extends Animal {
    constructor(name: string) {
      super(name)  // 调⽤⽗类的构造函数  -> super()  方法
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);  // 调用父类的 move() 方法 distanceInMeters = 5 参数
    }
  }

  let sam = new Snake("Sammy the Python");
  sam.move()



  // 11.5 抽象类
  // 使⽤ abstract 关键字声明的类，我们称之为抽象类
  // 抽象类不能被实例化，因为它⾥⾯包含⼀个或多个抽象⽅法。

  // 抽象类
  abstract class PersonB {
    constructor(public name: string) { }

    // 抽象方法
    abstract say(words: string): void
  }

  // let p = new PersonB();    // Error ， 抽象类不能被实例化
  // 抽象类不能被直接实例化，我们只能实例化实现了所有抽象⽅法的⼦类。具体如下所示：

  class Developer extends PersonB {   // 子类继承 父类（抽象类）
    constructor(name: string) {
      super(name);
    }

    // 子类重写父类的抽象方法， 必须要写， 不然会报错
    say(words: string): void {
      console.log(`${this.name} says ${words}`);
    }
  }

  let p2 = new Developer('YellowSea');
  p2.say('test');



  // 11.6 类⽅法重载
  // 和函数重载一样，类方法也支持重载

  class ProductService {
    getProducts(): void;
    getProducts(id: number): void;
    getProducts(id?: number) {
      if (typeof id === 'number') {
        console.log(`获取id为 ${id} 的产品信息`);
      } else {
        console.log(`获取所有的产品信息`);
      }
    }
  }


  const productService = new ProductService();
  productService.getProducts(666); // 获取id为 666 的产品信息
  productService.getProducts(); // 获取所有的产品信息
})()
