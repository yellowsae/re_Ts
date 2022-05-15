(() => {
  // 关键字 (keyof) 索引类型查询操作符

  // keyof 此操作符会迭代被操作对象，取出其中的 key 作为字面量联合类型。
  // 查找的方式会进入原型，但是被 static protected private 修饰的属性或者方法不会被查找。

  // 需要注意的是像 null undefined 这些类型会推断出来 never，因为他只是一个值类型。


  // keyof 找出 接口|对象|类 中的属性；  遍历查找,  并赋值给  

  // 注意： 接口继承类的时候是所有的属性和方法都会被继承的。

  class User {
    name!: string;
    protected age!: number;
    private smoking!: string;
    static sex: string;
    eat() { }
  }

  type nType = keyof null; // never  -> null 会被 keyof 推断出为 never
  type uType = keyof undefined; // never -> undefined 会被 keyof 推断出为 never
  type UserType = keyof User;  // 'name' | 'eat'
  // type objType = keyof { name: string; age: number }; // 'name' | 'age'
  type strType = keyof string; // 'toString' | 'charAt' | ...
  type numType = keyof number; // 'toString' | 'toFixed' | ...
  type boolType = keyof boolean; // 'valueOf'


  // 索引类型
  // 在了解索引类型之前，先看一个 索引访问。假设现在有以下类型，我们想知道某个属性的类型。

  type objType = { name: string, age: number }
  // T[K] 此种访问方式被称为索引访问。
  type nameType = objType['name'];  // string 
  // 个人理解：索引类型其实就是 索引类型查询 和 索引访问 的结合。


  // 假设有需求，实现一个函数，该函数接收一个对象和数组，可以根据数组中的 key 来获取对象中对应 key 的 value
  function getValue(obj: object, arr: string[]) {
    // 可以看出用到了类型断言，来防止语法报错。
    return arr.map(item => (obj as any)[item])
  }
  const obj = { name: 'test', age: 123 };
  const arr = ['name', 'age']
  console.log(getValue(obj, arr))  // [ 'test', 123 ]

  // 虽然实现了功能，但是并不合理，也不通用。
  function getValueNew<T, K extends keyof T>(obj: T, arr: K[]): T[K][] { // T[K]: obj['name']  [] 表示数组
    return arr.map(item => obj[item])
  }

  console.log(getValueNew({ name: 'test', age: 123 }, ['name', 'age']))

  /**
   * <T, K extends keyof T> ： keyof T 获取 T 类型的字面量联合类型，K extends 表示 K 必须来自 T 类型的字面量联合类型。
   * T[K][] ： 相比较 T[K] 而言 obj['name'] 更容易理解。最后一个 [] 表示数组。
   * 注意错误的信息。函数参数中需要 ("name" | "age")[] 类型。arr 变量却是 string[]。都是类型推导的锅。
   */
  
  // keyof 遍历  T; 将得到的属性赋值给 K


})()
