(() => {
  // 泛型条件类型

  // T extends U ? X : Y
  // 以上表达式的意思是：若 T 能够赋值给 U ，那么类型是 X ，否则为 Y
  // 常还会结合 infer 关键字，实现类型抽取：
  interface Dictionary<T = any> {
    [key: string]: T
  }

  type StrDict = Dictionary<string>

  type DictMethod<T> = T extends Dictionary<infer V> ? V : never

  type StrDictMember = DictMethod<StrDict> // string

  // 当类型 T 满⾜ T extends Dictionary 约束时，我们会使⽤ infer 关键字声明了⼀个类型变量 V，并返回该类型，否则返回 never 类型。


  // 应用
  async function stringPromise() {
    // 返回值是一个 string
    return "Hello, Semlinker!";
  }

  interface Person {
    name: string
    age: number
  }

  async function personPromise() {
    // 返回的时 Person
    // 使用了类型断言
    return { name: "Yellowsea", age: 123 } as Person
  }

  // 定义一个类型，指定一个函数，返回值是一个 Promise 对象
  type PromiseType<T> = (args: any[]) => Promise<T>

  // T  满⾜ T extends PromiseType<U> 约束时,  使用 U -> U就是 Promise 对象的返回值
  type UnPromisify<T> = T extends PromiseType<infer U> ? U : never


  // 分别调用 UnPromisify， 用来返回类型， 使用 typeof 调用函数 -> 第一次见
  type extractStringPromise = UnPromisify<typeof stringPromise>  // string 
  type extractPersonPromise = UnPromisify<typeof personPromise>  // Person

})()
