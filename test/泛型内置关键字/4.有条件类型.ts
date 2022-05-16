(() => {

  // 有条件类型

  // T extends U ? X : Y 从语法的格式来看，能不能按照三元表达式来理解呢？答案是肯定可以的。

  type typeName<T> = T extends string ? 'string' : T extends number ? 'number' : never

  type T0 = typeName<string>;  // string
  type T1 = typeName<number>; // number
  type T2 = typeName<boolean>; // never

  // 分布式条件类型
  type T3 = typeName<string | number>; // 'string' | 'number' 内部类似于迭代了这个联合类型逐个解析最终变成联合类

  type typeNameA<T, U> = T extends U ? T : never;
  type unioType = typeNameA<'a' | 'b'| 'd', 'a' | 'b' | 'c'>; // 'a' | 'b' 字面量类型。不要混淆成值。

  /**
   * 表达式 T 存在于 U 返回 T
   * T extends U  ->  T 要满足U的存在属性
   * 把 T 进行迭代 'a' 和 'b' 分别存在于 U 中，直接返回 d 不存在也就不处理了。
   */

  //  再比如我们想要获取一个接口类型中的函数名，属性名？
  interface IUser {
    name: string;
    age: number;
    eat(): void;
  }

  type FunctionProperty<T> = { [K in keyof T]: T[K] extends Function ? K : any}
  //  [K in keyof T]  ->  keyof T 遍历 T 中的所有属性;    K in : 将遍历得到的 属性保存到 K泛型中

  // [K in keyof T] 类型为 T[K] extends Function ? K : never

  // T[K] extends Function ? K : never   ->   T[K] 表示: IUser['name']
  
  // IUser['name']  extends  Function   某个属性是否属于 Function 函数;  是就返回 K (某个属性) 不是就返回 never


  type TypeTest = FunctionProperty<IUser>   //  得到  eat 字面量
  /**
   * type TypeTest = {
        name: never;
        age: never;
        eat: "eat";  // 返回的 K 就是 属性名 eat
    }
   */
  const test: TypeTest = {
    name: 'test', 
    age: 123 ,
    eat: 'eat'  // 必须是  值 eat
  }


  // 经过运算得到一下类型。
  type TA = { name: never; age: never; eat: 'eat' };
  // 第四步解析  索引取值
  type TB = keyof TA
  
  const testIndex: TB = 'age' // Success
})()
